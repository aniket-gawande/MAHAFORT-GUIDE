import React from 'react';
import { Link } from 'react-router-dom';
import mahaLogo from '../assets/mahalogo.jpeg';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={mahaLogo}
              alt="MahaFort Logo"
              className="h-14 w-14 rounded-full border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold tracking-wide group-hover:text-orange-200 transition-colors duration-300">MahaFort Guide</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-orange-200 transition-all duration-300 font-semibold text-lg hover:scale-110 transform">
              Home
            </Link>
            <Link to="/" className="hover:text-orange-200 transition-all duration-300 font-semibold text-lg hover:scale-110 transform">
              All Forts
            </Link>
            <Link to="/about" className="hover:text-orange-200 transition-all duration-300 font-semibold text-lg hover:scale-110 transform">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;