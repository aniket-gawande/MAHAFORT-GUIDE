import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load all pages for faster initial startup
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const FortDetails = lazy(() => import('./pages/FortDetails'));
const SinhagadDetail = lazy(() => import('./pages/SinhagadDetail'));
const SinhagadItinerary = lazy(() => import('./pages/SinhagadItinerary'));
const MurudJanjiraDetail = lazy(() => import('./pages/MurudJanjiraDetail'));
const VishalgadDetail = lazy(() => import('./pages/VishalgadDetail'));
const SindhudurgDetail = lazy(() => import('./pages/SindhudurgDetail'));
const Admin = lazy(() => import('./pages/Admin'));
const TripPlanner = lazy(() => import('./pages/TripPlanner'));
const Forts = lazy(() => import('./pages/Forts'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  </div>
);

// Component to redirect authenticated users away from auth pages
const AuthRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  if (loading) return <PageLoader />;
  if (isAuthenticated) return <Navigate to="/" replace />;
  return children;
};

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Main Pages - accessible to all */}
        <Route path="/" element={<Home />} />
        <Route path="/forts" element={<Forts />} />
        <Route path="/about" element={<About />} />

        {/* Auth Pages - redirect to home if already logged in */}
        <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
        <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />

        {/* Fort Detail Pages - Protected, login required */}
        <Route path="/fort/:id" element={
          <ProtectedRoute><FortDetails /></ProtectedRoute>
        } />
        <Route path="/fort/sinhagad" element={
          <ProtectedRoute><SinhagadDetail /></ProtectedRoute>
        } />
        <Route path="/sinhagad-itinerary" element={
          <ProtectedRoute><SinhagadItinerary /></ProtectedRoute>
        } />
        <Route path="/fort/murud-janjira" element={
          <ProtectedRoute><MurudJanjiraDetail /></ProtectedRoute>
        } />
        <Route path="/fort/murud_janjira" element={
          <ProtectedRoute><MurudJanjiraDetail /></ProtectedRoute>
        } />
        <Route path="/fort/vishalgad" element={
          <ProtectedRoute><VishalgadDetail /></ProtectedRoute>
        } />
        <Route path="/fort/sindhudurg" element={
          <ProtectedRoute><SindhudurgDetail /></ProtectedRoute>
        } />

        {/* Admin - Protected */}
        <Route path="/admin" element={
          <ProtectedRoute><Admin /></ProtectedRoute>
        } />

        {/* Trip Planner */}
        <Route path="/trip-planner" element={<TripPlanner />} />

        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
