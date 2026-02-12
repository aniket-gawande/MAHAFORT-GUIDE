import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllForts } from '../services/api'; // Ensure this path is correct
import FortCard from '../components/FortCard';
import Navbar from '../components/Navbar';
import BahirjiChatbot from '../components/BahirjiChatbot';
import { staticForts } from '../data/staticForts';
import { FaChevronRight } from 'react-icons/fa';

// Assets
import shivaji from '../assets/shivaji.jpg';
import marathaFlag from '../assets/svg/maratha-flag.svg';
import heroBg from '../assets/hero-fort.jpg';

const Home = () => {
  const [forts, setForts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchForts();
  }, []);

  const fetchForts = async () => {
    try {
      const response = await getAllForts();
      const fortsData = Array.isArray(response.data) ? response.data : [];
      
      if (fortsData.length > 0) {
        // Build a name-based lookup from static forts for image overrides
        const staticByName = {};
        staticForts.forEach(sf => {
          staticByName[sf.name.toLowerCase()] = sf;
        });

        // Merge API forts with static fort images where API images are broken paths
        const mergedForts = fortsData.map(fort => {
          const staticMatch = staticByName[fort.name?.toLowerCase()];
          if (staticMatch && staticMatch.images && staticMatch.images.length > 0) {
            // Use static fort images (webpack imports) over API string paths
            return { ...fort, images: staticMatch.images };
          }
          return fort;
        });

        // Also add any static forts not present in API (by name)
        const apiNames = new Set(mergedForts.map(f => f.name?.toLowerCase()));
        const missingForts = staticForts.filter(sf => !apiNames.has(sf.name?.toLowerCase()));
        setForts([...mergedForts, ...missingForts]);
      } else {
        setForts(staticForts);
      }
    } catch (error) {
      console.error('Error fetching forts:', error);
      setForts(staticForts);
    } finally {
      setLoading(false);
    }
  };

  const districts = ['all', ...new Set(forts.filter(f => f?.location?.district).map(fort => fort.location.district))].sort();

  // Featured forts - top rated for homepage preview
  const featuredForts = forts
    .filter(f => f?.name && f?.location)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-royal-black text-white font-body selection:bg-saffron selection:text-black">
      <Navbar />
      <BahirjiChatbot />

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Sahyadri Mountains" className="w-full h-full object-cover scale-105 animate-float" />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-royal-black/90 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-4 animate-fade-in-up">
              <img src={marathaFlag} alt="Flag" className="h-10 w-auto drop-shadow-[0_0_10px_rgba(255,153,51,0.8)]" />
              <span className="text-saffron font-bold tracking-[0.3em] text-sm uppercase border-b border-saffron pb-1">
                The Great Maratha Legacy
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-cinematic font-black leading-tight text-white drop-shadow-2xl animate-fade-in-up delay-100">
              GUARDING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-yellow-100">
                SAHYADRIS
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed border-l-4 border-saffron pl-6 animate-fade-in-up delay-200">
              Explore the majestic forts of Chhatrapati Shivaji Maharaj. 
              Witness history etched in stone, from Raigad to Janjira.
            </p>

            {/* Quick Stats in Hero */}
            <div className="flex flex-wrap gap-4 sm:gap-8 pt-8 animate-fade-in-up delay-300">
                <HeroStat number={forts.length + "+"} label="Forts" />
                <HeroStat number={districts.length - 1} label="Districts" />
                <HeroStat number="100%" label="Glory" />
            </div>
          </div>
        </div>
      </div>

      {/* --- SHIVAJI MAHARAJ TRIBUTE SECTION (Dark Mode) --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-saffron-glow opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image Card */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-saffron/20 rounded-3xl blur-2xl group-hover:bg-saffron/30 transition-all duration-700"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img src={shivaji} alt="Chhatrapati Shivaji Maharaj" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur-sm p-4 text-center border-t border-saffron/30">
                            <h3 className="text-2xl font-cinematic font-bold text-saffron">छत्रपती शिवाजी महाराज</h3>
                        </div>
                    </div>
                </div>

                {/* Bio Text */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-cinematic font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-saffron to-white drop-shadow-2xl tracking-wider">
                            Chhatrapati Shivaji Maharaj
                        </h1>
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-cinematic font-bold text-white">
                            Founder of the <span className="text-saffron">Maratha Empire</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        The great warrior king who established <strong className="text-white">Hindavi Swarajya</strong>. 
                        Known for his military genius and progressive administration, he built an impregnable defense 
                        system across the Sahyadri range.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <InfoBadge label="Born" value="19 Feb 1630" />
                        <InfoBadge label="Coronation" value="6 June 1674" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FEATURED FORTS PREVIEW --- */}
      <section className="py-20 bg-royal-gray border-t border-white/5" id="explore">
        <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Top Rated</p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-4">
                    Featured <span className="text-saffron">Forts</span>
                </h2>
                <div className="h-1 w-16 bg-saffron rounded-full mx-auto mb-4"></div>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
                    The most majestic fortifications of the Maratha Empire. Explore all {forts.length}+ forts in our directory.
                </p>
            </div>

            {/* Featured Grid */}
            {loading ? (
                <div className="text-center py-20">
                    <div className="inline-block w-16 h-16 border-4 border-saffron border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-saffron font-cinematic animate-pulse">Summoning History...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredForts.map((fort) => (
                        <FortCard key={fort._id} fort={fort} />
                    ))}
                </div>
            )}

            {/* View All CTA */}
            <div className="text-center mt-12">
                <Link to="/forts" className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-saffron/30 rounded-full text-saffron font-bold font-cinematic tracking-wider uppercase hover:bg-saffron hover:text-black hover:border-saffron transition-all duration-300 shadow-[0_0_15px_rgba(255,153,51,0.1)] hover:shadow-[0_0_25px_rgba(255,153,51,0.4)]">
                    VIEW ALL {forts.length}+ FORTS <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 bg-royal-black relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-saffron/5"></div>
         <div className="relative z-10 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white">Ready for the Expedition?</h2>
            <Link to="/trip-planner" className="inline-block px-8 py-4 bg-saffron text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,153,51,0.5)]">
                PLAN YOUR TREK
            </Link>
         </div>
      </section>

    </div>
  );
};

// Mini Components
const HeroStat = ({ number, label }) => (
    <div>
        <h4 className="text-2xl sm:text-4xl font-black text-white">{number}</h4>
        <p className="text-saffron text-xs sm:text-sm font-bold uppercase tracking-wider">{label}</p>
    </div>
);

const InfoBadge = ({ label, value }) => (
    <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white font-bold text-lg">{value}</p>
    </div>
);

export default Home;