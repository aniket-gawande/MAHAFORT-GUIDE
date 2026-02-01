import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllForts } from '../services/api';
import FortCard from '../components/FortCard';
import { FaShieldAlt, FaUsers, FaPhoneAlt } from 'react-icons/fa';
import marathaFlag from '../assets/svg/maratha-flag.svg';

// Using high-quality Shivaji Maharaj image
const shivaji = 'https://imgs.search.brave.com/9sg0amruds-4j7LJdEvFbCtPlXpJ3yGP4uUzTH_q54U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGl2/YWppbWFoYXJhamZv/dW5kYXRpb24uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA5L0NoaGF0cmFw/YXRpLXNoaXZhamkt/bWFoYXJhai1KUEct/UGljLmpwZWc';

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
      console.log('API Response:', response.data); // Debug log
      // Ensure we always have an array
      const fortsData = Array.isArray(response.data) ? response.data : [];
      setForts(fortsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching forts:', error);
      setForts([]); // Set empty array on error
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section with Shivaji Maharaj Biography */}
      <div className="relative bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 text-white py-16 overflow-hidden">


        <div className="container mx-auto px-4 relative z-10">
          {/* Shivaji Maharaj Section - Image and Bio Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={shivaji}
                  alt="Chhatrapati Shivaji Maharaj"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/30"
                />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-orange-600 px-6 py-3 rounded-lg shadow-xl font-bold text-lg whitespace-nowrap">
                  छत्रपती शिवाजी महाराज
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="text-left space-y-4">
              <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
                Chhatrapati Shivaji Maharaj
              </h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-orange-200 font-semibold">Born:</span>
                  <span className="text-xl">19 February 1630</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-200 font-semibold">Died:</span>
                  <span className="text-xl">3 April 1680 (aged 50)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-200 font-semibold">Title:</span>
                  <span className="text-xl">Founder of Maratha Empire</span>
                </div>
                <div className="border-t border-white/20 pt-3 mt-3">
                  <p className="text-lg leading-relaxed">
                    The great Maratha warrior king who established Hindavi Swarajya (self-rule).
                    Known for his military genius, progressive administration, and respect for all religions.
                    He built over 300 forts across Maharashtra, creating an impregnable defense system.
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-4">
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Warrior King</span>
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Naval Pioneer</span>
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Fort Builder</span>
                  <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Progressive Ruler</span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Title */}
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              MahaFort Smart Heritage Platform
            </h1>
            <p className="text-xl mb-2 font-semibold">
              Smart Urban-Heritage Management for Maharashtra's Forts
            </p>
            <p className="text-lg mb-8 text-orange-100">
              Safety • Sustainability • Accessibility • Data-Driven Governance
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
      </div>

      {/* Smart City Features Section */}
      <div className="bg-white py-16 shadow-lg border-t-4 border-orange-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Smart City Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <FaPhoneAlt className="text-5xl text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">Emergency Response</div>
              <div className="text-gray-700 font-medium">Instant access to guides, police & medical contacts</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <FaUsers className="text-5xl text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">Crowd Management</div>
              <div className="text-gray-700 font-medium">Real-time crowd advisory for sustainable tourism</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-orange-50 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <FaShieldAlt className="text-5xl text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">Safety & Accessibility</div>
              <div className="text-gray-700 font-medium">Detailed route difficulty & accessibility info</div>
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