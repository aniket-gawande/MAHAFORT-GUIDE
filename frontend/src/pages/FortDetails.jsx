import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFortById } from '../services/api';

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600"></div>
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="h-96 overflow-hidden">
        <img
          src={fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage}
          alt={fort.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="bg-white rounded-lg shadow-md p-6 -mt-20 relative z-10 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{fort.name}</h1>
          <p className="text-lg text-gray-600 flex items-center">
            <span className="mr-2">📍</span>
            {fort.location.district}, Maharashtra
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{fort.description}</p>
            </div>

            {/* History */}
            {fort.history && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">History</h2>
                <p className="text-gray-700 leading-relaxed">{fort.history}</p>
              </div>
            )}

            {/* Trek Routes */}
            {fort.trekDetails?.routes && fort.trekDetails.routes.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Trek Routes</h2>
                <div className="space-y-4">
                  {fort.trekDetails.routes.map((route, index) => (
                    <div key={index} className="border-l-4 border-orange-600 pl-4">
                      <h3 className="font-bold text-lg">{route.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Distance: {route.distance} | Duration: {route.duration}
                      </p>
                      <p className="text-gray-700">{route.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Food */}
            {fort.nearbyFood && fort.nearbyFood.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🍽️ Nearby Food Options</h2>
                <div className="grid gap-4">
                  {fort.nearbyFood.map((food, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-bold">{food.name}</h3>
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
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🏨 Nearby Stay Options</h2>
                <div className="grid gap-4">
                  {fort.nearbyStays.map((stay, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-bold">{stay.name}</h3>
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
            {/* Visit Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Visit Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Difficulty</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      fort.visitInfo.difficulty === 'Easy'
                        ? 'bg-green-100 text-green-800'
                        : fort.visitInfo.difficulty === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {fort.visitInfo.difficulty}
                  </span>
                </div>
                {fort.visitInfo.entryFee !== undefined && (
                  <div>
                    <p className="text-sm text-gray-600">Entry Fee</p>
                    <p className="font-semibold">₹{fort.visitInfo.entryFee}</p>
                  </div>
                )}
                {fort.visitInfo.timings && (
                  <div>
                    <p className="text-sm text-gray-600">Timings</p>
                    <p className="font-semibold">{fort.visitInfo.timings}</p>
                  </div>
                )}
                {fort.visitInfo.timeRequired && (
                  <div>
                    <p className="text-sm text-gray-600">Time Required</p>
                    <p className="font-semibold">{fort.visitInfo.timeRequired}</p>
                  </div>
                )}
                {fort.visitInfo.bestSeason && fort.visitInfo.bestSeason.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-600">Best Season</p>
                    <p className="font-semibold">{fort.visitInfo.bestSeason.join(', ')}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Facilities</h3>
              <div className="space-y-2">
                {Object.entries(fort.facilities).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span>
                      {typeof value === 'boolean' 
                        ? (value ? '✅' : '❌')
                        : value || 'N/A'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            {fort.location.coordinates?.lat && fort.location.coordinates?.lng && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
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
    </div>
  );
};

export default FortDetails;