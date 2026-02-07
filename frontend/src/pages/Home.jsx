import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllForts } from '../services/api'; // Ensure this path is correct
import FortCard from '../components/FortCard';
import Navbar from '../components/Navbar';
import BahirjiChatbot from '../components/BahirjiChatbot';
import { staticForts } from '../data/staticForts';
import { FaSearch, FaFilter } from 'react-icons/fa';

// Assets
import shivaji from '../assets/shivaji.jpg';
import marathaFlag from '../assets/svg/maratha-flag.svg';
import heroBg from '../assets/hero-fort.jpg';

const Home = () => {
  const [forts, setForts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [districtFilter, setDistrictFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  useEffect(() => {
    fetchForts();
  }, []);

  const fetchForts = async () => {
    try {
      const response = await getAllForts();
      const fortsData = Array.isArray(response.data) ? response.data : [];
      setForts(fortsData.length > 0 ? fortsData : staticForts);
    } catch (error) {
      console.error('Error fetching forts:', error);
      setForts(staticForts);
    } finally {
      setLoading(false);
    }
  };

  const filteredForts = forts.filter(fort => {
    if (!fort || !fort.name || !fort.location) return false;
    const matchesSearch = fort.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = districtFilter === 'all' || fort.location?.district === districtFilter;
    const matchesDifficulty = difficultyFilter === 'all' || fort.difficulty === difficultyFilter || (fort.trek?.routes?.[0]?.difficulty === difficultyFilter);
    return matchesSearch && matchesDistrict && matchesDifficulty;
  });

  const districts = ['all', ...new Set(forts.filter(f => f?.location?.district).map(fort => fort.location.district))].sort();

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
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-4 animate-fade-in-up">
              <img src={marathaFlag} alt="Flag" className="h-10 w-auto drop-shadow-[0_0_10px_rgba(255,153,51,0.8)]" />
              <span className="text-saffron font-bold tracking-[0.3em] text-sm uppercase border-b border-saffron pb-1">
                The Great Maratha Legacy
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-cinematic font-black leading-tight text-white drop-shadow-2xl animate-fade-in-up delay-100">
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
            <div className="flex gap-8 pt-8 animate-fade-in-up delay-300">
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
        
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white">
                        Founder of the <span className="text-saffron">Maratha Empire</span>
                    </h2>
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

      {/* --- FORTS SEARCH & GRID --- */}
      <section className="py-20 bg-royal-gray border-t border-white/5" id="explore">
        <div className="container mx-auto px-6">
            
            {/* Filter Bar (Glassmorphism) */}
            <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-4 items-center shadow-2xl">
                <div className="flex-1 w-full relative">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="Search forts..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-royal-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron transition-all"
                    />
                </div>
                
                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-48">
                        <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-saffron" />
                        <select 
                            value={districtFilter}
                            onChange={(e) => setDistrictFilter(e.target.value)}
                            className="w-full bg-royal-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-8 text-white appearance-none cursor-pointer hover:border-saffron/50 focus:border-saffron focus:outline-none"
                        >
                            <option value="all" className="bg-royal-black text-gray-400">All Districts</option>
                            {districts.filter(d => d !== 'all').map(d => <option key={d} value={d} className="bg-royal-black">{d}</option>)}
                        </select>
                    </div>

                    <div className="relative w-full md:w-48">
                         <select 
                            value={difficultyFilter}
                            onChange={(e) => setDifficultyFilter(e.target.value)}
                            className="w-full bg-royal-black/50 border border-white/10 rounded-xl py-3 px-4 text-white appearance-none cursor-pointer hover:border-saffron/50 focus:border-saffron focus:outline-none"
                        >
                            <option value="all" className="bg-royal-black">All Levels</option>
                            <option value="Easy" className="bg-royal-black">Easy</option>
                            <option value="Moderate" className="bg-royal-black">Moderate</option>
                            <option value="Hard" className="bg-royal-black">Hard</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Loading / Grid State */}
            {loading ? (
                <div className="text-center py-20">
                    <div className="inline-block w-16 h-16 border-4 border-saffron border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-saffron font-cinematic animate-pulse">Summoning History...</p>
                </div>
            ) : filteredForts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredForts.map((fort) => (
                        <FortCard key={fort._id} fort={fort} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 border border-dashed border-white/20 rounded-2xl">
                    <p className="text-2xl text-gray-500 font-cinematic">No Forts Found in this Region.</p>
                </div>
            )}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 bg-royal-black relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-saffron/5"></div>
         <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-cinematic font-bold text-white">Ready for the Expedition?</h2>
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
        <h4 className="text-4xl font-black text-white">{number}</h4>
        <p className="text-saffron text-sm font-bold uppercase tracking-wider">{label}</p>
    </div>
);

const InfoBadge = ({ label, value }) => (
    <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white font-bold text-lg">{value}</p>
    </div>
);

export default Home;