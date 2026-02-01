import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FortDetails from './pages/FortDetails';
import Admin from './pages/Admin';
import SinhagadItinerary from './pages/SinhagadItinerary';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fort/:id" element={<FortDetails />} />
          <Route path="/forts" element={<Home />} />
          <Route
            path="/trip-planner"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <p className="text-2xl text-gray-600">Trip Planner - Coming Soon!</p>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <p className="text-2xl text-gray-600">About Page - Coming Soon!</p>
              </div>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sinhagad-itinerary" element={<SinhagadItinerary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
