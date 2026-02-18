import janjiraImg from '../assets/janjira.jpg';
import sindhudurgImg from '../assets/sindhdurg.jpg';
import vishalgadImg from '../assets/vishalgad-hero.jpg';
import sinhagadImg from '../assets/sinhagad-fort.jpg';

// Maharashtra forts database — 4 implemented forts for midterm review
export const staticForts = [
    // 1. Sindhudurg Fort - Ocean Fortress of Shivaji Maharaj
    {
        _id: 'sindhudurg',
        name: 'Sindhudurg Fort',
        location: { district: 'Sindhudurg' },
        difficulty: 'Easy',
        description: 'Massive sea fortress built by Chhatrapati Shivaji Maharaj (1664-1667) on an island off Malvan coast. Houses the only temple dedicated to Shivaji Maharaj.',
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
        history: { builtBy: 'Chhatrapati Shivaji Maharaj' }
    },

    // 2. Vishalgad Fort - Battle of Pavan Khind
    {
        _id: 'vishalgad',
        name: 'Vishalgad Fort',
        location: { district: 'Kolhapur' },
        difficulty: 'Easy',
        description: 'Legendary fort associated with Chhatrapati Shivaji Maharaj\'s escape and the heroic Battle of Pavan Khind (1660). Baji Prabhu Deshpande sacrificed his life here.',
        images: [vishalgadImg],
        rating: 4.5,
        visitors: 9500,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '900 m',
        historicalSignificance: 'Battle of Pavan Khind (1660), Shivaji Maharaj\'s refuge fort',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Maratha Empire' }
    },

    // 3. Sinhagad Fort - Battle of Sinhagad
    {
        _id: 'sinhagad',
        name: 'Sinhagad Fort',
        location: { district: 'Pune' },
        difficulty: 'Moderate',
        description: 'Historic hilltop fortress famous for the Battle of Sinhagad. Tanaji Malusare sacrificed his life here in 1670.',
        images: [sinhagadImg],
        rating: 4.6,
        visitors: 15000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1312 m',
        historicalSignificance: 'Site of the famous Battle of Sinhagad (1670)'
    },

    // 4. Murud-Janjira Fort - Unconquered Sea Fort
    {
        _id: 'janjira',
        name: 'Murud Janjira Fort',
        location: { district: 'Raigad' },
        difficulty: 'Easy',
        description: 'Unconquered sea fortress accessible only by boat. Built by Siddis in 1567 AD, never captured by Marathas, Mughals, Portuguese, or British. Features 26 bastions, giant cannons, and freshwater lakes.',
        images: [janjiraImg],
        rating: 4.8,
        visitors: 8000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: 'Boat: ₹20-50',
        timings: '7:00 AM - 6:30 PM',
        altitude: '0 m (Sea level)',
        historicalSignificance: 'Unconquered sea fort, Never captured by any enemy'
    }
];

export default staticForts;
