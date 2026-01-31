import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllForts } from '../services/api';
import FortCard from '../components/FortCard';

const Home = () => {
  const [forts, setForts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchForts();
  }, []);

  const fetchForts = async () => {
    try {
      const response = await getAllForts();
      setForts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const params = {};
      if (searchTerm) params.search = searchTerm;
      if (selectedDistrict) params.district = selectedDistrict;
      if (selectedDifficulty) params.difficulty = selectedDifficulty;
      
      const response = await getAllForts(params);
      setForts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDistrict('');
    setSelectedDifficulty('');
    fetchForts();
  };

  const districts = ['Pune', 'Raigad', 'Satara', 'Kolhapur', 'Ahmednagar', 'Nashik'];
  const difficulties = ['Easy', 'Moderate', 'Hard'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50">
      {/* Animated Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white py-24 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-down">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              Discover Maharashtra's
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
                Historic Forts
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Your ultimate guide to exploring majestic forts, hidden trails, and rich heritage
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-2">
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="🔍 Search forts by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-gray-100 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
                >
                  🎛️ Filters
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Search
                </button>
              </div>

              {/* Expandable Filters */}
              {showFilters && (
                <div className="mt-4 p-4 bg-gray-50 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-down">
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none"
                  >
                    <option value="">All Districts</option>
                    {districts.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>

                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-400 focus:outline-none"
                  >
                    <option value="">All Difficulties</option>
                    {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="px-4 py-3 rounded-lg bg-red-100 text-red-600 font-semibold hover:bg-red-200 transition"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div className="bg-white py-16 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                {forts.length}+
              </div>
              <div className="text-gray-600 mt-2 font-medium">Historic Forts</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                15+
              </div>
              <div className="text-gray-600 mt-2 font-medium">Districts Covered</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                1000+
              </div>
              <div className="text-gray-600 mt-2 font-medium">Happy Visitors</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
                100%
              </div>
              <div className="text-gray-600 mt-2 font-medium">Free Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Detailed Routes</h3>
            <p className="text-gray-600">Get step-by-step trek routes, distances, and difficulty levels for safe exploration.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🏨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Stay & Food Info</h3>
            <p className="text-gray-600">Find nearby hotels, homestays, and authentic local food options.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Plan Your Trip</h3>
            <p className="text-gray-600">Best seasons, entry fees, timings - everything you need to plan perfectly.</p>
          </div>
        </div>

        {/* Forts Grid */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
            {searchTerm || selectedDistrict || selectedDifficulty ? '🔎 Search Results' : '🏰 Explore Forts'}
          </h2>
          <p className="text-gray-600 text-lg mb-8">Click on any fort to view detailed information</p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-200"></div>
            </div>
            <p className="mt-6 text-gray-600 text-lg">Loading amazing forts...</p>
          </div>
        ) : forts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {forts.map((fort, index) => (
              <div 
                key={fort._id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FortCard fort={fort} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-xl mb-4">No forts found matching your criteria</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-10 text-orange-100 max-w-2xl mx-auto">
            Plan your perfect fort visit with detailed guides, routes, and insider tips
          </p>
          <Link
            to="/trip-planner"
            className="inline-block bg-white text-orange-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-orange-50 transition-all transform hover:scale-110 shadow-2xl"
          >
            🗓️ Plan My Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;