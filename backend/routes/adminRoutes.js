const express = require('express');
const router = express.Router();
const Fort = require('../models/Fort');

// Simple admin authentication (hardcoded for prototype)
const ADMIN_PASSWORD = 'mahafort2026';

// POST /api/admin/login - Simple password-based login
router.post('/login', (req, res) => {
    const { password } = req.body;

    if (password === ADMIN_PASSWORD) {
        res.json({
            success: true,
            message: 'Login successful',
            token: 'admin-authenticated' // Simple token for prototype
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid password'
        });
    }
});

// PUT /api/admin/forts/:id/crowd-status - Update crowd status
router.put('/forts/:id/crowd-status', async (req, res) => {
    try {
        const { id } = req.params;
        const { crowdStatus } = req.body;

        // Validate crowd status
        if (!['Low', 'Medium', 'High'].includes(crowdStatus)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid crowd status. Must be Low, Medium, or High'
            });
        }

        const fort = await Fort.findByIdAndUpdate(
            id,
            { crowdStatus },
            { new: true }
        );

        if (!fort) {
            return res.status(404).json({
                success: false,
                message: 'Fort not found'
            });
        }

        console.log(`✅ Crowd status updated for ${fort.name}: ${crowdStatus}`);

        res.json({
            success: true,
            message: 'Crowd status updated successfully',
            fort
        });
    } catch (error) {
        console.error('Error updating crowd status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update crowd status'
        });
    }
});

// PUT /api/admin/forts/:id/emergency-contacts - Update emergency contacts
router.put('/forts/:id/emergency-contacts', async (req, res) => {
    try {
        const { id } = req.params;
        const { emergencyContacts } = req.body;

        const fort = await Fort.findByIdAndUpdate(
            id,
            { emergencyContacts },
            { new: true }
        );

        if (!fort) {
            return res.status(404).json({
                success: false,
                message: 'Fort not found'
            });
        }

        res.json({
            success: true,
            message: 'Emergency contacts updated successfully',
            fort
        });
    } catch (error) {
        console.error('Error updating emergency contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update emergency contacts'
        });
    }
});

module.exports = router;
