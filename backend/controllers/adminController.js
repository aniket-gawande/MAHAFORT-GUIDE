const Fort = require('../models/Fort');
require('dotenv').config({ override: true });

// Simple admin authentication (hardcoded for prototype)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'mahafort2026';

// @desc    Admin login
// @route   POST /api/admin/login
const loginAdmin = (req, res) => {
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
};

// @desc    Create new fort
// @route   POST /api/admin/forts
const createFort = async (req, res) => {
    try {
        const fort = new Fort(req.body);
        await fort.save();

        res.status(201).json({
            success: true,
            message: 'Fort created successfully',
            data: fort
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating fort',
            error: error.message
        });
    }
};

// @desc    Update fort
// @route   PUT /api/admin/forts/:id
const updateFort = async (req, res) => {
    try {
        const fort = await Fort.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!fort) {
            return res.status(404).json({
                success: false,
                message: 'Fort not found'
            });
        }

        res.json({
            success: true,
            message: 'Fort updated successfully',
            data: fort
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating fort',
            error: error.message
        });
    }
};

// @desc    Delete fort
// @route   DELETE /api/admin/forts/:id
const deleteFort = async (req, res) => {
    try {
        const fort = await Fort.findByIdAndDelete(req.params.id);

        if (!fort) {
            return res.status(404).json({
                success: false,
                message: 'Fort not found'
            });
        }

        res.json({
            success: true,
            message: 'Fort deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting fort',
            error: error.message
        });
    }
};

// @desc    Update crowd status
// @route   PUT /api/admin/forts/:id/crowd-status
const updateCrowdStatus = async (req, res) => {
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
};

// @desc    Update emergency contacts
// @route   PUT /api/admin/forts/:id/emergency-contacts
const updateEmergencyContacts = async (req, res) => {
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
};

module.exports = {
    loginAdmin,
    createFort,
    updateFort,
    deleteFort,
    updateCrowdStatus,
    updateEmergencyContacts
};
