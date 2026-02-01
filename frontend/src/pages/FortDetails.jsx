import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFortById } from '../services/api';
import EmergencyButton from '../components/EmergencyButton';
import CrowdStatusBadge from '../components/CrowdStatusBadge';
import DownloadButton from '../components/DownloadButton';
import { FaWheelchair, FaWalking, FaExclamationTriangle, FaInfoCircle, FaMapMarkedAlt } from 'react-icons/fa';
import royalSeal from '../assets/svg/royal-seal.svg';
import talwar from '../assets/svg/talwar.svg';


const FortDetails = () => {
  const { id } = useParams();
  const [fort, setFort] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFortDetails();
  }, [id]);

  const fetchFortDetails = async () => {
    try {
      const response = await getFortById(id);
      setFort(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-semibold">Loading fort details...</p>
        </div>
      </div>
    );
  }

  if (!fort) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Fort not found</p>
      </div>
    );
  }

  const defaultImage = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800';

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Image with Overlay */}
      <div className="h-96 overflow-hidden relative">
        <img
          src={fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage}
          alt={fort.name}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

        {/* Royal Seal Watermark */}
        <img
          src={royalSeal}
          alt="Royal Seal"
          className="absolute top-4 right-4 w-20 h-20 opacity-20"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title Section with Maharashtra Theme */}
        <div className="bg-white rounded-2xl shadow-xl p-6 -mt-20 relative z-10 mb-8 border-t-4 border-orange-500">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                {fort.name}
                {/* Decorative Talwar */}
                <img src={talwar} alt="Talwar" className="w-8 h-8 opacity-40" />
              </h1>
              <p className="text-lg text-gray-600 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                {fort.location.district}, Maharashtra
              </p>
            </div>

            {/* Crowd Status Badge */}
            {fort.crowdStatus && (
              <div className="mt-2">
                <CrowdStatusBadge status={fort.crowdStatus} />
              </div>
            )}
          </div>
        </div>

        {/* Itinerary Button for Sinhagad Fort */}
        {fort.name === "Sinhagad Fort" && (
          <div className="mb-8">
            <Link to="/sinhagad-itinerary">
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <FaMapMarkedAlt className="text-2xl" />
                <span>View Complete One-Day Itinerary (Based on Real Reviews)</span>
              </button>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Safety Alerts */}
            {fort.safetyAlerts && fort.safetyAlerts.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle className="text-yellow-600" />
                  Safety Alerts
                </h2>
                <div className="space-y-3">
                  {fort.safetyAlerts.map((alert, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-l-4 ${alert.severity === 'Critical' ? 'bg-red-50 border-red-500' :
                        alert.severity === 'Warning' ? 'bg-yellow-50 border-yellow-500' :
                          'bg-blue-50 border-blue-500'
                        }`}
                    >
                      <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-2 ${alert.severity === 'Critical' ? 'bg-red-200 text-red-800' :
                        alert.severity === 'Warning' ? 'bg-yellow-200 text-yellow-800' :
                          'bg-blue-200 text-blue-800'
                        }`}>
                        {alert.severity}
                      </span>
                      <p className="text-gray-700 font-medium">{alert.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{fort.description}</p>
            </div>

            {/* History */}
            {fort.history && (
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">History</h2>
                <p className="text-gray-700 leading-relaxed mb-3">{fort.history.brief}</p>
                {fort.history.significance && (
                  <p className="text-gray-700 leading-relaxed italic mb-3">
                    <strong>Significance:</strong> {fort.history.significance}
                  </p>
                )}
                {fort.history.famousBattles && fort.history.famousBattles.length > 0 && (
                  <div className="mt-3">
                    <strong className="text-gray-800">Famous Battles:</strong>
                    <ul className="list-disc list-inside text-gray-700 mt-1">
                      {fort.history.famousBattles.map((battle, idx) => (
                        <li key={idx}>{battle}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Accessibility Information */}
            {fort.accessibility && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-2 border-green-400">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaWheelchair className="text-green-600" />
                  Accessibility Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FaWheelchair className={fort.accessibility.wheelchairAccessible ? 'text-green-600 text-2xl' : 'text-gray-400 text-2xl'} />
                    <div>
                      <p className="font-semibold text-gray-800">Wheelchair Accessible</p>
                      <p className="text-sm text-gray-600">{fort.accessibility.wheelchairAccessible ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FaWalking className={fort.accessibility.elderlyFriendly ? 'text-green-600 text-2xl' : 'text-gray-400 text-2xl'} />
                    <div>
                      <p className="font-semibold text-gray-800">Elderly Friendly</p>
                      <p className="text-sm text-gray-600">{fort.accessibility.elderlyFriendly ? 'Yes' : 'No'}</p>
                    </div>
                  </div>
                </div>
                {fort.accessibility.stepsCount && (
                  <p className="mt-3 text-gray-700">
                    <span className="font-semibold">Steps Count:</span> {fort.accessibility.stepsCount}
                  </p>
                )}
                {fort.accessibility.restPoints && (
                  <p className="mt-2 text-gray-700">
                    <span className="font-semibold">Rest Points:</span> {fort.accessibility.restPoints}
                  </p>
                )}
                {fort.accessibility.notes && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-gray-700 text-sm">{fort.accessibility.notes}</p>
                  </div>
                )}
              </div>
            )}

            {/* Trek Routes */}
            {fort.trekDetails?.routes && fort.trekDetails.routes.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-2 border-blue-400">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Trek Routes</h2>
                <div className="space-y-4">
                  {fort.trekDetails.routes.map((route, index) => (
                    <div key={index} className="border-l-4 border-orange-600 pl-4 p-4 bg-orange-50 rounded-r-lg hover:shadow-md transition">
                      <h3 className="font-bold text-lg text-gray-800">{route.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Distance: {route.distance} | Duration: {route.duration} | Difficulty: {route.difficulty}
                      </p>
                      <p className="text-gray-700">{route.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Food */}
            {fort.nearbyFood && fort.nearbyFood.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🍽️ Nearby Food Options</h2>
                <div className="grid gap-4">
                  {fort.nearbyFood.map((food, index) => (
                    <div key={index} className="border-2 border-gray-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-md transition">
                      <h3 className="font-bold text-lg">{food.name}</h3>
                      <p className="text-sm text-gray-600">Type: {food.type}</p>
                      <p className="text-sm text-gray-600">Distance: {food.distance}</p>
                      <p className="text-sm text-gray-600">Avg Cost: ₹{food.avgCost}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Stays */}
            {fort.nearbyStays && fort.nearbyStays.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🏨 Nearby Stay Options</h2>
                <div className="grid gap-4">
                  {fort.nearbyStays.map((stay, index) => (
                    <div key={index} className="border-2 border-gray-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-md transition">
                      <h3 className="font-bold text-lg">{stay.name}</h3>
                      <p className="text-sm text-gray-600">Type: {stay.type}</p>
                      <p className="text-sm text-gray-600">Distance: {stay.distance}</p>
                      <p className="text-sm text-gray-600">Price Range: ₹{stay.priceRange}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Button */}
            <div>
              <DownloadButton fort={fort} />
            </div>

            {/* Visit Information */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Visit Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-orange-100">Difficulty</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-1 ${fort.visitInfo.difficulty === 'Easy'
                      ? 'bg-green-100 text-green-800'
                      : fort.visitInfo.difficulty === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                      }`}
                  >
                    {fort.visitInfo.difficulty}
                  </span>
                </div>
                {fort.visitInfo.entryFee && (
                  <div>
                    <p className="text-sm text-orange-100">Entry Fee</p>
                    <p className="font-bold text-lg">₹{fort.visitInfo.entryFee.indian}</p>
                    {fort.visitInfo.entryFee.foreigner && (
                      <p className="text-xs text-orange-100">Foreigner: ₹{fort.visitInfo.entryFee.foreigner}</p>
                    )}
                  </div>
                )}
                {fort.visitInfo.timings && (
                  <div>
                    <p className="text-sm text-orange-100">Timings</p>
                    <p className="font-semibold">{fort.visitInfo.timings}</p>
                  </div>
                )}
                {fort.visitInfo.timeRequired && (
                  <div>
                    <p className="text-sm text-orange-100">Time Required</p>
                    <p className="font-semibold">{fort.visitInfo.timeRequired}</p>
                  </div>
                )}
                {fort.visitInfo.bestSeason && fort.visitInfo.bestSeason.length > 0 && (
                  <div>
                    <p className="text-sm text-orange-100">Best Season</p>
                    <p className="font-semibold">{fort.visitInfo.bestSeason.join(', ')}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Facilities</h3>
              <div className="space-y-2">
                {Object.entries(fort.facilities).map(([key, value]) => {
                  // Handle different value types
                  let displayValue;
                  if (typeof value === 'boolean') {
                    displayValue = value ? '✅' : '❌';
                  } else if (typeof value === 'object' && value !== null) {
                    // Handle object values (like parking, washrooms, etc.)
                    if (value.available !== undefined) {
                      displayValue = value.available ? '✅ Available' : '❌ Not Available';
                      if (value.cost) displayValue += ` (${value.cost})`;
                    } else if (Array.isArray(value)) {
                      displayValue = value.join(', ');
                    } else {
                      displayValue = JSON.stringify(value);
                    }
                  } else {
                    displayValue = value || 'N/A';
                  }

                  return (
                    <div key={key} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-700 capitalize font-medium">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm text-gray-600">
                        {displayValue}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Google Maps */}
            {fort.location.coordinates?.lat && fort.location.coordinates?.lng && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    title="Fort Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://maps.google.com/maps?q=${fort.location.coordinates.lat},${fort.location.coordinates.lng}&output=embed`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Emergency Button - Floating */}
      <EmergencyButton fort={fort} />
    </div>
  );
};

export default FortDetails;
