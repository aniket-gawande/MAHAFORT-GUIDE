import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import mahaLogo from '../assets/mahalogo.jpeg';
import heroBg from '../assets/hero-fort.jpg';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleReady, setGoogleReady] = useState(false);
    const googleBtnRef = useRef(null);

    const { register, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    // Initialize Google Sign-In button on mount
    useEffect(() => {
        const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
        
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
                                navigate('/');
                            } catch (err) {
                                setError(err.message || 'Google sign-up failed');
                            } finally {
                                setLoading(false);
                            }
                        }
                    });

                    window.google.accounts.id.renderButton(googleBtnRef.current, {
                        theme: 'filled_black',
                        size: 'large',
                        width: googleBtnRef.current.offsetWidth || 350,
                        text: 'signup_with',
                        shape: 'rectangular'
                    });
                    setGoogleReady(true);
                } catch (err) {
                    console.error('Google Sign-In init failed:', err);
                }
            }
        };

        if (window.google && window.google.accounts) {
            initGoogle();
        } else {
            const timer = setTimeout(initGoogle, 1500);
            return () => clearTimeout(timer);
        }
    }, [googleLogin, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Secret codes do not match!');
            return;
        }

        if (formData.password.length < 6) {
            setError('Secret code must be at least 6 characters');
            return;
        }

        if (formData.username.length < 3) {
            setError('Warrior name must be at least 3 characters');
            return;
        }

        setLoading(true);

        try {
            await register(formData.username, formData.email, formData.password);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // handleGoogleRegister is now handled by the rendered Google button via useEffect

    // Password strength indicator
    const getPasswordStrength = () => {
        const pwd = formData.password;
        if (!pwd) return { width: '0%', color: 'bg-gray-600', text: '' };
        if (pwd.length < 6) return { width: '25%', color: 'bg-red-500', text: 'Weak' };
        if (pwd.length < 8) return { width: '50%', color: 'bg-yellow-500', text: 'Fair' };
        if (/(?=.*[A-Z])(?=.*\d)/.test(pwd)) return { width: '100%', color: 'bg-green-500', text: 'Strong' };
        return { width: '75%', color: 'bg-saffron', text: 'Good' };
    };

    const strength = getPasswordStrength();

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden py-8">
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

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-saffron/5 blur-3xl pointer-events-none"></div>

            {/* Register Card */}
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
                        ENLIST AS <span className="text-saffron">MAVALA</span>
                    </h1>
                    <p className="text-center text-gray-400 text-sm mb-8 font-body">
                        Join the ranks of Maharashtra's fort guardians
                    </p>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {/* Register Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Username */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wider uppercase font-body">
                                Warrior Name
                            </label>
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="TanajiMalusare"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron/50 transition-all font-body"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wider uppercase font-body">
                                Warrior Email
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="warrior@mahafort.com"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron/50 transition-all font-body"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wider uppercase font-body">
                                Secret Code
                            </label>
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Min 6 characters"
                                    required
                                    className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron/50 transition-all font-body"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-saffron transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {/* Password Strength Bar */}
                            {formData.password && (
                                <div className="mt-2">
                                    <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${strength.color} transition-all duration-300 rounded-full`}
                                            style={{ width: strength.width }}
                                        ></div>
                                    </div>
                                    <p className={`text-xs mt-1 ${strength.color.replace('bg-', 'text-')}`}>
                                        {strength.text}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wider uppercase font-body">
                                Confirm Secret Code
                            </label>
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type={showConfirm ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Repeat your code"
                                    required
                                    className={`w-full pl-11 pr-12 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all font-body ${
                                        formData.confirmPassword && formData.confirmPassword !== formData.password
                                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/50'
                                            : formData.confirmPassword && formData.confirmPassword === formData.password
                                            ? 'border-green-500/50 focus:border-green-500 focus:ring-1 focus:ring-green-500/50'
                                            : 'border-white/10 focus:border-saffron focus:ring-1 focus:ring-saffron/50'
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-saffron transition-colors"
                                >
                                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 bg-gradient-to-r from-saffron to-orange-600 text-white font-bold rounded-lg text-lg tracking-wider uppercase hover:from-orange-600 hover:to-saffron transition-all duration-300 shadow-[0_0_20px_rgba(255,153,51,0.3)] hover:shadow-[0_0_30px_rgba(255,153,51,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-cinematic mt-2"
                        >
                            {loading ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                            ) : (
                                <>
                                    <span className="text-xl">🛡️</span>
                                    ENLIST NOW
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent"></div>
                        <span className="text-gray-500 text-xs tracking-widest uppercase font-body">or enlist with</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent"></div>
                    </div>

                    {/* Google Sign Up - rendered by Google SDK */}
                    <div ref={googleBtnRef} className="w-full flex justify-center"></div>
                    {!googleReady && (
                        <p className="text-gray-600 text-xs text-center mt-2 font-body">
                            Google Sign-Up is currently unavailable
                        </p>
                    )}

                    {/* Footer */}
                    <p className="mt-6 text-center text-gray-500 text-sm font-body">
                        Already a Mavala?{' '}
                        <Link
                            to="/login"
                            className="text-saffron font-bold hover:text-orange-400 transition-colors underline underline-offset-4"
                        >
                            Enter Stronghold
                        </Link>
                    </p>
                </div>

                {/* Decorative */}
                <div className="absolute -bottom-8 -right-8 text-saffron/20 text-6xl pointer-events-none select-none">
                    ✦
                </div>
            </div>
        </div>
    );
};

export default Register;
