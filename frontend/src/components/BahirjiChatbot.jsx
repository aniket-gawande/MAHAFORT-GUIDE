import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaTimes, FaPaperPlane, FaFortAwesome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// ──────────────────────────────────────────────────────────────────────────
// 🏰  बहिर्जी नाईक — The Fort Knowledge Chatbot
//     Named after Bahirji Naik, Chhatrapati Shivaji Maharaj's legendary spy
// ──────────────────────────────────────────────────────────────────────────

// ─── Fort Knowledge Base ─────────────────────────────────────────────────
const fortKnowledge = {
  sinhagad: {
    name: 'Sinhagad Fort',
    marathi: 'सिंहगड',
    district: 'Pune',
    altitude: '1312 m',
    difficulty: 'Moderate',
    history: 'Historic hilltop fortress famous for the Battle of Sinhagad (1670). Tanaji Malusare sacrificed his life to capture it from the Mughals. Originally called Kondana, renamed Sinhagad (Lion Fort) by Shivaji Maharaj after Tanaji\'s bravery.',
    bestTime: 'October to March',
    tips: 'Start early morning, carry water, the path is well-marked. Local food stalls at the top serve amazing pithla-bhakri and kanda bhaji.',
    entryFee: 'Free',
    timings: '6:00 AM - 6:00 PM',
    howToReach: 'Located 36 km south-west of Pune city. Take Sinhagad road from Pune to reach the base village. Auto-rickshaws and buses available.',
  },

  raigad: {
    name: 'Raigad Fort',
    marathi: 'रायगड',
    district: 'Raigad',
    altitude: '820 m',
    difficulty: 'Moderate',
    history: 'The capital of the Maratha Empire where Chhatrapati Shivaji Maharaj was crowned on 6 June 1674. Features the grand Maha Darwaja, royal palace ruins, and the famous ropeway. Shivaji Maharaj spent his last years here.',
    bestTime: 'October to February',
    tips: 'Use the ropeway (₹200-400) to save energy or climb 1737 steps for the full experience. Carry water and snacks. The queen\'s palace and Jagdishwar temple are must-see.',
    entryFee: '₹50 (Ropeway: ₹200-400)',
    timings: '8:00 AM - 5:00 PM',
    howToReach: 'Nearest railway station is Veer/Mangaon. From there, take a bus/taxi to Raigad base village Pachad.',
  },

  pratapgad: {
    name: 'Pratapgad Fort',
    marathi: 'प्रतापगड',
    district: 'Satara',
    altitude: '1080 m',
    difficulty: 'Easy',
    history: 'Site of the legendary Battle of Pratapgad (1659) where Shivaji Maharaj killed Afzal Khan with the "wagh nakh" (tiger claws). Features the Afzal Tower built at the spot where Afzal Khan fell and a grand statue of Shivaji Maharaj.',
    bestTime: 'October to March',
    tips: 'The fort is well maintained by the government. The Bhavani temple at the top is sacred. Combine with a visit to Mahabaleshwar.',
    entryFee: 'Free',
    timings: '9:00 AM - 5:30 PM',
    howToReach: 'Located 24 km from Mahabaleshwar. Drive through scenic forest road. Taxis available from Mahabaleshwar.',
  },

  rajgad: {
    name: 'Rajgad Fort',
    marathi: 'राजगड',
    district: 'Pune',
    altitude: '1376 m',
    difficulty: 'Difficult',
    history: 'Former capital of the Maratha Empire for 26 years (1648–1674) before Raigad. One of the largest forts in India with three machis — Suvela, Padmavati, and Sanjeevani. Shivaji Maharaj\'s queen Saibai passed away here.',
    bestTime: 'October to February',
    tips: 'Trek from Gunjavane village (shorter) or Pabe Ghat. Carry food and 3-4 liters of water. Night trek is popular but go with experienced group.',
    entryFee: 'Free',
    timings: '24 hours (open fort)',
    howToReach: 'Nearest base village is Gunjavane (~40 km from Pune). Buses run from Swargate, Pune.',
  },

  torna: {
    name: 'Torna Fort (Prachandagad)',
    marathi: 'तोरणा (प्रचंडगड)',
    district: 'Pune',
    altitude: '1403 m',
    difficulty: 'Difficult',
    history: 'The first fort captured by Shivaji Maharaj at the young age of 16 in 1643, marking the beginning of the Maratha Empire. The highest fort in Pune district.',
    bestTime: 'October to February',
    tips: 'Trek from Velhe is the most popular route (~3 hours). The terrain is steep — carry trekking poles if possible. Water cisterns are available at the top.',
    entryFee: 'Free',
    timings: '24 hours (open fort)',
    howToReach: 'From Pune, take a bus to Velhe village (~60 km). The trek starts from Velhe.',
  },

  shivneri: {
    name: 'Shivneri Fort',
    marathi: 'शिवनेरी',
    district: 'Pune',
    altitude: '1068 m',
    difficulty: 'Moderate',
    history: 'Birthplace of Chhatrapati Shivaji Maharaj on 19 February 1630. The fort has seven gates, freshwater springs, and the Shivai Devi temple after which Shivaji Maharaj was named.',
    bestTime: 'October to March',
    tips: 'The fort is ASI protected. Climb through the seven gates — each has unique architecture. The Kadelot point offers a stunning view.',
    entryFee: 'Free',
    timings: '6:00 AM - 6:00 PM',
    howToReach: 'Located near Junnar, about 90 km from Pune. Take a bus from Shivajinagar, Pune to Junnar.',
  },

  sindhudurg: {
    name: 'Sindhudurg Fort',
    marathi: 'सिंधुदुर्ग',
    district: 'Sindhudurg',
    altitude: 'Sea level',
    difficulty: 'Easy',
    history: 'Massive sea fortress built by Chhatrapati Shivaji Maharaj (1664–1667) on a rocky island off Malvan coast. Houses the only temple dedicated to Shivaji Maharaj with his handprint and footprint.',
    bestTime: 'October to February',
    tips: 'Take a boat from Malvan jetty (₹50-80). The fort is spread over 48 acres — plan at least 2-3 hours. Snorkeling and scuba diving available at nearby Tarkarli beach.',
    entryFee: 'Free (Boat: ₹50-80)',
    timings: '8:00 AM - 6:00 PM',
    howToReach: 'Malvan is well-connected by road. Nearest airport is Chipi (Sindhudurg). Nearest railway station is Kudal.',
  },

  lohagad: {
    name: 'Lohagad Fort',
    marathi: 'लोहगड',
    district: 'Pune',
    altitude: '1033 m',
    difficulty: 'Moderate',
    history: 'Iron fort near Lonavala, offering spectacular views of Pawna Lake. Connected to twin fort Visapur. Famous for Vinchu Kata (scorpion tail) rock formation. Shivaji Maharaj stored his treasury here.',
    bestTime: 'October to February',
    tips: 'Trek from Lohagadwadi or Bhaje village. Well-marked trail, takes about 1.5 hours. Visit the ancient Bhaje caves on the way.',
    entryFee: 'Free',
    timings: '6:00 AM - 6:00 PM',
    howToReach: 'Take a train to Malavli station on the Pune-Mumbai line. The base village is a short auto ride from the station.',
  },

  murudjanjira: {
    name: 'Murud Janjira Fort',
    marathi: 'मुरुड जंजिरा',
    district: 'Raigad',
    altitude: 'Sea level',
    difficulty: 'Easy',
    history: 'Unconquered sea fortress built by the Siddis in 1567 AD. Never captured by Marathas, Mughals, Portuguese, or British despite many attempts. Features 26 rounded bastions and 500+ cannons.',
    bestTime: 'October to March',
    tips: 'Boats depart from Rajpuri jetty. The fort takes about 1.5 hours to explore. Combine with a trip to Kashid beach.',
    entryFee: 'Boat: ₹20-50',
    timings: '7:00 AM - 6:30 PM',
    howToReach: 'Murud is about 165 km from Mumbai. Take a bus to Alibaug and then to Murud, or drive via NH66.',
  },

  harishchandragad: {
    name: 'Harishchandragad Fort',
    marathi: 'हरिश्चंद्रगड',
    district: 'Ahmednagar',
    altitude: '1424 m',
    difficulty: 'Difficult',
    history: 'One of the most iconic treks in Maharashtra. Features the legendary Konkan Kada — a massive concave cliff with a 1,400 m vertical drop. The Kedareshwar cave has a Shivalinga surrounded by waist-deep water.',
    bestTime: 'October to February',
    tips: 'Popular routes: Pachnai (easiest), Khireshwar (moderate), Nalichi Vaat (most challenging). Camping at the top is a memorable experience. Carry warm clothes as it gets cold at night.',
    entryFee: 'Free',
    timings: '24 hours (open fort)',
    howToReach: 'Base village Pachnai is about 170 km from Pune. Buses run from Kalyan/Kasara to Khireshwar.',
  },

  daulatabad: {
    name: 'Daulatabad Fort (Devagiri)',
    marathi: 'दौलताबाद (देवगिरी)',
    district: 'Aurangabad',
    altitude: '183 m (from base)',
    difficulty: 'Moderate',
    history: 'Originally called Devagiri (Hill of Gods) — one of the most impregnable forts ever built. Sultan Muhammad bin Tughluq shifted the entire Delhi capital here. Features a crocodile moat, dark tunnels, and the iconic Chand Minar.',
    bestTime: 'October to March',
    tips: 'Carry a flashlight for the dark tunnel passage. Combine with a visit to Ellora Caves (just 15 km away). A guide is recommended.',
    entryFee: '₹25 (Indian), ₹300 (Foreign)',
    timings: '6:00 AM - 6:00 PM',
    howToReach: 'Located 15 km from Aurangabad. Buses and auto-rickshaws available from Aurangabad.',
  },

  vishalgad: {
    name: 'Vishalgad Fort',
    marathi: 'विशालगड',
    district: 'Kolhapur',
    altitude: '1128 m',
    difficulty: 'Easy',
    history: 'Legendary fort associated with Shivaji Maharaj\'s escape from Siddi Johar and the heroic Battle of Pavan Khind (1660). Baji Prabhu Deshpande sacrificed his life defending the pass while Shivaji reached safety at Vishalgad.',
    bestTime: 'October to February',
    tips: 'Trek is short and scenic. The fort has a mosque and Dargah that exemplifies communal harmony. Combine with a visit to Panhala fort.',
    entryFee: 'Free',
    timings: '6:00 AM - 6:00 PM',
    howToReach: 'About 76 km from Kolhapur. Base village is Khakurde. Buses available from Kolhapur.',
  },

  panhala: {
    name: 'Panhala Fort',
    marathi: 'पन्हाळा',
    district: 'Kolhapur',
    altitude: '977 m',
    difficulty: 'Easy',
    history: 'One of the largest forts in the Deccan. Shivaji Maharaj was besieged here by Siddi Johar in 1660 and made a daring escape through Vishalgad. Features Teen Darwaza, Andhar Bavdi (a dark step-well), and massive granaries.',
    bestTime: 'October to March',
    tips: 'The fort is a hill station — you can drive to the top. Visit the Teen Darwaza, Andhar Bavdi, and the granaries. Stay overnight at the MTDC resort for a complete experience.',
    entryFee: 'Free',
    timings: '6:00 AM - 6:00 PM',
    howToReach: 'Just 20 km from Kolhapur city. Regular buses and taxis available.',
  },

  harihar: {
    name: 'Harihar Fort',
    marathi: 'हरिहर',
    district: 'Nashik',
    altitude: '1120 m',
    difficulty: 'Difficult',
    history: 'Famous for near-vertical rock-cut steps carved into the mountainside — one of the most thrilling climbs in Maharashtra. The fort offers jaw-dropping 360° views.',
    bestTime: 'October to February',
    tips: 'The rock-cut steps are very steep — avoid in monsoon (extremely dangerous when wet). Use ropes if available. Not recommended for beginners.',
    entryFee: 'Free',
    timings: '24 hours (open fort)',
    howToReach: 'Base village is Nirgudpada, about 40 km from Nashik. Buses available from Nashik to Trimbakeshwar, then share auto.',
  },

  salher: {
    name: 'Salher Fort',
    marathi: 'साल्हेर',
    district: 'Nashik',
    altitude: '1567 m',
    difficulty: 'Difficult',
    history: 'The tallest fort in Maharashtra. Site of the legendary Battle of Salher (1672) — the first large-scale open-field victory of the Marathas against the Mughals under Moropant Pingle and Prataprao Gujar.',
    bestTime: 'October to February',
    tips: 'Trek from Salher Wadi village. Carry plenty of water (3-4 liters). The climb is long (~4-5 hours). Night camping is excellent.',
    entryFee: 'Free',
    timings: '24 hours (open fort)',
    howToReach: 'Base village Salher Wadi is about 150 km from Nashik. Buses from Nashik to Satana, then local transport.',
  },
};

