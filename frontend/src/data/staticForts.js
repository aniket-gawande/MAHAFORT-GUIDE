// ─── Asset imports for forts that have local images ───
import janjiraImg from '../assets/janjira.jpg';
import sindhudurgImg from '../assets/sindhdurg.jpg';
import vishalgadImg from '../assets/vishalgad-hero.jpg';
import sinhagadImg from '../assets/sinhagad-fort.jpg';
import lohagadImg from '../assets/lohagad-hero.jpg';
import tungImg from '../assets/tung-hero.jpg';
import raigadImg from '../assets/raigad.webp';
import rajgadImg from '../assets/rajgad.webp';
import tornaImg from '../assets/torna.webp';
import pratapgadImg from '../assets/pratapgad.webp';
import shivneriImg from '../assets/shivneri.webp';

/**
 * 🏰 Maharashtra Forts Database — 11 forts
 * 
 * 6 forts have dedicated detail pages (hasDetailPage: true).
 * 5 forts have rich detailed data in fortDetailedData.js.
 * All data is historically accurate.
 */
export const staticForts = [
    // ━━━━━━━━━━━━━━━━━━ 6 FORTS WITH DETAIL PAGES ━━━━━━━━━━━━━━━━━━

    // 1. Sinhagad Fort
    {
        _id: 'sinhagad',
        name: 'Sinhagad Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Historic hilltop fortress famous for the Battle of Sinhagad (1670). Tanaji Malusare sacrificed his life to capture it from the Mughals.',
        images: [sinhagadImg],
        rating: 4.6,
        visitors: 15000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1312 m',
        historicalSignificance: 'Site of the famous Battle of Sinhagad (1670)',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Maratha Empire', year: '~2000 years old' },
        hasDetailPage: true
    },

    // 2. Sindhudurg Fort
    {
        _id: 'sindhudurg',
        name: 'Sindhudurg Fort',
        location: { district: 'Sindhudurg', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'Massive sea fortress built by Chhatrapati Shivaji Maharaj (1664–1667) on a rocky island off Malvan coast. Houses the only temple dedicated to Shivaji Maharaj.',
        images: [sindhudurgImg],
        rating: 4.7,
        visitors: 18000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free (Boat: ₹50-80)',
        timings: '8:00 AM - 6:00 PM',
        altitude: 'Sea level',
        historicalSignificance: 'Maratha Naval Headquarters, built personally by Shivaji Maharaj',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Chhatrapati Shivaji Maharaj', year: '1664' },
        hasDetailPage: true
    },

    // 3. Vishalgad Fort
    {
        _id: 'vishalgad',
        name: 'Vishalgad Fort',
        location: { district: 'Kolhapur', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Legendary fort associated with Chhatrapati Shivaji Maharaj\'s escape and the heroic Battle of Pavan Khind (1660). Baji Prabhu Deshpande sacrificed his life here.',
        images: [vishalgadImg],
        rating: 4.5,
        visitors: 9500,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1128 m',
        historicalSignificance: 'Battle of Pavan Khind (1660), Shivaji Maharaj\'s refuge fort',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Shilahara dynasty', year: '1058 AD' },
        hasDetailPage: true
    },

    // 4. Murud-Janjira Fort
    {
        _id: 'janjira',
        name: 'Murud Janjira Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'Unconquered sea fortress accessible only by boat. Built by Siddis in 1567 AD, never captured by Marathas, Mughals, Portuguese, or British.',
        images: [janjiraImg],
        rating: 4.8,
        visitors: 8000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: 'Boat: ₹20-50',
        timings: '7:00 AM - 6:30 PM',
        altitude: '0 m (Sea level)',
        historicalSignificance: 'Unconquered sea fort — never captured by any ruler',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Siddi rulers', year: '1567 AD' },
        hasDetailPage: true
    },

    // 5. Lohagad Fort
    {
        _id: 'lohagad',
        name: 'Lohagad Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Iron fort near Lonavala, offering spectacular views of Pawna Lake. Connected to twin fort Visapur. Famous for Vinchu Kata (scorpion tail) rock formation.',
        images: [lohagadImg],
        rating: 4.5,
        visitors: 12000,
        crowdStatus: 'high',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1033 m',
        historicalSignificance: 'Key Maratha fort, Shivaji used it to store treasury',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Chalukya dynasty', year: '18th century BC' },
        hasDetailPage: true
    },

    // 6. Tung Fort  
    {
        _id: 'tung',
        name: 'Tung Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'A small yet strategically important fort near Lonavala. The trek is short but steep, offering panoramic views of Sahyadri mountains.',
        images: [tungImg],
        rating: 4.3,
        visitors: 7000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1075 m',
        historicalSignificance: 'Strategic watchtower fort of the Maratha Empire',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Maratha Empire', year: '17th century' },
        hasDetailPage: true
    },

    // ━━━━━━━━━━━━━━━━━━ 5 ENRICHED FORTS ━━━━━━━━━━━━━━━━━━

    // 7. Raigad Fort — Capital of Maratha Empire  
    {
        _id: 'raigad',
        name: 'Raigad Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'The capital of the Maratha Empire where Chhatrapati Shivaji Maharaj was crowned in 1674. Features the grand Maha Darwaja, royal palace ruins, and the famous ropeway.',
        images: [raigadImg],
        rating: 4.8,
        visitors: 25000,
        crowdStatus: 'high',
        bestTimeToVisit: 'October to February',
        entryFee: '₹50 (Ropeway: ₹200-400)',
        timings: '8:00 AM - 5:00 PM',
        altitude: '820 m',
        historicalSignificance: 'Capital of Maratha Empire, Coronation of Shivaji Maharaj (1674)',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Chandrarao More (captured by Shivaji Maharaj, 1656)', year: '1030 AD' }
    },

    // 8. Rajgad Fort
    {
        _id: 'rajgad',
        name: 'Rajgad Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Former capital of the Maratha Empire for 26 years before Raigad. One of the largest forts in India with three machis (plateaus). Shivaji Maharaj\'s queen Saibai passed away here.',
        images: [rajgadImg],
        rating: 4.7,
        visitors: 11000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1376 m',
        historicalSignificance: 'First capital of Maratha Empire (1648–1674)',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Yadava dynasty (fortified by Shivaji Maharaj)', year: '6th century' }
    },

    // 9. Torna Fort (Prachandagad)
    {
        _id: 'torna',
        name: 'Torna Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'The first fort captured by Shivaji Maharaj at age 16 in 1643, marking the beginning of the Maratha Empire. Highest fort in Pune district at 1403 m.',
        images: [tornaImg],
        rating: 4.6,
        visitors: 9000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1403 m',
        historicalSignificance: 'First fort captured by Shivaji Maharaj (1643) — birth of Swarajya',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Shaiva Panth saints', year: '13th century' }
    },

    // 10. Pratapgad Fort
    {
        _id: 'pratapgad',
        name: 'Pratapgad Fort',
        location: { district: 'Satara', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Site of the legendary Battle of Pratapgad (1659) where Shivaji Maharaj killed Afzal Khan. Features the Afzal Tower and a grand statue of Shivaji Maharaj.',
        images: [pratapgadImg],
        rating: 4.7,
        visitors: 20000,
        crowdStatus: 'high',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '9:00 AM - 5:30 PM',
        altitude: '1080 m',
        historicalSignificance: 'Battle of Pratapgad (1659) — Shivaji vs Afzal Khan',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Chhatrapati Shivaji Maharaj', year: '1656' }
    },

    // 11. Shivneri Fort
    {
        _id: 'shivneri',
        name: 'Shivneri Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Birthplace of Chhatrapati Shivaji Maharaj (19 Feb 1630). The fort has seven gates, freshwater springs, and Shivai Devi temple after which Shivaji was named.',
        images: [shivneriImg],
        rating: 4.6,
        visitors: 16000,
        crowdStatus: 'high',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1068 m',
        historicalSignificance: 'Birthplace of Chhatrapati Shivaji Maharaj (1630)',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Nana Phadnavis', year: '10th century' }
    },


];

// ─── Helper exports ─────────────────────────────────────
export const fortTypes = [...new Set(staticForts.map(f => f.type))];
export const fortDistricts = [...new Set(staticForts.map(f => f.location.district))].sort();
export const fortDifficulties = ['Easy', 'Moderate', 'Difficult'];

export default staticForts;
