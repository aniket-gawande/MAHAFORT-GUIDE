import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FortDetails from './pages/FortDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Add padding to account for fixed navbar */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fort/:id" element={<FortDetails />} />
            <Route path="/forts" element={<Home />} />
            <Route 
              path="/trip-planner" 
              element={
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
                  <div className="text-8xl mb-6 animate-bounce">🗓️</div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Trip Planner</h2>
                  <p className="text-xl text-gray-600 mb-8">Coming Soon!</p>
                  <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{width: '60%'}}></div>
                  </div>
                </div>
              } 
            />
            <Route 
              path="/about" 
              element={
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
                  <div className="text-8xl mb-6">ℹ️</div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                  <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl px-4">
                    MahaFort Guide is your comprehensive platform for exploring Maharashtra's rich heritage of historic forts.
                  </p>
                  <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{width: '80%'}}></div>
                  </div>
                </div>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-8xl mb-6">🔐</div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Admin Panel</h2>
                  <p className="text-xl text-gray-600 mb-8">Secure Access Required</p>
                  <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg">
                    Login to Continue
                  </button>
                </div>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;