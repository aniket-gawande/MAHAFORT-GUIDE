const mongoose = require('mongoose');

const fortSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    district: {
      type: String,
      required: true
    },
    baseVillage: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  description: {
    type: String,
    required: true
  },
  history: String,
  
  visitInfo: {
    entryFee: Number,
    timings: String,
    bestSeason: [String],
    timeRequired: String,
    difficulty: {
      type: String,
      enum: ['Easy', 'Moderate', 'Hard'],
      default: 'Moderate'
    }
  },
  
  trekDetails: {
    routes: [{
      name: String,
      distance: String,
      duration: String,
      difficulty: String,
      description: String
    }]
  },
  
  facilities: {
    parking: { type: Boolean, default: false },
    ropeway: { type: Boolean, default: false },
    washroom: { type: Boolean, default: false },
    mobileNetwork: String,
    drinkingWater: { type: Boolean, default: false }
  },
  
  nearbyFood: [{
    name: String,
    type: String,
    distance: String,
    avgCost: String,
    contact: String
  }],
  
  nearbyStays: [{
    name: String,
    type: String,
    distance: String,
    priceRange: String,
    contact: String
  }],
  
  images: [String],
  
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Create text index for search
fortSchema.index({ name: 'text', description: 'text', 'location.district': 'text' });

module.exports = mongoose.model('Fort', fortSchema);