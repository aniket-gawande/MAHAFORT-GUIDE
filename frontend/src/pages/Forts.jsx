import React, { useState, useEffect, useMemo } from 'react';
import { getAllForts } from '../services/api';
import FortCard from '../components/FortCard';
import Navbar from '../components/Navbar';
import { staticForts } from '../data/staticForts';
import { 
  FaSearch, FaMapMarkerAlt, FaHiking, FaHistory, 
  FaMoon, FaUsers, FaSun, FaFacebook, FaTwitter, FaInstagram
} from 'react-icons/fa';
import { GiCastle } from 'react-icons/gi';

import heroBg from '../assets/sindhudurg-hero.jpg';

const CATEGORY_TABS = [
  { id: 'all', label: 'MOST VISITED', icon: <FaUsers size={18} /> },
  { id: 'sea_forts', label: 'SEA FORTS', icon: <GiCastle size={18} /> },
  { id: 'sunset', label: 'BEST FOR SUNSET', icon: <FaSun size={18} /> },
  { id: 'historical', label: 'HISTORICAL SITES', icon: <FaHistory size={18} /> },
  { id: 'night', label: 'NIGHT CAMPS', icon: <FaMoon size={18} /> },
  { id: 'short', label: 'SHORT TREKS', icon: <FaHiking size={18} /> }
];

const CHALLENGE_RATINGS = [
  { 
    id: 'Easy', 
    label: 'BEGINNER', 
    desc: 'Family Friendly Trails',
    icon: <div className="flex items-center -space-x-1 opacity-70"><FaUsers size={22} /></div>,
    color: 'border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-400 group-hover:bg-emerald-500/10'
  },
  { 
    id: 'Moderate', 
    label: 'MODERATE', 
    desc: 'Weekend Challenge',
    icon: <FaHiking size={26} className="opacity-70" />,
    color: 'border-saffron/30 hover:border-saffron hover:shadow-[0_0_15px_rgba(255,153,51,0.2)] text-saffron group-hover:bg-saffron/10'
  },
  { 
    id: 'Hard', 
    label: 'ADVANCED', 
    desc: 'Conquest Level',
    icon: <FaMapMarkerAlt size={24} className="opacity-70" />,
    color: 'border-red-500/30 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] text-red-400 group-hover:bg-red-500/10'
  }
];

const mapDistricts = [
  { name: 'Nashik', x: 50, y: 15 },
  { name: 'Satara', x: 80, y: 30 },
  { name: 'Sindhudurg', x: 85, y: 60 },
  { name: 'Ratnagiri', x: 75, y: 85 },
  { name: 'Thane', x: 50, y: 92 },
  { name: 'Kolhapur', x: 25, y: 85 },
  { name: 'Raigad', x: 15, y: 60 },
  { name: 'Pune', x: 20, y: 30 },
];

const ToggleSwitch = ({ active, onClick, label, icon }) => (
  <div 
    className="flex items-center gap-3 cursor-pointer group"
    onClick={onClick}
  >
    <div className="text-saffron opacity-80 group-hover:opacity-100">{icon}</div>
    <span className="text-gray-300 text-xs sm:text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">{label}</span>
    <div className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full p-1 transition-colors duration-300 ml-1 shadow-inner ${active ? 'bg-saffron' : 'bg-gray-700'}`}>
      <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full transition-transform duration-300 shadow-md ${active ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'}`} />
    </div>
  </div>
);

