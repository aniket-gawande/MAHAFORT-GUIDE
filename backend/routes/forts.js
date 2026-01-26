const express = require('express');
const router = express.Router();
const Fort = require('../models/Fort');

// GET featured forts
router.get('/featured/list', async (req, res) => {
  try {
    const forts = await Fort.find({ featured: true }).limit(6);
    res.json({
      success: true,
      count: forts.length,
      data: forts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching featured forts',
      error: error.message
    });
  }
});

// GET all forts
router.get('/', async (req, res) => {
  try {
    const { search, district, difficulty } = req.query;
    let query = {};

    // Search filter
    if (search) {
      query.$text = { $search: search };
    }

    // District filter
    if (district) {
      query['location.district'] = district;
    }

    // Difficulty filter
    if (difficulty) {
      query['visitInfo.difficulty'] = difficulty;
    }

    const forts = await Fort.find(query).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: forts.length,
      data: forts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching forts',
      error: error.message
    });
  }
});

// GET single fort by ID
router.get('/:id', async (req, res) => {
  try {
    const fort = await Fort.findById(req.params.id);
    
    if (!fort) {
      return res.status(404).json({
        success: false,
        message: 'Fort not found'
      });
    }

    res.json({
      success: true,
      data: fort
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching fort details',
      error: error.message
    });
  }
});

module.exports = router;