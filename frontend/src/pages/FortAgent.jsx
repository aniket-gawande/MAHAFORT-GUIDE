import React, { useState, useRef, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import BahirjiChatbot from '../components/BahirjiChatbot';
import {
    FaSearch, FaRobot, FaSpinner, FaCheckCircle, FaExclamationTriangle,
    FaTimesCircle, FaMapMarkerAlt, FaStar, FaHistory, FaDownload,
    FaMountain, FaInfoCircle, FaCopy, FaTerminal, FaWifi
} from 'react-icons/fa';
import { GiCastle, GiCompass } from 'react-icons/gi';
import { MdOutlineTravelExplore } from 'react-icons/md';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// ─── Status icon helper ──────────────────────────────────────────
const StatusIcon = ({ status }) => {
    switch (status) {
        case 'in-progress':
            return <FaSpinner className="animate-spin text-saffron" />;
        case 'complete':
            return <FaCheckCircle className="text-emerald-400" />;
        case 'error':
            return <FaTimesCircle className="text-red-400" />;
        case 'warning':
            return <FaExclamationTriangle className="text-amber-400" />;
        case 'skipped':
            return <FaInfoCircle className="text-gray-500" />;
        case 'start':
        case 'done':
            return <GiCastle className="text-saffron" />;
        default:
            return <FaInfoCircle className="text-gray-500" />;
    }
};

// ─── Step name mapping ───────────────────────────────────────────
const STEP_NAMES = {
    0: 'Initializing Agent',
    1: 'Wikipedia Search',
    2: 'Historical Data',
    3: 'Location (OpenStreetMap)',
    4: 'Wikidata Metadata',
    5: 'Reviews & Ratings',
    6: 'Compiling Report',
    7: 'Complete'
};

// ─── Suggestion chips ────────────────────────────────────────────
const SUGGESTIONS = [
    'Sinhagad', 'Raigad', 'Pratapgad', 'Torna', 'Rajgad',
    'Lohagad', 'Shivneri', 'Murud Janjira', 'Sindhudurg', 'Panhala',
    'Vishalgad', 'Tung', 'Harishchandragad', 'Kalsubai', 'Daulatabad',
    'Harihar', 'Purandar', 'Rajmachi', 'Salher', 'Vasota'
];

const FortAgent = () => {
    const [fortName, setFortName] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [logs, setLogs] = useState([]);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [currentStep, setCurrentStep] = useState(-1);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [showJson, setShowJson] = useState(false);
    const [copied, setCopied] = useState(false);

    const logEndRef = useRef(null);
    const timerRef = useRef(null);
    const eventSourceRef = useRef(null);

    // Auto-scroll logs
    useEffect(() => {
        if (logEndRef.current) {
            logEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [logs]);

    // Timer
    useEffect(() => {
        if (isSearching) {
            timerRef.current = setInterval(() => {
                setElapsedTime(prev => prev + 0.1);
            }, 100);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current);
    }, [isSearching]);

    // Cleanup EventSource on unmount
    useEffect(() => {
        return () => {
            if (eventSourceRef.current) {
                eventSourceRef.current.close();
            }
        };
    }, []);

    const startSearch = useCallback(() => {
        if (!fortName.trim() || isSearching) return;

        // Reset state
        setLogs([]);
        setResult(null);
        setError(null);
        setCurrentStep(0);
        setElapsedTime(0);
        setIsSearching(true);
        setShowJson(false);

        // Close any existing connection
        if (eventSourceRef.current) {
            eventSourceRef.current.close();
        }

        // Connect to SSE endpoint
        const url = `${API_URL}/agent/search?fort=${encodeURIComponent(fortName.trim())}`;
        const eventSource = new EventSource(url);
        eventSourceRef.current = eventSource;

        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                if (data.type === 'progress') {
                    setLogs(prev => [...prev, data]);
                    if (data.step !== undefined) {
                        setCurrentStep(data.step);
                    }
                } else if (data.type === 'result') {
                    setResult(data);
                } else if (data.type === 'done') {
                    setIsSearching(false);
                    setCurrentStep(7);
                    eventSource.close();
                } else if (data.type === 'error') {
                    setError(data.message);
                    setIsSearching(false);
                    eventSource.close();
                }
            } catch (err) {
                console.error('SSE parse error:', err);
            }
        };

        eventSource.onerror = () => {
            setIsSearching(false);
            if (!result) {
                setError('Connection to agent lost. Make sure the backend server is running.');
            }
            eventSource.close();
        };
    }, [fortName, isSearching, result]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') startSearch();
    };

    const copyJson = () => {
        if (result?.data) {
            navigator.clipboard.writeText(JSON.stringify(result.data, null, 2));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const downloadJson = () => {
        if (result?.data) {
            const blob = new Blob([JSON.stringify(result.data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fortName.toLowerCase().replace(/\s+/g, '_')}_fort_data.json`;
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    // Calculate progress percentage
    const progressPercent = Math.min(100, Math.round((currentStep / 7) * 100));

    return (
        <div className="min-h-screen bg-royal-black text-gray-300 font-body">
            <Navbar />
            <BahirjiChatbot />

            {/* ─── Hero Section ─── */}
            <div className="relative pt-24 pb-12 px-4 bg-gradient-to-b from-black via-royal-black to-royal-black">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,153,0,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,153,0,0.05) 0%, transparent 50%)'
                    }}></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaRobot className="text-saffron text-3xl animate-pulse" />
                        <span className="text-saffron/80 font-bold tracking-[0.3em] text-xs uppercase border-b border-saffron/40 pb-1">
                            AI-Powered Research Agent
                        </span>
                        <FaRobot className="text-saffron text-3xl animate-pulse" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-cinematic font-black text-white drop-shadow-2xl mb-4 tracking-wide">
                        FORT DATA AGENT
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-saffron to-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Our agentic AI collects real-time fort data from <span className="text-saffron">Wikipedia</span>,{' '}
                        <span className="text-emerald-400">OpenStreetMap</span>,{' '}
                        <span className="text-blue-400">Wikidata</span>, and{' '}
                        <span className="text-amber-400">Google Maps</span> — all for free!
                    </p>

                    {/* ─── Search Bar ─── */}
                    <div className="max-w-xl mx-auto">
                        <div className="relative flex items-center bg-royal-gray/80 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-saffron/5 focus-within:border-saffron/50 transition-all">
                            <GiCastle className="text-saffron/60 text-xl ml-4" />
                            <input
                                type="text"
                                value={fortName}
                                onChange={(e) => setFortName(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Enter fort name (e.g., Sinhagad, Raigad, Torna...)"
                                className="flex-1 bg-transparent text-white placeholder-gray-500 px-4 py-4 outline-none text-lg"
                                disabled={isSearching}
                            />
                            <button
                                onClick={startSearch}
                                disabled={isSearching || !fortName.trim()}
                                className={`px-6 py-4 font-bold text-sm uppercase tracking-wider transition-all ${isSearching
                                    ? 'bg-saffron/30 text-saffron/50 cursor-wait'
                                    : 'bg-saffron text-black hover:bg-saffron/90 cursor-pointer'
                                    }`}
                            >
                                {isSearching ? (
                                    <FaSpinner className="animate-spin text-lg" />
                                ) : (
                                    <FaSearch className="text-lg" />
                                )}
                            </button>
                        </div>

                        {/* ─── Suggestion Chips ─── */}
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                            {SUGGESTIONS.slice(0, 10).map((name) => (
                                <button
                                    key={name}
                                    onClick={() => { setFortName(name); }}
                                    disabled={isSearching}
                                    className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-white/5 text-gray-400 hover:border-saffron/50 hover:text-saffron hover:bg-saffron/10 transition-all disabled:opacity-50"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Agent Terminal + Results ─── */}
            <div className="max-w-5xl mx-auto px-4 pb-20">

                {/* ─── Progress Bar ─── */}
                {(isSearching || result) && (
                    <div className="mb-6">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                            <span className="flex items-center gap-2">
                                <FaWifi className={`${isSearching ? 'text-emerald-400 animate-pulse' : 'text-gray-600'}`} />
                                {isSearching ? 'Agent working...' : 'Agent complete'}
                            </span>
                            <span className="font-mono">{elapsedTime.toFixed(1)}s</span>
                        </div>
                        <div className="h-2 bg-royal-gray rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ${result ? 'bg-emerald-500' : 'bg-gradient-to-r from-saffron via-amber-500 to-saffron animate-pulse'
                                    }`}
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                        </div>

                        {/* Step indicators */}
                        <div className="flex justify-between mt-3 px-1">
                            {Object.entries(STEP_NAMES).filter(([k]) => k > 0 && k < 7).map(([step, name]) => (
                                <div key={step} className="flex flex-col items-center gap-1">
                                    <div className={`w-3 h-3 rounded-full border-2 transition-all ${parseInt(step) < currentStep
                                        ? 'bg-emerald-500 border-emerald-500'
                                        : parseInt(step) === currentStep
                                            ? 'bg-saffron border-saffron animate-pulse'
                                            : 'bg-transparent border-gray-700'
                                        }`}></div>
                                    <span className={`text-[10px] hidden md:block ${parseInt(step) <= currentStep ? 'text-gray-400' : 'text-gray-700'
                                        }`}>{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ─── Agent Terminal ─── */}
                {(logs.length > 0 || isSearching) && (
                    <div className="mb-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                        {/* Terminal header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/90 border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-xs text-gray-500 font-mono flex items-center justify-center gap-2">
                                    <FaTerminal className="text-saffron/60" />
                                    fort-data-agent — {fortName}
                                </span>
                            </div>
                            <div className="text-xs font-mono text-gray-600">
                                {elapsedTime.toFixed(1)}s
                            </div>
                        </div>

                        {/* Terminal body */}
                        <div className="bg-gray-950/95 p-4 max-h-80 overflow-y-auto font-mono text-sm custom-scrollbar">
                            {logs.map((log, i) => (
                                <div
                                    key={i}
                                    className={`flex items-start gap-2 py-1 animate-fadeIn ${log.status === 'complete' ? 'text-emerald-400' :
                                        log.status === 'error' ? 'text-red-400' :
                                            log.status === 'warning' ? 'text-amber-400' :
                                                log.status === 'in-progress' ? 'text-saffron' :
                                                    log.status === 'done' ? 'text-emerald-300' :
                                                        'text-gray-500'
                                        }`}
                                >
                                    <StatusIcon status={log.status} />
                                    <span className="flex-1">{log.message}</span>
                                    <span className="text-gray-700 text-xs shrink-0">
                                        {(log.timestamp / 1000).toFixed(1)}s
                                    </span>
                                </div>
                            ))}

                            {isSearching && (
                                <div className="flex items-center gap-2 py-1 text-saffron">
                                    <FaSpinner className="animate-spin" />
                                    <span className="animate-pulse">Agent working...</span>
                                    <span className="inline-block w-2 h-4 bg-saffron/60 animate-blink ml-1"></span>
                                </div>
                            )}
                            <div ref={logEndRef} />
                        </div>
                    </div>
                )}

                {/* ─── Error Message ─── */}
                {error && (
                    <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-start gap-3">
                        <FaTimesCircle className="text-xl mt-0.5 shrink-0" />
                        <div>
                            <p className="font-bold">Agent Error</p>
                            <p className="text-sm text-red-400/80 mt-1">{error}</p>
                        </div>
                    </div>
                )}

                {/* ─── Results ─── */}
                {result?.data && (
                    <div className="space-y-6 animate-fadeIn">
                        {/* Result Header */}
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-cinematic font-bold text-white flex items-center gap-3">
                                <GiCastle className="text-saffron" />
                                {result.data.name}
                            </h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={copyJson}
                                    className="px-3 py-2 text-xs rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:border-saffron/50 hover:text-saffron transition-all flex items-center gap-2"
                                >
                                    <FaCopy /> {copied ? 'Copied!' : 'Copy JSON'}
                                </button>
                                <button
                                    onClick={downloadJson}
                                    className="px-3 py-2 text-xs rounded-lg border border-saffron/30 bg-saffron/10 text-saffron hover:bg-saffron/20 transition-all flex items-center gap-2"
                                >
                                    <FaDownload /> Download JSON
                                </button>
                            </div>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <StatCard
                                icon={<FaMapMarkerAlt className="text-emerald-400" />}
                                label="District"
                                value={result.data.location?.district || 'N/A'}
                            />
                            <StatCard
                                icon={<GiCompass className="text-blue-400" />}
                                label="Coordinates"
                                value={result.data.location?.coordinates?.lat
                                    ? `${result.data.location.coordinates.lat.toFixed(3)}°N`
                                    : 'N/A'}
                            />
                            <StatCard
                                icon={<FaStar className="text-amber-400" />}
                                label="Rating"
                                value={`${result.data.googleMaps?.rating || '—'} / 5`}
                            />
                            <StatCard
                                icon={<FaHistory className="text-purple-400" />}
                                label="Built"
                                value={result.data.history?.builtYear || 'Unknown'}
                            />
                        </div>

                        {/* Description */}
                        <div className="p-5 rounded-xl bg-royal-gray/50 border border-white/5">
                            <h3 className="text-sm uppercase tracking-wider text-saffron/80 font-bold mb-3 flex items-center gap-2">
                                <MdOutlineTravelExplore /> Description
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {result.data.description}
                            </p>
                        </div>

                        {/* History */}
                        {result.data.history?.brief && result.data.history.brief !== result.data.description && (
                            <div className="p-5 rounded-xl bg-royal-gray/50 border border-white/5">
                                <h3 className="text-sm uppercase tracking-wider text-saffron/80 font-bold mb-3 flex items-center gap-2">
                                    <FaHistory /> Historical Data
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-line">
                                    {result.data.history.brief.substring(0, 1000)}
                                    {result.data.history.brief.length > 1000 && '...'}
                                </p>
                            </div>
                        )}

                        {/* Trek Info */}
                        {result.data.trek?.routes?.length > 0 && (
                            <div className="p-5 rounded-xl bg-royal-gray/50 border border-white/5">
                                <h3 className="text-sm uppercase tracking-wider text-saffron/80 font-bold mb-3 flex items-center gap-2">
                                    <FaMountain /> Trek Information
                                </h3>
                                <div className="grid gap-3">
                                    {result.data.trek.routes.map((route, i) => (
                                        <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5">
                                            <p className="text-white font-bold">{route.name}</p>
                                            <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-500">
                                                <span>Distance: {route.distance}</span>
                                                <span>Duration: {route.duration}</span>
                                                <span>Difficulty: <span className="text-amber-400">{route.difficulty}</span></span>
                                                {route.elevation && <span>Elevation: {route.elevation}</span>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {result.data.trek.bestTime?.length > 0 && (
                                    <p className="text-xs text-gray-500 mt-3">
                                        Best time: <span className="text-emerald-400">{result.data.trek.bestTime.join(', ')}</span>
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Reviews Summary */}
                        {result.data.reviewsSummary && (
                            <div className="p-5 rounded-xl bg-royal-gray/50 border border-white/5">
                                <h3 className="text-sm uppercase tracking-wider text-saffron/80 font-bold mb-3 flex items-center gap-2">
                                    <FaStar /> Reviews & Tips
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs text-emerald-400 font-bold mb-2">Top Positives</p>
                                        <ul className="space-y-1">
                                            {result.data.reviewsSummary.topPositives?.map((p, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <FaCheckCircle className="text-emerald-500 text-xs mt-1 shrink-0" /> {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs text-amber-400 font-bold mb-2">Travel Tips</p>
                                        <ul className="space-y-1">
                                            {result.data.reviewsSummary.tips?.map((t, i) => (
                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                    <FaInfoCircle className="text-blue-400 text-xs mt-1 shrink-0" /> {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {result.data.reviewsSummary.bestQuote && (
                                    <p className="mt-4 text-sm italic text-gray-500 border-l-2 border-saffron/30 pl-4">
                                        {result.data.reviewsSummary.bestQuote}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Sources */}
                        {result.data._agentMetadata && (
                            <div className="p-5 rounded-xl bg-royal-gray/30 border border-white/5">
                                <h3 className="text-sm uppercase tracking-wider text-gray-600 font-bold mb-3 flex items-center gap-2">
                                    <FaInfoCircle /> Agent Metadata
                                </h3>
                                <div className="grid md:grid-cols-3 gap-4 text-xs">
                                    <div>
                                        <p className="text-gray-600 mb-1">Time Taken</p>
                                        <p className="text-gray-400 font-mono">{result.data._agentMetadata.timeTaken}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Data Completeness</p>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-1.5 bg-gray-800 rounded-full">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-saffron to-emerald-500"
                                                    style={{ width: `${result.data._agentMetadata.completeness}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-gray-400 font-mono">{result.data._agentMetadata.completeness}%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-1">Sources Used</p>
                                        <p className="text-gray-400">{result.data._agentMetadata.sources?.length || 0} sources</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="text-gray-600 text-xs mb-2">Data Sources:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {result.data._agentMetadata.sources?.map((src, i) => (
                                            <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-gray-500 border border-white/5">
                                                {src.length > 60 ? src.substring(0, 60) + '...' : src}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Toggle Raw JSON */}
                        <div>
                            <button
                                onClick={() => setShowJson(!showJson)}
                                className="text-xs text-gray-600 hover:text-saffron transition-colors flex items-center gap-2"
                            >
                                <FaTerminal /> {showJson ? 'Hide' : 'Show'} Raw JSON
                            </button>
                            {showJson && (
                                <pre className="mt-3 p-4 rounded-xl bg-gray-950 border border-white/5 text-xs text-gray-500 overflow-x-auto max-h-96 font-mono custom-scrollbar">
                                    {JSON.stringify(result.data, null, 2)}
                                </pre>
                            )}
                        </div>
                    </div>
                )}

                {/* ─── Empty State ─── */}
                {!isSearching && !result && !error && (
                    <div className="text-center py-20">
                        <FaRobot className="text-6xl text-gray-800 mx-auto mb-6" />
                        <h3 className="text-xl text-gray-600 font-cinematic mb-2">
                            Enter a fort name to start the agent
                        </h3>
                        <p className="text-gray-700 text-sm max-w-md mx-auto">
                            The agent will search Wikipedia, OpenStreetMap, Wikidata, and Google Maps
                            to compile comprehensive fort data in ~15 seconds.
                        </p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                            {[
                                { icon: '📚', label: 'Wikipedia', desc: 'History & description' },
                                { icon: '🗺️', label: 'OpenStreetMap', desc: 'Coordinates & location' },
                                { icon: '🗃️', label: 'Wikidata', desc: 'Structured metadata' },
                                { icon: '⭐', label: 'Google Maps', desc: 'Reviews & ratings' }
                            ].map((source, i) => (
                                <div key={i} className="p-4 rounded-xl bg-royal-gray/30 border border-white/5">
                                    <div className="text-2xl mb-2">{source.icon}</div>
                                    <p className="text-gray-400 text-sm font-bold">{source.label}</p>
                                    <p className="text-gray-700 text-xs mt-1">{source.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Custom CSS for animations */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(4px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255,153,0,0.2);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255,153,0,0.4);
                }
            `}</style>
        </div>
    );
};

// ─── Reusable Stat Card ──────────────────────────────────────────
const StatCard = ({ icon, label, value }) => (
    <div className="p-4 rounded-xl bg-royal-gray/50 border border-white/5 text-center">
        <div className="text-xl mb-2 flex justify-center">{icon}</div>
        <p className="text-xs text-gray-600 uppercase tracking-wider">{label}</p>
        <p className="text-white font-bold mt-1">{value}</p>
    </div>
);

export default FortAgent;
