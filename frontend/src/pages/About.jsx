import React from 'react';
import Navbar from '../components/Navbar';
import BahirjiChatbot from '../components/BahirjiChatbot';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt, FaUsers, FaLinkedin, FaGithub,
  FaMountain, FaMapMarkedAlt, FaRoute, FaBookOpen,
  FaRobot, FaChevronRight, FaFortAwesome, FaStar,
  FaHiking, FaCamera, FaHistory, FaGlobeAsia
} from 'react-icons/fa';

// Background image for the hero
import heroBg from '../assets/hero-fort.jpg';
import shivajiImg from '../assets/shivaji.jpg';
import chart1 from '../assets/Aniket.png';
import chart2 from '../assets/Athrav.png';
import chart3 from '../assets/Nishtha.png';
const About = () => {
  const teamMembers = [
    {
      name: "Aniket Gawande",
      role: "Project Lead & Full Stack Developer",
      image: chart1,
      linkedin: "https://www.linkedin.com/in/aniket-gawande25?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/aniket-gawande"
    },
    {
      name: "Ashutosh More",
      role: "UI/UX Designer & Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Athrav Shinde",
      role: "Backend Developer & Database Architect",
      image: chart2,
      linkedin: "https://www.linkedin.com/in/atharv-shinde-2baa39226?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/atharv2196"
    },
    {
      name: "Nishtha Parve",
      role: "Content Strategist & Researcher",
      image: chart3,
      linkedin: "https://www.linkedin.com/in/nishtha-parve-0a9a0632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Nishthaparve"
    },
  ];

  const features = [
    { icon: FaMountain, title: "4 Forts Documented", desc: "In-depth coverage of Sinhagad, Murud-Janjira, Sindhudurg, and Vishalgad — hill forts and sea forts of the Maratha Empire." },
    { icon: FaRoute, title: "Trek Routes & Itineraries", desc: "Detailed step-by-step trekking guides with difficulty ratings, timelines, and route maps for every fort." },
    { icon: FaRobot, title: "AI Guide - Bahirji Naik", desc: "Chat with our AI assistant inspired by Shivaji Maharaj's legendary spy chief for instant fort information." },
    { icon: FaMapMarkedAlt, title: "Interactive Maps", desc: "Live maps with GPS coordinates, nearby attractions, food stalls, parking locations and trail markers." },
    { icon: FaCamera, title: "Photo Spots & Tips", desc: "Best photography locations, golden hour timings, and composition tips for each fort." },
    { icon: FaHistory, title: "Rich Historical Context", desc: "Battle histories, architectural details, and stories of the Maratha warriors who defended these forts." },
  ];

  const stats = [
    { value: "4", label: "Forts Catalogued", icon: FaFortAwesome },
    { value: "10+", label: "Trek Routes", icon: FaHiking },
    { value: "1674", label: "Legacy Since", icon: FaStar },
    { value: "100%", label: "Free & Open", icon: FaGlobeAsia },
  ];

  return (
    <div className="min-h-screen bg-royal-black text-gray-300 font-body selection:bg-saffron selection:text-black">
      <Navbar />
      <BahirjiChatbot />

      {/* ═══════════════════════════════════════════
          HERO SECTION - CINEMATIC MISSION STATEMENT
      ═══════════════════════════════════════════ */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Sahyadri fort landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-black/90 via-royal-black/50 to-royal-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-royal-black/80 via-transparent to-royal-black/80"></div>

        {/* Saffron aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron/8 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 sm:w-16 bg-saffron/60"></div>
            <FaShieldAlt className="text-saffron text-lg sm:text-xl" />
            <div className="h-px w-8 sm:w-16 bg-saffron/60"></div>
          </div>

          <p className="text-saffron font-cinematic text-sm sm:text-base tracking-[0.3em] uppercase mb-4">
            आमचे ध्येय | Our Mission
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-cinematic font-black text-white drop-shadow-2xl mb-4 sm:mb-6 leading-tight">
            Preserving the <br className="hidden sm:block" />
            <span className="text-saffron">Legacy of Swarajya</span>
          </h1>

          <div className="h-1 w-16 sm:w-24 bg-saffron rounded-full mx-auto mb-4 sm:mb-6"></div>

          <p className="text-sm sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-2">
            Dedicated to documenting and guiding explorers through the majestic forts
            of Chhatrapati Shivaji Maharaj. Bridging history with modern adventure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Link
              to="/"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-saffron text-black font-bold rounded-xl hover:bg-saffron-dim transition-all duration-300 flex items-center gap-2 text-sm sm:text-base shadow-[0_0_20px_rgba(255,153,51,0.3)] hover:shadow-[0_0_30px_rgba(255,153,51,0.5)]"
            >
              Explore Forts <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/sinhagad-itinerary"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-saffron/50 text-saffron font-bold rounded-xl hover:bg-saffron/10 transition-all duration-300 text-sm sm:text-base"
            >
              View Sample Itinerary
            </Link>
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="relative z-10 -mt-1">
        <div className="bg-royal-gray/80 backdrop-blur-md border-y border-saffron/10">
          <div className="container mx-auto px-4 py-6 sm:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <stat.icon className="text-saffron text-xl sm:text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-cinematic font-black text-white">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          ABOUT THE PROJECT - ROYAL SCROLL SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-saffron/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">The Vision</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-4">
              What is <span className="text-saffron">MahaFort Guide</span>?
            </h2>
            <div className="h-1 w-12 sm:w-16 bg-saffron rounded-full mx-auto"></div>
          </div>

          {/* Two-column layout: Image + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20">
            {/* Left: Shivaji Image with frame */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-br from-saffron/30 via-saffron/10 to-transparent rounded-3xl blur-sm group-hover:blur-md transition-all duration-500"></div>
              <div className="relative bg-royal-gray border-2 border-saffron/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-b from-[#1a1208] via-[#0d0a06] to-royal-black p-4 sm:p-6">
                  <img
                    src={shivajiImg}
                    alt="Chhatrapati Shivaji Maharaj"
                    className="w-full h-auto max-h-[500px] object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center border-t border-saffron/20 bg-royal-black/60">
                  <p className="text-saffron font-cinematic text-base sm:text-lg font-bold">छत्रपती शिवाजी महाराज</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Founder of the Maratha Empire</p>
                </div>
              </div>
            </div>

            {/* Right: Project description */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-saffron/10 p-2 sm:p-3 rounded-xl text-saffron mt-1 flex-shrink-0">
                    <FaBookOpen className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-cinematic font-bold text-white mb-1 sm:mb-2">A Digital Tribute</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      MahaFort Guide is more than a travel platform — it's a digital monument to the architectural
                      genius and military brilliance of the Maratha Empire. Currently documenting
                      4 key forts of Maharashtra with detailed trek guides and historical context.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-saffron/10 p-2 sm:p-3 rounded-xl text-saffron mt-1 flex-shrink-0">
                    <FaShieldAlt className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-cinematic font-bold text-white mb-1 sm:mb-2">Preserve Heritage</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Every fort has a story of valor, strategy, and sacrifice. We document detailed histories,
                      architectural layouts, battle accounts, and the warriors who made these fortifications legendary.
                      History deserves to be remembered.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-saffron/10 p-2 sm:p-3 rounded-xl text-saffron mt-1 flex-shrink-0">
                    <FaUsers className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-cinematic font-bold text-white mb-1 sm:mb-2">Empower Explorers</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      From first-time trekkers to seasoned mountaineers — we provide accurate route data,
                      difficulty ratings, safety info, food guides, best photo spots, and downloadable
                      itineraries for every fort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-saffron/10 p-2 sm:p-3 rounded-xl text-saffron mt-1 flex-shrink-0">
                    <FaRobot className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-cinematic font-bold text-white mb-1 sm:mb-2">AI-Powered Innovation</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Meet <strong className="text-saffron">Bahirji Naik</strong> — our AI chatbot named after
                      Shivaji Maharaj's legendary spy chief. Ask him anything about forts, routes, history,
                      or plan your entire trek in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          FEATURES GRID
      ═══════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-royal-gray/30 border-t border-b border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-saffron-glow opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Platform Features</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-4">
              What We <span className="text-saffron">Offer</span>
            </h2>
            <div className="h-1 w-12 sm:w-16 bg-saffron rounded-full mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Everything you need to explore Maharashtra's rich fort heritage — all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          TECHNOLOGY STACK
      ═══════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Built With</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-4">
              Technology <span className="text-saffron">Stack</span>
            </h2>
            <div className="h-1 w-12 sm:w-16 bg-saffron rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { name: "React", color: "#61DAFB" },
              { name: "Tailwind CSS", color: "#38BDF8" },
              { name: "Node.js", color: "#68A063" },
              { name: "Express", color: "#FFFFFF" },
              { name: "MongoDB", color: "#4DB33D" },
              { name: "Google AI", color: "#4285F4" },
              { name: "Leaflet", color: "#199900" },
              { name: "jsPDF", color: "#F40F02" },
              { name: "JWT Auth", color: "#D63AFF" },
              { name: "OAuth 2.0", color: "#EB4335" },
              { name: "REST API", color: "#FF9933" },
              { name: "GitHub", color: "#FFFFFF" },
            ].map((tech, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-saffron/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-2 group-hover:scale-150 transition-transform"
                  style={{ backgroundColor: tech.color }}
                ></div>
                <p className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          MEET THE TEAM
      ═══════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-royal-gray/30 border-t border-white/5 relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-saffron/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">The Warriors</p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-4">
              Meet the <span className="text-saffron">Mavale</span>
            </h2>
            <div className="h-1 w-12 sm:w-16 bg-saffron rounded-full mx-auto mb-4"></div>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
              A passionate team of developers, designers, and history enthusiasts building this digital tribute.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          CTA FOOTER SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-saffron-glow opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron/40 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <FaFortAwesome className="text-saffron text-4xl sm:text-6xl mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinematic font-black text-white mb-4 sm:mb-6 leading-tight">
            Ready to Explore the <span className="text-saffron">Legacy</span>?
          </h2>
          <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8">
            Start your journey through the mighty forts of Maharashtra. Every stone has a story waiting to be discovered.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-8 sm:px-12 py-3 sm:py-4 bg-saffron text-black font-bold text-base sm:text-lg rounded-xl hover:bg-saffron-dim transition-all duration-300 shadow-[0_0_30px_rgba(255,153,51,0.3)] hover:shadow-[0_0_50px_rgba(255,153,51,0.5)]"
          >
            Begin Your Journey <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-royal-gray/50 border-t border-white/5 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; 2026 MahaFort Guide &mdash; Built with ❤️ for the legacy of Swarajya
          </p>
          <p className="text-gray-600 text-xs mt-2">
            "स्वराज्य हा माझा जन्मसिद्ध हक्क आहे, आणि तो मी मिळवणारच" — छत्रपती शिवाजी महाराज
          </p>
        </div>
      </footer>
    </div>
  );
};


/* ═══════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════ */

const FeatureCard = ({ feature, index }) => (
  <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-saffron/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
    {/* Subtle glow on hover */}
    <div className="absolute -top-12 -right-12 w-24 h-24 bg-saffron/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10">
      <div className="bg-saffron/10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-saffron mb-4 group-hover:bg-saffron/20 transition-colors">
        <feature.icon className="text-xl sm:text-2xl" />
      </div>
      <h3 className="text-base sm:text-lg font-cinematic font-bold text-white mb-2 group-hover:text-saffron transition-colors">{feature.title}</h3>
      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
    </div>
  </div>
);

const TeamCard = ({ member }) => (
  <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-saffron/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_0_25px_rgba(255,153,51,0.15)]">
    <div className="h-48 sm:h-64 overflow-hidden relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/30 to-transparent opacity-90"></div>
    </div>
    <div className="p-4 sm:p-6 text-center relative z-10 -mt-12 sm:-mt-16 pt-14 sm:pt-20 bg-gradient-to-t from-royal-black via-royal-black to-transparent">
      <h3 className="text-base sm:text-xl font-cinematic font-bold text-white mb-1 group-hover:text-saffron transition-colors">{member.name}</h3>
      <p className="text-xs sm:text-sm text-saffron font-bold uppercase tracking-wider mb-3 sm:mb-4">{member.role}</p>

      <div className="flex justify-center gap-3">
        <SocialLink icon={FaLinkedin} href={member.linkedin} />
        <SocialLink icon={FaGithub} href={member.github} />
      </div>
    </div>
  </div>
);

const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-saffron transition-all duration-300 p-2 hover:bg-white/5 rounded-full hover:scale-110"
  >
    <Icon size={18} />
  </a>
);

export default About;