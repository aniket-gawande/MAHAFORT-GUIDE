import React, { useState, useEffect } from 'react';
import { FaCloudSun, FaExclamationTriangle, FaThermometerHalf, FaWind, FaUmbrella, FaCalendarDay, FaCircle } from 'react-icons/fa';

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || "6f118635f0d22cb21012c3e065aaeb01";

const TripWeatherForecast = ({ fortName, district, date }) => {
    const [hourlyForecasts, setHourlyForecasts] = useState([]);
    const [dailySummary, setDailySummary] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForecast = async () => {
            setLoading(true);
            setError(null);
            try {
                const cleanDistrict = (district || '').split('(')[0].trim() || 'Pune';
                const safeFortName = encodeURIComponent((fortName || '').replace(' Fort', '').trim());
                const safeDistrictName = encodeURIComponent(cleanDistrict);

                let weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${safeFortName},IN&units=metric&appid=${OPENWEATHER_API_KEY}`);
                
                if (!weatherRes.ok) {
                   weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${safeDistrictName},IN&units=metric&appid=${OPENWEATHER_API_KEY}`);
                }
                
                if (!weatherRes.ok) {
                    weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Pune,IN&units=metric&appid=${OPENWEATHER_API_KEY}`);
                }

                if (!weatherRes.ok) {
                    throw new Error("Could not fetch forecast data");
                }

                const data = await weatherRes.json();
                
                // Filter forecast list for the targeted date
                // data.list contains 3-hour forecasts
                const targetDayForecasts = data.list.filter(item => {
                    const itemDate = new Date(item.dt * 1000).toISOString().split('T')[0];
                    return itemDate === date;
                });

                if (targetDayForecasts.length > 0) {
                    // Extract daytime hours (roughly 6 AM to 6 PM) for display
                    const daytimeBlocks = targetDayForecasts.filter(f => {
                        const hr = new Date(f.dt * 1000).getHours();
                        return hr >= 5 && hr <= 18;
                    });
                    
                    // If none match daytime constraints, just show what we have
                    const displayBlocks = daytimeBlocks.length >= 3 ? daytimeBlocks : targetDayForecasts.slice(0, 4);
                    
                    setHourlyForecasts(displayBlocks.map(f => ({
                        dt: f.dt * 1000,
                        timeStr: new Date(f.dt * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: true }),
                        temp: Math.round(f.main.temp),
                        iconCode: f.weather[0].icon,
                        rainVolume: f.rain?.['3h'] || 0,
                        pop: Math.round(f.pop * 100),
                        speed: Math.round(f.wind.speed * 3.6),
                        humidity: f.main.humidity,
                        visibility: (f.visibility / 1000).toFixed(1)
                    })));

                    // Pick the middle-of-the-day forecast for the main summary calculations
                    const mainForecast = daytimeBlocks.find(f => {
                        const hr = new Date(f.dt * 1000).getHours();
                        return hr >= 9 && hr <= 15;
                    }) || targetDayForecasts[Math.floor(targetDayForecasts.length / 2)];
                    
                    // Highest pop and rain
                    const maxPop = Math.max(...targetDayForecasts.map(f => f.pop));
                    const maxTemp = Math.max(...targetDayForecasts.map(f => f.main.temp));
                    
                    setDailySummary({
                        temp: Math.round(mainForecast.main.temp),
                        maxTemp: maxTemp,
                        wind: mainForecast.wind.speed * 3.6,
                        condition: mainForecast.weather[0].main,
                        description: mainForecast.weather[0].description,
                        iconCode: mainForecast.weather[0].icon,
                        humidity: mainForecast.main.humidity,
                        visibility: mainForecast.visibility,
                        pop: maxPop // Peak probability of precipitation for the day
                    });
                } else {
                    // The date is too far ahead (beyond 5 days) or in the past
                    setError("Forecast unavailable. OpenWeather provides predictions for up to 5 days.");
                }
                
            } catch (err) {
                console.error("Forecast Error:", err);
                setError("Unable to retrieve weather at this time.");
            } finally {
                setLoading(false);
            }
        };

        if (fortName && district && date) {
            fetchForecast();
        }
    }, [fortName, district, date]);

    const calculateSafetyScore = (f, hourly) => {
        if (!f) return { score: 0, title: "", text: "", styles: "", barColor: "" };
        let score = 100;
        let reasons = [];
        
        const condition = f.condition.toLowerCase();
        
        // 1. Rain Analysis
        if (f.pop > 0.3) {
            score -= Math.min((f.pop * 100) * 0.5, 40); // lose up to 40 pts for 80% rain
            reasons.push(`${Math.round(f.pop*100)}% chance of rain`);
        }
        
        // Check hourly for afternoon heavy rain
        const afternoonRain = hourly && hourly.some(h => {
             const hour = new Date(h.dt).getHours();
             return hour >= 12 && hour <= 17 && (h.rainVolume > 2 || h.pop > 50);
        });
        if (afternoonRain) {
             score -= 15;
             reasons.push("afternoon rain expected");
        }
        
        // 2. Wind Analysis
        if (f.wind > 20) {
            score -= (f.wind - 20);
            reasons.push("high winds");
        }
        
        // 3. Heat Analysis
        if (f.maxTemp > 34) {
            score -= (f.maxTemp - 34) * 3; // Lose 3 pts per degree over 34
            reasons.push("heat levels rising");
        } else if (f.maxTemp > 30) {
            score -= (f.maxTemp - 30) * 1;
        }

        // Clamp score
        score = Math.max(10, Math.round(score)); // Minimum score is 10

        let verdict;
        if (score >= 80) {
            verdict = {
                score,
                safe: true,
                title: "Safe to trek today",
                text: `${f.description}, ${f.temp}°C, ideal conditions.`,
                styles: "bg-[#eefadf] border-[#b0e27f] text-[#2c531d]",
                barColor: "text-green-500",
                dotColor: "text-green-600"
            };
        } else if (score >= 50) {
            verdict = {
                score,
                safe: true,
                title: "Proceed with caution",
                text: `Moderate risks: ${reasons.join(', ')}.`,
                styles: "bg-[#fff7e5] border-[#fcd58b] text-[#8e5229]",
                barColor: "text-yellow-500",
                dotColor: "text-orange-500"
            };
        } else {
             verdict = {
                score,
                safe: false,
                title: "Not Advised",
                text: `Dangerous conditions: ${reasons.join(', ')}.`,
                styles: "bg-[#fde7e7] border-[#faa7a7] text-[#922b2b]",
                barColor: "text-red-500",
                dotColor: "text-red-600"
            };
        }
        return verdict;
    };

    if (loading) {
        return (
            <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 h-64 animate-pulse flex items-center justify-center min-w-[320px]">
                <div className="text-gray-400 font-cinematic animate-pulse text-xs tracking-widest text-center">Calibrating weather sensors...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 w-full text-center">
                 <FaCalendarDay className="text-gray-600 text-3xl mb-2 mx-auto" />
                 <p className="text-gray-400 text-xs">{error}</p>
            </div>
        );
    }

    if (!dailySummary) return null;

    const verdict = calculateSafetyScore(dailySummary, hourlyForecasts);

    return (
        <div className="w-full font-body text-left">
            {/* HERO Safety Card */}
            <div className={`w-full rounded-2xl border px-5 py-4 flex items-center justify-between shadow-sm mb-4 transition-all duration-300 ${verdict.styles}`}>
                <div className="flex items-start gap-3">
                    <FaCircle className={`mt-1.5 text-[10px] ${verdict.dotColor}`} />
                    <div>
                        <h3 className="font-bold text-[17px] leading-tight mb-0.5">{verdict.title}</h3>
                        <p className="text-[12px] opacity-80 capitalize">{verdict.text}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[34px] font-black leading-none tracking-tight">
                        {verdict.score}<span className="text-[14px] font-bold opacity-60">/100</span>
                    </div>
                </div>
            </div>

            {/* HOURLY WRAPPER */}
            <div className="bg-[#1E1E1E] border border-white/5 rounded-2xl p-5 shadow-lg">
                <div className="flex justify-between items-center mb-5">
                    <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Hourly Weather Forecast</h4>
                    <span className="text-gray-600 text-[9px]">OpenWeatherMap</span>
                </div>

                {/* Grid for hourly columns */}
                <div className="flex gap-2 sm:gap-3 mb-5 overflow-x-auto pb-2 custom-scrollbar">
                    {hourlyForecasts.map((hour, idx) => (
                        <div key={idx} className="bg-[#2A2A2A] rounded-xl p-3 flex-1 flex flex-col items-center min-w-[70px] border border-white/5 relative overflow-hidden group hover:bg-[#333] transition-colors">
                            <span className="text-gray-400 text-[10px] font-bold mb-2 break-keep whitespace-nowrap">{hour.timeStr}</span>
                            <img 
                                src={`http://openweathermap.org/img/wn/${hour.iconCode}.png`} 
                                alt="weather icon"
                                className="w-8 h-8 mb-1 drop-shadow-md group-hover:scale-110 transition-transform"
                            />
                            <span className="text-white font-bold text-sm mb-0.5">{hour.temp}°C</span>
                            <span className="text-gray-500 text-[9px] mb-3">{hour.rainVolume > 0 ? `${hour.rainVolume} mm` : `${hour.pop}%`}</span>
                            
                            {/* Rain Bar Container at bottom */}
                            <div className="absolute bottom-2 left-3 right-3 h-[3px] bg-white/10 rounded-full overflow-hidden">
                                {hour.pop > 0 && (
                                     <div 
                                         className={`h-full ${hour.pop > 50 ? 'bg-blue-500' : 'bg-blue-400'}`} 
                                         style={{ width: `${hour.pop}%` }}
                                     ></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#262626] rounded-xl p-3 flex flex-col border border-white/5">
                        <span className="text-gray-500 text-[10px] uppercase font-bold mb-1">Wind Speed</span>
                        <span className="text-white text-lg font-black">{Math.round(dailySummary.wind)} <span className="text-[10px] font-normal text-gray-400 normal-case">km/h</span></span>
                    </div>
                    <div className="bg-[#262626] rounded-xl p-3 flex flex-col border border-white/5">
                        <span className="text-gray-500 text-[10px] uppercase font-bold mb-1">Humidity</span>
                        <span className="text-white text-lg font-black">{dailySummary.humidity} <span className="text-[10px] font-normal text-gray-400 normal-case">%</span></span>
                    </div>
                </div>

                {/* Afternoon Rain Banner (If Applicable) */}
                {hourlyForecasts.some(h => (new Date(h.dt).getHours() >= 12) && h.pop > 40) && (
                     <div className="w-full bg-[#3d2719] border border-[#a26033] rounded-lg p-3 text-[#fdbd93] text-xs font-bold flex items-center gap-2">
                         <FaUmbrella /> Rain expected in the afternoon. Start your descent by 11:30 AM to stay safe.
                     </div>
                )}
            </div>
        </div>
    );
};

export default TripWeatherForecast;