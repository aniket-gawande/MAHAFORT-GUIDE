import React from 'react';
import { FaUsers, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

const CrowdStatusBadge = ({ status }) => {
    if (!status) return null;

    const getStatusConfig = () => {
        switch (status) {
            case 'Low':
                return {
                    color: 'bg-green-100 text-green-800 border-green-300',
                    icon: <FaCheckCircle className="text-green-600" />,
                    text: 'Low Crowd',
                    description: 'Great time to visit! Minimal crowding expected.',
                    gradient: 'from-green-400 to-green-600'
                };
            case 'Medium':
                return {
                    color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
                    icon: <FaUsers className="text-yellow-600" />,
                    text: 'Moderate Crowd',
                    description: 'Moderate visitor traffic. Plan accordingly.',
                    gradient: 'from-yellow-400 to-yellow-600'
                };
            case 'High':
                return {
                    color: 'bg-red-100 text-red-800 border-red-300',
                    icon: <FaExclamationTriangle className="text-red-600" />,
                    text: 'High Crowd',
                    description: 'Heavy crowding expected. Consider visiting later.',
                    gradient: 'from-red-400 to-red-600'
                };
            default:
                return null;
        }
    };

    const config = getStatusConfig();
    if (!config) return null;

    return (
        <div className="group relative inline-block">
            {/* Badge */}
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${config.color} font-semibold text-sm transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                {config.icon}
                <span>{config.text}</span>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className={`bg-gradient-to-r ${config.gradient} text-white p-4 rounded-lg shadow-xl`}>
                    <div className="flex items-start gap-2">
                        <div className="text-2xl">{config.icon}</div>
                        <div>
                            <p className="font-bold mb-1">{config.text}</p>
                            <p className="text-sm text-white opacity-90">{config.description}</p>
                        </div>
                    </div>
                    {/* Arrow */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-${status === 'Low' ? 'green' : status === 'Medium' ? 'yellow' : 'red'}-600`}></div>
                </div>
            </div>
        </div>
    );
};

export default CrowdStatusBadge;
