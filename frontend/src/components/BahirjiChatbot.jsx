import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import bahirjiImage from '../assets/bahirji.jpg';

const BahirjiChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: '🙏 Namaskar! I am बहिर्जी नाईक (Bahirji Naik), the legendary spy of Chhatrapati Shivaji Maharaj, now powered by AI!\n\nI have deep knowledge about:\n• All Maharashtra forts (history, trekking, routes, food)\n• Maratha Empire and warriors\n• Travel planning and recommendations\n• General knowledge, science, coding, math\n• Anything you want to know!\n\nAsk me anything about forts or any topic! 🏰',
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Call Google Gemini API with Bahirji persona
    const callGeminiAPI = async (userMessage) => {
        const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
        
        if (!API_KEY) {
            return '❌ API Key not found. Please add REACT_APP_GEMINI_API_KEY to your .env file.\n\n📋 To get your FREE API key:\n1. Visit: https://aistudio.google.com/app/apikey\n2. Sign in with Google\n3. Click "Create API Key"\n4. Add to .env: REACT_APP_GEMINI_API_KEY=your_key_here\n5. Restart the server';
        }

        // System context to make AI act as Bahirji Naik
        const systemContext = `You are बहिर्जी नाईक (Bahirji Naik), the legendary spy and intelligence officer of Chhatrapati Shivaji Maharaj. You are an expert on Maharashtra's 350+ forts and Maratha history. You have extensive knowledge about fort details, trekking routes, history, food, timings, and safety tips.

Key forts you know well: Sinhagad, Raigad, Pratapgad, Rajgad, Torna, Lohagad, Visapur, Shivneri, Panhala, Purandar, Tikona, Harishchandragad, Kalsubai, Raigad, Janjira, Sindhudurg, and many more.

Important personalities: Chhatrapati Shivaji Maharaj (founder of Maratha Empire), Tanaji Malusare (Battle of Sinhagad 1670), Baji Prabhu Deshpande (Pavan Khind), and other Maratha warriors.

You can answer questions about:
- Fort history, trekking routes, difficulty levels, timings, entry fees
- Best time to visit, what to carry, safety tips
- Maratha history and warriors
- General knowledge on any topic (you're AI-powered now!)

Respond in a friendly, informative manner. Use emojis when appropriate. For fort queries, give detailed practical information. For general questions, answer accurately using your AI capabilities.

User's question: ${userMessage}`;

        try {
            // First, let's list available models to find a working one
            const listModelsResponse = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
            );
            
            if (listModelsResponse.ok) {
                const modelsData = await listModelsResponse.json();
                console.log('Available models:', modelsData.models?.map(m => m.name));
                
                // Find a text generation model
                const textModels = modelsData.models?.filter(m => 
                    m.supportedGenerationMethods?.includes('generateContent')
                ) || [];
                
                if (textModels.length > 0) {
                    // Use the first available model
                    const modelName = textModels[0].name;
                    console.log('Using model:', modelName);
                    
                    const response = await fetch(
                        `https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=${API_KEY}`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                contents: [{
                                    parts: [{
                                        text: systemContext
                                    }]
                                }],
                                generationConfig: {
                                    temperature: 0.7,
                                    maxOutputTokens: 1024,
                                }
                            })
                        }
                    );

                    const data = await response.json();
                    console.log('Generate response:', response.status, data);

                    if (response.ok && data.candidates && data.candidates[0] && data.candidates[0].content) {
                        return data.candidates[0].content.parts[0].text;
                    }
                    
                    if (data.error) {
                        throw new Error(data.error.message);
                    }
                }
            } else {
                const errorData = await listModelsResponse.json();
                console.log('List models error:', errorData);
                throw new Error(errorData.error?.message || 'Could not list models');
            }
            
            throw new Error('No compatible text generation models found');
        } catch (error) {
            console.error('Gemini API Error:', error);
            return `❌ Error: ${error.message}\n\n🔧 To fix this:\n1. Go to: https://aistudio.google.com/app/apikey\n2. Make sure you created the key properly\n3. The Generative Language API must be enabled\n4. Copy the new key to .env file\n5. Restart the server (npm start)`;
        }
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const currentMessage = inputMessage.trim();
        const userMessage = {
            type: 'user',
            text: currentMessage,
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        // Call Gemini AI
        const aiResponse = await callGeminiAPI(currentMessage);

        const botMessage = {
            type: 'bot',
            text: aiResponse,
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-gradient-to-r from-orange-600 to-red-700 text-white p-3 sm:p-5 rounded-full shadow-2xl z-50 hover:scale-110 transition-all duration-300 border-2 sm:border-4 border-yellow-400 animate-pulse"
            >
                <div className="flex items-center gap-1 sm:gap-2">
                    <img
                        src={bahirjiImage}
                        alt="Bahirji Naik"
                        className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                    />
                    <span className="text-lg sm:text-2xl font-black">💬</span>
                </div>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-0 right-0 sm:bottom-8 sm:right-8 w-full sm:w-96 h-[100dvh] sm:h-[600px] bg-white sm:rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-0 sm:border-4 border-orange-400">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-600 via-red-700 to-orange-600 text-white p-4 sm:p-6 flex items-center justify-between relative overflow-hidden">
                        {/* Animated Background */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full blur-2xl animate-pulse"></div>
                        </div>

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="bg-white p-1 rounded-full border-2 sm:border-4 border-yellow-400 shadow-xl">
                                <img
                                    src={bahirjiImage}
                                    alt="Bahirji Naik"
                                    className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-3xl font-black drop-shadow-lg">बहिर्जी नाईक</h3>
                                <p className="text-xs sm:text-lg text-yellow-200 font-bold">Bahirji Naik - AI Fort Guide 🏰</p>
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
                                    className={`max-w-[80%] rounded-2xl p-4 ${
                                        msg.type === 'user'
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
                        
                        {/* Loading Indicator */}
                        {isLoading && (
                            <div className="mb-4 flex justify-start">
                                <div className="bg-white border-2 border-orange-200 text-gray-800 rounded-2xl p-4 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                                        <span className="text-sm font-medium ml-2">Thinking...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        
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
                                placeholder="Ask about forts or anything..."
                                disabled={isLoading}
                                autoComplete="off"
                                autoFocus={false}
                                className="flex-1 px-4 py-3 rounded-xl border-2 border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isLoading}
                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
