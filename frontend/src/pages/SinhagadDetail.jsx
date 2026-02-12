import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SinhagadMap from '../components/Sinhagadmap';
import CrowdStatusBadge from '../components/CrowdStatusBadge';
import DownloadButton from '../components/DownloadButton';
import EmergencyButton from '../components/EmergencyButton';
import sinhagad_hero from '../assets/sinhagad-hero.jpg';
import { FaMapMarkerAlt, FaHistory, FaMountain, FaBinoculars, FaBus, FaHotel, FaStar, FaInfoCircle } from 'react-icons/fa';

const SinhagadDetail = () => {
  const [activeTab, setActiveTab] = useState('history');

  // Static reviews data for Sinhagad
  const [reviews] = useState([
    { id: 1, user: "Amit Deshmukh", rating: 5, comment: "The trek was exhilarating! The view of Pune city from the top is mesmerizing. Don't miss the Pithla Bhakri." },
    { id: 2, user: "Sarah Jenkins", rating: 4, comment: "Great historical place. A bit crowded on weekends, but the history of Tanaji Malusare is inspiring." },
    { id: 3, user: "Rahul Patil", rating: 5, comment: "Best place for a monsoon trek. The fog and greenery are breathtaking." }
  ]);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={sinhagad_hero} 
          alt="Sinhagad Fort" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16 text-white">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600 rounded-full text-sm font-semibold tracking-wide">HILL FORT</span>
              <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-semibold tracking-wide">1312 M</span>
              <CrowdStatusBadge fortId="sinhagad" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Sinhagad Fort</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
              The Lion's Fort — A testament to the valor of Tanaji Malusare and a sentinel guarding the city of Pune.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <DownloadButton fortName="Sinhagad" />
              <EmergencyButton />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow">
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">District</div>
            <div className="text-2xl font-bold text-gray-800">Pune</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Difficulty</div>
            <div className="text-2xl font-bold text-gray-800">Medium</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 hover:shadow-md transition-shadow">
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Best Time</div>
            <div className="text-2xl font-bold text-gray-800">June - Feb</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500 hover:shadow-md transition-shadow">
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Type</div>
            <div className="text-2xl font-bold text-gray-800">Hill Fort</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details Tabs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              
              {/* Tabs Navigation */}
              <div className="flex overflow-x-auto border-b border-gray-200">
                {['history', 'features', 'reach', 'facilities'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 px-6 text-sm font-medium uppercase tracking-wider transition-colors duration-200 whitespace-nowrap
                      ${activeTab === tab 
                        ? 'bg-orange-50 text-orange-600 border-b-2 border-orange-600' 
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-8 min-h-[400px]">
                {activeTab === 'history' && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                        <FaHistory size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">History & Significance</h2>
                    </div>
                    <div className="prose text-gray-600 leading-relaxed space-y-4">
                      <p>
                        Previously known as <strong>Kondhana</strong>, the fort has been the site of many historic battles, most notably the Battle of Sinhagad in 1670.
                      </p>
                      <p>
                        The fort is famous for the legendary bravery of <strong>Tanaji Malusare</strong>, a trusted general of Chhatrapati Shivaji Maharaj. He launched a surprise attack at night by scaling the steep cliffs using a monitor lizard (ghorpad) named Yashwanti.
                      </p>
                      <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 bg-gray-50 py-2 pr-2 my-4 rounded-r">
                        "Gad aala pan Sinha gela" (The fort is conquered, but the Lion is lost) - Chhatrapati Shivaji Maharaj, upon hearing of Tanaji's sacrifice.
                      </blockquote>
                      <p>
                        The fort was strategically important as it guarded the Bhor Ghat trade route and served as a southern outpost for the Maratha Empire.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-green-100 rounded-lg text-green-600">
                        <FaBinoculars size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Key Attractions</h2>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: "Pune Darwaza", desc: "The main entrance facing Pune city." },
                        { name: "Kalyan Darwaza", desc: "The south-facing gate towards Kalyan village." },
                        { name: "Tanaji Malusare Samadhi", desc: "Memorial dedicated to the brave warrior." },
                        { name: "Kade Lot", desc: "A steep cliff historically used for executing prisoners." },
                        { name: "Lokmanya Tilak Bungalow", desc: "Where freedom fighter Tilak stayed." },
                        { name: "Dev Tak", desc: "Ancient rock-cut water cisterns with cool water." },
                        { name: "Amruteshwar Temple", desc: "An ancient Shiva temple." }
                      ].map((item, index) => (
                        <li key={index} className="flex gap-3 items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></span>
                          <div>
                            <strong className="block text-gray-800">{item.name}</strong>
                            <span className="text-sm text-gray-600">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'reach' && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        <FaBus size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">How to Reach</h2>
                    </div>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FaBus className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">By Public Transport</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            PMPML buses are available from Swargate and Shaniwar Wada to <strong>Sinhagad Paytha (Donaje)</strong>. Frequency is good (every 30-60 mins).
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FaMountain className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">Trekking</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            A popular 2.7 km trek starts from the base village (Atkarwadi/Donaje). It takes about 60-90 minutes for an average climber.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FaMapMarkerAlt className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">By Road</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            You can drive up to the top parking lot. The ghat section is steep but manageable. NOTE: Private vehicles may be restricted on weekends/holidays to reduce congestion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'facilities' && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                        <FaHotel size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Facilities & Food</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="text-orange-500">🍲</span> Food
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Famous for traditional Maharashtrian cuisine. Do not miss the <strong>Pithla Bhakri</strong>, <strong>Kanda Bhaji</strong> (Onion Fritters), and Matka Curd.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="text-blue-500">🅿️</span> Parking
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Paid parking is available at the top for both two-wheelers and four-wheelers.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <span className="text-teal-500">🚰</span> Water
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Safe drinking water is available from the 'Dev Tak' cisterns, but carrying bottled water is recommended.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" /> Fort Map
              </h2>
              <div className="h-[400px] rounded-xl overflow-hidden border border-gray-200">
                <SinhagadMap />
              </div>
            </div>
          </div>

          {/* Right Column: Reviews & Info */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Reviews Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Reviews</h3>
                <div className="flex items-center gap-1 text-orange-500 font-bold bg-orange-50 px-2 py-1 rounded">
                  4.8 <FaStar />
                </div>
              </div>
              
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold text-gray-800">{review.user}</div>
                      <div className="flex text-yellow-400 text-xs">
                        {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-2 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                Write a Review
              </button>
            </div>

            {/* Weather / Tips Widget */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                <FaInfoCircle /> Travel Tips
              </h3>
              <ul className="space-y-3 text-sm text-blue-700">
                <li className="flex gap-2">
                  <span>•</span> Carry cash as network connectivity is poor for digital payments.
                </li>
                <li className="flex gap-2">
                  <span>•</span> Avoid weekends if you want to avoid heavy traffic on the ghat road.
                </li>
                <li className="flex gap-2">
                  <span>•</span> Wear comfortable trekking shoes.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SinhagadDetail;