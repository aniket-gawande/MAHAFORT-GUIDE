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

// ─── Maharashtra 6-region colour scheme (matches reference map) ───
const REGION_MAP = {
  konkan:     { label: 'Konkan',     color: '#dc2626', glow: 'rgba(220,38,38,0.5)',   districts: ['Palghar','Thane','Raigad','Ratnagiri','Sindhudurg','Mumbai','Mumbai Suburban'] },
  pune:       { label: 'Pune',       color: '#2563eb', glow: 'rgba(37,99,235,0.5)',   districts: ['Pune','Satara','Solapur','Sangli','Kolhapur','Ahmednagar'] },
  nagpur:     { label: 'Nagpur',     color: '#16a34a', glow: 'rgba(22,163,74,0.5)',   districts: ['Nagpur','Wardha','Yavatmal','Bhandara','Gondia','Chandrapur','Gadchiroli'] },
  nashik:     { label: 'Nashik',     color: '#7c3aed', glow: 'rgba(124,58,237,0.5)', districts: ['Nashik','Dhule','Nandurbar','Jalgaon'] },
  aurangabad: { label: 'Aurangabad', color: '#ea580c', glow: 'rgba(234,88,12,0.5)',  districts: ['Aurangabad','Chhatrapati Sambhajinagar','Jalna','Beed','Dharashiv','Dharashiv (Osmanabad)','Osmanabad','Latur','Nanded','Hingoli','Parbhani'] },
  amravati:   { label: 'Amravati',   color: '#ca8a04', glow: 'rgba(202,138,4,0.5)',  districts: ['Amravati','Akola','Buldhana','Washim'] },
};
const getRegionStyle = (name) => {
  for (const r of Object.values(REGION_MAP)) {
    if (r.districts.includes(name)) return r;
  }
  return { label: 'Other', color: '#6b7280', glow: 'rgba(107,114,128,0.4)' };
};
// Geographic coordinates of Maharashtra district centres [lat, lon]
// Carefully calibrated to match the official district map
const DISTRICT_GEO = {
  'Nandurbar': [21.38, 74.24], 'Dhule': [20.90, 74.78], 'Jalgaon': [21.02, 75.57],
  'Buldhana': [20.53, 76.18], 'Akola': [20.71, 77.00], 'Washim': [20.12, 77.15],
  'Amravati': [20.93, 77.75], 'Yavatmal': [20.38, 78.12], 'Wardha': [20.75, 78.60],
  'Nagpur': [21.15, 79.10], 'Bhandara': [21.17, 79.65], 'Gondia': [21.45, 80.20],
  'Chandrapur': [20.05, 79.30], 'Gadchiroli': [20.18, 80.02],
  'Palghar': [19.80, 72.77], 'Thane': [19.35, 73.00],
  'Raigad': [18.25, 73.20], 'Ratnagiri': [17.00, 73.32],
  'Sindhudurg': [16.05, 73.55], 'Nashik': [20.00, 73.80],
  'Ahmednagar': [19.10, 74.75], 'Pune': [18.52, 74.00],
  'Satara': [17.68, 74.00], 'Sangli': [16.86, 74.58],
  'Kolhapur': [16.70, 74.24], 'Solapur': [17.69, 75.91],
  'Aurangabad': [19.88, 75.34], 'Chhatrapati Sambhajinagar': [19.88, 75.34],
  'Jalna': [19.83, 75.90], 'Beed': [18.99, 75.74],
  'Osmanabad': [18.19, 76.05], 'Dharashiv': [18.19, 76.05],
  'Dharashiv (Osmanabad)': [18.19, 76.05], 'Latur': [18.40, 76.56],
  'Nanded': [19.15, 77.32], 'Hingoli': [19.72, 77.15], 'Parbhani': [19.27, 76.77],
};
// Map bounds matching Maharashtra extents
const GEO = { minLon: 72.5, maxLon: 81.0, minLat: 15.4, maxLat: 22.2 };
const geoToPercent = (lat, lon) => ([
  +((lon - GEO.minLon) / (GEO.maxLon - GEO.minLon) * 100).toFixed(1),
  +((GEO.maxLat - lat)  / (GEO.maxLat - GEO.minLat) * 100).toFixed(1),
]);
// Maharashtra border — calibrated to exactly match official district reference map
// viewBox 0 0 100 80 (lon 72.5→81.0, lat 15.4→22.2)
const MH_PATH = [
  'M16.5,9.2',
  'C18,6.8 21,7.2 22.4,10',
  'L28,9.2 34,8 38,8.2 43,7.4',
  'L46.5,7 52,6 55.5,6.4 59.5,5.8 63,5.2',
  'L68,5 73,5.2 76,4.8 80.5,5.4 85,5.2',
  'L89,4.8 91.5,5.6',
  'C94,6.5 95.5,9 95.5,12',
  'L95,18 94.8,25 94,33',
  'L92,40 90,44.5 88,47.8',
  'C86,51 84,53 81,55',
  'L78,57.5 74,59 70,60',
  'L65.5,60 62,61.5 58,63 54,65',
  'L50,67 47,69.5 44,72 40,74.5',
  'L36.5,76.5 32,79 27,80.5',
  'C23,82 20,82.5 17.5,80.5',
  'L16,78.5 15,76',
  'C12.5,79 10.5,79 9.5,76.5',
  'L9,71 8.5,65.5 8,60.5 7.5,56 7,51 6.5,46 6,41.5',
  'L5.5,36.5 5.2,32 4.8,27 3.8,21',
  'C3.5,17 4.5,14 7,12',
  'L9.5,11 12,10 16.5,9.2 Z'
].join(' ');
const buildMapDistricts = () => {
  const seen = new Set();
  return staticForts
    .filter(f => f?.location?.district)
    .reduce((acc, f) => {
      const name = f.location.district;
      if (!seen.has(name)) {
        seen.add(name);
        const coords = DISTRICT_GEO[name];
        if (coords) {
          const [x, y] = geoToPercent(coords[0], coords[1]);
          acc.push({ name, x, y });
        }
      }
      return acc;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));
};
const mapDistricts = buildMapDistricts();

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
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  
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
      
