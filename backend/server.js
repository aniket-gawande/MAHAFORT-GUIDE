const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (optional - falls back to file-based storage)
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);

// Track MongoDB connection state globally
global.mongoConnected = false;
let mongoReady = null; // Promise that resolves when connection attempt finishes

if (MONGODB_URI) {
  mongoReady = mongoose.connect(MONGODB_URI, { 
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000
  })
    .then(() => {
      console.log('✅ MongoDB connected successfully');
      global.mongoConnected = true;
    })
    .catch(err => {
      console.warn('⚠️  MongoDB connection failed:', err.message);
      console.warn('⚠️  Using JSON file-based storage for users instead');
      global.mongoConnected = false;
    });

  mongoose.connection.on('error', (err) => {
    console.warn('⚠️  MongoDB error:', err.message);
    global.mongoConnected = false;
  });

  mongoose.connection.on('disconnected', () => {
    global.mongoConnected = false;
  });

  mongoose.connection.on('reconnected', () => {
    console.log('✅ MongoDB reconnected');
    global.mongoConnected = true;
  });
} else {
  mongoReady = Promise.resolve();
  console.warn('⚠️  MONGODB_URI not set - using JSON file-based storage for users');
}

// Import Routes
const fortRoutes = require('./routes/forts');
const emergencyRoutes = require('./routes/emergencyRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

// Wait for MongoDB connection attempt before handling auth requests
app.use('/api/auth', async (req, res, next) => {
  if (mongoReady) await mongoReady;
  next();
});

// Use Routes
app.use('/api/forts', fortRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'MahaFort API - Running with JSON file storage' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Using JSON file storage for fort data`);
});