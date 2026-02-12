import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import mahaLogo from '../assets/mahalogo.jpeg';

// Format username: remove underscores, random suffixes, and capitalize nicely
const formatDisplayName = (name) => {
  if (!name) return 'Warrior';
  // Remove trailing random codes like _RHZB, _a3x, etc. (underscore + 2-6 alphanumeric at end)
  let clean = name.replace(/_[A-Za-z0-9]{2,6}$/, '');
  // Replace remaining underscores/hyphens with spaces
  clean = clean.replace(/[_-]+/g, ' ');
  // Title case
  return clean.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ').trim() || 'Warrior';
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const displayName = formatDisplayName(user?.username);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownOpen && !e.target.closest('.user-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-royal-black/90 backdrop-blur-md border-white/10 py-2 md:py-3' 
        : 'bg-transparent border-transparent py-3 md:py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <img 
            src={mahaLogo} 
            alt="Logo" 
            className="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-saffron group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,153,51,0.5)]" 
          />
          <span className="text-base md:text-xl font-cinematic font-bold text-white tracking-widest group-hover:text-saffron transition-colors">
            MAHAFORT <span className="text-saffron">GUIDE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-bold tracking-widest uppercase">
          {['Home', 'Forts', 'Trip Planner', 'About'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : item === 'Trip Planner' ? '/trip-planner' : `/${item.toLowerCase()}`}
              className="relative text-mist hover:text-saffron transition-colors after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-saffron after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
          
          {isAuthenticated ? (
            <div className="relative user-dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-gradient-to-r from-saffron/10 to-orange-600/5 border border-saffron/30 rounded-full hover:border-saffron hover:shadow-[0_0_20px_rgba(255,153,51,0.25)] transition-all duration-300 group"
              >
                {user?.avatar ? (
                  <img src={user.avatar} alt={displayName} className="h-8 w-8 rounded-full border-2 border-saffron object-cover shadow-[0_0_10px_rgba(255,153,51,0.4)]" />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-saffron to-orange-600 flex items-center justify-center text-white text-sm font-black shadow-[0_0_12px_rgba(255,153,51,0.4)]">
                    {displayName.charAt(0)}
                  </div>
                )}
                <span className="text-white group-hover:text-saffron transition-colors text-xs font-bold max-w-[120px] truncate">
                  {displayName}
                </span>
                <svg className={`w-3 h-3 text-saffron/70 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-72 bg-royal-black/95 backdrop-blur-xl border border-saffron/15 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                  {/* Profile Header */}
                  <div className="relative px-5 py-5 border-b border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron/5 via-transparent to-orange-600/5"></div>
                    <div className="relative flex items-center gap-4">
                      {user?.avatar ? (
                        <img src={user.avatar} alt={displayName} className="h-14 w-14 rounded-2xl border-2 border-saffron/50 object-cover shadow-[0_0_20px_rgba(255,153,51,0.2)]" />
                      ) : (
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-saffron to-orange-600 flex items-center justify-center text-white text-xl font-black shadow-[0_0_20px_rgba(255,153,51,0.3)]">
                          {displayName.charAt(0)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-cinematic font-bold text-base truncate">{displayName}</p>
                        <p className="text-gray-500 text-xs truncate mt-0.5">{user?.email}</p>
                        <span className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-0.5 bg-saffron/10 border border-saffron/20 rounded-full text-[10px] text-saffron font-bold uppercase tracking-wider">
                          ⚔️ {user?.role || 'warrior'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="py-2 px-2">
                    {user?.role === 'admin' && (
                      <Link to="/admin" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-saffron/10 rounded-xl transition-all text-sm font-bold">
                        <span className="text-base">🛡️</span> Admin Dashboard
                      </Link>
                    )}
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all text-sm font-bold">
                      <span className="text-base">🚪</span> Leave Stronghold
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="group relative px-7 py-2.5 border-2 border-saffron text-saffron rounded-full hover:bg-saffron hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,153,51,0.2)] hover:shadow-[0_0_25px_rgba(255,153,51,0.5)] font-cinematic font-bold tracking-widest text-sm flex items-center gap-2">
              <span className="text-base">⚔️</span> JOIN FORCE
              <span className="absolute inset-0 rounded-full bg-saffron/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:text-saffron transition-colors z-50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-72 bg-royal-black/95 backdrop-blur-xl border-l border-saffron/20 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-20 px-6 space-y-6">
            {/* Nav Links */}
            {['Home', 'Forts', 'Trip Planner', 'About'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : item === 'Trip Planner' ? '/trip-planner' : `/${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-body font-bold text-white tracking-widest uppercase hover:text-saffron transition-colors py-2 border-b border-white/5"
              >
                {item}
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="space-y-4 pt-4 border-t border-saffron/20">
                <div className="flex items-center gap-3">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={displayName} className="h-14 w-14 rounded-2xl border-2 border-saffron/50 object-cover shadow-[0_0_15px_rgba(255,153,51,0.2)]" />
                  ) : (
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-saffron to-orange-600 flex items-center justify-center text-white font-black text-xl shadow-[0_0_15px_rgba(255,153,51,0.3)]">
                      {displayName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-white font-cinematic font-bold text-base">{displayName}</p>
                    <p className="text-gray-500 text-xs truncate">{user?.email}</p>
                    <span className="inline-flex items-center gap-1 mt-1 px-2.5 py-0.5 bg-saffron/10 border border-saffron/20 rounded-full text-[10px] text-saffron font-bold uppercase tracking-wider">
                      ⚔️ {user?.role || 'warrior'}
                    </span>
                  </div>
                </div>
                {user?.role === 'admin' && (
                  <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-saffron transition-colors py-2">
                    🛡️ Admin Dashboard
                  </Link>
                )}
                <button onClick={handleLogout} className="w-full text-left text-red-400 hover:text-red-300 py-2">
                  🚪 Leave Stronghold
                </button>
              </div>
            ) : (
              <div className="pt-4 space-y-3">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-3 border-2 border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all font-cinematic font-bold tracking-widest shadow-[0_0_10px_rgba(255,153,51,0.2)]">
                  <span>⚔️</span> JOIN FORCE
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-center bg-gradient-to-r from-saffron to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-saffron transition-all font-cinematic font-bold tracking-widest shadow-[0_0_10px_rgba(255,153,51,0.3)]">
                  🛡️ ENLIST NOW
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;