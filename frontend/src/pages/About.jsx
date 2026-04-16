import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt, FaUsers, FaLinkedin, FaGithub,
  FaMountain, FaMapMarkedAlt, FaRoute, FaBookOpen,
  FaChevronRight, FaFortAwesome, FaStar,
  FaHiking, FaCamera, FaHistory, FaGlobeAsia,
  FaCode, FaChevronDown
} from 'react-icons/fa';

import heroBg from '../assets/hero-fort.jpg';
import shivajiImg from '../assets/shivaji.jpg';
import chart1 from '../assets/Aniket.png';
import chart2 from '../assets/Athrav.png';
import chart3 from '../assets/Nishtha.png';
import ashuImg from '../assets/ashu.jpeg';
import mentorImg from '../assets/mentor.jpeg';
// import chart4 from '../assets/IMG-20260327-WA0008.jpg';

/* ─── Animated Counter Hook ─── */
const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;
    const numEnd = parseInt(end) || 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numEnd));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, shouldStart]);
  return count;
};

/* ─── Intersection Observer Hook ─── */
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

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
      image: ashuImg,
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
    { icon: FaMountain, title: "50+ Forts Documented", desc: "In-depth coverage of Maharashtra's hill forts and sea forts — from Sinhagad to Rangana, exploring the vast Maratha Empire." },
    { icon: FaRoute, title: "Trek Routes & Itineraries", desc: "Detailed step-by-step trekking guides with difficulty ratings, timelines, and route maps for every fort." },
    { icon: FaBookOpen, title: "Smart Trip Planner", desc: "Plan your multi-fort trek with our intelligent trip planner — auto-calculates budgets, timelines, and difficulty levels." },
    { icon: FaMapMarkedAlt, title: "Interactive Maps", desc: "Live maps with GPS coordinates, nearby attractions, food stalls, parking locations and trail markers." },
    { icon: FaCamera, title: "Photo Spots & Tips", desc: "Best photography locations, golden hour timings, and composition tips for each fort." },
    { icon: FaHistory, title: "Rich Historical Context", desc: "Battle histories, architectural details, and stories of the Maratha warriors who defended these forts." },
  ];

  const stats = [
    { value: "50", suffix: "+", label: "Forts Catalogued", icon: FaFortAwesome },
    { value: "10", suffix: "+", label: "Trek Routes", icon: FaHiking },
    { value: "1674", suffix: "", label: "Legacy Since", icon: FaStar },
    { value: "100", suffix: "%", label: "Free & Open", icon: FaGlobeAsia },
  ];

  const techStack = [
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
  ];

  const [statsRef, statsInView] = useInView(0.3);

  return (
    <div className="min-h-screen bg-royal-black text-gray-300 font-body selection:bg-saffron selection:text-black overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO SECTION - with navbar clearance
      ═══════════════════════════════════════════ */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <img
          src={heroBg}
          alt="Sahyadri fort landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110"
          style={{ filter: 'saturate(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-black via-royal-black/40 to-royal-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-royal-black/70 via-transparent to-royal-black/70"></div>

        {/* Saffron aura glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-saffron/[0.06] blur-[150px] rounded-full pointer-events-none"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-saffron/30"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + i * 14}%`,
                animation: `float ${4 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`
              }}
            ></div>
          ))}
        </div>

        {/* Content — pt-28 ensures full navbar clearance */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-16">
          {/* Decorative top ornament */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-saffron/60"></div>
            <div className="relative">
              <FaShieldAlt className="text-saffron text-2xl sm:text-3xl" />
              <div className="absolute inset-0 blur-lg bg-saffron/30 rounded-full"></div>
            </div>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-saffron/60"></div>
          </div>

          <p className="text-saffron font-cinematic text-sm sm:text-base tracking-[0.35em] uppercase mb-5 opacity-90">
            आमचे ध्येय | Our Mission
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-cinematic font-black text-white drop-shadow-2xl mb-6 leading-[1.1]">
            Preserving the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-orange-400 to-saffron">
              Legacy of Swarajya
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[3px] w-8 bg-saffron/40 rounded-full"></div>
            <div className="h-[3px] w-16 bg-saffron rounded-full"></div>
            <div className="h-[3px] w-8 bg-saffron/40 rounded-full"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300/90 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-2 mb-10">
            Dedicated to documenting and guiding explorers through the majestic forts
            of Chhatrapati Shivaji Maharaj. Bridging history with modern adventure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/forts"
              className="group px-8 py-4 bg-gradient-to-r from-saffron to-orange-500 text-black font-bold rounded-xl hover:from-orange-500 hover:to-saffron transition-all duration-500 flex items-center gap-2 text-base shadow-[0_0_25px_rgba(255,153,51,0.3)] hover:shadow-[0_0_40px_rgba(255,153,51,0.5)] hover:-translate-y-0.5"
            >
              Explore Forts <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/sinhagad-itinerary"
              className="px-8 py-4 border-2 border-saffron/40 text-saffron font-bold rounded-xl hover:bg-saffron/10 hover:border-saffron/70 transition-all duration-400 text-base backdrop-blur-sm"
            >
              View Sample Itinerary
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <FaChevronDown className="text-saffron/50 text-xl mx-auto" />
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════════
          STATS BAR - Animated Counters
      ═══════════════════════════════════════════ */}
      <section ref={statsRef} className="relative z-10">
        <div className="bg-gradient-to-r from-royal-gray/90 via-royal-gray/70 to-royal-gray/90 backdrop-blur-xl border-y border-saffron/10">
          <div className="container mx-auto px-4 py-8 sm:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
              {stats.map((stat, i) => (
                <StatItem key={i} stat={stat} inView={statsInView} />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          ABOUT THE PROJECT
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-saffron/[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[40%] h-[50%] bg-orange-600/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <FadeInSection>
            <div className="text-center mb-14 sm:mb-20">
              <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">The Vision</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-5">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-400">MahaFort Guide</span>?
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
                <div className="h-[3px] w-12 bg-saffron rounded-full"></div>
                <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
              </div>
            </div>
          </FadeInSection>

          {/* Two-column layout: Image + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 sm:mb-24">
            {/* Left: Shivaji Image */}
            <FadeInSection delay={200}>
              <div className="relative group order-2 lg:order-1 max-w-lg mx-auto lg:mx-0">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 bg-gradient-to-br from-saffron/20 via-orange-500/10 to-transparent rounded-[2rem] blur-xl group-hover:blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-b from-royal-gray to-royal-black border border-saffron/20 rounded-[1.5rem] overflow-hidden shadow-2xl group-hover:border-saffron/40 transition-all duration-500">
                  {/* Image */}
                  <div className="bg-gradient-to-b from-[#1a1208] via-[#0d0a06] to-royal-black p-5 sm:p-7">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={shivajiImg}
                        alt="Chhatrapati Shivaji Maharaj"
                        className="w-full h-auto max-h-[500px] object-contain group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      {/* Overlay shimmer */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="p-5 text-center border-t border-saffron/15 bg-gradient-to-b from-royal-black/80 to-royal-black">
                    <p className="text-saffron font-cinematic text-lg sm:text-xl font-bold tracking-wide">छत्रपती शिवाजी महाराज</p>
                    <p className="text-gray-400 text-sm mt-1">Founder of the Maratha Empire</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Right: Project description */}
            <div className="order-1 lg:order-2">
              <div className="space-y-5 sm:space-y-7">
                {[
                  { icon: FaBookOpen, title: "A Digital Tribute", text: "MahaFort Guide is more than a travel platform — it's a digital monument to the architectural genius and military brilliance of the Maratha Empire. Documenting 50+ forts with detailed trek guides and historical context." },
                  { icon: FaShieldAlt, title: "Preserve Heritage", text: "Every fort has a story of valor, strategy, and sacrifice. We document detailed histories, architectural layouts, battle accounts, and the warriors who made these fortifications legendary." },
                  { icon: FaUsers, title: "Empower Explorers", text: "From first-time trekkers to seasoned mountaineers — we provide accurate route data, difficulty ratings, safety info, food guides, best photo spots, and downloadable itineraries." },
                  { icon: FaBookOpen, title: "Comprehensive Fort Data", text: <>Every fort features detailed <strong className="text-saffron">trek routes, food guides, safety alerts, budget breakdowns</strong>, and historical timelines — everything you need for a perfect fort trek.</> },
                ].map((item, i) => (
                  <FadeInSection key={i} delay={300 + i * 150}>
                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-all duration-400">
                      <div className="bg-gradient-to-br from-saffron/15 to-orange-600/10 p-3 rounded-xl text-saffron flex-shrink-0 border border-saffron/10 group-hover:border-saffron/30 group-hover:shadow-[0_0_15px_rgba(255,153,51,0.15)] transition-all duration-400">
                        <item.icon className="text-lg sm:text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-cinematic font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">{item.title}</h3>
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          FEATURES GRID
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Textured background */}
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-royal-black via-royal-gray/40 to-royal-black"></div>

        {/* Top divider line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent"></div>
        {/* Bottom divider line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">Platform Features</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-5">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-400">Offer</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mb-5">
                <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
                <div className="h-[3px] w-12 bg-saffron rounded-full"></div>
                <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                Everything you need to explore Maharashtra's rich fort heritage — all in one place.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((feature, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <FeatureCard feature={feature} index={i} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          TECHNOLOGY STACK
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-saffron/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <FaCode className="text-saffron text-lg" />
                <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase">Built With</p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-5">
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-400">Stack</span>
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
                <div className="h-[3px] w-12 bg-saffron rounded-full"></div>
                <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
              </div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, i) => (
              <FadeInSection key={i} delay={i * 60}>
                <div className="group bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center hover:border-saffron/40 transition-all duration-400 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-3 group-hover:scale-[1.8] transition-all duration-400 group-hover:shadow-[0_0_12px_var(--dot-color)]"
                    style={{ backgroundColor: tech.color, '--dot-color': tech.color + '60' }}
                  ></div>
                  <p className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{tech.name}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          MEET THE TEAM
      ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-saffron/[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-orange-600/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <FadeInSection>
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">The Warriors</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-5">
                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-400">Mavale</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mb-5">
                <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
                <div className="h-[3px] w-12 bg-saffron rounded-full"></div>
                <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
                A passionate team of developers, designers, and history enthusiasts building this digital tribute.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {teamMembers.map((member, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <TeamCard member={member} />
              </FadeInSection>
            ))}
          </div>
          {/* Mentor Section */}
          <div className="mt-20 flex flex-col items-center justify-center">
                        {/* Mentor Section Header */}
                        <div className="text-center mb-10 sm:mb-12">
                          <p className="text-saffron font-cinematic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3">The Guide</p>
                          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white mb-5">
                            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-400">Mentor</span>
                          </h2>
                          <div className="flex items-center justify-center gap-2 mb-5">
                            <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
                            <div className="h-[3px] w-12 bg-saffron rounded-full"></div>
                            <div className="h-[3px] w-6 bg-saffron/30 rounded-full"></div>
                          </div>
                          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
                            Guiding us with expertise, vision, and encouragement throughout our journey.
                          </p>
                        </div>
            <div className="bg-gradient-to-r from-white/[0.02] to-white/[0.06] border border-white/[0.1] rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[0_15px_40px_rgba(255,153,51,0.15)] hover:border-saffron/30 transition-all duration-500 max-w-4xl max-h-[1000px] w-full flex flex-col sm:flex-row items-stretch relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-saffron/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              {/* Image Side */}
              <div className="flex-shrink-0 w-full sm:w-2/5 h-80 sm:h-auto sm:min-h-[380px] bg-royal-black flex items-center justify-center p-0 relative overflow-hidden group">
                <div className="absolute inset-0 bg-saffron/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src={mentorImg}
                  alt="Dr. Harsha A. Bhute"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient side fade into text area (on desktop) */}
                <div className="hidden sm:block absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-royal-black to-transparent z-20"></div>
                <div className="sm:hidden absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-royal-black to-transparent z-20"></div>
              </div>
              
              {/* Content Side */}
              <div className="p-8 sm:p-12 flex-1 flex flex-col items-start justify-center text-left bg-royal-black relative z-30">
                <h3 className="text-2xl sm:text-3xl font-cinematic font-bold text-white mb-2">Dr. <span className="text-saffron">Harsha A. Bhute</span></h3>
                <div className="w-16 h-1 bg-gradient-to-r from-saffron to-orange-500 rounded-full mb-4"></div>
                
                <p className="text-sm sm:text-base text-gray-300 font-bold uppercase tracking-wide mb-6">
                  Associate Professor
                  <br/>
                  <span className="text-xs text-saffron font-medium">Dept. of Information Technology, PCCoE</span>
                </p>
                
                <div className="space-y-4 text-gray-400 text-sm sm:text-base w-full">
                  <div className="flex items-start gap-4 hover:text-white transition-colors duration-300 group">
                    <span className="bg-white/5 p-2 rounded-lg text-saffron group-hover:bg-saffron/20 transition-colors">📍</span> 
                    <span className="mt-1">Dept. of Information Technology,<br/>PCCoE, Nigdi, Pune – 411044</span>
                  </div>
                  <div className="flex items-center gap-4 hover:text-white transition-colors duration-300 group">
                    <span className="bg-white/5 p-2 rounded-lg text-saffron group-hover:bg-saffron/20 transition-colors">📞</span> 
                    <span>+91 94228 44610</span>
                  </div>
                  <div className="flex items-center gap-4 hover:text-white transition-colors duration-300 group">
                    <span className="bg-white/5 p-2 rounded-lg text-saffron group-hover:bg-saffron/20 transition-colors">✉️</span> 
                    <span>harsha.bhute@pccoepune.org</span>
                  </div>
                  <div className="flex items-center gap-4 hover:text-white transition-colors duration-300 group">
                    <span className="bg-white/5 p-2 rounded-lg text-saffron group-hover:bg-saffron/20 transition-colors">🔗</span>
                    <a href="https://linkedin.com/in/dr-harsha-bhute" target="_blank" rel="noopener noreferrer" className="text-saffron hover:underline break-all">linkedin.com/in/dr-harsha-bhute</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          CTA FOOTER SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.06]">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-royal-black/80 to-royal-black"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron/30 to-transparent"></div>

        {/* Big glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-saffron/[0.06] blur-[150px] rounded-full pointer-events-none"></div>

        <FadeInSection>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="relative inline-block mb-6 sm:mb-8">
              <FaFortAwesome className="text-saffron text-5xl sm:text-7xl mx-auto" />
              <div className="absolute inset-0 blur-2xl bg-saffron/20 rounded-full scale-150"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-black text-white mb-5 sm:mb-6 leading-tight">
              Ready to Explore the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-orange-400">Legacy</span>?
            </h2>
            <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10">
              Start your journey through the mighty forts of Maharashtra. Every stone has a story waiting to be discovered.
            </p>
            <Link
              to="/forts"
              className="group inline-flex items-center gap-3 px-10 sm:px-14 py-4 sm:py-5 bg-gradient-to-r from-saffron to-orange-500 text-black font-bold text-base sm:text-lg rounded-xl hover:from-orange-500 hover:to-saffron transition-all duration-500 shadow-[0_0_30px_rgba(255,153,51,0.3)] hover:shadow-[0_0_50px_rgba(255,153,51,0.5)] hover:-translate-y-0.5"
            >
              Begin Your Journey <FaChevronRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </FadeInSection>
      </section>


      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-royal-gray/50 border-t border-white/5 py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; 2026 MahaFort Guide &mdash; Built with ❤️ for the legacy of Swarajya
          </p>
          <p className="text-gray-600 text-xs mt-2 italic">
            "शत्रूच्या ताकदीशी नव्हे, तर शत्रूच्या बुद्धिशी लढा" — छत्रपती शिवाजी महाराज
          </p>
        </div>
      </footer>

      {/* Inline animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
};


/* ═══════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════ */

/* ─── Fade In on Scroll ─── */
const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

/* ─── Stat Counter Item ─── */
const StatItem = ({ stat, inView }) => {
  const count = useCounter(stat.value, 1800, inView);
  return (
    <div className="text-center group">
      <div className="relative inline-block mb-3">
        <stat.icon className="text-saffron text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 blur-md bg-saffron/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <p className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-black text-white">
        {isNaN(parseInt(stat.value)) ? stat.value : count}{stat.suffix}
      </p>
      <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-[0.15em] mt-2 font-medium">{stat.label}</p>
    </div>
  );
};

/* ─── Feature Card ─── */
const FeatureCard = ({ feature, index }) => (
  <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-7 hover:border-saffron/40 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
    {/* Corner glow on hover */}
    <div className="absolute -top-16 -right-16 w-32 h-32 bg-saffron/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-600"></div>
    {/* Bottom line */}
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-saffron to-orange-400 group-hover:w-full transition-all duration-700"></div>

    <div className="relative z-10">
      <div className="bg-gradient-to-br from-saffron/15 to-orange-600/10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-saffron mb-5 group-hover:shadow-[0_0_20px_rgba(255,153,51,0.2)] transition-all duration-400 border border-saffron/10 group-hover:border-saffron/30">
        <feature.icon className="text-xl sm:text-2xl" />
      </div>
      <h3 className="text-base sm:text-lg font-cinematic font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300">{feature.title}</h3>
      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
    </div>
  </div>
);

/* ─── Team Card ─── */
const TeamCard = ({ member }) => (
  <div className="flex flex-col h-full group bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-saffron/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_40px_rgba(255,153,51,0.12)]">
    {/* Image area */}
    <div className="h-56 sm:h-64 overflow-hidden relative flex-shrink-0">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />
      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-black/90 via-royal-black/20 to-transparent opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-saffron/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    {/* Info area */}
    <div className="flex-1 flex flex-col items-center justify-between p-5 pt-0 bg-royal-black relative z-10">
      {/* Name & Role slightly offset upwards for integration with image */}
      <div className="flex flex-col items-center -mt-6 sm:-mt-8 w-full">
        <h3 className="text-base sm:text-lg font-cinematic font-bold text-white mb-2 group-hover:text-saffron transition-colors duration-300 drop-shadow-md">{member.name}</h3>
        <p className="text-xs sm:text-sm text-saffron font-bold uppercase tracking-wider mb-4 px-2 min-h-[40px] flex items-center text-center leading-snug">{member.role}</p>
      </div>

      <div className="mt-auto flex justify-center gap-3 w-full pb-2">
        <SocialLink icon={FaLinkedin} href={member.linkedin} />
        <SocialLink icon={FaGithub} href={member.github} />
      </div>
    </div>
  </div>
);

/* ─── Social Link ─── */
const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-saffron transition-all duration-300 p-2.5 bg-white/5 hover:bg-saffron/10 rounded-full hover:scale-110 border border-transparent hover:border-saffron/20"
  >
    <Icon size={16} />
  </a>
);

export default About;