const express = require('express');
const router = express.Router();
const { logAlert, getLogs } = require('../controllers/emergencyController');

// POST /api/emergency/alert - Log emergency request
router.post('/alert', logAlert);

// GET /api/emergency/logs - Get all emergency alerts (Admin only)
router.get('/logs', getLogs);

module.exports = router;
