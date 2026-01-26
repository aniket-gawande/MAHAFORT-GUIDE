import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllForts } from '../services/api';
import FortCard from '../components/FortCard';

const Home = () => {
  const [forts, setForts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
      const response = await getAllForts({ search: searchTerm });
      setForts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Discover Maharashtra's Historic Forts
          </h1>
          <p className="text-xl mb-8">
            Your complete guide to exploring the majestic forts of Maharashtra
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search forts by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button
                type="submit"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600">{forts.length}+</div>
              <div className="text-gray-600 mt-2">Historic Forts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">10+</div>
              <div className="text-gray-600 mt-2">Districts Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">100%</div>
              <div className="text-gray-600 mt-2">Free Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Forts Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {searchTerm ? 'Search Results' : 'All Forts'}
        </h2>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading forts...</p>
          </div>
        ) : forts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forts.map((fort) => (
              <FortCard key={fort._id} fort={fort} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No forts found. Try a different search term.</p>
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
    </div>
  );
};

export default Home;