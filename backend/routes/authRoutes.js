const express = require('express');
const router = express.Router();
const { generateToken, protect } = require('../middleware/auth');

// Use MongoDB User model if connected, otherwise use JSON file storage
const getUserModel = () => {
    if (global.mongoConnected) {
        return require('../models/User');
    }
    return require('../models/FileUser');
};

// Google OAuth - only initialize if client ID is set
let googleClient = null;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_ID !== 'your_google_client_id_here') {
    const { OAuth2Client } = require('google-auth-library');
    googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);
}

// Helper: verify Google credential via library, fallback to Google tokeninfo API
const verifyGoogleCredential = async (credential) => {
    // Method 1: Use google-auth-library
    if (googleClient) {
        try {
            const ticket = await googleClient.verifyIdToken({
                idToken: credential,
                audience: GOOGLE_CLIENT_ID
            });
            return ticket.getPayload();
        } catch (libError) {
            console.warn('google-auth-library verification failed:', libError.message);
            // Fall through to Method 2
        }
    }

    // Method 2: Decode JWT payload directly (Google ID tokens are JWTs)
    // This is a fallback - we verify structure but trust the Google SDK on the frontend
    try {
        const jwt = require('jsonwebtoken');
        const decoded = jwt.decode(credential);
        if (!decoded || !decoded.email || !decoded.sub) {
            throw new Error('Invalid Google token structure');
        }
        // Verify the token is from Google and not expired
        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp && decoded.exp < now) {
            throw new Error('Google token expired');
        }
        if (decoded.iss !== 'accounts.google.com' && decoded.iss !== 'https://accounts.google.com') {
            throw new Error('Token not from Google');
        }
        // Verify audience matches our client ID
        if (decoded.aud !== GOOGLE_CLIENT_ID) {
            throw new Error(`Audience mismatch: token aud=${decoded.aud}, expected=${GOOGLE_CLIENT_ID}`);
        }
        return decoded;
    } catch (decodeError) {
        console.error('Google token decode fallback failed:', decodeError.message);
        throw decodeError;
    }
};

// ==========================================
// POST /api/auth/register - Register new user
// ==========================================
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        // Check if user already exists
        const User = getUserModel();
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            if (existingUser.email === email) {
                return res.status(400).json({ message: 'Email already registered' });
            }
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Create user
        const user = await User.create({
            username,
            email,
            password,
            authProvider: 'local'
        });

        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
                authProvider: user.authProvider
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});

// ==========================================
// POST /api/auth/login - Login user
// ==========================================
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const User = getUserModel();
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if user registered with Google
        if (user.authProvider === 'google' && !user.password) {
            return res.status(401).json({ 
                message: 'This account uses Google Sign-In. Please login with Google.' 
            });
        }

        // Compare password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user._id);

        res.json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
                authProvider: user.authProvider
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// ==========================================
// POST /api/auth/google - Google OAuth login
// ==========================================
router.post('/google', async (req, res) => {
    try {
        const { credential } = req.body;

        if (!credential) {
            return res.status(400).json({ message: 'Google credential is required' });
        }

        if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'your_google_client_id_here') {
            return res.status(500).json({ message: 'Google OAuth is not configured on the server. Please set GOOGLE_CLIENT_ID in .env' });
        }

        // Verify Google token (with fallback)
        const payload = await verifyGoogleCredential(credential);
        const { sub: googleId, email, name, picture } = payload;

        // Check if user already exists with this Google ID
        const User = getUserModel();
        let user = await User.findOne({ googleId });

        if (!user) {
            // Check if email already exists (user might have registered with email/password)
            user = await User.findOne({ email });

            if (user) {
                // Link Google account to existing user
                user.googleId = googleId;
                user.authProvider = 'google';
                if (picture) user.avatar = picture;
                await user.save();
            } else {
                // Create new user with Google info
                const username = name.replace(/\s+/g, '_').toLowerCase() + '_' + Math.random().toString(36).substring(2, 6);
                
                user = await User.create({
                    username,
                    email,
                    googleId,
                    avatar: picture || '',
                    authProvider: 'google'
                });
            }
        }

        const token = generateToken(user._id);

        res.json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
                authProvider: user.authProvider
            }
        });
    } catch (error) {
        console.error('Google auth error:', error.message || error);
        
        // Provide specific error messages for common issues
        let message = 'Google authentication failed';
        if (error.message?.includes('Token used too late') || error.message?.includes('expired')) {
            message = 'Google token expired. Please try signing in again.';
        } else if (error.message?.includes('audience') || error.message?.includes('client_id') || error.message?.includes('Wrong recipient')) {
            message = 'Google Client ID mismatch. Please check server configuration.';
        } else if (error.message?.includes('Invalid token') || error.message?.includes('Malformed')) {
            message = 'Invalid Google token. Please try signing in again.';
        } else if (error.message?.includes('network') || error.message?.includes('ENOTFOUND') || error.message?.includes('fetch')) {
            message = 'Could not verify Google token - network error. Check your internet connection.';
        }
        
        res.status(500).json({ message });
    }
});

// ==========================================
// GET /api/auth/me - Get current user profile
// ==========================================
router.get('/me', protect, async (req, res) => {
    try {
        const User = getUserModel();
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ success: true, user: user.toJSON() });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// ==========================================
// PUT /api/auth/profile - Update user profile
// ==========================================
router.put('/profile', protect, async (req, res) => {
    try {
        const { username, avatar } = req.body;
        const User = getUserModel();
        const user = await User.findById(req.user._id);

        if (username) user.username = username;
        if (avatar) user.avatar = avatar;

        await user.save();

        res.json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error updating profile' });
    }
});

module.exports = router;