// ─── Trekking Tips Knowledge ──────────────────────────────────────────────
const trekkingTips = {
  essentials: [
    '🎒 Backpack with rain cover',
    '💧 3-4 liters of water',
    '🍫 Energy bars, dry fruits, glucose',
    '👟 Good trekking shoes with ankle support',
    '🧢 Cap/hat and sunscreen',
    '🔦 Flashlight/headlamp with extra batteries',
    '🩹 Basic first aid kit',
    '📱 Fully charged phone with offline maps',
  ],
  safety: [
    '⚠️ Never trek alone — go in groups of 4+',
    '🌧️ Avoid difficult treks during heavy monsoon',
    '🐍 Watch for snakes, especially in monsoon',
    '📍 Inform someone about your trekking plan',
    '⏰ Start early (6-7 AM) to finish before dark',
    '🚫 Do not litter — carry your waste back',
    '🧗 Use ropes on steep sections if available',
    '💊 Carry any personal medications',
  ],
  monsoon: [
    '🌿 Monsoon treks are beautiful but dangerous',
    '🌊 Waterfalls are stunning but streams can surge suddenly',
    '🦎 Leeches are common — carry salt or lime',
    '☁️ Reduced visibility — stay on marked trails',
    '⚡ Avoid open ridges during lightning',
    '👢 Wear waterproof shoes or sandals with grip',
  ],
  bestForBeginners: [
    '🟢 Lohagad — easy, well-marked, near Lonavala',
    '🟢 Sinhagad — moderate but popular, great food at top',
    '🟢 Tikona — short and sweet, beautiful lake views',
    '🟢 Korigad — beginner-friendly, Pawna Lake views',
    '🟢 Vishalgad — easy trek, historical significance',
    '🟢 Pratapgad — well maintained, easy access from Mahabaleshwar',
  ],
  bestForExperts: [
    '🔴 Harishchandragad via Nalichi Vaat — extreme rock climbing',
    '🔴 Harihar — near-vertical rock-cut steps',
    '🔴 Alang-Madan-Kulang (AMK) — Maharashtra\'s toughest triple trek',
    '🔴 Rajgad via Torna traverse — full-day adventure',
    '🔴 Salher-Mulher — tallest fort trek, remote',
    '🔴 Vasota — jungle fort, boat access only',
  ],
};

