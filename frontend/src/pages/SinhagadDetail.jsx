import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SinhagadMap from '../components/Sinhagadmap';
import { FaClock, FaRupeeSign, FaCalendarAlt, FaMapMarkerAlt, FaHistory, FaMonument, FaMountain, FaShieldAlt, FaUtensils, FaExclamationTriangle, FaStar, FaHiking, FaRoute } from 'react-icons/fa';
import sinhagadImage from '../assets/sinhagad-fort.jpg';

const SinhagadDetail = () => {
    const [showMap, setShowMap] = useState(false);
    const [activeTab, setActiveTab] = useState('history');

    return (
        <div className="min-h-screen bg-royal-black text-gray-300 font-body">
            <Navbar />

            {/* === CINEMATIC HERO SECTION === */}
            <div className="relative h-[60vh] lg:h-[75vh] w-full overflow-hidden">
                <img
                    src={sinhagadImage}
                    alt="Sinhagad Fort — The Lion's Fort"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/60 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-amber-900/15 mix-blend-overlay"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <div className="flex items-center gap-3 mb-6">
                        <FaMountain className="text-saffron text-2xl animate-pulse" />
                        <span className="text-saffron/80 font-bold tracking-[0.3em] text-xs uppercase border-b border-saffron/40 pb-1">
                            Battle of Sinhagad • 1670 AD • Tanaji Malusare
                        </span>
                        <FaMountain className="text-saffron text-2xl animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinematic font-black text-white drop-shadow-2xl mb-4 tracking-wide">
                        SINHAGAD FORT
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-saffron to-transparent rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-saffron font-bold tracking-wider uppercase drop-shadow-lg">
                        The Legend of the Lion's Fort
                    </p>
                    <p className="text-sm text-gray-400 mt-3 max-w-lg">
                        Where Tanaji Malusare sacrificed his life to recapture this fortress from the Mughals —
                        "Gad ala pan Sinha gela" (Fort captured, but the Lion was lost)
                    </p>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-saffron rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* === QUICK STATS BAR === */}
            <div className="bg-royal-gray/80 backdrop-blur-xl border-y border-white/5">
                <div className="container mx-auto px-6 py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <QuickStat icon="🦁" label="Named After" value="Sinh (Lion) + Gad (Fort)" />
                        <QuickStat icon="⭐" label="Rating" value="4.5 / 5 (45K+)" />
                        <QuickStat icon="🥾" label="Trek" value="1.5-3 hrs (Easy-Hard)" />
                        <QuickStat icon="📍" label="Location" value="30 km from Pune" />
                    </div>
                </div>
            </div>

            {/* === MAIN CONTENT CONTAINER === */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* LEFT COLUMN */}
                    <div className="lg:w-2/3 space-y-12">

                        {/* Introduction */}
                        <section>
                            <p className="text-lg leading-relaxed text-gray-300 first-letter:text-5xl first-letter:font-cinematic first-letter:text-saffron first-letter:mr-2 first-letter:float-left">
                                Sinhagad Fort, literally meaning "Lion's Fort," is one of the most iconic hill fortresses
                                in the Sahyadri ranges near Pune, Maharashtra — standing at an imposing 1,312 meters above sea level.
                                This strategic stronghold has witnessed some of the most legendary moments in Maratha history,
                                immortalized by the daring midnight raid of Tanaji Malusare in 1670 AD. Originally known as
                                Kondhana, the fort was renamed Sinhagad after Tanaji's supreme sacrifice. Today it rewards
                                trekkers with panoramic vistas of the Sahyadris, authentic Maharashtrian food at the summit,
                                and a profound connection to the warrior spirit of the Maratha Empire. Whether you come for
                                the history, the trek, or the legendary Pithla Bhakri — Sinhagad never disappoints.
                            </p>
                        </section>

                        {/* Content Tabs */}
                        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-white/10 scrollbar-hide">
                            {[
                                { key: 'history', emoji: '⚔️', label: 'History' },
                                { key: 'battle', emoji: '🦁', label: 'Battle of Sinhagad' },
                                { key: 'landmarks', emoji: '🏛️', label: 'Landmarks' },
                                { key: 'food', emoji: '🍽️', label: 'Food' },
                                { key: 'trek', emoji: '🥾', label: 'Trek Routes' }
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

                        {/* ═══ HISTORY TAB ═══ */}
                        {activeTab === 'history' && (
                            <section className="relative border-l-2 border-saffron/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaHistory className="text-saffron" />
                                    The Legend of Sinhagad
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        Sinhagad Fort stands as one of the most important fortresses in Maratha history. Originally
                                        called <strong className="text-saffron">Kondhana</strong>, this strategic hill fort was built
                                        by various dynasties over centuries. The fort's commanding position in the Sahyadri ranges made
                                        it a prize coveted by every power that ruled the Deccan.
                                    </p>
                                    <p>
                                        Under the <strong className="text-white">Bahmani Sultanate</strong>, Kondhana was a critical
                                        military outpost. Later, it fell under <strong className="text-white">Mughal control</strong>,
                                        becoming a thorn in the side of the Maratha resistance. Shivaji Maharaj himself recognized
                                        the strategic importance of this fortress and made its capture a priority for protecting
                                        <strong className="text-saffron"> Swarajya</strong>.
                                    </p>

                                    <div className="mt-8 space-y-6">
                                        <TimelineItem year="Ancient" title="Kondhana Fort Built" desc="Originally constructed as Kondhana by the Bahmani dynasty. The fort's natural rock cliff defenses and strategic hilltop position made it nearly impregnable." />
                                        <TimelineItem year="1649" title="Treaty of Purandar" desc="Fort was surrendered to the Mughals under the Treaty of Purandar. Mughal commander Udaybhan Rathod was stationed with a strong garrison." />
                                        <TimelineItem year="1670 AD" title="The Battle of Sinhagad" desc="Tanaji Malusare led a daring midnight raid to recapture the fort from Mughal forces — sacrificing his life but securing a legendary Maratha victory." />
                                        <TimelineItem year="Post-1670" title="Renamed Sinhagad" desc="Shivaji Maharaj renamed Kondhana to 'Sinhagad' (Lion's Fort) in honor of Tanaji's lion-like bravery. The fort became a symbol of Maratha valor." />
                                        <TimelineItem year="Peshwa Era" title="Peshwa Stronghold" desc="Under the Peshwa rulers, Sinhagad continued as a critical military and administrative center. Rajaram Maharaj spent his last days here." />
                                    </div>

                                    <div className="bg-gradient-to-r from-saffron/10 to-transparent p-6 rounded-xl border-l-4 border-saffron mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-3">🏰 Strategic Importance</h3>
                                        <p>
                                            Standing at <strong className="text-white">1,312 meters above sea level</strong>, Sinhagad
                                            commanded views over the entire Pune region — from <strong className="text-saffron">Khadakwasla Dam</strong> to
                                            the <strong className="text-saffron">Sahyadri mountain ranges</strong>. Whoever controlled
                                            Sinhagad effectively controlled access to Pune and the Deccan plateau. The fort's steep
                                            cliffs on all sides made it a natural fortress, requiring minimal manpower to defend against
                                            large armies.
                                        </p>
                                    </div>

                                    <p className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-gray-200 mt-6">
                                        "Sinhagad is not just a fort — it is a testament to the Maratha spirit that refused to bow.
                                        Every stone on this hill whispers tales of valor, sacrifice, and the undying quest for
                                        <strong className="text-saffron"> Swarajya</strong> — self-rule."
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* ═══ BATTLE OF SINHAGAD TAB ═══ */}
                        {activeTab === 'battle' && (
                            <section className="relative border-l-2 border-red-500/30 pl-6 animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                    <FaShieldAlt className="text-saffron" />
                                    The Battle of Sinhagad — 1670 AD
                                </h2>
                                <div className="space-y-4 leading-relaxed">
                                    <p>
                                        The Battle of Sinhagad is one of the most celebrated and emotionally charged chapters in
                                        Maratha history. In 1670, <strong className="text-white">Shivaji Maharaj</strong> entrusted
                                        his most trusted and fearless commander — <strong className="text-saffron">Subedar Tanaji
                                        Malusare</strong> — with the critical mission of recapturing Kondhana Fort from the Mughals.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <BattleCard
                                            icon="🦎"
                                            title="The Yashwanti Legend"
                                            desc="Tanaji used a monitor lizard named Yashwanti to carry a rope up the steep cliff face. The ghorpad (monitor lizard) clung to the rock, allowing Maratha soldiers to scale the impossible walls under cover of darkness."
                                        />
                                        <BattleCard
                                            icon="🌙"
                                            title="Midnight Raid"
                                            desc="300 elite Maratha soldiers scaled the sheer cliff face in complete darkness. No torches, no noise — only the burning determination of warriors who had vowed to conquer or die trying."
                                        />
                                        <BattleCard
                                            icon="⚔️"
                                            title="Fierce Combat"
                                            desc="Tanaji fought Mughal commander Udaybhan Rathod in a legendary duel. When his shield broke, Tanaji wrapped his turban around his arm and continued fighting with raw fury."
                                        />
                                        <BattleCard
                                            icon="🩸"
                                            title="Supreme Sacrifice"
                                            desc="Tanaji fell in battle, but his brother Suryaji rallied the troops. The Marathas fought with such ferocity that the Mughal garrison was overwhelmed. The fort was captured."
                                        />
                                    </div>

                                    <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl mt-6">
                                        <h3 className="text-xl font-cinematic font-bold text-red-400 mb-3">🦁 Shivaji Maharaj's Words</h3>
                                        <p className="text-gray-300">
                                            When Shivaji Maharaj received the news of the victory along with the devastating news of
                                            Tanaji's death, he was overcome with grief. Despite winning this crucial fortress, the loss
                                            of his most beloved commander moved him deeply. His immortal words echoed across the mountains:
                                        </p>
                                    </div>

                                    <p className="text-center mt-8">
                                        <span className="block text-3xl font-cinematic font-bold text-saffron">
                                            "गड आला पण सिंह गेला"
                                        </span>
                                        <span className="block text-xl font-cinematic font-bold text-white mt-2">
                                            "Gad Ala Pan Sinha Gela"
                                        </span>
                                        <span className="block text-sm opacity-70 mt-2 max-w-md mx-auto">
                                            "The Fort Was Won, But The Lion Was Lost" — Shivaji Maharaj, upon hearing of Tanaji Malusare's martyrdom
                                        </span>
                                    </p>

                                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 mt-8">
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-3">🏔️ The Renaming</h3>
                                        <p className="text-gray-300">
                                            In honor of Tanaji's <strong className="text-white">lion-like courage</strong>, Shivaji Maharaj
                                            renamed the fort from <strong className="text-gray-400">Kondhana</strong> to
                                            <strong className="text-saffron"> Sinhagad</strong> — meaning "Lion's Fort." This act
                                            immortalized Tanaji's sacrifice and ensured that every person who speaks the fort's name
                                            remembers the brave warrior who gave his life for Swarajya.
                                        </p>
                                    </div>

                                    <p className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-gray-200 mt-6">
                                        "Tanaji chose duty over his own son's wedding. When told his son was getting married,
                                        he said — <strong className="text-saffron">'First the wedding of Kondhana fort,
                                        then my son's.'</strong> This is the spirit that built the Maratha Empire."
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* ═══ LANDMARKS TAB ═══ */}
                        {activeTab === 'landmarks' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaMonument className="text-saffron" />
                                    Key Landmarks
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <AttractionCard
                                        title="Tanaji Malusare Memorial"
                                        desc="Sacred memorial dedicated to the valiant Maratha warrior who sacrificed his life recapturing this fort in 1670. Features a statue and historical inscriptions honoring his supreme sacrifice."
                                        mustSee={true}
                                        time="20-30 min"
                                    />
                                    <AttractionCard
                                        title="Kaundinyeshwar Temple"
                                        desc="Ancient Shiva temple with traditional stone architecture. A peaceful sanctuary visited by Shivaji Maharaj himself. The priest shares fascinating historical stories of the fort."
                                        mustSee={true}
                                        time="15-20 min"
                                    />
                                    <AttractionCard
                                        title="Rajaram's Tomb"
                                        desc="The tomb of Chhatrapati Rajaram Maharaj (son of Shivaji Maharaj), featuring beautiful Maratha-era dome architecture. A solemn and historically significant site."
                                        mustSee={true}
                                        time="15 min"
                                    />
                                    <AttractionCard
                                        title="Kalyan Darwaja"
                                        desc="The eastern gate of the fort with a steep, dramatic approach. This is where Tanaji and his men scaled the cliff during the legendary midnight raid. Stunning views from the top."
                                        mustSee={true}
                                        time="20 min"
                                    />
                                    <AttractionCard
                                        title="Pune Darwaja"
                                        desc="Main entrance gate facing Pune city. The first landmark visitors see when arriving at the fort top. Well-preserved structure showcasing Maratha defensive architecture."
                                        mustSee={true}
                                        time="10 min"
                                    />
                                    <AttractionCard
                                        title="Fort Walls & Ramparts"
                                        desc="Extensive fortification walls offering 360° panoramic views of Pune city, Khadakwasla Dam, and the surrounding Sahyadri mountains. The best photography spot on the fort."
                                        mustSee={true}
                                        time="30-45 min"
                                    />
                                    <AttractionCard
                                        title="Military Stables (Ruins)"
                                        desc="Ruins of ancient horse stables and ammunition storage areas. Provides fascinating insight into the military operations and logistics of the Maratha Empire."
                                        mustSee={false}
                                        time="15-20 min"
                                    />
                                    <AttractionCard
                                        title="Kali Temple"
                                        desc="A smaller, ancient temple dedicated to Goddess Kali. Less crowded and wonderfully peaceful — perfect for a moment of quiet reflection during your exploration."
                                        mustSee={false}
                                        time="10 min"
                                    />
                                </div>
                            </section>
                        )}

                        {/* ═══ FOOD TAB ═══ */}
                        {activeTab === 'food' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaUtensils className="text-saffron" />
                                    Fort-Top Food — The Real Reward of the Trek
                                </h2>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">🔥 Must-Try — Legendary Fort Food</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FoodCard name="Pithla Bhakri" type="Veg" price="₹80-120" desc="Gram flour curry with thick millet bread, raw onions & green chili. THE legendary Sinhagad dish — people trek just for this." />
                                            <FoodCard name="Kanda Bhaji" type="Veg" price="₹40-60" desc="Crispy onion fritters (pakoras) served piping hot. Best enjoyed with cutting chai while gazing at the Sahyadri panorama." />
                                            <FoodCard name="Zunka Bhakar" type="Veg" price="₹70-100" desc="Dry gram flour preparation with bhakri bread. Spicy, filling, and authentically Maharashtrian — village food at its finest." />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">🍶 Refreshments & Snacks</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <FoodCard name="Fresh Dahi (Yogurt)" type="Veg" price="₹30-50" desc="Homemade yogurt served in earthen clay pots. Incredibly creamy and fresh — made by local women on the fort." />
                                            <FoodCard name="Cutting Chai" type="Beverage" price="₹10-15" desc="Half cup of strong, sweet tea. The perfect companion to Kanda Bhaji after an exhausting trek." />
                                            <FoodCard name="Kokum Sherbet" type="Beverage" price="₹30-50" desc="Refreshing drink made from kokum fruit. Cooling, digestive, and absolutely heavenly in summer heat." />
                                            <FoodCard name="Sugarcane Juice" type="Beverage" price="₹30-40" desc="Freshly extracted sugarcane juice — sweet, hydrating, and the ultimate refreshment after the climb." />
                                            <FoodCard name="Kavath (Wild Berries)" type="Snack" price="₹20-30" desc="Seasonal wild berries available during monsoon. A unique local delicacy you won't find anywhere else." />
                                            <FoodCard name="Vada Pav" type="Veg" price="₹15-25" desc="Mumbai's famous potato fritter in a bun, with fiery chutneys. Because some things are universal." />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-cinematic font-bold text-saffron mb-4">🍽️ Nearby Restaurants</h3>
                                        <div className="space-y-3">
                                            <RestaurantCard name="Hotel Kondaji" location="500m from parking" type="Veg & Non-Veg" price="₹150-250/person" speciality="Authentic Maharashtrian thali, Pithla Bhakri" />
                                            <RestaurantCard name="Sinhagad Darbar" location="On fort top" type="Veg" price="₹100-200/person" speciality="Maharashtrian snacks and full meals" />
                                            <RestaurantCard name="Sinhagad Road Eateries" location="10-15 km" type="Multi-Cuisine" price="₹200-500/person" speciality="Indian, Chinese, Continental — various options" />
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-xl font-cinematic font-bold text-white mb-4">💰 Budget Estimate (Per Person)</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                            <BudgetItem label="Transport" value="₹200-300" />
                                            <BudgetItem label="Entry Fee" value="₹20" />
                                            <BudgetItem label="Food" value="₹150-250" />
                                            <BudgetItem label="Misc" value="₹100-200" />
                                            <BudgetItem label="Total" value="₹470-770" highlight />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-3 text-center">Comfortable option: ₹800-1,000 per person</p>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* ═══ TREK ROUTES TAB ═══ */}
                        {activeTab === 'trek' && (
                            <section className="animate-fade-in">
                                <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                    <FaHiking className="text-saffron" />
                                    Trek Routes to Sinhagad
                                </h2>
                                <div className="space-y-6">

                                    <TrekRouteCard
                                        name="Donje Village Route"
                                        difficulty="Easy"
                                        distance="4 km"
                                        duration="1.5-2 hours"
                                        elevation="600m gain (700m → 1312m)"
                                        desc="Well-maintained stone steps from Donje village to fort top. Most popular and easiest route — suitable for beginners, families, and elderly. 400 steps with railings."
                                        facilities={['5 rest points with benches', 'Tea stalls at 3 points', 'Water available', 'Mobile network coverage']}
                                        recommended={true}
                                    />

                                    <TrekRouteCard
                                        name="Ghorawadi Village Route"
                                        difficulty="Difficult"
                                        distance="5 km"
                                        duration="3 hours"
                                        elevation="700m gain"
                                        desc="Steeper and more rugged route — less crowded and more scenic. Rocky terrain with challenging climbs suitable for experienced trekkers who want an adventure."
                                        facilities={['Fewer rest points', 'Limited vendors', 'More challenging climb']}
                                        recommended={false}
                                    />

                                    <TrekRouteCard
                                        name="Motorable Road"
                                        difficulty="Easy"
                                        distance="Direct vehicle access"
                                        duration="15 minute drive"
                                        elevation="No trekking required"
                                        desc="Vehicles can go up to parking area near the fort. Shared jeeps available for ₹20-30 per person from Sinhagad base. Ideal for families with kids or elderly visitors."
                                        facilities={['Parking available (₹50-100)', 'Shared jeeps (₹20-30)', 'No trekking needed']}
                                        recommended={false}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-green-500/5 border border-green-500/20 p-5 rounded-xl">
                                            <h4 className="font-cinematic font-bold text-green-400 mb-3">✅ Best Time to Trek</h4>
                                            <ul className="space-y-2 text-gray-300">
                                                <li className="flex items-center gap-2"><span className="text-green-400">●</span> Monsoon (June-September) — Lush green, misty, waterfalls</li>
                                                <li className="flex items-center gap-2"><span className="text-green-400">●</span> Winter (November-February) — Cool breeze, clear panoramic views</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-500/5 border border-red-500/20 p-5 rounded-xl">
                                            <h4 className="font-cinematic font-bold text-red-400 mb-3">⛔ Avoid</h4>
                                            <ul className="space-y-2 text-gray-300">
                                                <li className="flex items-center gap-2"><span className="text-red-400">●</span> Summer afternoons (March-May) — Extreme heat</li>
                                                <li className="flex items-center gap-2"><span className="text-red-400">●</span> Heavy rain days — Very slippery trails</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h4 className="font-cinematic font-bold text-saffron mb-4">🎒 Essential Trek Tips</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            {[
                                                'Wear proper trekking shoes, NOT sandals',
                                                'Carry 2 liters of water per person',
                                                'Start early (6 AM) for sunrise & cooler weather',
                                                "Don't rush the descent — most injuries happen going down",
                                                "Carry cash — most vendors don't accept cards",
                                                'Download offline maps — network patchy at top',
                                                'Carry salt during monsoon (for leeches)',
                                                "Respect the fort — don't litter or damage structures"
                                            ].map((tip, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <span className="text-saffron mt-0.5 shrink-0">→</span>
                                                    <span className="text-gray-300">{tip}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* ═══ SAFETY ALERTS — Always Visible ═══ */}
                        <section className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                            <h3 className="flex items-center gap-3 text-xl font-cinematic font-bold text-red-400 mb-4">
                                <FaExclamationTriangle /> Safety Alerts
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { msg: 'Steep sections near Kalyan Darwaja — use railings carefully', season: 'All year' },
                                    { msg: 'Paths can be very slippery during monsoon — wear grip footwear', season: 'Monsoon' },
                                    { msg: "Fort walls don't have railings everywhere — be careful near edges", season: 'All year' },
                                    { msg: 'Leeches possible during monsoon — carry salt', season: 'Monsoon' },
                                    { msg: 'Start descent by 4:30 PM to avoid darkness on trail', season: 'All year' }
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
                                <span className="text-gray-300"><strong className="text-white">Police:</strong> Sinhagad Chowki — 020-24392000</span>
                                <span className="text-gray-300"><strong className="text-white">Medical:</strong> PHC Donaje — 020-24392100</span>
                                <span className="text-gray-300"><strong className="text-white">Rescue:</strong> 108 (24/7)</span>
                            </div>
                        </section>

                        {/* ═══ VISITOR REVIEWS ═══ */}
                        <section>
                            <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                <FaStar className="text-saffron" /> What Visitors Say
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <p className="italic text-xl text-gray-200 text-center mb-6">
                                    "Sinhagad is not just a trek, it's an experience. You feel the history, taste the culture,
                                    and witness nature's beauty. A must-visit for every Punekar!"
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Top Positives</h4>
                                        <ul className="space-y-2">
                                            {[
                                                'Easy trek suitable for beginners & families',
                                                'Well-maintained steps with railings',
                                                'Historical significance is incredible',
                                                'Pithla Bhakri food is LEGENDARY',
                                                'Monsoon views are breathtaking',
                                                '360° panoramic views from fort walls',
                                                'Good for elderly with moderate fitness'
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-green-400">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-saffron font-bold text-sm uppercase tracking-wider mb-3">Honest Feedback</h4>
                                        <ul className="space-y-2">
                                            {[
                                                'Very crowded on weekends & holidays',
                                                'Parking can be chaotic',
                                                'Some vendors can be pushy',
                                                'Washrooms need better maintenance',
                                                'Slippery paths during monsoon'
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-300">
                                                    <span className="text-yellow-400">△</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2">
                                    <span className="text-saffron text-lg">★★★★☆</span>
                                    <span className="text-white font-bold">4.5</span>
                                    <span className="text-gray-400 text-sm">(45,000+ reviews)</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* ═══ RIGHT COLUMN: Sticky Sidebar ═══ */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-28 space-y-6">

                            {/* Visiting Information Card */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(255,153,51,0.15)] rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saffron to-transparent opacity-70"></div>
                                <h3 className="text-2xl font-cinematic font-bold text-white mb-6 flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-saffron" /> Visiting Information
                                </h3>
                                <ul className="space-y-6">
                                    <InfoItem icon={FaClock} label="Timings" value="6:00 AM — 6:00 PM (Open all days)" />
                                    <InfoItem icon={FaRupeeSign} label="Entry Fee" value="₹20 (Indian) · ₹100 (Foreigner)" />
                                    <InfoItem icon={FaCalendarAlt} label="Best Time" value="Early morning (6-9 AM) for sunrise. Winter & Monsoon best." />
                                    <InfoItem icon={FaMountain} label="Trek" value="Easy (Donje, 1.5 hrs) to Difficult (Ghorawadi, 3 hrs). Vehicle access also available." />
                                    <InfoItem icon={FaClock} label="Time Needed" value="3-4 hours including trek" />
                                </ul>
                                <button
                                    onClick={() => setShowMap(!showMap)}
                                    className="w-full mt-8 py-4 bg-saffron text-royal-black font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-saffron/20"
                                >
                                    {showMap ? 'HIDE MAP' : 'GET DIRECTIONS'}
                                </button>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4 flex items-center gap-2">
                                    <FaRoute className="text-amber-400" /> Quick Facts
                                </h4>
                                <div className="space-y-3 text-sm">
                                    <FactItem label="Original Name" value="Kondhana" />
                                    <FactItem label="Renamed" value="Sinhagad (1670)" />
                                    <FactItem label="Elevation" value="1,312 meters" />
                                    <FactItem label="District" value="Pune" />
                                    <FactItem label="Nearest City" value="Pune (30 km)" />
                                    <FactItem label="Fort Type" value="Hill Fort (Giridurag)" />
                                    <FactItem label="Steps" value="400 (Donje route)" />
                                    <FactItem label="Famous Battle" value="Battle of Sinhagad (1670)" />
                                    <FactItem label="Hero" value="Tanaji Malusare" />
                                    <FactItem label="Crowd" value="Low (weekday) / High (weekend)" />
                                    <FactItem label="Kids Friendly" value="Yes" />
                                    <FactItem label="Photography" value="Allowed (no restrictions)" />
                                </div>
                            </div>

                            {/* Facilities */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">Facilities</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <FacilityBadge label="Parking" available={true} detail="₹50-100 (100+ spots)" />
                                    <FacilityBadge label="Washrooms" available={true} detail="Basic condition" />
                                    <FacilityBadge label="Water" available={true} detail="At rest points & top" />
                                    <FacilityBadge label="Guides" available={true} detail="₹300-500/group" />
                                    <FacilityBadge label="Mobile Network" available={true} detail="Airtel, Jio, Vi" />
                                    <FacilityBadge label="First Aid" available={true} detail="PHC Donaje (3 km)" />
                                    <FacilityBadge label="Shared Jeeps" available={true} detail="₹20-30/person" />
                                    <FacilityBadge label="Food Stalls" available={true} detail="Multiple on fort top" />
                                </div>
                            </div>

                            {/* Accommodation */}
                            <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                                <h4 className="text-lg font-cinematic font-bold text-white mb-4">🏨 Where to Stay</h4>
                                <div className="space-y-3">
                                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                        <h5 className="font-bold text-white text-sm">MTDC Holiday Resort</h5>
                                        <p className="text-xs text-gray-400 mt-1">3 km from fort base • ₹1,000-2,000/night</p>
                                        <p className="text-[10px] text-saffron mt-1">Restaurant, Parking, Basic rooms</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                        <h5 className="font-bold text-white text-sm">Sinhagad Road Hotels</h5>
                                        <p className="text-xs text-gray-400 mt-1">10-15 km away • ₹800-3,000/night</p>
                                        <p className="text-[10px] text-saffron mt-1">WiFi, AC, Restaurant, Parking</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                        <h5 className="font-bold text-white text-sm">Pune City Hotels</h5>
                                        <p className="text-xs text-gray-400 mt-1">30 km away • ₹500-5,000/night</p>
                                        <p className="text-[10px] text-saffron mt-1">All modern amenities</p>
                                    </div>
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

const BattleCard = ({ icon, title, desc }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-red-500/5 hover:border-red-500/30 transition-all duration-300 group">
        <div className="text-3xl mb-3">{icon}</div>
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors">{title}</h4>
        <p className="text-sm text-gray-400">{desc}</p>
    </div>
);

const AttractionCard = ({ title, desc, mustSee, time }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-saffron/50 transition-all duration-300 group relative">
        {mustSee && (
            <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-saffron/20 text-saffron px-2 py-0.5 rounded-full border border-saffron/30">
                Must See
            </span>
        )}
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors">{title}</h4>
        <p className="text-sm text-gray-400 mb-2">{desc}</p>
        {time && <p className="text-xs text-saffron/70">⏱️ {time}</p>}
    </div>
);

const FoodCard = ({ name, type, price, desc }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-bold text-white">{name}</h4>
            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                type === 'Veg' ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : type === 'Beverage' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : type === 'Snack' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
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

const TrekRouteCard = ({ name, difficulty, distance, duration, elevation, desc, facilities, recommended }) => (
    <div className={`bg-white/5 border rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 ${
        recommended ? 'border-saffron/40 shadow-lg shadow-saffron/10' : 'border-white/10'
    }`}>
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
                <FaRoute className="text-saffron text-xl" />
                <h4 className="text-xl font-cinematic font-bold text-white">{name}</h4>
            </div>
            <div className="flex items-center gap-2">
                {recommended && (
                    <span className="text-[10px] font-bold uppercase bg-saffron/20 text-saffron px-2 py-1 rounded-full border border-saffron/30">
                        ★ Recommended
                    </span>
                )}
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                    difficulty === 'Easy' ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : difficulty === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>{difficulty}</span>
            </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">{desc}</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white/5 p-2 rounded-lg text-center">
                <p className="text-[10px] text-gray-500 uppercase">Distance</p>
                <p className="text-white font-bold text-sm">{distance}</p>
            </div>
            <div className="bg-white/5 p-2 rounded-lg text-center">
                <p className="text-[10px] text-gray-500 uppercase">Duration</p>
                <p className="text-white font-bold text-sm">{duration}</p>
            </div>
            <div className="bg-white/5 p-2 rounded-lg text-center">
                <p className="text-[10px] text-gray-500 uppercase">Elevation</p>
                <p className="text-white font-bold text-sm">{elevation}</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-2">
            {facilities.map((f, i) => (
                <span key={i} className="text-[11px] bg-white/5 text-gray-400 px-2 py-1 rounded-md border border-white/5">
                    {f}
                </span>
            ))}
        </div>
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

export default SinhagadDetail;
