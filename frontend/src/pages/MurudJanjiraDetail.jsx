import React from 'react';
import Navbar from '../components/Navbar';
import { FaClock, FaRupeeSign, FaCalendarAlt, FaMapMarkerAlt, FaHistory, FaMonument, FaShip } from 'react-icons/fa';
import janjiraImage from '../assets/janjira.jpg';

const MurudJanjiraDetail = () => {
    return (
        <div className="min-h-screen bg-royal-black text-gray-300 font-body">
            <Navbar />

            {/* --- CINEMATIC HERO SECTION --- */}
            <div className="relative h-[60vh] lg:h-[70vh] w-full">
                {/* Background Image */}
                <img
                    src={janjiraImage}
                    alt="Murud Janjira Fort - Unconquered Sea Fortress"
                    className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/50 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

                {/* Hero Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-cinematic font-black text-white drop-shadow-2xl mb-4">
                        MURUD JANJIRA FORT
                    </h1>
                    <div className="h-1 w-24 bg-saffron rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl text-saffron font-bold tracking-wider uppercase drop-shadow-lg">
                        The Unconquered Sea Fortress
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
                                Murud Janjira is a magnificent sea fortress located on an island off the Arabian Sea coast near Murud, Maharashtra.
                                Built by the Siddis in 1567 AD, this fort holds the unique distinction of being unconquered for over 330 years,
                                resisting attacks from the Marathas, Mughals, Portuguese, Dutch, and British. Rising majestically from the sea,
                                accessible only by boat, it stands as a testament to invincibility and strategic brilliance.
                            </p>
                        </section>

                        {/* History Section */}
                        <section className="relative border-l-2 border-saffron/30 pl-6">
                            <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                                <FaHistory className="text-saffron" />
                                The Unconquered Legend
                            </h2>
                            <div className="space-y-4 leading-relaxed">
                                <p>
                                    Initially a wooden structure built by local fishermen in the 15th century to ward off pirates,
                                    <strong className="text-white"> Malik Ambar</strong>, an Abyssinian regent, transformed it into an
                                    impregnable stone fortress in <strong className="text-saffron">1567 AD</strong>.
                                </p>
                                <p>
                                    The fort came under the control of the <strong className="text-white text-xl">Siddi Dynasty</strong> and
                                    became their naval stronghold. Despite numerous attempts by powerful forces, the fort remained unconquered.
                                </p>
                                <p className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-gray-200">
                                    "Even Chhatrapati Shivaji Maharaj, the legendary Maratha warrior king, could not capture Janjira despite multiple attempts.
                                    The Marathas, Mughals, Portuguese, Dutch, and British all tried and failed. The fort's strategic location,
                                    massive walls, 572 cannons, and brilliant defense made it invincible."
                                </p>
                                <p>
                                    The name <strong className="text-saffron">"Janjira"</strong> is derived from the Arabic word
                                    <span className="text-white"> "Jazeera"</span>, meaning island. The Siddis called it
                                    <span className="block mt-4 text-2xl font-cinematic font-bold text-saffron text-center">
                                        "जझीरा महरूब जझीरा"
                                    </span>
                                    <span className="block text-center text-sm opacity-70">(The Island Fortress)</span>
                                </p>
                                <p>
                                    This sea fort stands as a symbol of <strong className="text-white">unconquerable spirit</strong> and
                                    remains one of the few forts in India that was never captured by enemy forces.
                                </p>
                            </div>
                        </section>

                        {/* Key Attractions Grid */}
                        <section>
                            <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-8 pb-2 border-b border-white/10">
                                <FaMonument className="text-saffron" />
                                Key Attractions
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <AttractionCard
                                    title="Kalalbangdi Cannon"
                                    desc="Third largest cannon in India, weighing over 22 tons. One of three legendary giant cannons."
                                />
                                <AttractionCard
                                    title="26 Artillery Bastions"
                                    desc="Rounded bastions strategically positioned, once holding 572 cannons of native and European origin."
                                />
                                <AttractionCard
                                    title="Sher Darwaza (Tiger Gate)"
                                    desc="Main entrance with tiger sculpture. Ingeniously concealed, visible only within 40 feet."
                                />
                                <AttractionCard
                                    title="Freshwater Lakes"
                                    desc="Two remarkable freshwater lakes inside the fort, despite being surrounded by the Arabian Sea."
                                />
                                <AttractionCard
                                    title="Siddi Nawab's Palace"
                                    desc="Remnants of the royal palace showcasing intricate Siddi architecture."
                                />
                                <AttractionCard
                                    title="Ancient Mosque"
                                    desc="Historic mosque reflecting the Islamic heritage of the Siddi dynasty."
                                />
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Sticky Sidebar (Glassmorphism) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-28">
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
                                        value="7:00 AM to 6:30 PM (Boat: 7:00 AM - 4:30 PM)"
                                    />
                                    <InfoItem
                                        icon={FaRupeeSign}
                                        label="Entry Fee"
                                        value="No entry fee. Boat charges: ₹20-50 per person (return)"
                                    />
                                    <InfoItem
                                        icon={FaCalendarAlt}
                                        label="Best Time to Visit"
                                        value="Winter (Oct-Feb) for pleasant weather and calm seas. Avoid heavy monsoon."
                                    />
                                    <InfoItem
                                        icon={FaShip}
                                        label="Access"
                                        value="Only by boat from Rajapuri Jetty. 15-20 min ride."
                                    />
                                </ul>

                                <button className="w-full mt-8 py-4 bg-saffron text-royal-black font-bold rounded-xl hover:bg-white transition-all duration-300 shadow-lg shadow-saffron/20">
                                    GET DIRECTIONS
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- Mini Components for this page ---

// Glass Card for Attractions
const AttractionCard = ({ title, desc }) => (
    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 hover:border-saffron/50 transition-all duration-300 group">
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-saffron transition-colors">{title}</h4>
        <p className="text-sm text-gray-400">{desc}</p>
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

export default MurudJanjiraDetail;
