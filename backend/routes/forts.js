const express = require('express');
const router = express.Router();
const { getAllForts, getFortById } = require('../controllers/fortController');

// GET all forts
router.get('/', getAllForts);

// GET single fort by ID
router.get('/:id', getFortById);

module.exports = router;