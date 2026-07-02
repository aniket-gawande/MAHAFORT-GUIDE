const express = require('express');
const router = express.Router();
const {
    loginAdmin,
    createFort,
    updateFort,
    deleteFort,
    updateCrowdStatus,
    updateEmergencyContacts
} = require('../controllers/adminController');

// POST /api/admin/login
router.post('/login', loginAdmin);

// POST /api/admin/forts
router.post('/forts', createFort);

// PUT /api/admin/forts/:id
router.put('/forts/:id', updateFort);

// DELETE /api/admin/forts/:id
router.delete('/forts/:id', deleteFort);

// PUT /api/admin/forts/:id/crowd-status
router.put('/forts/:id/crowd-status', updateCrowdStatus);

// PUT /api/admin/forts/:id/emergency-contacts
router.put('/forts/:id/emergency-contacts', updateEmergencyContacts);

module.exports = router;
