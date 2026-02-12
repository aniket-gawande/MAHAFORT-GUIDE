import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import mahaLogo from '../assets/mahalogo.jpeg';
import heroBg from '../assets/hero-fort.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleReady, setGoogleReady] = useState(false);
    const googleBtnRef = useRef(null);

    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Redirect destination after login (from ProtectedRoute or default to home)
    const redirectTo = location.state?.from || '/';

    // Initialize Google Sign-In button on mount
    useEffect(() => {
        const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
        
        // Skip Google init if no client ID is configured
        if (!clientId || clientId === 'your_google_client_id_here') {
            console.warn('Google OAuth not configured - skipping Google Sign-In');
            return;
        }

        const initGoogle = () => {
            if (window.google && window.google.accounts && googleBtnRef.current) {
                try {
                    window.google.accounts.id.initialize({
                        client_id: clientId,
                        callback: async (response) => {
                            try {
                                setLoading(true);
                                setError('');
                                await googleLogin(response.credential);
                                navigate(redirectTo);
                            } catch (err) {
                                setError(err.message || 'Google login failed');
                            } finally {
                                setLoading(false);
                            }
                        }
                    });

                    window.google.accounts.id.renderButton(googleBtnRef.current, {
                        theme: 'filled_black',
                        size: 'large',
                        width: googleBtnRef.current.offsetWidth || 350,
                        text: 'signin_with',
                        shape: 'rectangular'
                    });
                    setGoogleReady(true);
                } catch (err) {
                    console.error('Google Sign-In init failed:', err);
                }
            }
        };

        // Try immediately, retry after script loads
        if (window.google && window.google.accounts) {
            initGoogle();
        } else {
            const timer = setTimeout(initGoogle, 1500);
            return () => clearTimeout(timer);
        }
    }, [googleLogin, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate(redirectTo);
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // handleGoogleLogin is now handled by the rendered Google button via useEffect

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Fort Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
            </div>

            {/* Ambient Saffron Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-saffron/5 blur-3xl pointer-events-none"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md mx-4">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-saffron/30 blur-xl animate-pulse"></div>
                        <img
                            src={mahaLogo}
                            alt="MahaFort Logo"
                            className="relative h-20 w-20 rounded-full border-2 border-saffron shadow-[0_0_30px_rgba(255,153,51,0.5)]"
                        />
                    </div>
                </div>

                {/* Card */}
                <div className="bg-black/60 backdrop-blur-xl border border-saffron/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(255,153,51,0.1)]">
                    {/* Title */}
                    <h1 className="text-3xl font-cinematic font-bold text-center text-white mb-2 tracking-wider">
                        JOIN THE <span className="text-saffron">MAVALA FORCE</span>
                    </h1>
                    <p className="text-center text-gray-400 text-sm mb-8 font-body">
                        Enter the stronghold of Maharashtra's heritage
                    </p>

                    {/* Redirect Notice */}
                    {location.state?.from && (
                        <div className="bg-saffron/10 border border-saffron/30 text-saffron px-4 py-3 rounded-lg mb-6 text-sm text-center font-body">
                            ⚔️ Login to access fort details
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wider uppercase font-body">
                                Subedar Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="subedar@mahafort.com"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron/50 transition-all font-body"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wider uppercase font-body">
                                Secret Code
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron/50 transition-all pr-12 font-body"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-saffron transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 bg-gradient-to-r from-saffron to-orange-600 text-white font-bold rounded-lg text-lg tracking-wider uppercase hover:from-orange-600 hover:to-saffron transition-all duration-300 shadow-[0_0_20px_rgba(255,153,51,0.3)] hover:shadow-[0_0_30px_rgba(255,153,51,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-cinematic"
                        >
                            {loading ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                            ) : (
                                <>
                                    <span className="text-xl">⚔️</span>
                                    ENTER THE STRONGHOLD
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent"></div>
                        <span className="text-gray-500 text-xs tracking-widest uppercase font-body">or continue with</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent"></div>
                    </div>

                    {/* Google Login - rendered by Google SDK */}
                    <div ref={googleBtnRef} className="w-full flex justify-center"></div>
                    {!googleReady && (
                        <p className="text-gray-600 text-xs text-center mt-2 font-body">
                            Google Sign-In is currently unavailable
                        </p>
                    )}

                    {/* Footer Links */}
                    <div className="mt-6 text-center space-y-3">
                        <Link
                            to="/forgot-password"
                            className="text-saffron/70 hover:text-saffron text-sm transition-colors block font-body"
                        >
                            Lost Secret Code?
                        </Link>
                        <p className="text-gray-500 text-sm font-body">
                            New Recruit?{' '}
                            <Link
                                to="/register"
                                className="text-saffron font-bold hover:text-orange-400 transition-colors underline underline-offset-4"
                            >
                                Enlist Here
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Decorative Star */}
                <div className="absolute -bottom-8 -right-8 text-saffron/20 text-6xl pointer-events-none select-none">
                    ✦
                </div>
            </div>
        </div>
    );
};

export default Login;
