// Emergency Alert Model (simple in-memory storage for prototype)
// In production, this would be a MongoDB model
let emergencyAlerts = [];

// @desc    Log emergency request
// @route   POST /api/emergency/alert
const logAlert = async (req, res) => {
    try {
        const { fortId, fortName, userLocation, contactType, timestamp } = req.body;

        const alert = {
            id: Date.now(),
            fortId,
            fortName,
            userLocation: userLocation || 'Unknown',
            contactType: contactType || 'General',
            timestamp: timestamp || new Date(),
            status: 'Active'
        };

        emergencyAlerts.push(alert);

        console.log('🚨 Emergency Alert Logged:', alert);

        res.status(201).json({
            success: true,
            message: 'Emergency alert logged successfully',
            alert
        });
    } catch (error) {
        console.error('Error logging emergency alert:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to log emergency alert'
        });
    }
};

// @desc    Get all emergency alerts (Admin only)
// @route   GET /api/emergency/logs
const getLogs = async (req, res) => {
    try {
        res.json({
            success: true,
            count: emergencyAlerts.length,
            alerts: emergencyAlerts.reverse() // Most recent first
        });
    } catch (error) {
        console.error('Error fetching emergency alerts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch emergency alerts'
        });
    }
};

module.exports = {
    logAlert,
    getLogs
};
