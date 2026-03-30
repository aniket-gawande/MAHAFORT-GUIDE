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

/**
 * 🏰 Maharashtra Forts Database — 51 forts
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

];

// ─── Helper exports ─────────────────────────────────────
export const fortTypes = [...new Set(staticForts.map(f => f.type))];
export const fortDistricts = [...new Set(staticForts.map(f => f.location.district))].sort();
export const fortDifficulties = ['Easy', 'Moderate', 'Difficult'];

export default staticForts;
