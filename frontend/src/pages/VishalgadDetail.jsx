import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VishalgadMap from '../components/VishalgadMap';
import { FaClock, FaRupeeSign, FaCalendarAlt, FaMapMarkerAlt, FaHistory, FaMonument, FaMountain, FaShieldAlt, FaUtensils, FaExclamationTriangle, FaStar } from 'react-icons/fa';
import vishalgadImage from '../assets/vishalgad-hero.jpg';

const VishalgadDetail = () => {
    const [showMap, setShowMap] = useState(false);
    const [activeTab, setActiveTab] = useState('history');

    return (
        <div className="min-h-screen bg-royal-black text-gray-300 font-body">
            <Navbar />

            {/* --- CINEMATIC HERO SECTION --- */}
            <div className="relative h-[60vh] lg:h-[70vh] w-full">
                {/* Background Image */}
                <img
                    src={vishalgadImage}
                    alt="Vishalgad Fort - The Grand Fort of Maratha Valor"
                    className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/50 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

                {/* Hero Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-cinematic font-black text-white drop-shadow-2xl mb-4">
                        VISHALGAD FORT
                    </h1>
                    <div className="h-1 w-24 bg-saffron rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-saffron font-bold tracking-wider uppercase drop-shadow-lg">
                        Where Baji Prabhu's Valor Echoes Forever
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
                                Vishalgad Fort, historically known as Khelna Fort, is one of the most emotionally stirring fortresses 
                                in Maratha history. Perched majestically in the Sahyadri ranges of Kolhapur district, Maharashtra, 
                                this grand fort is forever immortalized by the legendary Battle of Pavan Khind — where the fearless 
                                Baji Prabhu Deshpande made the ultimate sacrifice to ensure Chhatrapati Shivaji Maharaj's safe passage 
                                to this very fortress. Standing at 900 meters above sea level amidst lush Western Ghats, Vishalgad 
                                is not just stone and mortar — it is a living monument to Maratha valor, loyalty, and the undying 
                                spirit of Swarajya.
                            </p>
                        </section>

                        {/* Content Tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-white/10">
                            {['history', 'battle', 'landmarks', 'food'].map((tab) => (
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
                                    {tab === 'battle' && '🛡️ '}
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
                                    The Saga of Vishalgad
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        Vishalgad Fort, historically known as <strong className="text-saffron">Khelna Fort</strong>, 
                                        occupies a special and emotional place in the history of the Maratha Empire. Situated deep 
                                        within the Sahyadri mountain ranges, the fort was valued for its strong natural defenses, 
                                        dense forest cover, and difficult approach routes.
                                    </p>
                                    <p>
                                        Long before its association with the famous events of <strong className="text-saffron">1660</strong>, 
                                        Vishalgad served as a strategically important military outpost that helped the Marathas control 
                                        the southern regions of their kingdom. The fort was chosen as a safe refuge due to its 
                                        <strong className="text-white"> defensive strength and loyal Maratha garrison</strong>.
                                    </p>

                                    {/* Timeline */}
                                    <div className="mt-8 space-y-6">
                                        <TimelineItem 
                                            year="Pre-1660" 
                                            title="Strategic Outpost" 
                                            desc="Vishalgad served as a key military outpost controlling southern Maratha territories, valued for its impregnable natural defenses." 
                                        />
                                        <TimelineItem 
                                            year="1660" 
                                            title="The Great Escape from Panhala" 
                                            desc="Shivaji Maharaj executed a daring midnight escape from the siege of Panhala Fort by Adil Shahi forces, heading towards Vishalgad." 
                                        />
                                        <TimelineItem 
                                            year="1660" 
                                            title="Battle of Pavan Khind" 
                                            desc="Baji Prabhu Deshpande's legendary last stand at Ghodkhind to protect Shivaji Maharaj's escape route. The pass was renamed Pavan Khind (Sacred Pass)." 
                                        />
                                        <TimelineItem 
                                            year="Post-1660" 
                                            title="Fortification & Legacy" 
                                            desc="The fort was strengthened with additional bastions, water storage, and living quarters. It functioned as a refuge, supply base, and strategic defense post." 
                                        />
                                    </div>

                                    <p className="mt-6">
                                        <strong className="text-white">Historical Significance:</strong> Vishalgad's location amidst rugged terrain 
                                        and thick forests made it extremely difficult for large enemy armies to approach or lay siege. The fort 
                                        demonstrates the Marathas' mastery of <strong className="text-saffron">terrain-based warfare</strong>, 
                                        where geography itself became a powerful weapon.
                                    </p>
                                    <p>
                                        Culturally and emotionally, Vishalgad is regarded as a <strong className="text-white">sacred site of sacrifice 
                                        and patriotism</strong>. It stands as a living memorial to the ideals of duty, courage, and devotion to the motherland.
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Battle of Pavan Khind Section */}
                        {activeTab === 'battle' && (
                            <section className="relative border-l-2 border-saffron/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaShieldAlt className="text-saffron" />
                                    The Battle of Pavan Khind (1660)
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        The fort achieved <strong className="text-white">immortal fame</strong> during one of the most dramatic episodes 
                                        in Indian history — <strong className="text-saffron">Chhatrapati Shivaji Maharaj's daring escape</strong> from 
                                        the siege of Panhala Fort by the Adil Shahi forces of Bijapur.
                                    </p>
                                    <p>
                                        After being surrounded for several months, Shivaji Maharaj executed a carefully planned night escape towards 
                                        Vishalgad, which had been chosen as the safe destination due to its defensive strength and loyal Maratha garrison. 
                                        The journey was <strong className="text-white">extremely dangerous</strong>, as the Bijapuri army pursued 
                                        Shivaji Maharaj relentlessly.
                                    </p>

                                    <p className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-gray-200">
                                        "At a narrow mountain pass known as Ghodkhind, a small contingent of Maratha warriors led by 
                                        <strong className="text-saffron"> Baji Prabhu Deshpande</strong> made a legendary last stand to block the 
                                        enemy's advance. Despite being vastly outnumbered and exhausted, Baji Prabhu and his men fought with 
                                        unmatched courage and determination, holding the pass until Shivaji Maharaj safely reached Vishalgad."
                                    </p>

                                    <div className="bg-gradient-to-r from-saffron/10 to-transparent p-6 rounded-xl border-l-4 border-saffron mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-3">The Sacred Sacrifice</h3>
                                        <p>
                                            Upon hearing the <strong className="text-white">cannon fire from Vishalgad</strong> signaling Shivaji Maharaj's 
                                            safe arrival, Baji Prabhu — mortally wounded and fighting with swords in both hands — continued battling until 
                                            his last breath. His sacrifice ensured the survival of <strong className="text-saffron">Swarajya</strong>.
                                        </p>
                                        <p className="mt-3">
                                            This act of unparalleled bravery led to <strong className="text-white">Ghodkhind being renamed 
                                            Pavan Khind</strong> — meaning <em>"Sacred Pass"</em> — honoring the valor of Baji Prabhu Deshpande 
                                            and his 300 warriors who laid down their lives.
                                        </p>
                                    </div>

                                    <p className="text-center mt-8">
                                        <span className="text-2xl font-cinematic font-bold text-saffron">
                                            "पवन खिंड" — The Sacred Pass
                                        </span>
                                        <span className="block text-sm opacity-70 mt-1">
                                            Where 300 warriors held an army of 10,000 — for the dream of Swarajya
                                        </span>
                                    </p>
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
                                        title="Teen Darwaza (Main Gate)"
                                        desc="The majestic primary entrance gate of Vishalgad Fort — the historic access point used during Maratha rule with impressive stone architecture."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Amruteshwar Temple"
                                        desc="Ancient Shiva temple located inside the fort. An important religious center for fort inhabitants and visitors seeking spiritual solace."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Viewpoint over Pavan Khind"
                                        desc="Breathtaking scenic viewpoint overlooking the historic Pavan Khind pass — associated with Baji Prabhu Deshpande's immortal sacrifice."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Ruins of Fortifications"
                                        desc="Massive stone walls and bastions that once protected the fort from enemy attacks. These ruins speak volumes of Maratha engineering prowess."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Sati's Vrindavan"
                                        desc="Stone memorials commemorating historical events and individuals, reflecting the social practices of the medieval era."
                                        mustSee={false}
                                    />
                                    <AttractionCard
                                        title="Water Cisterns"
                                        desc="Ancient water storage systems built to sustain the fort's garrison during long sieges — a testament to Maratha foresight and planning."
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
                                                name="Pithla Bhakri"
                                                type="Veg"
                                                price="₹120-200"
                                                desc="Traditional Maharashtrian meal — spiced gram flour curry served with jowar bhakri. A rustic Sahyadri delicacy."
                                            />
                                            <FoodCard
                                                name="Kolhapuri Mutton"
                                                type="Non-Veg"
                                                price="₹300-450"
                                                desc="Fiery Kolhapuri-style mutton curry — famous for its bold spice mix and rich flavors. An absolute must-try!"
                                            />
                                        </div>
                                    </div>

                                    {/* Nearby Restaurants */}
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Nearby Restaurants</h3>
                                        <div className="space-y-3">
                                            <RestaurantCard
                                                name="Hotel Annapurna"
                                                location="Gajapur Village"
                                                type="Veg"
                                                price="₹120-250/person"
                                                speciality="Simple Maharashtrian meals"
                                            />
                                            <RestaurantCard
                                                name="Kolhapuri Khanaval"
                                                location="Kolhapur City"
                                                type="Non-Veg"
                                                price="₹250-450/person"
                                                speciality="Kolhapuri thali & mutton curry"
                                            />
                                        </div>
                                    </div>

                                    {/* Budget Estimate */}
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">💰 Budget Estimate (Per Person)</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <BudgetItem label="Transport" value="₹300-600" />
                                            <BudgetItem label="Entry" value="Free" />
                                            <BudgetItem label="Food" value="₹150-300" />
                                            <BudgetItem label="Total" value="₹600-1000" highlight />
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
                                        <p className="text-white font-medium">Strong winds & fog during monsoon</p>
                                        <p className="text-sm text-gray-400">Season: Monsoon (July-September)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">⚠️</span>
                                    <div>
                                        <p className="text-white font-medium">Slippery paths during rains</p>
                                        <p className="text-sm text-gray-400">Season: Monsoon — wear proper footwear</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-red-500/20 flex flex-wrap gap-4 text-sm">
                                <span className="text-gray-300"><strong className="text-white">Police:</strong> Shahuwadi PS — 112</span>
                                <span className="text-gray-300"><strong className="text-white">Medical:</strong> PHC Gajapur — 108</span>
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
                                    "Vishalgad stands as a silent witness to Maratha valor and sacrifice."
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Top Positives</h4>
                                        <ul className="space-y-2">
                                            {['Historic link to Battle of Pavan Khind', 'Easy accessibility', 'Beautiful monsoon scenery', 'Spiritual atmosphere'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-green-400">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Pro Tips</h4>
                                        <ul className="space-y-2">
                                            {['Visit Pavan Khind nearby', 'Carry rain protection in monsoon', 'Respect memorial sites', 'Start early for better views'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-saffron">→</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
                                    <span className="text-saffron text-lg">★★★★☆</span>
                                    <span className="text-white font-bold">4.5</span>
                                    <span className="text-gray-400 text-sm">(9,500+ reviews)</span>
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
                                        value="6:00 AM to 6:00 PM daily. Best visited during morning or evening."
                                    />
                                    <InfoItem
                                        icon={FaRupeeSign}
                                        label="Entry Fee"
                                        value="No entry fee. Free for all visitors."
                                    />
                                    <InfoItem
                                        icon={FaCalendarAlt}
                                        label="Best Time to Visit"
                                        value="Monsoon (Jul-Sep) for lush greenery. Winter (Oct-Feb) for pleasant climate."
                                    />
                                    <InfoItem
                                        icon={FaMountain}
                                        label="Access & Trek"
                                        value="Motorable road from Gajapur village. Easy 10-15 min walk after parking."
                                    />
                                </ul>

                                <button
                                    onClick={() => setShowMap(!showMap)}
                                    className="w-full mt-8 py-4 bg-saffron text-royal-black font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-saffron/20"
                                >
                                    {showMap ? 'HIDE MAP' : 'GET DIRECTIONS'}
                                </button>
                            </div>

                            {/* Quick Facts Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Quick Facts</h4>
                                <div className="space-y-3 text-sm">
                                    <FactItem label="Also Known As" value="Khelna Fort" />
                                    <FactItem label="District" value="Kolhapur" />
                                    <FactItem label="Nearest City" value="Kolhapur (76 km)" />
                                    <FactItem label="Elevation" value="900m above sea level" />
                                    <FactItem label="Time Required" value="2-3 hours" />
                                    <FactItem label="Famous Battle" value="Pavan Khind (1660)" />
                                    <FactItem label="Crowd Level" value="Low (weekday) / Moderate (weekend)" />
                                    <FactItem label="Elderly Friendly" value="Yes" />
                                    <FactItem label="Kids Appropriate" value="Yes" />
                                </div>
                            </div>

                            {/* Facilities Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Facilities</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <FacilityBadge label="Parking" available={true} detail="₹20-30" />
                                    <FacilityBadge label="Washrooms" available={true} detail="Basic" />
                                    <FacilityBadge label="Drinking Water" available={true} detail="Temple area" />
                                    <FacilityBadge label="Guides" available={true} detail="₹150-300" />
                                    <FacilityBadge label="Mobile Network" available={true} detail="Jio, Airtel" />
                                    <FacilityBadge label="First Aid" available={false} detail="PHC Gajapur" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Map Section - toggles on GET DIRECTIONS click */}
                {showMap && (
                    <div className="mt-12">
                        <VishalgadMap />
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

export default VishalgadDetail;
