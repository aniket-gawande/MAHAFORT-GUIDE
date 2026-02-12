import React, { useEffect, useState } from 'react';
import { FaClock, FaMapMarkedAlt, FaUtensils, FaCamera, FaExclamationTriangle, FaMoneyBillWave, FaHiking, FaDownload, FaRoute } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { jsPDF } from 'jspdf';
import SinhagadMap from '../components/Sinhagadmap';
import Navbar from '../components/Navbar';
import BahirjiChatbot from '../components/BahirjiChatbot';
import marathaFlag from '../assets/svg/maratha-flag.svg';
import heroBg from '../assets/hero-fort.jpg';
import sinhagadData from '../data/sinhagad.json';

const SinhagadItinerary = () => {
    const [fortData, setFortData] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [dataError, setDataError] = useState(null);

    // Load fort data and scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Load Sinhagad fort data from imported JSON
        try {
            console.log('Fort data loaded successfully:', sinhagadData);
            setFortData(sinhagadData);
            setIsLoadingData(false);
        } catch (error) {
            console.error('Error loading fort data:', error);
            setDataError(error.message);
            setIsLoadingData(false);
        }
    }, []);

    const handleDownloadPDF = () => {
        console.log('Download button clicked');
        console.log('Loading state:', isLoadingData);
        console.log('Data error:', dataError);
        console.log('Fort data available:', !!fortData);
        
        if (isLoadingData) {
            alert('Fort data is still loading. Please wait a moment...');
            return;
        }
        
        if (dataError || !fortData) {
            alert('Unable to generate PDF. Fort data could not be loaded. Please refresh the page and try again.');
            return;
        }

        try {

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        let yPos = 20;
        const margin = 20;
        const contentWidth = pageWidth - (margin * 2);

        // Helper function to check if new page is needed
        const checkNewPage = (requiredSpace = 20) => {
            if (yPos + requiredSpace > pageHeight - 20) {
                doc.addPage();
                yPos = 20;
                return true;
            }
            return false;
        };

        // Helper function to add wrapped text
        const addText = (text, fontSize = 11, style = 'normal', color = [0, 0, 0]) => {
            doc.setFontSize(fontSize);
            doc.setFont('helvetica', style);
            doc.setTextColor(color[0], color[1], color[2]);
            const lines = doc.splitTextToSize(text, contentWidth);
            checkNewPage(lines.length * fontSize * 0.4);
            doc.text(lines, margin, yPos);
            yPos += lines.length * fontSize * 0.4 + 3;
        };

        // Header with saffron color
        doc.setFillColor(255, 153, 51); // Saffron
        doc.rect(0, 0, pageWidth, 35, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('SINHAGAD FORT', pageWidth / 2, 15, { align: 'center' });
        doc.setFontSize(13);
        doc.text('Complete Trekking Itinerary', pageWidth / 2, 26, { align: 'center' });
        
        yPos = 45;

        // Fort Overview
        doc.setTextColor(0, 0, 0);
        addText('ðŸ“ ' + fortData.name, 16, 'bold');
        addText(fortData.location.district + ', Maharashtra • ' + fortData.location.nearestCity);
        addText(fortData.description, 11);
        yPos += 5;

        // Quick Facts Box
        checkNewPage(40);
        doc.setDrawColor(255, 153, 51);
        doc.setLineWidth(0.5);
        doc.rect(margin, yPos, contentWidth, 35);
        doc.setFillColor(255, 153, 51, 0.1);
        doc.rect(margin, yPos, contentWidth, 35, 'F');
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Quick Facts', margin + 5, yPos + 8);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text('• Distance: 4 km trek from Donje Village', margin + 5, yPos + 16);
        doc.text('• Duration: 1.5-2 hours (one way)', margin + 5, yPos + 22);
        doc.text('• Altitude: 1,312 meters (600m elevation gain)', margin + 5, yPos + 28);
        yPos += 40;

        // Trek Routes
        addText('ðŸš¶ TREKKING ROUTES', 14, 'bold', [255, 153, 51]);
        
        if (fortData.trek && fortData.trek.routes) {
            fortData.trek.routes.forEach((route, index) => {
                checkNewPage(35);
                addText(`${index + 1}. ${route.name}`, 12, 'bold');
                addText(`Distance: ${route.distance} | Duration: ${route.duration}`);
                addText(`Difficulty: ${route.difficulty} | Elevation: ${route.elevation}`);
                addText(route.description, 10);
                
                if (route.facilities && route.facilities.length > 0) {
                    addText('Facilities: ' + route.facilities.join(', '), 9, 'italic', [80, 80, 80]);
                }
                yPos += 3;
            });
        }
        yPos += 5;

        // Landmarks
        checkNewPage(20);
        addText('ðŸ° MUST-SEE LANDMARKS', 14, 'bold', [255, 153, 51]);
        
        if (fortData.landmarks) {
            const mustSeeLandmarks = fortData.landmarks.filter(l => l.mustSee);
            mustSeeLandmarks.forEach((landmark, index) => {
                checkNewPage(25);
                addText(`${index + 1}. ${landmark.name} (${landmark.type})`, 11, 'bold');
                addText(landmark.description, 10);
                if (landmark.historicalSignificance) {
                    addText('Historical Significance: ' + landmark.historicalSignificance, 9, 'italic', [60, 60, 60]);
                }
                addText(`Time: ${landmark.timeToExplore}`, 9, 'normal', [100, 100, 100]);
                yPos += 2;
            });
        }
        yPos += 5;

        // Food Section
        checkNewPage(20);
        addText('ðŸ´ MUST-TRY FOOD', 14, 'bold', [255, 153, 51]);
        
        if (fortData.food && fortData.food.onFort) {
            const mustTryFood = fortData.food.onFort.filter(f => f.mustTry);
            mustTryFood.forEach((item, index) => {
                checkNewPage(20);
                addText(`${index + 1}. ${item.name} (${item.price})`, 11, 'bold');
                addText(item.description, 10);
                addText(`Available at: ${item.vendor}`, 9, 'italic', [80, 80, 80]);
                yPos += 2;
            });
        }
        yPos += 5;

        // Best Time to Visit
        checkNewPage(30);
        addText('ðŸ“… BEST TIME TO VISIT', 14, 'bold', [255, 153, 51]);
        if (fortData.trek && fortData.trek.bestTime) {
            addText('Recommended: ' + fortData.trek.bestTime.join(', '), 11, 'bold', [0, 128, 0]);
        }
        if (fortData.trek && fortData.trek.avoidTime) {
            addText('Avoid: ' + fortData.trek.avoidTime.join(', '), 11, 'normal', [128, 0, 0]);
        }
        yPos += 5;

        // Safety Tips
        if (fortData.safety && fortData.safety.alerts) {
            checkNewPage(30);
            addText('⚠️ SAFETY TIPS', 14, 'bold', [255, 153, 51]);
            fortData.safety.alerts.forEach((alert, index) => {
                checkNewPage(15);
                addText(`${index + 1}. ${alert.message}`, 10);
            });
            yPos += 5;
        }

        // Budget Estimate
        checkNewPage(35);
        addText('ðŸ’° BUDGET ESTIMATE (Per Person)', 14, 'bold', [255, 153, 51]);
        addText('• Transport from Pune: ₹200-300');
        addText('• Food on fort: ₹150-250');
        addText('• Miscellaneous: ₹100-150');
        addText('• Total: ₹450-700', 11, 'bold');
        yPos += 5;

        // Footer on all pages
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);
            doc.setFontSize(9);
            doc.setTextColor(128, 128, 128);
            doc.text(
                `Generated by MahaFort Guide | Page ${i} of ${totalPages} | Visit: mahafort-guide.com`,
                pageWidth / 2,
                pageHeight - 10,
                { align: 'center' }
            );
        }

        // Save the PDF
        doc.save('Sinhagad_Fort_Complete_Itinerary.pdf');
        console.log('PDF generated successfully!');
        
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('An error occurred while generating the PDF. Please check the console for details.');
        }
    };

    return (
        <div className="min-h-screen bg-royal-black text-white font-body">
            <Navbar />
            <BahirjiChatbot />

            {/* === HERO SECTION WITH FORT IMAGE IN DARK SHADOWS === */}
            <div className="relative h-screen w-full overflow-hidden flex items-center">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={heroBg} 
                        alt="Sinhagad Fort" 
                        className="w-full h-full object-cover scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/80 to-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-royal-black/90 via-royal-black/40 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
                    <div className="max-w-4xl space-y-6">
                        {/* Badge */}
                        <div className="flex items-center gap-4 animate-fade-in-up">
                            <img src={marathaFlag} alt="Flag" className="h-10 w-auto drop-shadow-[0_0_10px_rgba(255,153,51,0.8)]" />
                            <span className="text-saffron font-bold tracking-[0.3em] text-sm uppercase border-b border-saffron pb-1">
                                The Lion's Fort
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-cinematic font-black leading-tight text-white drop-shadow-2xl animate-fade-in-up delay-100">
                            SINHAGAD <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-yellow-100">
                                FORT
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-2xl text-saffron font-bold drop-shadow-lg animate-fade-in-up delay-150">
                            Complete Trekking Itinerary
                        </p>
                        <p className="text-lg text-gray-300 max-w-xl leading-relaxed border-l-4 border-saffron pl-6 animate-fade-in-up delay-200">
                            Based on Real Google Maps Reviews & Visitor Experiences
                        </p>

                        {/* Download PDF Button */}
                        <div className="pt-6 animate-fade-in-up delay-300">
                            <button
                                onClick={handleDownloadPDF}
                                disabled={isLoadingData}
                                className={`bg-gradient-to-r from-saffron to-orange-600 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 shadow-2xl flex items-center gap-2 sm:gap-3 print:hidden border-2 border-saffron/50 ${
                                    isLoadingData 
                                        ? 'opacity-60 cursor-not-allowed' 
                                        : 'hover:scale-105 hover:shadow-saffron/40'
                                }`}
                            >
                                {isLoadingData ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                                        Loading Fort Data...
                                    </>
                                ) : (
                                    <>
                                        <FaDownload className="text-lg sm:text-xl" />
                                        <span className="hidden sm:inline">Download Complete Itinerary as PDF</span>
                                        <span className="sm:hidden">Download PDF</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-saffron/50 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-saffron rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* === CONTENT SECTION WITH BACKGROUND === */}
            <div className="relative">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <img src={heroBg} alt="" className="w-full h-full object-cover fixed" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 relative z-10">
                    {/* Quick Info Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16">
                        <div className="bg-gradient-to-br from-saffron/20 to-orange-900/30 backdrop-blur-sm rounded-2xl border border-saffron/30 p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 hover:border-saffron/60">
                            <MdLocationOn className="text-3xl sm:text-4xl md:text-5xl text-saffron mx-auto mb-2 sm:mb-3" />
                            <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1">30 km</div>
                            <div className="text-gray-400 font-medium text-xs sm:text-sm">from Pune</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl border border-green-500/30 p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 hover:border-green-500/60">
                            <FaHiking className="text-3xl sm:text-4xl md:text-5xl text-green-400 mx-auto mb-2 sm:mb-3" />
                            <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1">4 km</div>
                            <div className="text-gray-400 font-medium text-xs sm:text-sm">Trek Distance</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 hover:border-blue-500/60">
                            <FaClock className="text-3xl sm:text-4xl md:text-5xl text-blue-400 mx-auto mb-2 sm:mb-3" />
                            <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1">1.5-2 hrs</div>
                            <div className="text-gray-400 font-medium text-xs sm:text-sm">Trek Duration</div>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 backdrop-blur-sm rounded-2xl border border-yellow-500/30 p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 hover:border-yellow-500/60">
                            <FaMoneyBillWave className="text-3xl sm:text-4xl md:text-5xl text-yellow-400 mx-auto mb-2 sm:mb-3" />
                            <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1">₹600-1000</div>
                            <div className="text-gray-400 font-medium text-xs sm:text-sm">Per Person</div>
                        </div>
                    </div>


                    {/* Trek Routes - Dark Theme */}
                    <div className="bg-royal-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 sm:p-8 mb-12">
                        <h2 className="text-xl sm:text-3xl font-cinematic font-bold text-white mb-6 flex items-center gap-3">
                            <FaMapMarkedAlt className="text-saffron" />
                            Trekking Routes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-green-900/40 to-green-900/20 backdrop-blur-sm p-6 rounded-xl border-l-4 border-green-500 hover:border-green-400 transition-all">
                                <h4 className="font-bold text-green-400 mb-3 text-lg">✅ Donje Route (Recommended)</h4>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <p><span className="text-gray-400">Distance:</span> 4 km</p>
                                    <p><span className="text-gray-400">Duration:</span> 1.5-2 hours</p>
                                    <p><span className="text-gray-400">Difficulty:</span> Easy</p>
                                    <p className="text-gray-400 pt-2">Features:</p>
                                    <ul className="list-disc list-inside ml-2 space-y-1">
                                        <li>400 well-maintained steps</li>
                                        <li>5 rest points with benches</li>
                                        <li>Tea stalls at 3 points</li>
                                        <li>Railings on steep sections</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-900/40 to-orange-900/20 backdrop-blur-sm p-6 rounded-xl border-l-4 border-orange-500 hover:border-orange-400 transition-all">
                                <h4 className="font-bold text-orange-400 mb-3 text-lg">⚠️ Ghorawadi Route</h4>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <p><span className="text-gray-400">Distance:</span> 5 km</p>
                                    <p><span className="text-gray-400">Duration:</span> 3 hours</p>
                                    <p><span className="text-gray-400">Difficulty:</span> Difficult</p>
                                    <p className="text-gray-400 pt-2">Features:</p>
                                    <ul className="list-disc list-inside ml-2 space-y-1">
                                        <li>Steeper, rocky terrain</li>
                                        <li>Less crowded</li>
                                        <li>More scenic views</li>
                                        <li>For experienced trekkers</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-900/40 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border-l-4 border-blue-500 hover:border-blue-400 transition-all">
                                <h4 className="font-bold text-blue-400 mb-3 text-lg">🚗 Motorable Road</h4>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <p><span className="text-gray-400">Distance:</span> Direct access</p>
                                    <p><span className="text-gray-400">Duration:</span> 15 min drive</p>
                                    <p><span className="text-gray-400">Difficulty:</span> Easy</p>
                                    <p className="text-gray-400 pt-2">Features:</p>
                                    <ul className="list-disc list-inside ml-2 space-y-1">
                                        <li>Vehicle access to parking</li>
                                        <li>Shared jeeps (₹20-30)</li>
                                        <li>500m walk from parking</li>
                                        <li>Ideal for elderly/kids</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 bg-gradient-to-r from-saffron/20 to-orange-900/20 border border-saffron/30 p-4 rounded-xl">
                            <p className="text-sm font-semibold text-saffron">
                                <strong>Elevation Gain:</strong> 600 meters (700m to 1,312m altitude)
                            </p>
                        </div>
                    </div>

                    {/* LEAFLET MAP - GET DIRECTIONS SECTION - Dark Theme */}
                    <div className="bg-royal-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 sm:p-8 mb-12 print:hidden">
                        <h2 className="text-xl sm:text-3xl font-cinematic font-bold text-white mb-6 flex items-center gap-3">
                            <FaRoute className="text-saffron" />
                            Get Directions to Sinhagad Fort
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Live map with turn-by-turn directions from your current location. The route takes you via Donje Village - the most popular and safest route.
                        </p>
                        
                        {/* Leaflet Maps Component */}
                        <SinhagadMap />
                    </div>

                    {/* Detailed Timeline - Dark Theme */}
                    <div className="bg-royal-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 sm:p-8 mb-12">
                        <h2 className="text-xl sm:text-3xl font-cinematic font-bold text-white mb-8 flex items-center gap-3">
                            <FaClock className="text-saffron" />
                            One-Day Timeline
                        </h2>

                        {/* Timeline Items - Dark Theme */}
                        <div className="space-y-6">
                            {/* 5:30 AM */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                                    <div className="bg-gradient-to-r from-saffron to-orange-600 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base">
                                        5:30 AM
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-saffron/10 to-orange-900/20 backdrop-blur-sm p-5 rounded-xl border-l-4 border-saffron">
                                    <h3 className="text-xl font-bold text-white mb-2">Departure from Pune</h3>
                                    <p className="text-gray-300 mb-3">Start early to catch sunrise and avoid crowds</p>
                                    <div className="bg-black/30 p-3 rounded-lg border-l-2 border-saffron/50">
                                        <p className="text-sm italic text-gray-400">"Start early to catch the sunrise and avoid crowds. The early morning mist on the Sahyadri hills is breathtaking!" - Google Review</p>
                                    </div>
                                </div>
                            </div>

                            {/* 6:30 AM */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base">
                                        6:30 AM
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-green-900/30 to-green-900/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-green-500">
                                    <h3 className="text-xl font-bold text-white mb-2">Start Trek from Donje Village</h3>
                                    <p className="text-gray-300 mb-3">4 km trek with well-maintained stone steps</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                        <li>400 steps total with 5 rest points</li>
                                        <li>Tea/coffee stalls at rest points</li>
                                        <li>Use railings on steep sections</li>
                                        <li>Duration: 1.5-2 hours</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 8:30 AM */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base">
                                        8:30 AM
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-blue-900/30 to-blue-900/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="text-xl font-bold text-white mb-2">Arrival at Pune Darwaja</h3>
                                    <p className="text-gray-300 mb-3">Fort entrance with panoramic views</p>
                                    <div className="bg-black/30 p-3 rounded-lg border-l-2 border-blue-500/50">
                                        <p className="text-sm italic text-gray-400">"The moment you enter through Pune Darwaja, the panoramic view of Pune city and surrounding forts is mind-blowing!" - Google Review</p>
                                    </div>
                                </div>
                            </div>

                            {/* 9:00 AM */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base">
                                        9:00 AM
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-purple-900/30 to-purple-900/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-purple-500">
                                    <h3 className="text-xl font-bold text-white mb-2">Historical Exploration</h3>
                                    <p className="text-gray-300 mb-3">Visit key landmarks (2.5 hours)</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                        <li>Tanaji Malusare Memorial</li>
                                        <li>Kaundinyeshwar Temple</li>
                                        <li>Rajaram's Tomb</li>
                                        <li>Kalyan Darwaja</li>
                                        <li>Military Stables & Ruins</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 12:00 PM */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base">
                                        12:00 PM
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-red-900/30 to-red-900/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-red-500">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <FaUtensils className="text-red-400" /> Lunch - Authentic Maharashtrian Food
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                                        <div className="bg-black/30 p-3 rounded-lg">
                                            <div className="font-bold text-saffron">Pithla Bhakri</div>
                                            <div className="text-sm text-gray-400">₹80-120 • Must-try!</div>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded-lg">
                                            <div className="font-bold text-saffron">Kanda Bhaji</div>
                                            <div className="text-sm text-gray-400">₹40-60 • With chai</div>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded-lg">
                                            <div className="font-bold text-saffron">Fresh Dahi</div>
                                            <div className="text-sm text-gray-400">₹30-50 • Homemade</div>
                                        </div>
                                        <div className="bg-black/30 p-3 rounded-lg">
                                            <div className="font-bold text-saffron">Cutting Chai</div>
                                            <div className="text-sm text-gray-400">₹10-15 • Perfect!</div>
                                        </div>
                                    </div>
                                    <div className="bg-black/30 p-3 rounded-lg border-l-2 border-red-500/50 mt-3">
                                        <p className="text-sm italic text-gray-400">"The Pithla Bhakri here is LEGENDARY! This alone is worth the trek!" - Google Review</p>
                                    </div>
                                </div>
                            </div>

                            {/* 1:30 PM */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base">
                                        1:30 PM
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-yellow-900/30 to-yellow-900/10 backdrop-blur-sm p-5 rounded-xl border-l-4 border-yellow-500">
                                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <FaCamera className="text-yellow-400" /> Leisure & Photography
                                    </h3>
                                    <p className="text-gray-300 mb-3">Relax, enjoy views, take photos</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                        <li>Fort walls panoramic views</li>
                                        <li>Valley overlook</li>
                                        <li>Kali Temple visit</li>
                                        <li>Shopping for souvenirs</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 3:00 PM */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                                    <div className="bg-gradient-to-r from-saffron to-orange-600 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base">
                                        3:00 PM
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-saffron/10 to-orange-900/20 backdrop-blur-sm p-5 rounded-xl border-l-4 border-saffron">
                                    <h3 className="text-xl font-bold text-white mb-2">Sunset & Descent</h3>
                                    <p className="text-gray-300 mb-3">Start descent by 4:30 PM before dark</p>
                                    <div className="bg-black/30 p-3 rounded-lg border-l-2 border-saffron/50">
                                        <p className="text-sm italic text-gray-400">"Sunset from Sinhagad is MAGICAL. The sky turns orange, and the entire valley glows!" - Google Review</p>
                                    </div>
                                </div>
                            </div>

                            {/* 5:00 PM */}
                            <div className="flex gap-4 md:gap-6">
                                <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 text-right">
                                    <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-3 py-2 rounded-lg font-bold text-sm md:text-base">
                                        5:00 PM
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm p-5 rounded-xl border-l-4 border-gray-500">
                                    <h3 className="text-xl font-bold text-white mb-2">Return to Pune</h3>
                                    <p className="text-gray-300">Optional stop at Khadakwasla Dam for tea</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Fort Landmarks - Dark Theme */}
                    <div className="bg-royal-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 sm:p-8 mb-12">
                        <h2 className="text-xl sm:text-3xl font-cinematic font-bold text-white mb-6">Key Landmarks to Visit</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Landmark 1 */}
                            <div className="rounded-xl overflow-hidden border border-gray-700 hover:border-saffron/50 transition-all duration-300 group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="https://imgs.search.brave.com/JZRYni2Tq2YI0Hn9TQpDPWfAsUGBE6XPMNQgeVCAboY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI0/NDc1MDc5Mi9waG90/by9yYWlnYWQtZm9y/dC13YWxscy1hbmQt/YmFzdGlvbi1yYWln/YWQtbWFoYXJhc2h0/cmEtaW5kaWEtMzUw/LXllYXItb2xkLW1h/amVzdGljLWZvcnQt/b2YuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJvQXJubTAy/dWtwYlo3NUhBdFV5/WTVjbGRtdTRCclRT/RnNMd09fQ01HQ2c9"
                                        alt="Sinhagad Fort View"
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>
                                <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800">
                                    <h4 className="font-bold text-white mb-1">Fort Walls & Ramparts</h4>
                                    <p className="text-sm text-gray-400">360° panoramic views, best photography spot</p>
                                </div>
                            </div>

                            {/* Landmark 2 */}
                            <div className="rounded-xl overflow-hidden border border-gray-700 hover:border-saffron/50 transition-all duration-300 group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="https://imgs.search.brave.com/HeuMDO8JLZsa6wBZ1bh_C2qqkGqL5LrjMJuD4sBLFNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWhh/cmFzaHRyYXRvdXJp/c20uZ292LmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEw/L3NpbmhhZ2FkLWZv/cnQuanBn"
                                        alt="Sinhagad Fort Entrance"
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>
                                <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800">
                                    <h4 className="font-bold text-white mb-1">Pune Darwaja</h4>
                                    <p className="text-sm text-gray-400">Main entrance gate facing Pune city</p>
                                </div>
                            </div>

                            {/* Landmark 3 */}
                            <div className="rounded-xl overflow-hidden border border-gray-700 hover:border-saffron/50 transition-all duration-300 group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="https://imgs.search.brave.com/ax6kQWEEdDiMQve3sLmAj-84jQx4R3KB-Ewd6Lp6j6s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aWtp/YmlvLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzEwL01v/bnVtZW50LW9mLVRh/bmFqaS1NYWx1c2Fy/ZS5qcGc"
                                        alt="Tanaji Memorial"
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>
                                <div className="p-4 bg-gradient-to-br from-gray-900 to-gray-800">
                                    <h4 className="font-bold text-white mb-1">Tanaji Malusare Memorial</h4>
                                    <p className="text-sm text-gray-400">Tribute to the Maratha warrior hero</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 p-4 rounded-xl border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-400 mb-2">⭐ Must-See Landmarks</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>• Tanaji Malusare Memorial (20-30 min)</li>
                                    <li>• Kaundinyeshwar Temple (15-20 min)</li>
                                    <li>• Rajaram's Tomb (15 min)</li>
                                    <li>• Kalyan Darwaja & Pune Darwaja (30 min)</li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-900/10 p-4 rounded-xl border-l-4 border-yellow-500">
                                <h4 className="font-bold text-yellow-400 mb-2">📸 Best Photo Spots</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>• Fort walls for panoramic views</li>
                                    <li>• Pune Darwaja at sunrise</li>
                                    <li>• Valley overlook near Kalyan Darwaja</li>
                                    <li>• Temple courtyard</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Safety Tips - Dark Theme */}
                    <div className="bg-royal-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 sm:p-8 mb-12">
                        <h2 className="text-xl sm:text-3xl font-cinematic font-bold text-white mb-6 flex items-center gap-3">
                            <FaExclamationTriangle className="text-yellow-500" />
                            Safety Tips from Visitors
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 p-6 rounded-xl border border-green-800/50">
                                <h3 className="text-xl font-bold text-green-400 mb-4">✅ Do's</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 font-bold">✓</span>
                                        <span className="text-gray-300">Start early (6 AM) to avoid heat and crowds</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 font-bold">✓</span>
                                        <span className="text-gray-300">Wear proper trekking shoes with grip</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 font-bold">✓</span>
                                        <span className="text-gray-300">Carry 2L water per person</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 font-bold">✓</span>
                                        <span className="text-gray-300">Use railings on steep sections</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 font-bold">✓</span>
                                        <span className="text-gray-300">Take breaks at rest points</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-red-900/30 to-red-900/10 p-6 rounded-xl border border-red-800/50">
                                <h3 className="text-xl font-bold text-red-400 mb-4">❌ Don'ts</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold">✗</span>
                                        <span className="text-gray-300">Don't trek in heavy rain or storms</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold">✗</span>
                                        <span className="text-gray-300">Don't wear sandals or slippers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold">✗</span>
                                        <span className="text-gray-300">Don't litter (carry trash back)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold">✗</span>
                                        <span className="text-gray-300">Don't go near fort edges (no railings)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold">✗</span>
                                        <span className="text-gray-300">Don't consume alcohol</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-br from-yellow-900/30 to-yellow-900/10 p-4 rounded-xl border-l-4 border-yellow-500">
                            <p className="text-sm italic text-gray-400">"The fort walls don't have railings everywhere. Be very careful near edges, especially with kids!" - Google Review</p>
                        </div>
                    </div>

                    {/* Best Time to Visit - Dark Theme */}
                    <div className="bg-royal-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 sm:p-8 mb-12">
                        <h2 className="text-xl sm:text-3xl font-cinematic font-bold text-white mb-6">Best Time to Visit</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-green-900/40 to-green-900/20 p-6 rounded-xl border-t-4 border-green-500 hover:border-green-400 transition">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Monsoon ⭐⭐⭐⭐⭐</h3>
                                <p className="text-sm text-gray-400 mb-3">June - September</p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>✅ Lush green landscape</li>
                                    <li>✅ Waterfalls along trek</li>
                                    <li>✅ Cool weather</li>
                                    <li>⚠️ Slippery paths</li>
                                </ul>
                                <div className="mt-3 bg-black/30 p-2 rounded text-xs italic text-gray-400">
                                    "Monsoon is the BEST time! It's like heaven on earth!"
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/40 to-blue-900/20 p-6 rounded-xl border-t-4 border-blue-500 hover:border-blue-400 transition">
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Winter ⭐⭐⭐⭐⭐</h3>
                                <p className="text-sm text-gray-400 mb-3">November - February</p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>✅ Clear visibility</li>
                                    <li>✅ Pleasant weather</li>
                                    <li>✅ Best for photography</li>
                                    <li>⚠️ Crowded on weekends</li>
                                </ul>
                                <div className="mt-3 bg-black/30 p-2 rounded text-xs italic text-gray-400">
                                    "Winter is perfect for trekking. Cool weather, clear skies!"
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-900/40 to-orange-900/20 p-6 rounded-xl border-t-4 border-saffron hover:border-orange-400 transition">
                                <h3 className="text-xl font-bold text-saffron mb-2">Summer ⭐⭐⭐</h3>
                                <p className="text-sm text-gray-400 mb-3">March - May</p>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>✅ Less crowded</li>
                                    <li>✅ Good for early morning</li>
                                    <li>⚠️ Hot (30-35°C)</li>
                                    <li>⚠️ Dry landscape</li>
                                </ul>
                                <div className="mt-3 bg-black/30 p-2 rounded text-xs italic text-gray-400">
                                    "Start very early to beat the heat. Carry extra water!"
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Budget Breakdown - Dark Theme */}
                    <div className="bg-royal-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-4 sm:p-8 mb-12">
                        <h2 className="text-xl sm:text-3xl font-cinematic font-bold text-white mb-6 flex items-center gap-3">
                            <FaMoneyBillWave className="text-green-400" />
                            Budget Breakdown
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-saffron/20 to-orange-900/20 border-b border-saffron/30">
                                        <th className="text-left p-4 font-bold text-saffron">Item</th>
                                        <th className="text-right p-4 font-bold text-saffron">Cost (₹)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                                        <td className="p-4">Fuel/Transport</td>
                                        <td className="p-4 text-right">200-300</td>
                                    </tr>
                                    <tr className="border-b border-gray-800 bg-gray-900/30 hover:bg-gray-900/50">
                                        <td className="p-4">Parking</td>
                                        <td className="p-4 text-right">50-100</td>
                                    </tr>
                                    <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                                        <td className="p-4">Entry Fee</td>
                                        <td className="p-4 text-right">20</td>
                                    </tr>
                                    <tr className="border-b border-gray-800 bg-gray-900/30 hover:bg-gray-900/50">
                                        <td className="p-4">Breakfast (Tea/Snacks)</td>
                                        <td className="p-4 text-right">50-100</td>
                                    </tr>
                                    <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                                        <td className="p-4">Lunch</td>
                                        <td className="p-4 text-right">150-250</td>
                                    </tr>
                                    <tr className="border-b border-gray-800 bg-gray-900/30 hover:bg-gray-900/50">
                                        <td className="p-4">Water/Beverages</td>
                                        <td className="p-4 text-right">50-100</td>
                                    </tr>
                                    <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                                        <td className="p-4">Shopping/Extras</td>
                                        <td className="p-4 text-right">100-200</td>
                                    </tr>
                                    <tr className="bg-gradient-to-r from-saffron to-orange-600 text-white font-bold">
                                        <td className="p-4 rounded-bl-lg">TOTAL PER PERSON</td>
                                        <td className="p-4 text-right rounded-br-lg">₹620-1,070</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-gradient-to-br from-green-900/40 to-green-900/20 p-4 rounded-xl text-center border-2 border-green-700/50 hover:border-green-500 transition">
                                <div className="font-bold text-green-400">Budget-Friendly</div>
                                <div className="text-2xl font-bold text-white">₹500-600</div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-900/40 to-blue-900/20 p-4 rounded-xl text-center border-2 border-blue-700/50 hover:border-blue-500 transition">
                                <div className="font-bold text-blue-400">Comfortable</div>
                                <div className="text-2xl font-bold text-white">₹800-1,000</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-900/40 to-purple-900/20 p-4 rounded-xl text-center border-2 border-purple-700/50 hover:border-purple-500 transition">
                                <div className="font-bold text-purple-400">Premium</div>
                                <div className="text-2xl font-bold text-white">₹1,200+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinhagadItinerary;
