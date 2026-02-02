import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllForts } from '../services/api';
import FortCard from '../components/FortCard';
import { FaShieldAlt, FaUsers, FaPhoneAlt } from 'react-icons/fa';
import marathaFlag from '../assets/svg/maratha-flag.svg';
import { staticForts } from '../data/staticForts';
import BahirjiChatbot from '../components/BahirjiChatbot';

// Using local Shivaji Maharaj image
import shivajiImage from '../assets/shivaji.jpg';
const shivaji = shivajiImage;

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
      console.log('API Response:', response.data); // Debug log
      // Ensure we always have an array
      const fortsData = Array.isArray(response.data) ? response.data : [];
      setForts(fortsData.length > 0 ? fortsData : staticForts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching forts:', error);
      // Use static forts as fallback when API fails
      setForts(staticForts);
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await getAllForts({ search: searchTerm });
      const fortsData = Array.isArray(response.data) ? response.data : [];
      setForts(fortsData);
      setLoading(false);
    } catch (error) {
      console.error('Error searching forts:', error);
      setForts([]);
      setLoading(false);
    }
  };

  // Filter forts based on search, district, and difficulty
  const filteredForts = forts.filter(fort => {
    const matchesSearch = fort.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = districtFilter === 'all' || fort.location.district === districtFilter;
    const matchesDifficulty = difficultyFilter === 'all' || fort.difficulty === difficultyFilter;
    return matchesSearch && matchesDistrict && matchesDifficulty;
  });

  // Get unique districts for filter dropdown
  const districts = ['all', ...new Set(forts.map(fort => fort.location.district))].sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Hero Section with Shivaji Maharaj Biography */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-700 to-orange-600 text-white py-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Shivaji Maharaj Section - Equal Height Containers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
            {/* Image Container - Fixed Height */}
            <div className="flex justify-center items-center">
              <div className="relative group/img w-full max-w-md">
                {/* Dramatic Glow Effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-3xl opacity-40 group-hover/img:opacity-70 transition-opacity duration-700 animate-pulse"></div>

                {/* Decorative Border Animation */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl opacity-75 animate-pulse"></div>

                <div className="relative bg-white p-2 rounded-3xl">
                  <img
                    src={shivaji}
                    alt="Chhatrapati Shivaji Maharaj"
                    className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl group-hover/img:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Marathi Title - Directly Below Image */}
                <div className="mt-6 text-center bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white px-10 py-5 rounded-2xl shadow-2xl font-bold text-2xl border-4 border-yellow-400">
                  छत्रपती शिवाजी महाराज
                </div>
              </div>
            </div>

            {/* Biography Container - Matching Height */}
            <div className="flex flex-col justify-center text-left space-y-6 min-h-[500px]">
              <div>
                <h2 className="text-7xl font-black mb-6 drop-shadow-2xl animate-fade-in bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                  Chhatrapati Shivaji Maharaj
                </h2>
                <div className="h-2 w-40 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full animate-pulse"></div>
              </div>

              <div className="bg-gradient-to-br from-white/20 via-white/15 to-white/10 backdrop-blur-xl rounded-3xl p-8 space-y-5 border-2 border-white/30 shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4 group">
                  <span className="text-yellow-300 font-bold text-xl group-hover:scale-110 transition-transform">📅 Born:</span>
                  <span className="text-3xl font-black">19 February 1630</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="text-yellow-300 font-bold text-xl group-hover:scale-110 transition-transform">⚰️ Died:</span>
                  <span className="text-3xl font-black">3 April 1680 (aged 50)</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="text-yellow-300 font-bold text-xl group-hover:scale-110 transition-transform">👑 Title:</span>
                  <span className="text-3xl font-black">Founder of Maratha Empire</span>
                </div>
                <div className="border-t-2 border-yellow-400/50 pt-5 mt-5">
                  <p className="text-xl leading-relaxed text-white font-medium">
                    The great Maratha warrior king who established <span className="text-yellow-300 font-bold">Hindavi Swarajya</span> (self-rule).
                    Known for his military genius, progressive administration, and respect for all religions.
                    He built over <span className="text-yellow-300 font-bold">300 forts</span> across Maharashtra, creating an impregnable defense system.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap mt-6">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-600 px-5 py-3 rounded-full text-base font-black shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">⚔️ Warrior King</span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 rounded-full text-base font-black shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">⛵ Naval Pioneer</span>
                  <span className="bg-gradient-to-r from-red-500 to-pink-600 px-5 py-3 rounded-full text-base font-black shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">🏰 Fort Builder</span>
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-3 rounded-full text-base font-black shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">👑 Progressive Ruler</span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Title - DRAMATIC */}
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-2xl opacity-50 animate-pulse"></div>
              <h1 className="relative text-7xl font-black mb-6 drop-shadow-2xl bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
                🏰 MahaFort Heritage Platform
              </h1>
            </div>

            <p className="text-3xl mb-3 font-black drop-shadow-lg bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Smart Urban-Heritage Management for Maharashtra's Forts
            </p>
            <p className="text-xl mb-10 text-yellow-200 font-bold drop-shadow-md">
              🛡️ Safety • 🌱 Sustainability • ♿ Accessibility • 📊 Data-Driven Governance
            </p>

            {/* Search Bar - VIBRANT */}
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
              <div className="flex gap-3 bg-white/20 backdrop-blur-md p-3 rounded-2xl border-2 border-yellow-400/50 shadow-2xl">
                <input
                  type="text"
                  placeholder="🔍 Search forts by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  🔍 Search
                </button>
              </div>
            </form>

            {/* Filter Section - COLORFUL */}
            <div className="max-w-3xl mx-auto mt-6 flex gap-4 justify-center flex-wrap">
              {/* District Filter */}
              <select
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg focus:outline-none focus:ring-4 focus:ring-purple-300 cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <option value="all" className="text-gray-800 bg-white">📍 All Districts</option>
                {districts.filter(d => d !== 'all').map(district => (
                  <option key={district} value={district} className="text-gray-800 bg-white">{district}</option>
                ))}
              </select>

              {/* Difficulty Filter */}
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold text-lg focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <option value="all" className="text-gray-800 bg-white">⛰️ All Difficulties</option>
                <option value="Easy" className="text-gray-800 bg-white">✅ Easy</option>
                <option value="Moderate" className="text-gray-800 bg-white">⚠️ Moderate</option>
                <option value="Hard" className="text-gray-800 bg-white">🔥 Hard</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Dashboard - VIBRANT */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl font-black text-center mb-12 text-white drop-shadow-2xl animate-pulse">
            📊 Platform Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-center shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-110 hover:rotate-3 cursor-pointer">
              <div className="text-7xl font-black text-white mb-3 drop-shadow-lg">{forts.length}+</div>
              <div className="text-white font-black text-xl">🏰 Total Forts</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-600 rounded-3xl p-8 text-center shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-110 hover:rotate-3 cursor-pointer">
              <div className="text-7xl font-black text-white mb-3 drop-shadow-lg">{districts.filter(d => d !== 'all').length}</div>
              <div className="text-white font-black text-xl">📍 Districts</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-center shadow-2xl hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-110 hover:rotate-3 cursor-pointer">
              <div className="text-7xl font-black text-white mb-3 drop-shadow-lg">{forts.filter(f => f.difficulty === 'Easy').length}</div>
              <div className="text-white font-black text-xl">✅ Easy Treks</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-center shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 hover:rotate-3 cursor-pointer">
              <div className="text-7xl font-black text-white mb-3 drop-shadow-lg">4.5★</div>
              <div className="text-white font-black text-xl">⭐ Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Forts Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            {searchTerm || districtFilter !== 'all' || difficultyFilter !== 'all' ? `🔍 Filtered Results (${filteredForts.length})` : `🏰 Explore ${forts.length}+ Maratha Forts`}
          </h2>
          <div className="h-2 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto"></div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading forts...</p>
          </div>
        ) : filteredForts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredForts.map((fort) => (
              <FortCard key={fort._id} fort={fort} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No forts found matching your filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Plan Your Fort Visit Today</h2>
          <p className="text-lg mb-6">
            Get detailed information about routes, timings, and facilities
          </p>
          <Link
            to="/trip-planner"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
          >
            Start Planning
          </Link>
        </div>
      </div>

      {/* Bahirji Chatbot */}
      <BahirjiChatbot />
    </div>
  );
};

export default Home;