// ─── Quick Reply Suggestions ──────────────────────────────────────────────
const quickReplies = [
  '🏰 Tell me about a fort',
  '🥾 Trekking tips for beginners',
  '⛰️ Best forts near Pune',
  '🌧️ Monsoon trekking safety',
  '📋 What to carry on a trek',
  '🗺️ Plan my trip',
];

// ─── Smart Response Engine ────────────────────────────────────────────────
const generateResponse = (userMessage) => {
  const msg = userMessage.toLowerCase().trim();

  // Greeting
  if (/^(hi|hello|hey|namaste|namaskar|jai shivaji|jai bhavani)/.test(msg)) {
    return {
      text: '🙏 **जय शिवराय!** Namaskar, warrior! I am **बहिर्जी नाईक** — Chhatrapati Shivaji Maharaj\'s most trusted spy and scout.\n\nI know every fort, every secret passage, and every trail across the Sahyadris. Ask me anything about Maharashtra\'s glorious forts! 🏰',
      quickReplies: quickReplies.slice(0, 4),
    };
  }

  // Fort-specific queries
  for (const [key, fort] of Object.entries(fortKnowledge)) {
    const aliases = [
      fort.name.toLowerCase(),
      key,
      fort.marathi,
      fort.name.split(' ')[0].toLowerCase(),
    ];
    if (aliases.some((a) => msg.includes(a.toLowerCase()))) {
      return {
        text: `🏰 **${fort.name}** (${fort.marathi})\n\n📍 **District:** ${fort.district}\n⛰️ **Altitude:** ${fort.altitude}\n🥾 **Difficulty:** ${fort.difficulty}\n🕐 **Timings:** ${fort.timings}\n💰 **Entry Fee:** ${fort.entryFee}\n🌤️ **Best Time:** ${fort.bestTime}\n\n📜 **History:**\n${fort.history}\n\n💡 **Tips:**\n${fort.tips}\n\n🚗 **How to Reach:**\n${fort.howToReach}`,
        quickReplies: ['🏰 Tell me about another fort', '🥾 Trekking tips', '🗺️ Plan my trip'],
      };
    }
  }

  // Trekking essentials
  if (/what (to|should) (carry|bring|pack)|essentials|packing|checklist/.test(msg)) {
    return {
      text: `🎒 **Trek Essentials Checklist:**\n\n${trekkingTips.essentials.join('\n')}\n\n💡 **Pro tip:** Pack light but smart. Your backpack should not exceed 8-10 kg for a day trek.`,
      quickReplies: ['⚠️ Safety tips', '🌧️ Monsoon tips', '🏰 Tell me about a fort'],
    };
  }

  // Safety tips
  if (/safe|safety|precaution|danger|risk|emergency/.test(msg)) {
    return {
      text: `⚠️ **Safety Guidelines for Trekkers:**\n\n${trekkingTips.safety.join('\n')}\n\n🆘 **Emergency:** Always save local rescue helpline numbers. In Maharashtra, dial **112** for emergency services.`,
      quickReplies: ['📋 What to carry', '🌧️ Monsoon tips', '🏰 Fort recommendations'],
    };
  }

  // Monsoon tips
  if (/monsoon|rain|barish|pawsala|waterfall/.test(msg)) {
    return {
      text: `🌧️ **Monsoon Trekking Guide:**\n\n${trekkingTips.monsoon.join('\n')}\n\n✅ **Best monsoon forts:** Lohagad, Tikona, Rajmachi, Visapur — stunning waterfalls and green landscapes!\n\n❌ **Avoid in heavy monsoon:** Harihar, Harishchandragad (Nalichi Vaat), Alang-Madan-Kulang.`,
      quickReplies: ['🟢 Beginner forts', '📋 What to carry', '🏰 Tell me about a fort'],
    };
  }

  // Beginner recommendations
  if (/beginner|easy|first time|starter|new to trekking|simple/.test(msg)) {
    return {
      text: `🟢 **Best Forts for Beginners:**\n\n${trekkingTips.bestForBeginners.join('\n')}\n\n💡 Start with **Sinhagad** or **Lohagad** — they are popular, well-marked, and close to Pune/Mumbai. You'll enjoy great views and tasty local food!`,
      quickReplies: ['🔴 Expert forts', '🏰 Tell me about Sinhagad', '📋 What to carry'],
    };
  }

  // Expert recommendations
  if (/expert|difficult|hard|challenging|extreme|advanced|adventure/.test(msg)) {
    return {
      text: `🔴 **Challenging Forts for Experts:**\n\n${trekkingTips.bestForExperts.join('\n')}\n\n⚠️ These require prior experience, proper gear, and a group. Never attempt alone or in heavy rain!`,
      quickReplies: ['🟢 Beginner forts', '⚠️ Safety tips', '🏰 Tell me about Harihar'],
    };
  }

  // Forts near Pune
  if (/near pune|pune (fort|trek)|around pune/.test(msg)) {
    return {
      text: `📍 **Best Forts Near Pune:**\n\n1. 🏰 **Sinhagad** — 36 km, Moderate\n2. 🏰 **Lohagad** — 52 km, Moderate\n3. 🏰 **Torna** — 60 km, Difficult\n4. 🏰 **Rajgad** — 40 km, Difficult\n5. 🏰 **Tikona** — 55 km, Easy\n6. 🏰 **Visapur** — 52 km, Moderate\n7. 🏰 **Purandar** — 50 km, Moderate\n8. 🏰 **Korigad** — 60 km, Easy\n\n💡 Most are accessible for a day trip from Pune. Start early (6 AM), finish by 2-3 PM.`,
      quickReplies: ['🏰 Tell me about Sinhagad', '🏰 Tell me about Rajgad', '📋 What to carry'],
    };
  }

  // Forts near Mumbai
  if (/near mumbai|mumbai (fort|trek)|around mumbai/.test(msg)) {
    return {
      text: `📍 **Best Forts Near Mumbai:**\n\n1. 🏰 **Lohagad** — 95 km, Moderate\n2. 🏰 **Karnala** — 55 km, Moderate\n3. 🏰 **Prabalgad** — 75 km, Difficult\n4. 🏰 **Rajmachi** — 80 km, Moderate\n5. 🏰 **Mahuli** — 80 km, Difficult\n6. 🏰 **Kulaba** — 95 km, Easy (low tide walk!)\n7. 🏰 **Tikona** — 110 km, Easy\n\n💡 Weekend getaway suggestion: Take the Friday night train to Lonavala and do Lohagad + Visapur combo!`,
      quickReplies: ['🏰 Tell me about Lohagad', '🏰 Tell me about Karnala', '📋 What to carry'],
    };
  }

  // Trip planning
  if (/plan|trip|itinerary|weekend|vacation|visit|travel/.test(msg)) {
    return {
      text: `🗺️ **Trip Planning Help:**\n\nI can help you plan! Tell me:\n\n1. **Where are you starting from?** (Pune/Mumbai/Other)\n2. **How many days?** (Day trip / Weekend / 3+ days)\n3. **Difficulty level?** (Beginner / Moderate / Expert)\n4. **Season?** (Summer / Monsoon / Winter)\n\n💡 Or try our **Trip Planner** tool for a detailed itinerary! Just go to the **Trip Planner** page from the navigation menu.\n\n📌 **Popular combos:**\n• Lohagad + Visapur (1 day)\n• Sinhagad + Rajgad (2 days)\n• Raigad + Janjira + Kolaba (2 days)\n• Pratapgad + Mahabaleshwar (2 days)`,
      quickReplies: ['⛰️ Forts near Pune', '⛰️ Forts near Mumbai', '🟢 Beginner forts'],
      hasLink: true,
      linkText: 'Open Trip Planner',
      linkPath: '/trip-planner',
    };
  }

  // Shivaji Maharaj
  if (/shivaji|maharaj|chhatrapati|शिवाजी|छत्रपत/.test(msg)) {
    return {
      text: `👑 **Chhatrapati Shivaji Maharaj**\n\n• Born: **19 February 1630** at **Shivneri Fort**\n• Coronation: **6 June 1674** at **Raigad Fort**\n• Founded the **Maratha Empire** (Hindavi Swarajya)\n• Built/captured **300+ forts** across the Sahyadris\n• Created India's first organized **navy**\n• Known for his **progressive administration** and **respect for all communities**\n\n🏰 **Key Forts of Shivaji Maharaj:**\n• Raigad — Capital\n• Torna — First fort captured\n• Shivneri — Birthplace\n• Pratapgad — Battle of Pratapgad\n• Rajgad — Former capital\n\n**\"या भूमीचे आम्ही स्वराज्य रक्षक!\"**\n*We are the protectors of this land's Swarajya!*`,
      quickReplies: ['🏰 Raigad Fort', '🏰 Shivneri Fort', '🏰 Pratapgad Fort'],
    };
  }

  // Sea forts
  if (/sea fort|jal durg|naval|navy|island fort|boat fort/.test(msg)) {
    return {
      text: `⚓ **Sea Forts (Jal Durg) of Maharashtra:**\n\nShivaji Maharaj built India's first organized navy! Key sea forts:\n\n1. 🌊 **Sindhudurg** — Malvan, built by Shivaji Maharaj\n2. 🌊 **Murud Janjira** — Unconquered, built by Siddis\n3. 🌊 **Vijaydurg** — Oldest sea fort on Konkan coast\n4. 🌊 **Suvarnadurg** — The Golden Fort near Harnai\n5. 🌊 **Kulaba** — Alibaug, walk during low tide!\n6. 🌊 **Korlai** — Portuguese-built, lighthouse fort\n\n💡 All sea forts require boat access (except Kulaba at low tide). Best visited October to May.`,
      quickReplies: ['🏰 Sindhudurg Fort', '🏰 Janjira Fort', '🏰 Vijaydurg Fort'],
    };
  }

  // History / Maratha Empire
  if (/maratha|history|empire|swarajya|battle|war|fight/.test(msg)) {
    return {
      text: `⚔️ **Key Battles in Maratha History:**\n\n1. 🗡️ **Battle of Pratapgad (1659)** — Shivaji vs Afzal Khan\n2. 🗡️ **Battle of Pavan Khind (1660)** — Baji Prabhu's sacrifice\n3. 🗡️ **Battle of Sinhagad (1670)** — Tanaji Malusare's bravery\n4. 🗡️ **Battle of Salher (1672)** — First Maratha open-field victory\n5. 🗡️ **Coronation at Raigad (1674)** — Shivaji became Chhatrapati\n\n📜 Shivaji Maharaj started Swarajya by capturing **Torna Fort** at age 16 in 1643. He built an empire of 300+ forts stretching from Attock (now in Pakistan) to Tamil Nadu.\n\n**\"हर हर महादेव!\"**`,
      quickReplies: ['👑 Shivaji Maharaj', '🏰 Raigad Fort', '🏰 Pratapgad Fort'],
    };
  }

  // Thank you
  if (/thank|thanks|dhanyawad|aabhar/.test(msg)) {
    return {
      text: `🙏 **धन्यवाद!** You're most welcome, warrior!\n\nRemember — every fort has a story to tell. Go explore the Sahyadris and keep the Maratha spirit alive!\n\n**जय शिवराय! 🚩**\n\nFeel free to ask me anything anytime!`,
      quickReplies: quickReplies.slice(0, 3),
    };
  }

  // Bye
  if (/bye|goodbye|see you|alvida/.test(msg)) {
    return {
      text: `🚩 **जय शिवराय!** Until we meet again on the battlements, warrior!\n\nMay the spirit of the Sahyadris guide your path. Happy trekking! 🏔️\n\n*\"स्वराज्य हा माझा जन्मसिद्ध हक्क आहे!\"*\n*Swarajya is my birthright!*`,
      quickReplies: [],
    };
  }

  // Help
  if (/help|what can you|how to use|commands|features/.test(msg)) {
    return {
      text: `🤖 **I can help you with:**\n\n🏰 **Fort Information** — Ask about any Maharashtra fort\n🥾 **Trekking Tips** — Essentials, safety, monsoon guide\n📍 **Forts Near You** — Pune, Mumbai based recommendations\n🗺️ **Trip Planning** — Itineraries and combos\n📜 **Maratha History** — Battles, Shivaji Maharaj, Swarajya\n⚓ **Sea Forts** — Jal Durg of Maharashtra\n🔰 **Difficulty Level** — Beginner to expert recommendations\n\n💬 Just type naturally — I understand most queries!`,
      quickReplies: quickReplies,
    };
  }

  // Default fallback
  return {
    text: `🤔 Interesting question, warrior! I'm trained in Maharashtra fort knowledge.\n\nTry asking me about:\n• A specific fort (e.g., "Tell me about Raigad")\n• Trekking tips or safety\n• Forts near Pune or Mumbai\n• Trip planning suggestions\n• Maratha history and battles\n\nOr tap one of the suggestions below! 👇`,
    quickReplies: quickReplies.slice(0, 4),
  };
};

