import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SinhagadMap from '../components/Sinhagadmap';
import { 
  FaMapMarkerAlt, 
  FaRoute, 
  FaClock, 
  FaRupeeSign,
  FaPhone,
  FaInfoCircle,
  FaUtensils,
  FaHistory,
  FaStar
} from 'react-icons/fa';

const FortDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fort, setFort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchFortDetails = async () => {
      try {
        // For now, we'll load from the JSON file directly
        // In production, this would be an API call
        const response = await fetch('/data/sinhagad.json');
        const data = await response.json();
        setFort(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading fort details:', error);
        setLoading(false);
      }
    };

    fetchFortDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading fort details...</p>
        </div>
      </div>
    );
  }

  if (!fort) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fort not found</h2>
          <button
            onClick={() => navigate('/forts')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Back to Forts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-orange-500 to-red-600">
        {fort.images && fort.images[0] && (
          <img 
            src={fort.images[0]} 
            alt={fort.name}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {fort.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white text-sm sm:text-base">
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {fort.location.district}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-2" />
                {fort.visitInfo.timeRequired}
              </span>
              <span className="flex items-center">
                <FaRupeeSign className="mr-2" />
                ₹{fort.visitInfo.entryFee.indian}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-t-xl shadow-lg mb-0 overflow-x-auto">
          <div className="flex border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview', icon: FaInfoCircle },
              { id: 'directions', label: 'Directions & Map', icon: FaRoute },
              { id: 'trek', label: 'Trek Routes', icon: FaRoute },
              { id: 'food', label: 'Food & Stay', icon: FaUtensils },
              { id: 'history', label: 'History', icon: FaHistory },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-3 sm:px-6 sm:py-4 font-semibold transition-colors whitespace-nowrap text-xs sm:text-base ${
                  activeTab === tab.id
                    ? 'border-b-4 border-orange-500 text-orange-600'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                <tab.icon className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-xl shadow-lg p-4 sm:p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About {fort.name}</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{fort.description}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-sm text-blue-600 font-medium">Difficulty</p>
                  <p className="text-xl font-bold text-blue-800">
                    {fort.trek.routes[0]?.difficulty || 'Easy'}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-sm text-green-600 font-medium">Altitude</p>
                  <p className="text-xl font-bold text-green-800">1312m</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-l-4 border-orange-500">
                  <p className="text-sm text-orange-600 font-medium">Trek Distance</p>
                  <p className="text-xl font-bold text-orange-800">
                    {fort.trek.routes[0]?.distance || 'N/A'}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-sm text-purple-600 font-medium">Best Season</p>
                  <p className="text-xl font-bold text-purple-800">
                    {fort.trek.bestTime?.[0] || 'All Year'}
                  </p>
                </div>
              </div>

              {/* Top Highlights */}
              {fort.reviewsSummary?.topPositives && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaStar className="text-yellow-500 mr-2" />
                    Top Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {fort.reviewsSummary.topPositives.map((highlight, index) => (
                      <div key={index} className="flex items-start bg-yellow-50 p-3 rounded-lg">
                        <span className="text-yellow-500 mr-2">✓</span>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Directions & Map Tab */}
          {activeTab === 'directions' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaRoute className="text-orange-500 mr-3" />
                  Get Directions to Sinhagad Fort
                </h2>
                <p className="text-gray-600 mb-6">
                  View live map with turn-by-turn directions from your current location to Sinhagad Fort via the Donje Village route.
                </p>
              </div>

              {/* Google Maps Component */}
              <SinhagadMap />

              {/* Additional Route Info */}
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h4 className="text-lg font-bold text-blue-800 mb-3">📍 Location Details</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Base Village:</strong> {fort.location.baseVillage}</p>
                  <p><strong>Nearest City:</strong> {fort.location.nearestCity}</p>
                  <p><strong>Taluka:</strong> {fort.location.taluka}</p>
                  <p><strong>Coordinates:</strong> {fort.location.coordinates.lat}, {fort.location.coordinates.lng}</p>
                </div>
              </div>
            </div>
          )}

          {/* Trek Routes Tab */}
          {activeTab === 'trek' && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Trek Routes</h2>
              {fort.trek.routes.map((route, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-800 mb-3">{route.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Distance</p>
                      <p className="font-bold text-gray-800">{route.distance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-gray-800">{route.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Difficulty</p>
                      <p className={`font-bold ${
                        route.difficulty === 'Easy' ? 'text-green-600' :
                        route.difficulty === 'Moderate' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>{route.difficulty}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Elevation</p>
                      <p className="font-bold text-gray-800">{route.elevation}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{route.description}</p>
                  {route.facilities && (
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Facilities:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {route.facilities.map((facility, i) => (
                          <li key={i} className="text-gray-700">{facility}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Food & Stay Tab */}
          {activeTab === 'food' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Food on Fort</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fort.food.onFort.filter(item => item.mustTry).map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-orange-800 text-lg">{item.name}</h4>
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">Must Try!</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.price}</p>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-2">📍 {item.vendor}</p>
                    </div>
                  ))}
                </div>
              </div>

              {fort.accommodation && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Accommodation</h2>
                  <div className="space-y-4">
                    {fort.accommodation.map((place, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-800 mb-2">{place.name}</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <p><strong>Distance:</strong> {place.distance}</p>
                          <p><strong>Price:</strong> {place.priceRange}</p>
                          <p><strong>Type:</strong> {place.type}</p>
                          {place.contact && <p><strong>Contact:</strong> {place.contact}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && fort.history && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Historical Significance</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{fort.history.brief}</p>
                <p className="text-gray-700 leading-relaxed">{fort.history.significance}</p>
              </div>

              {fort.history.famousBattles && (
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-800 mb-3">Famous Battles</h3>
                  <ul className="space-y-2">
                    {fort.history.famousBattles.map((battle, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-red-500 mr-2">⚔</span>
                        {battle}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {fort.history.rulers && (
                <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">Rulers</h3>
                  <ul className="space-y-2">
                    {fort.history.rulers.map((ruler, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-yellow-500 mr-2">👑</span>
                        {ruler}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Emergency Contacts - Always Visible */}
        <div className="mt-8 bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <FaPhone className="mr-2" />
            Emergency Contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fort.safety.emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <p className="font-semibold text-gray-800">{contact.name}</p>
                <p className="text-sm text-gray-600">{contact.type}</p>
                <p className="text-lg font-bold text-red-600 mt-2">
                  <a href={`tel:${contact.phone}`} className="hover:underline">
                    {contact.phone}
                  </a>
                </p>
                <p className="text-xs text-gray-500 mt-1">{contact.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FortDetails;