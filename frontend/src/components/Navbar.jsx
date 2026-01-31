import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-xl py-2' 
        : 'bg-gradient-to-r from-orange-600 to-red-600 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`text-4xl transform group-hover:scale-110 transition-transform ${
              scrolled ? 'filter drop-shadow-md' : ''
            }`}>
              🏰
            </div>
            <div>
              <span className={`text-2xl font-extrabold ${
                scrolled ? 'bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent' : 'text-white'
              }`}>
                MahaFort
              </span>
              <span className={`text-sm block -mt-1 ${
                scrolled ? 'text-gray-500' : 'text-orange-100'
              }`}>
                Your Fort Guide
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { path: '/', label: 'Home', icon: '🏠' },
              { path: '/forts', label: 'All Forts', icon: '🏰' },
              { path: '/trip-planner', label: 'Trip Planner', icon: '🗓️' },
              { path: '/about', label: 'About', icon: 'ℹ️' }
            ].map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  isActive(path)
                    ? scrolled
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-white/20 text-white'
                    : scrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-1">{icon}</span>
                {label}
              </Link>
            ))}
          </div>

          {/* Admin Button */}
          <div className="hidden md:block">
            <Link
              to="/admin"
              className={`px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg ${
                scrolled
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                  : 'bg-white text-orange-600 hover:bg-orange-50'
              }`}
            >
              👤 Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            <svg className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-2">
              {[
                { path: '/', label: 'Home', icon: '🏠' },
                { path: '/forts', label: 'All Forts', icon: '🏰' },
                { path: '/trip-planner', label: 'Trip Planner', icon: '🗓️' },
                { path: '/about', label: 'About', icon: 'ℹ️' },
                { path: '/admin', label: 'Admin', icon: '👤' }
              ].map(({ path, label, icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive(path)
                      ? scrolled
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-white/20 text-white'
                      : scrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span className="mr-2">{icon}</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;