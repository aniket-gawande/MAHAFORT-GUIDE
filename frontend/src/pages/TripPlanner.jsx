import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TripWeatherForecast from '../components/TripWeatherForecast';
import { staticForts } from '../data/staticForts';
import {
  FaMapMarkerAlt, FaMountain, FaCalendarAlt, FaClock, FaRupeeSign,
  FaHiking, FaRoute, FaStar, FaPlus, FaTimes, FaChevronRight,
  FaChevronLeft, FaDownload, FaUsers, FaCloudSun, FaCheckCircle,
  FaCampground, FaWater, FaFirstAid, FaCamera, FaSun, FaMoon,
  FaUtensils, FaBus, FaSearch, FaFilter, FaArrowRight, FaArrowDown,
  FaExchangeAlt, FaInfoCircle, FaMapSigns, FaShieldAlt, FaFlagCheckered
} from 'react-icons/fa';
import { MdOutlineTravelExplore, MdDirectionsWalk } from 'react-icons/md';
import { GiCastle, GiMountainRoad, GiBackpack, GiCompass, GiCampfire } from 'react-icons/gi';
import heroBg from '../assets/hero-fort.jpg';

// ──────────────────────────── CONSTANTS  ────────────────────────────

const SEASONS = [
  { id: 'winter', label: 'Winter (Oct–Feb)', icon: '❄️', months: [10,11,12,1,2], tip: 'Best for trekking, clear skies' },
  { id: 'summer', label: 'Summer (Mar–May)', icon: '☀️', months: [3,4,5], tip: 'Hot, carry extra water' },
  { id: 'monsoon', label: 'Monsoon (Jun–Sep)', icon: '🌧️', months: [6,7,8,9], tip: 'Lush green, slippery trails' },
];

const DIFFICULTY_COLORS = {
  Easy: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  Moderate: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  Hard: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
};

const BUDGET_ITEMS = [
  { label: 'Transport (Bus/Train)', perPerson: 300, icon: <FaBus /> },
  { label: 'Entry Fees', perPerson: 50, icon: <FaRupeeSign /> },
  { label: 'Food & Water', perPerson: 400, icon: <FaUtensils /> },
  { label: 'Guide (Optional)', perPerson: 150, icon: <FaUsers /> },
  { label: 'Emergency Fund', perPerson: 200, icon: <FaFirstAid /> },
];

const PACKING_LIST = [
  { category: 'Essentials', icon: <GiBackpack className="text-saffron" />, items: ['Backpack (20-30L)', 'Water bottles (2-3L)', 'Torch / Headlamp', 'First Aid Kit', 'Powerbank', 'ID proof & cash'] },
  { category: 'Clothing', icon: <FaSun className="text-amber-400" />, items: ['Trekking shoes', 'Quick-dry T-shirts', 'Windcheater / Raincoat', 'Cap / Hat', 'Extra socks'] },
  { category: 'Food', icon: <FaUtensils className="text-green-400" />, items: ['Energy bars / Chikki', 'Dry fruits & Glucose', 'Lemon + Salt + Sugar', 'Packed lunch (if overnight)'] },
  { category: 'Safety', icon: <FaShieldAlt className="text-red-400" />, items: ['Sunscreen SPF 50+', 'Insect repellent', 'ORS packets', 'Whistle', 'Rope (Hard treks)'] },
];

const STEPS = [
  { id: 0, label: 'Select Forts', icon: <GiCastle /> },
  { id: 1, label: 'Plan Days', icon: <FaCalendarAlt /> },
  { id: 2, label: 'Route & Budget', icon: <FaRoute /> },
  { id: 3, label: 'Gear Up', icon: <GiBackpack /> },
  { id: 4, label: 'Review & Export', icon: <FaFlagCheckered /> },
];

// ──────────────────────────── HELPERS  ────────────────────────────

