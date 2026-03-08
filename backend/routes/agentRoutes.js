/**
 * 🏰 Fort Data Agent Routes
 * 
 * Uses Server-Sent Events (SSE) to stream real-time progress
 * to the frontend while the agent collects data (~15 seconds).
 * 
 * Endpoints:
 *   GET  /api/agent/search?fort=<name>  → SSE stream with step-by-step progress
 *   POST /api/agent/search              → Regular JSON response (non-streaming)
 *   GET  /api/agent/health              → Health check
 */

const express = require('express');
const router = express.Router();
const FortDataAgent = require('../services/fortDataAgent');

// ─── SSE Endpoint: Stream agent progress in real-time ────────────────
router.get('/search', async (req, res) => {
    const fortName = req.query.fort;

    if (!fortName || fortName.trim().length < 2) {
        return res.status(400).json({
            error: 'Please provide a fort name',
            usage: '/api/agent/search?fort=Sinhagad'
        });
    }

    // Set up Server-Sent Events headers
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'X-Accel-Buffering': 'no'  // Disable nginx buffering
    });

    // Send initial connection event
    res.write(`data: ${JSON.stringify({ type: 'connected', message: 'Agent connected' })}\n\n`);

    // Create agent with SSE update callback
    const agent = new FortDataAgent(fortName.trim(), (update) => {
        try {
            res.write(`data: ${JSON.stringify({ type: 'progress', ...update })}\n\n`);
        } catch (e) {
            // Client disconnected
        }
    });

    // Handle client disconnect
    let clientDisconnected = false;
    req.on('close', () => {
        clientDisconnected = true;
    });

    try {
        const result = await agent.run();

        if (!clientDisconnected) {
            // Send final result
            res.write(`data: ${JSON.stringify({ type: 'result', ...result })}\n\n`);
            res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
            res.end();
        }
    } catch (err) {
        if (!clientDisconnected) {
            res.write(`data: ${JSON.stringify({ type: 'error', message: err.message })}\n\n`);
            res.end();
        }
    }
});

// ─── POST Endpoint: Non-streaming JSON response ─────────────────────
router.post('/search', async (req, res) => {
    const { fort } = req.body;

    if (!fort || fort.trim().length < 2) {
        return res.status(400).json({
            error: 'Please provide a fort name in the request body',
            usage: { fort: 'Sinhagad' }
        });
    }

    try {
        const agent = new FortDataAgent(fort.trim());
        const result = await agent.run();
        res.json(result);
    } catch (err) {
        res.status(500).json({
            error: 'Agent failed to collect data',
            message: err.message
        });
    }
});

// ─── Health check ───────────────────────────────────────────────────
router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        agent: 'Fort Data Agent v1.0',
        sources: [
            'Wikipedia REST API (free)',
            'OpenStreetMap Nominatim (free)',
            'Wikidata SPARQL (free)',
            'Google Maps URL generation (free)'
        ],
        averageTime: '12-18 seconds'
    });
});

module.exports = router;
