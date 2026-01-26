import React from 'react';
import { Link } from 'react-router-dom';

const FortCard = ({ fort }) => {
  const defaultImage = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500';
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Fort Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage}
          alt={fort.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
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

        {/* Difficulty Badge */}
        <div className="flex items-center mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
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

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {fort.description}
        </p>

        {/* View Details Button */}
        <Link
          to={`/fort/${fort._id}`}
          className="block w-full text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FortCard;