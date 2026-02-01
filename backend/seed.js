const mongoose = require('mongoose');
const Fort = require('./models/Fort');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mahafort');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Fort.deleteMany({});
    console.log('🗑️  Cleared existing forts');

    // Load Sinhagad data from JSON file
    const sinhagadDataPath = path.join(__dirname, 'data', 'forts', 'sinhagad.json');
    const sinhagadData = JSON.parse(fs.readFileSync(sinhagadDataPath, 'utf8'));

    console.log('📄 Loaded Sinhagad Fort data from JSON file');

    // Insert Sinhagad fort
    await Fort.create(sinhagadData);
    console.log('✅ Sinhagad Fort inserted successfully');

    // Close connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();