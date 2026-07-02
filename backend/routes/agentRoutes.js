/**
 * 🏰 Fort Data Agent Routes
 * 
 * Endpoints:
 *   GET  /api/agent/search?fort=<name>  → SSE stream with step-by-step progress
 *   POST /api/agent/search              → Regular JSON response (non-streaming)
 *   GET  /api/agent/health              → Health check
 */

const express = require('express');
const router = express.Router();
const { streamSearch, jsonSearch, checkHealth } = require('../controllers/agentController');

// ─── SSE Endpoint: Stream agent progress in real-time ────────────────
router.get('/search', streamSearch);

// ─── POST Endpoint: Non-streaming JSON response ─────────────────────
router.post('/search', jsonSearch);

// ─── Health check ───────────────────────────────────────────────────
router.get('/health', checkHealth);

module.exports = router;
