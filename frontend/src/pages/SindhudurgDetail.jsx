import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SindhudurgMap from '../components/SindhudurgMap';
import LiveWeather from '../components/LiveWeather';
import { FaClock, FaRupeeSign, FaCalendarAlt, FaMapMarkerAlt, FaHistory, FaMonument, FaShip, FaShieldAlt, FaUtensils, FaExclamationTriangle, FaStar, FaAnchor, FaWater, FaUmbrellaBeach } from 'react-icons/fa';
import sindhudurgImage from '../assets/sindhudurg-hero.jpg';

const SindhudurgDetail = () => {
    const [showMap, setShowMap] = useState(false);
    const [activeTab, setActiveTab] = useState('history');

    return (
        <div className="min-h-screen bg-royal-black text-gray-300 font-body">
            <Navbar />

            {/* --- CINEMATIC HERO SECTION --- */}
            <div className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden">
                {/* Background Image */}
                <img
                    src={sindhudurgImage}
                    alt="Sindhudurg Fort — Ocean Fortress of Shivaji Maharaj"
                    className="w-full h-full object-cover scale-105"
                />
                {/* Cinematic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/60 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>
                {/* Subtle blue tint for ocean feel */}
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>

                {/* Hero Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <div className="flex items-center gap-3 mb-6">
                        <FaAnchor className="text-saffron text-2xl animate-pulse" />
                        <span className="text-saffron/80 font-bold tracking-[0.3em] text-xs uppercase border-b border-saffron/40 pb-1">
                            Built by Chhatrapati Shivaji Maharaj • 1664-1667 AD
                        </span>
                        <FaAnchor className="text-saffron text-2xl animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinematic font-black text-white drop-shadow-2xl mb-4 tracking-wide">
                        SINDHUDURG FORT
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-saffron to-transparent rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-saffron font-bold tracking-wider uppercase drop-shadow-lg">
                        The Invincible Ocean Fortress
                    </p>
                    <p className="text-sm text-gray-400 mt-3 max-w-lg">
                        Rising from the Arabian Sea near Malvan, this masterpiece of naval architecture 
                        houses the only temple dedicated to Chhatrapati Shivaji Maharaj
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-saffron rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* --- QUICK STATS BAR --- */}
            <div className="bg-royal-gray/80 backdrop-blur-xl border-y border-white/5">
                <div className="container mx-auto px-6 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <QuickStat icon="🏗️" label="Built" value="1664-1667 AD" />
                        <QuickStat icon="⭐" label="Rating" value="4.7 / 5 (18K+)" />
                        <QuickStat icon="🚤" label="Access" value="Boat from Malvan" />
                        <QuickStat icon="⏱️" label="Explore Time" value="2-3 Hours" />
                    </div>
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
                                Sindhudurg Fort is a colossal sea fortress rising from the Arabian Sea near Malvan, Maharashtra — 
                                a crown jewel of Maratha naval supremacy. Built between 1664 and 1667 AD by Chhatrapati Shivaji Maharaj 
                                himself on the rocky Kurte island, this fort was engineered to dominate the Konkan coastline and challenge 
                                the might of Portuguese, Dutch, British, and the Siddis of Janjira. With walls bound by an ingenious 
                                mixture of lime, jaggery, lead, and oil, a cleverly concealed entrance invisible from sea, and the only 
                                temple in all of India where Shivaji Maharaj is worshipped as a deity — Sindhudurg is not merely a fortress. 
                                It is the very soul of Maratha naval power, a monument to strategic genius, and a sacred shrine to the 
                                greatest warrior king India has ever known.
                            </p>
                        </section>

                        {/* Content Tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-white/10 scrollbar-hide">
                            {[
                                { key: 'history', emoji: '⚔️', label: 'History' },
                                { key: 'naval', emoji: '⚓', label: 'Naval Power' },
                                { key: 'landmarks', emoji: '🏛️', label: 'Landmarks' },
                                { key: 'food', emoji: '🍽️', label: 'Malvani Food' },
                                { key: 'activities', emoji: '🤿', label: 'Activities' }
                            ].map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-5 py-2.5 rounded-t-xl text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                                        activeTab === tab.key
                                            ? 'bg-saffron text-royal-black shadow-lg shadow-saffron/20'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {tab.emoji} {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* HISTORY TAB */}
                        {activeTab === 'history' && (
                            <section className="relative border-l-2 border-saffron/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaHistory className="text-saffron" />
                                    The Genesis of Ocean Power
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        During the 17th century, the Konkan coast was under constant threat from powerful foreign naval 
                                        forces — the <strong className="text-white">Portuguese, Dutch, British</strong>, and the 
                                        <strong className="text-saffron"> Siddis of Janjira</strong> dominated the Arabian Sea. 
                                        Shivaji Maharaj clearly understood that political independence on land would remain incomplete 
                                        without strong control over the seas.
                                    </p>
                                    <p>
                                        With this revolutionary vision, he laid the foundation of the <strong className="text-white">Maratha Navy</strong> and 
                                        chose the rocky <strong className="text-saffron">Kurte Island</strong> near Malvan to build Sindhudurg Fort 
                                        due to its solid natural rock base and strategic coastal location.
                                    </p>

                                    {/* Construction Details */}
                                    <div className="bg-gradient-to-r from-saffron/10 to-transparent p-6 rounded-xl border-l-4 border-saffron mt-4">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-3">🏗️ Construction Marvel</h3>
                                        <p>
                                            The construction was <strong className="text-white">personally supervised by Shivaji Maharaj</strong>. 
                                            Massive laterite stone blocks were transported and fitted together using an advanced binding mixture 
                                            of <strong className="text-saffron">lime, jaggery, lead, and oil</strong> — making the walls 
                                            extremely strong and resistant to sea erosion even after 350+ years.
                                        </p>
                                    </div>

                                    {/* Timeline */}
                                    <div className="mt-8 space-y-6">
                                        <TimelineItem year="1664" title="Foundation Laid" desc="Shivaji Maharaj personally chose Kurte Island and began construction of a massive sea fortress to establish Maratha naval dominance." />
                                        <TimelineItem year="1667" title="Fort Completed" desc="After 3 years of monumental construction effort, Sindhudurg Fort was completed with ramparts stretching over 3 km around the island." />
                                        <TimelineItem year="1667+" title="Naval Headquarters" desc="The fort became the nerve center of Maratha naval operations — housing warships, soldiers, officers, and administrators." />
                                        <TimelineItem year="Post-Shivaji" title="Continued Stronghold" desc="Under later Maratha rulers, Sindhudurg remained a critical naval base, resisting British colonial expansion along the coast." />
                                    </div>

                                    <p className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-gray-200 mt-6">
                                        "Shivaji Maharaj understood what no Indian ruler before him had — that whoever controls the sea, 
                                        controls the fate of the land. Sindhudurg Fort was the physical manifestation of that 
                                        revolutionary vision. It was not just a fort — it was the <strong className="text-saffron">birthplace 
                                        of Indian naval power</strong>."
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* NAVAL POWER TAB */}
                        {activeTab === 'naval' && (
                            <section className="relative border-l-2 border-blue-500/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaShieldAlt className="text-saffron" />
                                    Maratha Naval Supremacy
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        Sindhudurg Fort represents the <strong className="text-white">rise of indigenous naval power</strong> in 
                                        India at a time when European colonial forces dominated sea routes. The fort demonstrates Shivaji Maharaj's 
                                        strategic brilliance — his understanding that <strong className="text-saffron">coastal defense was essential 
                                        for protecting Swarajya</strong> from foreign invasions.
                                    </p>

                                    {/* Naval Strategies Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <NavalCard
                                            icon="🎯"
                                            title="Hidden Entrance"
                                            desc="The main gate was cleverly concealed and invisible from sea — enemy ships could never find the entry point, making sieges nearly impossible."
                                        />
                                        <NavalCard
                                            icon="🧱"
                                            title="Indestructible Walls"
                                            desc="Walls bound with lime, jaggery, lead, and oil — a 350+ year old formula that still resists sea erosion to this day."
                                        />
                                        <NavalCard
                                            icon="💧"
                                            title="Freshwater Wells"
                                            desc="Multiple sweetwater wells inside a sea fort — solving the biggest challenge of island fortification and enabling long-term occupation."
                                        />
                                        <NavalCard
                                            icon="⚔️"
                                            title="Counter to Siddis"
                                            desc="Strategically positioned to challenge Siddi naval dominance from nearby Janjira, ensuring Maratha control of Konkan trade routes."
                                        />
                                    </div>

                                    <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-xl mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-blue-400 mb-3">🚢 The Maratha Navy Fleet</h3>
                                        <p className="text-gray-300">
                                            Under Shivaji Maharaj's vision, the Maratha Navy grew into a formidable force with warships, 
                                            gallivats (small war vessels), and grab ships. The fleet operated from Sindhudurg and other 
                                            coastal forts, protecting merchant ships, raiding enemy vessels, and ensuring that 
                                            <strong className="text-white"> no foreign power could dominate the Konkan coast unchecked</strong>. 
                                            This naval strategy was <strong className="text-saffron">centuries ahead of its time</strong> in 
                                            Indian military history.
                                        </p>
                                    </div>

                                    <p className="text-center mt-8">
                                        <span className="text-2xl font-cinematic font-bold text-saffron">
                                            "सिंधुदुर्ग" — The Ocean Fortress
                                        </span>
                                        <span className="block text-sm opacity-70 mt-1">
                                            Where Shivaji Maharaj's dream of Indian naval supremacy was born
                                        </span>
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* LANDMARKS TAB */}
                        {activeTab === 'landmarks' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaMonument className="text-saffron" />
                                    Key Landmarks
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <AttractionCard
                                        title="Hidden Main Entrance"
                                        desc="The cleverly concealed entrance cannot be spotted from a distance — demonstrating Shivaji Maharaj's advanced defensive strategy. Invisible to enemy ships."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Shivaji Maharaj Temple"
                                        desc="The only fort in all of India with a temple dedicated to Chhatrapati Shivaji Maharaj, where his idol is worshipped daily. A sacred pilgrimage for every Indian."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Fort Walls & Bastions"
                                        desc="Massive stone walls stretching over 3 km around the island, built with lime-jaggery-lead mixture. Walk the ramparts for breathtaking Arabian Sea panoramas."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Cannons & Watchtowers"
                                        desc="Strategic artillery positions along bastions that once defended against enemy warships. Several cannons still remain in their original positions."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Freshwater Wells"
                                        desc="Remarkable engineering feat — multiple sweetwater wells inside a sea fort surrounded by saltwater. These sustained the garrison for long periods."
                                        mustSee={false}
                                    />
                                    <AttractionCard
                                        title="Shivaji's Hand & Foot Impressions"
                                        desc="Sacred imprints believed to be of Shivaji Maharaj's hand and foot, preserved inside the fort — a deeply emotional experience for visitors."
                                        mustSee={true}
                                    />
                                </div>
                            </section>
                        )}

                        {/* FOOD TAB */}
                        {activeTab === 'food' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaUtensils className="text-saffron" />
                                    Malvani Cuisine — A Feast from the Sea
                                </h2>
                                <div className="space-y-8">
                                    {/* Must Try */}
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Must-Try Dishes</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FoodCard name="Kombdi Vade" type="Non-Veg" price="₹200-300" desc="Traditional Malvani chicken curry served with crispy golden rice vade. The signature dish of the Konkan coast." />
                                            <FoodCard name="Malvani Fish Thali" type="Non-Veg" price="₹250-400" desc="Complete seafood feast — fish curry, fry, rice, bhakri, and cooling solkadi. A coastal delicacy." />
                                            <FoodCard name="Solkadi" type="Beverage" price="₹30-50" desc="Refreshing kokum-coconut milk drink — the perfect digestive and cooling companion to spicy Malvani food." />
                                        </div>
                                    </div>

                                    {/* Nearby Restaurants */}
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Best Restaurants in Malvan</h3>
                                        <div className="space-y-3">
                                            <RestaurantCard name="Athithi Bamboo" location="Malvan town (2 km)" type="Non-Veg" price="₹250-450/person" speciality="Malvani seafood thali, Kombdi vade" />
                                            <RestaurantCard name="Hotel Chaitanya" location="Malvan" type="Both" price="₹200-400/person" speciality="Authentic Malvani cuisine" />
                                            <RestaurantCard name="Swaad Malvan" location="Malvan town" type="Non-Veg" price="₹200-350/person" speciality="Fresh fish thali and Malvani curries" />
                                        </div>
                                    </div>

                                    {/* Budget */}
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">💰 Budget Estimate (Per Person)</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                            <BudgetItem label="Transport" value="₹400-600" />
                                            <BudgetItem label="Boat Fare" value="₹50-80" />
                                            <BudgetItem label="Entry" value="Free" />
                                            <BudgetItem label="Food" value="₹250-400" />
                                            <BudgetItem label="Total" value="₹800-1300" highlight />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* ACTIVITIES TAB */}
                        {activeTab === 'activities' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaUmbrellaBeach className="text-saffron" />
                                    Nearby Activities & Experiences
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ActivityCard
                                        emoji="🤿"
                                        title="Scuba Diving & Snorkeling"
                                        location="Tarkarli Beach (6 km)"
                                        desc="Crystal-clear waters of Tarkarli offer some of the best scuba diving and snorkeling experiences in Maharashtra. See vibrant coral reefs and marine life."
                                        price="₹500-2500"
                                    />
                                    <ActivityCard
                                        emoji="🏖️"
                                        title="Tarkarli Beach Visit"
                                        location="Tarkarli (6 km from Malvan)"
                                        desc="One of Maharashtra's most beautiful beaches with white sand and clear turquoise water. Perfect for swimming, sunbathing, and water sports."
                                        price="Free"
                                    />
                                    <ActivityCard
                                        emoji="🚤"
                                        title="Dolphin Safari"
                                        location="Malvan coast"
                                        desc="Early morning boat rides to spot playful dolphins in their natural habitat. A magical experience on the Arabian Sea."
                                        price="₹300-500"
                                    />
                                    <ActivityCard
                                        emoji="🛶"
                                        title="Kayaking & Parasailing"
                                        location="Devbag Beach"
                                        desc="Adventure water sports at the confluence of Karli River and Arabian Sea. Kayaking through mangroves is a unique experience."
                                        price="₹400-1500"
                                    />
                                    <ActivityCard
                                        emoji="🐚"
                                        title="Tsunami Island"
                                        location="Near Devbag (8 km)"
                                        desc="A naturally formed sandbar island accessible during low tide. Walk through shallow sea to reach this unique geological formation."
                                        price="₹200-400"
                                    />
                                    <ActivityCard
                                        emoji="🏛️"
                                        title="Rock Garden Malvan"
                                        location="Malvan (3 km)"
                                        desc="Beautiful garden with rock formations overlooking the sea. Perfect sunset spot with panoramic views of the coastline."
                                        price="₹10-20"
                                    />
                                </div>

                                {/* Accommodation */}
                                <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">🏨 Where to Stay</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                            <h4 className="font-bold text-white">Hotels in Malvan</h4>
                                            <p className="text-sm text-gray-400 mt-1">1-3 km from jetty • ₹800-3,000/night</p>
                                            <p className="text-xs text-saffron mt-1">AC rooms, Restaurant, Parking</p>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                            <h4 className="font-bold text-white">Tarkarli Beach Resorts</h4>
                                            <p className="text-sm text-gray-400 mt-1">6 km from Malvan • ₹1,500-5,000/night</p>
                                            <p className="text-xs text-saffron mt-1">Beach view, Water sports, Restaurant</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Safety Alerts — always visible */}
                        <section className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                            <h3 className="flex items-center gap-3 text-xl font-cinematic font-bold text-red-400 mb-4">
                                <FaExclamationTriangle /> Safety Alerts
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { msg: 'Boat services depend on sea conditions & weather', season: 'All year' },
                                    { msg: 'Always wear life jackets during the boat ride', season: 'All year' },
                                    { msg: 'Uneven surfaces inside — wear proper footwear', season: 'All year' },
                                    { msg: 'Boat services SUSPENDED during monsoon', season: 'June-August' }
                                ].map((alert, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1">⚠️</span>
                                        <div>
                                            <p className="text-white font-medium">{alert.msg}</p>
                                            <p className="text-sm text-gray-400">Season: {alert.season}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-red-500/20 flex flex-wrap gap-6 text-sm">
                                <span className="text-gray-300"><strong className="text-white">Police:</strong> Malvan PS — +91-2365-252033</span>
                                <span className="text-gray-300"><strong className="text-white">Medical:</strong> Malvan Hospital — +91-2365-252100</span>
                                <span className="text-gray-300"><strong className="text-white">Coastal Emergency:</strong> 108</span>
                            </div>
                        </section>

                        {/* Visitor Reviews */}
                        <section>
                            <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                <FaStar className="text-saffron" /> What Visitors Say
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <p className="italic text-xl text-gray-200 text-center mb-6">
                                    "Sindhudurg Fort reflects the naval genius of Chhatrapati Shivaji Maharaj and the pride of Maratha history."
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Top Positives</h4>
                                        <ul className="space-y-2">
                                            {['Built by Chhatrapati Shivaji Maharaj', 'Strong sea fort architecture', 'Hidden entrance design', 'Scenic boat ride', 'Historic & spiritual significance'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-green-400">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Pro Tips</h4>
                                        <ul className="space-y-2">
                                            {['Visit early morning for cooler weather', 'Carry water and a cap/hat', 'Avoid monsoon (boats stop)', 'Hire a guide for full history', 'Respect the heritage site'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-saffron">→</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
                                    <span className="text-saffron text-lg">★★★★★</span>
                                    <span className="text-white font-bold">4.7</span>
                                    <span className="text-gray-400 text-sm">(18,000+ reviews)</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-28 space-y-6">

                            {/* Visiting Information Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,153,51,0.15)] rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saffron to-transparent opacity-70"></div>
                                <h3 className="text-2xl font-cinematic font-bold text-white mb-6 flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-saffron" /> Visiting Information
                                </h3>
                                <ul className="space-y-6">
                                    <InfoItem icon={FaClock} label="Timings" value="8:00 AM to 6:00 PM. Boat: 8 AM – 5 PM." />
                                    <InfoItem icon={FaRupeeSign} label="Entry Fee" value="No entry fee. Boat: ₹50-80 per person (return)." />
                                    <InfoItem icon={FaCalendarAlt} label="Best Time" value="Winter (Oct-Feb) for pleasant weather. Avoid monsoon — boats suspended." />
                                    <InfoItem icon={FaShip} label="Access" value="Only by boat from Malvan Jetty. 10-15 min ride. Life jackets provided." />
                                </ul>
                                <button
                                    onClick={() => setShowMap(!showMap)}
                                    className="w-full mt-8 py-4 bg-saffron text-royal-black font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-saffron/20"
                                >
                                    {showMap ? 'HIDE MAP' : 'GET DIRECTIONS'}
                                </button>
                            </div>
                              <LiveWeather fortName="Sindhudurg" district="Sindhudurg" />
                            {/* Quick Facts */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4 flex items-center gap-2">
                                    <FaWater className="text-blue-400" /> Quick Facts
                                </h4>
                                <div className="space-y-3 text-sm">
                                    <FactItem label="Builder" value="Chhatrapati Shivaji Maharaj" />
                                    <FactItem label="Built" value="1664-1667 AD" />
                                    <FactItem label="District" value="Sindhudurg" />
                                    <FactItem label="Nearest Town" value="Malvan (2 km)" />
                                    <FactItem label="Fort Type" value="Sea Fort (Island)" />
                                    <FactItem label="Rampart Length" value="~3 km" />
                                    <FactItem label="Time Required" value="2-3 hours" />
                                    <FactItem label="Unique Feature" value="Shivaji Maharaj Temple" />
                                    <FactItem label="Crowd" value="Low (weekday) / Moderate (weekend)" />
                                    <FactItem label="Kids Appropriate" value="Yes" />
                                </div>
                            </div>

                            {/* Facilities */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Facilities</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <FacilityBadge label="Parking" available={true} detail="₹20-40 at Jetty" />
                                    <FacilityBadge label="Boat Service" available={true} detail="₹50-80 return" />
                                    <FacilityBadge label="Life Jackets" available={true} detail="Provided" />
                                    <FacilityBadge label="Guides" available={true} detail="₹200-400/group" />
                                    <FacilityBadge label="Mobile Network" available={true} detail="Jio, Airtel, Vi" />
                                    <FacilityBadge label="First Aid" available={true} detail="Malvan Hospital" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                {showMap && (
                    <div className="mt-12">
                        <SindhudurgMap />
                    </div>
                )}
            </div>
        </div>
    );
};

// ─── MINI COMPONENTS ─────────────────────────────────────────────

const QuickStat = ({ icon, label, value }) => (
    <div className="flex items-center gap-3 px-4 py-2">
        <span className="text-2xl">{icon}</span>
        <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</p>
            <p className="text-white font-bold text-sm">{value}</p>
        </div>
    </div>
);

const TimelineItem = ({ year, title, desc }) => (
    <div className="relative pl-8 pb-2">
        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-saffron/20 border-2 border-saffron"></div>
        <div className="absolute left-[7px] top-5 w-0.5 h-full bg-saffron/10"></div>
        <span className="text-saffron font-bold text-sm uppercase tracking-wider">{year}</span>
        <h4 className="text-lg font-bold text-white mt-1">{title}</h4>
        <p className="text-gray-400 mt-1">{desc}</p>
    </div>
);

const NavalCard = ({ icon, title, desc }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group">
        <div className="text-3xl mb-3">{icon}</div>
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors">{title}</h4>
        <p className="text-sm text-gray-400">{desc}</p>
    </div>
);

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

const FoodCard = ({ name, type, price, desc }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-white">{name}</h4>
            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                type === 'Veg' ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : type === 'Beverage' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>{type}</span>
        </div>
        <p className="text-sm text-gray-400 mb-2">{desc}</p>
        <p className="text-saffron font-bold text-sm">{price}</p>
    </div>
);

const RestaurantCard = ({ name, location, type, price, speciality }) => (
    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all">
        <div className="bg-saffron/10 p-3 rounded-lg text-saffron shrink-0"><FaUtensils size={18} /></div>
        <div className="flex-1">
            <h4 className="font-bold text-white">{name}</h4>
            <p className="text-xs text-gray-400">{location} • {type} • {price}</p>
            <p className="text-xs text-saffron mt-1">Speciality: {speciality}</p>
        </div>
    </div>
);

const ActivityCard = ({ emoji, title, location, desc, price }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-saffron/50 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{emoji}</span>
            <div>
                <h4 className="text-lg font-bold text-white group-hover:text-saffron transition-colors">{title}</h4>
                <p className="text-xs text-gray-500">{location}</p>
            </div>
        </div>
        <p className="text-sm text-gray-400 mb-2">{desc}</p>
        <p className="text-saffron font-bold text-sm">{price}</p>
    </div>
);

const BudgetItem = ({ label, value, highlight }) => (
    <div className={`text-center p-3 rounded-lg ${highlight ? 'bg-saffron/20 border border-saffron/30' : 'bg-white/5'}`}>
        <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
        <p className={`font-bold mt-1 ${highlight ? 'text-saffron text-lg' : 'text-white'}`}>{value}</p>
    </div>
);

const InfoItem = ({ icon: Icon, label, value }) => (
    <li className="flex items-start gap-4">
        <div className="bg-saffron/10 p-3 rounded-lg text-saffron shrink-0"><Icon size={20} /></div>
        <div>
            <span className="block text-sm text-saffron font-bold uppercase tracking-wider mb-1">{label}</span>
            <span className="text-white font-medium leading-snug block">{value}</span>
        </div>
    </li>
);

const FactItem = ({ label, value }) => (
    <div className="flex justify-between items-center py-1 border-b border-white/5">
        <span className="text-gray-400">{label}</span>
        <span className="text-white font-medium text-right">{value}</span>
    </div>
);

const FacilityBadge = ({ label, available, detail }) => (
    <div className={`p-2 rounded-lg text-center ${available ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
        <span className={`text-xs font-bold ${available ? 'text-green-400' : 'text-red-400'}`}>
            {available ? '✓' : '✗'} {label}
        </span>
        <p className="text-[10px] text-gray-400 mt-0.5">{detail}</p>
    </div>
);

export default SindhudurgDetail;
