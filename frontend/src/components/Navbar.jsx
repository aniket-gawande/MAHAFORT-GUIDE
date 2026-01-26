import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏰</span>
            <span className="text-xl font-bold">MahaFort Guide</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-orange-200 transition">
              Home
            </Link>
            <Link to="/forts" className="hover:text-orange-200 transition">
              All Forts
            </Link>
            <Link to="/trip-planner" className="hover:text-orange-200 transition">
              Trip Planner
            </Link>
            <Link to="/about" className="hover:text-orange-200 transition">
              About
            </Link>
          </div>

          {/* Admin Button */}
          <Link
            to="/admin"
            className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;