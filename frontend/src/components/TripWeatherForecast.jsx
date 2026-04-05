import React, { useState, useEffect } from 'react';
import { FaCloudSun, FaExclamationTriangle, FaThermometerHalf, FaWind, FaUmbrella, FaCalendarDay } from 'react-icons/fa';

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || "6f118635f0d22cb21012c3e065aaeb01";

const TripWeatherForecast = ({ fortName, district, date }) => {
    const [forecast, setForecast] = useState(null);
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
                // data.list contains 3-hour forecasts for the next 5 days
                const targetDayForecasts = data.list.filter(item => {
                    const itemDate = new Date(item.dt * 1000).toISOString().split('T')[0];
                    return itemDate === date;
                });

                if (targetDayForecasts.length > 0) {
                    // Pick the middle-of-the-day forecast, or the first one available
                    const daytimeForecast = targetDayForecasts.find(f => {
                        const hr = new Date(f.dt * 1000).getHours();
                        return hr >= 9 && hr <= 15;
                    }) || targetDayForecasts[0];
                    
                    setForecast({
                        temp: daytimeForecast.main.temp,
                        wind: daytimeForecast.wind.speed * 3.6,
                        condition: daytimeForecast.weather[0].main,
                        description: daytimeForecast.weather[0].description,
                        iconCode: daytimeForecast.weather[0].icon,
                        humidity: daytimeForecast.main.humidity,
                        pop: daytimeForecast.pop // Probability of precipitation 0 to 1
                    });
                } else {
                    // The date is too far ahead (beyond 5 days) or in the past
                    setError("Forecast unavailable. OpenWeather only provides predictions for the next 5 days.");
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

    const getSafetyVerdict = (f) => {
        const condition = f.condition.toLowerCase();
        
        if (condition.includes('rain') || condition.includes('drizzle') || condition.includes('thunderstorm') || f.pop > 0.4) {
            return {
                safe: false,
                title: "Not Advised / Proceed with Caution",
                text: "High chance of rain. Trails and stairs may become extremely slippery and flash waterfall crossings are possible.",
                styles: "bg-red-500/10 border-red-500/30 text-red-400"
            };
        }
        if (f.temp > 36) {
            return {
                safe: false,
                title: "High Heat Alert",
                text: "Temperatures are dangerously high for trekking. Start very early morning and carry excessive hydration.",
                styles: "bg-orange-500/10 border-orange-500/30 text-orange-400"
            };
        }
        if (condition.includes('mist') || condition.includes('fog')) {
            return {
                safe: true,
                title: "Safe, but Low Visibility",
                text: "Conditions are safe but expect dense fog. Stay on marked trails and avoid cliff edges.",
                styles: "bg-blue-500/10 border-blue-500/30 text-blue-400"
            };
        }
        return {
            safe: true,
            title: "Safe to Trek",
            text: "Clear and safe conditions expected! Great weather for panoramic views.",
            styles: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
        };
    };

    if (loading) {
        return (
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 h-40 animate-pulse flex items-center justify-center">
                <div className="text-saffron font-cinematic animate-pulse">Loading Forecast...</div>
            </div>
        );
    }

    return (
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            <h3 className="text-sm font-bold text-saffron tracking-wider uppercase mb-4 flex items-center gap-2">
                <FaCloudSun /> Expedition Forecast
            </h3>
            
            {error ? (
                <div className="flex flex-col items-center justify-center p-4 text-center border-t border-white/10 mt-2">
                    <FaCalendarDay className="text-gray-500 text-3xl mb-2" />
                    <p className="text-gray-400 text-xs">{error}</p>
                </div>
            ) : forecast ? (
                <div>
                     <div className="flex items-center gap-4 mb-4">
                        <img 
                            src={`http://openweathermap.org/img/wn/${forecast.iconCode}@2x.png`} 
                            alt={forecast.description}
                            className="w-12 h-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        />
                        <div>
                            <span className="text-2xl font-black text-white tracking-tighter drop-shadow-md">
                                {Math.round(forecast.temp)}°<span className="text-lg text-cyan-400">C</span>
                            </span>
                            <span className="block text-cyan-400 font-bold text-xs tracking-wide capitalize">{forecast.description}</span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-black/30 rounded-lg p-2 text-center border border-white/5">
                            <span className="block text-gray-500 text-[9px] uppercase tracking-widest mb-0.5"><FaUmbrella className="inline text-blue-400 mr-1"/> Rain</span>
                            <span className="text-white text-xs font-bold">{Math.round(forecast.pop * 100)}%</span>
                        </div>
                        <div className="bg-black/30 rounded-lg p-2 text-center border border-white/5">
                            <span className="block text-gray-500 text-[9px] uppercase tracking-widest mb-0.5"><FaWind className="inline text-gray-400 mr-1"/> Wind</span>
                            <span className="text-white text-xs font-bold">{Math.round(forecast.wind)} km/h</span>
                        </div>
                    </div>

                    <div className={`p-3 rounded-xl border flex flex-col gap-1 shadow-lg ${getSafetyVerdict(forecast).styles}`}>
                        <div className="flex items-center gap-2 font-bold text-sm">
                            {!getSafetyVerdict(forecast).safe && <FaExclamationTriangle />}
                            {getSafetyVerdict(forecast).title}
                        </div>
                        <p className="text-xs opacity-90 leading-relaxed">
                            {getSafetyVerdict(forecast).text}
                        </p>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default TripWeatherForecast;