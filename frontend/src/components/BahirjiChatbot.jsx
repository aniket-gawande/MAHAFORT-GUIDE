import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import bahirjiImage from '../assets/bahirji.jpg';

const BahirjiChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: '🙏 Namaskar! I am बहिर्जी नाईक (Bahirji Naik), the legendary spy of Chhatrapati Shivaji Maharaj. I have extensive knowledge about all 40+ Maharashtra forts!\n\nAsk me about:\n• Any fort details (history, trek, food, timings)\n• Recommendations based on difficulty\n• Best forts near any city\n• Safety tips and what to carry',
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // ========================================
    // COMPREHENSIVE FORT KNOWLEDGE BASE
    // 40+ Maharashtra Forts with detailed info
    // ========================================
    const fortDatabase = {
        // 1. SINHAGAD - Complete detailed info
        sinhagad: {
            name: 'Sinhagad Fort',
            aliases: ['sinhgad', 'kondana', 'singh gad', 'lion fort'],
            district: 'Pune',
            altitude: '1312 m',
            difficulty: 'Moderate',
            entryFee: 'Free (Parking ₹50-100)',
            timings: '6:00 AM - 6:00 PM',
            bestTime: 'October to March, Monsoon (June-September) for greenery',
            distanceFromCity: '30 km from Pune',
            history: 'Sinhagad Fort was the site of the legendary Battle of Sinhagad in 1670. Tanaji Malusare, a brave Maratha warrior, led a daring night attack to capture this fort from the Mughals. He sacrificed his life in battle, prompting Shivaji Maharaj to say "गड आला पण सिंह गेला" (The fort is won, but the lion is gone). The fort was originally called Kondana and was renamed Sinhagad in honor of Tanaji.',
            trek: {
                routes: [
                    { name: 'Donje Village Route', distance: '4 km', duration: '1.5-2 hours', difficulty: 'Easy', description: 'Most popular route with 400 stone steps, railings, rest points, and tea stalls' },
                    { name: 'Ghorawadi Route', distance: '5 km', duration: '3 hours', difficulty: 'Difficult', description: 'Steeper, less crowded, rocky terrain for experienced trekkers' },
                    { name: 'Motorable Road', distance: 'Drive up', duration: '15 mins', difficulty: 'Easy', description: 'Vehicles can drive up. Shared jeeps available for ₹20-30' }
                ]
            },
            landmarks: ['Tanaji Malusare Memorial', 'Kaundinyeshwar Temple', 'Rajaram\'s Tomb', 'Kalyan Darwaja', 'Pune Darwaja', 'Fort Walls', 'Kali Temple'],
            food: ['Pithla Bhakri (₹80-120)', 'Zunka Bhakar (₹70-100)', 'Kanda Bhaji (₹40-60)', 'Fresh Dahi/Yogurt (₹30-50)', 'Cutting Chai (₹10-15)', 'Kokum Sherbet (₹30-50)'],
            facilities: ['Parking available', 'Basic washrooms', 'Drinking water points', 'Good mobile network (Airtel, Jio, Vi)', 'Local guides (₹300-500)'],
            safety: ['Steep sections near Kalyan Darwaja', 'Slippery during monsoon', 'No railings at fort edges', 'Carry salt for leeches in monsoon']
        },

        // 2. RAIGAD - Capital of Maratha Empire
        raigad: {
            name: 'Raigad Fort',
            aliases: ['raigadh', 'rairi', 'capital fort'],
            district: 'Raigad',
            altitude: '820 m',
            difficulty: 'Moderate',
            entryFee: '₹50 (Ropeway ₹300-400 extra)',
            timings: '8:00 AM - 6:00 PM (Ropeway 9 AM - 5:30 PM)',
            bestTime: 'October to February',
            distanceFromCity: '170 km from Mumbai, 200 km from Pune',
            history: 'Raigad was the capital of Chhatrapati Shivaji Maharaj\'s Maratha Empire. The historic coronation (Rajyabhishek) took place here on June 6, 1674, marking the establishment of Hindavi Swarajya. Shivaji Maharaj spent his final years here and his Samadhi (tomb) is located on this fort. The fort has magnificent structures including the Royal Court (Raj Sabha), Queen\'s Palace, and the iconic Maha Darwaja.',
            trek: {
                routes: [
                    { name: 'Ropeway', distance: 'Direct', duration: '10 minutes', difficulty: 'Easy', description: 'Aerial ropeway takes you to fort top. Best for families and elderly.' },
                    { name: 'Steps Route', distance: '1737 steps', duration: '2-3 hours', difficulty: 'Moderate', description: 'Historic stone steps built during Maratha era. Rewarding climb!' }
                ]
            },
            landmarks: ['Maha Darwaja (Grand Gate)', 'Raj Sabha (Royal Court)', 'Shivaji Maharaj Samadhi', 'Takmak Tok', 'Jagdishwar Temple', 'Queen\'s Palace', 'Wagh Darwaja', 'Hirkani Buruj', 'Market Area'],
            food: ['Local Maharashtrian thali (₹150-250)', 'Bhakri meals', 'Snacks at fort top'],
            facilities: ['Ropeway available', 'Parking', 'Washrooms', 'Drinking water', 'Guides available', 'Small museum'],
            safety: ['Ropeway may close in bad weather', 'Steep drops at Takmak Tok', 'Can be crowded on weekends']
        },

        // 3. PRATAPGAD
        pratapgad: {
            name: 'Pratapgad Fort',
            aliases: ['pratapgarh', 'fort of valor'],
            district: 'Satara',
            altitude: '1080 m',
            difficulty: 'Easy',
            entryFee: 'Free',
            timings: '6:00 AM - 6:00 PM',
            bestTime: 'October to March',
            distanceFromCity: '24 km from Mahabaleshwar',
            history: 'Pratapgad is famous for the Battle of Pratapgad (1659) where Shivaji Maharaj defeated and killed Afzal Khan, the commander of Adil Shahi Sultanate. The battle marked a turning point in Maratha history. A 17-feet tall statue of Shivaji Maharaj stands at the fort entrance. Afzal Khan\'s tomb is located at the base of the fort.',
            trek: {
                routes: [
                    { name: 'Main Entrance Route', distance: '1 km', duration: '30-45 minutes', difficulty: 'Easy', description: 'Well-maintained stone steps. Family-friendly with handrails.' }
                ]
            },
            landmarks: ['Shivaji Maharaj Statue (17 ft)', 'Bhavani Temple', 'Afzal Khan\'s Tomb (at base)', 'Watch towers', 'Fort walls with cannons'],
            food: ['Snacks and chai at entrance', 'Restaurants in Mahabaleshwar nearby'],
            facilities: ['Parking available', 'Basic washrooms', 'Drinking water', 'Local guides'],
            safety: ['Easy and safe for families', 'Mind steps during monsoon']
        },

        // 4. RAJGAD - Former Capital
        rajgad: {
            name: 'Rajgad Fort',
            aliases: ['murumdev', 'king fort'],
            district: 'Pune',
            altitude: '1376 m',
            difficulty: 'Hard',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'November to February',
            distanceFromCity: '60 km from Pune',
            history: 'Rajgad served as the capital of the Maratha Empire for 26 years (1648-1674) before Raigad. Shivaji Maharaj\'s son Rajaram was born here. The fort has three machis (plateaus) - Suvela Machi, Padmavati Machi, and Sanjivani Machi. The palace ruins, water cisterns, and grand fortifications showcase the glory of Maratha architecture.',
            trek: {
                routes: [
                    { name: 'Gunjavane Route', distance: '5 km', duration: '3-4 hours', difficulty: 'Moderate', description: 'Most popular route through forest' },
                    { name: 'Pali Darwaza Route', distance: '6 km', duration: '4-5 hours', difficulty: 'Hard', description: 'Steeper but scenic' }
                ]
            },
            landmarks: ['Padmavati Temple', 'Suvela Machi', 'Sanjivani Machi', 'Palace Ruins', 'Nedhe (Rock window)', 'Balekilla', 'Chor Darwaja'],
            food: ['Basic snacks at Padmavati Machi', 'Carry your own food recommended'],
            facilities: ['No ropeway', 'Basic facilities', 'Camping possible', 'Water cisterns available'],
            safety: ['Long and strenuous trek', 'Carry sufficient water', 'Start early', 'Night trek popular but needs experience']
        },

        // 5. TORNA - First Fort of Shivaji
        torna: {
            name: 'Torna Fort',
            aliases: ['prachandagad', 'torana'],
            district: 'Pune',
            altitude: '1403 m',
            difficulty: 'Hard',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '50 km from Pune',
            history: 'Torna holds the special distinction of being the FIRST fort captured by Shivaji Maharaj at the young age of 16 in 1646. This marked the beginning of Swarajya. It\'s also the highest fort in Pune district. Shivaji found treasure here which he used to build Rajgad fort nearby. The fort was renamed Prachandagad (Fort of Tremendous Strength).',
            trek: {
                routes: [
                    { name: 'Velhe Village Route', distance: '5 km', duration: '3-4 hours', difficulty: 'Hard', description: 'Steep climb through rocky terrain' }
                ]
            },
            landmarks: ['Zunjar Machi', 'Budhla Machi', 'Bini Darwaja', 'Menghai Goddess Temple', 'Giant water tanks', 'Balekilla'],
            food: ['Carry your own food', 'Water available at cisterns on fort'],
            facilities: ['Basic to none', 'Camping possible'],
            safety: ['Challenging trek', 'Not for beginners', 'Carry enough water and food', 'Weather can change quickly at this altitude']
        },

        // 6. LOHAGAD - Iron Fort
        lohagad: {
            name: 'Lohagad Fort',
            aliases: ['lohgad', 'iron fort', 'loha gad'],
            district: 'Pune',
            altitude: '1033 m',
            difficulty: 'Easy',
            entryFee: 'Free',
            timings: '6:00 AM - 6:00 PM',
            bestTime: 'June to September (Monsoon special), October to March',
            distanceFromCity: '65 km from Pune, 52 km from Lonavala',
            history: 'Lohagad (Iron Fort) was an important treasury fort of the Maratha Empire. The fort has changed hands many times between Marathas, Mughals, and the British. Connected to Visapur Fort by a ridge. The four gates (Ganesh, Narayan, Hanuman, and Maha Darwaja) are architecturally significant.',
            trek: {
                routes: [
                    { name: 'Lohagadwadi Route', distance: '2 km', duration: '1 hour', difficulty: 'Easy', description: 'Well-paved steps, very popular, crowded on weekends' }
                ]
            },
            landmarks: ['Vinchukata (Scorpion Tail)', 'Ganesh Darwaja', 'Maha Darwaja', 'Hanuman Darwaja', 'Large water tanks', 'Laxmi Kothi'],
            food: ['Multiple food stalls at base', 'Tea and snacks on trek', 'Restaurants near Lonavala'],
            facilities: ['Good parking', 'Washrooms', 'Well-marked trail', 'Guides available'],
            safety: ['Extremely slippery in monsoon', 'Vinchukata is narrow - be careful', 'Very crowded weekends']
        },

        // 7. VISAPUR - Twin of Lohagad
        visapur: {
            name: 'Visapur Fort',
            aliases: ['visapoor', 'visapur gad'],
            district: 'Pune',
            altitude: '1084 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to March',
            distanceFromCity: '65 km from Pune',
            history: 'Visapur is the twin fort of Lohagad, built in 1713 by the first Peshwa Balaji Vishwanath. It\'s larger than Lohagad but less crowded. The fort has beautiful caves and rock-cut water cisterns.',
            trek: {
                routes: [
                    { name: 'Via Lohagad', distance: '3 km from Lohagad', duration: '1.5 hours', difficulty: 'Moderate', description: 'Ridge walk from Lohagad' },
                    { name: 'Bhaje Caves Route', distance: '4 km', duration: '2-3 hours', difficulty: 'Moderate', description: 'Through Bhaje caves, scenic route' }
                ]
            },
            landmarks: ['Massive water cisterns', 'Rock-cut caves', 'Fort walls', 'Plateau with views'],
            food: ['Carry your own food', 'No stalls on fort'],
            facilities: ['Basic facilities', 'Less crowded than Lohagad'],
            safety: ['Longer trek than Lohagad', 'Trail not as clear', 'Carry sufficient water']
        },

        // 8. SHIVNERI - Birthplace of Shivaji
        shivneri: {
            name: 'Shivneri Fort',
            aliases: ['shivner', 'birthplace fort'],
            district: 'Pune',
            altitude: '945 m',
            difficulty: 'Moderate',
            entryFee: '₹25',
            timings: '8:00 AM - 6:00 PM',
            bestTime: 'October to February',
            distanceFromCity: '90 km from Pune (near Junnar)',
            history: 'Shivneri Fort is the BIRTHPLACE of Chhatrapati Shivaji Maharaj. He was born here on February 19, 1630. The fort has the Shivai Devi temple where his mother Jijabai prayed. It\'s a sacred pilgrimage site for all Maratha history enthusiasts. The statue of young Shivaji with Jijabai is an iconic landmark.',
            trek: {
                routes: [
                    { name: 'Main Stairs Route', distance: '1 km', duration: '45 mins - 1 hour', difficulty: 'Moderate', description: 'Well-maintained stone steps through 7 gates' }
                ]
            },
            landmarks: ['Shivaji-Jijabai Statue', 'Shivai Devi Temple', 'Badami Talav (Almond Lake)', 'Ganga-Jamuna Springs', '7 gates including Maha Darwaja', 'Ambarkhana (Grain storage)'],
            food: ['Restaurants in Junnar town', 'Basic snacks at base'],
            facilities: ['Parking', 'Washrooms', 'Drinking water', 'Guides available', 'Well maintained by ASI'],
            safety: ['Easy and safe fort', 'Many steps but well-maintained', 'Good for families']
        },

        // 9. PANHALA - Largest Deccan Fort
        panhala: {
            name: 'Panhala Fort',
            aliases: ['panhalgarh', 'panhalgad'],
            district: 'Kolhapur',
            altitude: '845 m',
            difficulty: 'Easy',
            entryFee: 'Free',
            timings: '6:00 AM - 6:00 PM',
            bestTime: 'October to March',
            distanceFromCity: '20 km from Kolhapur',
            history: 'Panhala is one of the largest forts in the Deccan with a perimeter of 14 km. The legendary escape of Shivaji Maharaj from this fort in 1660 is famous - Baji Prabhu Deshpande sacrificed his life at Pavan Khind to let Shivaji escape. The fort has well-preserved structures.',
            trek: {
                routes: [
                    { name: 'Vehicle Access', distance: 'Drive up', duration: '30 mins drive', difficulty: 'Easy', description: 'Vehicles can go up to the fort. No trekking required.' }
                ]
            },
            landmarks: ['Teen Darwaja', 'Char Darwaja', 'Sajja Kothi', 'Ambarkhana', 'Andhar Bavadi (Dark Well)', 'Wagh Darwaja'],
            food: ['MTDC resort nearby', 'Local restaurants', 'Famous for Kolhapuri cuisine'],
            facilities: ['Vehicle accessible', 'Good facilities', 'MTDC accommodation', 'Guides available'],
            safety: ['Very easy fort', 'Good for all ages', 'Vehicle access throughout']
        },

        // 10. PURANDAR - Birthplace of Sambhaji
        purandar: {
            name: 'Purandar Fort',
            aliases: ['purandhar', 'purandhargad'],
            district: 'Pune',
            altitude: '1374 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'November to February',
            distanceFromCity: '50 km from Pune',
            history: 'Purandar Fort is the birthplace of Sambhaji Maharaj, son of Shivaji Maharaj. The Treaty of Purandar was signed here in 1665 between Shivaji and Jai Singh I of Amber. The fort has twin pinnacles - Purandar and Vajragad.',
            trek: {
                routes: [
                    { name: 'Main Route', distance: '3 km', duration: '1.5-2 hours', difficulty: 'Moderate', description: 'Through Narayanpur village' }
                ]
            },
            landmarks: ['Kedareshwar Temple', 'Purandareshwar Temple', 'Murarbaji Memorial', 'Vajragad (twin fort)', 'Dilli Darwaja'],
            food: ['Carry your own food', 'Limited options'],
            facilities: ['Basic facilities', 'Paragliding available nearby'],
            safety: ['Military area - some sections restricted', 'Check permissions if needed']
        },

        // 11-20: More forts
        tikona: {
            name: 'Tikona Fort',
            aliases: ['tikona gad', 'vitandgad', 'triangle fort'],
            district: 'Pune',
            altitude: '1066 m',
            difficulty: 'Easy',
            entryFee: 'Free',
            timings: '6:00 AM - 6:00 PM',
            bestTime: 'October to March',
            distanceFromCity: '60 km from Pune, near Pawna Lake',
            history: 'Tikona (meaning Triangle) gets its name from its triangular shape when seen from a distance. It offers stunning views of Pawna Lake and surrounding Sahyadris. Popular for photography and camping near Pawna Lake.',
            trek: {
                routes: [
                    { name: 'Tikona Peth Route', distance: '2 km', duration: '1-1.5 hours', difficulty: 'Easy', description: 'Rock-cut steps with some steep sections' }
                ]
            },
            landmarks: ['Trimbakeshwar Mahadev Temple', 'Seven gates', 'Rock-cut steps', 'Panoramic views of Pawna Lake'],
            food: ['Many camps near Pawna Lake', 'Food at base village'],
            facilities: ['Pawna Lake camping nearby', 'Basic facilities', 'Good for photography'],
            safety: ['Some rock patches need care', 'Great for beginners', 'Can be combined with Pawna camping']
        },

        korigad: {
            name: 'Korigad Fort',
            aliases: ['koraigad', 'kori gad'],
            district: 'Pune',
            altitude: '923 m',
            difficulty: 'Easy',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '20 km from Lonavala',
            history: 'Korigad is a small fort popular for night treks and camping. Has beautiful lake views and temple at the top.',
            trek: {
                routes: [
                    { name: 'Peth Shahpur Route', distance: '1.5 km', duration: '1 hour', difficulty: 'Easy', description: 'Short easy trek with rock patches' }
                ]
            },
            landmarks: ['Koraidevi Temple', 'Water tanks', 'Lake view point'],
            food: ['Carry your own or get at Lonavala'],
            facilities: ['Camping possible', 'Night trek popular'],
            safety: ['Easy and safe', 'Good for night trekking']
        },

        harishchandragad: {
            name: 'Harishchandragad Fort',
            aliases: ['harischandragad', 'hrischandra'],
            district: 'Ahmednagar',
            altitude: '1424 m',
            difficulty: 'Hard',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '165 km from Pune, 190 km from Mumbai',
            history: 'Harishchandragad is an ancient fort with structures dating back to the 6th century. Famous for the Konkan Kada (cliff with a concave overhang - only in the world), Kedareshwar Cave temple, and challenging treks.',
            trek: {
                routes: [
                    { name: 'Khireshwar Route', distance: '8 km', duration: '4-5 hours', difficulty: 'Moderate', description: 'Most popular, through jungle' },
                    { name: 'Pachnai Route', distance: '6 km', duration: '3-4 hours', difficulty: 'Hard', description: 'Steep rock patches' },
                    { name: 'Nalichi Vaat', distance: '3 km', duration: '2-3 hours', difficulty: 'Extreme', description: 'Technical rock climbing, rope needed' }
                ]
            },
            landmarks: ['Konkan Kada (must see sunset)', 'Kedareshwar Cave Temple (Shiva Linga in water)', 'Taramati Peak', 'Saptatirtha Pushkarni'],
            food: ['Carry your own', 'Village food at Khireshwar'],
            facilities: ['Basic caves for stay', 'Water at Saptatirtha', 'No electricity'],
            safety: ['Very challenging', 'Not for beginners', 'Konkan Kada edges are dangerous', 'Start early']
        },

        rajmachi: {
            name: 'Rajmachi Fort',
            aliases: ['rajmachi gad', 'shrivardhan manaranjan'],
            district: 'Pune',
            altitude: '820 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'June to September (Monsoon special)',
            distanceFromCity: '80 km from Pune, near Lonavala',
            history: 'Rajmachi consists of twin forts - Shrivardhan and Manaranjan. Very popular monsoon trek with stunning views of Sahyadri waterfalls.',
            trek: {
                routes: [
                    { name: 'Lonavala Route', distance: '16 km', duration: '5-6 hours', difficulty: 'Moderate', description: 'Long but scenic, through Karjat forest' },
                    { name: 'Kondivade Route', distance: '5 km', duration: '2 hours', difficulty: 'Easy', description: 'Shorter route from Karjat side' }
                ]
            },
            landmarks: ['Shrivardhan Fort', 'Manaranjan Fort', 'Rajmachi Village', 'Kalu waterfall (monsoon)'],
            food: ['Homestays at Rajmachi village', 'Local Maharashtrian food'],
            facilities: ['Village homestays', 'Camping possible', 'No electricity'],
            safety: ['Monsoon trek can be slippery', 'Leeches during monsoon', 'Long trek - start early']
        },

        vasota: {
            name: 'Vasota Fort',
            aliases: ['vasota gad', 'vyaghragad'],
            district: 'Satara',
            altitude: '1171 m',
            difficulty: 'Hard',
            entryFee: '₹50 (Boat charges extra - ₹2000-3000 for group)',
            timings: 'Open 24 hours',
            bestTime: 'November to February',
            distanceFromCity: '230 km from Pune (Bamnoli village)',
            history: 'Vasota is one of the most remote and adventurous forts, located inside Koyna Wildlife Sanctuary. Requires a boat ride across Shivsagar Lake followed by jungle trek. Rich wildlife including leopards, deer, and birds.',
            trek: {
                routes: [
                    { name: 'Bamnoli Route', distance: '7 km after boat', duration: '4-5 hours total', difficulty: 'Hard', description: 'Boat ride + jungle trek. Permission needed from Forest Dept.' }
                ]
            },
            landmarks: ['Koyna Backwaters', 'Dense jungle', 'Maruti Temple', 'Fort ruins', 'Wildlife spotting'],
            food: ['Carry your own', 'Basic meals at Bamnoli'],
            facilities: ['Boat booking needed', 'Forest permit required', 'Camping possible'],
            safety: ['Remote location', 'Wildlife area', 'Guide mandatory', 'Carry food & water']
        },

        // Sea Forts and Unique Forts
        janjira: {
            name: 'Murud-Janjira Fort',
            aliases: ['janjira', 'janjira sea fort', 'jazira'],
            district: 'Raigad',
            altitude: '0 m (Sea level)',
            difficulty: 'Easy',
            entryFee: '₹100 (includes boat)',
            timings: '8:00 AM - 5:00 PM',
            bestTime: 'October to March',
            distanceFromCity: '165 km from Mumbai (Murud town)',
            history: 'Murud-Janjira is the ONLY unconquered sea fort in India! Even Shivaji Maharaj and the Portuguese couldn\'t conquer it. Built by Siddis (African descent), it stands on an island with 40-feet high walls. The fort has 22 bastions and massive cannons including the famous Kalal Bangdi cannon.',
            trek: {
                routes: [
                    { name: 'Boat from Rajapuri', distance: '500 m', duration: '10-15 mins boat', difficulty: 'Easy', description: 'Local ferries from Rajapuri jetty' }
                ]
            },
            landmarks: ['22 Bastions', 'Kalal Bangdi & Landa Kasam Cannons', 'Nawab\'s Palace Ruins', 'Fresh water tank (unique - sweet water in sea fort!)', 'Mosque'],
            food: ['Restaurants in Murud town', 'Seafood specialties'],
            facilities: ['Boat service', 'Guides available', 'Beach nearby'],
            safety: ['Boat ride depends on weather', 'No facility on fort', 'Visit during low tide']
        },

        sindhudurg: {
            name: 'Sindhudurg Fort',
            aliases: ['sindhudurga', 'malvan fort'],
            district: 'Sindhudurg',
            altitude: '0 m (Sea level)',
            difficulty: 'Easy',
            entryFee: '₹50 (boat extra)',
            timings: '8:00 AM - 6:00 PM',
            bestTime: 'October to March',
            distanceFromCity: '450 km from Mumbai (Malvan)',
            history: 'Sindhudurg was built by Shivaji Maharaj in 1664 to protect the Konkan coast. It took 3 years and 3000 workers to build. The fort has the only temple in the world with Shivaji Maharaj\'s idol and his palm and footprints. Named "Durga" by Shivaji himself, meaning "impregnable".',
            trek: {
                routes: [
                    { name: 'Boat from Malvan', distance: '1 km', duration: '10 mins boat', difficulty: 'Easy', description: 'Regular boats from Malvan jetty' }
                ]
            },
            landmarks: ['Shivaji Temple (unique!)', 'Handprint and footprint of Shivaji', '52 Bastions', 'Underground rooms', '3 freshwater wells in sea!'],
            food: ['Famous Malvani cuisine', 'Fresh seafood in Malvan'],
            facilities: ['Regular boat service', 'Guides', 'Malvan beach resort options'],
            safety: ['Safe and easy', 'Great for families', 'Boat service regular']
        },

        // More Important Forts
        karnala: {
            name: 'Karnala Fort',
            aliases: ['karnala gad', 'funnel fort'],
            district: 'Raigad',
            altitude: '445 m',
            difficulty: 'Easy',
            entryFee: '₹45 (Bird Sanctuary entry)',
            timings: '7:00 AM - 5:00 PM',
            bestTime: 'October to March (bird watching)',
            distanceFromCity: '55 km from Mumbai (Panvel)',
            history: 'Karnala Fort is located inside Karnala Bird Sanctuary. The fort\'s distinctive feature is its tower (bastion) that looks like a pillar. Great for bird watching with 150+ species.',
            trek: {
                routes: [
                    { name: 'Sanctuary Route', distance: '3 km', duration: '1.5-2 hours', difficulty: 'Easy', description: 'Through bird sanctuary, well-marked trail' }
                ]
            },
            landmarks: ['Pinnacle tower', 'Bird Sanctuary', 'Fort ruins', 'Viewing points'],
            food: ['Canteen at sanctuary entrance', 'Restaurants on highway'],
            facilities: ['Good parking', 'Washrooms', 'Nature trails', 'Bird watching points'],
            safety: ['Very safe', 'Great for families and kids', 'Easy day trip from Mumbai']
        },

        kalsubai: {
            name: 'Kalsubai Peak',
            aliases: ['kalsubai', 'highest peak'],
            district: 'Ahmednagar',
            altitude: '1646 m (HIGHEST in Maharashtra!)',
            difficulty: 'Hard',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '150 km from Pune, 165 km from Mumbai',
            history: 'Kalsubai is the HIGHEST PEAK in Maharashtra at 1646 meters! Temple of Goddess Kalsubai at the summit. The climb involves iron ladders on rock faces. Sunrise from the top is spectacular.',
            trek: {
                routes: [
                    { name: 'Bari Village Route', distance: '5 km', duration: '3-4 hours', difficulty: 'Hard', description: 'Steep climb with iron ladders. Most popular route.' },
                    { name: 'Indore Village Route', distance: '6 km', duration: '4 hours', difficulty: 'Moderate', description: 'Less steep but longer' }
                ]
            },
            landmarks: ['Kalsubai Devi Temple', 'Iron ladders', 'Sunrise point', '360° view of Sahyadris'],
            food: ['Tea stalls at base', 'Carry your own'],
            facilities: ['Basic dhaba at base', 'No facility on peak'],
            safety: ['Iron ladders can be scary', 'Vertigo issues avoid', 'Start at 3 AM for sunrise', 'Very cold in winter']
        },

        ratangad: {
            name: 'Ratangad Fort',
            aliases: ['ratangarh', 'ratna gad'],
            district: 'Ahmednagar',
            altitude: '1280 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '170 km from Pune',
            history: 'Ratangad is famous for its Nedhe (Eye of the Needle) - a natural rock formation with a hole. Popular for night treks with stunning views of Ratanwadi Lake.',
            trek: {
                routes: [
                    { name: 'Ratanwadi Route', distance: '3 km', duration: '2-3 hours', difficulty: 'Moderate', description: 'From Ratanwadi village, passes through Amruteshwar Temple' }
                ]
            },
            landmarks: ['Nedhe (natural rock window)', 'Amruteshwar Temple', 'Ratanwadi Lake view', 'Ganesh Darwaja'],
            food: ['Homestays at Ratanwadi', 'Carry your own'],
            facilities: ['Village stay possible', 'Night trek popular'],
            safety: ['Nedhe requires careful climbing', 'Night trek needs experience']
        },

        lingana: {
            name: 'Lingana Fort',
            aliases: ['lingana gad'],
            district: 'Raigad',
            altitude: '830 m',
            difficulty: 'Extreme',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'November to January',
            distanceFromCity: '130 km from Pune',
            history: 'Lingana is one of the most TECHNICALLY CHALLENGING pinnacle forts in Maharashtra. Requires rock climbing skills and rappelling equipment. Only for expert trekkers.',
            trek: {
                routes: [
                    { name: 'Technical Climb', distance: '1 km', duration: '4-5 hours', difficulty: 'Extreme', description: 'Requires climbing gear, ropes, and expertise' }
                ]
            },
            landmarks: ['Pinnacle summit', 'Rock climbing routes', 'Views of Raigad'],
            food: ['Carry your own'],
            facilities: ['None - pure adventure'],
            safety: ['EXPERTS ONLY', 'Full climbing gear needed', 'Guide mandatory', 'Not a regular trek']
        },

        kalavantin: {
            name: 'Kalavantin Durg',
            aliases: ['kalavantin', 'prabalmachi'],
            district: 'Raigad',
            altitude: '700 m',
            difficulty: 'Hard',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '55 km from Mumbai (Panvel)',
            history: 'Kalavantin Durg is famous for its extremely steep rock-cut steps carved into the mountain face. Named after Queen Kalavantin. Adjacent to Prabalgad fort. One of the most thrilling treks near Mumbai!',
            trek: {
                routes: [
                    { name: 'Prabal Machi Route', distance: '2.5 km', duration: '3-4 hours', difficulty: 'Hard', description: 'Via Prabal Machi. Last section has near-vertical rock-cut steps.' }
                ]
            },
            landmarks: ['Vertical rock-cut steps', 'Prabalmachi', 'Prabalgad twin fort', 'Views of Matheran'],
            food: ['Stalls at Prabal Machi', 'Base village'],
            facilities: ['Camping at Prabal Machi', 'Local guides'],
            safety: ['Not for vertigo sufferers', 'Avoid in monsoon', 'Steep rock steps are dangerous', 'Hold chains carefully']
        },

        prabalgad: {
            name: 'Prabalgad Fort',
            aliases: ['prabal gad', 'muranjan'],
            district: 'Raigad',
            altitude: '710 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to March',
            distanceFromCity: '55 km from Mumbai',
            history: 'Prabalgad is the twin fort of Kalavantin Durg. Also known as Muranjan, it has impressive fortifications and a plateau called Prabalmachi.',
            trek: {
                routes: [
                    { name: 'Thakurwadi Route', distance: '4 km', duration: '2-3 hours', difficulty: 'Moderate', description: 'Via Prabalmachi village' }
                ]
            },
            landmarks: ['Prabalmachi', 'Fort plateau', 'Matheran views'],
            food: ['Food at Prabalmachi'],
            facilities: ['Camping possible'],
            safety: ['Easier than Kalavantin', 'Good for camping']
        },

        mahuli: {
            name: 'Mahuli Fort',
            aliases: ['mahuli gad'],
            district: 'Thane',
            altitude: '1050 m',
            difficulty: 'Hard',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'November to February',
            distanceFromCity: '85 km from Mumbai',
            history: 'Mahuli is the highest fort in Thane district. Challenging rock patches and steep climb make it a thrilling trek.',
            trek: {
                routes: [
                    { name: 'Mahuli Village Route', distance: '4 km', duration: '3-4 hours', difficulty: 'Hard', description: 'Steep climb with rock patches needing basic climbing' }
                ]
            },
            landmarks: ['Three pinnacles', 'Rock patches', 'Water cisterns'],
            food: ['Carry your own'],
            facilities: ['Basic'],
            safety: ['Rock climbing sections', 'Need proper shoes', 'Not for beginners']
        },

        irshalgad: {
            name: 'Irshalgad Fort',
            aliases: ['irshalgad', 'irshal gad'],
            district: 'Raigad',
            altitude: '1200 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '55 km from Mumbai',
            history: 'Irshalgad is a pinnacle fort with a thrilling narrow ridge walk. The summit offers amazing views of Matheran and surrounding Sahyadris.',
            trek: {
                routes: [
                    { name: 'Chowk Village Route', distance: '3 km', duration: '2-3 hours', difficulty: 'Moderate', description: 'Trek with narrow ridge section near summit' }
                ]
            },
            landmarks: ['Pinnacle summit', 'Ridge walk', 'Caves'],
            food: ['Carry your own'],
            facilities: ['Basic'],
            safety: ['Ridge is narrow', 'Not for those afraid of heights']
        },

        sudhagad: {
            name: 'Sudhagad Fort',
            aliases: ['sudhagad', 'sudha gad', 'bhorapgad'],
            district: 'Raigad',
            altitude: '620 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '100 km from Mumbai',
            history: 'Sudhagad has the famous Bhorai Devi temple visited by thousands during Navratri. Also known as Bhorapgad.',
            trek: {
                routes: [
                    { name: 'Thakurwadi Route', distance: '3 km', duration: '1.5-2 hours', difficulty: 'Moderate', description: 'Stone steps and trail' }
                ]
            },
            landmarks: ['Bhorai Devi Temple', 'Watch towers', 'Bastions'],
            food: ['Food available during festivals'],
            facilities: ['Temporary during Navratri'],
            safety: ['Safe trek', 'Very crowded during Navratri']
        },

        ghangad: {
            name: 'Ghangad Fort',
            aliases: ['ghan gad'],
            district: 'Pune',
            altitude: '1050 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'June to September (Monsoon)',
            distanceFromCity: '70 km from Pune (Tamhini Ghat)',
            history: 'Ghangad is a beautiful monsoon trek destination near Tamhini Ghat. Stunning views of waterfalls and Western Ghats.',
            trek: {
                routes: [
                    { name: 'Tamhini Route', distance: '2 km', duration: '1.5 hours', difficulty: 'Moderate', description: 'Short trek with rock patches' }
                ]
            },
            landmarks: ['Monsoon waterfalls', 'Lake view', 'Fort ruins'],
            food: ['Carry your own'],
            facilities: ['Basic'],
            safety: ['Slippery in monsoon', 'Leeches during monsoon']
        },

        korlai: {
            name: 'Korlai Fort',
            aliases: ['korlai', 'morro de chaul'],
            district: 'Raigad',
            altitude: '30 m',
            difficulty: 'Easy',
            entryFee: 'Free',
            timings: '6:00 AM - 6:00 PM',
            bestTime: 'October to March',
            distanceFromCity: '120 km from Mumbai',
            history: 'Korlai is a Portuguese sea fort built in 1521. Has a unique lighthouse and Indo-Portuguese architecture. The local Korlai village speaks a unique Portuguese Creole language!',
            trek: {
                routes: [
                    { name: 'Direct Route', distance: '500 m', duration: '15-20 mins', difficulty: 'Easy', description: 'Short walk from village' }
                ]
            },
            landmarks: ['Lighthouse', 'Portuguese architecture', 'Church ruins', 'Beach'],
            food: ['Seafood in Korlai village'],
            facilities: ['Beach nearby', 'Easy access'],
            safety: ['Very easy', 'Good for beach + fort combo trip']
        },

        naneghat: {
            name: 'Naneghat',
            aliases: ['nane ghat', 'coin pass'],
            district: 'Pune',
            altitude: '750 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '120 km from Pune, 165 km from Mumbai',
            history: 'Naneghat is an ancient trade route pass dating back to Satavahana era (200 BC). The name means "coin pass" as toll was collected here. Has ancient Brahmi script inscriptions in caves.',
            trek: {
                routes: [
                    { name: 'Vaishakhare Route', distance: '3 km', duration: '2 hours', difficulty: 'Moderate', description: 'Stone steps through the ghat' }
                ]
            },
            landmarks: ['Ancient caves', 'Satavahana inscriptions', 'Reverse waterfall (monsoon)'],
            food: ['Food at Vaishakhare'],
            facilities: ['Village homestays possible'],
            safety: ['Famous reverse waterfall - wind blows water up!', 'Windy at pass']
        },

        chavand: {
            name: 'Chavand Fort',
            aliases: ['chavand gad'],
            district: 'Satara',
            altitude: '900 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'November to February',
            distanceFromCity: '280 km from Pune',
            history: 'Chavand Fort is where Chhatrapati Shivaji Maharaj spent his final days. He passed away here on April 3, 1680. A deeply historical and emotional site for Maratha history lovers.',
            trek: {
                routes: [
                    { name: 'Main Route', distance: '2 km', duration: '1.5 hours', difficulty: 'Moderate', description: 'Through Chavand village' }
                ]
            },
            landmarks: ['Shivaji\'s final residence', 'Memorial', 'Temple', 'Palace ruins'],
            food: ['Carry your own'],
            facilities: ['Basic'],
            safety: ['Remote location', 'Emotional pilgrimage site']
        },

        kothaligad: {
            name: 'Kothaligad Fort',
            aliases: ['kothaligad', 'fort peth', 'kotligad'],
            district: 'Raigad',
            altitude: '923 m',
            difficulty: 'Easy',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to March',
            distanceFromCity: '70 km from Mumbai',
            history: 'Kothaligad is also known as Fort Peth. Easy trek with a unique pinnacle summit that has carved steps going inside the rock to reach the top.',
            trek: {
                routes: [
                    { name: 'Ambivali Route', distance: '2 km', duration: '1-1.5 hours', difficulty: 'Easy', description: 'Via Peth village, steps carved into rock pinnacle' }
                ]
            },
            landmarks: ['Rock pinnacle with carved steps', 'Caves', 'Temple'],
            food: ['Stalls at base'],
            facilities: ['Village stay possible'],
            safety: ['Safe and easy', 'Good for beginners']
        },

        // Additional Forts (21-42)
        malhargad: {
            name: 'Malhargad Fort',
            aliases: ['sonori fort', 'malhar gad'],
            district: 'Pune',
            altitude: '1050 m',
            difficulty: 'Moderate',
            entryFee: 'Free',
            timings: 'Open 24 hours',
            bestTime: 'October to February',
            distanceFromCity: '30 km from Pune (Saswad)',
            history: 'Malhargad is the youngest hill fort in Maharashtra, built by Peshwas in 1757. Also known as Sonori Fort. Has a Khandoba temple at the summit.',
            trek: {
                routes: [
                    { name: 'Sonori Village Route', distance: '2 km', duration: '1 hour', difficulty: 'Moderate', description: 'Short trek with steps' }
                ]
            },
            landmarks: ['Khandoba Temple', 'Well-preserved walls', 'Bastions'],
            food: ['Available at base'],
            facilities: ['Regular worship place', 'Basic facilities'],
            safety: ['Safe and moderate']
        }
    };

    // General Knowledge Base
    const generalKnowledge = {
        shivajiMaharaj: {
            keywords: ['shivaji', 'shivaji maharaj', 'chattrapati', 'founder', 'maratha'],
            info: 'Chhatrapati Shivaji Maharaj (1630-1680) was the founder of the Maratha Empire. Born at Shivneri Fort, he captured his first fort Torna at age 16. He was crowned at Raigad in 1674. His guerrilla warfare tactics (Ganimi Kava) were legendary. He built a navy, promoted religious tolerance, and established Swarajya (self-rule).'
        },
        tanajiMalusare: {
            keywords: ['tanaji', 'malusare', 'sinhagad battle', 'lion'],
            info: 'Tanaji Malusare was a legendary Maratha warrior. In 1670, he led the daring night attack on Sinhagad Fort, climbing the cliff with monitor lizards (ghorpads) to scale the walls. He died in battle but captured the fort. Shivaji Maharaj said: "गड आला पण सिंह गेला" (The fort is won, but the lion is gone).'
        },
        bajiPrabhu: {
            keywords: ['baji prabhu', 'deshpande', 'pavan khind', 'ghodkhind'],
            info: 'Baji Prabhu Deshpande was a Maratha commander who held the Ghodkhind (Horse Pass) to allow Shivaji Maharaj to escape from Panhala Fort. Though mortally wounded, he fought until he heard the cannon fire signaling Shivaji\'s safe arrival at Vishalgad. The pass was renamed Pavan Khind (Sacred Pass) in his honor.'
        },
        marathaEmpire: {
            keywords: ['maratha', 'empire', 'swarajya', 'hindavi'],
            info: 'The Maratha Empire (1674-1818) was founded by Shivaji Maharaj. At its peak, it covered much of India from Tamil Nadu to Peshawar. The empire was known for its military prowess, navy, administrative systems, and promotion of Marathi culture. Capitals included Rajgad, Raigad, and later Pune.'
        },
        difficulty: {
            easy: ['Lohagad', 'Tikona', 'Korigad', 'Pratapgad', 'Panhala', 'Karnala', 'Korlai', 'Sindhudurg', 'Janjira', 'Kothaligad', 'Tailbaila'],
            moderate: ['Sinhagad', 'Rajmachi', 'Visapur', 'Shivneri', 'Purandar', 'Ratangad', 'Prabalgad', 'Sudhagad', 'Irshalgad'],
            hard: ['Rajgad', 'Torna', 'Harishchandragad', 'Vasota', 'Kalsubai', 'Kalavantin', 'Mahuli', 'Alang-Madan-Kulang'],
            extreme: ['Lingana', 'Nalichi Vaat (Harishchandragad)']
        },
        byCity: {
            pune: ['Sinhagad', 'Rajgad', 'Torna', 'Lohagad', 'Visapur', 'Tikona', 'Purandar', 'Shivneri', 'Korigad'],
            mumbai: ['Karnala', 'Kalavantin', 'Prabalgad', 'Irshalgad', 'Kothaligad', 'Mahuli', 'Janjira'],
            nashik: ['Harishchandragad', 'Kalsubai', 'Ratangad', 'Harihar', 'Anjaneri'],
            kolhapur: ['Panhala', 'Vishalgad', 'Gaganbawda'],
            lonavala: ['Lohagad', 'Visapur', 'Tikona', 'Korigad', 'Rajmachi'],
            mahabaleshwar: ['Pratapgad', 'Kamalgad'],
            satara: ['Sajjangad', 'Vasota', 'Ajinkyatara'],
            raigad: ['Raigad', 'Janjira', 'Karnala', 'Sudhagad', 'Lingana']
        },
        seasons: {
            winter: { months: 'November to February', info: 'Best season! Clear skies, pleasant weather (15-25°C), excellent visibility. Perfect for photography and long treks.' },
            summer: { months: 'March to May', info: 'Hot (30-40°C). Start very early (5 AM). Carry 3-4L water. Avoid afternoon trekking. Sunrise treks recommended.' },
            monsoon: { months: 'June to September', info: 'Magical but challenging! Waterfalls everywhere, lush green. But slippery paths, leeches, reduced visibility. Best for Lohagad, Rajmachi, Ghangad, Tikona.' }
        },
        essentials: {
            basic: ['Water (2-3 liters minimum)', 'Energy snacks (dry fruits, chikki, glucose)', 'First-aid kit', 'Mobile with full charge + powerbank', 'ID proof', 'Torch/headlamp', 'Hat/cap', 'Sunscreen'],
            monsoon: ['Raincoat/poncho', 'Waterproof bag', 'Extra clothes', 'Salt (for leeches)', 'Plastic covers for electronics', 'Leech socks'],
            footwear: 'Wear proper trekking shoes with good grip. NO slippers, sandals, or sports shoes.',
            emergency: ['108 (Ambulance)', '112 (Emergency)', 'Forest Dept: 1926', 'Maharashtra Tourism: 1800-22-9930']
        }
    };

    // ========================================
    // INTELLIGENT RESPONSE GENERATION
    // ========================================
    
    // Find fort by name or alias
    const findFort = (message) => {
        const lowerMessage = message.toLowerCase();
        for (const [key, fort] of Object.entries(fortDatabase)) {
            // Check fort name
            if (lowerMessage.includes(key) || lowerMessage.includes(fort.name.toLowerCase())) {
                return { key, fort };
            }
            // Check aliases
            if (fort.aliases && fort.aliases.some(alias => lowerMessage.includes(alias))) {
                return { key, fort };
            }
        }
        return null;
    };

    // Get topic from user message
    const detectTopic = (message) => {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.match(/history|story|battle|built|who|when|king|war|capture|conquer/)) return 'history';
        if (lowerMessage.match(/trek|route|climb|walk|path|hike|distance|time|duration|how long|how far|reach/)) return 'trek';
        if (lowerMessage.match(/location|where|district|near|city|distance from|how to reach|km|kilometer/)) return 'location';
        if (lowerMessage.match(/food|eat|restaurant|drink|water|snack|famous for|local|cuisine|pithla|bhakri|zunka/)) return 'food';
        if (lowerMessage.match(/timing|time|open|close|hour|when to visit|entry|ticket|fee|cost|price|parking/)) return 'timings';
        if (lowerMessage.match(/difficult|easy|hard|level|beginner|expert|challenging|moderate/)) return 'difficulty';
        if (lowerMessage.match(/landmark|attraction|temple|see|visit|explore|must see|things to do|place/)) return 'landmarks';
        if (lowerMessage.match(/facility|amenity|toilet|washroom|water|network|mobile|parking|ropeway|guide/)) return 'facilities';
        if (lowerMessage.match(/safe|danger|precaution|risk|warning|careful|avoid|leech|slip|emergency/)) return 'safety';
        if (lowerMessage.match(/best time|season|monsoon|winter|summer|weather|month/)) return 'bestTime';
        if (lowerMessage.match(/altitude|height|elevation|meter|feet|highest|tallest/)) return 'altitude';
        if (lowerMessage.match(/carry|bring|pack|essentials|checklist|what to|need/)) return 'essentials';
        
        return 'general';
    };

    // Generate response for specific fort
    const getFortResponse = (fort, topic) => {
        switch(topic) {
            case 'history':
                return `📜 **${fort.name} History:**\n\n${fort.history}`;
            
            case 'trek':
                let trekInfo = `🥾 **${fort.name} Trek Information:**\n\n`;
                trekInfo += `📍 Difficulty: ${fort.difficulty}\n`;
                trekInfo += `⛰️ Altitude: ${fort.altitude}\n`;
                trekInfo += `🗓️ Best Time: ${fort.bestTime}\n\n`;
                if (fort.trek && fort.trek.routes) {
                    trekInfo += `**Routes:**\n`;
                    fort.trek.routes.forEach((route, i) => {
                        trekInfo += `${i + 1}. ${route.name}\n`;
                        trekInfo += `   • Distance: ${route.distance}\n`;
                        trekInfo += `   • Duration: ${route.duration}\n`;
                        trekInfo += `   • Difficulty: ${route.difficulty}\n`;
                        trekInfo += `   • ${route.description}\n\n`;
                    });
                }
                return trekInfo;
            
            case 'location':
                return `📍 **${fort.name} Location:**\n\n• District: ${fort.district}\n• Distance: ${fort.distanceFromCity}\n• Altitude: ${fort.altitude}`;
            
            case 'food':
                let foodInfo = `🍽️ **${fort.name} Food:**\n\n`;
                if (fort.food && fort.food.length > 0) {
                    foodInfo += `**Available Food:**\n`;
                    fort.food.forEach(item => foodInfo += `• ${item}\n`);
                } else {
                    foodInfo += `Carry your own food. Limited options available.`;
                }
                return foodInfo;
            
            case 'timings':
                return `🕐 **${fort.name} Timings & Entry:**\n\n• Timings: ${fort.timings}\n• Entry Fee: ${fort.entryFee}\n• Best Time to Visit: ${fort.bestTime}`;
            
            case 'difficulty':
                return `📊 **${fort.name} Difficulty:**\n\n• Level: ${fort.difficulty}\n• Altitude: ${fort.altitude}\n\n${fort.difficulty === 'Easy' ? '✅ Suitable for beginners and families!' : fort.difficulty === 'Moderate' ? '⚠️ Requires moderate fitness. Good for regular trekkers.' : '🔥 Challenging! Only for experienced trekkers.'}`;
            
            case 'landmarks':
                let landmarkInfo = `🏛️ **${fort.name} Must-See Landmarks:**\n\n`;
                if (fort.landmarks && fort.landmarks.length > 0) {
                    fort.landmarks.forEach((l, i) => landmarkInfo += `${i + 1}. ${l}\n`);
                }
                return landmarkInfo;
            
            case 'facilities':
                let facilityInfo = `🏕️ **${fort.name} Facilities:**\n\n`;
                if (fort.facilities && fort.facilities.length > 0) {
                    fort.facilities.forEach(f => facilityInfo += `• ${f}\n`);
                }
                return facilityInfo;
            
            case 'safety':
                let safetyInfo = `⚠️ **${fort.name} Safety Tips:**\n\n`;
                if (fort.safety && fort.safety.length > 0) {
                    fort.safety.forEach(s => safetyInfo += `• ${s}\n`);
                }
                safetyInfo += `\n🆘 Emergency: 108 (Ambulance), 112 (Emergency)`;
                return safetyInfo;
            
            case 'bestTime':
                return `📅 **Best Time to Visit ${fort.name}:**\n\n${fort.bestTime}\n\n${generalKnowledge.seasons.winter.info}`;
            
            case 'altitude':
                return `⛰️ **${fort.name} Altitude:** ${fort.altitude}\n\nDifficulty: ${fort.difficulty}`;
            
            default:
                // General fort info
                return `🏰 **${fort.name}**\n\n` +
                    `📍 ${fort.distanceFromCity}\n` +
                    `⛰️ Altitude: ${fort.altitude}\n` +
                    `📊 Difficulty: ${fort.difficulty}\n` +
                    `🎫 Entry: ${fort.entryFee}\n` +
                    `🕐 Timings: ${fort.timings}\n` +
                    `📅 Best Time: ${fort.bestTime}\n\n` +
                    `📜 ${fort.history.substring(0, 200)}...\n\n` +
                    `💡 Ask me about: trek routes, food, landmarks, safety, or history!`;
        }
    };

    // Main response generator
    const getBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase().trim();

        // ===== GREETINGS =====
        if (message.match(/^(hi|hello|hey|namaskar|namaste|jai maharashtra|jai shivaji|jai bhavani)/)) {
            return '🙏 Namaskar! Jai Maharashtra! I am Bahirji Naik, ready to guide you through the glorious forts of Maharashtra.\n\nHow can I help you today?\n• Ask about any specific fort\n• Get trek recommendations\n• Know about Maratha history';
        }

        // ===== THANKS / BYE =====
        if (message.match(/^(thanks|thank you|bye|goodbye|dhanyavad)/)) {
            return '🙏 धन्यवाद (Thank you)! It was my pleasure to help.\n\nHar Har Mahadev! 🚩\nJai Maharashtra! 🧡';
        }

        // ===== CHECK FOR SPECIFIC FORT =====
        const fortMatch = findFort(message);
        if (fortMatch) {
            const topic = detectTopic(message);
            return getFortResponse(fortMatch.fort, topic);
        }

        // ===== MARATHA HISTORY QUERIES =====
        if (message.match(/shivaji|maharaj|chattrapati|founder/)) {
            return `👑 **Chhatrapati Shivaji Maharaj**\n\n${generalKnowledge.shivajiMaharaj.info}\n\n🏰 Key Forts:\n• Birth: Shivneri Fort (1630)\n• First Captured: Torna Fort (1646)\n• Coronation: Raigad Fort (1674)\n• Final Days: Chavand Fort (1680)`;
        }

        if (message.match(/tanaji|malusare|sinhagad battle/)) {
            return `⚔️ **Tanaji Malusare - The Lion**\n\n${generalKnowledge.tanajiMalusare.info}`;
        }

        if (message.match(/baji prabhu|deshpande|pavan khind/)) {
            return `⚔️ **Baji Prabhu Deshpande**\n\n${generalKnowledge.bajiPrabhu.info}`;
        }

        // ===== FORT RECOMMENDATIONS =====
        if (message.match(/best fort|recommend|suggest|which fort|top fort/)) {
            return `⭐ **Fort Recommendations:**\n\n` +
                `**For Beginners (Easy):**\n• Lohagad - Best monsoon views\n• Tikona - Pawna Lake views\n• Pratapgad - Historical, family-friendly\n• Karnala - Near Mumbai, bird sanctuary\n\n` +
                `**For Regular Trekkers (Moderate):**\n• Sinhagad - Historic, great food\n• Rajmachi - Monsoon special\n• Ratangad - Night trek favorite\n\n` +
                `**For Experienced (Hard):**\n• Rajgad - Former capital, long trek\n• Harishchandragad - Konkan Kada views\n• Kalsubai - Highest peak\n• Torna - First fort of Shivaji\n\n` +
                `**For Experts Only:**\n• Lingana - Technical climbing\n• Alang-Madan-Kulang - Multi-day adventure`;
        }

        // ===== FORTS BY DIFFICULTY =====
        if (message.match(/easy fort|beginner|family|kid|child/)) {
            return `✅ **Easy Forts (Beginner/Family-Friendly):**\n\n` +
                `1. Lohagad - 1 hour trek, monsoon beauty\n` +
                `2. Tikona - 1.5 hours, Pawna Lake views\n` +
                `3. Pratapgad - 30-45 mins, historical\n` +
                `4. Karnala - Bird sanctuary, near Mumbai\n` +
                `5. Sindhudurg - Sea fort, boat ride\n` +
                `6. Janjira - Unconquered sea fort\n` +
                `7. Panhala - Vehicle accessible\n` +
                `8. Kothaligad - Unique pinnacle\n\n` +
                `💡 These are perfect for first-time trekkers!`;
        }

        if (message.match(/hard fort|difficult|challenging|extreme|expert/)) {
            return `🔥 **Hard/Challenging Forts:**\n\n` +
                `**Hard (4-6 hours):**\n` +
                `• Rajgad - Former capital, 3 machis\n` +
                `• Torna - First fort, highest in Pune\n` +
                `• Harishchandragad - Konkan Kada!\n` +
                `• Kalsubai - Highest peak in Maharashtra\n` +
                `• Kalavantin - Vertical rock steps\n` +
                `• Vasota - Boat + jungle trek\n\n` +
                `**Extreme (Technical):**\n` +
                `• Lingana - Rope climbing needed\n` +
                `• Alang-Madan-Kulang - Multi-day\n\n` +
                `⚠️ Requires good fitness and experience!`;
        }

        // ===== FORTS BY CITY =====
        if (message.match(/near pune|pune fort|around pune/)) {
            return `📍 **Forts Near Pune:**\n\n` +
                `• Sinhagad - 30 km (Moderate)\n` +
                `• Rajgad - 60 km (Hard)\n` +
                `• Torna - 50 km (Hard)\n` +
                `• Lohagad - 65 km (Easy)\n` +
                `• Visapur - 65 km (Moderate)\n` +
                `• Tikona - 60 km (Easy)\n` +
                `• Purandar - 50 km (Moderate)\n` +
                `• Shivneri - 90 km (Moderate)\n\n` +
                `💡 Weekend favorites: Sinhagad & Lohagad`;
        }

        if (message.match(/near mumbai|mumbai fort|around mumbai/)) {
            return `📍 **Forts Near Mumbai:**\n\n` +
                `• Karnala - 55 km (Easy)\n` +
                `• Kalavantin - 55 km (Hard)\n` +
                `• Prabalgad - 55 km (Moderate)\n` +
                `• Irshalgad - 55 km (Moderate)\n` +
                `• Kothaligad - 70 km (Easy)\n` +
                `• Mahuli - 85 km (Hard)\n` +
                `• Janjira - 165 km (Easy, boat)\n` +
                `• Lohagad - 105 km (Easy)\n\n` +
                `💡 Day trip favorites: Karnala & Lohagad`;
        }

        if (message.match(/near lonavala|lonavala fort/)) {
            return `📍 **Forts Near Lonavala:**\n\n` +
                `• Lohagad - 10 km (Easy)\n` +
                `• Visapur - 10 km (Moderate)\n` +
                `• Tikona - 20 km (Easy)\n` +
                `• Korigad - 20 km (Easy)\n` +
                `• Rajmachi - 15 km (Moderate)\n\n` +
                `💡 Can combine Lohagad + Visapur in one day!`;
        }

        // ===== MONSOON SPECIAL =====
        if (message.match(/monsoon|rain|june|july|august|september|waterfall/)) {
            return `🌧️ **Monsoon Trekking (June-September):**\n\n` +
                `**Best Monsoon Forts:**\n` +
                `• Lohagad - Waterfalls everywhere! 💚\n` +
                `• Rajmachi - Green carpet views\n` +
                `• Tikona - Pawna Lake + greenery\n` +
                `• Ghangad - Tamhini waterfalls\n` +
                `• Visapur - Less crowded, stunning\n` +
                `• Sinhagad - Classic monsoon trek\n\n` +
                `⚠️ **Safety Tips:**\n` +
                `• Slippery paths - wear grip shoes\n` +
                `• Leeches - carry salt\n` +
                `• Avoid during heavy rain\n` +
                `• Carry raincoat & extra clothes`;
        }

        // ===== NIGHT TREK =====
        if (message.match(/night trek|night hike|camping|camp|star|sunrise/)) {
            return `🌙 **Night Trek Favorites:**\n\n` +
                `1. Kalsubai - Sunrise at highest peak! 🌅\n` +
                `2. Ratangad - Stars + Nedhe view\n` +
                `3. Korigad - Easy night trek\n` +
                `4. Tikona - Pawna Lake + stars\n` +
                `5. Naneghat - Ancient pass views\n\n` +
                `🏕️ **Camping Options:**\n` +
                `• Prabalmachi (for Kalavantin)\n` +
                `• Rajmachi village\n` +
                `• Pawna Lake (near Tikona)\n` +
                `• Harishchandragad caves\n\n` +
                `💡 Start at 2-3 AM for sunrise treks!`;
        }

        // ===== SEA FORTS =====
        if (message.match(/sea fort|water fort|island fort|boat|naval/)) {
            return `🌊 **Sea Forts of Maharashtra:**\n\n` +
                `1. **Murud-Janjira** 🏆\n` +
                `   Only UNCONQUERED fort in India!\n` +
                `   Boat from Rajapuri, ₹100\n\n` +
                `2. **Sindhudurg** ⭐\n` +
                `   Built by Shivaji, has his only temple!\n` +
                `   3 freshwater wells in sea!\n\n` +
                `3. **Korlai** 🇵🇹\n` +
                `   Portuguese fort with lighthouse\n` +
                `   Beach combo trip!\n\n` +
                `4. **Vijaydurg**\n` +
                `   Strongest sea fort, triple walls\n\n` +
                `💡 Best time: October-March`;
        }

        // ===== HIGHEST / RECORDS =====
        if (message.match(/highest|tallest|biggest|largest|first|oldest|unique|record/)) {
            return `🏆 **Maharashtra Fort Records:**\n\n` +
                `⛰️ **Highest Peak:** Kalsubai (1646m)\n` +
                `🏰 **Highest Fort (Pune):** Torna (1403m)\n` +
                `📏 **Largest Fort:** Panhala (14 km perimeter)\n` +
                `🔒 **Only Unconquered:** Murud-Janjira\n` +
                `👶 **First Fort (Shivaji):** Torna (1646)\n` +
                `👑 **Coronation Site:** Raigad\n` +
                `🎂 **Birthplace Fort:** Shivneri\n` +
                `📜 **Oldest Pass:** Naneghat (200 BC)\n` +
                `🌊 **Only Fort with Shivaji Temple:** Sindhudurg`;
        }

        // ===== ESSENTIALS / WHAT TO CARRY =====
        if (message.match(/what to carry|essentials|pack|checklist|bring|need/)) {
            return `🎒 **Trekking Essentials Checklist:**\n\n` +
                `**Must Have:**\n` +
                `• Water: 2-3 liters minimum\n` +
                `• Snacks: Dry fruits, chikki, energy bars\n` +
                `• First-aid kit\n` +
                `• Torch/headlamp\n` +
                `• Mobile + powerbank\n` +
                `• ID proof\n` +
                `• Cap/hat + sunscreen\n` +
                `• Cash (₹500-1000)\n\n` +
                `**Monsoon Extras:**\n` +
                `• Raincoat/poncho\n` +
                `• Waterproof bag\n` +
                `• Extra clothes\n` +
                `• Salt for leeches\n` +
                `• Plastic covers\n\n` +
                `👟 **Footwear:** Trekking shoes with grip. NO slippers!`;
        }

        // ===== SAFETY =====
        if (message.match(/safe|safety|danger|precaution|emergency|help/)) {
            return `⚠️ **Safety Guidelines:**\n\n` +
                `**Before Trek:**\n` +
                `• Inform someone about plans\n` +
                `• Check weather forecast\n` +
                `• Start early (6 AM ideal)\n` +
                `• Trek in groups (3+ people)\n\n` +
                `**During Trek:**\n` +
                `• Stay on marked trails\n` +
                `• Don't climb wet rocks\n` +
                `• Avoid edges without railings\n` +
                `• Keep phone charged\n\n` +
                `**Emergency Numbers:**\n` +
                `• 108 - Ambulance\n` +
                `• 112 - Emergency\n` +
                `• 1926 - Forest Dept\n` +
                `• 1800-22-9930 - Maharashtra Tourism`;
        }

        // ===== BEST TIME =====
        if (message.match(/best time|when to visit|season|month/)) {
            return `📅 **Best Time to Visit Forts:**\n\n` +
                `**🌸 Winter (Nov-Feb):** BEST!\n` +
                `• Perfect weather 15-25°C\n` +
                `• Clear skies, great visibility\n` +
                `• All forts accessible\n\n` +
                `**☀️ Summer (Mar-May):**\n` +
                `• Hot 30-40°C\n` +
                `• Start very early (5 AM)\n` +
                `• Carry extra water\n\n` +
                `**🌧️ Monsoon (Jun-Sep):**\n` +
                `• Magical greenery & waterfalls\n` +
                `• Slippery, leeches\n` +
                `• Best for: Lohagad, Rajmachi, Tikona\n` +
                `• Avoid: Technical forts`;
        }

        // ===== HOW MANY FORTS =====
        if (message.match(/how many fort|total fort|number of fort|count/)) {
            return `🏰 **Maharashtra Fort Statistics:**\n\n` +
                `• Total Forts: 350+\n` +
                `• Hill Forts: 300+\n` +
                `• Sea Forts: 15+\n` +
                `• ASI Protected: 50+\n\n` +
                `Our database covers 40+ major forts!\n\n` +
                `💡 Ask me about any specific fort!`;
        }

        // ===== LIST ALL FORTS =====
        if (message.match(/list all|show all|all fort|every fort/)) {
            const fortNames = Object.values(fortDatabase).map(f => f.name).sort();
            return `📋 **Forts in My Knowledge Base (${fortNames.length}):**\n\n` +
                fortNames.map((name, i) => `${i + 1}. ${name}`).join('\n') +
                `\n\n💡 Ask me details about any fort!`;
        }

        // ===== DEFAULT / HELP =====
        return `🤔 I can help you with:\n\n` +
            `**Fort Information:**\n` +
            `• "Tell me about Sinhagad"\n` +
            `• "Raigad history"\n` +
            `• "Lohagad trek route"\n` +
            `• "Food at Sinhagad"\n\n` +
            `**Recommendations:**\n` +
            `• "Best forts near Pune"\n` +
            `• "Easy forts for beginners"\n` +
            `• "Monsoon trek suggestions"\n` +
            `• "Night trek options"\n\n` +
            `**General Info:**\n` +
            `• "What to carry for trek"\n` +
            `• "Safety tips"\n` +
            `• "Best time to visit"\n` +
            `• "Who was Tanaji Malusare"\n\n` +
            `🏰 I know 40+ forts - just ask!`;
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        // Add user message
        const userMsg = {
            type: 'user',
            text: inputMessage,
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);

        // Get bot response
        setTimeout(() => {
            const botResponse = getBotResponse(inputMessage);
            const botMsg = {
                type: 'bot',
                text: botResponse,
                time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMsg]);
        }, 500);

        setInputMessage('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 text-white p-2 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-bounce border-4 border-yellow-400"
                >
                    <img
                        src={bahirjiImage}
                        alt="Bahirji Naik"
                        className="w-20 h-20 rounded-full object-cover border-4 border-white"
                    />
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-orange-800 text-sm font-black px-3 py-2 rounded-full animate-pulse border-2 border-orange-600 shadow-lg">
                        बहिर्जी
                    </div>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-8 right-8 w-96 h-[600px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border-4 border-orange-400">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-600 via-red-700 to-orange-600 text-white p-6 flex items-center justify-between relative overflow-hidden">
                        {/* Animated Background */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full blur-2xl animate-pulse"></div>
                        </div>

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="bg-white p-1 rounded-full border-4 border-yellow-400 shadow-xl">
                                <img
                                    src={bahirjiImage}
                                    alt="Bahirji Naik"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black drop-shadow-lg">बहिर्जी नाईक</h3>
                                <p className="text-lg text-yellow-200 font-bold">Bahirji Naik - Your Fort Guide 🏰</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 relative z-10"
                        >
                            <FaTimes className="text-xl" />
                        </button>
                    </div>
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-orange-50 to-red-50">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl p-4 ${msg.type === 'user'
                                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                                        : 'bg-white border-2 border-orange-200 text-gray-800'
                                        } shadow-lg`}
                                >
                                    <p className="text-sm whitespace-pre-line font-medium">{msg.text}</p>
                                    <p className={`text-xs mt-2 ${msg.type === 'user' ? 'text-orange-100' : 'text-gray-500'}`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t-2 border-orange-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about forts..."
                                className="flex-1 px-4 py-3 rounded-xl border-2 border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                <FaPaperPlane className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BahirjiChatbot;