const fortDifficulty = fort.difficulty || fort.trek?.difficulty || fort.trek?.routes?.[0]?.difficulty || 'Moderate';
      const normalizedDifficulty = fortDifficulty.toLowerCase();
      const filterDiff = difficultyFilter.toLowerCase();
      
      const diffMatch = filterDiff === 'all' || 
                        normalizedDifficulty.includes(filterDiff) || 
                        (filterDiff === 'hard' && normalizedDifficulty.includes('difficult')) ||
                        (filterDiff === 'medium' && normalizedDifficulty.includes('moderate'));
                        
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
            
            {/* ── IMPROVED DISTRICT FILTER (Replaced Buggy Map) ── */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c47d3b]/10 to-transparent pointer-events-none"></div>
              
              <div className="mb-6 flex items-center justify-between z-10 w-full">
                <h3 className="text-white text-lg font-cinematic font-bold uppercase tracking-widest flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-[#c47d3b]"></div>
                  Choose District
                </h3>
                {selectedDistrict && (
                  <button 
                    onClick={() => setSelectedDistrict(null)}
                    className="text-xs text-red-400 hover:text-red-300 font-bold tracking-wider uppercase border border-red-500/30 px-3 py-1 rounded-full transition-colors bg-red-500/10"
                  >
                    Clear Filter
                  </button>
                )}
              </div>

              <div className="z-10 bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 max-h-[300px] overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-2">
                  {mapDistricts.map(d => {
                    const isActive = selectedDistrict === d.name;
                    const count = staticForts.filter(f => f?.location?.district === d.name).length;
                    if (count === 0) return null; // Only show districts with forts

                    return (
                      <button
                        key={d.name}
                        onClick={() => setSelectedDistrict(isActive ? null : d.name)}
                        className={`group flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all duration-300 ${
                          isActive 
                          ? 'bg-[#c47d3b] text-black border-[#c47d3b] shadow-[0_0_15px_rgba(196,125,59,0.4)] scale-105' 
                          : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:border-[#c47d3b]/50 hover:text-white'
                        }`}
                      >
                        <span className="tracking-wider">{d.name}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] transition-colors ${
                          isActive 
                          ? 'bg-black/20 text-black' 
                          : 'bg-black/50 text-[#c47d3b] group-hover:text-white'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 text-center z-10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  {selectedDistrict 
                    ? `Showing ${filteredForts.length} forts in ${selectedDistrict}`
                    : `Displaying all ${staticForts.length} legendary forts`
                  }
                </p>
              </div>
            </div>

            {/* ═══════ EXPANDED MAP MODAL ═══════ */}
            {isMapExpanded && (
              <div
                className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-4"
                style={{ animation: 'fadeIn 0.25s ease' }}
                onClick={() => setIsMapExpanded(false)}
              >
                <div
                  className="relative w-full max-w-5xl bg-[#050505] border border-white/5 rounded-3xl p-8 shadow-2xl"
                  style={{ animation: 'scaleIn 0.25s ease' }}
                  onClick={e => e.stopPropagation()}
                >
                  {/* Modal header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-cinematic font-black text-white tracking-widest uppercase">
                        Maharashtra <span className="text-[#C47D3B]">District Map</span>
                      </h2>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">
                        Click any district to filter forts · {mapDistricts.length} districts
                      </p>
                    </div>
                    <button onClick={() => setIsMapExpanded(false)}
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all text-sm">
                      ✕
                    </button>
                  </div>

                  {/* Region legend + status */}
                  <div className="mt-5 flex flex-wrap justify-center gap-4">
                    {Object.values(REGION_MAP).map(r => (
                      <div key={r.label} className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }}></div>
                        <span className="text-[9px] uppercase font-bold tracking-wider" style={{ color: r.color + 'bb' }}>{r.label}</span>
                      </div>
                    ))}
                  </div>
                  {selectedDistrict && (() => { const rs = getRegionStyle(selectedDistrict); return (
                    <p className="text-center text-sm font-bold uppercase tracking-widest mt-3" style={{ color: rs.color }}>
                      {filteredForts.length} fort{filteredForts.length !== 1 ? 's' : ''} found in {selectedDistrict}
                    </p>);})()}
                </div>
              </div>
            )}



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
      
      {/* Global CSS: modal animations + scrollbar hide */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}} />
    </div>
  );
};

export default Forts;
