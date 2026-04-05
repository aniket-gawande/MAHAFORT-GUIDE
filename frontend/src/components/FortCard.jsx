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
  const { isAuthenticated } = useContext(AuthContext);

  // Generate dynamic seed image based on fort name if array is empty
  const defaultImage = `https://picsum.photos/seed/${encodeURIComponent(fort.name)}/500/300`;
  const fortImage = fort.images && fort.images.length > 0 ? fort.images[0] : defaultImage;
  const description = fort.description || 'Explore the rich history, challenging terrain, and the legacy of the Maratha Empire at this magnificent fort.';

  return (
    <div className="group relative flex flex-col w-full h-full overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-saffron/30 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(196,125,59,0.15)] hover:-translate-y-2">
      
      {/* Decorative Corner Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
      
      {/* Top Image */}
      <div className="h-56 w-full overflow-hidden relative z-0">
        <img
          src={fortImage}
          alt={fort.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradients for Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div className="absolute inset-0 bg-[#c47d3b]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col p-5 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/5 rounded-b-2xl border-t-0 transition-colors group-hover:border-saffron/20 group-hover:bg-[#1a1510]">
          {/* Title & Subtitle */}
          <h3 className="mb-1.5 text-xl font-cinematic font-black text-white uppercase tracking-widest truncate group-hover:text-saffron transition-colors drop-shadow-md">
            {fort.name}
          </h3>
          
          <div className="mb-4 flex items-center gap-1.5 text-saffron/80 text-[10px] font-bold tracking-[0.2em] uppercase">
            <FaMapMarkerAlt size={10} className="text-saffron" /> 
            {fort.location?.district || fort.district || 'Maharashtra'}
          </div>

          {/* Description line clamp */}
          <p className="text-gray-400 font-medium text-xs leading-relaxed line-clamp-2 mb-6 min-h-[36px] group-hover:text-gray-300 transition-colors">
            {description}
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-gray-400 text-xs font-bold mb-6 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2 group-hover:text-white transition-colors">
              <FaHiking className="text-saffron/80" size={14} />
              <span className="uppercase text-[10px] tracking-widest">{fort.difficulty || fort.trek?.difficulty || fort.trek?.routes?.[0]?.difficulty || 'Moderate'}</span>
            </div>
            <div className="flex items-center gap-2 group-hover:text-white transition-colors">
              <FaClock className="text-saffron/80" size={12} />
              <span className="uppercase text-[10px] tracking-widest">{fort.timeToVisit || fort.trek?.time || fort.trek?.routes?.[0]?.time || '2 - 3 Hours'}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex gap-3">
            <Link
              to={getFortRoute(fort)}
              onClick={() => window.scrollTo(0, 0)}
              className="flex-1 text-center py-3 rounded-xl bg-saffron text-black font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(196,125,59,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full duration-[1.5s] ease-in-out"></div>
              View Fort
            </Link>
            
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent link click if wrapped
                if(!isAuthenticated) alert("Please log in to save plans");
                // Future save logic
              }}
              className="flex-1 text-center py-3 rounded-xl bg-black/40 backdrop-blur-sm border border-saffron/20 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-saffron/10 hover:border-saffron focus:outline-none transition-all duration-300"
            >
              Save Plan
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FortCard;