import React from 'react';
import { Link } from 'react-router-dom';
import CrowdStatusBadge from './CrowdStatusBadge';
import { FaPhoneAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const FortCard = ({ fort }) => {
  const defaultImage = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500';

  return (
    <div className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-orange-200 hover:border-orange-400 transform hover:-translate-y-2">
      {/* Fort Image with Overlay */}
      <div className="h-56 overflow-hidden relative">
        {/* Gradient Overlay for Premium Look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <img
          src={fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage}
          alt={fort.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Crowd Status Badge Overlay */}
        {fort.crowdStatus && (
          <div className="absolute top-4 right-4 z-20">
            <CrowdStatusBadge status={fort.crowdStatus} />
          </div>
        )}

        {/* Marathi Decorative Corner */}
        <div className="absolute top-0 left-0 w-16 h-16 z-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-transparent opacity-20 rounded-br-full"></div>
        </div>
      </div>

      {/* Fort Info */}
      <div className="p-6">
        {/* Decorative Marathi Pattern Corner */}
        <div className="absolute top-4 right-4 text-orange-400 opacity-30 text-2xl">॥</div>

        {/* Fort Name - ALWAYS VISIBLE */}
        <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
          {fort.name}
        </h3>

        {/* Animated Underline */}
        <div className="h-1 w-0 group-hover:w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500 mb-4"></div>


        {/* Location with Icon */}
        <div className="flex items-center text-gray-700 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          <FaMapMarkerAlt className="mr-2 text-orange-500" />
          <p className="text-sm font-medium">{fort.location.district}</p>
        </div>

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

        {/* Premium View Details Button */}
        <Link
          to={(fort.name === "Sinhagad Fort" || fort._id === "sinhagad") ? "/sinhagad-itinerary" : `/fort/${fort._id}`}
          className="block w-full text-center bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white py-3 px-6 rounded-xl hover:from-orange-600 hover:via-red-600 hover:to-red-700 transition-all duration-500 font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group/btn"
        >
          {/* Button Shine Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>

          <span className="relative flex items-center justify-center gap-2">
            {(fort.name === "Sinhagad Fort" || fort._id === "sinhagad") ? "🏰 View Complete Itinerary" : "📍 View Details"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FortCard;
