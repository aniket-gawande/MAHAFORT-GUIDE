import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import TripWeatherForecast from '../components/TripWeatherForecast';
import { staticForts } from '../data/staticForts';
import {
  FaMapMarkerAlt, FaMountain, FaCalendarAlt, FaClock, FaRupeeSign,
  FaRoute, FaStar, FaPlus, FaTimes, FaChevronRight,
  FaChevronLeft, FaDownload, FaUsers, FaCloudSun, FaCheckCircle,
  FaFirstAid,  FaSun, 
  FaUtensils, FaBus, FaSearch,  FaArrowDown,
  FaInfoCircle, FaMapSigns, FaShieldAlt, FaFlagCheckered
} from 'react-icons/fa';
import { GiCastle,  GiBackpack, GiCompass} from 'react-icons/gi';
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
      <div className="relative pt-32 pb-24 flex flex-col items-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center 20%' }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-royal-black/60 via-royal-black/80 to-royal-black"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-black/40 backdrop-blur-md border border-saffron/40 rounded-full mb-8 relative shadow-[0_0_20px_rgba(255,153,51,0.15)]">
            <GiCompass className="text-saffron text-sm animate-spin-smooth" />
            <span className="text-saffron font-bold tracking-[0.2em] text-[10px] uppercase">Expedition Command Center</span>
            <div className="absolute inset-0 bg-saffron/10 blur-md rounded-full -z-10"></div>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-cinematic font-black mb-6 leading-none tracking-wider drop-shadow-2xl">
            <span className="text-white block opacity-95">PLAN YOUR</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-yellow-300 to-[#d97c26] block drop-shadow-[0_2px_10px_rgba(255,153,51,0.3)]">
              CONQUEST
            </span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
            Chart your course through Maharashtra's legendary forts. Pick your
            targets, plan your days, gear up like a true Mavla, and march into history.
          </p>
        </div>
      </div>

      {/* ───── STEP PROGRESS BAR ───── */}
      <div className="relative z-40 bg-gradient-to-b from-royal-black to-[#1a1a1a] pb-10 border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl py-4 px-6 border border-white/10 shadow-[0_0_20px_rgba(255,153,51,0.05)]">
            {STEPS.map((s, i) => (
              <React.Fragment key={s.id}>
                <button
                  onClick={() => (i <= step || (i === step + 1 && canProceed)) && setStep(i)}
                  className={`flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 transition-all duration-300 group cursor-pointer ${i === step ? 'scale-105' : i < step ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-base transition-all duration-300 shadow-lg
                    ${i === step ? 'bg-saffron text-black border-[3px] border-saffron/40 shadow-[0_0_25px_rgba(255,153,51,0.6)] font-black' :
                      i < step ? 'bg-saffron/20 text-saffron border border-saffron/50' : 'bg-black/50 text-gray-400 border border-white/10 group-hover:border-white/30'}
                  `}>
                    {i === 0 && i === step ? <GiCastle size={16} /> : React.cloneElement(s.icon, {size: i === step ? 16 : 14})}
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase hidden sm:block drop-shadow-md
                    ${i === step ? 'text-saffron' : i < step ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {s.label}
                  </span>
                </button>
                {i < STEPS.length - 1 && (
                  <div className={`w-6 sm:w-12 h-[2px] mx-1.5 sm:mx-3 transition-all duration-500 rounded-full
                    ${i < step ? 'bg-saffron shadow-[0_0_10px_rgba(255,153,51,0.5)]' : 'bg-white/10'}`}
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
            <div className="w-full max-w-5xl bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 mb-10 flex flex-col md:flex-row items-center gap-3 shadow-2xl relative z-10">
              <div className="flex-1 w-full relative">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-saffron opacity-70" size={15} />
                <input
                  type="text"
                  placeholder="Search majestic forts by name..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-none py-3.5 pl-14 pr-4 text-gray-200 placeholder-gray-500 focus:outline-none text-sm font-medium tracking-wide"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto p-1">
                <select value={districtFilter} onChange={e => setDistrictFilter(e.target.value)}
                  className="bg-[#1a1a1a] border border-white/5 rounded-xl py-3 px-6 text-gray-300 appearance-none cursor-pointer focus:outline-none text-[11px] font-bold tracking-widest uppercase hover:bg-[#222] hover:border-white/10 transition-all focus:border-saffron">
                  <option value="all">All Districts</option>
                  {districts.filter(d => d !== 'all').map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <select value={difficultyFilter} onChange={e => setDifficultyFilter(e.target.value)}
                  className="bg-[#1a1a1a] border border-white/5 rounded-xl py-3 px-6 text-gray-300 appearance-none cursor-pointer focus:outline-none text-[11px] font-bold tracking-widest uppercase hover:bg-[#222] hover:border-white/10 transition-all focus:border-saffron">
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
                  Easy: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
                  Moderate: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
                  Hard: 'bg-red-500/20 text-red-400 border border-red-500/30',
                  Difficult: 'bg-red-500/20 text-red-400 border border-red-500/30'
                };
                const dcClass = diffStyles[fort.difficulty] || diffStyles.Moderate;
                const fortImage = fort.images && fort.images.length > 0 ? fort.images[0] : 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500';

                return (
                  <div key={fort._id} className={`group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[#181818] to-[#0A0A0A] border transition-all duration-300 hover:-translate-y-1.5 ${isSelected ? 'border-saffron shadow-[0_5px_25px_rgba(255,153,51,0.15)] scale-[1.02]' : 'border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5'}`}>
                    {/* Top Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img src={fortImage} alt={fort.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90"></div>
                      
                      {/* Difficulty Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg ${dcClass}`}>
                          {fort.difficulty}
                        </span>
                      </div>
                      
                      {/* Plus / Check Button */}
                      <button 
                        onClick={() => toggleFort(fort)} 
                        className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all border-2 shadow-lg ${isSelected ? 'bg-saffron text-black border-saffron scale-110' : 'bg-black/50 text-white hover:bg-black hover:border-saffron/50 border-white/20 group-hover:scale-105'}`}
                      >
                        {isSelected ? <FaCheckCircle size={16} /> : <FaPlus size={12} />}
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1 pb-6 relative">
                      <div className="flex items-center gap-2 text-saffron text-[10px] font-black tracking-[0.2em] uppercase mb-2 drop-shadow-sm">
                        <FaMapMarkerAlt size={12} className="opacity-80" /> {fort.location?.district || 'PUNE'}
                      </div>
                      <h3 className="text-white font-cinematic font-extrabold text-lg uppercase tracking-wide mb-2 truncate group-hover:text-saffron transition-colors">
                        {fort.name}
                      </h3>
                      <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-2 mb-5 flex-1 font-light">
                        {fort.description || fort.historicalSignificance || 'A historic fort offering spectacular views and a glimpse into the Maratha empire.'}
                      </p>
                      
                      <div className="flex items-center gap-4 text-gray-300 text-[10px] font-bold tracking-widest bg-white/5 py-2.5 px-3 rounded-xl border border-white/5">
                        <span className="flex items-center gap-1.5"><FaMountain className="text-orange-400" size={12} /> {fort.altitude || '1312 m'}</span>
                        <div className="w-px h-3 bg-white/20"></div>
                        <span className="flex items-center gap-1.5"><FaStar className="text-yellow-400" size={12} /> {fort.rating || '4.6'}</span>
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
                onClick={(e) => e.target.showPicker && e.target.showPicker()}
                className="bg-royal-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-saffron focus:outline-none mb-6 cursor-pointer w-full max-w-[250px]"
              />
              {selectedForts.length > 0 && (
                <div className="mt-4 border-t border-white/5 pt-6 w-full">
                  <h4 className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">Weather Forecasts for Selected Forts</h4>
                  <div className="flex flex-wrap justify-center gap-6 text-left">
                    {selectedForts.map(fort => (
                      <div key={fort._id} className="w-full max-w-sm">
                        <div className="text-center mb-3">
                          <span className="text-xs font-bold text-saffron uppercase border border-saffron/20 bg-saffron/10 px-4 py-1.5 rounded-full inline-block">
                            {fort.name}
                          </span>
                        </div>
                        <TripWeatherForecast 
                          date={startDate} 
                          fortName={fort.name} 
                          district={fort.location?.district} 
                        />
                      </div>
                    ))}
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
                          ? 'bg-saffron/10 border-saffron/50 shadow-[0_0_15px_rgba(255,153,51,0.15)] scale-105'
                          : 'bg-white/[0.02] border-white/5 hover:border-saffron/20 hover:bg-white/5'}
                      `}>
                      <span className="text-2xl block mb-2 transition-transform duration-300 group-hover:scale-110">{s.icon}</span>
                      <span className={`text-[10px] font-bold tracking-wider uppercase block ${season === s.id ? 'text-saffron' : 'text-gray-400'}`}>
                        {s.id}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-4 flex items-center justify-center gap-2 bg-black/40 p-3 rounded-xl border border-white/5">
                  <FaInfoCircle className="text-saffron" /> {SEASONS.find(s => s.id === season)?.tip}
                </p>
              </div>

              {/* Group Size */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/5 rounded-full blur-[40px] pointer-events-none"></div>
                <h3 className="text-sm font-bold text-saffron tracking-wider uppercase mb-6 flex items-center gap-2 relative z-10">
                  <FaUsers /> Expedition Group Size
                </h3>
                <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                  <button onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                    className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 text-white hover:border-saffron hover:text-black hover:bg-saffron transition-all text-2xl font-light flex items-center justify-center shadow-lg">
                    –
                  </button>
                  <div className="flex-1 text-center">
                    <div className="text-6xl font-cinematic font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{groupSize}</div>
                    <div className="text-saffron/80 text-[10px] font-black tracking-[0.3em] uppercase mt-1">Warriors</div>
                  </div>
                  <button onClick={() => setGroupSize(Math.min(20, groupSize + 1))}
                    className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 text-white hover:border-saffron hover:text-black hover:bg-saffron transition-all text-xl font-light flex items-center justify-center shadow-lg">
                    +
                  </button>
                </div>
                <div className="flex justify-center gap-2 relative z-10">
                  {[1, 2, 4, 6, 10].map(n => (
                    <button key={n} onClick={() => setGroupSize(n)}
                      className={`w-10 h-8 rounded-lg text-xs font-bold transition-all
                        ${groupSize === n ? 'bg-saffron text-black shadow-[0_0_10px_rgba(196,125,59,0.4)] scale-110' : 'bg-black/40 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'}`}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Trek Difficulty Warnings Generator */}
            <div className="mb-10 w-full">
              {(() => {
                const hasHard = selectedForts.some(f => f.difficulty === 'Hard' || f.difficulty === 'Difficult');
                const maxAlt = Math.max(...selectedForts.map(f => parseInt(f.altitude) || 0));
                
                if (hasHard || maxAlt > 1200) {
                  return (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                        <FaShieldAlt className="text-red-400 text-lg" />
                      </div>
                      <div>
                        <h4 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-1.5 flex items-center gap-2">
                          High Difficulty Alert
                        </h4>
                        <p className="text-gray-300 text-xs leading-relaxed">
                          Your selected itinerary includes {hasHard ? "Hard-level treks" : "High-altitude forts"}. 
                          Ensure all {groupSize} warriors are physically fit. Bring climbing ropes, high-grip trekking shoes, and at least 3L of water per person. {season === 'monsoon' ? 'Watch out for extremely slippery rock cut steps during monsoon!' : ''}
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })()}
            </div>

            {/* Day Cards (Interactive Timeline) */}
            <div className="space-y-8 relative">
              {/* Timeline background spine that runs behind all days */}
              <div className="absolute left-[39px] top-6 bottom-10 w-0.5 bg-gradient-to-b from-saffron/50 via-saffron/20 to-transparent hidden md:block"></div>

              {tripDays.map((day, dayIdx) => (
                <div key={day.id} className="relative z-10 w-full pl-0 md:pl-20">
                  
                  {/* Timeline Badge (Only visible on MD+) */}
                  <div className="absolute left-[24px] top-6 w-8 h-8 rounded-full bg-royal-black border-2 border-saffron shadow-[0_0_15px_rgba(255,153,51,0.5)] z-20 flex items-center justify-center hidden md:flex">
                    <span className="text-saffron font-bold text-xs font-cinematic">{dayIdx + 1}</span>
                  </div>

                  <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-saffron/30 transition-all duration-500 shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
                    {/* Day Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-white/5 bg-gradient-to-r from-saffron/5 to-transparent relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
                      <div className="flex items-center gap-5 relative z-10 mb-4 sm:mb-0">
                        <div className="md:hidden w-12 h-12 rounded-2xl bg-saffron/10 border border-saffron/30 flex items-center justify-center shadow-inner">
                          <span className="text-saffron font-cinematic font-black text-xl">{dayIdx + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-cinematic font-black text-white text-xl tracking-widest uppercase mb-1">Day {dayIdx + 1}</h3>
                          <p className="text-saffron/80 text-[10px] font-bold tracking-[0.2em] uppercase">{day.forts.length} Objective{day.forts.length > 1 ? 's' : ''}</p>
                        </div>
                      </div>
                      <label className="flex items-center gap-3 relative z-10 bg-black/50 hover:bg-white/5 p-2 px-3 border border-white/10 hover:border-saffron/40 rounded-xl cursor-pointer group transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <FaClock className="text-saffron group-hover:scale-110 transition-transform duration-300" size={16} />
                        <span className="text-[10px] text-gray-400 group-hover:text-gray-200 font-bold uppercase tracking-widest transition-colors duration-300">Start Time</span>
                        <input
                          type="time"
                          value={day.startTime}
                          onChange={e => updateDayTime(dayIdx, e.target.value)}
                          className="bg-transparent border-none text-sm text-saffron font-bold focus:outline-none cursor-pointer p-0 m-0"
                          style={{ colorScheme: 'dark' }}
                        />
                      </label>
                    </div>

                    {/* Forts in day */}
                    <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-white/[0.02] to-transparent">
                      {day.forts.map((fort, fi) => {
                        const dc = DIFFICULTY_COLORS[fort.difficulty] || DIFFICULTY_COLORS.Moderate;

                        // Predict time based on day start time (Assuming ~4 hours duration per fort: travel + trek + explore)
                        const rawTime = day.startTime || "06:00";
                        const [hours, minutes] = rawTime.split(':').map(Number);
                        const totalMinutes = (hours * 60) + minutes + (fi * 240);
                        const h = Math.floor(totalMinutes / 60) % 24;
                        const m = totalMinutes % 60;
                        const period = h >= 12 ? 'PM' : 'AM';
                        const displayH = h % 12 || 12;
                        const predictedTime = `${String(displayH).padStart(2, '0')}:${String(m).padStart(2, '0')} ${period}`;

                        return (
                        <div key={fort._id} className="flex items-start gap-4 group/fort">
                          {/* Timeline dot */}
                          <div className="flex flex-col items-center pt-1">
                            <div className="w-3 h-3 rounded-full bg-saffron border-2 border-royal-black shadow-[0_0_10px_rgba(255,153,51,0.5)]"></div>
                            {fi < day.forts.length - 1 && <div className="w-0.5 h-16 bg-saffron/20 mt-1"></div>}
                          </div>

                          {/* Fort card */}
                          <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden group-hover/fort:border-saffron/20 transition-all">
                            <div className="flex flex-col sm:flex-row">
                              {/* Fort thumbnail */}
                              <div className="w-full sm:w-28 sm:h-auto h-32 flex-shrink-0 overflow-hidden relative">
                                <img
                                  src={fort.images && fort.images.length > 0 ? fort.images[0] : 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200'}
                                  alt={fort.name}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 left-2 sm:hidden bg-royal-black/80 backdrop-blur-sm border border-saffron/30 text-saffron text-[10px] font-bold px-2 py-1 rounded">
                                  <FaClock className="inline mr-1" />{predictedTime}
                                </div>
                              </div>
                              <div className="flex-1 p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                      <h4 className="font-cinematic font-bold text-white text-lg">{fort.name}</h4>
                                      <span className="hidden sm:inline-flex items-center text-saffron text-xs font-bold font-mono px-2 py-0.5 bg-saffron/10 border border-saffron/20 rounded">
                                        <FaClock className="inline mr-1" />{predictedTime}
                                      </span>
                                    </div>
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
                    <div className="pt-2 pl-8 pb-4">
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
              </div>
            ))}
          </div>

          <div className="mt-10 text-center w-full relative z-10">
            <button 
              onClick={nextStep}
              className="bg-saffron text-black px-10 py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-white hover:scale-105 transition-all border border-saffron/50 shadow-[0_0_20px_rgba(255,153,51,0.3)]">
              Save & Proceed to Route
            </button>
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

