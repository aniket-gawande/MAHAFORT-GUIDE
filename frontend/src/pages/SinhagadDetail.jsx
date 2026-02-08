import React from 'react';
import Navbar from '../components/Navbar';
import { FaClock, FaRupeeSign, FaCalendarAlt, FaMapMarkerAlt, FaHistory, FaMonument } from 'react-icons/fa';
// Using a high-quality, cinematic image suitable for the dark theme
const sinhagadHeroImg = "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop";

const SinhagadDetail = () => {
  return (
    <div className="min-h-screen bg-royal-black text-gray-300 font-body">
      <Navbar />

      {/* --- CINEMATIC HERO SECTION --- */}
      <div className="relative h-[60vh] lg:h-[70vh] w-full">
        {/* Background Image */}
        <img 
          src={sinhagadHeroImg} 
          alt="Sinhagad Fort majestic view" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/50 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-cinematic font-black text-white drop-shadow-2xl mb-4">
            SINHAGAD FORT
          </h1>
          <div className="h-1 w-24 bg-saffron rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-saffron font-bold tracking-wider uppercase drop-shadow-lg">
            The Lion's Fort
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
                Sinhagad, formerly known as Kondhana, is a hill fortress located around 49 km southwest of the city of Pune, India. 
                Standing tall on the Bhuleshwar range of the Sahyadris, it is not just a tourist spot but a sacred altar of Maratha valor. 
                Its strategic location perched on an isolated cliff provided natural protection and commanding views of the surrounding region.
              </p>
            </section>

            {/* History Section */}
            <section className="relative border-l-2 border-saffron/30 pl-6">
              <h2 className="flex items-center gap-3 text-3xl font-cinematic font-bold text-white mb-6">
                <FaHistory className="text-saffron" />
                Historical Significance
              </h2>
              <div className="space-y-4 leading-relaxed">
                <p>
                  The fort has seen many battles, but it is most famous for the legendary 
                  <strong className="text-white"> Battle of Sinhagad in 1670</strong>.
                </p>
                <p>
                  <strong className="text-white text-xl">Chhatrapati Shivaji Maharaj</strong> entrusted the mission of recapturing the fort 
                  from the Mughals to his trusted general, <strong className="text-saffron text-xl">Tanaji Malusare</strong>.
                </p>
                <p className="bg-white/5 p-6 rounded-xl border border-white/10 italic text-gray-200">
                  "Tanaji and his soldiers scaled the steep cliff in the dead of night using a monitor lizard named Yashwanti. 
                  A fierce battle ensued. Though Tanaji fought like a lion and won the fort, he succumbed to his injuries."
                </p>
                <p>
                  Upon hearing the news, a grief-stricken Shivaji Maharaj famously said, 
                  <span className="block mt-4 text-2xl font-cinematic font-bold text-saffron text-center">
                    "गड आला पण सिंह गेला"
                  </span>
                  <span className="block text-center text-sm opacity-70">(The fort is captured, but the lion is lost).</span>
                </p>
                <p>
                  It was in his honor that the fort was renamed from Kondhana to <strong>Sinhagad (Lion Fort)</strong>.
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
                <AttractionCard title="Tanaji Malusare Samadhi" desc="A memorial dedicated to the brave warrior who sacrificed his life for the fort." />
                <AttractionCard title="Kalyan Darwaza" desc="The majestic main entrance gate facing southeast towards Kalyan village." />
                <AttractionCard title="Pune Darwaza" desc="The primary entrance for trekkers arriving from the Pune side." />
                <AttractionCard title="Kade Lot" desc="A strategic cliff point used historically for executing prisoners." />
                <AttractionCard title="Lokmanya Tilak Bungalow" desc="The residence where freedom fighter Lokmanya Tilak stayed." />
                <AttractionCard title="Amrutheshwar Temple" desc="An ancient temple dedicated to Lord Shiva holding cultural significance." />
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
                  <InfoItem icon={FaClock} label="Timings" value="5:00 AM to 6:00 PM (Open everyday)" />
                  <InfoItem icon={FaRupeeSign} label="Entry Fee" value="₹50 per person (approx.) + Vehicle charges extra" />
                  <InfoItem icon={FaCalendarAlt} label="Best Time to Visit" value="Monsoon (June to Sept) for greenery, or Winter for clear treks." />
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

export default SinhagadDetail;