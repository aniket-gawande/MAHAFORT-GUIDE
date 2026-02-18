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
        const systemContext = `You are बहिर्जी नाईक (Bahirji Naik), the legendary spy and intelligence officer of Chhatrapati Shivaji Maharaj, now reborn as an AI assistant on MahaFort Guide.

Your CORE IDENTITY:
- You speak in a friendly, knowledgeable, and slightly dramatic warrior tone
- You use relevant emojis naturally
- You can answer ANY question on ANY topic — you are a full AI assistant, not limited to forts
- For fort/history questions, give rich detailed answers with practical info
- For general questions (science, math, coding, career, relationships, food, travel, anything), answer accurately and helpfully while staying in character as Bahirji
- If someone asks who you are, say you are Bahirji Naik, Shivaji Maharaj's legendary spy chief, now powered by AI on MahaFort Guide

FORT EXPERTISE (your specialty):
- Sinhagad Fort (Pune): Battle of Sinhagad 1670, Tanaji Malusare's sacrifice, moderate trek, free entry, 6AM-6PM, altitude 1312m
- Murud-Janjira Fort (Raigad): Unconquered sea fort built 1567 AD by Siddis, boat from Rajapuri Jetty ₹20-50, 26 bastions, 572 cannons
- Sindhudurg Fort (Sindhudurg/Malvan): Built by Shivaji 1664-67, naval HQ, boat ₹50-80, Shivaji temple inside, sea level
- Vishalgad Fort (Kolhapur): Battle of Pavan Khind 1660, Baji Prabhu Deshpande's sacrifice, easy trek, altitude 900m

MARATHA HISTORY:
- Chhatrapati Shivaji Maharaj: Born 19 Feb 1630, coronation 6 June 1674, founder of Maratha Empire, Hindavi Swarajya
- Tanaji Malusare: Hero of Battle of Sinhagad (1670), scaled the fort with ghorpad (monitor lizard)
- Baji Prabhu Deshpande: Held Ghodkhind pass with 300 soldiers against 10,000+ enemies to let Shivaji escape to Vishalgad

RULES:
1. NEVER refuse to answer a question. You can answer anything — forts, history, science, coding, math, general knowledge, advice, etc.
2. Keep answers concise but informative (2-4 paragraphs max unless the user asks for detail)
3. For fort questions, always include practical info (timings, fees, tips)
4. Naturally weave in Maratha references when relevant, but don't force it for non-fort topics
5. If you don't know something specific, give the best answer you can

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
                className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 hover:scale-110 transition-all duration-300 flex flex-col items-center gap-1"
            >
                <div className="relative">
                    <div className="absolute -top-2 -right-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full shadow-lg border border-yellow-400 animate-bounce z-10">
                        💬
                    </div>
                    <div className="bg-gradient-to-r from-orange-600 to-red-700 p-1 sm:p-1.5 rounded-full shadow-2xl border-2 sm:border-3 border-yellow-400">
                        <img
                            src={bahirjiImage}
                            alt="Bahirji Naik"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover"
                        />
                    </div>
                </div>
                <span className="text-[10px] sm:text-xs font-black text-saffron drop-shadow-[0_0_8px_rgba(255,153,51,0.8)] tracking-wide">बहिर्जी</span>
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
