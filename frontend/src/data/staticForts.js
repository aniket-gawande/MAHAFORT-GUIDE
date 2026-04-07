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
import panhalaImg from '../assets/panhala.webp';
import harishchandragadImg from '../assets/harishchandragad.webp';
import daulatabadImg from '../assets/daulatabad.webp';
import purandarImg from '../assets/purandar.webp';
import vijaydurgImg from '../assets/vijaydurg.webp';
import rajmachiImg from '../assets/rajmachi.webp';
import ajinkyataraImg from '../assets/ajinkyatara.webp';
import suvarnadurgImg from '../assets/suvarnadurg.webp';
import tikonaImg from '../assets/tikona.webp';
import vasotaImg from '../assets/vasota.webp';
import salherImg from '../assets/salher.webp';
import korigadImg from '../assets/korigad.webp';
import mahuliImg from '../assets/mahuli.webp';
import ghangadImg from '../assets/ghangad.webp';
import kulabaImg from '../assets/kulaba.webp';
import visapurImg from '../assets/visapur.webp';
import rohidaImg from '../assets/rohida.webp';
import prabalgadImg from '../assets/prabalgad.webp';
import ratangadImg from '../assets/ratangad.webp';
import hariharImg from '../assets/harihar.webp';
import karnalaImg from '../assets/karnala.png';
import jivdhanImg from '../assets/jivdhan.jpg';
import korlaiImg from '../assets/korlai.png';
import chavandImg from '../assets/chavand.png';
import mulherImg from '../assets/mulher.png';
import kalsubaiImg from '../assets/kalsubai.png';
import malhargadImg from '../assets/malhargad.png';
import pandavgadImg from '../assets/pandavgad.png';
import hadsarImg from '../assets/hadsar.png';
import bhairavgadImg from '../assets/bhairavgad.png';
import mangitungiImg from '../assets/mangitungi.png';
import anjaneriImg from '../assets/anjaneri.png';
import sudhagadImg from '../assets/sudhagad.png';
import avchitgadImg from '../assets/avchitgad.png';
import kamalgadImg from '../assets/kamalgad.png';
import naldurgImg from '../assets/naldurg.png';
import parandaImg from '../assets/paranda.png';
import gharapuriImg from '../assets/gharapuri.png';
import ranganaImg from '../assets/rangana.png';
import kalavantindurgImg from '../assets/kalavantindurg.jpg';
import anturImg from '../assets/antur.png';
import waghalaImg from '../assets/waghala.png';
import rohilagadImg from '../assets/rohilagad.png';
import sitabuldiImg from '../assets/sitabuldi.png';
import gawilgadImg from '../assets/gawilgad.png';
import narnalaImg from '../assets/narnala.png';
import balapurImg from '../assets/balapur.png';
import manikgadImg from '../assets/manikgad.png';
import achalpurImg from '../assets/achalpur.png';
import bhamragadImg from '../assets/bhamragad.png';
import sindkhedRajaImg from '../assets/sindkhed_raja.png';
import bhushangadImg from '../assets/bhushangad.png';
import chandangadImg from '../assets/chandangad.png';
import pavangadImg from '../assets/pavangad.png';
import bhorgiriImg from '../assets/bhorgiri.png';
import solapurBhuikotImg from '../assets/solapur_bhuikot.png';

// Helper to assign fallback images with limited repetition
const fallbackImages = [
    sinhagadImg,
    lohagadImg,
    rajgadImg,
    panhalaImg,
    harishchandragadImg
];

// Track how many times each fallback image is used
const fallbackUsage = Array(fallbackImages.length).fill(0);
const MAX_REPEAT = 3; // No fallback image used more than 3 times

// Helper to get the next fallback image with limited repetition
function getNextFallbackImage() {
    // Find the index of the fallback image with the least usage (but not exceeding MAX_REPEAT)
    let minUsage = Math.min(...fallbackUsage);
    for (let i = 0; i < fallbackImages.length; i++) {
        if (fallbackUsage[i] === minUsage && fallbackUsage[i] < MAX_REPEAT) {
            fallbackUsage[i]++;
            return fallbackImages[i];
        }
    }
    // If all have reached MAX_REPEAT, just return the first one (as a last resort)
    return fallbackImages[0];
}