const getDistanceEstimate = (fort1, fort2) => {
  const districtMap = {
    Pune: { lat: 18.52, lng: 73.86 }, Raigad: { lat: 18.25, lng: 73.18 },
    Satara: { lat: 17.68, lng: 74.0 }, Kolhapur: { lat: 16.7, lng: 74.24 },
    Sindhudurg: { lat: 16.0, lng: 73.46 }, Ahmednagar: { lat: 19.1, lng: 74.75 },
    Thane: { lat: 19.2, lng: 72.97 }, Nashik: { lat: 19.99, lng: 73.79 },
  };
  const d1 = districtMap[fort1.location?.district] || { lat: 18.5, lng: 73.8 };
  const d2 = districtMap[fort2.location?.district] || { lat: 18.5, lng: 73.8 };
  const R = 6371;
  const dLat = ((d2.lat - d1.lat) * Math.PI) / 180;
  const dLon = ((d2.lng - d1.lng) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((d1.lat * Math.PI) / 180) * Math.cos((d2.lat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

const optimizeRoute = (forts) => {
  if (forts.length <= 2) return forts;
  const remaining = [...forts];
  const route = [remaining.shift()];
  while (remaining.length) {
    let nearestIdx = 0;
    let minDist = Infinity;
    remaining.forEach((f, i) => {
      const dist = getDistanceEstimate(route[route.length - 1], f);
      if (dist < minDist) { minDist = dist; nearestIdx = i; }
    });
    route.push(remaining.splice(nearestIdx, 1)[0]);
  }
  return route;
};

// ──────────────────────────── MAIN COMPONENT  ────────────────────────────

const TripPlanner = () => {
  const [step, setStep] = useState(0);
  const [selectedForts, setSelectedForts] = useState([]);
  const [tripDays, setTripDays] = useState([]);
  const [groupSize, setGroupSize] = useState(2);
  const [season, setSeason] = useState('winter');
  const [startDate, setStartDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [districtFilter, setDistrictFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [optimizedRoute, setOptimizedRoute] = useState([]);
  const [showAllForts, setShowAllForts] = useState(false);
  const topRef = useRef(null);

  // Scroll to top on step change
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);

  // All districts
  const districts = useMemo(() => {
    const d = new Set(staticForts.filter(f => f?.location?.district).map(f => f.location.district));
    return ['all', ...Array.from(d).sort()];
  }, []);

  // Filtered forts
  const filteredForts = useMemo(() => {
    return staticForts.filter(f => {
      if (!f?.name) return false;
      const matchSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDistrict = districtFilter === 'all' || f.location?.district === districtFilter;
      const matchDiff = difficultyFilter === 'all' || f.difficulty === difficultyFilter;
      return matchSearch && matchDistrict && matchDiff;
    });
  }, [searchTerm, districtFilter, difficultyFilter]);

  const displayedForts = showAllForts ? filteredForts : filteredForts.slice(0, 12);

  // Toggle fort selection
  const toggleFort = useCallback((fort) => {
    setSelectedForts(prev =>
      prev.find(f => f._id === fort._id)
        ? prev.filter(f => f._id !== fort._id)
        : [...prev, fort]
    );
  }, []);

  // Initialise days when moving to step 1
  useEffect(() => {
    if (step === 1 && selectedForts.length > 0) {
      const optimized = optimizeRoute(selectedForts);
      setOptimizedRoute(optimized);
      const fortsPerDay = Math.max(1, Math.min(2, Math.ceil(optimized.length / 3)));
      const days = [];
      for (let i = 0; i < optimized.length; i += fortsPerDay) {
        days.push({
          id: days.length + 1,
          forts: optimized.slice(i, i + fortsPerDay),
          startTime: '06:00',
          notes: '',
        });
      }
      setTripDays(days);
    }
  }, [step, selectedForts]);

  // Budget calc
  const totalBudget = useMemo(() => {
    const perPerson = BUDGET_ITEMS.reduce((s, b) => s + b.perPerson, 0) * tripDays.length;
    return perPerson * groupSize;
  }, [tripDays, groupSize]);

  // Total distance
  const totalDistance = useMemo(() => {
    if (optimizedRoute.length < 2) return 0;
    let d = 0;
    for (let i = 0; i < optimizedRoute.length - 1; i++) {
      d += getDistanceEstimate(optimizedRoute[i], optimizedRoute[i + 1]);
    }
    return d;
  }, [optimizedRoute]);

  // Navigation
  const canProceed = step === 0 ? selectedForts.length > 0 : true;
  const nextStep = () => { if (canProceed && step < 4) setStep(step + 1); };
  const prevStep = () => { if (step > 0) setStep(step - 1); };

  // ─── Day management ───
  const removeFortFromDay = (dayIdx, fortId) => {
    setTripDays(prev => prev.map((d, i) => i === dayIdx ? { ...d, forts: d.forts.filter(f => f._id !== fortId) } : d).filter(d => d.forts.length > 0));
  };

  const updateDayNotes = (dayIdx, notes) => {
    setTripDays(prev => prev.map((d, i) => i === dayIdx ? { ...d, notes } : d));
  };

  const updateDayTime = (dayIdx, time) => {
    setTripDays(prev => prev.map((d, i) => i === dayIdx ? { ...d, startTime: time } : d));
  };

  // ─── PDF Export ───
  const exportPlan = () => {
    const seasonInfo = SEASONS.find(s => s.id === season);
    let text = `╔══════════════════════════════════════════════════╗\n`;
    text += `║     🏰 MAHAFORT GUIDE — EXPEDITION PLAN          ║\n`;
    text += `╚══════════════════════════════════════════════════╝\n\n`;
    text += `Season: ${seasonInfo?.label}\n`;
    text += `Group Size: ${groupSize} warriors\n`;
    text += `Total Forts: ${selectedForts.length}\n`;
    text += `Total Distance: ~${totalDistance} km\n`;
    text += `Estimated Budget: ₹${totalBudget.toLocaleString()}\n\n`;
    text += `${'═'.repeat(50)}\n📅 DAY-WISE ITINERARY\n${'═'.repeat(50)}\n\n`;

    tripDays.forEach((day, i) => {
      text += `┌─── Day ${i + 1} (Start: ${day.startTime}) ───┐\n`;
      day.forts.forEach(f => {
        text += `  🏰 ${f.name}\n`;
        text += `     📍 ${f.location?.district} | ⛰️ ${f.altitude || 'N/A'} | 🥾 ${f.difficulty}\n`;
        text += `     ⭐ ${f.rating}/5 | 🕐 ${f.timings || 'N/A'} | 💰 ${f.entryFee || 'Free'}\n`;
        text += `     📜 ${f.historicalSignificance || f.description}\n\n`;
      });
      if (day.notes) text += `  📝 Notes: ${day.notes}\n`;
      text += `└${'─'.repeat(40)}┘\n\n`;
    });

    text += `${'═'.repeat(50)}\n💰 BUDGET BREAKDOWN (Per Person × ${groupSize})\n${'═'.repeat(50)}\n\n`;
    BUDGET_ITEMS.forEach(b => {
      text += `  ${b.label}: ₹${b.perPerson} × ${tripDays.length} days = ₹${b.perPerson * tripDays.length}\n`;
    });
    text += `\n  TOTAL: ₹${totalBudget.toLocaleString()}\n\n`;

    text += `${'═'.repeat(50)}\n🎒 PACKING CHECKLIST\n${'═'.repeat(50)}\n\n`;
    PACKING_LIST.forEach(cat => {
      text += `  [${cat.category}]\n`;
      cat.items.forEach(item => { text += `    ☐ ${item}\n`; });
      text += '\n';
    });

    text += `\n⚠️ SAFETY TIPS\n`;
    text += `  • Always inform someone about your trek plan\n`;
    text += `  • Start early, return before sunset\n`;
    text += `  • Carry minimum 3L water per person\n`;
    text += `  • Do NOT litter — Keep forts clean!\n`;
    text += `  • Emergency: 112 (All India)\n\n`;
    text += `Generated by MAHAFORT GUIDE — Jai Shivaji! 🚩\n`;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MahaFort_Trek_Plan_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ──────────────────────────── RENDER  ────────────────────────────

  return (
    <div className="min-h-screen bg-royal-black text-white font-body selection:bg-saffron selection:text-black" ref={topRef}>
      <Navbar />

      {/* ───── HERO BANNER ───── */}
      <div className="relative pt-24 pb-12 flex flex-col items-center text-center">
        {/* Very subtle background gradient, no image noise */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-royal-black"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#111] border border-saffron/30 rounded-full mb-6 relative">
            <GiCompass className="text-saffron text-sm" />
            <span className="text-saffron font-bold tracking-widest text-[10px] uppercase">Expedition Command Center</span>
            <div className="absolute inset-0 bg-saffron/5 blur-sm rounded-full -z-10"></div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinematic font-black mb-4 leading-tight tracking-wider">
            <span className="text-white block">PLAN YOUR</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-yellow-400 to-[#d97c26] block drop-shadow-sm">
              CONQUEST
            </span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Chart your course through Maharashtra's legendary forts. Pick your
            targets, plan your days, gear up like a true Mavla, and march into history.
          </p>
        </div>
      </div>

      {/* ───── STEP PROGRESS BAR ───── */}
      <div className="relative z-40 bg-royal-black pb-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            {STEPS.map((s, i) => (
              <React.Fragment key={s.id}>
                <button
                  onClick={() => (i <= step || (i === step + 1 && canProceed)) && setStep(i)}
                  className={`flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 transition-all duration-300 group cursor-pointer ${i === step ? 'scale-105' : i < step ? 'opacity-80' : 'opacity-40 hover:opacity-70'}`}
                >
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-sm transition-all duration-300
                    ${i === step ? 'bg-saffron/10 text-saffron border border-saffron/40 shadow-inner' :
                      i < step ? 'text-saffron' : 'text-gray-500'}
                  `}>
                    {i === 0 && i === step ? <GiCastle size={14} /> : React.cloneElement(s.icon, {size: 14})}
                  </div>
                  <span className={`text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase hidden sm:block
                    ${i === step ? 'text-saffron' : i < step ? 'text-saffron/60' : 'text-gray-500'}`}>
                    {s.label}
                  </span>
                </button>
                {i < STEPS.length - 1 && (
                  <div className={`w-6 sm:w-10 h-px mx-1.5 sm:mx-3 transition-all duration-500
                    ${i < step ? 'bg-saffron/30' : 'bg-white/10'}`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ───── MAIN CONTENT ───── */}
      <div className="container mx-auto px-4 sm:px-6 py-4">

        {/* ╔═══════════════════ STEP 0: SELECT FORTS ═══════════════════╗ */}
        {step === 0 && (
          <div className="animate-fade-in-up flex flex-col items-center">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-cinematic font-bold mb-2 flex items-center justify-center gap-3">
                <GiCastle className="text-saffron" size={24} />
                <span className="text-white">CHOOSE YOUR</span> <span className="text-saffron">FORTS</span>
              </h2>
              <p className="text-gray-500 text-[11px] sm:text-xs max-w-sm mx-auto">Select the forts you want to conquer. We'll optimize your route and build a battle plan.</p>
            </div>

            {/* Search & Filter Bar */}
            <div className="w-full max-w-5xl bg-[#0a0a0a] border border-white/5 rounded-2xl p-2 mb-10 flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 w-full relative">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                <input
                  type="text"
                  placeholder="Search forts by name.."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-none py-3 pl-12 pr-4 text-gray-300 placeholder-gray-600 focus:outline-none text-xs"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto p-1">
                <select value={districtFilter} onChange={e => setDistrictFilter(e.target.value)}
                  className="bg-[#111] border border-white/5 rounded-xl py-2.5 px-6 text-gray-400 appearance-none cursor-pointer focus:outline-none text-[10px] font-bold tracking-widest uppercase hover:bg-[#1a1a1a] transition-colors">
                  <option value="all">All Districts</option>
                  {districts.filter(d => d !== 'all').map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <select value={difficultyFilter} onChange={e => setDifficultyFilter(e.target.value)}
                  className="bg-[#111] border border-white/5 rounded-xl py-2.5 px-6 text-gray-400 appearance-none cursor-pointer focus:outline-none text-[10px] font-bold tracking-widest uppercase hover:bg-[#1a1a1a] transition-colors">
                  <option value="all">All Levels</option>
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            {/* Fort Cards Grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {displayedForts.map(fort => {
                const isSelected = selectedForts.find(f => f._id === fort._id);
                // Difficulty pill styles for the image overlay
                const diffStyles = {
                  Easy: 'bg-emerald-500/80 text-white',
                  Moderate: 'bg-yellow-500/80 text-white',
                  Hard: 'bg-red-500/80 text-white',
                  Difficult: 'bg-red-500/80 text-white'
                };
                const dcClass = diffStyles[fort.difficulty] || diffStyles.Moderate;
                const fortImage = fort.images && fort.images.length > 0 ? fort.images[0] : 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500';

                return (
                  <div key={fort._id} className={`group flex flex-col overflow-hidden rounded-2xl bg-[#0F0F0F] border transition-all duration-300 ${isSelected ? 'border-saffron/60 shadow-[0_0_15px_rgba(255,153,51,0.1)]' : 'border-white/5 hover:border-white/10 hover:shadow-xl'}`}>
                    {/* Top Image */}
                    <div className="relative h-44 w-full overflow-hidden">
                      <img src={fortImage} alt={fort.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-90"></div>
                      
                      {/* Difficulty Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm ${dcClass}`}>
                          {fort.difficulty}
                        </span>
                      </div>
                      
                      {/* Plus / Check Button */}
                      <button 
                        onClick={() => toggleFort(fort)} 
                        className={`absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-all border ${isSelected ? 'bg-saffron text-black border-saffron' : 'bg-black/40 text-white hover:bg-black/60 border-white/20'}`}
                      >
                        {isSelected ? <FaCheckCircle size={12} /> : <FaPlus size={10} />}
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1 pb-6">
                      <div className="flex items-center gap-1.5 text-saffron text-[10px] font-bold tracking-[0.15em] uppercase mb-1">
                        <FaMapMarkerAlt size={10} /> {fort.location?.district || 'PUNE'}
                      </div>
                      <h3 className="text-white font-cinematic font-bold text-sm uppercase tracking-wide mb-2 truncate">
                        {fort.name}
                      </h3>
                      <p className="text-gray-500 text-[10px] leading-relaxed line-clamp-2 mb-4 flex-1">
                        {fort.description || fort.historicalSignificance || 'A historic fort offering spectacular views and a glimpse into the Maratha empire.'}
                      </p>
                      
                      <div className="flex items-center gap-3 text-gray-500 text-[9px] font-bold tracking-wider">
                        <span className="flex items-center gap-1 text-[#C47D3B]">▲ {fort.altitude || '1312 m'}</span>
                        <span className="flex items-center gap-1 text-[#C47D3B]">★ {fort.rating || '4.6'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Show more */}
            {filteredForts.length > 12 && !showAllForts && (
              <div className="text-center w-full mb-6">
                <button onClick={() => setShowAllForts(true)}
                  className="px-6 py-2.5 bg-[#111] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">
                  SHOW ALL {filteredForts.length} FORTS ↓
                </button>
              </div>
            )}
            
            {/* Sticky Floating Action Button for Step 0 */}
            <div className="fixed bottom-6 right-6 z-50">
               <button onClick={nextStep} disabled={!canProceed}
                 className={`flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-[10px] tracking-widest uppercase transition-all shadow-xl
                   ${canProceed
                     ? 'bg-[#111] border border-white/10 text-gray-300 hover:border-saffron hover:text-saffron'
                     : 'bg-[#0a0a0a] text-gray-700 cursor-not-allowed border border-white/5 opacity-80'
                   }`}
               >
                 PLAN {selectedForts.length} FORT{selectedForts.length !== 1 ? 'S' : ''} <FaChevronRight size={10} />
               </button>
            </div>
          </div>
        )}

        {/* ╔═══════════════════ STEP 1: PLAN DAYS ═══════════════════╗ */}
        {step === 1 && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-cinematic font-bold mb-3">
                <FaCalendarAlt className="inline text-saffron mr-3" />
                Plan Your <span className="text-saffron">Days</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">We've optimized the route. Customize your day-wise plan below.</p>
            </div>

            {/* Weather & Date Section */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6 mb-10 text-center">
              <h3 className="text-sm font-bold text-saffron tracking-wider uppercase mb-4 flex justify-center items-center gap-2">
                <FaCalendarAlt /> Trip Start Date
              </h3>
              <input
                type="date"
                value={startDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-royal-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-saffron focus:outline-none mb-6 cursor-pointer"
              />
              {selectedForts.length > 0 && (
                <div className="mt-4 border-t border-white/5 pt-6 flex flex-col items-center">
                  <h4 className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">Weather Forecast for {selectedForts[0].name}</h4>
                  <div className="flex justify-center w-full max-w-sm text-left">
                    <TripWeatherForecast date={startDate} fortName={selectedForts[0].name} district={selectedForts[0].location?.district} />
                  </div>
                </div>
              )}
            </div>

            {/* Season & Group Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Season */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-saffron tracking-wider uppercase mb-4 flex items-center gap-2">
                  <FaCloudSun /> Select Season
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {SEASONS.map(s => (
                    <button key={s.id} onClick={() => setSeason(s.id)}
                      className={`p-3 rounded-xl text-center transition-all border
                        ${season === s.id
                          ? 'bg-saffron/10 border-saffron/50 shadow-[0_0_15px_rgba(255,153,51,0.15)]'
                          : 'bg-white/[0.02] border-white/5 hover:border-saffron/20'}
                      `}>
                      <span className="text-2xl block mb-1">{s.icon}</span>
                      <span className={`text-[10px] font-bold tracking-wider uppercase block ${season === s.id ? 'text-saffron' : 'text-gray-400'}`}>
                        {s.id}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-3 flex items-center gap-2">
                  <FaInfoCircle className="text-saffron" /> {SEASONS.find(s => s.id === season)?.tip}
                </p>
              </div>

              {/* Group Size */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-saffron tracking-wider uppercase mb-4 flex items-center gap-2">
                  <FaUsers /> Group Size
                </h3>
                <div className="flex items-center gap-4">
                  <button onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:border-saffron/50 hover:text-saffron transition-all text-xl font-bold">
                    –
                  </button>
                  <div className="flex-1 text-center">
                    <div className="text-5xl font-cinematic font-black text-saffron">{groupSize}</div>
                    <div className="text-gray-500 text-xs font-bold tracking-wider uppercase mt-1">Warriors</div>
                  </div>
                  <button onClick={() => setGroupSize(Math.min(20, groupSize + 1))}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:border-saffron/50 hover:text-saffron transition-all text-xl font-bold">
                    +
                  </button>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {[1, 2, 4, 6, 10].map(n => (
                    <button key={n} onClick={() => setGroupSize(n)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all
                        ${groupSize === n ? 'bg-saffron/20 text-saffron border border-saffron/30' : 'bg-white/5 text-gray-500 hover:text-white border border-white/5'}`}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Day Cards */}
            <div className="space-y-6">
              {tripDays.map((day, dayIdx) => (
                <div key={day.id} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-saffron/10 transition-all">
                  {/* Day Header */}
                  <div className="flex items-center justify-between p-5 border-b border-white/5 bg-white/[0.01]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-saffron/10 border border-saffron/30 flex items-center justify-center">
                        <span className="text-saffron font-cinematic font-black text-lg">{dayIdx + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-cinematic font-bold text-white">Day {dayIdx + 1}</h3>
                        <p className="text-gray-500 text-xs">{day.forts.length} fort{day.forts.length > 1 ? 's' : ''} planned</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="text-gray-600" size={12} />
                      <input
                        type="time"
                        value={day.startTime}
                        onChange={e => updateDayTime(dayIdx, e.target.value)}
                        className="bg-royal-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:border-saffron focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Forts in day */}
                  <div className="p-5 space-y-4">
                    {day.forts.map((fort, fi) => {
                      const dc = DIFFICULTY_COLORS[fort.difficulty] || DIFFICULTY_COLORS.Moderate;
                      return (
                        <div key={fort._id} className="flex items-start gap-4 group/fort">
                          {/* Timeline dot */}
                          <div className="flex flex-col items-center pt-1">
                            <div className="w-3 h-3 rounded-full bg-saffron border-2 border-royal-black shadow-[0_0_10px_rgba(255,153,51,0.5)]"></div>
                            {fi < day.forts.length - 1 && <div className="w-0.5 h-16 bg-saffron/20 mt-1"></div>}
                          </div>

                          {/* Fort card */}
                          <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden group-hover/fort:border-saffron/20 transition-all">
                            <div className="flex">
                              {/* Fort thumbnail */}
                              <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                                <img
                                  src={fort.images && fort.images.length > 0 ? fort.images[0] : 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200'}
                                  alt={fort.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-cinematic font-bold text-white mb-1">{fort.name}</h4>
                                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-400">
                                      <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-saffron" size={9} /> {fort.location?.district}</span>
                                      <span>•</span>
                                      <span className={`px-2 py-0.5 rounded ${dc.bg} ${dc.text} font-bold`}>{fort.difficulty}</span>
                                      <span>•</span>
                                      <span className="flex items-center gap-1"><FaMountain size={9} /> {fort.altitude || 'N/A'}</span>
                                      {fort.entryFee && <><span>•</span><span>💰 {fort.entryFee}</span></>}
                                    </div>
                                  </div>
                                  <button onClick={() => removeFortFromDay(dayIdx, fort._id)}
                                    className="text-gray-600 hover:text-red-400 transition-colors p-1">
                                    <FaTimes size={12} />
                                  </button>
                                </div>
                                {fort.historicalSignificance && (
                                  <p className="text-gray-600 text-xs mt-2 italic border-l-2 border-saffron/30 pl-2">
                                    {fort.historicalSignificance}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Day Notes */}
                    <div className="pt-2">
                      <textarea
                        value={day.notes}
                        onChange={e => updateDayNotes(dayIdx, e.target.value)}
                        placeholder="Add notes for this day (meeting point, transport details, etc.)..."
                        rows={2}
                        className="w-full bg-royal-black/30 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-700 focus:border-saffron/30 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ╔═══════════════════ STEP 2: ROUTE & BUDGET ═══════════════════╗ */}
        {step === 2 && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-cinematic font-bold mb-3">
                <FaRoute className="inline text-saffron mr-3" />
                Route & <span className="text-saffron">Budget</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Your optimized route and cost breakdown, Sardar!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Route Map Visualization */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-saffron tracking-wider uppercase mb-6 flex items-center gap-2">
                  <FaMapSigns /> Optimized Route
                </h3>

                {/* Route Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-3 bg-saffron/5 rounded-xl border border-saffron/10">
                    <div className="text-2xl font-cinematic font-black text-saffron">{optimizedRoute.length}</div>
                    <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">Forts</div>
                  </div>
                  <div className="text-center p-3 bg-saffron/5 rounded-xl border border-saffron/10">
                    <div className="text-2xl font-cinematic font-black text-saffron">~{totalDistance}</div>
                    <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">KM Total</div>
                  </div>
                  <div className="text-center p-3 bg-saffron/5 rounded-xl border border-saffron/10">
                    <div className="text-2xl font-cinematic font-black text-saffron">{tripDays.length}</div>
                    <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">Days</div>
                  </div>
                </div>

                {/* Visual Route */}
                <div className="space-y-1">
                  {optimizedRoute.map((fort, i) => (
                    <React.Fragment key={fort._id}>
                      <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.02] transition-all group">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black font-cinematic
                          ${i === 0 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                            i === optimizedRoute.length - 1 ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            'bg-saffron/10 text-saffron border border-saffron/30'}`}>
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-sm group-hover:text-saffron transition-colors">{fort.name}</h4>
                          <p className="text-gray-600 text-[11px]">{fort.location?.district} • {fort.altitude || 'N/A'}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${DIFFICULTY_COLORS[fort.difficulty]?.bg || ''} ${DIFFICULTY_COLORS[fort.difficulty]?.text || 'text-gray-400'}`}>
                          {fort.difficulty}
                        </span>
                      </div>
                      {i < optimizedRoute.length - 1 && (
                        <div className="flex items-center gap-4 pl-8">
                          <div className="w-0.5 h-6 bg-saffron/10 ml-[18px]"></div>
                          <span className="text-[10px] text-gray-600 flex items-center gap-1">
                            <FaArrowDown size={8} className="text-saffron/40" />
                            ~{getDistanceEstimate(fort, optimizedRoute[i + 1])} km
                          </span>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Budget Breakdown */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-saffron tracking-wider uppercase mb-6 flex items-center gap-2">
                  <FaRupeeSign /> Budget Estimate
                </h3>

                {/* Total highlight */}
                <div className="bg-gradient-to-br from-saffron/10 to-orange-600/5 border border-saffron/20 rounded-2xl p-6 text-center mb-8">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Total Estimated Cost</div>
                  <div className="text-5xl font-cinematic font-black text-saffron">
                    ₹{totalBudget.toLocaleString()}
                  </div>
                  <div className="text-gray-500 text-sm mt-2">
                    {groupSize} warrior{groupSize > 1 ? 's' : ''} × {tripDays.length} day{tripDays.length > 1 ? 's' : ''}
                  </div>
                  <div className="mt-3 text-xs text-gray-600">
                    ₹{Math.round(totalBudget / groupSize).toLocaleString()} per person
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-3">
                  {BUDGET_ITEMS.map((item, i) => {
                    const itemTotal = item.perPerson * tripDays.length * groupSize;
                    const pct = totalBudget > 0 ? (itemTotal / totalBudget) * 100 : 0;
                    return (
                      <div key={i} className="group">
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-saffron/60">{item.icon}</span>
                            <span className="text-gray-300">{item.label}</span>
                          </div>
                          <span className="text-white font-bold text-sm">₹{itemTotal.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-saffron to-orange-500 rounded-full transition-all duration-700"
                            style={{ width: `${pct}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                  <p className="text-amber-400/80 text-xs flex items-start gap-2">
                    <FaInfoCircle className="mt-0.5 flex-shrink-0" />
                    Budget is estimated. Actual costs may vary based on transport mode, food choices, and seasonal pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ╔═══════════════════ STEP 3: GEAR UP ═══════════════════╗ */}
        {step === 3 && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-cinematic font-bold mb-3">
                <GiBackpack className="inline text-saffron mr-3" />
                Gear <span className="text-saffron">Up</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Every Mavla needs the right gear. Check off your packing list!</p>
            </div>

            {/* Difficulty-based warning */}
            {selectedForts.some(f => f.difficulty === 'Hard') && (
              <div className="mb-8 p-5 bg-red-500/5 border border-red-500/20 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <FaInfoCircle className="text-red-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-red-400 font-bold mb-1">Hard Trek Alert!</h4>
                  <p className="text-gray-400 text-sm">
                    Your plan includes {selectedForts.filter(f => f.difficulty === 'Hard').map(f => f.name).join(', ')}.
                    These require good fitness, proper trekking shoes, and ideally a guide. Carry rope & extra water.
                  </p>
                </div>
              </div>
            )}

            {/* Season-based tip */}
            <div className="mb-8 p-5 bg-saffron/5 border border-saffron/10 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{SEASONS.find(s => s.id === season)?.icon}</span>
              </div>
              <div>
                <h4 className="text-saffron font-bold mb-1">{SEASONS.find(s => s.id === season)?.label} Tips</h4>
                <p className="text-gray-400 text-sm">
                  {season === 'winter' && 'Carry warm layers for early morning starts. Mornings can be cold at high altitudes. Perfect weather for long treks.'}
                  {season === 'summer' && 'Start very early (5 AM). Carry minimum 4L water per person. Sunscreen and hat are MANDATORY. Avoid trekking 11 AM–3 PM.'}
                  {season === 'monsoon' && 'Waterproof everything! Leeches are common — carry salt. Trails will be slippery. Cloud cover makes for dramatic views.'}
                </p>
              </div>
            </div>

            {/* Packing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PACKING_LIST.map((cat, ci) => (
                <div key={ci} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-saffron/10 transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-saffron/5 flex items-center justify-center text-xl">
                      {cat.icon}
                    </div>
                    <h3 className="font-cinematic font-bold text-white">{cat.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, ii) => (
                      <PackingItem key={ii} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Safety Tips */}
            <div className="mt-10 bg-gradient-to-br from-saffron/5 via-transparent to-red-500/5 border border-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-cinematic font-bold text-white mb-6 flex items-center gap-3">
                <FaShieldAlt className="text-saffron" /> Safety Guidelines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '📱', text: 'Share your live location with family/friends' },
                  { icon: '🌅', text: 'Start before sunrise, return before sunset' },
                  { icon: '💧', text: 'Hydrate every 20 minutes during the trek' },
                  { icon: '🗑️', text: 'Leave no trace — carry back all garbage' },
                  { icon: '🐍', text: 'Watch for snakes, especially in monsoon' },
                  { icon: '📞', text: 'Emergency: 112 | Save local police number' },
                  { icon: '👥', text: 'Never trek alone on Hard-difficulty forts' },
                  { icon: '⛈️', text: 'Avoid peaks during thunderstorms' },
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                    <span className="text-xl">{tip.icon}</span>
                    <p className="text-gray-400 text-sm">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ╔═══════════════════ STEP 4: REVIEW & EXPORT ═══════════════════╗ */}
        {step === 4 && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-cinematic font-bold mb-3">
                <FaFlagCheckered className="inline text-saffron mr-3" />
                Mission <span className="text-saffron">Briefing</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">Review your complete expedition plan and export it. Jai Bhavani! 🚩</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Forts', value: selectedForts.length, icon: <GiCastle className="text-saffron" />, color: 'border-saffron/30' },
                { label: 'Days', value: tripDays.length, icon: <FaCalendarAlt className="text-blue-400" />, color: 'border-blue-500/30' },
                { label: 'Distance', value: `~${totalDistance} km`, icon: <FaRoute className="text-emerald-400" />, color: 'border-emerald-500/30' },
                { label: 'Budget', value: `₹${totalBudget.toLocaleString()}`, icon: <FaRupeeSign className="text-amber-400" />, color: 'border-amber-500/30' },
              ].map((card, i) => (
                <div key={i} className={`bg-white/[0.02] border ${card.color} rounded-2xl p-5 text-center hover:scale-[1.02] transition-transform`}>
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <div className="text-2xl font-cinematic font-black text-white">{card.value}</div>
                  <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mt-1">{card.label}</div>
                </div>
              ))}
            </div>

            {/* Full Itinerary Review */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-lg font-cinematic font-bold text-saffron mb-6 flex items-center gap-2">
                📜 Complete Itinerary
              </h3>
              <div className="space-y-8">
                {tripDays.map((day, dayIdx) => (
                  <div key={day.id}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-saffron/10 border border-saffron/30 flex items-center justify-center text-saffron font-cinematic font-black text-sm">
                        {dayIdx + 1}
                      </div>
                      <h4 className="font-cinematic font-bold text-white">Day {dayIdx + 1}</h4>
                      <span className="text-gray-600 text-xs">Start: {day.startTime}</span>
                    </div>

                    <div className="ml-4 pl-7 border-l border-saffron/10 space-y-3">
                      {day.forts.map(fort => (
                        <div key={fort._id} className="bg-white/[0.01] border border-white/5 rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <h5 className="font-bold text-white">{fort.name}</h5>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded
                              ${DIFFICULTY_COLORS[fort.difficulty]?.bg || ''} ${DIFFICULTY_COLORS[fort.difficulty]?.text || ''}`}>
                              {fort.difficulty}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                            <span>📍 {fort.location?.district}</span>
                            <span>⛰️ {fort.altitude || 'N/A'}</span>
                            <span>🕐 {fort.timings || 'N/A'}</span>
                            <span>💰 {fort.entryFee || 'Free'}</span>
                            <span>⭐ {fort.rating || 'N/A'}</span>
                          </div>
                          {fort.historicalSignificance && (
                            <p className="text-gray-600 text-xs mt-2 italic">— {fort.historicalSignificance}</p>
                          )}
                        </div>
                      ))}
                      {day.notes && (
                        <p className="text-gray-500 text-xs italic pl-2">📝 {day.notes}</p>
                      )}
                    </div>

                    {dayIdx < tripDays.length - 1 && (
                      <div className="ml-4 pl-7 border-l border-saffron/10 pt-2">
                        <span className="text-[10px] text-gray-600">Next day →</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Export Section */}
            <div className="bg-gradient-to-br from-saffron/5 via-transparent to-orange-600/5 border border-saffron/20 rounded-2xl p-8 text-center">
              <GiCompass className="text-saffron text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-cinematic font-bold text-white mb-3">Your Plan is Ready!</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                Download your complete expedition plan with route, budget, and packing list. Share it with your trekking group!
              </p>
              <button
                onClick={exportPlan}
                className="inline-flex items-center gap-3 px-8 py-4 bg-saffron text-black font-bold font-cinematic rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,153,51,0.4)] tracking-wider uppercase"
              >
                <FaDownload /> Download Expedition Plan
              </button>
              <p className="text-gray-600 text-xs mt-4">Jai Shivaji! Jai Bhavani! 🚩</p>
            </div>
          </div>
        )}

        {/* ───── NAVIGATION BUTTONS (For Steps 1-4) ───── */}
        {step > 0 && (
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5 pb-10">
            <button onClick={prevStep}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-saffron/30 transition-all font-bold text-[10px] tracking-widest uppercase">
              <FaChevronLeft size={10} /> BACK
            </button>

            {step < 4 && (
              <button onClick={nextStep} disabled={!canProceed}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-[10px] tracking-widest uppercase transition-all
                  ${canProceed
                    ? 'bg-saffron text-black hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(255,153,51,0.3)]'
                    : 'bg-white/5 text-gray-600 cursor-not-allowed border border-white/10'
                  }`}
              >
                NEXT STEP <FaChevronRight size={10} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* ───── FOOTER ───── */}
      <footer className="mt-8 py-8 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-[10px] font-bold tracking-widest mb-4">
            Built with <span className="text-[#C47D3B]">♥</span> for the Maratha Legacy | <span className="text-[#C47D3B]">MAHAFORT GUIDE</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

// ──────────────────────────── SUB COMPONENTS  ────────────────────────────

const PackingItem = ({ item }) => {
  const [checked, setChecked] = useState(false);
  return (
    <li
      onClick={() => setChecked(!checked)}
      className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all select-none
        ${checked ? 'bg-emerald-500/5 border border-emerald-500/10' : 'hover:bg-white/[0.02]'}`}
    >
      <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all
        ${checked ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 border border-white/10'}`}>
        {checked && <FaCheckCircle size={10} />}
      </div>
      <span className={`text-sm transition-all ${checked ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
        {item}
      </span>
    </li>
  );
};

export default TripPlanner;

