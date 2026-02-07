import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import FortDetails from './pages/FortDetails';
import Admin from './pages/Admin';
import SinhagadItinerary from './pages/SinhagadItinerary';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fort/:id" element={<FortDetails />} />
          <Route path="/forts" element={<Home />} />
          <Route
            path="/trip-planner"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <p className="text-2xl text-gray-300">Trip Planner - Coming Soon!</p>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <p className="text-2xl text-gray-300">About Page - Coming Soon!</p>
              </div>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sinhagad-itinerary" element={<SinhagadItinerary />} />
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
