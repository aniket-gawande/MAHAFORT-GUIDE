import React from 'react';
import { FaClock, FaMapMarkedAlt, FaUtensils, FaCamera, FaExclamationTriangle, FaMoneyBillWave, FaHiking, FaDownload } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const SinhagadItinerary = () => {
    const handleDownloadPDF = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4 text-center">🏰 Sinhagad Fort - Complete Itinerary</h1>
                    <p className="text-xl text-center text-orange-100 mb-6">Based on Real Google Maps Reviews & Visitor Experiences</p>

                    {/* Download PDF Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleDownloadPDF}
                            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 text-lg print:hidden"
                        >
                            <FaDownload className="text-xl" />
                            Download Complete Itinerary as PDF
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-orange-500">
                        <MdLocationOn className="text-4xl text-orange-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">30 km</div>
                        <div className="text-gray-600">from Pune</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
                        <FaHiking className="text-4xl text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">4 km</div>
                        <div className="text-gray-600">Trek Distance</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500">
                        <FaClock className="text-4xl text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">1.5-2 hrs</div>
                        <div className="text-gray-600">Trek Duration</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-yellow-500">
                        <FaMoneyBillWave className="text-4xl text-yellow-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-800">₹600-1000</div>
                        <div className="text-gray-600">Per Person</div>
                    </div>
                </div>


                {/* Trek Routes */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <FaMapMarkedAlt className="text-orange-600" />
                        Trekking Routes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition">
                            <h4 className="font-bold text-green-800 mb-3 text-lg">✅ Donje Route (Recommended)</h4>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><strong>Distance:</strong> 4 km</p>
                                <p><strong>Duration:</strong> 1.5-2 hours</p>
                                <p><strong>Difficulty:</strong> Easy</p>
                                <p><strong>Features:</strong></p>
                                <ul className="list-disc list-inside ml-2">
                                    <li>400 well-maintained steps</li>
                                    <li>5 rest points with benches</li>
                                    <li>Tea stalls at 3 points</li>
                                    <li>Railings on steep sections</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-lg transition">
                            <h4 className="font-bold text-orange-800 mb-3 text-lg">⚠️ Ghorawadi Route</h4>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><strong>Distance:</strong> 5 km</p>
                                <p><strong>Duration:</strong> 3 hours</p>
                                <p><strong>Difficulty:</strong> Difficult</p>
                                <p><strong>Features:</strong></p>
                                <ul className="list-disc list-inside ml-2">
                                    <li>Steeper, rocky terrain</li>
                                    <li>Less crowded</li>
                                    <li>More scenic views</li>
                                    <li>For experienced trekkers</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition">
                            <h4 className="font-bold text-blue-800 mb-3 text-lg">🚗 Motorable Road</h4>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><strong>Distance:</strong> Direct access</p>
                                <p><strong>Duration:</strong> 15 min drive</p>
                                <p><strong>Difficulty:</strong> Easy</p>
                                <p><strong>Features:</strong></p>
                                <ul className="list-disc list-inside ml-2">
                                    <li>Vehicle access to parking</li>
                                    <li>Shared jeeps (₹20-30)</li>
                                    <li>500m walk from parking</li>
                                    <li>Ideal for elderly/kids</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg">
                        <p className="text-sm font-semibold text-gray-800">
                            <strong>Elevation Gain:</strong> 600 meters (700m to 1,312m altitude)
                        </p>
                    </div>
                </div>

                {/* Detailed Timeline */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                        <FaClock className="text-orange-600" />
                        One-Day Timeline
                    </h2>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {/* 5:30 AM */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-32 text-right">
                                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg font-bold">
                                    5:30 AM
                                </div>
                            </div>
                            <div className="flex-1 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Departure from Pune</h3>
                                <p className="text-gray-700 mb-3">Start early to catch sunrise and avoid crowds</p>
                                <div className="bg-white p-3 rounded border-l-2 border-orange-300">
                                    <p className="text-sm italic text-gray-600">"Start early to catch the sunrise and avoid crowds. The early morning mist on the Sahyadri hills is breathtaking!" - Google Review</p>
                                </div>
                            </div>
                        </div>

                        {/* 6:30 AM */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-32 text-right">
                                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-bold">
                                    6:30 AM
                                </div>
                            </div>
                            <div className="flex-1 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Start Trek from Donje Village</h3>
                                <p className="text-gray-700 mb-3">4 km trek with well-maintained stone steps</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>400 steps total with 5 rest points</li>
                                    <li>Tea/coffee stalls at rest points</li>
                                    <li>Use railings on steep sections</li>
                                    <li>Duration: 1.5-2 hours</li>
                                </ul>
                            </div>
                        </div>

                        {/* 8:30 AM */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-32 text-right">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                                    8:30 AM
                                </div>
                            </div>
                            <div className="flex-1 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Arrival at Pune Darwaja</h3>
                                <p className="text-gray-700 mb-3">Fort entrance with panoramic views</p>
                                <div className="bg-white p-3 rounded border-l-2 border-blue-300">
                                    <p className="text-sm italic text-gray-600">"The moment you enter through Pune Darwaja, the panoramic view of Pune city and surrounding forts is mind-blowing!" - Google Review</p>
                                </div>
                            </div>
                        </div>

                        {/* 9:00 AM */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-32 text-right">
                                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                                    9:00 AM
                                </div>
                            </div>
                            <div className="flex-1 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Historical Exploration</h3>
                                <p className="text-gray-700 mb-3">Visit key landmarks (2.5 hours)</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Tanaji Malusare Memorial</li>
                                    <li>Kaundinyeshwar Temple</li>
                                    <li>Rajaram's Tomb</li>
                                    <li>Kalyan Darwaja</li>
                                    <li>Military Stables & Ruins</li>
                                </ul>
                            </div>
                        </div>

                        {/* 12:00 PM */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-32 text-right">
                                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-bold">
                                    12:00 PM
                                </div>
                            </div>
                            <div className="flex-1 bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                                    <FaUtensils /> Lunch - Authentic Maharashtrian Food
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="font-bold text-orange-600">Pithla Bhakri</div>
                                        <div className="text-sm text-gray-600">₹80-120 • Must-try!</div>
                                    </div>
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="font-bold text-orange-600">Kanda Bhaji</div>
                                        <div className="text-sm text-gray-600">₹40-60 • With chai</div>
                                    </div>
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="font-bold text-orange-600">Fresh Dahi</div>
                                        <div className="text-sm text-gray-600">₹30-50 • Homemade</div>
                                    </div>
                                    <div className="bg-white p-3 rounded shadow-sm">
                                        <div className="font-bold text-orange-600">Cutting Chai</div>
                                        <div className="text-sm text-gray-600">₹10-15 • Perfect!</div>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded border-l-2 border-red-300 mt-3">
                                    <p className="text-sm italic text-gray-600">"The Pithla Bhakri here is LEGENDARY! This alone is worth the trek!" - Google Review</p>
                                </div>
                            </div>
                        </div>

                        {/* 1:30 PM */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-32 text-right">
                                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg font-bold">
                                    1:30 PM
                                </div>
                            </div>
                            <div className="flex-1 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                                    <FaCamera /> Leisure & Photography
                                </h3>
                                <p className="text-gray-700 mb-3">Relax, enjoy views, take photos</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Fort walls panoramic views</li>
                                    <li>Valley overlook</li>
                                    <li>Kali Temple visit</li>
                                    <li>Shopping for souvenirs</li>
                                </ul>
                            </div>
                        </div>

                        {/* 3:00 PM */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-32 text-right">
                                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg font-bold">
                                    3:00 PM
                                </div>
                            </div>
                            <div className="flex-1 bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Sunset & Descent</h3>
                                <p className="text-gray-700 mb-3">Start descent by 4:30 PM before dark</p>
                                <div className="bg-white p-3 rounded border-l-2 border-orange-300">
                                    <p className="text-sm italic text-gray-600">"Sunset from Sinhagad is MAGICAL. The sky turns orange, and the entire valley glows!" - Google Review</p>
                                </div>
                            </div>
                        </div>

                        {/* 5:00 PM */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-32 text-right">
                                <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-lg font-bold">
                                    5:00 PM
                                </div>
                            </div>
                            <div className="flex-1 bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Return to Pune</h3>
                                <p className="text-gray-700">Optional stop at Khadakwasla Dam for tea</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Fort Landmarks with Real Photos */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Landmarks to Visit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Landmark 1 */}
                        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                            <img
                                src="https://imgs.search.brave.com/JZRYni2Tq2YI0Hn9TQpDPWfAsUGBE6XPMNQgeVCAboY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI0/NDc1MDc5Mi9waG90/by9yYWlnYWQtZm9y/dC13YWxscy1hbmQt/YmFzdGlvbi1yYWln/YWQtbWFoYXJhc2h0/cmEtaW5kaWEtMzUw/LXllYXItb2xkLW1h/amVzdGljLWZvcnQt/b2YuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJvQXJubTAy/dWtwYlo3NUhBdFV5/WTVjbGRtdTRCclRT/RnNMd09fQ01HQ2c9"
                                alt="Sinhagad Fort View"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50">
                                <h4 className="font-bold text-gray-800 mb-1">Fort Walls & Ramparts</h4>
                                <p className="text-sm text-gray-600">360° panoramic views, best photography spot</p>
                            </div>
                        </div>

                        {/* Landmark 2 */}
                        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                            <img
                                src="https://imgs.search.brave.com/HeuMDO8JLZsa6wBZ1bh_C2qqkGqL5LrjMJuD4sBLFNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWhh/cmFzaHRyYXRvdXJp/c20uZ292LmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEw/L3NpbmhhZ2FkLWZv/cnQuanBn"
                                alt="Sinhagad Fort Entrance"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100">
                                <h4 className="font-bold text-gray-800 mb-1">Pune Darwaja</h4>
                                <p className="text-sm text-gray-600">Main entrance gate facing Pune city</p>
                            </div>
                        </div>

                        {/* Landmark 3 */}
                        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                            <img
                                src="https://imgs.search.brave.com/ax6kQWEEdDiMQve3sLmAj-84jQx4R3KB-Ewd6Lp6j6s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aWtp/YmlvLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzEwL01v/bnVtZW50LW9mLVRh/bmFqaS1NYWx1c2Fy/ZS5qcGc"
                                alt="Tanaji Memorial"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100">
                                <h4 className="font-bold text-gray-800 mb-1">Tanaji Malusare Memorial</h4>
                                <p className="text-sm text-gray-600">Tribute to the Maratha warrior hero</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-bold text-blue-800 mb-2">⭐ Must-See Landmarks</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Tanaji Malusare Memorial (20-30 min)</li>
                                <li>• Kaundinyeshwar Temple (15-20 min)</li>
                                <li>• Rajaram's Tomb (15 min)</li>
                                <li>• Kalyan Darwaja & Pune Darwaja (30 min)</li>
                            </ul>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                            <h4 className="font-bold text-yellow-800 mb-2">📸 Best Photo Spots</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Fort walls for panoramic views</li>
                                <li>• Pune Darwaja at sunrise</li>
                                <li>• Valley overlook near Kalyan Darwaja</li>
                                <li>• Temple courtyard</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Safety Tips */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <FaExclamationTriangle className="text-yellow-600" />
                        Safety Tips from Visitors
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-green-700 mb-4">✅ Do's</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-gray-700">Start early (6 AM) to avoid heat and crowds</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-gray-700">Wear proper trekking shoes with grip</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-gray-700">Carry 2L water per person</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-gray-700">Use railings on steep sections</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="text-gray-700">Take breaks at rest points</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-red-700 mb-4">❌ Don'ts</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span className="text-gray-700">Don't trek in heavy rain or storms</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span className="text-gray-700">Don't wear sandals or slippers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span className="text-gray-700">Don't litter (carry trash back)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span className="text-gray-700">Don't go near fort edges (no railings)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">✗</span>
                                    <span className="text-gray-700">Don't consume alcohol</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <p className="text-sm italic text-gray-700">"The fort walls don't have railings everywhere. Be very careful near edges, especially with kids!" - Google Review</p>
                    </div>
                </div>

                {/* Best Time to Visit */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Time to Visit</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-t-4 border-green-500">
                            <h3 className="text-xl font-bold text-green-800 mb-2">Monsoon ⭐⭐⭐⭐⭐</h3>
                            <p className="text-sm text-gray-600 mb-3">June - September</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>✅ Lush green landscape</li>
                                <li>✅ Waterfalls along trek</li>
                                <li>✅ Cool weather</li>
                                <li>⚠️ Slippery paths</li>
                            </ul>
                            <div className="mt-3 bg-white p-2 rounded text-xs italic text-gray-600">
                                "Monsoon is the BEST time! It's like heaven on earth!"
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-t-4 border-blue-500">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Winter ⭐⭐⭐⭐⭐</h3>
                            <p className="text-sm text-gray-600 mb-3">November - February</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>✅ Clear visibility</li>
                                <li>✅ Pleasant weather</li>
                                <li>✅ Best for photography</li>
                                <li>⚠️ Crowded on weekends</li>
                            </ul>
                            <div className="mt-3 bg-white p-2 rounded text-xs italic text-gray-600">
                                "Winter is perfect for trekking. Cool weather, clear skies!"
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-t-4 border-orange-500">
                            <h3 className="text-xl font-bold text-orange-800 mb-2">Summer ⭐⭐⭐</h3>
                            <p className="text-sm text-gray-600 mb-3">March - May</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>✅ Less crowded</li>
                                <li>✅ Good for early morning</li>
                                <li>⚠️ Hot (30-35°C)</li>
                                <li>⚠️ Dry landscape</li>
                            </ul>
                            <div className="mt-3 bg-white p-2 rounded text-xs italic text-gray-600">
                                "Start very early to beat the heat. Carry extra water!"
                            </div>
                        </div>
                    </div>
                </div>

                {/* Budget Breakdown */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <FaMoneyBillWave className="text-green-600" />
                        Budget Breakdown
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-orange-100">
                                    <th className="text-left p-3 font-bold text-gray-800">Item</th>
                                    <th className="text-right p-3 font-bold text-gray-800">Cost (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3 text-gray-700">Fuel/Transport</td>
                                    <td className="p-3 text-right text-gray-700">200-300</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="p-3 text-gray-700">Parking</td>
                                    <td className="p-3 text-right text-gray-700">50-100</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 text-gray-700">Entry Fee</td>
                                    <td className="p-3 text-right text-gray-700">20</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="p-3 text-gray-700">Breakfast (Tea/Snacks)</td>
                                    <td className="p-3 text-right text-gray-700">50-100</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 text-gray-700">Lunch</td>
                                    <td className="p-3 text-right text-gray-700">150-250</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="p-3 text-gray-700">Water/Beverages</td>
                                    <td className="p-3 text-right text-gray-700">50-100</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 text-gray-700">Shopping/Extras</td>
                                    <td className="p-3 text-right text-gray-700">100-200</td>
                                </tr>
                                <tr className="bg-orange-500 text-white font-bold">
                                    <td className="p-3">TOTAL PER PERSON</td>
                                    <td className="p-3 text-right">₹620-1,070</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-green-50 p-4 rounded-lg text-center border-2 border-green-300">
                            <div className="font-bold text-green-800">Budget-Friendly</div>
                            <div className="text-2xl font-bold text-green-600">₹500-600</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center border-2 border-blue-300">
                            <div className="font-bold text-blue-800">Comfortable</div>
                            <div className="text-2xl font-bold text-blue-600">₹800-1,000</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center border-2 border-purple-300">
                            <div className="font-bold text-purple-800">Premium</div>
                            <div className="text-2xl font-bold text-purple-600">₹1,200+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinhagadItinerary;