// ──────────────────────────────────────────────────────────────────────────
// 🧩  Chatbot Component
// ──────────────────────────────────────────────────────────────────────────

const BahirjiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: '🙏 **जय शिवराय!** I am **बहिर्जी नाईक**, your guide to Maharashtra\'s glorious forts.\n\nAsk me about any fort, trekking tips, safety, or trip planning — I\'m at your service, warrior! ⚔️',
      quickReplies: quickReplies.slice(0, 4),
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Auto-scroll to latest message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = (text) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Simulate typing delay
    setIsTyping(true);
    const delay = 600 + Math.random() * 800;

    setTimeout(() => {
      const response = generateResponse(messageText);
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: response.text,
        quickReplies: response.quickReplies,
        hasLink: response.hasLink,
        linkText: response.linkText,
        linkPath: response.linkPath,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);

      if (!isOpen) {
        setUnreadCount((prev) => prev + 1);
      }
    }, delay);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleNavLink = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const formatText = (text) => {
    // Bold
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br/>');
    return formatted;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <>
      {/* ─── Chat Window ─── */}
      <div
        id="bahirji-chatbot-window"
        style={{
          position: 'fixed',
          bottom: '100px',
          right: '24px',
          width: '400px',
          maxWidth: 'calc(100vw - 32px)',
          height: '600px',
          maxHeight: 'calc(100vh - 140px)',
          zIndex: 9999,
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 153, 51, 0.2)',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 153, 51, 0.1)',
          background: 'linear-gradient(145deg, #0a0a0a 0%, #121212 50%, #0a0a0a 100%)',
          animation: isOpen ? 'chatSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        }}
      >
        {/* ─── Header ─── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1a1100 0%, #2a1800 50%, #1a1100 100%)',
            borderBottom: '1px solid rgba(255, 153, 51, 0.2)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            flexShrink: 0,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              boxShadow: '0 0 20px rgba(255, 153, 51, 0.4)',
              flexShrink: 0,
            }}
          >
            ⚔️
          </div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                margin: 0,
                color: '#FF9933',
                fontSize: '16px',
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              बहिर्जी नाईक
            </h3>
            <p
              style={{
                margin: '2px 0 0',
                color: '#888',
                fontSize: '11px',
                fontFamily: '"Montserrat", sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  marginRight: '6px',
                  boxShadow: '0 0 6px #22c55e',
                }}
              ></span>
              Fort Intelligence Active
            </p>
          </div>
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#999',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 153, 51, 0.15)';
              e.target.style.color = '#FF9933';
              e.target.style.borderColor = 'rgba(255, 153, 51, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#999';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
            aria-label="Close chat"
          >
            <FaTimes size={14} />
          </button>
        </div>

        {/* ─── Messages Area ─── */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#333 transparent',
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start',
                animation: 'msgFadeIn 0.3s ease-out',
              }}
            >
              {/* Message Bubble */}
              <div
                style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius:
                    msg.type === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background:
                    msg.type === 'user'
                      ? 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                  border:
                    msg.type === 'user'
                      ? 'none'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                  color: msg.type === 'user' ? '#000' : '#e5e5e5',
                  fontSize: '13px',
                  lineHeight: '1.6',
                  fontFamily: '"Montserrat", sans-serif',
                  boxShadow:
                    msg.type === 'user'
                      ? '0 4px 15px rgba(255, 153, 51, 0.3)'
                      : '0 2px 8px rgba(0, 0, 0, 0.2)',
                }}
                dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
              />

              {/* Timestamp */}
              <span
                style={{
                  fontSize: '10px',
                  color: '#555',
                  marginTop: '4px',
                  padding: '0 4px',
                }}
              >
                {formatTime(msg.timestamp)}
              </span>

              {/* Quick Replies */}
              {msg.type === 'bot' && msg.quickReplies && msg.quickReplies.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginTop: '8px',
                    maxWidth: '90%',
                  }}
                >
                  {msg.quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickReply(reply)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 153, 51, 0.25)',
                        background: 'rgba(255, 153, 51, 0.08)',
                        color: '#FF9933',
                        fontSize: '11px',
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 153, 51, 0.2)';
                        e.target.style.borderColor = '#FF9933';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 153, 51, 0.08)';
                        e.target.style.borderColor = 'rgba(255, 153, 51, 0.25)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Navigation Link */}
              {msg.type === 'bot' && msg.hasLink && (
                <button
                  onClick={() => handleNavLink(msg.linkPath)}
                  style={{
                    marginTop: '8px',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 153, 51, 0.4)',
                    background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.15), rgba(255, 153, 51, 0.05))',
                    color: '#FF9933',
                    fontSize: '12px',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 153, 51, 0.25)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(255, 153, 51, 0.15), rgba(255, 153, 51, 0.05))';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  🗺️ {msg.linkText}
                </button>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                animation: 'msgFadeIn 0.3s ease-out',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px 18px 18px 4px',
                  padding: '14px 20px',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center',
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#FF9933',
                      animation: `typingBounce 1.4s infinite ease-in-out`,
                      animationDelay: `${i * 0.2}s`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ─── Input Area ─── */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            padding: '14px 16px',
            background: 'rgba(0, 0, 0, 0.4)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '4px 6px 4px 16px',
              transition: 'border-color 0.2s',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about any fort..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: '#e5e5e5',
                fontSize: '13px',
                fontFamily: '"Montserrat", sans-serif',
                padding: '10px 0',
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                border: 'none',
                background: inputValue.trim()
                  ? 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)'
                  : 'rgba(255, 255, 255, 0.05)',
                color: inputValue.trim() ? '#000' : '#555',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputValue.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s',
                flexShrink: 0,
                boxShadow: inputValue.trim()
                  ? '0 4px 15px rgba(255, 153, 51, 0.3)'
                  : 'none',
              }}
              aria-label="Send message"
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
          <p
            style={{
              margin: '8px 0 0',
              textAlign: 'center',
              fontSize: '9px',
              color: '#444',
              fontFamily: '"Montserrat", sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            Powered by MahaFort Guide • बहिर्जी नाईक AI
          </p>
        </div>
      </div>

      {/* ─── Floating Action Button ─── */}
      <button
        id="bahirji-chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          border: '2px solid rgba(255, 153, 51, 0.4)',
          background: isOpen
            ? 'linear-gradient(135deg, #1a1100 0%, #2a1800 100%)'
            : 'linear-gradient(135deg, #FF9933 0%, #cc7a29 100%)',
          color: isOpen ? '#FF9933' : '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000,
          boxShadow: isOpen
            ? '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 153, 51, 0.2)'
            : '0 8px 30px rgba(255, 153, 51, 0.4), 0 0 40px rgba(255, 153, 51, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)',
          animation: !isOpen ? 'fabPulse 3s ease-in-out infinite' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Open Bahirji Chatbot"
      >
        {isOpen ? (
          <FaTimes size={22} />
        ) : (
          <FaFortAwesome size={26} />
        )}

        {/* Unread Badge */}
        {!isOpen && unreadCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: '#ef4444',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #050505',
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
              animation: 'badgePop 0.3s ease-out',
            }}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {/* ─── Global Animations ─── */}
      <style>{`
        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes msgFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes typingBounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
        }
        @keyframes fabPulse {
          0%, 100% {
            box-shadow: 0 8px 30px rgba(255, 153, 51, 0.4), 0 0 40px rgba(255, 153, 51, 0.15);
          }
          50% {
            box-shadow: 0 8px 30px rgba(255, 153, 51, 0.6), 0 0 60px rgba(255, 153, 51, 0.25);
          }
        }
        @keyframes badgePop {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        
        #bahirji-chatbot-window::-webkit-scrollbar {
          width: 4px;
        }
        #bahirji-chatbot-window::-webkit-scrollbar-track {
          background: transparent;
        }
        #bahirji-chatbot-window::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 2px;
        }
        #bahirji-chatbot-window *::-webkit-scrollbar {
          width: 4px;
        }
        #bahirji-chatbot-window *::-webkit-scrollbar-track {
          background: transparent;
        }
        #bahirji-chatbot-window *::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 2px;
        }

        @media (max-width: 480px) {
          #bahirji-chatbot-window {
            bottom: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            max-width: 100vw !important;
            height: 100vh !important;
            max-height: 100vh !important;
            border-radius: 0 !important;
          }
          #bahirji-chatbot-fab {
            bottom: 16px !important;
            right: 16px !important;
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>
    </>
  );
};

export default BahirjiChatbot;
