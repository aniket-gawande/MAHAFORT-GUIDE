import React, { useState, useEffect, useMemo } from 'react';
import { getAllForts } from '../services/api';
import FortCard from '../components/FortCard';
import Navbar from '../components/Navbar';
import { staticForts } from '../data/staticForts';
import {
  FaSearch, FaFilter, FaMountain, FaFortAwesome,
  FaSortAmountDown, FaStar, FaUsers, FaTimes, FaChevronDown
} from 'react-icons/fa';
import { GiCastle } from 'react-icons/gi';
import marathaFlag from '../assets/svg/maratha-flag.svg';
import heroBg from '../assets/hero-fort.jpg';

const Forts = () => {
  const [forts, setForts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [districtFilter, setDistrictFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'compact'
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchForts();
  }, []);

  const fetchForts = async () => {
    try {
      const response = await getAllForts();
      const fortsData = Array.isArray(response.data) ? response.data : [];

      if (fortsData.length > 0) {
        // Normalize name for matching: lowercase, remove hyphens/extra spaces
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

  const districts = useMemo(() => {
    const d = new Set(forts.filter(f => f?.location?.district).map(f => f.location.district));
    return ['all', ...Array.from(d).sort()];
  }, [forts]);

  const filteredForts = useMemo(() => {
    let result = forts.filter(fort => {
      if (!fort?.name || !fort?.location) return false;
      const matchesSearch = fort.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fort.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fort.location?.district?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDistrict = districtFilter === 'all' || fort.location?.district === districtFilter;
      const matchesDifficulty = difficultyFilter === 'all' || fort.difficulty === difficultyFilter || (fort.trek?.routes?.[0]?.difficulty === difficultyFilter) || (difficultyFilter === 'Difficult' && fort.difficulty === 'Hard');
      return matchesSearch && matchesDistrict && matchesDifficulty;
    });

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name': return (a.name || '').localeCompare(b.name || '');
        case 'rating': return (b.rating || 0) - (a.rating || 0);
        case 'visitors': return (b.visitors || 0) - (a.visitors || 0);
        case 'altitude': return parseInt(b.altitude || '0') - parseInt(a.altitude || '0');
        default: return 0;
      }
    });

    return result;
  }, [forts, searchTerm, districtFilter, difficultyFilter, sortBy]);

  const displayedForts = filteredForts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredForts.length;

  const activeFilters = [districtFilter !== 'all', difficultyFilter !== 'all', searchTerm !== ''].filter(Boolean).length;

  const clearAllFilters = () => {
    setSearchTerm('');
    setDistrictFilter('all');
    setDifficultyFilter('all');
    setSortBy('name');
  };

  // Stats
  const stats = useMemo(() => {
    const easy = forts.filter(f => f.difficulty === 'Easy').length;
    const moderate = forts.filter(f => f.difficulty === 'Moderate').length;
    const hard = forts.filter(f => f.difficulty === 'Hard' || f.difficulty === 'Difficult').length;
    return { total: forts.length, easy, moderate, hard, districts: districts.length - 1 };
  }, [forts, districts]);

  return (
    <div className="min-h-screen bg-royal-black text-white font-body selection:bg-saffron selection:text-black">
      <Navbar />

      {/* ═══ HERO BANNER ═══ */}
      <div className="relative pt-20 pb-12 sm:pb-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-royal-black via-royal-black/60 to-royal-black">
          <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-saffron/5 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-600/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,153,51,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,153,51,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-10 sm:pt-14">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-saffron/10 border border-saffron/30 rounded-full mb-6 animate-fade-in-up">
              <img src={marathaFlag} alt="Flag" className="h-5 w-auto" />
              <span className="text-saffron font-bold tracking-[0.2em] text-xs uppercase">Maharashtra Fort Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-cinematic font-black mb-4 leading-tight animate-fade-in-up delay-100">
              EXPLORE THE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-yellow-200 to-saffron">
                FORTS
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Browse {stats.total} forts across {stats.districts} districts — from easy hill walks to
              extreme pinnacle climbs. Search, filter, and find your next adventure.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 animate-fade-in-up delay-300">
            <StatPill icon={<GiCastle />} value={stats.total} label="Forts" />
            <StatPill icon={<FaMountain />} value={stats.districts} label="Districts" color="text-blue-400" />
            <StatPill value={stats.easy} label="Easy" color="text-emerald-400" />
            <StatPill value={stats.moderate} label="Moderate" color="text-amber-400" />
            <StatPill value={stats.hard} label="Hard" color="text-red-400" />
          </div>
        </div>
      </div>

      {/* ═══ STICKY FILTER BAR ═══ */}
      <div className="sticky top-[60px] z-40 bg-royal-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                placeholder="Search forts by name, district, or description..."
                value={searchTerm}
                onChange={e => { setSearchTerm(e.target.value); setVisibleCount(12); }}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-12 pr-10 text-white placeholder-gray-600 focus:border-saffron focus:outline-none focus:ring-1 focus:ring-saffron/50 transition-all text-sm"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-saffron transition-colors">
                  <FaTimes size={12} />
                </button>
              )}
            </div>

            {/* Filters row */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {/* District */}
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-saffron/60 pointer-events-none" size={10} />
                <select value={districtFilter}
                  onChange={e => { setDistrictFilter(e.target.value); setVisibleCount(12); }}
                  className="bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-8 pr-6 text-white text-xs font-bold tracking-wider appearance-none cursor-pointer hover:border-saffron/40 focus:border-saffron focus:outline-none transition-all">
                  <option value="all" className="bg-royal-black">All Districts</option>
                  {districts.filter(d => d !== 'all').map(d => <option key={d} value={d} className="bg-royal-black">{d}</option>)}
                </select>
              </div>

              {/* Difficulty */}
              <select value={difficultyFilter}
                onChange={e => { setDifficultyFilter(e.target.value); setVisibleCount(12); }}
                className="bg-white/[0.03] border border-white/10 rounded-xl py-2.5 px-4 text-white text-xs font-bold tracking-wider appearance-none cursor-pointer hover:border-saffron/40 focus:border-saffron focus:outline-none transition-all">
                <option value="all" className="bg-royal-black">All Levels</option>
                <option value="Easy" className="bg-royal-black">🟢 Easy</option>
                <option value="Moderate" className="bg-royal-black">🟡 Moderate</option>
                <option value="Difficult" className="bg-royal-black">🔴 Difficult</option>
              </select>

              {/* Sort */}
              <div className="relative">
                <FaSortAmountDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={10} />
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                  className="bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-8 pr-6 text-white text-xs font-bold tracking-wider appearance-none cursor-pointer hover:border-saffron/40 focus:border-saffron focus:outline-none transition-all">
                  <option value="name" className="bg-royal-black">A → Z</option>
                  <option value="rating" className="bg-royal-black">⭐ Rating</option>
                  <option value="visitors" className="bg-royal-black">👥 Popular</option>
                  <option value="altitude" className="bg-royal-black">⛰️ Altitude</option>
                </select>
              </div>

              {/* Clear filters */}
              {activeFilters > 0 && (
                <button onClick={clearAllFilters}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold hover:bg-red-500/20 transition-all">
                  <FaTimes size={10} /> Clear ({activeFilters})
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ RESULTS INFO BAR ═══ */}
      <div className="container mx-auto px-4 sm:px-6 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            {loading ? 'Loading...' : (
              <>
                Showing <span className="text-white font-bold">{Math.min(visibleCount, filteredForts.length)}</span> of{' '}
                <span className="text-saffron font-bold">{filteredForts.length}</span> forts
                {searchTerm && <> matching "<span className="text-saffron">{searchTerm}</span>"</>}
              </>
            )}
          </p>

          {/* View toggle */}
          <div className="hidden sm:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-lg p-1">
            <button onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'grid' ? 'bg-saffron/20 text-saffron' : 'text-gray-500 hover:text-white'}`}>
              Grid
            </button>
            <button onClick={() => setViewMode('compact')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${viewMode === 'compact' ? 'bg-saffron/20 text-saffron' : 'text-gray-500 hover:text-white'}`}>
              Compact
            </button>
          </div>
        </div>
      </div>

      {/* ═══ FORTS GRID ═══ */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="text-center py-24">
              <div className="inline-block w-16 h-16 border-4 border-saffron border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-saffron font-cinematic animate-pulse tracking-widest">Summoning History...</p>
            </div>
          ) : filteredForts.length > 0 ? (
            <>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
                  {displayedForts.map(fort => (
                    <FortCard key={fort._id} fort={fort} />
                  ))}
                </div>
              ) : (
                <div className="space-y-3 pt-4">
                  {displayedForts.map(fort => (
                    <CompactFortRow key={fort._id} fort={fort} />
                  ))}
                </div>
              )}

              {/* Load More */}
              {hasMore && (
                <div className="text-center mt-10">
                  <button onClick={() => setVisibleCount(prev => prev + 12)}
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-gray-300 hover:text-saffron hover:border-saffron/30 transition-all text-sm font-bold tracking-wider uppercase">
                    Load More Forts
                    <FaChevronDown className="group-hover:translate-y-0.5 transition-transform" size={12} />
                  </button>
                  <p className="text-gray-600 text-xs mt-2">
                    {filteredForts.length - visibleCount} more forts remaining
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-24">
              <GiCastle className="text-gray-700 text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-cinematic font-bold text-gray-500 mb-2">No Forts Found</h3>
              <p className="text-gray-600 text-sm mb-6">Try adjusting your search or filters</p>
              <button onClick={clearAllFilters}
                className="px-6 py-3 bg-saffron/10 border border-saffron/30 rounded-xl text-saffron font-bold text-sm hover:bg-saffron/20 transition-all">
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// ──────────────── Sub-components ────────────────

const StatPill = ({ icon, value, label, color = 'text-saffron' }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full">
    {icon && <span className={`${color} text-sm`}>{icon}</span>}
    <span className={`font-cinematic font-black text-lg ${color}`}>{value}</span>
    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{label}</span>
  </div>
);

const CompactFortRow = ({ fort }) => {
  const diffColors = {
    Easy: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    Moderate: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    Hard: 'bg-red-500/15 text-red-400 border-red-500/20',
    Difficult: 'bg-red-500/15 text-red-400 border-red-500/20',
  };
  const dc = diffColors[fort.difficulty] || diffColors.Moderate;

  return (
    <div className="group flex items-center gap-4 sm:gap-6 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-saffron/20 hover:bg-white/[0.03] transition-all">
      {/* Image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
        <img
          src={fort.images?.[0] || 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200'}
          alt={fort.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-cinematic font-bold text-white text-sm sm:text-base group-hover:text-saffron transition-colors truncate">
          {fort.name}
        </h3>
        <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] text-gray-500">
          <span className="flex items-center gap-1"><FaFortAwesome className="text-saffron/60" size={9} /> {fort.location?.district}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><FaMountain size={9} /> {fort.altitude || 'N/A'}</span>
          {fort.rating && <><span>•</span><span className="flex items-center gap-1"><FaStar className="text-amber-500" size={9} /> {fort.rating}</span></>}
        </div>
      </div>

      {/* Difficulty badge */}
      <span className={`hidden sm:inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${dc}`}>
        {fort.difficulty}
      </span>

      {/* Entry Fee */}
      <span className="hidden md:block text-gray-500 text-xs w-24 text-right">
        {fort.entryFee || 'Free'}
      </span>
    </div>
  );
};

export default Forts;
