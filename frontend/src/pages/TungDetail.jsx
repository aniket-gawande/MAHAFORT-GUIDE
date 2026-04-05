import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TungMap from '../components/TungMap';
import LiveWeather from '../components/LiveWeather';
import tungImage from '../assets/tung-hero.jpg';
import { FaClock, FaRupeeSign, FaCalendarAlt, FaMapMarkerAlt, FaHistory, FaMonument, FaMountain, FaShieldAlt, FaUtensils, FaExclamationTriangle, FaStar, FaWater } from 'react-icons/fa';

const TungDetail = () => {
    const [showMap, setShowMap] = useState(false);
    const [activeTab, setActiveTab] = useState('history');

    return (
        <div className="min-h-screen bg-royal-black text-gray-300 font-body">
            <Navbar />

            {/* --- CINEMATIC HERO SECTION --- */}
            <div className="relative h-[60vh] lg:h-[70vh] w-full">
                {/* Background Image */}
                <img
                    src={tungImage}
                    alt="Tung Fort - The Sentinel of Pawna Lake"
                    className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/50 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

                {/* Hero Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-cinematic font-black text-white drop-shadow-2xl mb-4">
                        TUNG FORT
                    </h1>
                    <div className="h-1 w-24 bg-saffron rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-saffron font-bold tracking-wider uppercase drop-shadow-lg">
                        The Sentinel of Pawna Lake
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
                                Tung Fort, also known as Kathingad, is a small but strategically significant hill fort 
                                located near Pawna Lake in the Maval region of Pune district, Maharashtra. Standing on 
                                a narrow and steep hill at 1,075 meters above sea level, the fort overlooks the 
                                Pawna–Maval region and was mainly used as a watch and control fort during the Maratha 
                                period. Surrounded by water on three sides after the construction of the Pawna Dam, 
                                Tung Fort offers commanding panoramic views of nearby forts such as Tikona, Lohagad 
                                and Visapur — making it a hidden gem for trekkers and history enthusiasts seeking 
                                an adventurous experience away from the crowds.
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
                                    The Saga of Tung Fort
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        Tung Fort, historically known as <strong className="text-saffron">Kathingad</strong>, 
                                        was originally constructed during the period of the Adil Shahi dynasty of Bijapur. 
                                        Unlike the grand fortress-cities of the Sahyadri, Tung was purpose-built as a 
                                        <strong className="text-white"> strategically placed watch fort</strong> — perched 
                                        on a narrow and steep hilltop that made it ideal for surveillance of the surrounding 
                                        Pawna and Maval valleys.
                                    </p>
                                    <p>
                                        During the expansion of Maratha power in the Maval region, Tung Fort came under 
                                        the control of <strong className="text-saffron">Chhatrapati Shivaji Maharaj in the mid-17th century</strong>. 
                                        The fort was mainly used for surveillance and protection of important trade and 
                                        movement routes, its elevated position enabling effective monitoring of surrounding 
                                        forts and troop movement in the region.
                                    </p>

                                    {/* Timeline */}
                                    <div className="mt-8 space-y-6">
                                        <TimelineItem 
                                            year="Pre-Maratha" 
                                            title="Adil Shahi Origins" 
                                            desc="Tung Fort (Kathingad) was originally constructed by the Adil Shahi dynasty of Bijapur as a watch post to monitor the vital Pawna-Maval corridor." 
                                        />
                                        <TimelineItem 
                                            year="Mid-17th Century" 
                                            title="Under Maratha Control" 
                                            desc="The fort came under Chhatrapati Shivaji Maharaj's control during the expansion of Maratha power in the Maval region, becoming part of the Maratha defensive network." 
                                        />
                                        <TimelineItem 
                                            year="Maratha Era" 
                                            title="Surveillance & Defense" 
                                            desc="Used as a military observation post supporting nearby strategic forts — Lohagad, Visapur, and Tikona — by providing early warning and regional control." 
                                        />
                                        <TimelineItem 
                                            year="Modern Era" 
                                            title="Pawna Dam & Trekking" 
                                            desc="After the construction of Pawna Dam, the fort became surrounded by water on three sides, adding to its dramatic beauty and making it a popular trekking destination." 
                                        />
                                    </div>

                                    <p className="mt-6">
                                        <strong className="text-white">Strategic Role:</strong> Tung Fort is important as a 
                                        <strong className="text-saffron"> military observation post</strong> rather than a major 
                                        battlefield fort. It formed part of the Maratha defensive network in the Maval region, 
                                        providing eyes and ears for the larger forts in the region.
                                    </p>
                                    <p>
                                        The fort's narrow summit and steep natural defenses meant it was never designed as a 
                                        large residential or administrative center, but its <strong className="text-white">elevated 
                                        vantage point</strong> made it invaluable for monitoring troop movements and trade routes 
                                        through the Western Ghats.
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Trek Section */}
                        {activeTab === 'trek' && (
                            <section className="relative border-l-2 border-saffron/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaMountain className="text-saffron" />
                                    Trek to Tung Fort
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        The trek to Tung Fort is a <strong className="text-saffron">short but thrilling adventure</strong> that 
                                        rewards you with panoramic views of Pawna Lake and the surrounding Sahyadri forts. The trail is 
                                        compact but steep, making it a moderate challenge that's perfect for those seeking excitement 
                                        beyond easy treks.
                                    </p>

                                    <div className="bg-gradient-to-r from-saffron/10 to-transparent p-6 rounded-xl border-l-4 border-saffron mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-3">Trail from Tungwadi Village</h3>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="text-gray-400">Distance:</span>
                                                <span className="text-white font-bold ml-2">≈2.5 km one way</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">Duration:</span>
                                                <span className="text-white font-bold ml-2">1.5–2 hours ascent</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">Difficulty:</span>
                                                <span className="text-yellow-400 font-bold ml-2">Moderate</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">Elevation:</span>
                                                <span className="text-white font-bold ml-2">1,075 m ASL</span>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-300">
                                            The standard approach begins from Tungwadi village near Pawna Lake. The route is short but 
                                            steep and involves climbing rock-cut steps and narrow paths close to the summit. The final 
                                            section is exposed and requires careful footing, especially during monsoon season.
                                        </p>
                                    </div>

                                    {/* Difficulty Warning */}
                                    <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl mt-4">
                                        <h4 className="text-yellow-400 font-bold mb-2">⚠️ Trek Difficulty Note</h4>
                                        <p className="text-sm text-gray-300">
                                            The final ascent involves steep rock-cut steps and exposed sections. This is <strong className="text-white">not 
                                            recommended for beginners during monsoon</strong> due to slippery rock surfaces. The narrow ridge 
                                            near the top requires careful footing.
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">Best Time to Trek</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                                <h4 className="text-saffron font-bold mb-2">❄️ Post-Monsoon & Winter (Oct–Feb)</h4>
                                                <p className="text-sm text-gray-400">Clear visibility, safer trails, and stunning views of Pawna Lake. The best season for photography and comfortable trekking.</p>
                                            </div>
                                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                                <h4 className="text-saffron font-bold mb-2">🌧️ Monsoon (June–September)</h4>
                                                <p className="text-sm text-gray-400">Scenic green surroundings and misty views but extremely slippery rock-cut steps. Only for experienced trekkers.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 bg-white/5 border border-white/10 p-6 rounded-xl">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">🎒 Trek Essentials</h3>
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            {['Sturdy trekking shoes (grip sole)', 'Water (2L minimum)', 'Light snacks & energy bars', 'Rain gear (monsoon)', 
                                              'Sunscreen & hat (summer)', 'First aid kit', 'Torch/flashlight', 'Gloves for rock sections'].map((item, i) => (
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
                                        title="Hanuman Temple"
                                        desc="Small temple dedicated to Lord Hanuman located near the summit of the fort. Used by soldiers and visitors as a place of worship while stationed on the fort."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Rock-cut Steps"
                                        desc="Steep rock-cut staircase leading to the upper fort area — the only controlled access route to the fort, designed to slow down attackers during siege."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Water Cisterns"
                                        desc="Rock-cut water tanks located on the fort plateau. Provided essential water supply for the small garrison stationed on the fort during Maratha times."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Fortification Walls"
                                        desc="Remains of defensive stone walls along the narrow ridge of the fort. Protected the summit and secured the only approach to the fort."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Summit Viewpoint"
                                        desc="The narrow summit offers 360° panoramic views of Pawna Lake, Tikona Fort, Lohagad, and Visapur — one of the most rewarding viewpoints in the Maval region."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Pawna Lake View"
                                        desc="Stunning views of Pawna Lake from the fort, especially beautiful during sunrise and monsoon when the lake is at full capacity and the fort appears island-like."
                                        mustSee={true}
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
                                                name="Misal Pav"
                                                type="Veg"
                                                price="₹60-120"
                                                desc="Spicy sprouted moth beans curry topped with farsan, onion, and lemon — a classic Maharashtrian breakfast near Pawna."
                                            />
                                            <FoodCard
                                                name="Pithla Bhakri"
                                                type="Veg"
                                                price="₹100-180"
                                                desc="Traditional spiced gram flour curry served with jowar or bajra bhakri — simple, wholesome, and filling after the trek."
                                            />
                                            <FoodCard
                                                name="Vada Pav"
                                                type="Veg"
                                                price="₹20-40"
                                                desc="Mumbai's iconic street food — spiced potato fritter in a pav bun with chutneys. Available at roadside stalls near Pawna."
                                            />
                                            <FoodCard
                                                name="Maggi & Chai"
                                                type="Veg"
                                                price="₹40-80"
                                                desc="Classic trekker combo available at camping sites and small stalls near Pawna Lake. Perfect after a trek."
                                            />
                                        </div>
                                    </div>

                                    {/* Nearby Food Options */}
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Food Options</h3>
                                        <div className="space-y-3">
                                            <RestaurantCard
                                                name="Pawna Lake Camping Sites"
                                                location="Near Pawna Lake"
                                                type="Veg & Non-Veg"
                                                price="₹300-800/person (with camping)"
                                                speciality="BBQ, campfire meals, breakfast"
                                            />
                                            <RestaurantCard
                                                name="Tungwadi Village Stalls"
                                                location="Base Village"
                                                type="Veg"
                                                price="₹50-150/person"
                                                speciality="Tea, Maggi, basic snacks"
                                            />
                                            <RestaurantCard
                                                name="Lonavala Restaurants"
                                                location="Lonavala (12 km)"
                                                type="Multi-cuisine"
                                                price="₹200-500/person"
                                                speciality="Chikki, Fudge, Multi-cuisine dining"
                                            />
                                        </div>
                                    </div>

                                    {/* Budget Estimate */}
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">💰 Budget Estimate (Per Person)</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <BudgetItem label="Transport" value="₹100-400" />
                                            <BudgetItem label="Entry" value="Free" />
                                            <BudgetItem label="Food" value="₹100-300" />
                                            <BudgetItem label="Total" value="₹300-800" highlight />
                                        </div>
                                    </div>

                                    {/* Pawna Lake Camping */}
                                    <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-6 rounded-xl border-l-4 border-blue-500">
                                        <h3 className="text-xl font-cinematic font-bold text-blue-400 mb-3 flex items-center gap-2">
                                            <FaWater /> Pawna Lake Camping
                                        </h3>
                                        <p className="text-gray-300 text-sm">
                                            Combine your Tung Fort trek with an overnight camping experience at Pawna Lake! 
                                            Multiple camping operators offer tent stays with BBQ dinner, campfire, and breakfast — 
                                            typically priced at ₹800–1500 per person. The lakeside setting with views of Tung Fort 
                                            and Tikona makes for a magical weekend getaway.
                                        </p>
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
                                        <p className="text-white font-medium">Extremely slippery rock-cut steps in monsoon</p>
                                        <p className="text-sm text-gray-400">Season: Monsoon (July-September) — high risk of slipping</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠️</span>
                                    <div>
                                        <p className="text-white font-medium">Exposed & narrow ridge near summit</p>
                                        <p className="text-sm text-gray-400">Strong winds — avoid during storms or heavy rain</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠️</span>
                                    <div>
                                        <p className="text-white font-medium">No facilities on the fort</p>
                                        <p className="text-sm text-gray-400">No water, food, or shelter — carry your own supplies</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠️</span>
                                    <div>
                                        <p className="text-white font-medium">Not suitable for young children</p>
                                        <p className="text-sm text-gray-400">Steep sections require careful climbing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-red-500/20 flex flex-wrap gap-4 text-sm">
                                <span className="text-gray-300"><strong className="text-white">Police:</strong> Maval PS — 112</span>
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
                                    "A hidden gem near Pawna Lake with stunning panoramic views — short trek, big reward!"
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Top Positives</h4>
                                        <ul className="space-y-2">
                                            {['Stunning Pawna Lake panorama', '360° views of Tikona, Lohagad, Visapur', 'Short and adventurous trek', 'Less crowded than nearby forts'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-green-400">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Pro Tips</h4>
                                        <ul className="space-y-2">
                                            {['Combine with Pawna Lake camping', 'Start early morning for best views', 'Avoid monsoon unless experienced', 'Carry enough water — no source on fort'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-saffron">→</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
                                    <span className="text-saffron text-lg">★★★★☆</span>
                                    <span className="text-white font-bold">4.4</span>
                                    <span className="text-gray-400 text-sm">(3,200+ reviews)</span>
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
                                        value="Post-monsoon & Winter (Oct-Feb) for clear views. Monsoon is scenic but risky."
                                    />
                                    <InfoItem
                                        icon={FaMountain}
                                        label="Trek Info"
                                        value="Moderate trek from Tungwadi, ≈2.5 km, 1.5-2 hrs. Steep rock-cut steps near top."
                                    />
                                </ul>

                                <button
                                    onClick={() => setShowMap(!showMap)}
                                    className="w-full mt-8 py-4 bg-saffron text-royal-black font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-saffron/20"
                                >
                                    {showMap ? 'HIDE MAP' : 'GET DIRECTIONS'}
                                </button>
                            </div>
                              <LiveWeather fortName="Tung" district="Pune" />
                            {/* Quick Facts Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Quick Facts</h4>
                                <div className="space-y-3 text-sm">
                                    <FactItem label="Also Known As" value="Kathingad (कठिणगड)" />
                                    <FactItem label="District" value="Pune" />
                                    <FactItem label="Taluka" value="Maval" />
                                    <FactItem label="Base Village" value="Tungwadi" />
                                    <FactItem label="Nearest City" value="Lonavala (≈12 km)" />
                                    <FactItem label="Elevation" value="1,075m above sea level" />
                                    <FactItem label="Time Required" value="2–3 hours" />
                                    <FactItem label="Built By" value="Adil Shahi dynasty" />
                                    <FactItem label="Later Ruler" value="Maratha Empire" />
                                    <FactItem label="Nearby Lake" value="Pawna Lake" />
                                    <FactItem label="Crowd Level" value="Moderate" />
                                    <FactItem label="Kids Appropriate" value="No (steep sections)" />
                                </div>
                            </div>

                            {/* Facilities Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Facilities</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <FacilityBadge label="Parking" available={true} detail="At Tungwadi" />
                                    <FacilityBadge label="Washrooms" available={false} detail="None on fort" />
                                    <FacilityBadge label="Drinking Water" available={false} detail="Carry your own" />
                                    <FacilityBadge label="Food Stalls" available={false} detail="At base only" />
                                    <FacilityBadge label="Mobile Network" available={true} detail="Patchy signal" />
                                    <FacilityBadge label="First Aid" available={false} detail="Carry your own" />
                                </div>
                            </div>

                            {/* How to Reach Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">How to Reach</h4>
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-saffron text-lg">🚗</span>
                                        <div>
                                            <p className="text-white font-bold">By Road</p>
                                            <p className="text-gray-400">Via Lonavala → Pawna Dam Road → Tungwadi. Private vehicle recommended.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-saffron text-lg">🚂</span>
                                        <div>
                                            <p className="text-white font-bold">By Train</p>
                                            <p className="text-gray-400">Lonavala Station (12 km), then auto/cab to Tungwadi.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-saffron text-lg">✈️</span>
                                        <div>
                                            <p className="text-white font-bold">Nearest Airport</p>
                                            <p className="text-gray-400">Pune Airport (≈70 km)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Nearby Attractions Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Nearby Attractions</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-gray-300">🏰 Tikona Fort</span>
                                        <span className="text-saffron font-medium">≈8 km</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-gray-300">🏰 Lohagad Fort</span>
                                        <span className="text-saffron font-medium">≈10 km</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-gray-300">🏰 Visapur Fort</span>
                                        <span className="text-saffron font-medium">≈12 km</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                                        <span className="text-gray-300">🏕️ Pawna Lake Camping</span>
                                        <span className="text-saffron font-medium">≈2 km</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-300">🏙️ Lonavala</span>
                                        <span className="text-saffron font-medium">≈12 km</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Map Section - toggles on GET DIRECTIONS click */}
                {showMap && (
                    <div className="mt-12">
                        <TungMap />
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

export default TungDetail;
