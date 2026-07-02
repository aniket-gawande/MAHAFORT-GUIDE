const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
    registerUser,
    loginUser,
    googleLogin,
    getCurrentUser,
    updateProfile
} = require('../controllers/authController');

// POST /api/auth/register
router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

// POST /api/auth/google
router.post('/google', googleLogin);

// GET /api/auth/me
router.get('/me', protect, getCurrentUser);

// PUT /api/auth/profile
router.put('/profile', protect, updateProfile);

module.exports = router;
