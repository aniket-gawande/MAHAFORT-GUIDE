import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mahaLogo from '../assets/mahalogo.jpeg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-royal-black/90 backdrop-blur-md border-white/10 py-3' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={mahaLogo} 
            alt="Logo" 
            className="h-10 w-10 rounded-full border-2 border-saffron group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,153,51,0.5)]" 
          />
          <span className="text-xl font-cinematic font-bold text-white tracking-widest group-hover:text-saffron transition-colors">
            MAHAFORT <span className="text-saffron">GUIDE</span>
          </span>
        </Link>

        {/* Links */}
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
          
          <Link 
            to="/login"
            className="px-6 py-2 border border-saffron text-saffron rounded-full hover:bg-saffron hover:text-black transition-all shadow-[0_0_10px_rgba(255,153,51,0.2)]"
          >
            JOIN FORCE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;