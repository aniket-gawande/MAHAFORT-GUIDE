import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import bahirjiImage from '../assets/bahirji.jpg';

const BahirjiChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: '🙏 Namaskar! I am बहिर्जी नाईक (Bahirji Naik), your fort guide. Ask me anything about Maharashtra forts!',
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Fort knowledge base
    const fortKnowledge = {
        sinhagad: {
            keywords: ['sinhagad', 'sinhgad', 'kondana'],
            info: {
                history: 'Sinhagad Fort was the site of the famous Battle of Sinhagad in 1670, where Tanaji Malusare sacrificed his life to capture it from the Mughals.',
                location: 'Sinhagad is located 30 km southwest of Pune at an altitude of 1312 meters.',
                trek: 'The trek is moderate difficulty, taking 1.5-2 hours via the Donje route (4 km). Best time is October to March.',
                food: 'Famous for Zunka Bhakri, Pithla Bhakri, and Kanda Bhaji. Many food stalls are available at the top.',
                timings: 'Open 24 hours. Best to visit early morning (6 AM) or evening for sunset views.',
                entry: 'Entry is free. Parking costs around ₹50-100.'
            }
        },
        raigad: {
            keywords: ['raigad', 'rajgad capital', 'coronation'],
            info: {
                history: 'Capital of Maratha Empire. Shivaji Maharaj was crowned here in 1674. Contains the Samadhi of Shivaji Maharaj.',
                location: 'Located in Raigad district, 170 km from Mumbai. Altitude: 820 meters.',
                trek: 'Ropeway available (₹300-400). Can also trek via 1737 steps. Takes 2-3 hours.',
                attractions: 'Raj Bhavan, Maha Darwaja, Takmak Tok, Holi Chi Samadhi, and various temples.',
                timings: 'Open 8 AM to 6 PM. Ropeway operates 9 AM to 5:30 PM.',
                entry: 'Entry fee ₹50. Ropeway charges extra.'
            }
        },
        pratapgad: {
            keywords: ['pratapgad', 'afzal khan', 'battle'],
            info: {
                history: 'Site of the famous Battle of Pratapgad (1659) where Shivaji Maharaj defeated Afzal Khan.',
                location: 'Located 24 km from Mahabaleshwar in Satara district. Altitude: 1080 meters.',
                trek: 'Easy trek, suitable for families. Well-maintained steps. Takes 30-45 minutes.',
                attractions: 'Bhavani Temple, Afzal Khan Tomb, Shivaji Maharaj statue (17 feet tall).',
                timings: 'Open 6 AM to 6 PM.',
                entry: 'Free entry.'
            }
        },
        general: {
            keywords: ['best time', 'season', 'monsoon', 'winter', 'summer'],
            info: {
                bestTime: 'October to March is the best time for fort trekking. Pleasant weather, clear views.',
                monsoon: 'June to September - Beautiful but slippery. Only for experienced trekkers.',
                summer: 'March to May - Hot but manageable. Start early morning.',
                winter: 'November to February - Perfect weather, clear skies, best for photography.'
            }
        },
        safety: {
            keywords: ['safety', 'tips', 'precautions', 'what to carry'],
            info: {
                essentials: 'Carry: Water (2L minimum), snacks, first-aid kit, torch, power bank, raincoat.',
                footwear: 'Wear proper trekking shoes with good grip. Avoid slippers.',
                safety: 'Trek in groups, inform someone about your plans, avoid trekking in heavy rain.',
                emergency: 'Keep emergency numbers handy. Most forts have mobile network coverage.'
            }
        }
    };

    const getBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase();

        // Greetings
        if (message.match(/^(hi|hello|hey|namaskar|namaste)/)) {
            return '🙏 Namaskar! How can I help you explore Maharashtra forts today?';
        }

        // Check for specific fort queries
        for (const [fort, data] of Object.entries(fortKnowledge)) {
            if (data.keywords.some(keyword => message.includes(keyword))) {
                // Check what aspect they're asking about
                if (message.includes('history') || message.includes('story') || message.includes('battle')) {
                    return `📜 ${data.info.history || data.info.bestTime}`;
                }
                if (message.includes('location') || message.includes('where') || message.includes('distance')) {
                    return `📍 ${data.info.location || 'Location information not available.'}`;
                }
                if (message.includes('trek') || message.includes('climb') || message.includes('route')) {
                    return `🥾 ${data.info.trek || 'Trek information not available.'}`;
                }
                if (message.includes('food') || message.includes('eat') || message.includes('restaurant')) {
                    return `🍽️ ${data.info.food || 'Food stalls available at most forts.'}`;
                }
                if (message.includes('time') || message.includes('timing') || message.includes('hours')) {
                    return `🕐 ${data.info.timings || 'Most forts are open 24 hours.'}`;
                }
                if (message.includes('entry') || message.includes('fee') || message.includes('ticket') || message.includes('cost')) {
                    return `💰 ${data.info.entry || 'Entry fee varies by fort.'}`;
                }
                if (message.includes('attraction') || message.includes('see') || message.includes('visit')) {
                    return `🏛️ ${data.info.attractions || 'Many historical structures and temples to explore.'}`;
                }

                // General fort info
                return `🏰 ${Object.values(data.info)[0]}`;
            }
        }

        // General queries
        if (message.includes('how many') && message.includes('fort')) {
            return '🏰 Maharashtra has over 350 forts! Our app covers 42+ major forts including Raigad, Sinhagad, Pratapgad, Rajgad, and many more.';
        }

        if (message.includes('best fort') || message.includes('recommend')) {
            return '⭐ Top recommendations:\n• Beginners: Lohagad, Tikona, Korigad\n• Moderate: Sinhagad, Rajgad, Pratapgad\n• Advanced: Harishchandragad, Kalsubai, Lingana\n• Historical: Raigad (Capital), Shivneri (Birthplace)';
        }

        if (message.includes('difficulty') || message.includes('easy') || message.includes('hard')) {
            return '📊 Fort difficulties:\n✅ Easy: Lohagad, Pratapgad, Tikona\n⚠️ Moderate: Sinhagad, Rajgad, Ratangad\n🔥 Hard: Harishchandragad, Kalsubai, Torna';
        }

        if (message.includes('pune') || message.includes('near pune')) {
            return '📍 Forts near Pune: Sinhagad (30km), Rajgad (60km), Torna (50km), Lohagad (65km), Tikona (60km), Visapur (65km)';
        }

        if (message.includes('mumbai') || message.includes('near mumbai')) {
            return '📍 Forts near Mumbai: Karnala (50km), Matheran area forts (80km), Raigad (170km)';
        }

        // Default response
        return `🤔 I can help you with:\n• Fort history and stories\n• Trek routes and difficulty\n• Timings and entry fees\n• Food and facilities\n• Best time to visit\n• Safety tips\n\nTry asking: "Tell me about Sinhagad history" or "Best forts near Pune"`;
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        // Add user message
        const userMsg = {
            type: 'user',
            text: inputMessage,
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);

        // Get bot response
        setTimeout(() => {
            const botResponse = getBotResponse(inputMessage);
            const botMsg = {
                type: 'bot',
                text: botResponse,
                time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMsg]);
        }, 500);

        setInputMessage('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 text-white p-2 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-bounce border-4 border-yellow-400"
                >
                    <img
                        src={bahirjiImage}
                        alt="Bahirji Naik"
                        className="w-20 h-20 rounded-full object-cover border-4 border-white"
                    />
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-orange-800 text-sm font-black px-3 py-2 rounded-full animate-pulse border-2 border-orange-600 shadow-lg">
                        बहिर्जी
                    </div>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-8 right-8 w-96 h-[600px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-4 border-orange-400">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-600 via-red-700 to-orange-600 text-white p-6 flex items-center justify-between relative overflow-hidden">
                        {/* Animated Background */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full blur-2xl animate-pulse"></div>
                        </div>

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="bg-white p-1 rounded-full border-4 border-yellow-400 shadow-xl">
                                <img
                                    src={bahirjiImage}
                                    alt="Bahirji Naik"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black drop-shadow-lg">बहिर्जी नाईक</h3>
                                <p className="text-lg text-yellow-200 font-bold">Bahirji Naik - Your Fort Guide 🏰</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 relative z-10"
                        >
                            <FaTimes className="text-xl" />
                        </button>
                    </div>
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-orange-50 to-red-50">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl p-4 ${msg.type === 'user'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                                        : 'bg-white border-2 border-orange-200 text-gray-800'
                                        } shadow-lg`}
                                >
                                    <p className="text-sm whitespace-pre-line font-medium">{msg.text}</p>
                                    <p className={`text-xs mt-2 ${msg.type === 'user' ? 'text-orange-100' : 'text-gray-500'}`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t-2 border-orange-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about forts..."
                                className="flex-1 px-4 py-3 rounded-xl border-2 border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                <FaPaperPlane className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BahirjiChatbot;
