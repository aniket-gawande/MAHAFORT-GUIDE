import React from 'react';
import { Link } from 'react-router-dom';
import CrowdStatusBadge from './CrowdStatusBadge';
import { FaPhoneAlt } from 'react-icons/fa';

const FortCard = ({ fort }) => {
  const defaultImage = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-300">
      {/* Fort Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage}
          alt={fort.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

        {/* Crowd Status Badge Overlay */}
        {fort.crowdStatus && (
          <div className="absolute top-3 right-3">
            <CrowdStatusBadge status={fort.crowdStatus} />
          </div>
        )}
      </div>

      {/* Fort Details */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{fort.name}</h3>

        {/* Location */}
        <p className="text-gray-600 text-sm mb-2 flex items-center">
          <span className="mr-1">📍</span>
          {fort.location.district}
        </p>

        {/* Difficulty Badge and Emergency Contacts */}
        <div className="flex items-center justify-between mb-3">
          {fort.trek?.routes && fort.trek.routes.length > 0 && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${fort.trek.routes[0].difficulty === 'Easy'
                ? 'bg-green-100 text-green-800'
                : fort.trek.routes[0].difficulty === 'Moderate'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
                }`}
            >
              {fort.trek.routes[0].difficulty}
            </span>
          )}

          {/* Emergency Contacts Indicator */}
          {fort.safety?.emergencyContacts && fort.safety.emergencyContacts.length > 0 && (
            <div className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
              <FaPhoneAlt className="text-green-600" />
              <span className="font-semibold">{fort.safety.emergencyContacts.length} Emergency Contacts</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {fort.description || fort.history?.brief || 'Historical fort in Maharashtra'}
        </p>

        {/* View Details/Itinerary Button */}
        <Link
          to={fort.name === "Sinhagad Fort" ? "/sinhagad-itinerary" : `/fort/${fort._id}`}
          className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
        >
          {fort.name === "Sinhagad Fort" ? "View Complete Itinerary" : "View Details"}
        </Link>
      </div>
    </div>
  );
};

export default FortCard;
