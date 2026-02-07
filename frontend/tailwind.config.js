/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-black': '#050505',     // Darker than pitch black
        'royal-gray': '#121212',      // Card backgrounds
        'saffron': '#FF9933',         // The core Maratha color
        'saffron-dim': '#CC7A29',     // For borders/accents
        'mist': 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        'cinematic': ['"Cinzel"', 'serif'],     // Headings
        'body': ['"Montserrat"', 'sans-serif'], // Paragraphs
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #050505 100%)',
        'saffron-glow': 'radial-gradient(circle, rgba(255,153,51,0.15) 0%, rgba(0,0,0,0) 70%)',
      }
    },
  },
  plugins: [],
}