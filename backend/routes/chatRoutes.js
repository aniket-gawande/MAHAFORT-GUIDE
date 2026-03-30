const express = require('express');
const router = express.Router();
const { getChatResponse } = require('../controllers/chatController');

// POST /api/chat
router.post('/', getChatResponse);

module.exports = router;
