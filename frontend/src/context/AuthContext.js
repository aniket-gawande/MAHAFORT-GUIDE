import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const OFFLINE_USERS_KEY = 'mahafort_offline_users';
const OFFLINE_USER_KEY = 'mahafort_offline_user';

// ─── Offline Auth Helpers (localStorage fallback when backend is down) ───
const getOfflineUsers = () => {
    try {
        return JSON.parse(localStorage.getItem(OFFLINE_USERS_KEY) || '[]');
    } catch { return []; }
};

const saveOfflineUsers = (users) => {
    localStorage.setItem(OFFLINE_USERS_KEY, JSON.stringify(users));
};

const generateOfflineToken = (userId) => {
    // Simple base64 token for offline mode
    return btoa(JSON.stringify({ id: userId, ts: Date.now(), offline: true }));
};

const simpleHash = async (password) => {
    // Use SubtleCrypto for a basic hash (not bcrypt, but fine for offline demo)
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'mahafort_salt_2026');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('mahafort_token'));
    const [loading, setLoading] = useState(true);

    // Set up axios defaults when token changes
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('mahafort_token', token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('mahafort_token');
        }
    }, [token]);

    // Load user from token on app start
    useEffect(() => {
        const loadUser = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            // Check if this is an offline token
            try {
                const decoded = JSON.parse(atob(token));
                if (decoded.offline) {
                    const offlineUser = JSON.parse(localStorage.getItem(OFFLINE_USER_KEY) || 'null');
                    if (offlineUser) {
                        setUser(offlineUser);
                        setLoading(false);
                        return;
                    }
                }
            } catch { /* not an offline token, try backend */ }

            try {
                const response = await axios.get(`${API_URL}/auth/me`, {
                    headers: { Authorization: `Bearer ${token}` },
                    timeout: 4000
                });
                setUser(response.data.user);
            } catch (error) {
                console.warn('Token validation failed, checking offline storage');
                // Try offline user as fallback
                const offlineUser = JSON.parse(localStorage.getItem(OFFLINE_USER_KEY) || 'null');
                if (offlineUser) {
                    setUser(offlineUser);
                } else {
                    setToken(null);
                    setUser(null);
                }
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [token]);

    // Login with email/password
    const login = async (email, password) => {
        // Try backend first
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            }, { timeout: 4000 });

            if (response.data.success) {
                setToken(response.data.token);
                setUser(response.data.user);
                return response.data.user;
            }
        } catch (error) {
            // If backend returned a real error (4xx), throw it
            if (error.response) {
                throw new Error(error.response.data?.message || 'Login failed');
            }
            // Backend unreachable — fall through to offline login
        }

        // Offline fallback
        const users = getOfflineUsers();
        const hashedPwd = await simpleHash(password);
        const found = users.find(u => u.email?.toLowerCase() === email.toLowerCase() && u.password === hashedPwd);

        if (!found) {
            throw new Error('Invalid email or password. Make sure the backend server is running, or register first.');
        }

        const offlineUser = { id: found.id, username: found.username, email: found.email, role: 'warrior', authProvider: 'local' };
        const offlineToken = generateOfflineToken(found.id);
        localStorage.setItem(OFFLINE_USER_KEY, JSON.stringify(offlineUser));
        setToken(offlineToken);
        setUser(offlineUser);
        return offlineUser;
    };

    // Register new user
    const register = async (username, email, password) => {
        // Try backend first
        try {
            const response = await axios.post(`${API_URL}/auth/register`, {
                username,
                email,
                password
            }, { timeout: 4000 });

            if (response.data.success) {
                setToken(response.data.token);
                setUser(response.data.user);
                return response.data.user;
            }
        } catch (error) {
            // If backend returned a real error (4xx), throw it
            if (error.response) {
                throw new Error(error.response.data?.message || 'Registration failed');
            }
            // Backend unreachable — fall through to offline registration
            console.warn('Backend unreachable, using offline registration');
        }

        // Offline fallback — store in localStorage
        const users = getOfflineUsers();

        // Check duplicates
        if (users.some(u => u.email?.toLowerCase() === email.toLowerCase())) {
            throw new Error('Email already registered');
        }
        if (users.some(u => u.username?.toLowerCase() === username.toLowerCase())) {
            throw new Error('Username already taken');
        }

        const hashedPwd = await simpleHash(password);
        const newUser = {
            id: Date.now().toString(36) + Math.random().toString(36).substring(2, 8),
            username,
            email: email.toLowerCase(),
            password: hashedPwd,
            role: 'warrior',
            authProvider: 'local',
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        saveOfflineUsers(users);

        const offlineUser = { id: newUser.id, username: newUser.username, email: newUser.email, role: 'warrior', authProvider: 'local' };
        const offlineToken = generateOfflineToken(newUser.id);
        localStorage.setItem(OFFLINE_USER_KEY, JSON.stringify(offlineUser));
        setToken(offlineToken);
        setUser(offlineUser);
        return offlineUser;
    };

    // Google OAuth login
    const googleLogin = async (credential) => {
        try {
            const response = await axios.post(`${API_URL}/auth/google`, {
                credential
            }, { timeout: 4000 });

            if (response.data.success) {
                setToken(response.data.token);
                setUser(response.data.user);
                return response.data.user;
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Google login failed. Make sure the backend server is running.';
            throw new Error(message);
        }
    };

    // Logout
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('mahafort_token');
        localStorage.removeItem(OFFLINE_USER_KEY);
        delete axios.defaults.headers.common['Authorization'];
    };

    // Check if user is authenticated
    const isAuthenticated = !!user && !!token;

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                isAuthenticated,
                login,
                register,
                googleLogin,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
