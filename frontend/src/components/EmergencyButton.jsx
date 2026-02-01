import React, { useState } from 'react';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdEmergency } from 'react-icons/md';
import axios from 'axios';

const EmergencyButton = ({ fort }) => {
    const [showModal, setShowModal] = useState(false);
    const [alertSent, setAlertSent] = useState(false);

    const handleEmergencyClick = async (contactType) => {
        try {
            // Log emergency alert to backend
            await axios.post('http://localhost:5000/api/emergency/alert', {
                fortId: fort._id,
                fortName: fort.name,
                contactType,
                timestamp: new Date()
            });

            setAlertSent(true);
            setTimeout(() => setAlertSent(false), 3000);
        } catch (error) {
            console.error('Error logging emergency alert:', error);
        }
    };

    if (!fort.emergencyContacts || fort.emergencyContacts.length === 0) {
        return null;
    }

    return (
        <>
            {/* Floating Emergency Button */}
            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 z-50 animate-pulse transition-all duration-300 hover:scale-110"
                aria-label="Emergency Help"
            >
                <MdEmergency className="text-2xl" />
                <span className="font-bold text-lg">Emergency Help</span>
            </button>

            {/* Emergency Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-2xl flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <MdEmergency className="text-4xl" />
                                <div>
                                    <h2 className="text-2xl font-bold">Emergency Contacts</h2>
                                    <p className="text-red-100 text-sm">{fort.name}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-white hover:bg-red-800 p-2 rounded-full transition"
                            >
                                <FaTimes className="text-2xl" />
                            </button>
                        </div>

                        {/* Alert Success Message */}
                        {alertSent && (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 m-4 rounded">
                                <p className="font-semibold">✅ Emergency alert logged successfully!</p>
                                <p className="text-sm">Help is on the way. Stay safe!</p>
                            </div>
                        )}

                        {/* Emergency Contacts List */}
                        <div className="p-6 space-y-4">
                            {fort.emergencyContacts.map((contact, index) => (
                                <div
                                    key={index}
                                    className="border-2 border-gray-200 rounded-xl p-5 hover:border-red-400 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${contact.type === 'Police' ? 'bg-blue-100 text-blue-800' :
                                                    contact.type === 'Medical' ? 'bg-green-100 text-green-800' :
                                                        contact.type === 'Rescue' ? 'bg-red-100 text-red-800' :
                                                            'bg-orange-100 text-orange-800'
                                                }`}>
                                                {contact.type}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-800">{contact.name}</h3>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-gray-700">
                                        <div className="flex items-center gap-2">
                                            <FaPhoneAlt className="text-red-600" />
                                            <a
                                                href={`tel:${contact.phone}`}
                                                onClick={() => handleEmergencyClick(contact.type)}
                                                className="text-lg font-semibold text-red-600 hover:text-red-800 hover:underline"
                                            >
                                                {contact.phone}
                                            </a>
                                        </div>
                                        <p className="text-sm">
                                            <span className="font-semibold">Available:</span> {contact.available}
                                        </p>
                                        <p className="text-sm">
                                            <span className="font-semibold">Location:</span> {contact.location}
                                        </p>
                                    </div>

                                    <a
                                        href={`tel:${contact.phone}`}
                                        onClick={() => handleEmergencyClick(contact.type)}
                                        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300"
                                    >
                                        <FaPhoneAlt />
                                        Call Now
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 p-4 rounded-b-2xl border-t">
                            <p className="text-sm text-gray-600 text-center">
                                ⚠️ For life-threatening emergencies, call <strong className="text-red-600">108</strong> (Ambulance) or <strong className="text-blue-600">100</strong> (Police)
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EmergencyButton;
