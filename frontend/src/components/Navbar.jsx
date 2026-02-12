import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import mahaLogo from '../assets/mahalogo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

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
  }, [navigate]);

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
          {['Home', 'About'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative text-mist hover:text-saffron transition-colors after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-saffron after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
          
          {isAuthenticated ? (
            <div className="relative user-dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-saffron/50 rounded-full hover:border-saffron transition-all group"
              >
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.username} className="h-7 w-7 rounded-full border border-saffron/50 object-cover" />
                ) : (
                  <div className="h-7 w-7 rounded-full bg-saffron/20 border border-saffron/50 flex items-center justify-center text-saffron text-xs font-bold">
                    {user?.username?.charAt(0).toUpperCase() || 'W'}
                  </div>
                )}
                <span className="text-white group-hover:text-saffron transition-colors text-xs tracking-wider">
                  {user?.username?.toUpperCase() || 'WARRIOR'}
                </span>
                <svg className={`w-3 h-3 text-saffron transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-royal-black/95 backdrop-blur-xl border border-saffron/20 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-2 overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-saffron font-bold text-sm">{user?.username}</p>
                    <p className="text-gray-500 text-xs truncate">{user?.email}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-saffron/10 border border-saffron/30 rounded-full text-[10px] text-saffron uppercase tracking-wider">
                      {user?.role || 'warrior'}
                    </span>
                  </div>
                  <div className="py-1">
                    {user?.role === 'admin' && (
                      <Link to="/admin" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-saffron/10 transition-all text-sm">
                        <span>🛡️</span> Admin Dashboard
                      </Link>
                    )}
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all text-sm">
                      <span>🚪</span> Leave Stronghold
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="px-6 py-2 border border-saffron text-saffron rounded-full hover:bg-saffron hover:text-black transition-all shadow-[0_0_10px_rgba(255,153,51,0.2)]">
              JOIN FORCE
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
            {['Home', 'About'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
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
                    <img src={user.avatar} alt={user.username} className="h-10 w-10 rounded-full border-2 border-saffron object-cover" />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-saffron/20 border-2 border-saffron flex items-center justify-center text-saffron font-bold">
                      {user?.username?.charAt(0).toUpperCase() || 'W'}
                    </div>
                  )}
                  <div>
                    <p className="text-saffron font-bold text-sm">{user?.username}</p>
                    <p className="text-gray-500 text-xs">{user?.role || 'warrior'}</p>
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
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-center border border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-black transition-all font-bold">
                  JOIN FORCE
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-center bg-saffron text-black rounded-lg hover:bg-orange-400 transition-all font-bold">
                  ENLIST NOW
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