const Forts = () => {
  const [forts, setForts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  
  // Toggles
  const [toggles, setToggles] = useState({
    seaForts: false,
    sunset: false,
    historical: false,
    shortTreks: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchForts();
  }, []);

  const fetchForts = async () => {
    try {
      const response = await getAllForts();
      const fortsData = Array.isArray(response.data) ? response.data : [];

      if (fortsData.length > 0) {
        const normalizeName = (n) => (n || '').toLowerCase().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
        const staticByName = {};
        staticForts.forEach(sf => { staticByName[normalizeName(sf.name)] = sf; });

        const mergedForts = fortsData.map(fort => {
          const staticMatch = staticByName[normalizeName(fort.name)];
          if (staticMatch?.images?.length > 0) {
            return { ...fort, images: staticMatch.images, crowdStatus: staticMatch.crowdStatus || fort.crowdStatus };
          }
          return fort;
        });

        const apiNames = new Set(mergedForts.map(f => normalizeName(f.name)));
        const missingForts = staticForts.filter(sf => !apiNames.has(normalizeName(sf.name)));
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

  const filteredForts = useMemo(() => {
    let result = forts.filter(fort => {
      if (!fort?.name || !fort?.location) return false;
      
      const searchMatch = fort.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          fort.location.district?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const diffMatch = difficultyFilter === 'all' || 
                        fort.difficulty === difficultyFilter || 
                        (difficultyFilter === 'Hard' && fort.difficulty === 'Difficult');
                        
      const districtMatch = !selectedDistrict || fort.location.district?.toLowerCase() === selectedDistrict.toLowerCase();
      
      // Toggle Matches (Simplified logic for categories if they exist in data, otherwise allow all for demo)
      const isSeaFort = (fort.type || fort.name).toLowerCase().includes('sea');
      const seaMatch = !toggles.seaForts || isSeaFort || activeTab === 'sea_forts';
      
      return searchMatch && diffMatch && districtMatch && seaMatch;
    });
    return result;
  }, [forts, searchTerm, difficultyFilter, selectedDistrict, toggles, activeTab]);

  return (
    <div className="min-h-screen bg-royal-black text-white font-body selection:bg-saffron selection:text-black">
      <Navbar />
      
      <div className="flex flex-col min-h-screen pt-[70px]">
        
        {/* ======================= HERO SECTION ======================= */}
        <div className="relative w-full pt-20 pb-16 lg:pt-32 lg:pb-24 flex flex-col items-center justify-center p-6 sm:p-10 border-b border-white/5">
          {/* Background Image & Gradient */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src={heroBg || 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920'} 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-30 transform scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-royal-black/90 via-royal-black/50 to-royal-black z-0"></div>
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
            
            {/* Hero Title */}
            <div className="mb-10 lg:mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-cinematic font-black leading-tight tracking-wide mb-6">
                EXPLORE THE LEGENDARY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-yellow-200 to-saffron drop-shadow-lg">FORTS OF MAHARASHTRA</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-xl max-w-3xl mx-auto leading-relaxed">
                Uncover the history, challenge yourself on the terrain, 
                and walk the paths of the Maratha Empire.
              </p>
            </div>

            {/* Premium Search Box */}
            <div className="w-full max-w-4xl p-6 sm:p-10 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
              {/* Glow back element */}
              <div className="absolute inset-0 bg-saffron/5 blur-xl rounded-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-white font-bold font-cinematic uppercase tracking-widest text-lg sm:text-2xl mb-6 flex justify-center items-center gap-3">
                  <GiCastle className="text-saffron" /> FIND YOUR PERFECT FORT <GiCastle className="text-saffron" />
                </h2>
                <div className="relative flex items-center mb-5">
                  <FaSearch className="absolute left-6 text-gray-500 text-lg" />
                  <input 
                    type="text"
                    placeholder="Search by name, district, or keyword..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-full py-4 sm:py-5 pl-16 pr-[120px] sm:pr-48 text-white text-xs sm:text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-saffron/50 transition-colors shadow-inner"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-6 sm:px-10 bg-gradient-to-r from-saffron to-[#d97c26] text-black font-black uppercase text-[10px] sm:text-sm tracking-widest rounded-full hover:from-yellow-400 hover:to-saffron transition-all shadow-[0_0_20px_rgba(255,153,51,0.3)] hover:shadow-[0_0_30px_rgba(255,153,51,0.5)]">
                    FIND MY FORT
                  </button>
                </div>
                <div className="flex justify-end pr-2 sm:pr-6">
                  <button className="flex items-center gap-2 text-saffron text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                    <FaMapMarkerAlt /> NEAR ME
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ======================= INTERACTIVE MAP & FILTERS ======================= */}
        <div className="w-full bg-[#070707] p-8 sm:p-16 border-b border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Map Canvas */}
            <div className="w-full lg:w-5/12 relative flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
              
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                
                {/* Orbital Rings Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute w-[85%] h-[85%] border border-white/[0.03] rounded-full"></div>
                  <div className="absolute w-[90%] h-[80%] border border-[#C47D3B]/20 rounded-full rotate-[15deg] transition-transform duration-[1000ms]"></div>
                  <div className="absolute w-[80%] h-[90%] border border-[#C47D3B]/10 rounded-full -rotate-[15deg] transition-transform duration-[1000ms]"></div>
                  <div className="absolute w-[95%] h-[95%] border border-white/[0.02] rounded-full"></div>
                </div>

                {mapDistricts.map((d) => {
                  const isActive = selectedDistrict === d.name || (selectedDistrict === null && d.name === 'Pune');
                  return (
                    <div 
                      key={d.name} 
                      className="absolute cursor-pointer flex flex-col items-center group z-10"
                      style={{ top: `${d.y}%`, left: `${d.x}%`, transform: 'translate(-50%, -50%)' }}
                      onClick={() => setSelectedDistrict(selectedDistrict === d.name ? null : d.name)}
                    >
                      {/* Tag */}
                      <div className={`flex items-center gap-2 mb-3 bg-[#111] backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border opacity-95 transition-all duration-300 hover:scale-105 ${isActive ? 'border-saffron/80 shadow-[0_0_15px_rgba(255,153,51,0.15)]' : 'border-white/10 hover:border-white/30'}`}>
                        <FaMapMarkerAlt className={isActive ? 'text-saffron drop-shadow-[0_0_8px_rgba(255,153,51,0.8)]' : 'text-gray-500'} size={12} />
                        <span className="text-[10px] sm:text-xs uppercase font-bold text-gray-300 tracking-[0.15em] whitespace-nowrap">{d.name}</span>
                      </div>
                      
                      {/* Glowing Dot */}
                      <div className="relative flex justify-center items-center w-full h-4">
                        {isActive ? (
                          <>
                            <div className="absolute w-12 h-12 bg-saffron/15 rounded-full blur-md animate-pulse"></div>
                            <div className="absolute w-6 h-6 bg-saffron/40 rounded-full animate-pulse"></div>
                            <div className="w-2.5 h-2.5 bg-saffron rounded-full shadow-[0_0_10px_2px_rgba(255,153,51,0.8)] relative z-10"></div>
                          </>
                        ) : (
                          <div className="w-2 h-2 bg-[#4A5568] rounded-full shadow-[0_0_8px_1px_rgba(74,85,104,0.3)] group-hover:bg-[#718096] transition-colors"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Challenge Ratings & Toggles */}
            <div className="w-full lg:w-7/12 flex flex-col">
              
              <div className="mb-12">
                <h3 className="text-white text-xl sm:text-2xl font-cinematic font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-saffron"></div> CHALLENGE RATING
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {CHALLENGE_RATINGS.map(cr => (
                    <button 
                      key={cr.id}
                      onClick={() => setDifficultyFilter(difficultyFilter === cr.id ? 'all' : cr.id)}
                      className={`group flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                        difficultyFilter === cr.id 
                        ? 'border-saffron bg-saffron/10 shadow-[0_0_20px_rgba(255,153,51,0.15)] scale-[1.02]' 
                        : `bg-white/[0.01] ${cr.color}`
                      }`}
                    >
                      <div className={`p-3 rounded-xl bg-black/50 ${difficultyFilter === cr.id ? 'text-saffron shadow-inner' : ''}`}>
                        {cr.icon}
                      </div>
                      <div className="text-left">
                        <div className={`font-black text-sm tracking-widest uppercase ${difficultyFilter === cr.id ? 'text-saffron drop-shadow-md' : 'text-white group-hover:text-white'}`}>
                          {cr.label}
                        </div>
                        <div className="text-[10px] text-gray-400 uppercase mt-1 tracking-wider">{cr.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8">
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Quick Filters</h4>
                <div className="flex flex-wrap items-center justify-between lg:justify-start lg:gap-12 gap-6">
                  <ToggleSwitch 
                    active={toggles.seaForts} onClick={() => setToggles({...toggles, seaForts: !toggles.seaForts})} 
                    label="SEA FORTS" icon={<GiCastle size={20} />} 
                  />
                  <ToggleSwitch 
                    active={toggles.sunset} onClick={() => setToggles({...toggles, sunset: !toggles.sunset})} 
                    label="BEST FOR SUNSET" icon={<FaSun size={20} />} 
                  />
                  <ToggleSwitch 
                    active={toggles.historical} onClick={() => setToggles({...toggles, historical: !toggles.historical})} 
                    label="HISTORICAL SITES" icon={<FaHistory size={20} />} 
                  />
                  <ToggleSwitch 
                    active={toggles.shortTreks} onClick={() => setToggles({...toggles, shortTreks: !toggles.shortTreks})} 
                    label="SHORT TREKS" icon={<FaHiking size={20} />} 
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* ======================= GRID SECTION ======================= */}
        <div className="w-full bg-[#0A0A0A] p-6 sm:p-12 min-h-screen relative">
          
          <div className="max-w-7xl mx-auto">
            
            {/* Top Category Tabs */}
            <div className="sticky top-0 z-20 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 pt-6 pb-2 mb-10 -mx-6 px-6 sm:-mx-12 sm:px-12">
              <div className="flex space-x-10 overflow-x-auto hide-scrollbar">
                {CATEGORY_TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center gap-3 flex-shrink-0 group relative pb-3 transition-colors px-2 ${
                      activeTab === tab.id ? 'text-saffron' : 'text-gray-500 hover:text-gray-200'
                    }`}
                  >
                    <div className={`p-2 rounded-full transition-colors ${activeTab === tab.id ? 'bg-saffron/10 text-saffron' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
                      {tab.icon}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase block">
                      {tab.label}
                    </span>
                    {/* Active Underline */}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-saffron rounded-t-full shadow-[0_-2px_10px_rgba(255,153,51,0.5)]"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <div className="flex flex-col justify-center items-center h-96">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-saffron mb-6"></div>
                <p className="text-saffron font-cinematic uppercase tracking-widest animate-pulse">Summoning History...</p>
              </div>
            ) : filteredForts.length === 0 ? (
              <div className="text-center py-32 bg-white/[0.01] rounded-3xl border border-white/5">
                <FaSearch className="text-6xl text-gray-800 mx-auto mb-6" />
                <h3 className="text-2xl sm:text-3xl font-cinematic font-bold text-gray-500 mb-4">No Forts Found</h3>
                <p className="text-base text-gray-600 max-w-md mx-auto">None of the ancestral strongholds match your current filters or search terms.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setDifficultyFilter('all'); setSelectedDistrict(null); setToggles({seaForts:false,sunset:false,historical:false,shortTreks:false}); setActiveTab('all'); }}
                  className="mt-8 px-8 py-3 border-2 border-saffron/50 text-saffron rounded-full text-xs font-bold tracking-widest uppercase hover:bg-saffron hover:text-black transition-all shadow-[0_0_15px_rgba(255,153,51,0.2)]"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-24">
                {filteredForts.map(fort => (
                  <FortCard key={fort._id || fort.name} fort={fort} />
                ))}
              </div>
            )}

            {/* Footer */}
            {!loading && filteredForts.length > 0 && (
              <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest space-y-6 md:space-y-0 pb-16">
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-saffron transition-colors">Legal</a>
                  <a href="#" className="hover:text-saffron transition-colors">Social Info</a>
                  <a href="#" className="hover:text-saffron transition-colors">Contact Info</a>
                </div>
                
                <div className="text-[#C47D3B] flex flex-col items-center justify-center text-center max-w-md">
                  <span className="font-bold tracking-[0.2em] mb-3 text-sm">
                    "VISIT WITH RESPECT FOR HISTORY AND NATURE."
                  </span>
                  <span className="text-[9px] sm:text-[10px] opacity-40 block">Copyright © 2026 Mahafort Guide, Inc. All rights reserved.</span>
                </div>

                <div className="flex space-x-5 text-xl opacity-80">
                  <FaFacebook className="hover:text-saffron cursor-pointer transition-colors hover:scale-110" />
                  <FaTwitter className="hover:text-saffron cursor-pointer transition-colors hover:scale-110" />
                  <FaInstagram className="hover:text-saffron cursor-pointer transition-colors hover:scale-110" />
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
      
      {/* Global override for horizontal scrollbars */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default Forts;
