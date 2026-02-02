const mongoose = require('mongoose');
const Fort = require('./models/Fort');
require('dotenv').config();

const sampleForts = [
  {
    name: "Sinhagad Fort",
    location: {
      district: "Pune",
      baseVillage: "Donaje",
      coordinates: {
        lat: 18.3664,
        lng: 73.7558
      }
    },
    description: "Sinhagad is a hill fortress located at around 49 km southwest of the city of Pune. The fort has been the site of many important battles, most notably the Battle of Sinhagad in 1670.",
    history: "Previously called Kondhana, the fort has been the site of many battles, most notably the Battle of Sinhagad in 1670. Tanaji Malusare, a general of Shivaji Maharaj, lost his life while recapturing this fort.",
    visitInfo: {
      entryFee: 20,
      timings: "6:00 AM - 6:00 PM",
      bestSeason: ["June", "July", "August", "September"],
      timeRequired: "2-3 hours",
      difficulty: "Easy"
    },
    trekDetails: {
      routes: [
        {
          name: "Donaje to Sinhagad",
          distance: "4 km",
          duration: "1.5 hours",
          difficulty: "Easy",
          description: "Well-maintained steps from Donaje village to fort top. Suitable for beginners."
        }
      ]
    },
    facilities: {
      parking: true,
      ropeway: false,
      washroom: true,
      mobileNetwork: "Good",
      drinkingWater: true
    },
    nearbyFood: [
      {
        name: "Hotel Kondaji",
        type: "Veg & Non-Veg",
        distance: "500m from parking",
        avgCost: "150-250",
        contact: "9876543210"
      }
    ],
    nearbyStays: [
      {
        name: "MTDC Holiday Resort",
        type: "Resort",
        distance: "3 km",
        priceRange: "1000-2000",
        contact: "020-12345678"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800"
    ],
    featured: true
  },
  {
    name: "Raigad Fort",
    location: {
      district: "Raigad",
      baseVillage: "Pachad",
      coordinates: {
        lat: 18.2358,
        lng: 73.4404
      }
    },
    description: "Raigad is a hill fort situated in Mahad, Raigad district. It was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj.",
    history: "The fort was built by Chhatrapati Shivaji Maharaj and served as his capital from 1674 until his death in 1680. It was renamed from Rairi to Raigad.",
    visitInfo: {
      entryFee: 25,
      timings: "8:00 AM - 5:30 PM",
      bestSeason: ["October", "November", "December", "January", "February"],
      timeRequired: "3-4 hours",
      difficulty: "Moderate"
    },
    trekDetails: {
      routes: [
        {
          name: "Ropeway Route",
          distance: "Direct access",
          duration: "5 minutes",
          difficulty: "Easy",
          description: "Ropeway available from base to fort top. Quick and convenient."
        },
        {
          name: "Trekking Route",
          distance: "5 km",
          duration: "2 hours",
          difficulty: "Moderate",
          description: "1450 steps from base village. Moderately challenging trek."
        }
      ]
    },
    facilities: {
      parking: true,
      ropeway: true,
      washroom: true,
      mobileNetwork: "Average",
      drinkingWater: true
    },
    nearbyFood: [
      {
        name: "Base Village Eateries",
        type: "Local Food",
        distance: "At base",
        avgCost: "100-200",
        contact: "N/A"
      }
    ],
    nearbyStays: [
      {
        name: "MTDC Resort Raigad",
        type: "Resort",
        distance: "2 km",
        priceRange: "1500-3000",
        contact: "02145-123456"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800"
    ],
    featured: true
  },
  {
    name: "Pratapgad Fort",
    location: {
      district: "Satara",
      baseVillage: "Pratapgad Village",
      coordinates: {
        lat: 17.9407,
        lng: 73.5583
      }
    },
    description: "Pratapgad is a large fort located in Satara district. It is located around 24 km from the hill station of Mahabaleshwar.",
    history: "Built by Chhatrapati Shivaji Maharaj, the fort is famous for the Battle of Pratapgad between Shivaji and Afzal Khan in 1659.",
    visitInfo: {
      entryFee: 15,
      timings: "7:00 AM - 6:00 PM",
      bestSeason: ["June", "July", "August", "September", "October"],
      timeRequired: "2-3 hours",
      difficulty: "Easy"
    },
    trekDetails: {
      routes: [
        {
          name: "Main Road Route",
          distance: "Road accessible",
          duration: "Drive to fort",
          difficulty: "Easy",
          description: "Fort is accessible by road. No trekking required."
        }
      ]
    },
    facilities: {
      parking: true,
      ropeway: false,
      washroom: true,
      mobileNetwork: "Good",
      drinkingWater: true
    },
    nearbyFood: [
      {
        name: "Fort Canteen",
        type: "Veg",
        distance: "Inside fort",
        avgCost: "80-150",
        contact: "N/A"
      }
    ],
    nearbyStays: [
      {
        name: "Mahabaleshwar Hotels",
        type: "Various",
        distance: "24 km",
        priceRange: "500-5000",
        contact: "Mahabaleshwar"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1588442738374-8c0c3c5a0e6f?w=800"
    ],
    featured: true
  },
  {
    name: "Rajgad Fort",
    location: {
      district: "Pune",
      baseVillage: "Gunjavane",
      coordinates: {
        lat: 18.2435,
        lng: 73.6796
      }
    },
    description: "Rajgad was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj for almost 26 years. The fort is located around 60 km southwest of Pune.",
    history: "Shivaji Maharaj seized the fort in 1647 and renamed it from Murumdev to Rajgad. His first wife Saibai, son Sambhaji, and mother Jijabai died at this fort.",
    visitInfo: {
      entryFee: 0,
      timings: "All day (overnight stay allowed)",
      bestSeason: ["October", "November", "December", "January", "February"],
      timeRequired: "6-8 hours",
      difficulty: "Moderate"
    },
    trekDetails: {
      routes: [
        {
          name: "Gunjavane Route",
          distance: "5 km",
          duration: "2.5 hours",
          difficulty: "Moderate",
          description: "Most popular route with well-defined trail. Steep climb with steps in some sections."
        },
        {
          name: "Pali Darwaja Route",
          distance: "6 km",
          duration: "3 hours",
          difficulty: "Hard",
          description: "Challenging route with rock patches. Recommended for experienced trekkers only."
        }
      ]
    },
    facilities: {
      parking: true,
      ropeway: false,
      washroom: true,
      mobileNetwork: "Poor",
      drinkingWater: false
    },
    nearbyFood: [
      {
        name: "Base Village Shops",
        type: "Local Snacks",
        distance: "At base village",
        avgCost: "50-100",
        contact: "N/A"
      }
    ],
    nearbyStays: [
      {
        name: "Camping on Fort",
        type: "Camping",
        distance: "On fort top",
        priceRange: "Free",
        contact: "Carry your own tent"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
    ],
    featured: true
  },
  {
    name: "Lohagad Fort",
    location: {
      district: "Pune",
      baseVillage: "Lohagadwadi",
      coordinates: {
        lat: 18.7079,
        lng: 73.4849
      }
    },
    description: "Lohagad is one of the most visited forts near Pune and Mumbai. The fort divides the basins of Indrayani and Pavana and is situated at an elevation of 1,033m above sea level.",
    history: "The fort was under the Maratha empire for the majority of time, with a short period of 5 years under the Mughal empire. The fort was used to keep the treasury.",
    visitInfo: {
      entryFee: 0,
      timings: "6:00 AM - 6:00 PM",
      bestSeason: ["June", "July", "August", "September"],
      timeRequired: "3-4 hours",
      difficulty: "Easy"
    },
    trekDetails: {
      routes: [
        {
          name: "Lohagadwadi Steps",
          distance: "3 km",
          duration: "1 hour",
          difficulty: "Easy",
          description: "Well-maintained stone steps throughout. Perfect for beginners and families."
        }
      ]
    },
    facilities: {
      parking: true,
      ropeway: false,
      washroom: true,
      mobileNetwork: "Good",
      drinkingWater: true
    },
    nearbyFood: [
      {
        name: "Lohagadwadi Stalls",
        type: "Veg Snacks",
        distance: "Base village",
        avgCost: "100-150",
        contact: "N/A"
      }
    ],
    nearbyStays: [
      {
        name: "Lonavala Hotels",
        type: "Hotels",
        distance: "10 km",
        priceRange: "800-3000",
        contact: "Lonavala city"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1571069283170-ff2cfed5bdf3?w=800"
    ],
    featured: false
  }
];

// Main function to seed database
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mahafort');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Fort.deleteMany({});
    console.log('🗑️  Cleared existing forts');

    // Insert sample data
    await Fort.insertMany(sampleForts);
    console.log(`✅ Successfully added ${sampleForts.length} forts to database!`);
    
    // Close connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();