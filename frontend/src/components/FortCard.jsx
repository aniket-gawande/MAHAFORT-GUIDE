import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FortCard = ({ fort }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const defaultImage = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500';
  
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
      {/* Fort Image with Overlay */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        )}
        <img
          src={fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage}
          alt={fort.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Featured Badge */}
        {fort.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            ⭐ Featured
          </div>
        )}
        
        {/* Quick Info on Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between text-white text-sm">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd"/>
              </svg>
              {fort.visitInfo?.timeRequired || 'N/A'}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              ₹{fort.visitInfo?.entryFee || 'Free'}
            </span>
          </div>
        </div>
      </div>

      {/* Fort Details */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {fort.name}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          <span className="font-medium">{fort.location.district}, Maharashtra</span>
        </div>

        {/* Badges Row */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Difficulty Badge */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              fort.visitInfo.difficulty === 'Easy'
                ? 'bg-green-100 text-green-700 border border-green-300'
                : fort.visitInfo.difficulty === 'Moderate'
                ? 'bg-yellow-100 text-yellow-700 border border-yellow-300'
                : 'bg-red-100 text-red-700 border border-red-300'
            }`}
          >
            {fort.visitInfo.difficulty}
          </span>

          {/* Facilities Badges */}
          {fort.facilities?.parking && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-300">
              🅿️ Parking
            </span>
          )}
          {fort.facilities?.ropeway && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 border border-purple-300">
              🚡 Ropeway
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-5 line-clamp-2 leading-relaxed">
          {fort.description}
        </p>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pb-5 border-b border-gray-200">
          <span>⏰ {fort.visitInfo?.timings || 'All day'}</span>
          <span>🌤️ Best: {fort.visitInfo?.bestSeason?.[0] || 'Anytime'}</span>
        </div>

        {/* View Details Button */}
        <Link
          to={`/fort/${fort._id}`}
          className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore Fort →
        </Link>
      </div>
    </div>
  );
};

export default FortCard;