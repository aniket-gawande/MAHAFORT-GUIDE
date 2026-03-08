const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Track MongoDB connection state globally
global.mongoConnected = false;

// Try to connect to MongoDB only if URI is set
const MONGODB_URI = process.env.MONGODB_URI;
let mongoReady = Promise.resolve();

if (MONGODB_URI) {
  try {
    const mongoose = require('mongoose');
    mongoose.set('strictQuery', false);
    mongoose.set('bufferCommands', false);

    mongoReady = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000
    })
      .then(() => {
        console.log('✅ MongoDB connected successfully');
        global.mongoConnected = true;
      })
      .catch(async (err) => {
        console.warn('⚠️  MongoDB connection failed:', err.message);
        console.warn('⚠️  Using JSON file-based storage for users instead');
        global.mongoConnected = false;
        try {
          mongoose.connection.removeAllListeners();
          await mongoose.disconnect();
        } catch (e) { }
      });

    mongoose.connection.on('error', (err) => {
      console.warn('⚠️  MongoDB error:', err.message);
      global.mongoConnected = false;
    });
  } catch (e) {
    console.warn('⚠️  MongoDB setup failed:', e.message);
  }
} else {
  console.warn('⚠️  MONGODB_URI not set - using JSON file-based storage for users');
}

// Import Routes
const fortRoutes = require('./routes/forts');
const emergencyRoutes = require('./routes/emergencyRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const agentRoutes = require('./routes/agentRoutes');

// Wait for MongoDB connection attempt before handling auth requests
app.use('/api/auth', async (req, res, next) => {
  try { await mongoReady; } catch (e) { }
  next();
});

// Use Routes
app.use('/api/forts', fortRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/agent', agentRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'MahaFort API - Running', mongoConnected: global.mongoConnected });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Using JSON file storage for fort data`);
});