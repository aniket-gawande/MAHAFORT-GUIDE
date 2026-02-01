import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaLock, FaUsers, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { MdDashboard, MdEmergency } from 'react-icons/md';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [forts, setForts] = useState([]);
    const [emergencyLogs, setEmergencyLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('forts'); // 'forts' or 'emergency'

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', { password });
            if (response.data.success) {
                setIsAuthenticated(true);
                fetchForts();
                fetchEmergencyLogs();
            }
        } catch (err) {
            setError('Invalid password. Please try again.');
        }
    };

    const fetchForts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/forts');
            setForts(response.data);
        } catch (error) {
            console.error('Error fetching forts:', error);
        }
    };

    const fetchEmergencyLogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/emergency/logs');
            setEmergencyLogs(response.data.alerts || []);
        } catch (error) {
            console.error('Error fetching emergency logs:', error);
        }
    };

    const updateCrowdStatus = async (fortId, newStatus) => {
        setLoading(true);
        try {
            await axios.put(`http://localhost:5000/api/admin/forts/${fortId}/crowd-status`, {
                crowdStatus: newStatus
            });

            // Refresh forts list
            fetchForts();
            alert(`Crowd status updated to ${newStatus} successfully!`);
        } catch (error) {
            console.error('Error updating crowd status:', error);
            alert('Failed to update crowd status');
        }
        setLoading(false);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-full">
                                <FaLock className="text-4xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h1>
                        <p className="text-gray-600">Municipal Authority Dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition"
                                placeholder="Enter admin password"
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                                <p className="text-red-700 text-sm font-medium">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Login
                        </button>

                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                            <p className="text-sm text-gray-700">
                                <strong>Demo Password:</strong> <code className="bg-gray-200 px-2 py-1 rounded">mahafort2026</code>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-8 shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                                <MdDashboard className="text-5xl" />
                                Admin Dashboard
                            </h1>
                            <p className="text-orange-100">Municipal Authority Control Panel</p>
                        </div>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white shadow-md border-b-2 border-orange-300">
                <div className="container mx-auto px-4">
                    <div className="flex gap-4">
                        <button
                            onClick={() => setActiveTab('forts')}
                            className={`px-6 py-4 font-semibold transition-all ${activeTab === 'forts'
                                    ? 'text-orange-600 border-b-4 border-orange-600'
                                    : 'text-gray-600 hover:text-orange-600'
                                }`}
                        >
                            <FaUsers className="inline mr-2" />
                            Crowd Management
                        </button>
                        <button
                            onClick={() => setActiveTab('emergency')}
                            className={`px-6 py-4 font-semibold transition-all ${activeTab === 'emergency'
                                    ? 'text-orange-600 border-b-4 border-orange-600'
                                    : 'text-gray-600 hover:text-orange-600'
                                }`}
                        >
                            <MdEmergency className="inline mr-2" />
                            Emergency Logs
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-8">
                {activeTab === 'forts' ? (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Fort Crowd Status Management</h2>

                        <div className="grid gap-6">
                            {forts.map((fort) => (
                                <div key={fort._id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                                    <div className="flex justify-between items-start flex-wrap gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{fort.name}</h3>
                                            <p className="text-gray-600">
                                                <span className="mr-2">📍</span>
                                                {fort.location.district}, Maharashtra
                                            </p>

                                            {/* Current Status */}
                                            <div className="mt-4">
                                                <p className="text-sm text-gray-600 mb-2">Current Crowd Status:</p>
                                                <span
                                                    className={`inline-block px-4 py-2 rounded-full font-bold ${fort.crowdStatus === 'Low'
                                                            ? 'bg-green-100 text-green-800'
                                                            : fort.crowdStatus === 'Medium'
                                                                ? 'bg-yellow-100 text-yellow-800'
                                                                : 'bg-red-100 text-red-800'
                                                        }`}
                                                >
                                                    {fort.crowdStatus || 'Low'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Update Buttons */}
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm font-semibold text-gray-700 mb-1">Update Status:</p>
                                            <button
                                                onClick={() => updateCrowdStatus(fort._id, 'Low')}
                                                disabled={loading || fort.crowdStatus === 'Low'}
                                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                            >
                                                <FaCheckCircle />
                                                Low
                                            </button>
                                            <button
                                                onClick={() => updateCrowdStatus(fort._id, 'Medium')}
                                                disabled={loading || fort.crowdStatus === 'Medium'}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                            >
                                                <FaUsers />
                                                Medium
                                            </button>
                                            <button
                                                onClick={() => updateCrowdStatus(fort._id, 'High')}
                                                disabled={loading || fort.crowdStatus === 'High'}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                            >
                                                <FaExclamationTriangle />
                                                High
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Emergency Alert Logs</h2>

                        {emergencyLogs.length === 0 ? (
                            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                                <MdEmergency className="text-6xl text-gray-300 mx-auto mb-4" />
                                <p className="text-xl text-gray-600">No emergency alerts logged yet</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {emergencyLogs.map((log) => (
                                    <div key={log.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                                        <div className="flex justify-between items-start flex-wrap gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <MdEmergency className="text-2xl text-red-600" />
                                                    <h3 className="text-xl font-bold text-gray-800">{log.fortName}</h3>
                                                </div>
                                                <p className="text-gray-600 mb-2">
                                                    <strong>Contact Type:</strong> {log.contactType}
                                                </p>
                                                <p className="text-gray-600 mb-2">
                                                    <strong>Location:</strong> {log.userLocation}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    <strong>Timestamp:</strong> {new Date(log.timestamp).toLocaleString()}
                                                </p>
                                            </div>
                                            <span className={`px-4 py-2 rounded-full font-bold ${log.status === 'Active' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {log.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
