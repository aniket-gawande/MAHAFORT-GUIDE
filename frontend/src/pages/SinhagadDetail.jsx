import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SinhagadMap from '../components/Sinhagadmap';
import CrowdStatusBadge from '../components/CrowdStatusBadge';
import DownloadButton from '../components/DownloadButton';
import EmergencyButton from '../components/EmergencyButton';
import BahirjiChatbot from '../components/BahirjiChatbot';
import sinhagad_hero from '../assets/sinhagad-hero.jpg';
import { FaClock, FaRupeeSign, FaCalendarAlt, FaMapMarkerAlt, FaHistory, FaMonument, FaMountain, FaShieldAlt, FaUtensils, FaExclamationTriangle, FaStar, FaHiking, FaBus, FaInfoCircle } from 'react-icons/fa';

const SinhagadDetail = () => {
    const [showMap, setShowMap] = useState(false);
    const [activeTab, setActiveTab] = useState('history');

    return (
        <div className="min-h-screen bg-royal-black text-gray-300 font-body">
            <Navbar />
            <BahirjiChatbot />

            {/* --- CINEMATIC HERO SECTION --- */}
            <div className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden">
                <img
                    src={sinhagad_hero}
                    alt="Sinhagad Fort - The Lion's Fort of Pune"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/60 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <div className="flex items-center gap-3 mb-6">
                        <FaMountain className="text-saffron text-2xl animate-pulse" />
                        <span className="text-saffron/80 font-bold tracking-[0.3em] text-xs uppercase border-b border-saffron/40 pb-1">
                            Battle of Sinhagad &bull; 1670 AD
                        </span>
                        <FaMountain className="text-saffron text-2xl animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinematic font-black text-white drop-shadow-2xl mb-4 tracking-wide">
                        SINHAGAD FORT
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-saffron to-transparent rounded-full mb-6"></div>
                    <p className="text-2xl md:text-3xl text-saffron font-bold tracking-wider font-cinematic drop-shadow-lg">
                        ?? ?? ?? ?? ??
                    </p>
                    <p className="text-sm text-gray-400 mt-3 max-w-lg">
                        "The Fort was won, but the Lion was lost" — The immortal words of Chhatrapati Shivaji Maharaj
                        upon hearing of Tanaji Malusare's supreme sacrifice
                    </p>
                </div>

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
                        <QuickStat icon="" label="Altitude" value="1,312 m (4,304 ft)" />
                        <QuickStat icon="" label="Rating" value="4.8 / 5 (25K+)" />
                        <QuickStat icon="" label="Trek" value="2.7 km  60-90 min" />
                        <QuickStat icon="" label="District" value="Pune, Maharashtra" />
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
                                Sinhagad, meaning "The Lion's Fort," stands as a sentinel guarding the city of Pune from a height
                                of 1,312 meters in the Sahyadri range. Previously known as Kondhana, this ancient hill fort's
                                history was forever transformed by the legendary Battle of Sinhagad in 1670 AD, where Tanaji
                                Malusare, a trusted Subhedar of Chhatrapati Shivaji Maharaj, made the ultimate sacrifice to
                                recapture this strategic stronghold from the Mughals. Today, it stands not only as a monument
                                to Maratha valor but as one of Pune's most beloved trekking destinations, offering breathtaking
                                panoramic views of the Sahyadri mountains and the famous Pithla Bhakri cuisine at the top.
                            </p>
                        </section>

                        {/* Content Tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-white/10 scrollbar-hide">
                            {[
                                { key: 'history', emoji: '', label: 'History' },
                                { key: 'battle', emoji: '', label: 'The Battle' },
                                { key: 'landmarks', emoji: '', label: 'Landmarks' },
                                { key: 'food', emoji: '', label: 'Food & Culture' },
                                { key: 'trek', emoji: '', label: 'Trek Guide' }
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
                                    A Fort Through the Ages
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        Originally named <strong className="text-white">Kondhana</strong>, this ancient hill fort
                                        has witnessed centuries of war, conquest, and resilience. Perched strategically above the
                                        <strong className="text-saffron"> Bhor Ghat</strong> trade route, it was a prize coveted by
                                        every power that ruled the Deccan — from the Koli chiefs who first fortified it, to the
                                        Bahmani Sultanate, the Adil Shahi dynasty, the Marathas, and the Mughals.
                                    </p>
                                    <p>
                                        Under <strong className="text-white">Chhatrapati Shivaji Maharaj</strong>, the fort
                                        became a crucial part of the Maratha defense network. Shivaji captured Kondhana in
                                        <strong className="text-saffron"> 1647 AD</strong> as one of his earliest conquests,
                                        and it changed hands multiple times during the Maratha-Mughal conflicts.
                                    </p>

                                    {/* Timeline */}
                                    <div className="mt-8 space-y-6">
                                        <TimelineItem year="~1340" title="Early Fortification" desc="Koli chieftain Nag Naik built the first fortifications on Kondhana, establishing it as a strategic hilltop outpost in the Sahyadri mountains." />
                                        <TimelineItem year="1647" title="Shivaji's Conquest" desc="A young Shivaji Maharaj captured Kondhana from the Adil Shahi dynasty — one of his earliest military victories that shaped the future of the Maratha Empire." />
                                        <TimelineItem year="1649" title="Lost to Mughals" desc="Under the Treaty of Purandar, Kondhana was surrendered to the Mughals along with other strategic forts." />
                                        <TimelineItem year="1670" title="Battle of Sinhagad" desc="The legendary night assault by Tanaji Malusare recaptured the fort. Shivaji renamed it 'Sinhagad' — The Lion's Fort — in Tanaji's honour." />
                                        <TimelineItem year="1818" title="British Era" desc="The fort fell to the British East India Company during the Third Anglo-Maratha War, ending centuries of Maratha control." />
                                    </div>

                                    <p className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-gray-200 mt-6">
                                        "Sinhagad is not merely a hill fort — it is the very embodiment of Maratha courage, sacrifice,
                                        and undying determination. Every stone on this fort whispers the story of Tanaji Malusare,
                                        the <strong className="text-saffron">Lion who gave his life so that Swarajya could live</strong>."
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* BATTLE TAB */}
                        {activeTab === 'battle' && (
                            <section className="relative border-l-2 border-red-500/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaShieldAlt className="text-saffron" />
                                    The Battle of Sinhagad — 1670 AD
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        By 1670, Kondhana fort was under the command of Mughal garrison leader
                                        <strong className="text-white"> Udaybhan Rathod</strong>, a fierce Rajput warrior loyal
                                        to the Mughals. The fort's strategic position overlooking the Bhor Ghat pass made its
                                        recapture essential for Maratha sovereignty.
                                    </p>

                                    {/* Battle Strategy Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <BattleCard
                                            icon=""
                                            title="The Ghorpad Strategy"
                                            desc="Tanaji used a monitor lizard (ghorpad) named Yashwanti to scale the steep cliff face at night. The lizard gripped the rock, and ropes were tied to it — enabling the Maratha soldiers to climb the 'unclimbable' wall."
                                        />
                                        <BattleCard
                                            icon=""
                                            title="Night Assault"
                                            desc="Under the cover of a moonless night, Tanaji led 300 Mawla soldiers up the sheer cliff from the western side — a route deemed impossible, which is exactly why no Mughal guards were posted there."
                                        />
                                        <BattleCard
                                            icon=""
                                            title="The Final Duel"
                                            desc="Tanaji confronted Udaybhan in fierce hand-to-hand combat. When his shield broke, Tanaji wrapped his turban around his arm and fought on — ultimately sacrificing his life to buy time for victory."
                                        />
                                        <BattleCard
                                            icon=""
                                            title="Suryaji's Victory"
                                            desc="After Tanaji's fall, his brother Suryaji rallied the troops, defeated the Mughal garrison, and captured the fort. He immediately lit the victory torch signal for Shivaji Maharaj."
                                        />
                                    </div>

                                    {/* The Famous Quote */}
                                    <div className="bg-gradient-to-r from-saffron/10 to-transparent p-8 rounded-xl border-l-4 border-saffron mt-6 text-center">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">When Shivaji Maharaj received the news</p>
                                        <span className="block text-4xl font-cinematic font-bold text-saffron">
                                            "?? ?? ?? ?? ??"
                                        </span>
                                        <span className="block text-lg text-white mt-3 font-medium">"The Fort was won, but the Lion was lost"</span>
                                        <span className="block text-sm opacity-50 mt-2">— Chhatrapati Shivaji Maharaj</span>
                                        <p className="mt-4 text-gray-300 text-sm italic max-w-lg mx-auto">
                                            Overwhelmed with grief, Shivaji Maharaj renamed the fort from Kondhana to
                                            <strong className="text-saffron"> Sinhagad</strong> — "The Lion's Fort" —
                                            immortalizing Tanaji's sacrifice forever.
                                        </p>
                                    </div>

                                    {/* Tanaji Profile */}
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-3"> Tanaji Malusare — The Lion of Sinhagad</h3>
                                        <div className="space-y-2 text-gray-300">
                                            <p>
                                                A childhood friend and loyal Subhedar of Shivaji Maharaj, Tanaji volunteered
                                                for the mission to recapture Kondhana even though <strong className="text-white">his
                                                own son Rayba's wedding</strong> was just days away.
                                            </p>
                                            <p>
                                                When reminded of the wedding, Tanaji is said to have declared:
                                                <span className="italic text-saffron"> "?? ??? ????? ?? ????"</span>
                                                — <span className="italic text-white">"First the wedding of Kondhana, then Rayba's"</span>.
                                            </p>
                                            <p>
                                                His ultimate sacrifice remains one of the greatest acts of valor in Maratha history.
                                            </p>
                                        </div>
                                    </div>
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
                                        title="Pune Darwaza (Main Gate)"
                                        desc="The imposing main entrance facing Pune city. Climb up for panoramic views of the city skyline, Khadakwasla Dam, and Sahyadri mountains stretching to the horizon."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Kalyan Darwaza"
                                        desc="The south-facing gate towards Kalyan village — the very route used by Tanaji Malusare's forces during the legendary night assault of 1670."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Tanaji Malusare Memorial"
                                        desc="A solemn samadhi and memorial dedicated to the brave warrior Lion of Sinhagad. A place of deep reverence for every visitor."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Kade Lot Point"
                                        desc="A dramatic steep cliff offering breathtaking, vertigo-inducing views of the valley below. Historically used for executing prisoners — now a popular viewpoint."
                                        mustSee={true}
                                    />
                                    <AttractionCard
                                        title="Tilak Bungalow"
                                        desc="The historic bungalow where freedom fighter Lokmanya Bal Gangadhar Tilak stayed during summer retreats. A place of national significance."
                                        mustSee={false}
                                    />
                                    <AttractionCard
                                        title="Dev Tak Cisterns"
                                        desc="Ancient rock-cut water cisterns with naturally cool water, even in peak summer. A marvel of Maratha-era water engineering."
                                        mustSee={false}
                                    />
                                    <AttractionCard
                                        title="Amruteshwar Temple"
                                        desc="An ancient Shiva temple atop the fort, believed to be from the pre-Maratha era. A peaceful spot for spiritual reflection."
                                        mustSee={false}
                                    />
                                    <AttractionCard
                                        title="Kondhaneshwar Temple"
                                        desc="Named after the fort's original name 'Kondhana', this ancient temple sits in a natural cave near the cliff edge with stunning views."
                                        mustSee={false}
                                    />
                                </div>
                            </section>
                        )}

                        {/* FOOD TAB */}
                        {activeTab === 'food' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaUtensils className="text-saffron" />
                                    Sinhagad Food & Culture
                                </h2>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Must-Try Dishes at the Top</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FoodCard name="Pithla Bhakri" type="Veg" price="?60-100" desc="The iconic Sinhagad dish — spiced besan curry with thick jowar/bajri bhakri. No visit is complete without this." />
                                            <FoodCard name="Kanda Bhaji" type="Veg" price="?40-60" desc="Crispy onion fritters served piping hot with chutney. The mountain air makes them taste even better!" />
                                            <FoodCard name="Matka Dahi" type="Veg" price="?30-50" desc="Thick, creamy curd set in an earthen pot (matka). The perfect cooling treat after the trek." />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Other Local Delights</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FoodCard name="Zunka Bhakri" type="Veg" price="?50-80" desc="Dry besan preparation with garlic and green chillies, served with bhakri — a staple Maratha warrior meal." />
                                            <FoodCard name="Corn (Bhutta)" type="Veg" price="?20-30" desc="Roasted over charcoal with lemon and spices. A monsoon-trek must-have." />
                                            <FoodCard name="Chai" type="Beverage" price="?10-20" desc="Hot ginger-cardamom chai at the top — nothing beats this after a steep climb." />
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4"> Budget Estimate (Per Person)</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                            <BudgetItem label="Transport" value="?100-300" />
                                            <BudgetItem label="Parking" value="?20-50" />
                                            <BudgetItem label="Entry" value="Free" />
                                            <BudgetItem label="Food" value="?100-200" />
                                            <BudgetItem label="Total" value="?250-600" highlight />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* TREK GUIDE TAB */}
                        {activeTab === 'trek' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaHiking className="text-saffron" />
                                    Trek & Travel Guide
                                </h2>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">Trek Routes</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <TrekCard
                                                icon=""
                                                title="Via Sinhagad Paytha (Main)"
                                                difficulty="Easy-Medium"
                                                distance="2.7 km"
                                                time="60-90 min"
                                                desc="The most popular route starting from Donaje/Atkarwadi village. Well-paved path with steps cut into rock. Suitable for beginners."
                                            />
                                            <TrekCard
                                                icon=""
                                                title="Via Kalyan Darwaza"
                                                difficulty="Hard"
                                                distance="3.5 km"
                                                time="90-120 min"
                                                desc="The historic route from the south side — the very path Tanaji's forces climbed. Steeper, more challenging, but deeply rewarding."
                                            />
                                        </div>
                                    </div>

                                    <div className="relative border-l-2 border-saffron/30 pl-6">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">How to Reach</h3>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                                    <FaBus className="text-saffron" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white">By Bus (PMPML)</h4>
                                                    <p className="text-gray-400 text-sm mt-1">
                                                        Regular buses from <strong className="text-white">Swargate</strong> and <strong className="text-white">Shaniwar Wada</strong> to Sinhagad Paytha (Donaje). Frequency: every 30-60 min. Cost: ?30-50.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-saffron text-xl"></span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white">By Car / Bike</h4>
                                                    <p className="text-gray-400 text-sm mt-1">
                                                        Drive via Sinhagad Ghat Road from Pune (~35 km). Steep ghat section with hairpin turns. <strong className="text-saffron">Note:</strong> Private vehicles may be restricted on weekends/holidays.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-saffron text-xl"></span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white">By Auto / Shared Jeep</h4>
                                                    <p className="text-gray-400 text-sm mt-1">
                                                        Shared jeeps available from Sinhagad Paytha to the top parking area on weekends. Cost: ?50-100 per person.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4"> Trek Essentials</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                                            {[
                                                "Comfortable trekking shoes with good grip",
                                                "Carry 1-2 litres of water",
                                                "Light raincoat during monsoon (June-Sept)",
                                                "Sunscreen and cap for summer treks",
                                                "Cash — limited network for UPI at top",
                                                "Start early morning to avoid afternoon heat",
                                                "Torch/headlamp if trekking for sunrise",
                                                "Carry a small first-aid kit"
                                            ].map((tip, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <span className="text-saffron"></span> {tip}
                                                </div>
                                            ))}
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
                                    { msg: 'Avoid Kade Lot cliff edge — no railings, extremely dangerous', season: 'All year' },
                                    { msg: 'Ghat road can be slippery in monsoon — drive carefully', season: 'June-Sept' },
                                    { msg: 'Private vehicles may be restricted on weekends', season: 'Weekends/Holidays' },
                                    { msg: 'Carry water — limited availability during hot summer', season: 'March-May' }
                                ].map((alert, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-red-400 mt-1"></span>
                                        <div>
                                            <p className="text-white font-medium">{alert.msg}</p>
                                            <p className="text-sm text-gray-400">Season: {alert.season}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-red-500/20 flex flex-wrap gap-6 text-sm">
                                <span className="text-gray-300"><strong className="text-white">Police:</strong> Haveli PS — 020-26932100</span>
                                <span className="text-gray-300"><strong className="text-white">Medical:</strong> Pune Ambulance — 108</span>
                                <span className="text-gray-300"><strong className="text-white">Emergency:</strong> 112</span>
                            </div>
                        </section>

                        {/* Visitor Reviews */}
                        <section>
                            <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                <FaStar className="text-saffron" /> What Visitors Say
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <p className="italic text-xl text-gray-200 text-center mb-6">
                                    "Sinhagad is where history comes alive — every step on this fort makes you feel the courage of Tanaji Malusare."
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Top Positives</h4>
                                        <ul className="space-y-2">
                                            {['Iconic Pithla Bhakri at the top', 'Stunning panoramic views of Pune', 'Rich Maratha history at every turn', 'Easy trek suitable for families', 'Best monsoon trekking destination'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-green-400"></span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Pro Tips</h4>
                                        <ul className="space-y-2">
                                            {['Visit on weekdays to avoid crowd', 'Start early for sunrise views', 'Carry cash — poor network at top', 'Try the Matka Dahi after your trek', 'Hire a local guide for full history'].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-saffron"></span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
                                    <span className="text-saffron text-lg"></span>
                                    <span className="text-white font-bold">4.8</span>
                                    <span className="text-gray-400 text-sm">(25,000+ reviews)</span>
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
                                    <InfoItem icon={FaClock} label="Timings" value="Open 24 hours. Best to visit 6 AM – 6 PM." />
                                    <InfoItem icon={FaRupeeSign} label="Entry Fee" value="Free. Parking: ?20-50." />
                                    <InfoItem icon={FaCalendarAlt} label="Best Time" value="Monsoon (Jun-Sep) for greenery. Winter (Oct-Feb) for clear views." />
                                    <InfoItem icon={FaMountain} label="Trek" value="2.7 km from base. 60-90 min. Medium difficulty." />
                                </ul>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <DownloadButton fortName="Sinhagad" />
                                    <EmergencyButton />
                                </div>
                                <div className="mt-4">
                                    <CrowdStatusBadge fortId="sinhagad" />
                                </div>
                                <button
                                    onClick={() => setShowMap(!showMap)}
                                    className="w-full mt-6 py-4 bg-saffron text-royal-black font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-saffron/20"
                                >
                                    {showMap ? 'HIDE MAP' : 'GET DIRECTIONS'}
                                </button>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4 flex items-center gap-2">
                                    <FaMountain className="text-orange-400" /> Quick Facts
                                </h4>
                                <div className="space-y-3 text-sm">
                                    <FactItem label="Original Name" value="Kondhana" />
                                    <FactItem label="Renamed" value="Sinhagad (1670)" />
                                    <FactItem label="District" value="Pune" />
                                    <FactItem label="Altitude" value="1,312 m (4,304 ft)" />
                                    <FactItem label="Fort Type" value="Hill Fort" />
                                    <FactItem label="Trek Distance" value="2.7 km" />
                                    <FactItem label="Trek Time" value="60-90 minutes" />
                                    <FactItem label="Difficulty" value="Easy-Medium" />
                                    <FactItem label="Famous For" value="Battle of Sinhagad" />
                                    <FactItem label="Kids Appropriate" value="Yes (ages 6+)" />
                                </div>
                            </div>

                            {/* Facilities */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Facilities</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <FacilityBadge label="Parking" available={true} detail="?20-50 at top" />
                                    <FacilityBadge label="Food Stalls" available={true} detail="Multiple at top" />
                                    <FacilityBadge label="Drinking Water" available={true} detail="Dev Tak cisterns" />
                                    <FacilityBadge label="Toilets" available={true} detail="Basic facilities" />
                                    <FacilityBadge label="Mobile Network" available={false} detail="Poor / No signal" />
                                    <FacilityBadge label="First Aid" available={false} detail="Carry your own" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                {showMap && (
                    <div className="mt-12">
                        <SinhagadMap />
                    </div>
                )}
            </div>
        </div>
    );
};

//  MINI COMPONENTS 

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

const BattleCard = ({ icon, title, desc }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 group">
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

const TrekCard = ({ icon, title, difficulty, distance, time, desc }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-saffron/50 transition-all duration-300 group">
        <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{icon}</span>
            <h4 className="text-lg font-bold text-white group-hover:text-saffron transition-colors">{title}</h4>
        </div>
        <div className="flex gap-3 mb-3 text-xs">
            <span className="bg-saffron/10 text-saffron px-2 py-1 rounded">{difficulty}</span>
            <span className="bg-white/10 text-gray-300 px-2 py-1 rounded">{distance}</span>
            <span className="bg-white/10 text-gray-300 px-2 py-1 rounded">{time}</span>
        </div>
        <p className="text-sm text-gray-400">{desc}</p>
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
            {available ? '' : ''} {label}
        </span>
        <p className="text-[10px] text-gray-400 mt-0.5">{detail}</p>
    </div>
);

export default SinhagadDetail;
