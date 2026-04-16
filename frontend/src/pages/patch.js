const fs = require('fs');
let code = fs.readFileSync('frontend/src/pages/Home.jsx', 'utf8');

const replacement = 
  return (
    <div className="min-h-screen bg-[#0f0e0e] text-orange-50 font-sans">
      <Navbar />

      {/* Hero Section with Full Background Layer */}
      <section className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 lg:px-12">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: \url(\)\ }}
        ></div>
        
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f0e0e] via-transparent to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Top Title Block */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-6 bg-gradient-to-r from-orange-400 to-amber-600 rounded-sm"></div>
            <h3 className="text-orange-500 tracking-[0.2em] font-bold text-sm uppercase">The Great Maratha Legacy</h3>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-10 drop-shadow-2xl">
            <span className="text-white block">Guarding</span>
            <span className="text-white block">The</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-amber-700 block">Sahyadris</span>
          </h1>
          
          <div className="border-l-4 border-orange-500 pl-6 mb-12 max-w-2xl">
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed drop-shadow-md">
              Explore the majestic forts of Chhatrapati Shivaji Maharaj. 
              Witness history etched in stone — Sinhagad, Janjira, Sindhudurg & Vishalgad.
            </p>
          </div>
          
          <div className="flex gap-10 md:gap-16 pt-4">
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">88</div>
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mt-2">Forts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">29</div>
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mt-2">Districts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">100%</div>
              <div className="text-xs font-bold text-orange-500 tracking-widest uppercase mt-2">Glory</div>
            </div>
          </div>
        </div>
      </section>

      {/* Shivaji Maharaj Spotlight Section - Centered or Offset Based on Design */}
      <section className="relative px-6 py-20 bg-[#0f0e0e] -mt-10 lg:-mt-20 z-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#151414] border border-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
                  <div className="w-64 h-80 shrink-0 rounded-2xl overflow-hidden border-2 border-orange-900 shadow-[0_0_30px_rgba(234,88,12,0.15)] relative">
                      <img src={shivaji} alt="Chhatrapati Shivaji Maharaj" className="w-full h-full object-cover" />
                      <div className="bg-gradient-to-t from-black via-black/80 to-transparent absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-center text-orange-400 font-bold text-xl">??????? ?????? ??????</p>
                      </div>
                  </div>
                  
                  <div className="space-y-6 pt-4">
                      <div>
                        <h2 className="text-5xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter mb-2 shadow-black drop-shadow-md">
                            Chhatrapati
                        </h2>
                        <h2 className="text-5xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter mb-2 shadow-black drop-shadow-md">
                            Shivaji
                        </h2>
                        <h2 className="text-5xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter shadow-black drop-shadow-md">
                            Maharaj
                        </h2>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-orange-500 uppercase tracking-widest">
                          Founder of the <span className="text-amber-600">Maratha Empire</span>
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed text-sm lg:text-base max-w-xl">
                          The great warrior king who established <strong className="text-white">Hindavi Swarajya</strong>. 
                          Known for his military genius and progressive administration, he built an impregnable defense system 
                          across the Sahyadri range.
                      </p>
                      
                      <div className="flex flex-wrap gap-6 pt-6">
                          <div className="bg-[#1a1919] px-6 py-4 rounded-xl border border-gray-800 min-w-[140px]">
                              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Born</div>
                              <div className="text-white font-bold text-lg">19 Feb 1630</div>
                          </div>
                          <div className="bg-[#1a1919] px-6 py-4 rounded-xl border border-gray-800 min-w-[140px]">
                              <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Coronation</div>
                              <div className="text-white font-bold text-lg">6 June 1674</div>
                          </div>
                      </div>
                  </div>
              </div>
              
              {/* Decorative background glow inside the card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 py-20 bg-[#121111] border-t border-gray-900 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-orange-600 tracking-[0.2em] font-bold text-sm uppercase mb-4">Our Collection</h3>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">88 Forts</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm lg:text-base">
              The most majestic fortifications of the Maratha Empire — each with rich history, trek guides & itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-left">
            {currentForts.map((fort, index) => (
              <FortCard key={index} fort={fort} />
            ))}
          </div>

          {visibleCount < forts.length && (
             <div className="flex flex-col items-center gap-6 mt-12">
                <button 
                  onClick={loadMore}
                  className="px-8 py-3 bg-transparent border border-gray-800 hover:border-orange-500 text-gray-300 hover:text-white rounded-full transition-all text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2"
                >
                  View More Forts <FaChevronRight className="text-orange-500" />
                </button>
                <Link to="/forts" className="px-8 py-4 bg-transparent border border-gray-800 hover:border-orange-500 text-orange-500 hover:bg-orange-900/20 rounded-full transition-all text-xs font-bold tracking-[0.15em] uppercase inline-block">
                  Search & Filter Forts &gt;
                </Link>
             </div>
          )}
        </div>
      </section>
      
      {/* Call to Action Footer Area */}
      <section className="py-24 bg-gradient-to-b from-[#121111] to-black text-center px-6 border-t border-gray-900/50">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 tracking-tight">Ready for the Expedition?</h2>
              <Link to="/trip-planner" className="px-10 py-4 bg-orange-500 hover:bg-orange-400 text-black font-black rounded-full transition-all text-sm tracking-wide shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                  PLAN YOUR TREK
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;
\;

const startIndex = code.indexOf('  return (\\n    <div className="min-h-screen bg-[#0f0e0e] text-orange-50 font-sans">');
if (startIndex !== -1) {
  code = code.substring(0, startIndex) + replacement;
  fs.writeFileSync('frontend/src/pages/Home.jsx', code, 'utf8');
  console.log('Successfully patched Home.jsx');
} else {
  console.log('Could not find startIndex');
}
