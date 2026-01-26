const express = require('express');
const router = express.Router();
const Fort = require('../models/Fort');

// CREATE new fort
router.post('/forts', async (req, res) => {
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
});

// UPDATE fort
router.put('/forts/:id', async (req, res) => {
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
});

// DELETE fort
router.delete('/forts/:id', async (req, res) => {
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
});

module.exports = router;