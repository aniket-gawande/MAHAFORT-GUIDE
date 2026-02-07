import React from 'react';
import { Link } from 'react-router-dom';
import CrowdStatusBadge from './CrowdStatusBadge';
import { FaMapMarkerAlt, FaHiking } from 'react-icons/fa';

const FortCard = ({ fort }) => {
  const defaultImage = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500';

  return (
    <div className="group relative h-[450px] w-full overflow-hidden rounded-2xl bg-royal-gray border border-white/5 hover:border-saffron/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,153,51,0.15)]">
      
      {/* Image Section */}
      <div className="h-3/5 w-full overflow-hidden relative">
        <img 
          src={fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage} 
          alt={fort.name} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal-gray via-transparent to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          {fort.crowdStatus && <CrowdStatusBadge status={fort.crowdStatus} />}
          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[10px] uppercase font-bold text-saffron border border-saffron/30">
            {fort.type || 'Hill Fort'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-royal-gray via-royal-gray to-transparent">
        <div className="mb-3 flex items-center gap-2 text-saffron text-xs font-bold tracking-wider uppercase">
            <FaMapMarkerAlt /> {fort.location.district}
        </div>

        <h3 className="mb-2 text-2xl font-cinematic font-bold text-white group-hover:text-saffron transition-colors">
            {fort.name}
        </h3>
        
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
                <FaHiking className="text-saffron" />
                {fort.trek?.routes?.[0]?.difficulty || 'Moderate'}
            </span>
            <span>•</span>
            <span>{fort.history?.builtBy || 'Maratha Empire'}</span>
        </div>
        
        <Link 
          to={(fort.name === "Sinhagad Fort" || fort._id === "sinhagad") ? "/sinhagad-itinerary" : `/fort/${fort._id}`}
          className="block w-full py-3 text-center rounded-lg bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-saffron hover:text-black hover:border-saffron transition-all"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
};

export default FortCard;