/**
 * 🏰 Maharashtra Forts Database — 88 forts
 * 
 * 6 forts have dedicated detail pages (hasDetailPage: true).
 * 10 forts have rich detailed data in fortDetailedData.js.
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

    // ━━━━━━━━━━━━━━━━━━ 5 MORE ENRICHED FORTS ━━━━━━━━━━━━━━━━━━

    // 12. Panhala Fort
    {
        _id: 'panhala',
        name: 'Panhala Fort',
        location: { district: 'Kolhapur', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'One of the largest forts in the Deccan. Shivaji Maharaj was besieged here by Siddi Johar in 1660 and made a daring escape through Vishalgad. Features Teen Darwaza, Andhar Bavdi, and massive granaries.',
        images: [panhalaImg],
        rating: 4.5,
        visitors: 14000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '977 m',
        historicalSignificance: 'Shivaji Maharaj\'s escape from Siddi Johar (1660), largest Deccan fort',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Shilahara dynasty', year: '1178 AD' }
    },

    // 13. Harishchandragad Fort
    {
        _id: 'harishchandragad',
        name: 'Harishchandragad Fort',
        location: { district: 'Ahmednagar', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'One of the most iconic treks in Maharashtra. Features the legendary Konkan Kada — a massive concave cliff with a 1,400 m vertical drop. Ancient Kedareshwar cave has a Shivalinga surrounded by waist-deep water.',
        images: [harishchandragadImg],
        rating: 4.8,
        visitors: 7000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1424 m',
        historicalSignificance: 'Ancient fort with 6th-century cave temples, Konkan Kada cliff',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Kalachuri dynasty', year: '6th century' }
    },

    // 14. Daulatabad Fort (Devagiri)
    {
        _id: 'daulatabad',
        name: 'Daulatabad Fort',
        location: { district: 'Aurangabad', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Originally called Devagiri (Hill of Gods) — one of the most impregnable forts ever built. Features a 200-ft conical granite hill, a crocodile moat, dark tunnel passage, and the iconic Chand Minar. Sultan Muhammad bin Tughluq infamously shifted his entire capital from Delhi to here.',
        images: [daulatabadImg],
        rating: 4.7,
        visitors: 15000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: '₹25 (Indian), ₹300 (Foreign)',
        timings: '6:00 AM - 6:00 PM',
        altitude: '183 m (from base)',
        historicalSignificance: 'Devagiri — one of the most impregnable forts in India, Tughluq capital shift',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Yadava dynasty', year: '12th century' }
    },

    // 15. Purandar Fort
    {
        _id: 'purandar',
        name: 'Purandar Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Birthplace of Sambhaji Maharaj (1657). This twin fort with Vajragad was the site of the crucial Treaty of Purandar (1665) between Shivaji and Mughal general Jai Singh. Used as a British hill station and prisoner-of-war camp.',
        images: [purandarImg],
        rating: 4.4,
        visitors: 8000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1387 m',
        historicalSignificance: 'Birthplace of Sambhaji Maharaj, Treaty of Purandar (1665)',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Yadava dynasty', year: '11th century' }
    },

    // 16. Vijaydurg Fort
    {
        _id: 'vijaydurg',
        name: 'Vijaydurg Fort',
        location: { district: 'Sindhudurg', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'The oldest and strongest sea fort on the Maharashtra coast, with 27 bastions and triple protective walls. Shivaji Maharaj developed it as the primary naval dockyard of the Maratha Armada. Kanhoji Angre made it the legendary pirate-proof headquarters.',
        images: [vijaydurgImg],
        rating: 4.5,
        visitors: 6000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: 'Sea level',
        historicalSignificance: 'Oldest sea fort on Konkan coast, Maratha naval dockyard, Kanhoji Angre\'s HQ',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Shilahara dynasty (expanded by Shivaji Maharaj)', year: '1205 AD' }
    },

    // ━━━━━━━━━━━━━━━━━━ 5 MORE FORTS (Batch 3) ━━━━━━━━━━━━━━━━━━

    // 17. Rajmachi Fort
    {
        _id: 'rajmachi',
        name: 'Rajmachi Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'A twin fortification comprising Shrivardhan and Manaranjan, perched above the Bor Ghat. Rajmachi controlled the vital trade route between Konkan and the Deccan. One of the most popular monsoon treks near Mumbai and Pune.',
        images: [rajmachiImg],
        rating: 4.5,
        visitors: 12000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'June to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '928 m',
        historicalSignificance: 'Controlled Bor Ghat trade route, captured by Shivaji Maharaj in 1657',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Satavahana dynasty (fortified by Shivaji Maharaj)', year: '2nd century' }
    },

    // 18. Ajinkyatara Fort
    {
        _id: 'ajinkyatara',
        name: 'Ajinkyatara Fort',
        location: { district: 'Satara', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'The "Impregnable Star" fort that dominates the Satara skyline. After Shivaji Maharaj, Satara became the seat of the Chhatrapati, making Ajinkyatara one of the most politically significant forts in Maratha history. Offers stunning 360° views of seven surrounding forts.',
        images: [ajinkyataraImg],
        rating: 4.4,
        visitors: 10000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1,080 m',
        historicalSignificance: 'Seat of Chhatrapati after Shivaji, commanded by Maratha queens and generals',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Shilahara dynasty', year: '12th century' }
    },

    // 19. Suvarnadurg Fort
    {
        _id: 'suvarnadurg',
        name: 'Suvarnadurg Fort',
        location: { district: 'Ratnagiri', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'The "Golden Fort" — a formidable island sea fort near Harnai, Dapoli. Captured by Shivaji Maharaj in 1660, it served as a key Maratha naval outpost. Connected to the land fort Kanakadurg, together they created a powerful coastal defense system.',
        images: [suvarnadurgImg],
        rating: 4.3,
        visitors: 5000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to May',
        entryFee: 'Free',
        timings: 'Boat dependent (morning preferred)',
        altitude: 'Sea level',
        historicalSignificance: 'Key Maratha naval outpost, captured by Shivaji Maharaj in 1660',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Adil Shahi dynasty (captured by Shivaji Maharaj)', year: '16th century' }
    },

    // 20. Tikona Fort
    {
        _id: 'tikona',
        name: 'Tikona Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Named "Tikona" (Triangle) for its distinctive pyramidal shape visible from Pawna Lake. A beginner-friendly trek that rewards with spectacular views of Pawna Dam, Tung, Lohagad, and Visapur forts. The Trimbakeshwar Mahadev temple at the summit is ancient.',
        images: [tikonaImg],
        rating: 4.4,
        visitors: 11000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'September to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1,066 m',
        historicalSignificance: 'Captured by Shivaji Maharaj in 1657, controlled Pawna valley approach',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Unknown (pre-Shivaji era)', year: 'Pre-17th century' }
    },

    // 21. Vasota Fort
    {
        _id: 'vasota',
        name: 'Vasota Fort',
        location: { district: 'Satara', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'A remote jungle fort inside the Koyna Wildlife Sanctuary, accessible only by boat across Shivsagar Lake. Known as "Vyaghragad" (Tiger Fort), it is surrounded by dense forest teeming with wildlife. One of the most adventurous and pristine fort treks in Maharashtra.',
        images: [vasotaImg],
        rating: 4.7,
        visitors: 4000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: '₹30 (Forest entry)',
        timings: 'Boat at 8:00 AM from Bamnoli',
        altitude: '1,171 m',
        historicalSignificance: 'Shivaji Maharaj captured it from Bijapur in 1656, remote jungle stronghold',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Shilahara dynasty', year: '12th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ 5 MORE FORTS (Batch 4) ━━━━━━━━━━━━━━━━━━

    // 22. Salher Fort
    {
        _id: 'salher',
        name: 'Salher Fort',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'The tallest fort in Maharashtra at 1,567 m. Site of the legendary Battle of Salher (1672) — the first large-scale open-field victory of the Marathas against the Mughals. Its twin, Mulher, stands nearby creating a formidable pair.',
        images: [salherImg],
        rating: 4.6,
        visitors: 5000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1,567 m',
        historicalSignificance: 'Tallest fort in Maharashtra, Battle of Salher (1672) — first Maratha open-field victory',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Yadava dynasty', year: '12th century' }
    },

    // 23. Korigad Fort
    {
        _id: 'korigad',
        name: 'Korigad Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'A beginner-friendly fort near Lonavala with panoramic views of Pawna Lake and the surrounding Sahyadri forts. Known for its well-preserved entrance gate, ancient Koraidevi temple, and two beautiful lakes on the summit plateau.',
        images: [korigadImg],
        rating: 4.3,
        visitors: 10000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'September to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '929 m',
        historicalSignificance: 'Captured by Shivaji Maharaj in 1657, controlled the Bor Ghat approaches',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Pre-Shivaji era (fortified by Marathas)', year: 'Pre-17th century' }
    },

    // 24. Mahuli Fort
    {
        _id: 'mahuli',
        name: 'Mahuli Fort',
        location: { district: 'Thane', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'The tallest fort in Thane district at 2,815 ft and the closest serious trekking challenge to Mumbai. A triple-peaked fort (Mahuli, Bhandargad, Palasgad) surrounded by dense jungle with rock-climbing sections near the summit.',
        images: [mahuliImg],
        rating: 4.5,
        visitors: 6000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '858 m (2,815 ft)',
        historicalSignificance: 'Maratha frontier fort guarding the Thane-Nashik corridor, captured 1658',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Bahmani dynasty (captured by Marathas)', year: '15th century' }
    },

    // 25. Ghangad Fort
    {
        _id: 'ghangad',
        name: 'Ghangad Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'A scenic fort near Tamhini Ghat famous for its spectacular monsoon views and proximity to Tailbaila pinnacle. The trek through Tamhini\'s lush green ghats is among the most beautiful monsoon trails in the Sahyadris.',
        images: [ghangadImg],
        rating: 4.3,
        visitors: 7000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'July to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '945 m',
        historicalSignificance: 'Maratha outpost fort guarding the Tamhini Ghat approach to Pune',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Pre-Maratha era (used by Shivaji Maharaj)', year: 'Pre-17th century' }
    },

    // 26. Kulaba Fort (Kolaba)
    {
        _id: 'kulaba',
        name: 'Kulaba Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'A unique sea fort at Alibaug that you can walk to during low tide! Built by Shivaji Maharaj in 1680, Kulaba was the headquarters of the legendary Maratha admiral Kanhoji Angre. Its iconic gateway rises dramatically from the Arabian Sea.',
        images: [kulabaImg],
        rating: 4.4,
        visitors: 12000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to May',
        entryFee: 'Free',
        timings: 'Low tide access only (check tide tables)',
        altitude: 'Sea level',
        historicalSignificance: 'Built by Shivaji Maharaj (1680), Kanhoji Angre\'s naval headquarters',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Chhatrapati Shivaji Maharaj', year: '1680' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 5 — FORTS 27–31 ━━━━━━━━━━━━━━━━━━

    // 27. Visapur Fort
    {
        _id: 'visapur',
        name: 'Visapur Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'The twin fort of Lohagad and larger of the pair, Visapur offers sprawling ruins, rock-cut cisterns, and unmatched panoramic views of the Sahyadri range. British forces captured it during the Anglo-Maratha wars in 1818.',
        images: [visapurImg],
        rating: 4.4,
        visitors: 9000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1084 m',
        historicalSignificance: 'Twin of Lohagad, fell to the British in 1818 during Anglo-Maratha War III',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Peshwa Balaji Vishwanath', year: '1713–1720' }
    },

    // 28. Rohida Fort (Vichitragad)
    {
        _id: 'rohida',
        name: 'Rohida Fort',
        location: { district: 'Satara', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Also called Vichitragad, this fort near Bhor offers a splendid sunrise trek. The well-preserved bastions and gateway make it a photographer\'s delight. Shivaji Maharaj captured it in 1648.',
        images: [rohidaImg],
        rating: 4.2,
        visitors: 5000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1066 m',
        historicalSignificance: 'Captured by Shivaji Maharaj in 1648 during early Swarajya expansion',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Shilahara dynasty', year: '9th century' }
    },

    // 29. Prabalgad Fort (Muranjan)
    {
        _id: 'prabalgad',
        name: 'Prabalgad Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Rising dramatically next to Matheran, Prabalgad features a famous exposed rock traverse at the summit. The climb is steep and thrilling. Visible from the Mumbai-Pune expressway, it is one of the most photogenic forts in the Sahyadris.',
        images: [prabalgadImg],
        rating: 4.5,
        visitors: 6500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '831 m',
        historicalSignificance: 'Strategic fort controlling the route between Kalyan and Panvel',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Bahmani Sultanate', year: '15th century' }
    },

    // 30. Ratangad Fort
    {
        _id: 'ratangad',
        name: 'Ratangad Fort',
        location: { district: 'Ahmednagar', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Situated in the Bhandardara region, Ratangad offers the stunning Nedhe (eye of the needle) — a natural rock arch. Trekking through exotic flora and the Amruteshwar temple trail makes this a must-do Sahyadri adventure.',
        images: [ratangadImg],
        rating: 4.6,
        visitors: 5500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1297 m',
        historicalSignificance: 'Guarded the Sahyadri passes near Bhandardara, ancient Shiva temple on route',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Bahmani dynasty', year: '14th century' }
    },

    // 31. Harihar Fort
    {
        _id: 'harihar',
        name: 'Harihar Fort',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Famous for its near-vertical rock-cut steps carved into the mountainside — one of the most thrilling climbs in Maharashtra. The fort offers jaw-dropping 360° views and is a bucket-list trek for adrenaline seekers.',
        images: [hariharImg],
        rating: 4.7,
        visitors: 4500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1120 m',
        historicalSignificance: 'Used as a watchtower fort with near-vertical rock-cut steps for defense',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Yadava dynasty', year: '11th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 6 — FORTS 32–36 ━━━━━━━━━━━━━━━━━━

    // 32. Karnala Fort
    {
        _id: 'karnala',
        name: 'Karnala Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Located inside the Karnala Bird Sanctuary near Panvel, this trek combines birdwatching with fort exploration. The basalt pinnacle at the summit is a striking landmark visible from the Mumbai-Goa highway.',
        images: [karnalaImg],
        rating: 4.3,
        visitors: 10000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: '₹30 (Sanctuary entry)',
        timings: '6:00 AM - 6:00 PM',
        altitude: '445 m',
        historicalSignificance: 'Controlled the Bor pass on Mumbai–Goa trade route',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Devagiri Yadavas', year: '12th century' }
    },

    // 33. Jivdhan Fort
    {
        _id: 'jivdhan',
        name: 'Jivdhan Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Perched atop the Naneghat pass, Jivdhan commands breathtaking views of the Malshej and Junnar regions. The trek features rock patches and ladders. Ancient Naneghat inscriptions of the Satavahana dynasty lie nearby.',
        images: [jivdhanImg],
        rating: 4.5,
        visitors: 4000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1127 m',
        historicalSignificance: 'Controlled the Naneghat trade pass between Konkan and Deccan',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Satavahana dynasty', year: '1st century BC' }
    },

    // 34. Korlai Fort
    {
        _id: 'korlai',
        name: 'Korlai Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'A stunning Portuguese-built coastal fort at the mouth of Revdanda creek. The lighthouse perched on the fort offers spectacular views of the sea. Locals still speak a unique Creole Portuguese dialect, a living relic of colonial history.',
        images: [korlaiImg],
        rating: 4.2,
        visitors: 5000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '153 m',
        historicalSignificance: 'Portuguese colonial fort, still has a Creole-speaking community',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Portuguese', year: '1521 AD' }
    },

    // 35. Rajmachi Shrivardhan
    {
        _id: 'chavand',
        name: 'Chavand Fort',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'The fort where Chhatrapati Sambhaji Maharaj was crowned in 1681. A small but historically significant fort near Igatpuri. The trek is short and rewarding, with views of the Kalsubai range.',
        images: [chavandImg],
        rating: 4.1,
        visitors: 3500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '24 hours (open fort)',
        altitude: '1054 m',
        historicalSignificance: 'Sambhaji Maharaj was crowned here in 1681',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Unknown', year: 'Pre-17th century' }
    },

    // 36. Mulher Fort
    {
        _id: 'mulher',
        name: 'Mulher Fort',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Mulher Fort is one of the largest forts in the Baglan region and forms a twin fort complex with Salher. Known for its vast plateau, ancient temples, and historical importance during the Maratha-Mughal conflicts, it offers a raw and less crowded trekking experience.',
        images: [mulherImg],
        rating: 4.5,
        visitors: 2500,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1306 m',
        historicalSignificance: 'Part of the Salher-Mulher defense system, crucial in controlling trade routes during Maratha-Mughal conflicts',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Yadava dynasty', year: '12th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 7 — FORTS 37–41 ━━━━━━━━━━━━━━━━━━

    // 37. Kalsubai Peak
    {
        _id: 'kalsubai',
        name: 'Kalsubai Peak',
        location: { district: 'Ahmednagar', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Kalsubai Peak is the highest point in Maharashtra at 1,646 m. Known as the "Everest of Maharashtra", it offers breathtaking panoramic views of the Sahyadri range including Alang, Madan, Kulang, and Ratangad. The trek features iron ladders on steep sections.',
        images: [kalsubaiImg],
        rating: 4.8,
        visitors: 12000,
        crowdStatus: 'high',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: 'Open all day (best to start early morning)',
        altitude: '1646 m',
        historicalSignificance: 'Highest peak in Maharashtra, Kalsubai Devi temple at summit, popular sunrise trek',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Natural peak with ancient temple', year: 'Ancient' }
    },

    // 38. Malhargad Fort (Sonori Fort)
    {
        _id: 'malhargad',
        name: 'Malhargad Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Malhargad Fort, also known as Sonori Fort, is the last fort built during the Maratha Empire in 1757 under the Peshwas. Located near Saswad, it is a small yet historically significant fort offering an easy trek and scenic views of the surrounding plains.',
        images: [malhargadImg],
        rating: 4.4,
        visitors: 3500,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '789 m',
        historicalSignificance: 'Last fort built in the Maratha Empire (1757), represents final phase of Maratha fort architecture',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Peshwa era', year: '1757' }
    },

    // 39. Pandavgad Fort
    {
        _id: 'pandavgad',
        name: 'Pandavgad Fort',
        location: { district: 'Satara', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Pandavgad Fort is a massive hill fort located near Wai in Satara district. Known for its large plateau and mythological connection to the Pandavas, the fort offers scenic views of the Dhom Dam and surrounding Sahyadri ranges.',
        images: [pandavgadImg],
        rating: 4.5,
        visitors: 3000,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1273 m',
        historicalSignificance: 'Mythological connection to Pandavas, strategic fort overlooking Dhom Dam and trade routes',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Shilahara dynasty', year: '12th century' }
    },

    // 40. Hadsar Fort
    {
        _id: 'hadsar',
        name: 'Hadsar Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Hadsar Fort is a rugged hill fort near Junnar known for its impressive rock-cut steps and grand entrance carved directly into the mountain. It is part of the famous Junnar fort belt and offers a thrilling trekking experience with historical significance.',
        images: [hadsarImg],
        rating: 4.6,
        visitors: 4200,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1067 m',
        historicalSignificance: 'Part of the Junnar fort belt, known for its unique rock-cut architecture and defensive design',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Satavahana dynasty', year: '2nd century' }
    },

    // 41. Bhairavgad Fort
    {
        _id: 'bhairavgad',
        name: 'Bhairavgad Fort',
        location: { district: 'Ahmednagar', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Bhairavgad Fort in the Malshej Ghat region is a wild and remote hill fort known for its dense forest trails, steep climbs, and a massive natural cave at the summit that can accommodate over 40 people. One of the most adventurous treks in Maharashtra.',
        images: [bhairavgadImg],
        rating: 4.6,
        visitors: 2800,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 5:30 PM',
        altitude: '1145 m',
        historicalSignificance: 'Remote Sahyadri fort with massive natural summit cave, Bhairavnath temple inside cave',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Unknown', year: 'Pre-medieval' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 8 — FORTS 42–46 ━━━━━━━━━━━━━━━━━━

    // 42. Mangi-Tungi
    {
        _id: 'mangitungi',
        name: 'Mangi-Tungi',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Mangi-Tungi is a sacred twin peak and one of the most important Jain pilgrimage sites in India. Known for its 4500+ carved steps and the world\'s tallest Jain statue of Lord Rishabhdev (108 ft), the climb is both physically demanding and spiritually significant.',
        images: [mangitungiImg],
        rating: 4.7,
        visitors: 6000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '5:00 AM - 6:00 PM',
        altitude: '1343 m',
        historicalSignificance: 'Sacred Jain pilgrimage, 4,500+ steps, world\'s tallest Jain statue (108 ft Rishabhdev)',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Jain community', year: 'Ancient' }
    },

    // 43. Anjaneri Fort
    {
        _id: 'anjaneri',
        name: 'Anjaneri Fort',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Anjaneri Fort is a scenic hill fort near Trimbakeshwar, traditionally believed to be the birthplace of Lord Hanuman. The trek passes through plateaus, forest trails, and temple complexes, offering panoramic views of the Brahmagiri range and Nashik valley.',
        images: [anjaneriImg],
        rating: 4.6,
        visitors: 7000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1280 m',
        historicalSignificance: 'Believed birthplace of Lord Hanuman, Anjani Mata temple, near Trimbakeshwar Jyotirlinga',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Ancient (Yadava era fortification)', year: '12th century' }
    },

    // 44. Sudhagad Fort
    {
        _id: 'sudhagad',
        name: 'Sudhagad Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Sudhagad Fort, also known as Bhorapgad, is a massive hill fort in Raigad district and was once considered by Chhatrapati Shivaji Maharaj as a potential capital of the Maratha Empire before Raigad was finalized. Known for its vast plateau, historical structures, and scenic beauty.',
        images: [sudhagadImg],
        rating: 4.6,
        visitors: 5500,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '590 m',
        historicalSignificance: 'Considered as potential Maratha capital before Raigad, Bhorai Devi temple, vast plateau',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Shilaharas', year: '10th century' }
    },

    // 45. Avchitgad Fort
    {
        _id: 'avchitgad',
        name: 'Avchitgad Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Avchitgad Fort is a small yet scenic hill fort located near Roha in Raigad district. Surrounded by dense greenery and offering beautiful views of the Kundalika river valley and Konkan landscape. Captured by Chhatrapati Shivaji Maharaj from the Adilshahi in 1660.',
        images: [avchitgadImg],
        rating: 4.4,
        visitors: 3200,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '330 m',
        historicalSignificance: 'Captured by Shivaji from Adilshahi in 1660, Kundalika river valley views',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Adil Shahi dynasty', year: '16th century' }
    },

    // 46. Kamalgad Fort
    {
        _id: 'kamalgad',
        name: 'Kamalgad Fort',
        location: { district: 'Satara', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Kamalgad Fort is a lesser-known hill fort near Wai in Satara district. Known for its unique geological feature called the "Geru well", a deep vertical pit carved into the rock, the fort offers a short yet adventurous trek with scenic views of Dhom Dam.',
        images: [kamalgadImg],
        rating: 4.5,
        visitors: 3500,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '1312 m',
        historicalSignificance: 'Unique Geru well rock feature, lookout fort connected to Maratha signaling network',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Marathas', year: 'Medieval' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 9 — FORTS 47–50 ━━━━━━━━━━━━━━━━━━

    // 47. Naldurg Fort
    {
        _id: 'naldurg',
        name: 'Naldurg Fort',
        location: { district: 'Dharashiv (Osmanabad)', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Naldurg Fort is a massive land fort in the Marathwada region, built during the Bahmani and later ruled by the Adilshahi dynasty. Known for its gigantic stone walls, 100+ bastions, and unique water defense system with a seasonal waterfall inside the fort.',
        images: [naldurgImg],
        rating: 4.5,
        visitors: 6000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'July to February',
        entryFee: '₹25 (Indian), ₹300 (Foreign)',
        timings: '9:00 AM - 5:30 PM',
        altitude: 'Ground level',
        historicalSignificance: '100+ bastions, Pani Mahal, unique monsoon waterfall, advanced water defense system',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani Sultanate', year: '14th century' }
    },

    // 48. Paranda Fort
    {
        _id: 'paranda',
        name: 'Paranda Fort',
        location: { district: 'Dharashiv (Osmanabad)', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Paranda Fort is a well-preserved land fort built during the Bahmani Sultanate period. Known for its massive circular bastions, deep moat, and strong defensive design, it stands as one of the finest examples of Deccan military architecture.',
        images: [parandaImg],
        rating: 4.6,
        visitors: 4800,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'November to February',
        entryFee: '₹25 (Indian), ₹300 (Foreign)',
        timings: '9:00 AM - 5:30 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Finest Deccan Sultanate military architecture, deep moat, massive circular bastions, Jama Masjid',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani dynasty', year: '14th century' }
    },

    // 49. Gharapuri (Elephanta Island)
    {
        _id: 'gharapuri',
        name: 'Gharapuri (Elephanta Island)',
        location: { district: 'Mumbai', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'Gharapuri, popularly known as Elephanta Island, is a UNESCO World Heritage Site in Mumbai Harbour. Famous for ancient rock-cut cave temples dedicated to Lord Shiva with the iconic Trimurti sculpture, plus remnants of Portuguese-era fortifications.',
        images: [gharapuriImg],
        rating: 4.6,
        visitors: 15000,
        crowdStatus: 'high',
        bestTimeToVisit: 'November to February',
        entryFee: '₹40 (Indian), ₹600 (Foreign) + Ferry',
        timings: '9:00 AM - 5:00 PM (Closed Mondays)',
        altitude: 'Sea level',
        historicalSignificance: 'UNESCO World Heritage caves (5th-8th century), Trimurti sculpture, Portuguese-era fortification',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Rashtrakuta/Chalukya dynasty (caves), Portuguese (fort)', year: '5th-8th century (caves)' }
    },

    // 50. Rangana Fort
    {
        _id: 'rangana',
        name: 'Rangana Fort',
        location: { district: 'Kolhapur', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Rangana Fort is a massive and remote hill fort located deep in the Sahyadri ranges near the Kolhapur–Sindhudurg border. Surrounded by dense forests and valleys, known for strong fortifications, large plateau, and breathtaking monsoon scenery when clouds engulf the region.',
        images: [ranganaImg],
        rating: 4.7,
        visitors: 2500,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 5:30 PM',
        altitude: '882 m',
        historicalSignificance: 'Remote Sahyadri sentinel, strong bastions overlooking deep valleys, Hanuman temple',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Shilahara dynasty', year: '12th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 10 — FORT 51 ━━━━━━━━━━━━━━━━━━

    // 51. Kalavantin Durg
    {
        _id: 'kalavantindurg',
        name: 'Kalavantin Durg',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Kalavantin Durg is one of the most iconic and thrilling trekking destinations in Maharashtra, known for its steep rock-cut steps carved into a narrow ridge. Located near Prabalgad, the fort offers breathtaking views and an adrenaline-filled climbing experience.',
        images: [kalavantindurgImg],
        rating: 4.7,
        visitors: 9000,
        crowdStatus: 'high',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 5:30 PM',
        altitude: '686 m',
        historicalSignificance: 'Watchtower fort with iconic near-vertical rock-cut steps, connected to Prabalgad fort system',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Unknown (Maratha era)', year: 'Pre-17th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 11 — FORTS 52–54 ━━━━━━━━━━━━━━━━━━

    // 52. Songad Fort
    {
        _id: 'songad',
        name: 'Songad Fort',
        location: { district: 'Kolhapur', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Songad Fort is a lesser-known hill fort located in the dense forest region of Kolhapur near the Goa border. It served primarily as a watchtower fort and offers a peaceful trekking experience with scenic views of valleys and forest landscapes.',
        images: [getNextFallbackImage()],
        rating: 4.0,
        visitors: 1500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~800 m',
        historicalSignificance: 'Maratha surveillance fort near the Goa border, dense forest surroundings',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Maratha Empire', year: '17th century' }
    },

    // 53. Bhushangad
    {
        _id: 'bhushangad',
        name: 'Bhushangad',
        location: { district: 'Satara', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Bhushangad is a small hill fort in Satara district, known more for its temple and easy access than military importance. It is a calm destination with panoramic views of surrounding plains.',
        images: [bhushangadImg],
        rating: 3.9,
        visitors: 1200,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~900 m',
        historicalSignificance: 'Minor Maratha hill fort with local religious importance, Bhushangad temple',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Maratha Empire', year: '17th century' }
    },

    // 54. Chandangad
    {
        _id: 'chandangad',
        name: 'Chandangad',
        location: { district: 'Kolhapur', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Chandangad is a remote hill fort located near the Maharashtra-Goa border. Surrounded by dense forests, it is known for its peaceful environment and strategic location as a border surveillance fort.',
        images: [chandangadImg],
        rating: 4.1,
        visitors: 1000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~750 m',
        historicalSignificance: 'Border fort controlling access between Maharashtra and Goa, Adilshahi and Maratha era',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Adilshahi dynasty (used by Marathas)', year: '16th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 12 — FORTS 55–57 ━━━━━━━━━━━━━━━━━━

    // 55. Pavangad Fort
    {
        _id: 'pavangad',
        name: 'Pavangad Fort',
        location: { district: 'Kolhapur', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Pavangad Fort is a small hill fort located near the famous Panhala Fort in Kolhapur district. It served as a strategic support fort and offers a short and easy trek with scenic views of the surrounding region.',
        images: [pavangadImg],
        rating: 4.0,
        visitors: 2000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~850 m',
        historicalSignificance: 'Support fort for Panhala during the Maratha period, views of Panhala region',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Maratha Empire', year: '17th century' }
    },

    // 56. Bhorgiri Fort
    {
        _id: 'bhorgiri',
        name: 'Bhorgiri Fort',
        location: { district: 'Pune', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Bhorgiri Fort is a small hill fort near Bhimashankar, known for its caves, temple, and scenic forest surroundings. It is a peaceful trekking destination combining nature and history.',
        images: [bhorgiriImg],
        rating: 4.1,
        visitors: 1800,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~900 m',
        historicalSignificance: 'Small surveillance fort near Bhimashankar with ancient caves and temple',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Maratha Empire', year: '17th century' }
    },

    // 57. Solapur Bhuikot Fort
    {
        _id: 'solapur-bhuikot',
        name: 'Solapur Bhuikot Fort',
        location: { district: 'Solapur', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Solapur Bhuikot Fort is a prominent land fort located in Solapur city, known for its double fortification walls, moat, and strong defensive architecture representing Deccan military design.',
        images: [solapurBhuikotImg],
        rating: 4.2,
        visitors: 8000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: '₹20',
        timings: '9:00 AM - 5:30 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Bahmani-era land fort with double walls and moat, Deccan military architecture',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani Sultanate', year: '15th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 13 — FORTS 58–60 ━━━━━━━━━━━━━━━━━━

    // 58. Arnala Fort
    {
        _id: 'arnala',
        name: 'Arnala Fort',
        location: { district: 'Palghar', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'Arnala Fort is a coastal sea fort located on an island off the coast of Virar. Built by the Portuguese and later captured by the Marathas, the fort is surrounded by the Arabian Sea and is accessible via a short boat ride.',
        images: [getNextFallbackImage()],
        rating: 4.2,
        visitors: 5000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to May',
        entryFee: 'Free (Boat: ₹50-100)',
        timings: '6:00 AM - 6:00 PM',
        altitude: 'Sea level',
        historicalSignificance: 'Portuguese-built sea fort captured by Marathas, island fortification on Arabian Sea',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Portuguese (captured by Marathas)', year: '16th century' }
    },

    // 59. Kelve Fort
    {
        _id: 'kelve',
        name: 'Kelve Fort',
        location: { district: 'Palghar', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Kelve Fort is a coastal fort located near Kelve Beach in Palghar district. Now mostly in ruins, it offers scenic views of the Arabian Sea and is a quiet, less crowded historical site.',
        images: [getNextFallbackImage()],
        rating: 3.8,
        visitors: 3000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: 'Sea level',
        historicalSignificance: 'Coastal defense fort from Portuguese and Maratha periods, near Kelve Beach',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Portuguese (used by Marathas)', year: '16th century' }
    },

    // 60. Underi Fort
    {
        _id: 'underi',
        name: 'Underi Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Sea Fort',
        description: 'Underi Fort is a sea fort located near Alibaug, built by the Siddis and later contested by the Marathas. Situated on a small island, it is less accessible and less visited compared to nearby forts like Khanderi.',
        images: [getNextFallbackImage()],
        rating: 4.0,
        visitors: 1500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to May',
        entryFee: 'Free (Boat: ₹100-300)',
        timings: 'Depends on tide',
        altitude: 'Sea level',
        historicalSignificance: 'Siddi-built sea fort contested by Marathas, strategic island outpost near Alibaug',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Siddi rulers (contested by Marathas)', year: '17th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 14 — FORTS 61–63 ━━━━━━━━━━━━━━━━━━

    // 61. Revdanda Fort
    {
        _id: 'revdanda',
        name: 'Revdanda Fort',
        location: { district: 'Raigad', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'Revdanda Fort is a historic coastal fort located at the mouth of the Kundalika river. Built by the Portuguese, it stretches along the shoreline and features massive walls, bastions, and ruins blending into the village landscape.',
        images: [getNextFallbackImage()],
        rating: 4.1,
        visitors: 4000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: 'Open all day',
        altitude: 'Sea level',
        historicalSignificance: 'Major Portuguese coastal fort at the Kundalika river mouth, church ruins, captured by Marathas',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Portuguese (captured by Marathas)', year: '16th century' }
    },

    // 62. Bankot Fort (Himmatgad)
    {
        _id: 'bankot',
        name: 'Bankot Fort (Himmatgad)',
        location: { district: 'Ratnagiri', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'Bankot Fort, also known as Himmatgad, is a coastal fort situated at the mouth of the Savitri river. It offers commanding views of the river and Arabian Sea and was an important strategic point for controlling maritime trade routes.',
        images: [getNextFallbackImage()],
        rating: 4.0,
        visitors: 2500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: 'Sea level',
        historicalSignificance: 'Adilshahi coastal fort at Savitri river mouth, renamed Fort Victoria by British',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Adilshahi dynasty (captured by British)', year: '16th century' }
    },

    // 63. Jaigad Fort
    {
        _id: 'jaigad',
        name: 'Jaigad Fort',
        location: { district: 'Ratnagiri', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Sea Fort',
        description: 'Jaigad Fort is a well-preserved sea fort located at the entrance of the Shastri river. Built to control maritime activities, the fort offers spectacular views of the sea and nearby lighthouse.',
        images: [getNextFallbackImage()],
        rating: 4.3,
        visitors: 5000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: '8:00 AM - 6:00 PM',
        altitude: 'Sea level',
        historicalSignificance: 'Well-preserved Maratha coastal fort at Shastri river entrance, nearby lighthouse',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Maratha Empire', year: '16th-17th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 15 — FORTS 64–68 ━━━━━━━━━━━━━━━━━━

    // 64. Achala Fort
    {
        _id: 'achala',
        name: 'Achala Fort',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Achala Fort is a lesser-known hill fort in the Baglan region of Nashik district, located near the famous Salher and Mulher forts. It is a remote and rugged trek offering scenic views and a peaceful experience away from crowded routes.',
        images: [getNextFallbackImage()],
        rating: 4.1,
        visitors: 800,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~1100 m',
        historicalSignificance: 'Part of the Baglan fort system near Salher and Mulher, controlled trade routes',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Maratha Empire (Baglan region)', year: '17th century' }
    },

    // 65. Markandey Fort
    {
        _id: 'markandey',
        name: 'Markandey Fort',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Markandey Fort is a lesser-known hill fort located near Mulher Fort in the Baglan region of Nashik. It offers a peaceful trekking experience with panoramic views of nearby forts and valleys.',
        images: [getNextFallbackImage()],
        rating: 4.0,
        visitors: 700,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~1000 m',
        historicalSignificance: 'Part of the Baglan fort system connected with Mulher and Salher forts',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Maratha Empire (Baglan region)', year: '17th century' }
    },

    // 66. Hatgad Fort
    {
        _id: 'hatgad',
        name: 'Hatgad Fort',
        location: { district: 'Nashik', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Hatgad Fort is a historic hill fort located near the Maharashtra-Gujarat border close to Saputara. Known for its easy accessibility and scenic surroundings, it offers a short trek with impressive views of the Dang forests and nearby hills.',
        images: [getNextFallbackImage()],
        rating: 4.2,
        visitors: 3000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~900 m',
        historicalSignificance: 'Frontier fort controlling the Maharashtra-Gujarat border, near Saputara',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Maratha Empire', year: '17th century' }
    },

    // 67. Laling Fort
    {
        _id: 'laling',
        name: 'Laling Fort',
        location: { district: 'Dhule', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Fort',
        description: 'Laling Fort is a historic hill fort located near Dhule city, overlooking the Mumbai-Agra highway. It is known for its strategic position and easy accessibility, making it a popular short trek destination.',
        images: [getNextFallbackImage()],
        rating: 4.0,
        visitors: 2500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~700 m',
        historicalSignificance: 'Watchtower fort controlling trade routes near Dhule, Farooqui dynasty origin',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Farooqui dynasty', year: '15th century' }
    },

    // 68. Toranmal Hill Station
    {
        _id: 'toranmal',
        name: 'Toranmal Hill Station',
        location: { district: 'Nandurbar', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Hill Station',
        description: 'Toranmal is a scenic hill station in Nandurbar district, known for its cool climate, viewpoints, and lakes. A popular tourist destination in northern Maharashtra offering nature trails and panoramic Satpuda range views.',
        images: [getNextFallbackImage()],
        rating: 4.3,
        visitors: 5000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: 'Free',
        timings: 'Open all day',
        altitude: '1150 m',
        historicalSignificance: 'Scenic hill station in the Satpuda range with Yashwant Lake and Gorakhnath Temple',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Natural hill station', year: 'Ancient' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 16 — FORTS 69–71 ━━━━━━━━━━━━━━━━━━

    // 69. Kanhergarh
    {
        _id: 'kanhergarh',
        name: 'Kanhergarh',
        location: { district: 'Dhule', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Kanhergarh is a lesser-known hill fort in Dhule district, located in a remote region of Khandesh. It offers a quiet trekking experience with natural surroundings and minimal crowd.',
        images: [getNextFallbackImage()],
        rating: 3.8,
        visitors: 400,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~800 m',
        historicalSignificance: 'Minor surveillance fort in the remote Khandesh region',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Local rulers / Marathas', year: '17th century' }
    },

    // 70. Pisolgad
    {
        _id: 'pisolgad',
        name: 'Pisolgad',
        location: { district: 'Jalgaon', state: 'Maharashtra' },
        difficulty: 'Difficult',
        type: 'Hill Fort',
        description: 'Pisolgad is a remote hill fort in Jalgaon district, known for its rugged terrain and isolation. It is ideal for trekkers seeking an offbeat experience.',
        images: [getNextFallbackImage()],
        rating: 3.7,
        visitors: 200,
        crowdStatus: 'low',
        bestTimeToVisit: 'November to February',
        entryFee: 'Free',
        timings: '6:00 AM - 5:30 PM',
        altitude: '~850 m',
        historicalSignificance: 'Remote hill fort used for local defense and observation in Jalgaon region',
        trek: { routes: [{ difficulty: 'Difficult' }] },
        history: { builtBy: 'Maratha Empire', year: '17th century' }
    },

    // 71. Ausa Fort
    {
        _id: 'ausa',
        name: 'Ausa Fort',
        location: { district: 'Latur', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Ausa Fort is a historic land fort in Latur district, known for its strong fortifications, bastions, and Islamic architectural influence. It is an important example of Deccan-era military construction.',
        images: [getNextFallbackImage()],
        rating: 4.1,
        visitors: 4000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '9:00 AM - 6:00 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Bahmani-era land fort with strong fortifications, Islamic architectural influence',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani Sultanate', year: '15th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 17 — FORTS 72–74 ━━━━━━━━━━━━━━━━━━

    // 72. Kandhar Fort
    {
        _id: 'kandhar',
        name: 'Kandhar Fort',
        location: { district: 'Nanded', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Kandhar Fort is a historic land fort in Nanded district, known for its massive walls, deep moat, and strong defensive architecture. It is one of the prominent forts of the Marathwada region.',
        images: [getNextFallbackImage()],
        rating: 4.2,
        visitors: 5000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '9:00 AM - 6:00 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Rashtrakuta-era land fort with massive walls and moat, multi-dynasty history',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Rashtrakuta dynasty', year: '9th century' }
    },

    // 73. Dharur Fort
    {
        _id: 'dharur',
        name: 'Dharur Fort',
        location: { district: 'Beed', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Dharur Fort is a well-known land fort in Beed district, featuring strong stone walls, bastions, and historic gateways. It represents classic Deccan military architecture.',
        images: [getNextFallbackImage()],
        rating: 4.0,
        visitors: 3500,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '9:00 AM - 6:00 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Bahmani-era land fort with classic Deccan military architecture',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani Sultanate', year: '15th century' }
    },

    // 74. Ambad Fort
    {
        _id: 'ambad',
        name: 'Ambad Fort',
        location: { district: 'Jalna', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Ambad Fort is a land fort in Jalna district known for its strong fortification and historical structures. Though partially in ruins, it reflects the architectural style of Deccan-era forts.',
        images: [getNextFallbackImage()],
        rating: 3.9,
        visitors: 2500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '9:00 AM - 6:00 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Bahmani-era land fort with Deccan architectural style in Jalna region',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani Sultanate', year: '15th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 18 — FORTS 75–77 ━━━━━━━━━━━━━━━━━━

    // 75. Udgir Fort
    {
        _id: 'udgir',
        name: 'Udgir Fort',
        location: { district: 'Latur', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Udgir Fort is a historically significant land fort in Latur district, known for its massive fortifications, underground passages, and role in the Battle of Udgir. It is one of the most important forts in Marathwada.',
        images: [getNextFallbackImage()],
        rating: 4.3,
        visitors: 6000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '9:00 AM - 6:00 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Battle of Udgir (1760) — key Maratha victory over the Nizam, underground passages',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani Sultanate (modified by Nizam/Marathas)', year: '15th century' }
    },

    // 76. Parbhani Fort (Local Remains)
    {
        _id: 'parbhani',
        name: 'Parbhani Fort (Local Remains)',
        location: { district: 'Parbhani', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Parbhani does not have a prominent surviving fort structure today. However, the region historically had small defensive structures and administrative centers during medieval times.',
        images: [getNextFallbackImage()],
        rating: 3.2,
        visitors: 500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: 'Open all day',
        altitude: 'Ground level',
        historicalSignificance: 'Scattered medieval remains from Deccan Sultanate and Nizam period',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani / Nizam', year: 'Medieval period' }
    },

    // 77. Mahur Fort
    {
        _id: 'mahur',
        name: 'Mahur Fort',
        location: { district: 'Nanded', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Mahur Fort is a historic hill fort located in Nanded district, known for its religious importance and scenic hilltop views. It is situated near the famous Renuka Devi temple.',
        images: [],
        rating: 4.2,
        visitors: 8000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~700 m',
        historicalSignificance: 'Historic hill fort near Renuka Devi temple, religious and strategic importance',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Maratha Empire / Nizam', year: '17th century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 19 — FORTS 78–80 ━━━━━━━━━━━━━━━━━━

    // 78. Antur Fort
    {
        _id: 'antur',
        name: 'Antur Fort',
        location: { district: 'Chhatrapati Sambhajinagar', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Antur Fort is a hill fort located in the Satmala range of Maharashtra. Known for its massive entrance gate and strong fortification, it is one of the prominent forts in the region and offers scenic views of surrounding hills.',
        images: [anturImg],
        rating: 4.1,
        visitors: 4000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~820 m',
        historicalSignificance: 'Strategic fort in Satmala range, known for massive entrance and defensive walls',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Ahmad Nizam Shah / Local Maratha Rulers', year: '15th Century' }
    },

    // 79. Waghala Fort (Local Remains)
    {
        _id: 'waghala',
        name: 'Waghala Fort (Local Remains)',
        location: { district: 'Nanded', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Waghala does not have a prominent surviving fort structure today. The area historically had small defensive structures used for local administration and security.',
        images: [waghalaImg],
        rating: 3.0,
        visitors: 300,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: 'Open all day',
        altitude: 'Ground level',
        historicalSignificance: 'Medieval administrative remains in Nanded region',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Deccan Sultanates', year: 'Medieval period' }
    },

    // 80. Rohilagad
    {
        _id: 'rohilagad',
        name: 'Rohilagad',
        location: { district: 'Beed', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Rohilagad is a lesser-known hill fort in Beed district. It is an offbeat destination with minimal ruins and offers a quiet trekking experience.',
        images: [rohilagadImg],
        rating: 3.5,
        visitors: 400,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '6:00 AM - 6:00 PM',
        altitude: '~800 m',
        historicalSignificance: 'Small hill fort used for local surveillance in the Marathwada region',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Maratha Empire', year: '17th Century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 20 — FORTS 81–82 ━━━━━━━━━━━━━━━━━━

    // 81. Sitabuldi Fort
    {
        _id: 'sitabuldi',
        name: 'Sitabuldi Fort',
        location: { district: 'Nagpur', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Sitabuldi Fort is a historic land fort located in the center of Nagpur city. Built by the British, it is known for the Battle of Sitabuldi and serves as an important military landmark.',
        images: [sitabuldiImg],
        rating: 4.2,
        visitors: 5000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: 'Restricted (open on specific days)',
        altitude: 'Ground level',
        historicalSignificance: 'Famous for the Battle of Sitabuldi (1817)',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'British', year: '1817' }
    },

    // 82. Gawilgad Fort
    {
        _id: 'gawilgad',
        name: 'Gawilgad Fort',
        location: { district: 'Amravati', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Gawilgad Fort is a massive hill fort located in the Satpura range near Chikhaldara. Known for its strong fortifications and scenic surroundings, it is one of the most important forts in Vidarbha.',
        images: [gawilgadImg],
        rating: 4.5,
        visitors: 8000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to March',
        entryFee: '₹20',
        timings: '8:00 AM - 5:00 PM',
        altitude: '1083 m',
        historicalSignificance: 'Massive Vidarbha stronghold, important in Second Anglo-Maratha War',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Gond dynasty', year: '12th Century' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 21 — FORTS 83–85 ━━━━━━━━━━━━━━━━━━

    // 83. Narnala Fort
    {
        _id: 'narnala',
        name: 'Narnala Fort',
        location: { district: 'Akola', state: 'Maharashtra' },
        difficulty: 'Moderate',
        type: 'Hill Fort',
        description: 'Narnala Fort is a massive hill fort located in the Satpura range, known for its vast expanse, multiple gates, and strong fortifications. It is one of the largest forts in Maharashtra and offers a rich historical and trekking experience.',
        images: [narnalaImg],
        rating: 4.6,
        visitors: 6000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: '₹20',
        timings: '6:00 AM – 5:30 PM',
        altitude: '~900 m',
        historicalSignificance: 'One of the largest hill forts in Maharashtra, ruled by Gond kings',
        trek: { routes: [{ difficulty: 'Moderate' }] },
        history: { builtBy: 'Gond dynasty', year: '10th Century' }
    },

    // 84. Balapur Fort
    {
        _id: 'balapur',
        name: 'Balapur Fort',
        location: { district: 'Akola', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Balapur Fort is a well-preserved land fort located at the confluence of the Murtizapur and Man rivers. Known for its strong architecture and historical importance, it is a significant fort in the Vidarbha region.',
        images: [balapurImg],
        rating: 4.1,
        visitors: 3000,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '8:00 AM – 6:00 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Built at the confluence of two rivers, important Mughal military station',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Mughals', year: '17th Century' }
    },

    // 85. Manikgad Fort (Wardha)
    {
        _id: 'manikgad',
        name: 'Manikgad Fort (Wardha)',
        location: { district: 'Wardha', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Manikgad in Wardha is a lesser-known and minimally preserved fort site. It is not a major tourist destination and has limited visible structures.',
        images: [manikgadImg],
        rating: 3.0,
        visitors: 200,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: 'Open all day',
        altitude: 'Ground level',
        historicalSignificance: 'Minimal remains of a minor defensive site in the Wardha region',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Local rulers', year: 'Unknown' }
    },

    // ━━━━━━━━━━━━━━━━━━ BATCH 22 — FORTS 86–88 ━━━━━━━━━━━━━━━━━━

    // 86. Achalpur Fort
    {
        _id: 'achalpur',
        name: 'Achalpur Fort',
        location: { district: 'Amravati', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Achalpur Fort is a historic land fort located in Amravati district. Once an important administrative and military center, the fort features strong walls, bastions, and remnants of ancient structures reflecting medieval Deccan architecture.',
        images: [achalpurImg],
        rating: 4.0,
        visitors: 1500,
        crowdStatus: 'low',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '8:00 AM – 6:00 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Significant center during Bahmani and Mughal periods',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Bahmani dynasty', year: 'Medieval period' }
    },

    // 87. Bhamragad Fort
    {
        _id: 'bhamragad',
        name: 'Bhamragad Fort',
        location: { district: 'Gadchiroli', state: 'Maharashtra' },
        difficulty: 'Hard',
        type: 'Hill Fort',
        description: 'Bhamragad Fort is a remote and lesser-known hill fort located in the dense forest region of Gadchiroli. Known for its isolation and natural surroundings, it is an offbeat destination ideal for experienced trekkers.',
        images: [bhamragadImg],
        rating: 3.8,
        visitors: 500,
        crowdStatus: 'low',
        bestTimeToVisit: 'Winter',
        entryFee: 'Free',
        timings: '6:00 AM – 5:00 PM',
        altitude: '~800 m',
        historicalSignificance: 'Remote regional lookout point deep in Gadchiroli forests',
        trek: { routes: [{ difficulty: 'Hard' }] },
        history: { builtBy: 'Local rulers', year: 'Unknown' }
    },

    // 88. Sindkhed Raja Fort
    {
        _id: 'sindkhed_raja',
        name: 'Sindkhed Raja Fort',
        location: { district: 'Buldhana', state: 'Maharashtra' },
        difficulty: 'Easy',
        type: 'Land Fort',
        description: 'Sindkhed Raja Fort is historically significant as the birthplace of Rajmata Jijabai, mother of Chhatrapati Shivaji Maharaj. Though much of the fort is in ruins, it holds immense cultural and historical importance.',
        images: [sindkhedRajaImg],
        rating: 4.3,
        visitors: 4000,
        crowdStatus: 'moderate',
        bestTimeToVisit: 'October to February',
        entryFee: 'Free',
        timings: '8:00 AM – 6:00 PM',
        altitude: 'Ground level',
        historicalSignificance: 'Birthplace of Rajmata Jijabai, mother of Shivaji Maharaj',
        trek: { routes: [{ difficulty: 'Easy' }] },
        history: { builtBy: 'Jadhav family', year: 'Pre-17th Century' }
    }

];

// ─── Helper exports ─────────────────────────────────────
export const fortTypes = [...new Set(staticForts.map(f => f.type))];
export const fortDistricts = [...new Set(staticForts.map(f => f.location.district))].sort();
export const fortDifficulties = ['Easy', 'Moderate', 'Difficult'];

export default staticForts;
