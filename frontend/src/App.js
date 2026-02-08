import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load all pages for faster initial startup
const Home = lazy(() => import('./pages/Home'));
const FortDetails = lazy(() => import('./pages/FortDetails'));
const Admin = lazy(() => import('./pages/Admin'));
const SinhagadItinerary = lazy(() => import('./pages/SinhagadItinerary'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
