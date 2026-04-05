import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LohagadMap from '../components/LohagadMap';
import LiveWeather from '../components/LiveWeather';
import { FaClock, FaRupeeSign, FaCalendarAlt, FaMapMarkerAlt, FaHistory, FaMonument, FaMountain, FaShieldAlt, FaUtensils, FaExclamationTriangle, FaStar } from 'react-icons/fa';
import lohagadImage from '../assets/lohagad-hero.jpg';

const LohagadDetail = () => {
    const [showMap, setShowMap] = useState(false);
    const [activeTab, setActiveTab] = useState('history');

    return (
        <div className="min-h-screen bg-royal-black text-gray-300 font-body">
            <Navbar />

            {/* --- CINEMATIC HERO SECTION --- */}
            <div className="relative h-[60vh] lg:h-[70vh] w-full">
                {/* Background Image */}
                <img
                    src={lohagadImage}
                    alt="Lohagad Fort - The Iron Fort of the Sahyadris"
                    className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/50 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

                {/* Hero Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-cinematic font-black text-white drop-shadow-2xl mb-4">
                        LOHAGAD FORT
                    </h1>
                    <div className="h-1 w-24 bg-saffron rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-saffron font-bold tracking-wider uppercase drop-shadow-lg">
                        The Iron Fort of the Sahyadri Range
                    </p>
                </div>
            </div>

            {/* --- MAIN CONTENT CONTAINER --- */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* LEFT COLUMN: Content */}
                    <div className="lg:w-2/3 space-y-12">
                        {/* Introduction */}
                        <section>
                            <p className="text-lg leading-relaxed text-gray-300 first-letter:text-5xl first-letter:font-cinematic first-letter:text-saffron first-letter:mr-2 first-letter:float-left">
                                Lohagad Fort, meaning "Iron Fort", is one of the most popular and well-preserved hill forts in 
                                the Sahyadri range near Malavli in the Maval region of Pune district, Maharashtra. Rising 
                                majestically to 1,033 meters above sea level, Lohagad is famous for its easy trek, 
                                massive fortifications, and the unique fortified spur called Vinchu Kata — a scorpion-tail-shaped 
                                defensive extension. Captured by Chhatrapati Shivaji Maharaj in 1648, the fort served as a 
                                strategic and administrative stronghold during the Maratha period and was later used by the 
                                Peshwas as a treasury fort. Its twin fort, Visapur, stands proudly alongside, making this 
                                one of the most rewarding fort treks in Maharashtra.
                            </p>
                        </section>

                        {/* Content Tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-white/10">
                            {['history', 'trek', 'landmarks', 'food'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 py-2.5 rounded-t-xl text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                                        activeTab === tab
                                            ? 'bg-saffron text-royal-black'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {tab === 'history' && '⚔️ '}
                                    {tab === 'trek' && '🥾 '}
                                    {tab === 'landmarks' && '🏛️ '}
                                    {tab === 'food' && '🍽️ '}
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* History Section */}
                        {activeTab === 'history' && (
                            <section className="relative border-l-2 border-saffron/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaHistory className="text-saffron" />
                                    The Saga of Lohagad
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        Lohagad Fort, literally translating to <strong className="text-saffron">"Iron Fort"</strong>, 
                                        is one of the most significant and historically rich forts in the Maval region of Maharashtra. 
                                        Perched atop the Western Ghats, the fort commanded strategic control over the trade routes 
                                        connecting the Konkan coast to the Deccan plateau.
                                    </p>
                                    <p>
                                        The fort was captured by <strong className="text-saffron">Chhatrapati Shivaji Maharaj in 1648</strong>, 
                                        making it one of his earliest conquests and an important stepping stone in the expansion of 
                                        Maratha power. Lohagad's natural defenses — steep cliffs, thick forests, and a series of 
                                        fortified gates — made it <strong className="text-white">nearly impregnable</strong>.
                                    </p>

                                    {/* Timeline */}
                                    <div className="mt-8 space-y-6">
                                        <TimelineItem 
                                            year="1648" 
                                            title="Captured by Shivaji Maharaj" 
                                            desc="Chhatrapati Shivaji Maharaj captured Lohagad Fort, establishing it as one of his key strongholds in the Maval region for controlling the Pune-Konkan corridor." 
                                        />
                                        <TimelineItem 
                                            year="1670" 
                                            title="Mughal Occupation" 
                                            desc="The fort came under Mughal control during the period of Maratha setbacks. However, it was eventually recaptured by the Marathas." 
                                        />
                                        <TimelineItem 
                                            year="Peshwa Era" 
                                            title="Treasury & Administrative Fort" 
                                            desc="During the Peshwa period, Lohagad was used for keeping treasury and administrative material, highlighting its importance in Maratha governance." 
                                        />
                                        <TimelineItem 
                                            year="1818" 
                                            title="British Takeover" 
                                            desc="Like most Maratha forts, Lohagad was taken over by the British East India Company after the fall of the Peshwa dynasty." 
                                        />
                                    </div>

                                    <p className="mt-6">
                                        <strong className="text-white">Historical Significance:</strong> Lohagad's location atop the Sahyadri 
                                        range gave the Marathas control over vital trade routes between the coast and the plateau. Its 
                                        layered gate defense system and the iconic <strong className="text-saffron">Vinchu Kata</strong> — 
                                        a scorpion-tail-shaped fortified spur — demonstrate the advanced military architecture of the era.
                                    </p>
                                    <p>
                                        The fort represents the <strong className="text-white">early expansion of Maratha power</strong> 
                                        and remains a beloved destination for history enthusiasts and trekkers alike, offering a window 
                                        into the glorious past of Swarajya.
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Trek Section */}
                        {activeTab === 'trek' && (
                            <section className="relative border-l-2 border-saffron/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaMountain className="text-saffron" />
                                    Trek to Lohagad
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        The trek to Lohagad Fort is one of the <strong className="text-saffron">most popular and beginner-friendly</strong> treks 
                                        in Maharashtra. Starting from Malavli village near the Malavli railway station, the trail is wide, well-marked, 
                                        and passes through scenic countryside before ascending to the fort gates.
                                    </p>

                                    <div className="bg-gradient-to-r from-saffron/10 to-transparent p-6 rounded-xl border-l-4 border-saffron mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-3">Trail from Malavli Village</h3>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="text-gray-400">Distance:</span>
                                                <span className="text-white font-bold ml-2">≈4 km one way</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">Duration:</span>
                                                <span className="text-white font-bold ml-2">1.5–2 hours ascent</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">Difficulty:</span>
                                                <span className="text-green-400 font-bold ml-2">Easy</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">Elevation:</span>
                                                <span className="text-white font-bold ml-2">1,033 m ASL</span>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-300">
                                            The most commonly used route starts from Malavli village near Malavli railway station. 
                                            The trail is wide and well-marked, passing through Lohagadwadi and reaching the main entrance 
                                            gates. The route is suitable for beginners and family groups.
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">Best Time to Trek</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                                <h4 className="text-saffron font-bold mb-2">🌧️ Monsoon (June–September)</h4>
                                                <p className="text-sm text-gray-400">Green surroundings, misty views, and waterfalls. The fort looks magical but trails can be slippery.</p>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                                <h4 className="text-saffron font-bold mb-2">❄️ Post-Monsoon & Winter (Oct–Feb)</h4>
                                                <p className="text-sm text-gray-400">Clear weather, safer trails, and excellent visibility. Ideal for photography and comfortable trekking.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 bg-white/5 border border-white/10 p-6 rounded-xl">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">🎒 Trek Essentials</h3>
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            {['Good trekking shoes', 'Water (2L minimum)', 'Light snacks & energy bars', 'Rain gear (monsoon)', 
                                              'Sunscreen & hat (summer)', 'First aid kit', 'Torch/flashlight', 'Camera for Vinchu Kata views'].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-saffron">✓</span> {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Key Landmarks Section */}
                        {activeTab === 'landmarks' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaMonument className="text-saffron" />
                                    Key Landmarks
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <AttractionCard
                                        title="Vinchu Kata (Scorpion's Tail)"
                                        desc="A long and narrow fortified extension of the fort resembling a scorpion's tail — one of the most iconic landmarks in Maharashtra's fort architecture. Offers breathtaking views of the surrounding valleys."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Narayan Darwaja"
                                        desc="One of the main and well-preserved entrance gates of Lohagad Fort. An important access point used during Maratha administration and military movement."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Ganesh Darwaja"
                                        desc="A prominent fortified gate located on the main approach to the fort. Part of the layered gate defense system typical of Maratha forts."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Lohagadwadi"
                                        desc="Small village located on the fort plateau with basic facilities for trekkers. Supported the fort population and served as a base settlement during Maratha times."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Hanuman Darwaja"
                                        desc="Another fortified entrance gate that forms part of the multi-layered defense system. Features traditional Maratha architectural elements."
                                        mustSee={false}
                                    />
                                    <AttractionCard
                                        title="Water Cisterns & Caves"
                                        desc="Ancient water storage systems and rock-cut caves that sustained the fort's garrison. Evidence of the Marathas' planning for self-sufficiency during siege conditions."
                                        mustSee={false}
                                    />
                                </div>
                            </section>
                        )}

                        {/* Food & Culture Section */}
                        {activeTab === 'food' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaUtensils className="text-saffron" />
                                    Food & Local Flavors
                                </h2>
                                <div className="space-y-8">
                                    {/* Must-Try Section */}
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Must-Try Dishes</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FoodCard
                                                name="Kanda Bhaji & Chai"
                                                type="Veg"
                                                price="₹50-100"
                                                desc="Hot onion fritters served with steaming chai at Lohagadwadi — the perfect trekker's snack after the climb."
                                            />
                                            <FoodCard
                                                name="Pithla Bhakri"
                                                type="Veg"
                                                price="₹100-180"
                                                desc="Traditional Maharashtrian meal — spiced gram flour curry served with jowar bhakri. Simple, wholesome, and delicious."
                                            />
                                            <FoodCard
                                                name="Zunka Bhakar"
                                                type="Veg"
                                                price="₹80-150"
                                                desc="Classic rural Maharashtrian preparation of besan and spices served with bajra bhakri — a true Sahyadri comfort food."
                                            />
                                            <FoodCard
                                                name="Maggi & Corn"
                                                type="Veg"
                                                price="₹40-80"
                                                desc="Popular trekker favorites available at stalls along the trail and at Lohagadwadi. Hot and filling after the trek."
                                            />
                                        </div>
                                    </div>

                                    {/* Nearby Restaurants */}
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Food Options</h3>
                                        <div className="space-y-3">
                                            <RestaurantCard
                                                name="Lohagadwadi Stalls"
                                                location="Fort Plateau"
                                                type="Veg"
                                                price="₹50-150/person"
                                                speciality="Kanda bhaji, Maggi, Chai, Thepla"
                                            />
                                            <RestaurantCard
                                                name="Malavli Village Eateries"
                                                location="Base Village"
                                                type="Veg & Non-Veg"
                                                price="₹100-250/person"
                                                speciality="Simple Maharashtrian meals"
                                            />
                                            <RestaurantCard
                                                name="Lonavala Restaurants"
                                                location="Lonavala (11 km)"
                                                type="Multi-cuisine"
                                                price="₹200-500/person"
                                                speciality="Chikki, Fudge, Vada Pav, Multi-cuisine"
                                            />
                                        </div>
                                    </div>

                                    {/* Budget Estimate */}
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">💰 Budget Estimate (Per Person)</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <BudgetItem label="Transport" value="₹100-400" />
                                            <BudgetItem label="Entry" value="Free" />
                                            <BudgetItem label="Food" value="₹100-250" />
                                            <BudgetItem label="Total" value="₹300-750" highlight />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Safety Alerts */}
                        <section className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                            <h3 className="flex items-center gap-3 text-xl font-cinematic font-bold text-red-400 mb-4">
                                <FaExclamationTriangle />
                                Safety Alerts
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠️</span>
                                    <div>
                                        <p className="text-white font-medium">Slippery trails during monsoon</p>
                                        <p className="text-sm text-gray-400">Season: Monsoon (July-September) — wear proper grip shoes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠️</span>
                                    <div>
                                        <p className="text-white font-medium">Strong winds at Vinchu Kata</p>
                                        <p className="text-sm text-gray-400">Be cautious near edges — no railings at many points</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠️</span>
                                    <div>
                                        <p className="text-white font-medium">Heavy crowd on weekends</p>
                                        <p className="text-sm text-gray-400">Visit on weekdays for a peaceful experience</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠️</span>
                                    <div>
                                        <p className="text-white font-medium">No medical facilities on fort</p>
                                        <p className="text-sm text-gray-400">Carry a basic first aid kit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-red-500/20 flex flex-wrap gap-4 text-sm">
                                <span className="text-gray-300"><strong className="text-white">Police:</strong> Malavli PS — 112</span>
                                <span className="text-gray-300"><strong className="text-white">Medical:</strong> Lonavala Hospital — 108</span>
                            </div>
                        </section>

                        {/* Visitor Reviews */}
                        <section>
                            <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                <FaStar className="text-saffron" />
                                What Visitors Say
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <p className="italic text-xl text-gray-200 text-center mb-6">
                                    "Lohagad is the perfect blend of history, adventure, and breathtaking natural beauty."
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Top Positives</h4>
                                        <ul className="space-y-2">
                                            {['Easy and beginner-friendly trek', 'Iconic Vinchu Kata viewpoint', 'Stunning monsoon scenery', 'Well-connected by train (Malavli station)'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-green-400">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Pro Tips</h4>
                                        <ul className="space-y-2">
                                            {['Visit Visapur Fort (twin fort) on same trip', 'Start early to avoid crowds', 'Monsoon is magical but carry rain gear', 'Try local snacks at Lohagadwadi'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-saffron">→</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
                                    <span className="text-saffron text-lg">★★★★☆</span>
                                    <span className="text-white font-bold">4.6</span>
                                    <span className="text-gray-400 text-sm">(23,000+ reviews)</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Sticky Sidebar (Glassmorphism) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-28 space-y-6">
                            {/* Visiting Information Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,153,51,0.15)] rounded-2xl p-8 relative overflow-hidden">
                                {/* Saffron Glow Effect */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saffron to-transparent opacity-70"></div>

                                <h3 className="text-2xl font-cinematic font-bold text-white mb-6 flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-saffron" />
                                    Visiting Information
                                </h3>

                                <ul className="space-y-6">
                                    <InfoItem
                                        icon={FaClock}
                                        label="Timings"
                                        value="Open throughout the day. Best to trek between 6:00 AM and 6:00 PM."
                                    />
                                    <InfoItem
                                        icon={FaRupeeSign}
                                        label="Entry Fee"
                                        value="No entry fee. Free for all visitors."
                                    />
                                    <InfoItem
                                        icon={FaCalendarAlt}
                                        label="Best Time to Visit"
                                        value="Monsoon (Jun-Sep) for greenery. Winter (Oct-Feb) for pleasant climate."
                                    />
                                    <InfoItem
                                        icon={FaMountain}
                                        label="Trek Info"
                                        value="Easy trek from Malavli, ≈4 km, 1.5-2 hours. Suitable for beginners and families."
                                    />
                                </ul>

                                <button
                                    onClick={() => setShowMap(!showMap)}
                                    className="w-full mt-8 py-4 bg-saffron text-royal-black font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-saffron/20"
                                >
                                    {showMap ? 'HIDE MAP' : 'GET DIRECTIONS'}
                                </button>
                            </div>
                              <LiveWeather fortName="Lohagad" district="Pune" />
                            {/* Quick Facts Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Quick Facts</h4>
                                <div className="space-y-3 text-sm">
                                    <FactItem label="Also Known As" value="Iron Fort (लोहगड)" />
                                    <FactItem label="District" value="Pune" />
                                    <FactItem label="Taluka" value="Maval" />
                                    <FactItem label="Base Village" value="Malavli" />
                                    <FactItem label="Nearest City" value="Lonavala (≈11 km)" />
                                    <FactItem label="Elevation" value="1,033m above sea level" />
                                    <FactItem label="Time Required" value="2–3 hours" />
                                    <FactItem label="Captured By" value="Shivaji Maharaj (1648)" />
                                    <FactItem label="Twin Fort" value="Visapur Fort" />
                                    <FactItem label="Crowd Level" value="High (especially weekends)" />
                                    <FactItem label="Elderly Friendly" value="Moderate" />
                                    <FactItem label="Kids Appropriate" value="Yes" />
                                </div>
                            </div>

                            {/* Facilities Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Facilities</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <FacilityBadge label="Parking" available={true} detail="At base village" />
                                    <FacilityBadge label="Washrooms" available={true} detail="Basic at Lohagadwadi" />
                                    <FacilityBadge label="Drinking Water" available={true} detail="At Lohagadwadi" />
                                    <FacilityBadge label="Food Stalls" available={true} detail="At Lohagadwadi" />
                                    <FacilityBadge label="Mobile Network" available={true} detail="Jio, Airtel" />
                                    <FacilityBadge label="First Aid" available={false} detail="Carry your own" />
                                </div>
                            </div>

                            {/* How to Reach Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">How to Reach</h4>
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-saffron text-lg">🚂</span>
                                        <div>
                                            <p className="text-white font-bold">By Train</p>
                                            <p className="text-gray-400">Malavli Station on Mumbai-Pune line. 2 km walk to base.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-saffron text-lg">🚗</span>
                                        <div>
                                            <p className="text-white font-bold">By Road</p>
                                            <p className="text-gray-400">Via Mumbai-Pune Expressway. Take Malavli exit.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-saffron text-lg">✈️</span>
                                        <div>
                                            <p className="text-white font-bold">Nearest Airport</p>
                                            <p className="text-gray-400">Pune Airport (≈65 km)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Map Section - toggles on GET DIRECTIONS click */}
                {showMap && (
                    <div className="mt-12">
                        <LohagadMap />
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Mini Components for this page ---

// Timeline Item
const TimelineItem = ({ year, title, desc }) => (
    <div className="relative pl-8 pb-2">
        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-saffron/20 border-2 border-saffron"></div>
        <div className="absolute left-[7px] top-5 w-0.5 h-full bg-saffron/10"></div>
        <span className="text-saffron font-bold text-sm uppercase tracking-wider">{year}</span>
        <h4 className="text-lg font-bold text-white mt-1">{title}</h4>
        <p className="text-gray-400 mt-1">{desc}</p>
    </div>
);

// Glass Card for Attractions
const AttractionCard = ({ title, desc, mustSee }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-saffron/50 transition-all duration-300 group relative">
        {mustSee && (
            <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-saffron/20 text-saffron px-2 py-0.5 rounded-full border border-saffron/30">
                Must See
            </span>
        )}
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors">{title}</h4>
        <p className="text-sm text-gray-400">{desc}</p>
    </div>
);

// Food Card
const FoodCard = ({ name, type, price, desc }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-white">{name}</h4>
            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                type === 'Veg' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>{type}</span>
        </div>
        <p className="text-sm text-gray-400 mb-2">{desc}</p>
        <p className="text-saffron font-bold text-sm">{price}</p>
    </div>
);

// Restaurant Card
const RestaurantCard = ({ name, location, type, price, speciality }) => (
    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all">
        <div className="bg-saffron/10 p-3 rounded-lg text-saffron shrink-0">
            <FaUtensils size={18} />
        </div>
        <div className="flex-1">
            <h4 className="font-bold text-white">{name}</h4>
            <p className="text-xs text-gray-400">{location} • {type} • {price}</p>
            <p className="text-xs text-saffron mt-1">Speciality: {speciality}</p>
        </div>
    </div>
);

// Budget Item
const BudgetItem = ({ label, value, highlight }) => (
    <div className={`text-center p-3 rounded-lg ${highlight ? 'bg-saffron/20 border border-saffron/30' : 'bg-white/5'}`}>
        <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
        <p className={`font-bold mt-1 ${highlight ? 'text-saffron text-lg' : 'text-white'}`}>{value}</p>
    </div>
);

// Sidebar Info Item
const InfoItem = ({ icon: Icon, label, value }) => (
    <li className="flex items-start gap-4">
        <div className="bg-saffron/10 p-3 rounded-lg text-saffron shrink-0">
            <Icon size={20} />
        </div>
        <div>
            <span className="block text-sm text-saffron font-bold uppercase tracking-wider mb-1">{label}</span>
            <span className="text-white font-medium leading-snug block">{value}</span>
        </div>
    </li>
);

// Quick Fact Item
const FactItem = ({ label, value }) => (
    <div className="flex justify-between items-center py-1 border-b border-white/5">
        <span className="text-gray-400">{label}</span>
        <span className="text-white font-medium text-right">{value}</span>
    </div>
);

// Facility Badge
const FacilityBadge = ({ label, available, detail }) => (
    <div className={`p-2 rounded-lg text-center ${available ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
        <span className={`text-xs font-bold ${available ? 'text-green-400' : 'text-red-400'}`}>
            {available ? '✓' : '✗'} {label}
        </span>
        <p className="text-[10px] text-gray-400 mt-0.5">{detail}</p>
    </div>
);

export default LohagadDetail;
