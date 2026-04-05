import React, { useState, useEffect } from 'react';
import { FaWind, FaUmbrella, FaCloudSun, FaExclamationTriangle, FaThermometerHalf } from 'react-icons/fa';

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || "YOUR_API_KEY_HERE";

const LiveWeather = ({ fortName, district }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {
                // To avoid 404s for specific Fort names, we will use OpenWeather's direct query 
                // We safely clean the names (e.g. remove "(Aurangabad)" from Chhatrapati Sambhajinagar)
                const cleanDistrict = (district || '').split('(')[0].trim() || 'Pune';
                const safeFortName = encodeURIComponent((fortName || '').replace(' Fort', '').trim());
                const safeDistrictName = encodeURIComponent(cleanDistrict);

                // First try fort name + district
                let weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${safeFortName},IN&units=metric&appid=${OPENWEATHER_API_KEY}`);
                
                // If the fort name is not found as a location in OpenWeather, fallback to the district
                if (!weatherRes.ok) {
                   weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${safeDistrictName},IN&units=metric&appid=${OPENWEATHER_API_KEY}`);
                }
                
                // If both fail, let's fallback to Pune as a safe center point for Maharashtra Sahyadri forts
                if (!weatherRes.ok) {
                    weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pune,IN&units=metric&appid=${OPENWEATHER_API_KEY}`);
                }

                if (!weatherRes.ok) {
                    throw new Error("Could not fetch weather data from OpenWeather API");
                }

                const weatherData = await weatherRes.json();

                if (weatherData && weatherData.weather) {
                    setWeather({
                        temp: weatherData.main.temp,
                        wind: weatherData.wind.speed * 3.6, // Convert m/s to km/h
                        condition: weatherData.weather[0].main,
                        description: weatherData.weather[0].description,
                        iconCode: weatherData.weather[0].icon,
                        humidity: weatherData.main.humidity
                    });
                } else {
                    throw new Error("Weather data missing");
                }
                
                setError(false);
            } catch (err) {
                console.error("Live Weather Error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (fortName && district) {
            fetchWeather();
        }
    }, [fortName, district]);

    // Function to generate dynamic recommendations
    const getRecommendation = (w) => {
        const condition = w.condition.toLowerCase();
        
        if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('thunderstorm')) {
            return {
                text: "Rainy conditions expected! The fort steps and trails might be dangerously slippery. Keep your trekking gear waterproof, wear shoes with heavy grip, and avoid the edges.",
                type: 'danger'
            };
        }
        if (w.temp > 35) {
            return {
                text: "Extreme Heat Alert: Carry at least 2-3 liters of water per person. Try to ascend early in the morning before noon. Use hats and sunscreen.",
                type: 'warning'
            };
        }
        if (w.temp > 30) {
            return {
                text: "Warm Weather: Good conditions, but carry extra water and stay hydrated. A cap or hat is recommended.",
                type: 'info'
            };
        }
        if (condition.includes('cloud') || condition.includes('mist') || condition.includes('fog')) {
            return {
                text: "Pleasant & Cloudy/Misty: Perfect trekking weather, but visibility might be low at the top. Stay close to marked paths.",
                type: 'success'
            };
        }
        return {
            text: "Clear Skies: Excellent weather for trekking in Maharashtra! Enjoy unobstructed panoramic views from the fort.",
            type: 'success'
        };
    };

    if (loading) {
        return (
            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden animate-pulse">
                <div className="h-6 bg-white/20 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-white/10 rounded w-1/3 mb-4"></div>
                <div className="flex gap-2">
                     <div className="h-12 bg-white/10 rounded w-1/2 mb-2"></div>
                     <div className="h-12 bg-white/10 rounded w-1/2 mb-2"></div>
                </div>
            </div>
        );
    }

    if (error || !weather) {
        return (
            <div className="bg-royal-gray/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 text-center text-red-400 text-sm">
                <FaExclamationTriangle className="mx-auto text-3xl mb-2" />
                Could not load weather data. Please try again later.
                {error && <div className="text-xs text-red-500/70 mt-2">Error during fetch</div>}
            </div>
        );
    }

    const rec = getRecommendation(weather);
    const recColors = {
        danger: 'bg-red-500/10 border-red-500/30 text-red-400',
        warning: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
        info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
        success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
    };

    return (
        <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>
            <h3 className="text-xl font-cinematic font-bold text-white mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2"><FaCloudSun className="text-cyan-400" /> Live Weather</span>
                <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-1 rounded-full ring-1 ring-green-400/20 tracking-wider font-bold animate-pulse">LIVE</span>
            </h3>
            
            <p className="text-[11px] text-gray-400 mb-4 uppercase tracking-wider">{fortName} / {district}</p>

            <div className="flex items-center gap-4 mb-5">
                <img 
                    src={`http://openweathermap.org/img/wn/${weather.iconCode}@2x.png`} 
                    alt={weather.description}
                    className="w-16 h-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                />
                <div>
                    <span className="text-4xl font-black text-white tracking-tighter drop-shadow-md">
                        {Math.round(weather.temp)}°<span className="text-2xl text-cyan-400">C</span>
                    </span>
                    <span className="block text-cyan-400 font-bold text-sm tracking-wide mt-1 capitalize">{weather.description}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm border-t border-white/10 pt-5 mt-2">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center hover:bg-white/[0.06] transition-colors">
                    <span className="block text-gray-400 text-[10px] mb-1 font-bold uppercase tracking-widest"><FaWind className="inline text-gray-300 mr-1"/> Wind</span>
                    <span className="text-white font-bold">{Math.round(weather.wind)} <span className="text-xs font-normal text-gray-400">km/h</span></span>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 text-center hover:bg-white/[0.06] transition-colors">
                    <span className="block text-gray-400 text-[10px] mb-1 font-bold uppercase tracking-widest"><FaThermometerHalf className="inline text-blue-300 mr-1"/> Humidity</span>
                    <span className="text-white font-bold">{weather.humidity}<span className="text-xs font-normal text-gray-400">%</span></span>
                </div>
            </div>
            
            {/* Dynamic Trekking Recommendation */}
            <div className={`mt-4 text-xs p-3 rounded-xl border flex gap-3 items-start leading-relaxed shadow-lg ${recColors[rec.type]}`}>
                <FaExclamationTriangle className="mt-0.5 shrink-0 text-lg" />
                <span className="font-medium">{rec.text}</span>
            </div>
        </div>
    );
};

export default LiveWeather;
