const fs = require('fs');
let code = fs.readFileSync('frontend/src/pages/Home.jsx', 'utf8');

const marker = '  return (\n    <div className=\"min-h-screen bg-[#0f0e0e] text-orange-50 font-sans\">\n      <Navbar />';
const startIndex = code.indexOf(marker);

const replacement = \
  return (
    <div className="min-h-screen bg-[#0f0e0e] text-orange-50 font-sans">
      <Navbar />

      {/* Hero Section with Full Background Layer */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-32 pb-16 px-6 lg:px-12 border-b border-gray-900/50">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen mix-blend-mode-overlay filter grayscale-[10%]"
          style={{ backgroundImage: \\\url(\\\)\\\ }}
        ></div>
        
        {/* Dark Gradient Overlays for Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-[#0f0e0e]/80 to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f0e0e] via-[#0f0e0e]/40 to-transparent"></div>
        <div className="absolute inset-0 z-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Top Title Block */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-5 bg-gradient-to-br from-orange-400 to-amber-600 rounded-[2px] shadow-[0_0_15px_rgba(249,115,22,0.3)]"></div>
            <h3 className="text-orange-500 tracking-[0.25em] font-bold text-xs uppercase">The Great Maratha Legacy</h3>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter uppercase leading-[0.85] mb-10 drop-shadow-2xl">
            <span className="text-white block">Guarding</span>
            <span className="text-white block">The</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe1b5] via-[#ffb95e] to-amber-600 block drop-shadow-sm pt-2">Sahyadris</span>
          </h1>
          
          <div className="border-l-2 border-orange-500/80 pl-6 mb-16 max-w-[500px]">
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed drop-shadow-lg">
              Explore the majestic forts of Chhatrapati Shivaji Maharaj. 
              Witness history etched in stone — Sinhagad, Janjira, Sindhudurg & Vishalgad.
            </p>
          </div>
          
          <div className="flex gap-12 md:gap-20 pt-4">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">88</div>
              <div className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase mt-2">Forts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">29</div>
              <div className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase mt-2">Districts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">100%</div>
              <div className="text-[10px] font-bold text-orange-600 tracking-[0.2em] uppercase mt-2">Glory</div>
            </div>
          </div>
        </div>
      </section>

      {/* Shivaji Maharaj Spotlight Section */}
      <section className="relative px-6 py-20 lg:py-32 bg-[#0f0e0e] z-20 flex justify-center">
        <div className="max-w-5xl w-full">
          <div className="bg-[#151414] border border-gray-800/60 rounded-[32px] p-8 lg:p-14 shadow-2xl relative overflow-hidden group hover:border-gray-700 transition-colors duration-500">
              <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center md:items-start relative z-10">
                  <div className="w-[300px] h-[380px] shrink-0 rounded-2xl overflow-hidden border-[3px] border-[#2a1c13] shadow-[0_0_40px_rgba(30,15,5,0.8)] relative group-hover:border-orange-900/50 transition-colors duration-500">
                      <img src={shivaji} alt="Chhatrapati Shivaji Maharaj" className="w-full h-full object-cover" />
                      <div className="bg-gradient-to-t from-black via-black/80 to-transparent absolute bottom-0 left-0 right-0 p-5">
                          <p className="text-center text-orange-500/90 font-bold text-[22px] font-serif tracking-in">??????? ?????? ??????</p>
                      </div>
                  </div>
                  
                  <div className="flex-1 space-y-6 pt-4">
                      <div>
                        <h2 className="text-5xl md:text-[64px] font-black text-white uppercase leading-[0.9] tracking-tighter drop-shadow-md">
                            <span className="block mb-1">Chhatrapati</span>
                            <span className="block mb-1">Shivaji</span>
                            <span className="block">Maharaj</span>
                        </h2>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-[0.15em] pt-4">
                          Founder of the <span className="text-[#ff9838]">Maratha Empire</span>
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed text-sm lg:text-base max-w-xl font-light">
                          The great warrior king who established <strong className="text-white font-medium">Hindavi Swarajya</strong>. 
                          Known for his military genius and progressive administration, he built an impregnable defense system 
                          across the Sahyadri range.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 pt-6">
                          <div className="bg-[#1a1919] px-6 py-5 rounded-2xl border border-gray-800/80 min-w-[160px]">
                              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Born</div>
                              <div className="text-white font-bold text-base">19 Feb 1630</div>
                          </div>
                          <div className="bg-[#1a1919] px-6 py-5 rounded-2xl border border-gray-800/80 min-w-[160px]">
                              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Coronation</div>
                              <div className="text-white font-bold text-base">6 June 1674</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="absolute top-1/2 left-[80%] -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 py-20 bg-[#121111] border-t border-gray-900/50 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-orange-600 tracking-[0.25em] font-bold text-xs uppercase mb-4">Our Collection</h3>
            <h2 className="text-4xl md:text-[44px] font-black text-white uppercase tracking-tighter">
              Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb95e] to-amber-600">88 Forts</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm font-light">
              The most majestic fortifications of the Maratha Empire — each with rich history, trek guides & itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 mb-16 text-left">
            {currentForts.map((fort, index) => (
              <FortCard key={index} fort={fort} />
            ))}
          </div>

          {visibleCount < forts.length && (
             <div className="flex flex-col items-center gap-6 mt-16">
                <button 
                  onClick={loadMore}
                  className="px-8 py-3 bg-transparent border border-gray-800 hover:border-gray-600 text-gray-400 hover:text-white rounded-full transition-all text-[11px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 w-max"
                >
                  View More Forts <FaChevronRight className="text-gray-500 text-[10px]" />
                </button>
                <Link to="/forts" className="px-8 py-4 bg-transparent border border-gray-800 hover:border-orange-500/50 text-[#ff9838] hover:bg-[#ff9838]/5 rounded-full transition-all text-[11px] font-bold tracking-[0.2em] uppercase inline-block">
                  Search & Filter Forts &gt;
                </Link>
             </div>
          )}
        </div>
      </section>
      
      {/* Call to Action Footer Area */}
      <section className="py-24 bg-gradient-to-b from-[#121111] to-[#0a0a0a] text-center px-6">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-[40px] font-black text-white uppercase mb-10 tracking-tight">Ready for the Expedition?</h2>
              <Link to="/trip-planner" className="px-10 py-[18px] bg-[#ff9838] hover:bg-[#fca554] text-black font-black rounded-full transition-colors text-sm tracking-[0.1em] shadow-[0_0_40px_rgba(255,152,56,0.15)] inline-block">
                  PLAN YOUR TREK
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;
\;

if (startIndex !== -1) {
  code = code.substring(0, startIndex) + replacement;
  fs.writeFileSync('frontend/src/pages/Home.jsx', code, 'utf8');
  console.log('Successfully patched Home.jsx');
} else {
  console.log('Could not find marker.');
}
