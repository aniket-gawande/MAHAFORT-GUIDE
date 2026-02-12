import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

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

            try {
                const response = await axios.get(`${API_URL}/auth/me`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data.user);
            } catch (error) {
                console.error('Token validation failed:', error);
                // Invalid token - clear it
                setToken(null);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [token]);

    // Login with email/password
    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            });

            if (response.data.success) {
                setToken(response.data.token);
                setUser(response.data.user);
                return response.data.user;
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed';
            throw new Error(message);
        }
    };

    // Register new user
    const register = async (username, email, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/register`, {
                username,
                email,
                password
            });

            if (response.data.success) {
                setToken(response.data.token);
                setUser(response.data.user);
                return response.data.user;
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Registration failed';
            throw new Error(message);
        }
    };

    // Google OAuth login
    const googleLogin = async (credential) => {
        try {
            const response = await axios.post(`${API_URL}/auth/google`, {
                credential
            });

            if (response.data.success) {
                setToken(response.data.token);
                setUser(response.data.user);
                return response.data.user;
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Google login failed';
            throw new Error(message);
        }
    };

    // Logout
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('mahafort_token');
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
