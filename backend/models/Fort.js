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
    required: false
  },
  history: {
    type: mongoose.Schema.Types.Mixed
  },

  visitInfo: {
    type: mongoose.Schema.Types.Mixed
  },

  trekDetails: {
    type: mongoose.Schema.Types.Mixed
  },
  
  trek: {
    type: mongoose.Schema.Types.Mixed
  },

  facilities: {
    type: mongoose.Schema.Types.Mixed
  },

  googleMaps: {
    type: mongoose.Schema.Types.Mixed
  },

  landmarks: {
    type: mongoose.Schema.Types.Mixed
  },

  food: {
    type: mongoose.Schema.Types.Mixed
  },

  nearbyFood: {
    type: mongoose.Schema.Types.Mixed
  },

  accommodation: {
    type: mongoose.Schema.Types.Mixed
  },

  budget: {
    type: mongoose.Schema.Types.Mixed
  },

  reviewsSummary: {
    type: mongoose.Schema.Types.Mixed
  },

  safety: {
    type: mongoose.Schema.Types.Mixed
  },

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
  },
  
  // Smart City Features for TIGC
  crowdStatus: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Low'
  },
  
  emergencyContacts: [{
    type: {
      type: String,
      enum: ['Guide', 'Police', 'Medical', 'Rescue'],
      required: true
    },
    name: String,
    phone: String,
    available: String,
    location: String
  }],
  
  accessibility: {
    wheelchairAccessible: { type: Boolean, default: false },
    elderlyFriendly: { type: Boolean, default: false },
    stepsCount: Number,
    alternativeRoutes: String,
    restPoints: Number,
    notes: String
  },
  
  safetyAlerts: [{
    type: String,
    severity: {
      type: String,
      enum: ['Info', 'Warning', 'Critical'],
      default: 'Info'
    },
    message: String,
    activeFrom: Date,
    activeTo: Date
  }]
}, {
  timestamps: true
});

// Create text index for search
fortSchema.index({ name: 'text', description: 'text', 'location.district': 'text' });

module.exports = mongoose.model('Fort', fortSchema);