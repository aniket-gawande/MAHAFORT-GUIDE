import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaHiking, FaClock } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

// Route mapping for forts with dedicated detail pages
const DETAIL_PAGE_ROUTES = {
  sinhagad: '/sinhagad-itinerary',
  janjira: '/fort/murud-janjira',
  murud_janjira: '/fort/murud-janjira',
  vishalgad: '/fort/vishalgad',
  sindhudurg: '/fort/sindhudurg',
  lohagad: '/fort/lohagad',
  tung: '/fort/tung',
};

const getFortRoute = (fort) => {
  const id = fort._id || fort.name?.toLowerCase().replace(/\s+/g, '-');
  return DETAIL_PAGE_ROUTES[id] || `/fort/${id}`;
};

const FortCard = ({ fort }) => {
  const defaultImage = 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500';
  const { isAuthenticated } = useContext(AuthContext);

  const fortImage = fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage;
  const description = fort.description || 'Explore the rich history, challenging terrain, and the legacy of the Maratha Empire at this magnificent fort.';

  return (
    <div className="group flex flex-col w-full overflow-hidden rounded-xl bg-[#1A1A1A] border border-white/5 hover:border-saffron/40 transition-all duration-300">
      
      {/* Top Image */}
      <div className="h-48 w-full overflow-hidden relative">
        <img
          src={fortImage}
          alt={fort.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col p-5 bg-[#1A1A1A]">
        {/* Title & Subtitle */}
        <h3 className="mb-1 text-lg font-cinematic font-bold text-white uppercase tracking-wide truncate group-hover:text-saffron transition-colors">
          {fort.name}
        </h3>
        
        <div className="mb-4 flex items-center gap-2 text-saffron text-[11px] font-bold tracking-wider uppercase">
          <FaMapMarkerAlt size={10} /> {fort.location?.district || 'Maharashtra'} District
        </div>

        {/* Description line clamp */}
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-5 min-h-[32px]">
          {description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-between text-gray-300 text-xs font-medium mb-6">
          <div className="flex items-center gap-1.5">
            <FaHiking className="text-gray-400" size={14} />
            <span>{fort.difficulty || fort.trek?.routes?.[0]?.difficulty || 'Moderate'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaClock className="text-gray-400" size={12} />
            <span>{fort.trek?.time || '2-3 hours'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3">
          <Link
            to={getFortRoute(fort)}
            onClick={() => window.scrollTo(0, 0)}
            className="flex-1 text-center py-2.5 rounded-lg bg-[#C47D3B] text-black font-bold text-[11px] uppercase tracking-wider hover:bg-saffron transition-colors shadow-[0_2px_10px_rgba(196,125,59,0.3)]"
          >
            View Details
          </Link>
          
          <button
            onClick={() => {
              if(!isAuthenticated) alert("Please log in to save plans");
              // Future save logic
            }}
            className="flex-1 text-center py-2.5 rounded-lg bg-transparent border border-white/20 text-white font-bold text-[11px] uppercase tracking-wider hover:bg-white/5 transition-colors"
          >
            Save to Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default FortCard;