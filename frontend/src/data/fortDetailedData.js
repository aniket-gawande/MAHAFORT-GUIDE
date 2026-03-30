/**
 * 🏰 MahaFort — Detailed Fort Data
 * 
 * Rich content for fort detail pages matching the quality of
 * SinhagadDetail.jsx and MurudJanjiraDetail.jsx.
 * 
 * Keyed by fort _id from staticForts.js
 */

const fortDetailedData = {

    // ━━━━━━━━━━━━━━━━━━ 1. RAIGAD FORT ━━━━━━━━━━━━━━━━━━
    raigad: {
        introduction: `Raigad — the "King's Fort" — stands as the eternal symbol of Maratha sovereignty. 
            It was here, on 6 June 1674, that Chhatrapati Shivaji Maharaj was crowned as the sovereign ruler 
            of the Maratha Kingdom in a grand coronation ceremony attended by 50,000 people. Perched atop a 
            820-metre cliff in the Sahyadri ranges, Raigad served as the capital of the Maratha Empire and 
            remains one of the most awe-inspiring forts in all of India.`,

        quote: {
            text: "राजा शिवछत्रपती — हिंदवी स्वराज्याचे संस्थापक",
            attribution: "The coronation proclamation at Raigad, 1674"
        },

        timeline: [
            { year: '1030 AD', title: 'Fort Founded', desc: 'Originally called Rairi, built by the Chandrarao More dynasty as a small hill fortress in the Sahyadri ranges.' },
            { year: '1656', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj captured the fort from Chandrarao More and immediately recognized its strategic potential as a capital.' },
            { year: '1662', title: 'Massive Reconstruction Begins', desc: 'Hiroji Indulkar, Shivaji\'s chief architect, began transforming Rairi into a grand capital with palaces, markets, and water systems.' },
            { year: '6 June 1674', title: '🏆 Coronation of Shivaji Maharaj', desc: 'The historic coronation ceremony — Shivaji was crowned Chhatrapati in a Vedic ceremony performed by Gaga Bhatt. 50,000 people attended.' },
            { year: '3 April 1680', title: 'Shivaji Maharaj Passes Away', desc: 'Chhatrapati Shivaji Maharaj breathed his last at Raigad. His samadhi (memorial) stands here as an eternal tribute.' },
            { year: '1818', title: 'Fall to the British', desc: 'The British East India Company captured Raigad after a prolonged siege, marking the end of Maratha control.' }
        ],

        landmarks: [
            { title: 'Maha Darwaja (Grand Gate)', desc: 'The massive main entrance gate of Raigad, flanked by two giant bastions. The gate is designed to prevent elephant charges and features intricate Maratha carvings.', mustSee: true },
            { title: 'Rajya Abhishek Sthaan (Coronation Site)', desc: 'The exact spot where Shivaji Maharaj was crowned Chhatrapati on 6 June 1674. The original stone throne platform still exists.', mustSee: true },
            { title: 'Shivaji Maharaj Samadhi', desc: 'The sacred memorial of Chhatrapati Shivaji Maharaj where he was cremated. A place of deep reverence visited by millions.', mustSee: true },
            { title: 'Jagdishwar Temple', desc: 'Ancient Shiva temple within the fort complex. Shivaji Maharaj worshipped here regularly. Beautiful stone carvings and serene atmosphere.', mustSee: true },
            { title: 'Hirkani Buruj (Bastion)', desc: 'Named after a brave milkmaid Hirkani who climbed down the terrifying cliff at night to reach her infant child. A symbol of maternal courage.', mustSee: false },
            { title: 'Queen\'s Palace (Rajsabha)', desc: 'Ruins of the royal court where Shivaji held his durbar. The octagonal layout and pillared halls hint at its former grandeur.', mustSee: false },
            { title: 'Takmak Tok (Execution Point)', desc: 'A steep cliff used to execute criminals and traitors by pushing them off. Now a viewpoint with vertigo-inducing views of the valley.', mustSee: false },
            { title: 'Gangasagar Lake', desc: 'A large man-made lake inside the fort that supplied water to the entire garrison. Still holds water during monsoon.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹60-100', desc: 'Classic Maharashtrian besan curry with jowar/bajri bhakri — a staple at all hilltop food stalls.' },
            { name: 'Misal Pav', type: 'Veg', price: '₹50-80', desc: 'Spicy sprouted moth curry topped with farsan, onions, and lemon. The Raigad version packs a fiery punch.' },
            { name: 'Vada Pav', type: 'Veg', price: '₹20-30', desc: 'Maharashtra\'s iconic snack — spiced potato fritter in a pav bun with garlic chutney.' },
            { name: 'Solkadhi', type: 'Beverage', price: '₹20-30', desc: 'Refreshing pink coconut milk drink with kokum — a Konkan specialty perfect for the heat.' },
            { name: 'Ukdiche Modak', type: 'Veg', price: '₹40-60', desc: 'Steamed rice flour dumplings filled with jaggery and coconut — especially during Ganesh festival.' }
        ],

        trekRoutes: [
            { icon: '🚡', title: 'Via Ropeway (Easiest)', difficulty: 'Easy', distance: '0.5 km from ropeway', time: '10-15 min', desc: 'The popular ropeway takes you almost to the top. Short walk from ropeway station to the main fort area. ₹200-400 per person.' },
            { icon: '🥾', title: 'Chitta Darwaza Trek Route', difficulty: 'Medium-Hard', distance: '4 km', time: '120-180 min', desc: 'The historic main trek route via 1737 steps carved into rock. Steep climb but deeply rewarding. Starts from Pachad village.' },
            { icon: '⛰️', title: 'Via Bhairavnath Route', difficulty: 'Hard', distance: '3 km', time: '90-120 min', desc: 'Less popular route from the south side. Steeper and less maintained. Only for experienced trekkers.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Pune (Swargate) and Mumbai (CST) to Mahad town. From Mahad, local bus or shared auto to Pachad base village (~25 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive via Mumbai-Goa Highway (NH66) to Mahad, then take the road to Pachad village. ~180 km from Mumbai, ~140 km from Pune.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest railway station: Mangaon or Mahad Road on Konkan Railway. Trains from Mumbai CSMT, Pune, and Goa stop here.' }
        ],

        trekEssentials: [
            'Comfortable trekking shoes with good grip (rocky terrain)',
            'Carry 2-3 litres of water — limited at top',
            'Light raincoat during monsoon (June-Sept)',
            'Sunscreen and hat for summer treks',
            'Cash — limited UPI/card facilities',
            'Start early morning to cover the fort fully',
            'Allow 3-4 hours to explore the entire fort',
            'Carry snacks — food stalls may close early'
        ],

        safetyAlerts: [
            { msg: 'Takmak Tok cliff has no railings — extremely dangerous, stay away from edge', season: 'All year' },
            { msg: 'Ropeway may be closed during heavy monsoon winds', season: 'June-Sept' },
            { msg: 'Steps can be very slippery in monsoon — wear proper shoes', season: 'June-Sept' },
            { msg: 'Carry sufficient water — dehydration risk in summer', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Ropeway', value: '₹200-400' },
            { label: 'Entry', value: '₹50' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Total', value: '₹550-1150', highlight: true }
        ],

        facilities: [
            { label: 'Ropeway', available: true, detail: '₹200-400 return' },
            { label: 'Food Stalls', available: true, detail: 'Multiple at top' },
            { label: 'Drinking Water', available: true, detail: 'Near ropeway station' },
            { label: 'Toilets', available: true, detail: 'Basic facilities' },
            { label: 'Parking', available: true, detail: 'At base village' },
            { label: 'Mobile Network', available: false, detail: 'Patchy at top' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Rairi' },
            { label: 'Renamed', value: 'Raigad (1662)' },
            { label: 'District', value: 'Raigad' },
            { label: 'Altitude', value: '820 m (2,700 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Capital)' },
            { label: 'Built By', value: 'Chandrarao More' },
            { label: 'Famous For', value: 'Coronation of Shivaji (1674)' },
            { label: 'Steps', value: '1,737 carved steps' },
            { label: 'Kids Appropriate', value: 'Yes (ropeway route)' },
            { label: 'UNESCO', value: 'Tentative List (2010)' }
        ],

        reviews: {
            quote: "Standing at the coronation site of Shivaji Maharaj at Raigad is a life-changing experience — you feel the weight of history beneath your feet.",
            positives: [
                'The coronation site is deeply moving',
                'Ropeway makes access easy for all ages',
                'Spectacular 360° valley views',
                'Well-maintained grounds and signage',
                'Rich Maratha history at every turn'
            ],
            proTips: [
                'Visit on weekdays to avoid heavy crowds',
                'Take the stairs up and ropeway down',
                'Hire a local guide for full historical context',
                'Visit Shivaji Samadhi at sunrise for best experience',
                'Combine with Torna Fort for a 2-day trip'
            ],
            rating: 4.8,
            reviewCount: '30,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 2. RAJGAD FORT ━━━━━━━━━━━━━━━━━━
    rajgad: {
        introduction: `Rajgad — the "King's Fort" — served as the capital of the Maratha Empire for an 
            extraordinary 26 years (1648–1674), longer than any other fort. Spread across three massive plateaus 
            (machis) — Suvela Machi, Sanjivani Machi, and Padmavati Machi — it is one of the largest forts in 
            India. Shivaji Maharaj's beloved queen Saibai breathed her last here, and her samadhi stands as a 
            poignant memorial on Padmavati Machi.`,

        quote: {
            text: "राजगड — जिथून स्वराज्याचं राज्य चालवलं गेलं, २६ वर्षं!",
            attribution: "Maratha historians on Rajgad's significance"
        },

        timeline: [
            { year: '6th Century', title: 'Ancient Origins', desc: 'Originally called Murumbdev, the fort was used by the Yadava dynasty as a hill outpost in the Sahyadri ranges.' },
            { year: '1648', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji captured and fortified Murumbdev extensively, renaming it Rajgad — "The King\'s Fort" — making it his capital.' },
            { year: '1648–1674', title: '🏰 Capital of Swarajya', desc: 'For 26 years, all major decisions of the Maratha Empire were taken here. Courts, diplomatic meetings, and military planning happened on Rajgad.' },
            { year: '5 Sept 1659', title: 'Queen Saibai Passes Away', desc: 'Shivaji Maharaj\'s first wife and mother of Sambhaji, Queen Saibai, passed away on Rajgad. Her samadhi remains on Padmavati Machi.' },
            { year: '1674', title: 'Capital Shifts to Raigad', desc: 'After the grand coronation, Shivaji shifted the capital to Raigad. Rajgad continued as a strategic fort.' },
            { year: '1818', title: 'Fall to the British', desc: 'Rajgad was surrendered to the British in 1818, ending centuries of Maratha control.' }
        ],

        landmarks: [
            { title: 'Padmavati Machi', desc: 'The largest plateau housing the Padmavati temple, Queen Saibai\'s samadhi, and the main residential area. Most camping happens here.', mustSee: true },
            { title: 'Bale Killa (Citadel)', desc: 'The topmost point of Rajgad at 1,376 m. Features Brahma Dev temple, royal water cisterns, and panoramic 360° views of Torna, Sinhagad, and Purandar forts.', mustSee: true },
            { title: 'Sanjivani Machi', desc: 'The western plateau with a massive fortification wall and the iconic pointed bastion. Steep drop-offs on three sides make it naturally impregnable.', mustSee: true },
            { title: 'Suvela Machi', desc: 'The eastern plateau with spectacular cliff-edge views. Features ancient water tanks and the route connecting to Torna Fort.', mustSee: true },
            { title: 'Queen Saibai Samadhi', desc: 'The memorial of Shivaji Maharaj\'s first wife on Padmavati Machi. A deeply emotional and sacred spot for all visitors.', mustSee: false },
            { title: 'Chor Darwaza (Secret Gate)', desc: 'A hidden escape gate on the cliff face used for emergency evacuations. The narrow passage is carved into sheer rock.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹60-100', desc: 'The classic trekker\'s meal — spiced besan curry with jowar bhakri. Available at Padmavati Machi stalls during weekends.' },
            { name: 'Thecha Bhakri', type: 'Veg', price: '₹50-80', desc: 'Fiery green chilli-garlic paste with crispy bhakri — a Sahyadri trekking staple that hits differently at 1,300 m.' },
            { name: 'Maggi / Poha', type: 'Veg', price: '₹30-50', desc: 'Quick trekker fuel available at the camping spot on Padmavati Machi.' },
            { name: 'Chai (Tea)', type: 'Beverage', price: '₹10-20', desc: 'Hot ginger tea brewed by local villagers at the base and at Padmavati Machi. The best energy booster after a steep climb.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Gunjavane Village (Popular)', difficulty: 'Hard', distance: '5 km', time: '150-180 min', desc: 'The most popular route starting from Gunjavane. Steep ascent through dense forest leading to Padmavati Machi via Chor Darwaza.' },
            { icon: '⛰️', title: 'Via Pabe Ghat', difficulty: 'Hard', distance: '6 km', time: '180-240 min', desc: 'Longer but scenic route via Pabe village. Passes through beautiful grasslands before the final steep climb. Less crowded.' },
            { icon: '🏔️', title: 'Torna-Rajgad Traverse', difficulty: 'Expert', distance: '12 km', time: '8-10 hours', desc: 'The legendary connecting trek from Torna Fort to Rajgad via the ridge. Multi-level fort hopping — only for experienced trekkers.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Pune (Swargate) to Nasrapur village. From Nasrapur, shared auto or local transport to Gunjavane base (~8 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via NH48 towards Velhe. Turn to Gunjavane village. ~65 km from Pune, 2-hour drive. Parking at Gunjavane.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Popular bike ride from Pune. Park at Gunjavane village. The ghat road itself is scenic with views of Torna and Rajgad.' }
        ],

        trekEssentials: [
            'Good trekking shoes are mandatory — steep rocky terrain',
            'Carry 2-3 litres of water per person',
            'Headlamp/torch for night and early morning treks',
            'Light tent or sleeping bag if camping on Padmavati Machi',
            'Cash only — zero network and UPI at the top',
            'Start by 6 AM to avoid midday heat',
            'Carry your own food for camping — limited stalls',
            'Pack rain gear during monsoons'
        ],

        safetyAlerts: [
            { msg: 'Sanjivani Machi edges have sheer drops — stay away from cliffs', season: 'All year' },
            { msg: 'Chor Darwaza route is extremely slippery in monsoon', season: 'June-Sept' },
            { msg: 'No mobile network on fort — inform someone before trekking', season: 'All year' },
            { msg: 'Thunderstorms on exposed machis are dangerous — take shelter', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport', value: '₹150-300' },
            { label: 'Camping', value: '₹0-500' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹100-300' },
            { label: 'Total', value: '₹250-1100', highlight: true }
        ],

        facilities: [
            { label: 'Camping', available: true, detail: 'Padmavati Machi' },
            { label: 'Food Stalls', available: true, detail: 'Weekends only' },
            { label: 'Water Source', available: true, detail: 'Ancient cisterns' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'Zero signal' },
            { label: 'First Aid', available: false, detail: 'Carry your own' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Murumbdev' },
            { label: 'Renamed', value: 'Rajgad (1648)' },
            { label: 'District', value: 'Pune' },
            { label: 'Altitude', value: '1,376 m (4,514 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Capital)' },
            { label: 'Machis', value: '3 (Padmavati, Suvela, Sanjivani)' },
            { label: 'Capital For', value: '26 years (1648–1674)' },
            { label: 'Famous For', value: 'Largest Maratha capital fort' },
            { label: 'Camping', value: 'Excellent (Padmavati)' },
            { label: 'Kids Appropriate', value: 'No (steep & long)' }
        ],

        reviews: {
            quote: "Rajgad isn't just a trek — it's a pilgrimage. Standing on Bale Killa and seeing Torna, Sinhagad, and the entire Sahyadri chain is something you'll never forget.",
            positives: [
                'Unmatched 360° views from Bale Killa',
                'Best overnight camping in Maharashtra',
                'Rich history — 26 years as capital',
                'Three distinct machis to explore',
                'Challenging but deeply rewarding trek'
            ],
            proTips: [
                'Camp overnight on Padmavati Machi for sunrise',
                'Trek on a full moon night for magical experience',
                'Visit Sanjivani Machi first (less crowded morning)',
                'Carry 3L water — cisterns may be dry in summer',
                'Combine with Torna for an epic 2-day trek'
            ],
            rating: 4.7,
            reviewCount: '15,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 3. TORNA FORT ━━━━━━━━━━━━━━━━━━
    torna: {
        introduction: `Torna Fort — also called Prachandagad (the "Fierce Fort") — holds a sacred place in 
            Maratha history as the very first fort captured by a 16-year-old Shivaji Maharaj in 1643. This 
            audacious capture marked the birth of Swarajya — the dream of self-rule. Standing at 1,403 metres, 
            it is the highest fort in Pune district, and the treasury found here funded Shivaji's early campaigns 
            that would eventually forge the great Maratha Empire.`,

        quote: {
            text: "स्वराज्याचा पहिला मावळा — तोरणा!",
            attribution: "Torna — the first fortress of Swarajya"
        },

        timeline: [
            { year: '13th Century', title: 'Fort Built by Saints', desc: 'Originally built by Shaiva Panth saints as a meditation retreat. The fort was named after the Torana (gateway) arch shape of the hill.' },
            { year: '1470', title: 'Bahmani Sultanate Control', desc: 'The Bahmani kingdom took control, using Torna as a frontier outpost in the Sahyadri ranges.' },
            { year: '1643', title: '🏆 Shivaji Captures Torna — Birth of Swarajya', desc: 'A 16-year-old Shivaji Maharaj captured Torna with a band of Mavlas, marking the beginning of the Maratha Empire. A golden treasure was found inside.' },
            { year: '1643-1646', title: 'Renamed Prachandagad', desc: 'Shivaji renamed it Prachandagad (Fierce Fort) and used the treasure found here to fortify Rajgad, his next major conquest.' },
            { year: '1704', title: 'Mughal Siege', desc: 'Aurangzeb\'s forces besieged and captured Torna during the prolonged Mughal-Maratha wars of the early 18th century.' },
            { year: '1818', title: 'Surrender to British', desc: 'Torna was surrendered to the British East India Company along with most Maratha forts.' }
        ],

        landmarks: [
            { title: 'Zunjar Machi', desc: 'The larger of the two plateaus, featuring ancient water cisterns, building ruins, and the main camping area. The starting point for exploring the fort.', mustSee: true },
            { title: 'Budhla Machi', desc: 'The smaller western plateau with steep cliff edges and spectacular views of the valley. More rugged and less visited than Zunjar Machi.', mustSee: true },
            { title: 'Mengai Devi Temple', desc: 'Ancient temple dedicated to goddess Mengai at the highest point of the fort. Shivaji Maharaj is believed to have prayed here after the capture.', mustSee: true },
            { title: 'Bini Darwaza (Main Gate)', desc: 'The Maratha-era entrance gate with impressive stone masonry. The gate pathway is designed with sharp turns to slow invaders.', mustSee: false },
            { title: 'Torana (Rock Arch)', desc: 'A natural rock formation that resembles a gateway arch — the geological feature that gave the fort its name.', mustSee: false },
            { title: 'Kohoj Point', desc: 'A viewpoint on the edge offering breathtaking views of Rajgad, Sinhagad, and the Velhe valley below.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹60-80', desc: 'Available at Velhe village and sometimes at the base. Pack your own if trekking on weekdays.' },
            { name: 'Kanda Poha', type: 'Veg', price: '₹30-50', desc: 'Flattened rice with onions — served at the base village. Quick energy before the steep climb.' },
            { name: 'Thepla / Paratha', type: 'Veg', price: '₹40-60', desc: 'Carry packed parathas or theplas for the top — no food stalls at the fort itself.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-15', desc: 'Available at Velhe village. Sip a cup before the tough climb ahead.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Velhe Village (Main)', difficulty: 'Hard', distance: '6 km', time: '150-180 min', desc: 'The main route from Velhe via the forest trail. Steep ascent through dense tree cover, then exposed scramble to the top. Well-marked trail.' },
            { icon: '⛰️', title: 'Via Zunjar Machi', difficulty: 'Hard', distance: '5 km', time: '120-150 min', desc: 'Direct route to Zunjar Machi plateau. Shorter but steeper, with some exposed rock sections near the top.' },
            { icon: '🏔️', title: 'Rajgad-Torna Traverse', difficulty: 'Expert', distance: '12 km', time: '8-10 hours', desc: 'The famous ridge connecting Rajgad and Torna. Requires stamina and navigation skills. Multi-day adventure.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Pune (Swargate) to Velhe village. About 2 buses daily. From Velhe, the trek starts directly.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via Chandni Chowk → Paud Road → Velhe. ~60 km, about 2 hours. Limited parking at Velhe.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Scenic ride from Pune through Velhe Ghat. The road itself is beautiful. Park at Velhe village.' }
        ],

        trekEssentials: [
            'Sturdy trekking shoes — rocky and steep terrain throughout',
            'Minimum 2-3 litres water per person (no water source at top)',
            'Headlamp if planning early morning or night trek',
            'Packed food and snacks — no stalls at the fort',
            'Trekking poles recommended for descending',
            'Rain gear in monsoon — exposed sections get very windy',
            'Sunscreen and hat for summer — little shade at top',
            'First-aid kit including knee support'
        ],

        safetyAlerts: [
            { msg: 'The final scramble to Mengai Devi has exposed rock — use caution', season: 'All year' },
            { msg: 'Budhla Machi edges are unguarded and dangerous in fog', season: 'Monsoon' },
            { msg: 'No water source at the fort — carry sufficient water', season: 'All year' },
            { msg: 'Lightning danger on exposed ridges during monsoon storms', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-250' },
            { label: 'Food', value: '₹50-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Camping', value: '₹0' },
            { label: 'Total', value: '₹150-400', highlight: true }
        ],

        facilities: [
            { label: 'Camping', available: true, detail: 'Zunjar Machi' },
            { label: 'Food Stalls', available: false, detail: 'Carry own food' },
            { label: 'Water Source', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'No signal at top' },
            { label: 'Parking', available: true, detail: 'Velhe village' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Torna / Prachandagad' },
            { label: 'Meaning', value: 'Gateway Fort / Fierce Fort' },
            { label: 'District', value: 'Pune' },
            { label: 'Altitude', value: '1,403 m (4,603 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Built By', value: 'Shaiva Panth saints' },
            { label: 'Famous For', value: 'First fort of Swarajya (1643)' },
            { label: 'Machis', value: '2 (Zunjar, Budhla)' },
            { label: 'Highest in', value: 'Pune district' },
            { label: 'Kids Appropriate', value: 'No (very steep)' }
        ],

        reviews: {
            quote: "Torna is where it all began. Standing at 1,403 m, knowing a 16-year-old boy started an empire from here — the feeling is indescribable.",
            positives: [
                'The birthplace of Swarajya — deeply inspiring',
                'Stunning views of Rajgad and Sahyadri ranges',
                'Great camping on Zunjar Machi',
                'Challenging trek that rewards with history',
                'Less commercialized than Sinhagad or Lohagad'
            ],
            proTips: [
                'Combine with Rajgad for the legendary traverse',
                'Start by 5 AM in summer to avoid heat',
                'Camp overnight for stunning sunrise views',
                'Carry rope for monsoon — some sections get slippery',
                'Hire a local guide from Velhe for hidden trails'
            ],
            rating: 4.6,
            reviewCount: '12,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 4. PRATAPGAD FORT ━━━━━━━━━━━━━━━━━━
    pratapgad: {
        introduction: `Pratapgad — the "Fort of Valour" — is forever etched in history as the site of the 
            legendary encounter between Chhatrapati Shivaji Maharaj and Afzal Khan on 10 November 1659. Built 
            by Shivaji himself in 1656, this fort witnessed one of the most dramatic episodes in Indian history 
            — Shivaji's cunning survival and victory over the physically massive Bijapur general. A grand 
            statue of Shivaji Maharaj stands at the entrance, and the Afzal Tower marks where the general fell.`,

        quote: {
            text: "यशवंत आणि कीर्तिवंत होईन!",
            attribution: "Chhatrapati Shivaji Maharaj, before the encounter with Afzal Khan"
        },

        timeline: [
            { year: '1656', title: 'Fort Construction Ordered', desc: 'Shivaji Maharaj ordered the construction of Pratapgad to strengthen control over the strategic pass between Javali and the Konkan coast.' },
            { year: '10 Nov 1659', title: '⚔️ The Fateful Encounter', desc: 'Shivaji met Afzal Khan at the base for "negotiations." When Afzal Khan attacked treacherously, Shivaji fought back with his wagh nakh (tiger claws) and killed him.' },
            { year: '1659', title: 'Battle of Pratapgad', desc: 'After Afzal Khan\'s death, the hidden Maratha forces descended on the Bijapur army. 3,000 Bijapur soldiers were killed, and 65 officers captured.' },
            { year: '1818', title: 'Treaty with the British', desc: 'The Maratha chiefs surrendered the fort to the British under the terms of the Treaty of Poona.' },
            { year: '1957', title: 'Shivaji Statue Unveiled', desc: 'A grand equestrian statue of Shivaji Maharaj was unveiled at the fort entrance by Prime Minister Jawaharlal Nehru.' }
        ],

        landmarks: [
            { title: 'Shivaji Maharaj Statue', desc: 'A striking equestrian bronze statue of Shivaji Maharaj at the fort entrance. Unveiled in 1957 by PM Nehru. Iconic photo spot.', mustSee: true },
            { title: 'Afzal Buruj (Afzal Tower)', desc: 'The tower where Afzal Khan\'s body was buried after the encounter. The exact spot of one of history\'s most dramatic events.', mustSee: true },
            { title: 'Bhavani Temple', desc: 'The sacred temple where Shivaji Maharaj worshipped Goddess Bhavani before the fateful encounter with Afzal Khan. Deeply revered.', mustSee: true },
            { title: 'Upper Fort (Bale Killa)', desc: 'The inner citadel with royal quarters, water cisterns, and watchtowers. Offers panoramic views of the Mahabaleshwar plateau.', mustSee: true },
            { title: 'Point of Encounter', desc: 'A monument marking the exact spot below the fort where Shivaji Maharaj met Afzal Khan. Accessible via steps from the main road.', mustSee: false },
            { title: 'Deep Mala (Lamp Tower)', desc: 'An ancient stone lamp tower used to signal other forts in the chain. A beautiful piece of Maratha architecture.', mustSee: false }
        ],

        food: [
            { name: 'Misal Pav', type: 'Veg', price: '₹50-80', desc: 'Satara-style misal with a unique sweet-spicy balance. Available at food stalls near the fort entrance.' },
            { name: 'Bhakri Thali', type: 'Veg', price: '₹80-120', desc: 'Full Maharashtrian thali with bhakri, pithla, bhaji, rice, and papad. The local restaurants near Mahabaleshwar serve authentic versions.' },
            { name: 'Strawberry Cream', type: 'Veg', price: '₹60-100', desc: 'Mahabaleshwar is the strawberry capital of India — fresh strawberry cream is a must-try treat after the fort visit!' },
            { name: 'Corn on Cob', type: 'Veg', price: '₹20-30', desc: 'Charcoal-roasted corn with lemon and spices — classic Mahabaleshwar snack at every roadside stall.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Hot masala chai at the fort base. The perfect start to your Pratapgad exploration.' }
        ],

        trekRoutes: [
            { icon: '🚗', title: 'Via Road (Main Access)', difficulty: 'Easy', distance: '0.5 km from parking', time: '10-15 min', desc: 'A road goes nearly to the fort entrance. Short walk up steps from the parking area. Vehicle-accessible. Easiest of all major forts.' },
            { icon: '🥾', title: 'Via Forest Trail (Scenic)', difficulty: 'Medium', distance: '3 km', time: '60-90 min', desc: 'A forest trail from Par village leading to the fort through dense jungle. More adventure, fewer crowds.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Satara or Mahabaleshwar to Pratapgad. Mahabaleshwar is 24 km away. Satara is 64 km. Regular service.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via NH48 to Satara (110 km), then to Mahabaleshwar road. OR from Mahabaleshwar (24 km). Parking at fort base.' },
            { mode: 'From Mahabaleshwar', icon: '🏔️', desc: 'Most visitors combine with Mahabaleshwar trip. Shared jeeps and taxis available from Mahabaleshwar bus stand. ₹100-200.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes (mostly paved steps)',
            'Water bottle — 1 litre sufficient',
            'Camera — incredible history and views',
            'Cash for food stalls and parking',
            'Sunscreen in summer — exposed fort top',
            'Allow 2-3 hours for full exploration',
            'Light jacket in winter — can be windy',
            'Local guide available at entrance (₹200-300)'
        ],

        safetyAlerts: [
            { msg: 'Fort walls and edges — keep children supervised at all times', season: 'All year' },
            { msg: 'Steps can be slippery after rain', season: 'June-Oct' },
            { msg: 'Heavy fog can reduce visibility — stay on marked paths', season: 'Monsoon/Winter mornings' },
            { msg: 'Monkeys near food stalls — keep bags zipped', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Guide', value: '₹200-300' },
            { label: 'Total', value: '₹400-800', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: '₹20-50 at base' },
            { label: 'Food Stalls', available: true, detail: 'Multiple near gate' },
            { label: 'Drinking Water', available: true, detail: 'At stalls' },
            { label: 'Toilets', available: true, detail: 'Basic, near parking' },
            { label: 'Local Guides', available: true, detail: '₹200-300' },
            { label: 'Mobile Network', available: true, detail: 'Fair signal' }
        ],

        quickFacts: [
            { label: 'Built By', value: 'Shivaji Maharaj' },
            { label: 'Year Built', value: '1656' },
            { label: 'District', value: 'Satara' },
            { label: 'Altitude', value: '1,080 m (3,543 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Famous For', value: 'Shivaji vs Afzal Khan (1659)' },
            { label: 'Statue', value: 'Equestrian (by Nehru, 1957)' },
            { label: 'Nearest Town', value: 'Mahabaleshwar (24 km)' },
            { label: 'Kids Appropriate', value: 'Yes (road access)' },
            { label: 'Best Combined', value: 'Mahabaleshwar trip' }
        ],

        reviews: {
            quote: "Walking the same ground where Shivaji Maharaj faced Afzal Khan sends chills down your spine. Pratapgad is history you can touch and feel.",
            positives: [
                'Incredibly vivid historical site',
                'Easy access — suitable for families',
                'Iconic Shivaji statue at entrance',
                'Beautiful Mahabaleshwar plateau views',
                'Great food stalls near the fort'
            ],
            proTips: [
                'Visit early morning for fewer crowds',
                'Hire a local guide — the history comes alive',
                'Combine with Mahabaleshwar for a full trip',
                'Visit the encounter site below the fort too',
                'Try fresh strawberries from nearby stalls'
            ],
            rating: 4.7,
            reviewCount: '25,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 5. SHIVNERI FORT ━━━━━━━━━━━━━━━━━━
    shivneri: {
        introduction: `Shivneri Fort — the sacred birthplace of Chhatrapati Shivaji Maharaj — stands as 
            a pilgrimage site for every Maharashtrian. On 19 February 1630, in a small chamber within this 
            fort, was born the child who would grow to establish the Maratha Empire and become one of India's 
            greatest rulers. The fort features seven impressive gates, the Shivai Devi temple after which 
            Shivaji was named, freshwater springs, and a beautiful statue of young Shivaji with his mother 
            Jijabai that has become an iconic symbol of maternal strength.`,

        quote: {
            text: "हे हिंदवी स्वराज्य व्हावे ही श्रीची इच्छा!",
            attribution: "Chhatrapati Shivaji Maharaj — 'God desires this Hindu self-rule'"
        },

        timeline: [
            { year: '10th Century', title: 'Fort Established', desc: 'The fort was initially built as a hill fortress, later expanded by various dynasties controlling the Junnar region.' },
            { year: '19 Feb 1630', title: '🌟 Birth of Shivaji Maharaj', desc: 'Jijabai gave birth to Shivaji in a small chamber on the fort. He was named after the local deity Shivai Devi.' },
            { year: '1632', title: 'Shahaji Leaves for Bijapur', desc: 'Shivaji\'s father Shahaji Bhosle left Shivneri. Young Shivaji was raised by Jijabai and guided by Dadoji Konddeo.' },
            { year: '1637', title: 'Shivaji Moves to Pune', desc: 'At age 7, young Shivaji moved to Pune with Jijabai, beginning his journey towards building Swarajya.' },
            { year: '1673', title: 'Fort Under Mughal Control', desc: 'The Mughals held Shivneri during their prolonged conflict with the Marathas.' },
            { year: '1818', title: 'British Takeover', desc: 'Control passed to the British East India Company. The fort was later recognized as a national heritage site.' }
        ],

        landmarks: [
            { title: 'Shivaji\'s Birth Chamber', desc: 'The small stone room where Shivaji Maharaj was born on 19 February 1630. A deeply sacred and emotional spot. The chamber is preserved with a small cradle memorial.', mustSee: true },
            { title: 'Shivaji-Jijabai Statue', desc: 'The iconic statue of young Shivaji standing with his mother Jijabai, symbolizing her role in shaping the future king. One of the most photographed landmarks in Maharashtra.', mustSee: true },
            { title: 'Shivai Devi Temple', desc: 'The ancient temple of goddess Shivai after whom Shivaji was named. Jijabai prayed here for a son. The temple is well-maintained and active.', mustSee: true },
            { title: 'Seven Gates (Saat Darwaza)', desc: 'The fort features seven consecutively built gates — Maha Darwaza, Pir Darwaza, Ganesh Darwaza, Hatti Darwaza and more — each a feat of medieval defense engineering.', mustSee: true },
            { title: 'Freshwater Springs', desc: 'Two natural springs — Ganga and Yamuna — that provide fresh water year-round. Even in summer, cool water flows from these ancient sources.', mustSee: false },
            { title: 'Kamand Pandhari (Water Cisterns)', desc: 'Large carved water tanks that could supply the entire fort garrison. An impressive example of ancient water management.', mustSee: false },
            { title: 'Ambarkhana (Granary)', desc: 'The massive grain storage area that could sustain the fort during long sieges. Gives a sense of the fort\'s strategic importance.', mustSee: false }
        ],

        food: [
            { name: 'Misal Pav (Junnar Style)', type: 'Veg', price: '₹40-60', desc: 'Junnar is famous for its misal — lighter and more aromatic than Pune style. Available in Junnar town.' },
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹50-80', desc: 'Classic Maharashtrian combo. Available at small eateries in Junnar and at the fort base.' },
            { name: 'Vada Pav', type: 'Veg', price: '₹15-25', desc: 'Found at stalls near the fort entrance and in Junnar town. The simple trek fuel.' },
            { name: 'Sugarcane Juice', type: 'Beverage', price: '₹20-30', desc: 'Junnar is a major sugarcane region. Fresh juice available at roadside stalls — incredibly refreshing after the trek.' },
            { name: 'Sabudana Khichdi', type: 'Veg', price: '₹30-50', desc: 'Tapioca pearl dish with peanuts — a classic Maharashtrian fasting food available near temples.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Main Steps (Saat Darwaza)', difficulty: 'Medium', distance: '2 km', time: '60-90 min', desc: 'The historic route through all seven gates. Well-maintained stone steps. The classic way to experience the fort\'s layered defenses.' },
            { icon: '⛰️', title: 'Via Chain Route', difficulty: 'Hard', distance: '1.5 km', time: '60 min', desc: 'A steeper alternative route with metal chain supports on exposed rock sections. More adventurous but not for beginners.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Pune (Shivajinagar) to Junnar town (~100 km, 2.5 hours). From Junnar, auto/Tum-Tum to fort base (5 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via Chakan → Narayangaon → Junnar. ~100 km via NH60. Beautiful ghats en route. Parking at fort base.' },
            { mode: 'By Train + Bus', icon: '🚂', desc: 'No direct rail. Take train to Pune, then bus to Junnar. Alternatively, bus from Shivajinagar ST Stand directly.' }
        ],

        trekEssentials: [
            'Good walking shoes — stone steps throughout',
            'Carry 1-2 litres of water',
            'Camera — the statue and views are stunning',
            'Cash for food and guide',
            'Allow 2-3 hours for complete exploration',
            'Visit early morning for pleasant weather',
            'Light jacket in winter mornings',
            'Sunscreen and hat in summer'
        ],

        safetyAlerts: [
            { msg: 'Chain route has exposed sections — not suitable for children', season: 'All year' },
            { msg: 'Steps can be slippery during and after rain', season: 'June-Oct' },
            { msg: 'Carry water — stalls only at the base', season: 'All year' },
            { msg: 'Monkeys on the fort — Keep food bags closed', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹80-150' },
            { label: 'Guide', value: '₹100-200' },
            { label: 'Total', value: '₹280-650', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At fort base' },
            { label: 'Food Stalls', available: true, detail: 'At base only' },
            { label: 'Fresh Water Springs', available: true, detail: 'Ganga-Yamuna' },
            { label: 'Toilets', available: true, detail: 'Basic, at base' },
            { label: 'Local Guides', available: true, detail: '₹100-200' },
            { label: 'Mobile Network', available: true, detail: 'Fair signal' }
        ],

        quickFacts: [
            { label: 'District', value: 'Pune (Junnar)' },
            { label: 'Altitude', value: '1,068 m (3,504 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Built By', value: 'Various dynasties' },
            { label: 'Famous For', value: 'Birthplace of Shivaji (1630)' },
            { label: 'Gates', value: '7 (Saat Darwaza)' },
            { label: 'Springs', value: 'Ganga & Yamuna' },
            { label: 'Named After', value: 'Shivai Devi goddess' },
            { label: 'Kids Appropriate', value: 'Yes (main route)' },
            { label: 'Best Combined', value: 'Lenyadri + Ozar caves' }
        ],

        reviews: {
            quote: "Visiting the room where Shivaji Maharaj was born is an intensely emotional experience. Shivneri is not just a fort — it's a national shrine.",
            positives: [
                'Sacred birthplace of Shivaji Maharaj',
                'Iconic Shivaji-Jijabai statue',
                'Seven gates are architecturally fascinating',
                'Natural springs with fresh water year-round',
                'Well-maintained and signposted'
            ],
            proTips: [
                'Visit on 19 February for Shiv Jayanti celebrations',
                'Explore all 7 gates — each has unique architecture',
                'Drink from the Ganga-Yamuna springs',
                'Combine with Lenyadri Buddhist caves (8 km away)',
                'Visit Junnar town for authentic local misal'
            ],
            rating: 4.6,
            reviewCount: '20,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 6. PANHALA FORT ━━━━━━━━━━━━━━━━━━
    panhala: {
        introduction: `Panhala — "Abode of Serpents" — is one of the largest and most historically rich forts 
            in the Deccan plateau. Spread across 14 km of fortification walls, this massive stronghold witnessed 
            Shivaji Maharaj's legendary 4-month siege by Siddi Johar in 1660, culminating in his daring night 
            escape to Vishalgad through the Battle of Pavan Khind. Panhala served as a strategic capital for 
            multiple dynasties — Shilaharas, Yadavas, Adil Shahis, and the Marathas — making it a living 
            museum of 850 years of Deccan history.`,

        quote: {
            text: "पन्हाळगड — दख्खनचा सर्वात मोठा किल्ला, शिवरायांच्या पराक्रमाचा साक्षीदार",
            attribution: "Maratha chronicle on Panhala's significance"
        },

        timeline: [
            { year: '1178 AD', title: 'Fort Founded', desc: 'Built by Bhoja II of the Shilahara dynasty as a fortified hill station. The massive walls and granaries were established during this period.' },
            { year: '1209 AD', title: 'Yadava Conquest', desc: 'The Yadavas of Devagiri captured Panhala and expanded it significantly, adding the teen darwaza (three gates) system.' },
            { year: '1489', title: 'Adil Shahi Rule', desc: 'Panhala came under the Bijapur Sultanate (Adil Shahi dynasty) who added Islamic architectural elements including the double-wall defense.' },
            { year: '1659', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj took Panhala from the Adil Shahis, recognizing its strategic value as the largest fort in the Kolhapur region.' },
            { year: '1660', title: '🏰 The Great Siege & Escape', desc: 'Siddi Johar besieged Panhala for 4 months. Shivaji escaped at night through enemy lines while Baji Prabhu held the pass at Pavan Khind — sacrificing his life.' },
            { year: '1844', title: 'British Annexation', desc: 'Panhala became a British hill station. They used its cool climate and built bungalows and gardens within the fort complex.' }
        ],

        landmarks: [
            { title: 'Teen Darwaza (Three Gates)', desc: 'Three massive interconnected gates forming the main entrance — Char Darwaza, Tin Darwaza, and Vajra Ota. The narrow approach forced attackers into a killing zone.', mustSee: true },
            { title: 'Andhar Bavdi (Dark Well)', desc: 'A mysterious 3-story underground well with 80+ steps descending into darkness. Used as an escape route and secret meeting place. Eerie and atmospheric.', mustSee: true },
            { title: 'Sajja Kothi (Watch Tower)', desc: 'An elevated watchtower where Shivaji Maharaj stayed during the siege. It was from here that the famous escape was planned on that dark monsoon night of 1660.', mustSee: true },
            { title: 'Ambarkhana (Granary)', desc: 'Three enormous stone granaries that could store grain for 20,000+ soldiers for months. The engineering is remarkable — walls are 3 feet thick to keep grain dry.', mustSee: true },
            { title: 'Parashar Caves', desc: 'Ancient Buddhist rock-cut caves dating to the 1st century BC. Predate the fort by over a thousand years. Monk cells and meditation chambers still visible.', mustSee: false },
            { title: 'Panhala Hill Station Area', desc: 'British-era bungalows and gardens within the fort. Cool climate at 977 m makes it a pleasant getaway. Sunset views of the Sahyadri valley are stunning.', mustSee: false }
        ],

        food: [
            { name: 'Kolhapuri Tambda Rassa', type: 'Non-Veg', price: '₹120-200', desc: 'The iconic fiery red mutton curry of Kolhapur — Panhala\'s proximity to Kolhapur means this is legendary here. Heat level: extreme.' },
            { name: 'Pandhra Rassa', type: 'Non-Veg', price: '₹100-180', desc: 'The milder white coconut-based mutton curry, served as a pair with Tambda Rassa. Traditionally consumed with overnight-soaked bhakri.' },
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹60-100', desc: 'The classic Maharashtrian besan curry with jowar or bajri bhakri. Every food stall on Panhala serves this staple.' },
            { name: 'Kande Pohe', type: 'Veg', price: '₹30-50', desc: 'Flattened rice with onions, peanuts, turmeric, and coriander — a light breakfast staple. Kolhapur style is slightly spicier.' },
            { name: 'Solkadhi', type: 'Beverage', price: '₹20-40', desc: 'Cool pink coconut milk + kokum digestive drink. Essential after a heavy Kolhapuri meal. Also helps with the spice burn!' }
        ],

        trekRoutes: [
            { icon: '🚗', title: 'Via Road from Kolhapur (Easiest)', difficulty: 'Easy', distance: '20 km drive + 2 km walk', time: '30 min drive + 30 min walk', desc: 'Panhala is driveable! Road goes up to the fort. Just a short walk through the gates to explore the main landmarks. Perfect for families.' },
            { icon: '🥾', title: 'Via Masai Pathar Trail', difficulty: 'Medium', distance: '6 km', time: '120-150 min', desc: 'A scenic trekking approach from the eastern base through the Sahyadri hillside. Passes through forests and Parashar caves before reaching the fort.' },
            { icon: '🏔️', title: 'Panhala to Vishalgad Trek', difficulty: 'Hard', distance: '80 km historical trail', time: '2-3 days', desc: 'The legendary escape route of Shivaji Maharaj in 1660. Multi-day trek through Sahyadri forests via Pavan Khind. Only for serious trekkers.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'Frequent ST buses from Kolhapur city bus stand directly to Panhala fort (20 km, 40 min). Also accessible from Pune and Mumbai via Kolhapur.' },
            { mode: 'By Car', icon: '🚗', desc: 'Well-maintained mountain road from Kolhapur city. 20 km drive through scenic ghats. Ample parking at the fort entrance. ~380 km from Mumbai.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Kolhapur (Chhatrapati Shahu Maharaj Terminus). Direct trains from Mumbai, Pune, Bangalore, and Tirupati.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — fort area is spread over 14 km',
            'Carry a torch for Andhar Bavdi (dark well)',
            'Carry water — limited stalls inside the fort',
            'Sun protection — the fort plateau gets hot in summer',
            'Budget 3-4 hours to explore the full fort',
            'Carry snacks — Kolhapuri food is available near entrance',
            'Monsoon creates beautiful waterfalls near the gates',
            'Combine with Vishalgad for a complete historical experience'
        ],

        safetyAlerts: [
            { msg: 'Andhar Bavdi steps are slippery — use caution and a torch', season: 'All year' },
            { msg: 'Monkeys are aggressive near food stalls — keep food hidden', season: 'All year' },
            { msg: 'Bastion walls have no railings at some points', season: 'All year' },
            { msg: 'Ghat road from Kolhapur can be misty and slippery in monsoon', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport (from Kolhapur)', value: '₹40-100' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹100-250' },
            { label: 'Guide (optional)', value: '₹200-300' },
            { label: 'Total', value: '₹340-650', highlight: true }
        ],

        facilities: [
            { label: 'Road Access', available: true, detail: 'Drive up to fort' },
            { label: 'Food Stalls', available: true, detail: 'Near entrance & inside' },
            { label: 'Drinking Water', available: true, detail: 'Near main gate' },
            { label: 'Toilets', available: true, detail: 'Public toilets at entrance' },
            { label: 'Parking', available: true, detail: 'Large lot at entrance' },
            { label: 'Mobile Network', available: true, detail: 'Good connectivity' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Pannhallaka ("Abode of Serpents")' },
            { label: 'District', value: 'Kolhapur' },
            { label: 'Altitude', value: '977 m (3,205 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Giri Durg)' },
            { label: 'Built By', value: 'Bhoja II, Shilahara dynasty' },
            { label: 'Famous For', value: 'Shivaji\'s escape (1660)' },
            { label: 'Wall Perimeter', value: '14 km (one of the largest)' },
            { label: 'Granary Capacity', value: '20,000+ soldiers\' rations' },
            { label: 'Kids Appropriate', value: 'Yes (road access)' },
            { label: 'Best Combined', value: 'Vishalgad + Kolhapur city' }
        ],

        reviews: {
            quote: "Panhala is not just a fort — it's a small fortified city. The Teen Darwaza, the underground well, and the massive granaries show the sheer scale of Maratha engineering.",
            positives: [
                'Massive fort — one of the largest in Deccan',
                'Andhar Bavdi is a unique and eerie experience',
                'Easy accessibility via road from Kolhapur',
                'Rich history spanning 850+ years',
                'Cool climate and beautiful sunset views'
            ],
            proTips: [
                'Visit Andhar Bavdi early morning for best experience',
                'Combine with Kolhapur Mahalakshmi temple visit',
                'Try Tambda-Pandhra Rassa in Kolhapur after the fort',
                'Budget at least 3 hours to see everything',
                'Visit during monsoon for waterfalls near the gates'
            ],
            rating: 4.5,
            reviewCount: '18,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 7. HARISHCHANDRAGAD FORT ━━━━━━━━━━━━━━━━━━
    harishchandragad: {
        introduction: `Harishchandragad is the crown jewel of Maharashtra trekking — a fort that combines 
            ancient history, breathtaking natural wonders, and serious adventure. The star attraction is 
            Konkan Kada — a vertigo-inducing concave cliff with a 1,400-metre vertical drop that is 
            considered one of the most spectacular viewpoints in all of India. Add to this 6th-century 
            Kedareshwar cave temple with a waist-deep-water Shivalinga, ancient Nageshwar temple, and 
            Taramati peak at 1,424 m — and you have a trek that belongs on every adventurer's bucket list.`,

        quote: {
            text: "कोकणकडा — जिथून पश्चिम घाटांचं खरं रूप दिसतं, १,४०० मीटर खोल!",
            attribution: "Trekkers' saying about Konkan Kada"
        },

        timeline: [
            { year: '6th Century', title: 'Kalachuri Dynasty Origins', desc: 'The earliest structures on Harishchandragad — Kedareshwar cave temple and rock-cut cisterns — were built by the Kalachuri dynasty, contemporaries of the Chalukyas.' },
            { year: '11th Century', title: 'Nageshwar Temple Built', desc: 'The Nageshwar (Shiva) temple on the fort plateau was constructed during the Yadava period. Beautiful stone carvings survive to this day.' },
            { year: '14th Century', title: 'Bahmani Period', desc: 'The Bahmani Sultanate controlled the fort briefly before it passed to Ahmadnagar Sultanate rulers.' },
            { year: '1636', title: 'Mughal Control', desc: 'Harishchandragad came under Mughal rule. They maintained it as a garrison fort controlling the Malshej Ghat trade route.' },
            { year: '1747', title: 'Maratha Recapture', desc: 'The Marathas under Peshwa Balaji Bajirao recaptured Harishchandragad and used it as a frontier fort against Mughal incursions from the north.' },
            { year: '1818', title: 'British Takeover', desc: 'The fort was ceded to the British East India Company. It gradually fell into disuse and was reclaimed by the jungle.' }
        ],

        landmarks: [
            { title: 'Konkan Kada', desc: 'The legendary concave cliff — a massive overhanging rock face with a 1,400 m vertical drop into the Konkan. Sunrise here is a transcendent experience. One of the most photographed spots in the Sahyadris.', mustSee: true },
            { title: 'Kedareshwar Cave Temple', desc: 'An ancient 6th-century Shiva cave temple with a massive Shivalinga surrounded by waist-deep ice-cold water. Four pillars represent the four yugas — one is broken (representing Kaliyoga).', mustSee: true },
            { title: 'Taramati Peak (1,424 m)', desc: 'The highest point of the fort. A short but steep scramble from the plateau. On clear days you can see Kalsubai, Alang-Madan-Kulang, and the entire Sahyadri ridge.', mustSee: true },
            { title: 'Nageshwar Temple', desc: 'A beautifully carved stone Shiva temple from the Yadava period (11th century). Features intricate doorway carvings and a Nandi bull statue.', mustSee: true },
            { title: 'Saptatirtha Pushkarni', desc: 'Seven sacred rock-cut water tanks near the temple. The water is considered holy and remains perennial even in peak summer.', mustSee: false },
            { title: 'Harishchandreshwar Temple Ruins', desc: 'Ruins of the main temple after which the fort is named. Architectural fragments scattered around hint at its former glory.', mustSee: false }
        ],

        food: [
            { name: 'Pack Your Own Meals', type: 'Veg', price: '₹0', desc: 'Harishchandragad is a remote wilderness trek — no food stalls on the fort. Carry all your food. Popular choices: chapati-sabzi, thepla, trail mix, energy bars.' },
            { name: 'Village Meals (Base)', type: 'Veg', price: '₹80-150', desc: 'Simple home-cooked meals (dal-rice, bhakri-pithla) available at Khireshwar and Pachnai base villages. Call ahead to arrange.' },
            { name: 'Maggi & Tea (Camping)', type: 'Veg', price: '₹30-50', desc: 'During peak season (Oct-Feb weekends), local villagers sometimes set up tea and Maggi stalls near the cave. Not guaranteed.' },
            { name: 'Water', type: 'Beverage', price: 'Free', desc: 'Saptatirtha tanks have drinkable water, but carry at least 3 litres. Kedareshwar cave water is cold but potable.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Khireshwar Village (Most Popular)', difficulty: 'Hard', distance: '8 km', time: '4-5 hours', desc: 'The standard route from Khireshwar village. Passes through deep forest, rock patches, and finally opens up to the fort plateau. Well-marked trail.' },
            { icon: '⛰️', title: 'Via Pachnai Route', difficulty: 'Hard', distance: '7 km', time: '4-5 hours', desc: 'Alternative route from Pachnai village via Tolar Khind. Some rock-climbing sections. Less crowded and more adventurous.' },
            { icon: '🧗', title: 'Via Nalichi Vaat (Nali Route)', difficulty: 'Expert', distance: '3 km', time: '5-6 hours', desc: 'A near-vertical rock climb through a narrow gully leading directly to Konkan Kada. Ropes required. Only for experienced climbers.' },
            { icon: '🏔️', title: 'Via Junnar Darwaza (North)', difficulty: 'Hard', distance: '6 km', time: '3-4 hours', desc: 'The route from Junnar side via Junnar Darwaza. Less popular but historically significant and scenic.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune or Mumbai to Kalyan, then local bus to Khireshwar village. Or bus to Malshej Ghat and local transport to base village.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive via Malshej Ghat from Pune (~160 km) or Mumbai (~180 km) to Khireshwar village. Park at the village. Last 8 km is jungle trail on foot.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Ride to Khireshwar via Malshej Ghat — one of the most scenic rides in Maharashtra. Park at village and trek.' }
        ],

        trekEssentials: [
            'Mandatory: Good trekking shoes with ankle support — rocky terrain',
            'Carry 3+ litres of water per person',
            'Headlamp is essential — no lighting on trail or fort',
            'Tent + sleeping bag for camping at Konkan Kada',
            'All food must be carried — no stalls on the fort',
            'Carry a change of clothes (Kedareshwar cave is waist-deep water)',
            'First aid kit — nearest hospital is 3+ hours away',
            'Mobile network: zero — inform someone of your plan'
        ],

        safetyAlerts: [
            { msg: 'Konkan Kada edge is a 1,400 m sheer drop with NO railings — extreme danger', season: 'All year' },
            { msg: 'Nalichi Vaat route has fatal accident history — do not attempt without expert guidance', season: 'All year' },
            { msg: 'Trail is extremely slippery and waterfall crossings flood in monsoon', season: 'June-Sept' },
            { msg: 'No mobile network anywhere on the fort or trail — carry offline maps', season: 'All year' },
            { msg: 'Temperature drops to 5-8°C at night in winter — hypothermia risk without proper gear', season: 'Nov-Feb' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-600' },
            { label: 'Entry', value: 'Free' },
            { label: 'Village Meal (base)', value: '₹80-150' },
            { label: 'Camping Gear (own)', value: '₹0' },
            { label: 'Total', value: '₹380-750', highlight: true }
        ],

        facilities: [
            { label: 'Food Stalls', available: false, detail: 'None — carry food' },
            { label: 'Drinking Water', available: true, detail: 'Saptatirtha tanks' },
            { label: 'Toilets', available: false, detail: 'None on fort' },
            { label: 'Camping Spots', available: true, detail: 'Konkan Kada & temple area' },
            { label: 'Mobile Network', available: false, detail: 'Zero connectivity' },
            { label: 'Vehicle Access', available: false, detail: 'Trek only' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Harishchandragad' },
            { label: 'District', value: 'Ahmednagar' },
            { label: 'Altitude', value: '1,424 m (4,671 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (wilderness)' },
            { label: 'Built By', value: 'Kalachuri dynasty' },
            { label: 'Famous For', value: 'Konkan Kada cliff' },
            { label: 'Cliff Drop', value: '1,400 m vertical' },
            { label: 'Cave Age', value: '6th century (1,500+ years)' },
            { label: 'Kids Appropriate', value: 'No — serious trek only' },
            { label: 'Best Combined', value: 'Malshej Ghat + Junnar' }
        ],

        reviews: {
            quote: "Watching the sunrise from Konkan Kada with clouds below you, the Konkan coast stretching to infinity, and a 1,400 m drop under your feet — there is no experience like it in Maharashtra.",
            positives: [
                'Konkan Kada is genuinely breathtaking',
                'Kedareshwar cave is a unique spiritual experience',
                'True wilderness — no commercialization',
                'Night camping under Sahyadri stars',
                'Rich history spanning 1,500+ years'
            ],
            proTips: [
                'Camp at Konkan Kada for sunrise — it will change your life',
                'Carry dry clothes in a waterproof bag for the cave',
                'Visit in Oct-Nov for clear skies and best views',
                'Start from Khireshwar by 6 AM to reach before dark',
                'Go with an experienced group — not a solo trek for beginners'
            ],
            rating: 4.8,
            reviewCount: '12,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 8. DAULATABAD FORT ━━━━━━━━━━━━━━━━━━
    daulatabad: {
        introduction: `Daulatabad — originally Devagiri, the "Hill of Gods" — is arguably the most 
            impregnable fortress ever built in India. Rising 200 feet on a conical granite hill with a 
            crocodile-filled moat, a dark labyrinthine tunnel passage that could be flooded with poisonous 
            smoke, and walls within walls within walls — this fort was designed to be absolutely unconquerable. 
            It famously became the center of Sultan Muhammad bin Tughluq's mad experiment in 1327 when he 
            forcibly relocated the entire population of Delhi to Daulatabad — one of history's greatest urban 
            disasters. The 63-metre Chand Minar, India's second tallest tower, still stands as testament 
            to Daulatabad's grandeur.`,

        quote: {
            text: "देवगिरी — देवांचं पर्वत, भारतातील सर्वात अभेद्य किल्ला",
            attribution: "Medieval historians on Devagiri's impregnability"
        },

        timeline: [
            { year: '12th Century', title: 'Devagiri Founded', desc: 'The Yadava dynasty built the fortress on a conical granite hill, creating the moat, triple walls, and the ingenious dark tunnel defense system.' },
            { year: '1296', title: 'Alauddin Khilji\'s Raid', desc: 'Alauddin Khilji of the Delhi Sultanate raided Devagiri — one of the richest kingdoms in India — and carried away enormous treasure.' },
            { year: '1327', title: '🏚️ Tughluq\'s Capital Shift', desc: 'Muhammad bin Tughluq forcibly moved the entire population of Delhi to Daulatabad (renamed from Devagiri). Thousands perished on the 1,500 km journey. He reversed the decision years later.' },
            { year: '1347', title: 'Bahmani Sultanate', desc: 'The Bahmani Sultanate captured Daulatabad. The fort passed between various Deccan sultanates over the next centuries.' },
            { year: '1610', title: 'Chand Minar Built', desc: 'The 63-metre Chand Minar was constructed by Ala-ud-din Hasan (or earlier by Alauddin Khilji) — modeled after the Qutub Minar in Delhi. India\'s 2nd tallest tower.' },
            { year: '1724', title: 'Nizam\'s Hyderabad', desc: 'Daulatabad became part of the Nizam of Hyderabad\'s dominions. It remained with the Nizams until Indian independence in 1947.' }
        ],

        landmarks: [
            { title: 'Devagiri Hill Citadel', desc: 'The 200-ft conical granite hill at the center — the ultimate stronghold. The last line of defense with a single narrow path spiraling around the cliff. Absolutely impregnable from outside.', mustSee: true },
            { title: 'Andheri (Dark Tunnel Passage)', desc: 'A pitch-black tunnel carved through rock that was the only way into the citadel. Defenders could flood it with poisonous smoke, boiling oil, or water to trap invaders. Terrifying even today.', mustSee: true },
            { title: 'Chand Minar', desc: 'A stunning 63-metre (210 ft) victory tower — India\'s 2nd tallest after Qutub Minar. Four stories with balconies. Originally covered in Persian blue tiles, some still visible.', mustSee: true },
            { title: 'Bharat Mata Temple', desc: 'A unique temple dedicated to Mother India on the hilltop, offering panoramic 360° views of the Aurangabad plains. The Ellora caves are visible on clear days.', mustSee: true },
            { title: 'Moat & Crocodile Ditch', desc: 'A massive water-filled moat that surrounded the central citadel. Historically filled with crocodiles as a defense. The drawbridge was the only crossing point.', mustSee: false },
            { title: 'Chini Mahal (China Palace)', desc: 'The prison where the last king of Golconda, Abul Hasan Tana Shah, was imprisoned for 13 years until his death. Simple but historically poignant.', mustSee: false },
            { title: 'Elephant-Proof Gate', desc: 'Massive iron-spiked main gate designed to prevent elephant charges. The spikes project 12 inches, making it impossible for war elephants to ram through.', mustSee: false }
        ],

        food: [
            { name: 'Naan-Qorma', type: 'Non-Veg', price: '₹100-160', desc: 'Aurangabad is famous for its Mughlai-influenced cuisine. Rich, aromatic mutton qorma with fresh naan — a legacy of the Nizam era.' },
            { name: 'Biryani (Aurangabad Style)', type: 'Non-Veg', price: '₹120-200', desc: 'Distinct from Hyderabadi biryani — lighter spices, more saffron, and cooked on dum in sealed handis. Try at Aurangabad\'s old city restaurants.' },
            { name: 'Tahri (Sweet Rice)', type: 'Veg', price: '₹50-80', desc: 'Traditional sweet saffron rice — a unique Aurangabad specialty often served with spicy dal. Available at local eateries near the fort.' },
            { name: 'Sheer Korma', type: 'Veg', price: '₹40-60', desc: 'Rich vermicelli dessert with milk, nuts, and saffron — a Nizam-era specialty. Best had at Aurangabad sweet shops.' },
            { name: 'Lassi / Panna', type: 'Beverage', price: '₹20-40', desc: 'Cool mango panna (raw mango drink) or thick lassi — essential to beat the Marathwada heat after fort exploration.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Main Entrance Route (Standard)', difficulty: 'Medium', distance: '2 km', time: '1.5-2 hours', desc: 'The main fortified path through seven layers of defense — gates, moat, dark tunnel, and spiral path. Not technically a trek, but a steep climb with 400+ steps.' },
            { icon: '🏛️', title: 'Heritage Circuit (Full Fort)', difficulty: 'Medium', distance: '4 km loop', time: '3-4 hours', desc: 'Complete circuit covering all major landmarks — Chand Minar, moat, dark tunnel, citadel summit, and outer fortifications. Best with a local guide.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'Frequent ST buses from Aurangabad city (15 km). Also accessible from Pune (5 hrs) and Mumbai (6 hrs) via Aurangabad.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Aurangabad on the Aurangabad-Ellora road. Daulatabad is at km 15. Combine with Ellora Caves (15 km further ahead). Parking available.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Aurangabad. Direct trains from Mumbai (Tapovan/Devagiri Express), Hyderabad, Pune, and Delhi.' },
            { mode: 'By Air', icon: '✈️', desc: 'Aurangabad Airport (Chikalthana) — 20 km from Daulatabad. Flights from Mumbai, Delhi, and Hyderabad.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — steps are steep and uneven',
            'Carry a powerful torch for the Andheri (dark tunnel)',
            'Carry 1-2 litres of water — limited inside the fort',
            'Hat and sunscreen — no shade on the citadel climb',
            'Hire a guide (₹200-400) — essential for the history and hidden passages',
            'Visit early morning to avoid Marathwada heat',
            'Allow 3-4 hours for the complete fort',
            'Combine with Ellora Caves for a full day trip'
        ],

        safetyAlerts: [
            { msg: 'Andheri tunnel is pitch dark — step carefully, carry a torch', season: 'All year' },
            { msg: 'Citadel path is narrow and exposed — vertigo risk', season: 'All year' },
            { msg: 'Extreme heat in Marathwada summer — carry water, avoid afternoon', season: 'March-June' },
            { msg: 'Bats in the Andheri tunnel — stay on marked path', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (from Aurangabad)', value: '₹50-200' },
            { label: 'Entry', value: '₹25 (Indian)' },
            { label: 'Guide', value: '₹200-400' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Total', value: '₹375-825', highlight: true }
        ],

        facilities: [
            { label: 'Ticket Counter', available: true, detail: 'ASI maintained' },
            { label: 'Food Stalls', available: true, detail: 'Outside main gate' },
            { label: 'Drinking Water', available: true, detail: 'Near entrance' },
            { label: 'Toilets', available: true, detail: 'At entrance area' },
            { label: 'Parking', available: true, detail: 'Large lot at gate' },
            { label: 'Mobile Network', available: true, detail: 'Good at most places' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Devagiri (Hill of Gods)' },
            { label: 'Renamed', value: 'Daulatabad (City of Fortune)' },
            { label: 'District', value: 'Aurangabad (Chhatrapati Sambhajinagar)' },
            { label: 'Hill Height', value: '200 ft conical granite' },
            { label: 'Fort Type', value: 'Fortified Citadel' },
            { label: 'Built By', value: 'Yadava dynasty' },
            { label: 'Chand Minar', value: '63 m (India\'s 2nd tallest)' },
            { label: 'Famous For', value: 'Tughluq\'s capital shift (1327)' },
            { label: 'Kids Appropriate', value: 'Age 10+ (dark tunnel)' },
            { label: 'Best Combined', value: 'Ellora Caves + Aurangabad Caves' }
        ],

        reviews: {
            quote: "Walking through Daulatabad's dark tunnel, crossing the moat, and climbing the spiral citadel path — you understand why this fort was NEVER taken by direct assault in 800 years.",
            positives: [
                'Incredibly engineered multi-layered defense system',
                'Dark tunnel is a unique and thrilling experience',
                'Chand Minar is stunning — India\'s 2nd tallest tower',
                '360° views from the citadel summit',
                'ASI-maintained with good signage'
            ],
            proTips: [
                'Hire a guide — the fort\'s history needs narration',
                'Visit early morning to avoid Marathwada heat',
                'Combine with Ellora Caves (15 km ahead) for a full day',
                'Carry a bright torch for the tunnel — phone flashlight isn\'t enough',
                'Visit Aurangabad Caves (less crowded alternative to Ajanta) too'
            ],
            rating: 4.7,
            reviewCount: '22,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 9. PURANDAR FORT ━━━━━━━━━━━━━━━━━━
    purandar: {
        introduction: `Purandar Fort holds a deeply emotional place in Maratha history — it is the birthplace 
            of Sambhaji Maharaj (14 May 1657), the eldest son of Chhatrapati Shivaji Maharaj, and the site 
            of the pivotal Treaty of Purandar (1665) that forced Shivaji to surrender 23 forts to the Mughals. 
            This twin fort — with its sister fortification Vajragad — stands at 1,387 metres above sea level 
            and offers commanding views of the Pune plains. Later used as a British hill station and a World 
            War II prisoner-of-war camp, Purandar's layers of history make it one of Maharashtra's most 
            historically dense forts.`,

        quote: {
            text: "पुरंदर — जिथं संभाजी महाराज जन्मले, जिथं स्वराज्याची २३ किल्ले गमावले",
            attribution: "On Purandar's dual legacy — joy and sacrifice"
        },

        timeline: [
            { year: '11th Century', title: 'Yadava Period', desc: 'The Yadava dynasty built the original fortifications on Purandar hill. The Purandareshwar temple (Shiva) dates to this period.' },
            { year: '14 May 1657', title: '🎂 Sambhaji Maharaj Born', desc: 'Shivaji Maharaj\'s eldest son and future Chhatrapati, Sambhaji was born on Purandar Fort. Shivaji\'s wife Saibai gave birth here.' },
            { year: '11 June 1665', title: '📜 Treaty of Purandar', desc: 'Mughal general Jai Singh I besieged Purandar with 40,000+ troops. Shivaji was forced to sign the treaty surrendering 23 of 35 forts. A dark but pivotal moment.' },
            { year: '1670', title: 'Recaptured by Marathas', desc: 'After his dramatic escape from Mughal captivity in Agra (1666), Shivaji recaptured Purandar and many other forts in his brilliant swarajya reconquest.' },
            { year: '1818', title: 'British Annexation', desc: 'Purandar was ceded to the British. They used it as a hill station and later as a prisoner-of-war internment camp during WWII.' },
            { year: '1942-45', title: 'WWII POW Camp', desc: 'The British interned Axis civilian prisoners at Purandar during WWII. Subhash Chandra Bose\'s family members were also detained here.' }
        ],

        landmarks: [
            { title: 'Purandareshwar Temple', desc: 'Ancient Shiva temple from the Yadava period. This is where prayers for Sambhaji\'s birth were offered. The stone carvings on the temple entrance are exquisite.', mustSee: true },
            { title: 'Dil-e-Khan\'s Tomb', desc: 'The tomb of Mughal commander Dil-e-Khan who died during the siege of Purandar in 1665. A poignant reminder of the fierce battle that preceded the treaty.', mustSee: true },
            { title: 'Vajragad (Twin Fort)', desc: 'The smaller companion fort visible from Purandar\'s ramparts. Connected by a saddle ridge. Vajragad was the first to fall during Jai Singh\'s siege in 1665.', mustSee: true },
            { title: 'Kedareshwar Cave', desc: 'A small rock-cut cave temple near the summit with ancient carved figures. Peaceful and less visited spot on the fort.', mustSee: false },
            { title: 'British Bungalow Ruins', desc: 'Ruins of British-era structures used during the hill station period and later as WWII POW camp administration. Historical plaques provide context.', mustSee: false },
            { title: 'Bini Darwaza (Entrance Gate)', desc: 'The fortified main gate with carved stone pillars. The approach path shows the remaining bastions of the outer defense wall.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹60-100', desc: 'The quintessential trekker\'s meal. Simple and filling besan curry with jowar bhakri. Available at Narayanpur base village.' },
            { name: 'Zunka Bhakar', type: 'Veg', price: '₹50-80', desc: 'Dry chickpea flour preparation with bajri roti — rustic Pune countryside comfort food at its best.' },
            { name: 'Misal Pav (Pune Style)', type: 'Veg', price: '₹50-80', desc: 'Stop at Saswad town (en route) for authentic Pune-style misal — slightly different from Mumbai misal, with extra tarri (spicy gravy).' },
            { name: 'Chai & Biscuits', type: 'Beverage', price: '₹10-20', desc: 'Hot chai at the base village before and after the trek. Simple but essential trekker fuel.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Narayanpur Village (Standard)', difficulty: 'Medium', distance: '4 km', time: '90-120 min', desc: 'The most popular route from Narayanpur village. Well-marked trail through scrubland, past the outer fortifications, up to the main gate.' },
            { icon: '⛰️', title: 'Via Vajragad Side', difficulty: 'Medium-Hard', distance: '5 km', time: '120-150 min', desc: 'Approach from the Vajragad side for a less crowded route. Traverse the saddle between the twin forts. Steeper but more scenic.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune (Swargate) to Saswad town (25 km). From Saswad, local transport to Narayanpur base village (~15 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via Saswad to Narayanpur village. ~45 km from Pune, about 1.5-hour drive. Road is good until the base village. Parking at base.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Popular weekend ride from Pune. Scenic route via Dive Ghat. Park at Narayanpur and trek up.' }
        ],

        trekEssentials: [
            'Good trekking shoes — rocky patches on upper section',
            'Carry 2 litres of water — limited sources on fort',
            'Hat and sunscreen — exposed plateau',
            'Cash — no UPI/card at base village',
            'Start early (6-7 AM) for comfortable trekking',
            'Army cantonment area may restrict some zones — follow signs',
            'Allow 2-3 hours to explore the full fort and Vajragad',
            'Carry binoculars for Vajragad views and bird spotting'
        ],

        safetyAlerts: [
            { msg: 'Parts of Purandar are in Army restricted zone — do not enter restricted areas', season: 'All year' },
            { msg: 'Bastion walls have unprotected drops — stay on marked paths', season: 'All year' },
            { msg: 'Trail to Vajragad saddle is narrow and exposed', season: 'All year' },
            { msg: 'Carry water — dehydration risk in Pune\'s summer heat', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport (from Pune)', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹80-150' },
            { label: 'Total', value: '₹180-450', highlight: true }
        ],

        facilities: [
            { label: 'Food Stalls', available: true, detail: 'At base village only' },
            { label: 'Drinking Water', available: true, detail: 'At base village' },
            { label: 'Toilets', available: false, detail: 'None on fort' },
            { label: 'Parking', available: true, detail: 'At Narayanpur base' },
            { label: 'Mobile Network', available: true, detail: 'Patchy on fort' },
            { label: 'Army Restriction', available: true, detail: 'Some areas restricted' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Purandar' },
            { label: 'District', value: 'Pune' },
            { label: 'Altitude', value: '1,387 m (4,551 ft)' },
            { label: 'Fort Type', value: 'Twin Hill Fort' },
            { label: 'Built By', value: 'Yadava dynasty' },
            { label: 'Famous For', value: 'Sambhaji\'s birth (1657)' },
            { label: 'Treaty', value: 'Treaty of Purandar (1665)' },
            { label: 'Twin Fort', value: 'Vajragad' },
            { label: 'Kids Appropriate', value: 'Yes (standard route)' },
            { label: 'Best Combined', value: 'Saswad town + Parvati Hill (Pune)' }
        ],

        reviews: {
            quote: "Standing at Purandar where Sambhaji was born and where Shivaji was forced to sign away 23 forts — you feel both the joy and the heartbreak of Maratha history in one place.",
            positives: [
                'Deeply historical — Sambhaji\'s birthplace',
                'Twin fort panorama (Purandar + Vajragad)',
                'Easy accessibility from Pune',
                'Moderate difficulty — good for intermediate trekkers',
                'WWII prisoner-of-war camp history adds unique layer'
            ],
            proTips: [
                'Visit on Sambhaji Jayanti (14 May) for celebrations',
                'Trek to Vajragad too — the saddle walk is beautiful',
                'Stop at Saswad for misal pav on the way',
                'Start early to avoid Pune heat',
                'Check Army restrictions before visiting — some areas closed'
            ],
            rating: 4.4,
            reviewCount: '10,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 10. VIJAYDURG FORT ━━━━━━━━━━━━━━━━━━
    vijaydurg: {
        introduction: `Vijaydurg — "The Victory Fort" — is the oldest and mightiest sea fort on Maharashtra's 
            Konkan coast, with a lineage stretching back to 1205 AD. Under Chhatrapati Shivaji Maharaj's vision, 
            it was transformed into the primary naval dockyard of the Maratha Armada. But it was under the 
            legendary Admiral Kanhoji Angre that Vijaydurg became truly legendary — his fleet terrorized 
            European colonial navies from this base, earning him the title "Admiral of the Maratha Navy." 
            With 27 bastions, triple fortification walls, an underwater wall to trap enemy ships, and 
            natural rock-cut docks — Vijaydurg is a masterclass in medieval maritime military engineering.`,

        quote: {
            text: "विजयदुर्ग — कान्होजी आंग्रे यांच्या अजिंक्य आरमाराचं मुख्यालय",
            attribution: "On Kanhoji Angre's invincible naval base"
        },

        timeline: [
            { year: '1205 AD', title: 'Fort Founded', desc: 'Built by Raja Bhoja II of the Shilahara dynasty as a coastal fortification called "Gheria." One of the earliest sea forts on the western coast.' },
            { year: '1653', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj captured Vijaydurg from the Bijapur Sultanate and immediately recognized its potential as a naval base.' },
            { year: '1660s', title: '🚢 Naval Dockyard Built', desc: 'Shivaji developed Vijaydurg into the primary dockyard of the Maratha Navy. Ship-building facilities, ammunition stores, and the triple-wall defense were constructed.' },
            { year: '1698-1729', title: '⚔️ Kanhoji Angre\'s Era', desc: 'Admiral Kanhoji Angre made Vijaydurg his headquarters. His fleet of 10+ warships defeated the British, Portuguese, and Dutch navies multiple times from this base.' },
            { year: '1756', title: 'Anglo-Maratha Naval Battle', desc: 'A combined British-Peshwa fleet attacked Vijaydurg (then held by Tulaji Angre). After a fierce naval bombardment, the fort finally fell.' },
            { year: '1818', title: 'British Control', desc: 'Vijaydurg was ceded to the British East India Company. They decommissioned the dockyard and used the fort as a coastal outpost.' }
        ],

        landmarks: [
            { title: 'Triple Fortification Walls', desc: 'Three concentric walls with 27 bastions — the outermost extends into the sea. This triple-layer system made Vijaydurg the strongest sea fort on the entire Konkan coast.', mustSee: true },
            { title: 'Maratha Naval Dockyard', desc: 'Rock-cut channels and natural harbor where Shivaji\'s warships were built and docked. You can still see the slipways and mooring points carved into rock.', mustSee: true },
            { title: 'Underwater Wall (Samudri Bhint)', desc: 'A massive underwater stone wall connecting the fort to a nearby rock island, creating a trap for enemy ships. One of the most ingenious maritime defenses ever conceived.', mustSee: true },
            { title: 'Kanhoji Angre\'s Residence', desc: 'Ruins of the legendary admiral\'s quarters within the fort. From here he commanded the most feared navy in the Indian Ocean.', mustSee: true },
            { title: 'Ammunition Magazine', desc: 'Well-preserved stone structures used to store gunpowder and cannon balls. Thick walls kept the ammunition cool and dry.', mustSee: false },
            { title: 'Fresh Water Wells', desc: 'Multiple wells inside the sea fort that provide fresh water — an engineering marvel considering the fort is surrounded by saltwater on all sides.', mustSee: false },
            { title: 'Lighthouse Point', desc: 'The highest bastion offering views of the Arabian Sea coastline. Perfect for sunset watching. Dolphins are occasionally spotted from here.', mustSee: false }
        ],

        food: [
            { name: 'Malvani Fish Curry & Rice', type: 'Non-Veg', price: '₹150-250', desc: 'The legendary Malvani fish curry — coconut-based, fiery, and fragrant. Best had with red rice. Vijaydurg is in the heart of Malvani territory.' },
            { name: 'Bombil Fry (Bombay Duck)', type: 'Non-Veg', price: '₹100-150', desc: 'Crispy fried bombil fish — a Konkan specialty. Coated in rice flour and semolina, fried golden. Pairs perfectly with solkadhi.' },
            { name: 'Kombdi Vade', type: 'Non-Veg', price: '₹130-200', desc: 'Spicy Malvani chicken curry served with deep-fried puris (vade). A festive Konkan dish you\'ll find at local restaurants.' },
            { name: 'Solkadhi', type: 'Beverage', price: '₹20-30', desc: 'The iconic pink coconut milk-kokum digestive drink. Absolutely essential after any Malvani meal. Cool, tangy, and refreshing.' },
            { name: 'Aamras', type: 'Beverage', price: '₹30-50', desc: 'Fresh mango pulp — available March-June when Alphonso and Ratnagiri mangoes are in season. The Konkan is mango paradise.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Main Entrance Walk', difficulty: 'Easy', distance: '1.5 km', time: '30-45 min', desc: 'Simple walk from the village through the triple gates into the fort. Flat terrain, suitable for all ages. The real experience is exploring the bastions and dockyard.' },
            { icon: '🏖️', title: 'Coastal Circuit', difficulty: 'Easy', distance: '3 km', time: '1.5-2 hours', desc: 'Walk around the entire fort perimeter along the 27 bastions. Sea breeze, cannon viewpoints, and the underwater wall are on this route.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Ratnagiri (65 km) or Sindhudurg/Kudal to Vijaydurg village. From Mumbai: overnight bus to Ratnagiri, then local transport.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive via Mumbai-Goa Highway (NH66) to Ratnagiri, then coastal road to Vijaydurg. ~350 km from Mumbai (7-8 hrs). ~390 km from Pune.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest stations: Ratnagiri or Khed on Konkan Railway. Trains from Mumbai CST, Pune, and Goa. Then local transport to Vijaydurg (~50-65 km).' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — fort surface is rocky near bastions',
            'Carry water — limited stalls inside the fort',
            'Hat and sunscreen — coastal sun is intense',
            'Binoculars — for spotting dolphins and distant islands',
            'Visit during low tide to see the underwater wall remains',
            'Budget 2-3 hours for complete fort exploration',
            'Carry cash — limited UPI in the village',
            'Best combined with Sindhudurg Fort (30 km south)'
        ],

        safetyAlerts: [
            { msg: 'Bastion walls are sea-facing with no railings — strong winds can be dangerous', season: 'All year' },
            { msg: 'Rocks near the dockyard area are slippery — wear proper shoes', season: 'All year' },
            { msg: 'Sea conditions can be rough during monsoon — plan accordingly', season: 'June-Sept' },
            { msg: 'Jellyfish near the fort during monsoon — do not swim', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport (from Ratnagiri)', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food (Malvani meal)', value: '₹150-300' },
            { label: 'Total', value: '₹250-600', highlight: true }
        ],

        facilities: [
            { label: 'Food Stalls', available: true, detail: 'In Vijaydurg village' },
            { label: 'Drinking Water', available: true, detail: 'Village shops' },
            { label: 'Toilets', available: true, detail: 'Basic, at entrance' },
            { label: 'Parking', available: true, detail: 'Village area' },
            { label: 'Mobile Network', available: true, detail: 'Moderate at fort' },
            { label: 'Accommodation', available: true, detail: 'Homestays in village' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Gheria' },
            { label: 'Renamed', value: 'Vijaydurg by Shivaji Maharaj' },
            { label: 'District', value: 'Sindhudurg' },
            { label: 'Fort Type', value: 'Sea Fort (Jal Durg)' },
            { label: 'Built By', value: 'Shilahara dynasty' },
            { label: 'Bastions', value: '27' },
            { label: 'Walls', value: 'Triple fortification' },
            { label: 'Famous For', value: 'Kanhoji Angre\'s naval base' },
            { label: 'Kids Appropriate', value: 'Yes (easy terrain)' },
            { label: 'Best Combined', value: 'Sindhudurg Fort + Malvan' }
        ],

        reviews: {
            quote: "Vijaydurg is where Maratha naval power was born. Standing on the bastion where Kanhoji Angre's fleet sailed out to defeat European navies — you feel the pride of Maratha maritime history.",
            positives: [
                'Incredible triple-wall fortification system',
                'Rich naval history — Kanhoji Angre\'s legendary base',
                'Underwater wall is a unique engineering marvel',
                'Peaceful, uncrowded, and scenic',
                'Amazing Malvani food in the village'
            ],
            proTips: [
                'Visit at low tide to see the underwater wall',
                'Combine with Sindhudurg Fort for a sea-fort double',
                'Stay overnight at a Vijaydurg homestay for the full experience',
                'Try Malvani fish thali at the village — it\'s authentic',
                'Best time: October-February for calm seas and clear skies'
            ],
            rating: 4.5,
            reviewCount: '8,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 11. RAJMACHI FORT ━━━━━━━━━━━━━━━━━━
    rajmachi: {
        introduction: `Rajmachi is a twin fortification comprising Shrivardhan and Manaranjan — two elevated 
            bastions standing guard over the ancient Bor Ghat trade route between the Konkan and the Deccan 
            plateau. Perched at 928 metres, this strategic outpost changed hands between the Marathas, Mughals, 
            and British multiple times. Today Rajmachi is one of Maharashtra's most popular weekend treks, 
            beloved for its monsoon waterfalls, firefly spectacles, and the charming Udhewadi village nestled 
            between the two forts. The twin peaks rising from the mist are an iconic Sahyadri sight.`,

        quote: {
            text: "राजमाची — दोन बुरुज, एक ध्येय — बोर घाटाचं रक्षण",
            attribution: "On Rajmachi's twin-fort defense system"
        },

        timeline: [
            { year: '2nd Century', title: 'Satavahana Origins', desc: 'The earliest rock-cut cisterns and cave remains on Rajmachi date to the Satavahana dynasty, who controlled the western Deccan trade routes.' },
            { year: '1657', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj captured Rajmachi along with Lohagad and Visapur, securing complete control over the Bor Ghat pass — a critical military and trade corridor.' },
            { year: '1704', title: 'Mughal Siege', desc: 'Aurangzeb\'s forces besieged and captured Rajmachi during the 27-year Deccan campaign. The Marathas lost the fort temporarily.' },
            { year: '1713', title: 'Maratha Recapture', desc: 'Kanhoji Angre and Balaji Vishwanath recaptured Rajmachi for the Marathas during the post-Aurangzeb resurgence.' },
            { year: '1818', title: 'British Acquisition', desc: 'Rajmachi was ceded to the British after the Third Anglo-Maratha War. They maintained it briefly before abandoning it.' },
            { year: 'Present', title: 'Trekking Destination', desc: 'Rajmachi is now one of Maharashtra\'s most popular treks, especially during monsoon when the surrounding valleys fill with waterfalls and fireflies.' }
        ],

        landmarks: [
            { title: 'Shrivardhan Bastion', desc: 'The larger and higher of the twin forts. A steep rock-cut staircase leads to the summit with panoramic views of the Bor Ghat valley. Ruins of a watchtower and water cisterns remain.', mustSee: true },
            { title: 'Manaranjan Bastion', desc: 'The second twin fort, slightly smaller but with better-preserved walls and bastions. The approach from Udhewadi is scenic and less steep than Shrivardhan.', mustSee: true },
            { title: 'Udhewadi Village', desc: 'A small tribal village nestled in the saddle between the twin forts. Offers homestays, home-cooked food, and a glimpse of rural Sahyadri life. The village comes alive during monsoon trekking season.', mustSee: true },
            { title: 'Bor Ghat Valley Viewpoint', desc: 'From Shrivardhan\'s summit, watch the Mumbai-Pune Expressway and railway snake through the ancient Bor Ghat far below. Trains appear toy-sized from this height.', mustSee: true },
            { title: 'Rock-Cut Cisterns', desc: 'Ancient water storage tanks carved into the basalt rock, dating back nearly 2,000 years. Still hold water during monsoon.', mustSee: false },
            { title: 'Firefly Trail (Monsoon)', desc: 'The forest trail between Lonavala and Udhewadi is famous for spectacular firefly displays in June, when millions of bioluminescent insects light up the forest.', mustSee: false }
        ],

        food: [
            { name: 'Udhewadi Home Meals', type: 'Veg', price: '₹100-180', desc: 'Home-cooked village meals — pitla-bhakri, rice-dal, sabzi. Simple, hot, and incredibly satisfying after a long trek. Arranged through homestays.' },
            { name: 'Maggi & Chai', type: 'Veg', price: '₹30-60', desc: 'The universal trekker combo. Available at Udhewadi village stalls during weekends and trekking season.' },
            { name: 'Kanda Bhaji / Pakode', type: 'Veg', price: '₹40-60', desc: 'Crispy onion fritters — the perfect monsoon snack. Village stalls fry them fresh during rain season.' },
            { name: 'Poha', type: 'Veg', price: '₹30-50', desc: 'Flattened rice breakfast served at village homestays. Light and energizing before the morning trek to the forts.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Lonavala (Tunnel Route)', difficulty: 'Medium', distance: '16 km', time: '5-6 hours', desc: 'The most popular route. From Lonavala, trek through the railway tunnels of Bor Ghat, past waterfalls, through dense forest to Udhewadi. Magical in monsoon.' },
            { icon: '🚗', title: 'Via Karjat (Kondivade)', difficulty: 'Hard', distance: '12 km', time: '4-5 hours', desc: 'Steeper but shorter route from the Konkan side via Kondivade village. A sustained uphill climb through thick forest. Less crowded.' },
            { icon: '🏍️', title: 'Via Lonavala (Off-road Bike)', difficulty: 'Easy', distance: '24 km drive', time: '2 hours ride', desc: 'An off-road bike/jeep track from Lonavala through forests. Accessible in dry season only. Drive to Udhewadi, then short climbs to both forts.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚂', desc: 'Train to Lonavala station (Mumbai-Pune line). From Lonavala, the trek starts on foot through the Bor Ghat tunnels. Or train to Karjat for the Kondivade route.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Lonavala (110 km from Mumbai, 65 km from Pune). Park near the INS Shivaji campus and trek from there. Off-road vehicles can drive to Udhewadi in dry season.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Frequent ST buses to Lonavala from Mumbai and Pune. From Lonavala, begin the trek on foot — no public transport to Udhewadi.' }
        ],

        trekEssentials: [
            'Good trekking shoes — trail is rocky and slippery in monsoon',
            'Carry 2-3 litres water — limited refill until Udhewadi',
            'Headlamp essential — railway tunnel section is pitch dark',
            'Rain gear (monsoon) — you WILL get drenched',
            'Tent if camping; homestay if staying at Udhewadi',
            'Cash only — no UPI at village',
            'Mosquito repellent — forest trail has insects',
            'Start early (6 AM) from Lonavala for the most comfortable trek'
        ],

        safetyAlerts: [
            { msg: 'Railway tunnel route: stay alert for trains — hug the wall and use torch', season: 'All year' },
            { msg: 'Trail is extremely slippery during monsoon — ankle injuries common', season: 'June-Sept' },
            { msg: 'Leeches are prevalent on the monsoon trail — carry salt or lemon', season: 'June-Sept' },
            { msg: 'No mobile network at Udhewadi or on forts — inform someone of your plan', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (Lonavala)', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Homestay (Udhewadi)', value: '₹300-500' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Total', value: '₹550-1,100', highlight: true }
        ],

        facilities: [
            { label: 'Homestays', available: true, detail: 'Udhewadi village' },
            { label: 'Food', available: true, detail: 'Village meals + stalls' },
            { label: 'Drinking Water', available: true, detail: 'Udhewadi wells' },
            { label: 'Toilets', available: true, detail: 'Basic, at homestays' },
            { label: 'Mobile Network', available: false, detail: 'Zero connectivity' },
            { label: 'Vehicle Access', available: false, detail: 'Trek only (monsoon)' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Rajmachi (Royal Platform)' },
            { label: 'District', value: 'Pune' },
            { label: 'Altitude', value: '928 m (3,045 ft)' },
            { label: 'Fort Type', value: 'Twin Hill Fort' },
            { label: 'Twin Forts', value: 'Shrivardhan + Manaranjan' },
            { label: 'Built By', value: 'Satavahana dynasty' },
            { label: 'Famous For', value: 'Monsoon trek + fireflies' },
            { label: 'Ghat Controlled', value: 'Bor Ghat (Mumbai-Pune)' },
            { label: 'Kids Appropriate', value: 'No (16 km trek)' },
            { label: 'Best Combined', value: 'Lonavala + Lohagad + Visapur' }
        ],

        reviews: {
            quote: "The Rajmachi monsoon trek through the railway tunnels, past roaring waterfalls, to a village lit by fireflies — it's the most magical overnight trek in Maharashtra.",
            positives: [
                'Spectacular monsoon waterfalls en route',
                'Firefly spectacle in June is unforgettable',
                'Twin forts offer two summit experiences',
                'Udhewadi village homestays are warm and authentic',
                'Close proximity to Mumbai and Pune'
            ],
            proTips: [
                'Visit in June for both waterfalls AND fireflies',
                'Book Udhewadi homestay in advance on weekends',
                'Carry a headlamp for the railway tunnel section',
                'Trek to both Shrivardhan AND Manaranjan — don\'t skip either',
                'Leave Lonavala by 6 AM to reach Udhewadi before dark'
            ],
            rating: 4.5,
            reviewCount: '15,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 12. AJINKYATARA FORT ━━━━━━━━━━━━━━━━━━
    ajinkyatara: {
        introduction: `Ajinkyatara — "The Impregnable Star" — crowns the city of Satara at 1,080 metres 
            and holds extraordinary political significance in Maratha history. After Shivaji Maharaj's death, 
            Satara became the seat of the Chhatrapati dynasty, and Ajinkyatara was the royal fort commanding 
            the capital. From this summit, Maratha queens like Tarabai and generals like Dhanaji Jadhav 
            shaped the future of the Maratha Empire. On a clear day, seven forts are visible from its ramparts 
            — a rare 360° panorama that earned it the name "Star Fort."`,

        quote: {
            text: "अजिंक्यतारा — छत्रपतींच्या राजधानीचा मुकुटमणी",
            attribution: "On Ajinkyatara's role as the crown of the Chhatrapati's capital"
        },

        timeline: [
            { year: '12th Century', title: 'Shilahara Origins', desc: 'The Shilahara dynasty built the original fortifications on the hill. The ancient Mangai Devi temple dates to this period.' },
            { year: '1673', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj captured Ajinkyatara from the Bijapur Sultanate. He recognized its commanding position over the southern Sahyadri region.' },
            { year: '1700-08', title: '👑 Seat of Chhatrapati', desc: 'After Rajaram Maharaj shifted the capital to Satara, Ajinkyatara became the royal fort of the Chhatrapati dynasty. Tarabai ruled the Maratha Empire from here.' },
            { year: '1708', title: 'Shahu Maharaj\'s Return', desc: 'Chhatrapati Shahu Maharaj (grandson of Shivaji) returned from Mughal captivity and established his court at Satara, making Ajinkyatara the ceremonial capital.' },
            { year: '1818', title: 'British Takeover', desc: 'The fort was ceded to the British after the fall of the Maratha Empire. The British used the strategic hilltop for administrative purposes.' },
            { year: 'Present', title: 'TV Tower & Viewpoint', desc: 'Today Ajinkyatara hosts telecom towers but remains a popular viewpoint and heritage site. The Satara Municipal Corporation maintains it.' }
        ],

        landmarks: [
            { title: 'Seven Fort Panorama', desc: 'From Ajinkyatara\'s summit, seven forts are visible on clear days: Sajjangad, Kalyangad, Vasota, Pratapgad, Machchindragad, Pandavgad, and Bharamgad. A rare 360° fort-spotting experience.', mustSee: true },
            { title: 'Mangai Devi Temple', desc: 'An ancient temple dedicated to Goddess Mangai from the Shilahara period. Simple but atmospheric, with worn stone carvings hinting at its antiquity.', mustSee: true },
            { title: 'Fortification Walls & Gates', desc: 'Substantial stone walls with intact bastions. The main gate (Mahadvaar) still shows the defensive architecture. Multiple levels of fortification ring the hill.', mustSee: true },
            { title: 'Sunset / Sunrise Point', desc: 'The western rampart offers spectacular sunsets over the Sahyadri range. Sunrise casts the seven visible forts in golden light — a photographer\'s paradise.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Several rock-cut water tanks that supplied the fort garrison. Some still hold water year-round, testament to the builders\' engineering.', mustSee: false },
            { title: 'Cannon Platforms', desc: 'Multiple cannon positions along the ramparts, indicating the fort\'s military importance. Some restored cannons are on display.', mustSee: false }
        ],

        food: [
            { name: 'Kandi Pedha', type: 'Sweet', price: '₹20-40/piece', desc: 'Satara\'s famous milk sweet — rich, dense, and cardamom-scented. Buy from shops at the base of Ajinkyatara. A must-try Satara specialty.' },
            { name: 'Bharli Vangi (Stuffed Brinjal)', type: 'Veg', price: '₹60-100', desc: 'A Satara delicacy — baby eggplants stuffed with peanut-coconut masala. Rich, sweet-spicy, and utterly delicious.' },
            { name: 'Mutton Rassa', type: 'Non-Veg', price: '₹120-180', desc: 'Satara-style mutton curry — distinct from Kolhapuri (less heat, more flavor). Served with fresh wheat bhakri or rice.' },
            { name: 'Solkadhi', type: 'Beverage', price: '₹20-30', desc: 'Cool coconut milk and kokum digestive drink, popular in the Satara-Kolhapur belt. Perfect after spicy food.' }
        ],

        trekRoutes: [
            { icon: '🚗', title: 'Via Road (Drive Up)', difficulty: 'Easy', distance: '5 km drive', time: '15 min drive + 20 min walk', desc: 'A well-maintained road goes almost to the top. Drive up and walk the final section. Perfect for families and elderly visitors.' },
            { icon: '🥾', title: 'Via Steps from Satara City', difficulty: 'Medium', distance: '3 km', time: '60-90 min', desc: 'A stepped pathway from the city base to the summit. Passes through the main gate and fortification layers. Good exercise with history at every turn.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Pune (120 km), Mumbai (260 km), and Kolhapur (115 km) to Satara bus stand. Auto/taxi to Ajinkyatara base (3 km from bus stand).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Satara on NH48 (Pune-Bengaluru highway). Road goes up to the fort. Parking available near the top.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Satara (on Pune-Kolhapur/Miraj line). Trains from Pune, Mumbai, and Bengaluru. Fort is 5 km from station.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes for the stepped pathway',
            'Carry water — limited stalls on the fort',
            'Binoculars — essential for spotting the seven surrounding forts',
            'Visit during golden hour for best photography',
            'Sun protection in summer — exposed summit',
            'Budget 1.5-2 hours for complete exploration',
            'Combine with Sajjangad and Kaas Plateau (flower season)',
            'Local guide helpful for identifying the seven visible forts'
        ],

        safetyAlerts: [
            { msg: 'Fort road has hairpin bends — drive carefully, especially in rain', season: 'All year' },
            { msg: 'Monkeys can be aggressive near food — keep items hidden', season: 'All year' },
            { msg: 'Some bastion edges are unfenced — stay on marked paths', season: 'All year' },
            { msg: 'Satara summers are hot — carry water and avoid midday visits', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport (within Satara)', value: '₹50-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Pedha (must-buy)', value: '₹100-200' },
            { label: 'Total', value: '₹250-550', highlight: true }
        ],

        facilities: [
            { label: 'Road Access', available: true, detail: 'Drive to near summit' },
            { label: 'Food Stalls', available: true, detail: 'Near base' },
            { label: 'Drinking Water', available: true, detail: 'At base area' },
            { label: 'Toilets', available: true, detail: 'Basic, at base' },
            { label: 'Parking', available: true, detail: 'Near summit road end' },
            { label: 'Mobile Network', available: true, detail: 'Good (telecom towers on fort!)' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Ajinkyatara (Impregnable Star)' },
            { label: 'District', value: 'Satara' },
            { label: 'Altitude', value: '1,080 m (3,543 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Giri Durg)' },
            { label: 'Built By', value: 'Shilahara dynasty' },
            { label: 'Famous For', value: 'Seat of Chhatrapati dynasty' },
            { label: 'Visible Forts', value: '7 forts from summit' },
            { label: 'Royal Connection', value: 'Tarabai + Shahu Maharaj' },
            { label: 'Kids Appropriate', value: 'Yes (road access)' },
            { label: 'Best Combined', value: 'Sajjangad + Kaas Plateau' }
        ],

        reviews: {
            quote: "Standing on Ajinkyatara and counting seven Maratha forts visible on the horizon — you understand why the Chhatrapatis chose Satara as their capital after Raigad.",
            positives: [
                'Seven-fort panoramic view is unique in Maharashtra',
                'Easy road access — suitable for all ages',
                'Deep royal Maratha history',
                'Satara\'s Kandi Pedha is incredible',
                'Beautiful sunrise and sunset viewpoint'
            ],
            proTips: [
                'Visit at sunrise for golden light on the seven forts',
                'Bring binoculars to identify each visible fort',
                'Combine with Sajjangad (Ramdas Swami\'s samadhi) — 20 km away',
                'Visit Kaas Plateau if between Aug-Oct (UNESCO flower valley)',
                'Buy Kandi Pedha from Satara bazaar — the authentic sweet'
            ],
            rating: 4.4,
            reviewCount: '12,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 13. SUVARNADURG FORT ━━━━━━━━━━━━━━━━━━
    suvarnadurg: {
        introduction: `Suvarnadurg — the "Golden Fort" — is one of Maharashtra's most photogenic sea forts, 
            sitting on a rocky island just off the coast near Harnai port in Dapoli taluka. Captured by 
            Chhatrapati Shivaji Maharaj in 1660, it became a vital outpost of the Maratha Navy guarding 
            the Konkan coast. The fort is connected to the land-based Kanakadurg ("Golden Hill Fort"), and 
            together they formed a formidable coastal defense pair. With its crumbling walls rising from 
            the Arabian Sea, bastions where Maratha cannons once thundered, and a scenic boat ride to reach 
            it, Suvarnadurg offers a uniquely atmospheric fort experience.`,

        quote: {
            text: "सुवर्णदुर्ग — सोन्याचा किल्ला, मराठा आरमाराचा अभिमान",
            attribution: "On Suvarnadurg's role in Maratha naval defense"
        },

        timeline: [
            { year: '16th Century', title: 'Adil Shahi Construction', desc: 'The Bijapur Sultanate (Adil Shahi dynasty) built Suvarnadurg as a coastal defense fort to protect the Konkan trade routes.' },
            { year: '1660', title: '⚓ Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj\'s naval forces captured Suvarnadurg, integrating it into the growing Maratha Navy. He recognized its strategic value for Konkan coast defense.' },
            { year: '1698', title: 'Kanhoji Angre Era', desc: 'Under Admiral Kanhoji Angre, Suvarnadurg served as a secondary naval base. Maratha warships patrolled the coast from this fort.' },
            { year: '1756', title: 'British-Maratha Naval Battle', desc: 'The British and Peshwa allied forces attacked Suvarnadurg (held by Tulaji Angre). The fort saw fierce naval combat.' },
            { year: '1818', title: 'British Control', desc: 'Suvarnadurg was ceded to the British East India Company. The naval importance declined, and the fort gradually deteriorated.' },
            { year: 'Present', title: 'Heritage Tourism', desc: 'Now a protected monument. Accessible by boat from Harnai. Growing in popularity as an offbeat sea fort destination.' }
        ],

        landmarks: [
            { title: 'Island Fort Ramparts', desc: 'Massive stone walls rising directly from the sea, with intact bastions at cardinal points. The walls show cannon embrasures where Maratha guns once defended the coast.', mustSee: true },
            { title: 'Kanakadurg (Land Fort)', desc: 'The partner hill fort on the mainland, connected visually to Suvarnadurg. Together they created crossfire coverage over the sea approach. A short trek from Harnai.', mustSee: true },
            { title: 'Main Gate & Nagarkhana', desc: 'The fort\'s main entrance accessible from the boat jetty. The Nagarkhana (drum house) above the gate announced arrivals. Impressive stone carving work.', mustSee: true },
            { title: 'Sweet Water Well', desc: 'A remarkable freshwater well inside the sea fort — pure fresh water despite being surrounded by saltwater on all sides. Engineering marvel of the fort builders.', mustSee: false },
            { title: 'Harnai Fishing Port', desc: 'The bustling fishing harbor from where boats depart to Suvarnadurg. Watch traditional Konkan fishing boats and buy fresh catches. Atmospheric and photogenic.', mustSee: false },
            { title: 'Lighthouse Ruins', desc: 'Remains of a lighthouse on the highest point of the island fort. Offers 360° views of the Arabian Sea and Konkan coastline.', mustSee: false }
        ],

        food: [
            { name: 'Harnai Fish Curry', type: 'Non-Veg', price: '₹120-200', desc: 'Fresh-catch fish curry from Harnai port — the fish literally goes from sea to plate in hours. Bangda (mackerel), surmai (kingfish), or pomfret in coconut curry.' },
            { name: 'Kolambi Bhaat (Prawn Rice)', type: 'Non-Veg', price: '₹130-200', desc: 'Fragrant rice cooked with fresh prawns, coconut, and Konkan spices. A Dapoli specialty — rich and aromatic.' },
            { name: 'Sol Kadhi', type: 'Beverage', price: '₹20-30', desc: 'Pink kokum-coconut milk digestive — the essential Konkan meal accompaniment. Cool and refreshing after salty sea air.' },
            { name: 'Modak / Ukdiche Modak', type: 'Sweet', price: '₹10-20/piece', desc: 'Steamed rice flour dumplings filled with jaggery and coconut. A traditional Konkan sweet, especially during Ganesh festival.' },
            { name: 'Aamras + Puri', type: 'Seasonal', price: '₹60-100', desc: 'Fresh Alphonso mango pulp served with puris. Available March-June when Ratnagiri\'s world-famous mangoes are in season.' }
        ],

        trekRoutes: [
            { icon: '⛵', title: 'Boat from Harnai Port', difficulty: 'Easy', distance: '1 km boat ride', time: '10-15 min boat + 1 hour fort', desc: 'Take a local fishing boat from Harnai jetty to the island fort. The ride itself is scenic. Explore the fort for 1-1.5 hours, then boat back.' },
            { icon: '🥾', title: 'Kanakadurg Trek (Land Fort)', difficulty: 'Easy', distance: '2 km', time: '45-60 min', desc: 'Short trek from Harnai to the partner land fort Kanakadurg. Offers views of Suvarnadurg island from above. Can combine both forts in a half-day.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune to Dapoli (170 km), then local transport to Harnai port (10 km from Dapoli). From Mumbai via Mahad or ferry route.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Harnai via Dapoli. From Pune: ~180 km (4 hrs) via Tamhini-Mangaon-Dapoli. From Mumbai: ~200 km (5 hrs) via Mahad.' },
            { mode: 'By Boat', icon: '⛵', desc: 'From Harnai jetty, hire a fishing boat (₹500-1000 for group). Boats available morning to 4 PM. Avoid monsoon — seas are rough.' }
        ],

        trekEssentials: [
            'Life jacket for boat ride — insist on one from boat operators',
            'Comfortable shoes — fort surface is uneven rocky terrain',
            'Carry water — no facilities on the island fort',
            'Hat and sunscreen — zero shade on the sea fort',
            'Waterproof bag for phone/camera — sea spray on boat',
            'Visit during low tide for easiest access to the fort',
            'Carry snacks — nearest food is at Harnai',
            'Best to combine Suvarnadurg + Kanakadurg in one trip'
        ],

        safetyAlerts: [
            { msg: 'Boat ride can be choppy — life jackets mandatory', season: 'All year' },
            { msg: 'Fort walls are crumbling at some points — avoid edges', season: 'All year' },
            { msg: 'Seas are extremely rough in monsoon — boat service suspended', season: 'June-Sept' },
            { msg: 'No shade or drinking water on the island — carry supplies', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (from Dapoli)', value: '₹50-200' },
            { label: 'Boat ride (shared)', value: '₹100-200/person' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food (Harnai)', value: '₹150-300' },
            { label: 'Total', value: '₹300-700', highlight: true }
        ],

        facilities: [
            { label: 'Boat Service', available: true, detail: 'Harnai jetty (not monsoon)' },
            { label: 'Food', available: true, detail: 'At Harnai port' },
            { label: 'Drinking Water', available: false, detail: 'None on island' },
            { label: 'Toilets', available: false, detail: 'None on island' },
            { label: 'Parking', available: true, detail: 'At Harnai port' },
            { label: 'Mobile Network', available: true, detail: 'Moderate at fort' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Suvarnadurg (Golden Fort)' },
            { label: 'District', value: 'Ratnagiri' },
            { label: 'Fort Type', value: 'Sea Fort (Jal Durg)' },
            { label: 'Built By', value: 'Adil Shahi dynasty' },
            { label: 'Captured By', value: 'Shivaji Maharaj (1660)' },
            { label: 'Partner Fort', value: 'Kanakadurg (land fort)' },
            { label: 'Access', value: 'Boat from Harnai only' },
            { label: 'Famous For', value: 'Maratha naval outpost' },
            { label: 'Kids Appropriate', value: 'Age 8+ (boat ride)' },
            { label: 'Best Combined', value: 'Dapoli + Harnai beach + Kanakadurg' }
        ],

        reviews: {
            quote: "Approaching Suvarnadurg by boat, watching the fort walls rise from the sea, and then walking through the gates where Maratha sailors once docked warships — it's a goosebumps moment.",
            positives: [
                'Scenic boat ride to the fort is an experience in itself',
                'Atmospheric crumbling walls rising from the sea',
                'Freshwater well in a sea fort is an engineering marvel',
                'Less crowded than Sindhudurg or Janjira',
                'Amazing fresh seafood at Harnai port'
            ],
            proTips: [
                'Go early morning for calmest boat ride',
                'Visit Kanakadurg too — the land fort partner',
                'Buy fresh fish at Harnai and get it cooked at a local eatery',
                'Don\'t visit in monsoon — boat service suspended',
                'Combine with Dapoli beaches for a 2-day trip'
            ],
            rating: 4.3,
            reviewCount: '6,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 14. TIKONA FORT ━━━━━━━━━━━━━━━━━━
    tikona: {
        introduction: `Tikona — "The Triangle" — is named for its perfectly pyramidal shape that makes it 
            one of the most recognizable forts in the Sahyadri range. Rising to 1,066 metres above Pawna 
            Lake, this beginner-friendly fort offers a spectacular reward — panoramic views of Pawna Dam, 
            Tung Fort, Lohagad, Visapur, and the misty Sahyadri valleys. At the summit sits the ancient 
            Trimbakeshwar Mahadev temple, seven rock-cut water cisterns, and the remains of the fortification 
            that Shivaji Maharaj captured in 1657 on his march to dominate the northern Sahyadris.`,

        quote: {
            text: "तिकोना — त्रिकोणी सह्याद्रीची शान, पवना तलावाचा मुकुट",
            attribution: "Trekkers call Tikona the crown of Pawna Lake"
        },

        timeline: [
            { year: 'Pre-1600s', title: 'Ancient Origins', desc: 'Tikona\'s fortifications are pre-Maratha era. The Trimbakeshwar temple at the summit suggests the hilltop was a sacred site long before it became a military fort.' },
            { year: '1657', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj captured Tikona along with Lohagad, Visapur, and Tung in his sweep of the northern Sahyadri passes, securing control over the Maval region.' },
            { year: '1660s', title: 'Maratha Fortress', desc: 'Under Maratha rule, Tikona served as an outpost fort for the Pawna valley. Its triangular peak provided excellent visibility of approaching armies from any direction.' },
            { year: '1818', title: 'British Annexation', desc: 'Tikona was surrendered to the British along with other Sahyadri forts after the Third Anglo-Maratha War. It was subsequently abandoned.' },
            { year: 'Modern Era', title: 'Pawna Lake Tourism', desc: 'The creation of Pawna Dam transformed the surrounding landscape. Tikona became a popular trek combined with Pawna Lake camping — now a top weekend getaway from Pune and Mumbai.' }
        ],

        landmarks: [
            { title: 'Trimbakeshwar Mahadev Temple', desc: 'An ancient Shiva temple at the summit built in the Hemadpanthi stone style. The small but beautiful shrine has survived centuries of weathering. Peaceful atmosphere at the very top.', mustSee: true },
            { title: 'Pawna Lake Viewpoint', desc: 'The southeast-facing rampart offers a jaw-dropping view of Pawna Lake with Tung Fort rising behind it. At sunrise, the lake reflects gold and the mist creates a dreamy landscape.', mustSee: true },
            { title: 'Seven Rock-Cut Cisterns', desc: 'Seven well-engineered water tanks carved into the basalt rock. Some are quite large and still hold water during monsoon. Testament to the fort\'s self-sufficiency.', mustSee: true },
            { title: 'Main Gate (Maha Darwaza)', desc: 'The fortified main entrance with intact stone doorframe. The approach staircase cut into the rock is the steepest section of the trek.', mustSee: true },
            { title: 'Rock-Cut Steps', desc: 'Dramatic stone steps carved into the cliff face leading to the summit. These narrow, steep steps are the iconic feature of the Tikona trek climb.', mustSee: false },
            { title: 'Vetal Khind Approach', desc: 'The trail passes through a forested section before the final ascent. Monkeys, langurs, and sometimes peacocks are spotted here.', mustSee: false }
        ],

        food: [
            { name: 'Pawna Lake Camping Food', type: 'Veg / Non-Veg', price: '₹Included in camp', desc: 'Most trekkers combine Tikona with Pawna Lake camping. Camp operators provide dinner (BBQ, starters) and breakfast. Quality varies by operator.' },
            { name: 'Poha / Upma', type: 'Veg', price: '₹30-50', desc: 'Light breakfast at the base village Tikona Peth before the climb. Simple but fresh.' },
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹60-100', desc: 'Available at the base village or nearby dhabas. The classic trek fuel — filling and authentic.' },
            { name: 'Maggi & Chai', type: 'Veg', price: '₹30-60', desc: 'Available at Tikona Peth base during weekends. The post-trek warm Maggi hits differently.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Tikona Peth (Standard)', difficulty: 'Easy-Medium', distance: '2.5 km', time: '60-90 min', desc: 'The main route from Tikona Peth village. Gradual ascent through forest, then steep rock-cut steps near the summit. Well-marked and popular trail.' },
            { icon: '⛰️', title: 'Via Kale Colony Side', difficulty: 'Medium', distance: '3 km', time: '90-120 min', desc: 'Alternative approach from the western side. Less crowded, slightly more challenging terrain, but equally scenic views.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Tikona Peth village. From Pune: ~55 km via Paud-Pawna Nagar road (1.5 hrs). From Mumbai: ~120 km via Lonavala (3 hrs). Parking at the village.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune to Kamshet or Paud, then local transport to Tikona Peth. Not as frequent — car or bike recommended.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Popular bike ride from Pune. Scenic route via Paud Ghat Road. Park at Tikona Peth and trek. Many bikers combine with Pawna Lake camping.' }
        ],

        trekEssentials: [
            'Good grip shoes — rock-cut steps near summit can be slippery',
            'Carry 1.5-2 litres water — no sources on the trek',
            'Start early (6-7 AM) for cool climbing and best views',
            'Sunscreen and hat — exposed summit',
            'Camera — the Pawna Lake views are incredibly photogenic',
            'Monsoon: rain jacket and extra grip shoes',
            'Budget 2-3 hours total (up + down + exploration)',
            'Combine with Pawna Lake camping for a perfect weekend'
        ],

        safetyAlerts: [
            { msg: 'Rock-cut steps near summit are steep and narrow — be careful', season: 'All year' },
            { msg: 'Steps become extremely slippery in rain — use caution', season: 'June-Sept' },
            { msg: 'Summit is exposed — lightning risk during thunderstorms', season: 'June-Sept' },
            { msg: 'Monkeys near the base may grab food — keep packed', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (from Pune)', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹80-150' },
            { label: 'Pawna Camping (optional)', value: '₹800-1500' },
            { label: 'Total (trek only)', value: '₹180-450', highlight: true }
        ],

        facilities: [
            { label: 'Food Stalls', available: true, detail: 'At base (weekends)' },
            { label: 'Drinking Water', available: true, detail: 'At base village' },
            { label: 'Toilets', available: false, detail: 'None on trek' },
            { label: 'Parking', available: true, detail: 'At Tikona Peth' },
            { label: 'Mobile Network', available: true, detail: 'Okay at base, patchy on top' },
            { label: 'Camping', available: true, detail: 'Pawna Lake (nearby)' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Tikona (Triangle / Vitandgad)' },
            { label: 'District', value: 'Pune (Maval taluka)' },
            { label: 'Altitude', value: '1,066 m (3,497 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Giri Durg)' },
            { label: 'Shape', value: 'Triangular / Pyramidal' },
            { label: 'Captured By', value: 'Shivaji Maharaj (1657)' },
            { label: 'Summit Temple', value: 'Trimbakeshwar Mahadev' },
            { label: 'Lake Below', value: 'Pawna Lake (Dam)' },
            { label: 'Kids Appropriate', value: 'Age 8+ (steep steps)' },
            { label: 'Best Combined', value: 'Pawna Lake + Lohagad + Tung' }
        ],

        reviews: {
            quote: "Tikona is the perfect first fort trek — short enough to not exhaust you, dramatic enough to reward you with Pawna Lake views that look straight out of a painting. And then you camp by the lake!",
            positives: [
                'Pawna Lake views from summit are stunning',
                'Short trek — perfect for beginners and families',
                'Ancient temple at the summit adds spiritual touch',
                'Excellent weekend combo with Pawna camping',
                'Close to both Pune and Mumbai'
            ],
            proTips: [
                'Camp at Pawna Lake the night before, trek Tikona at sunrise',
                'Rock-cut steps are the highlight — take them slow and enjoy',
                'Visit in post-monsoon (Sept-Nov) for green landscapes + clear skies',
                'Carry good shoes — the rock steps are the crux of the trek',
                'Combine with Lohagad or Tung for a fort-hopping weekend'
            ],
            rating: 4.4,
            reviewCount: '14,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 15. VASOTA FORT ━━━━━━━━━━━━━━━━━━
    vasota: {
        introduction: `Vasota — also known as "Vyaghragad" (Tiger Fort) — is Maharashtra's most adventurous 
            and pristine fort trek. Hidden deep inside the Koyna Wildlife Sanctuary, it can only be reached 
            by a boat ride across the vast Shivsagar Lake followed by a jungle trek through dense forest 
            inhabited by leopards, bison, deer, and occasionally tigers. No roads, no stalls, no crowd — 
            just wilderness, water, and a fort that time and the jungle have reclaimed. For those seeking 
            a raw, off-the-grid adventure that combines trekking, wildlife, and Maratha history, Vasota 
            is the undisputed king.`,

        quote: {
            text: "वासोटा — शिवसागर पार करून जंगलात लपलेला अजिंक्य किल्ला",
            attribution: "On Vasota's remoteness behind Shivsagar Lake"
        },

        timeline: [
            { year: '12th Century', title: 'Shilahara Origins', desc: 'The Shilahara dynasty built the original fort on this remote hilltop in the dense Sahyadri jungle. It served as a frontier outpost in their mountainous domain.' },
            { year: '1656', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj captured Vasota from the Bijapur Sultanate — one of his early conquests that demonstrated his ability to take even the most remote, jungle-deep forts.' },
            { year: '1660s', title: 'Maratha Jungle Stronghold', desc: 'Under Maratha rule, Vasota was used as a treasury and safe house. Its extreme remoteness made it ideal for storing wealth and important documents during invasions.' },
            { year: '1818', title: 'British Cession', desc: 'Like other Maratha forts, Vasota was ceded to the British. Its inaccessibility meant the British left it entirely — the jungle slowly consumed it.' },
            { year: '1962', title: 'Koyna Dam Changes Landscape', desc: 'The construction of Koyna Dam created Shivsagar Lake, submerging surrounding valleys and making Vasota even more remote — now accessible only by boat.' },
            { year: 'Present', title: 'Wildlife Sanctuary Trek', desc: 'Vasota lies within the Koyna Wildlife Sanctuary (est. 1985). A forest department permit is required. The trek has become legendary among serious trekkers.' }
        ],

        landmarks: [
            { title: 'Shivsagar Lake Boat Ride', desc: 'The 1-hour boat ride across the vast blue Shivsagar Lake flanked by the Sahyadri Mountains is an experience in itself. The silence on the water, surrounded by forested hills, is meditative.', mustSee: true },
            { title: 'Jungle Trek Trail', desc: 'A 7 km trail through the Koyna Wildlife Sanctuary — dense deciduous forest with towering trees, birdcalls, and the ever-present possibility of spotting wild bison (gaur), sambar deer, or leopard tracks.', mustSee: true },
            { title: 'Fort Summit & Ramparts', desc: 'The ruins atop Vasota — overgrown walls, bastions peeking through vegetation, and ancient water tanks. The jungle has half-reclaimed the fort, creating an atmospheric lost-world feel.', mustSee: true },
            { title: 'Bamnoli Village', desc: 'The lakeside village from where the boat departs. A quiet, scenic hamlet on the edge of Shivsagar. Homestays available for an overnight stay.', mustSee: true },
            { title: 'Nageshwar Temple (Ruins)', desc: 'Ancient temple ruins on the fort, partially consumed by tree roots and moss. The archaeological remains hint at the fort\'s former importance.', mustSee: false },
            { title: 'Konkan Viewpoint', desc: 'From the fort\'s western edge, on clear days, the Konkan coast is distantly visible — a reminder of the fort\'s strategic sightlines across the Sahyadri divide.', mustSee: false }
        ],

        food: [
            { name: 'Carry Your Own Food', type: 'All', price: '₹0', desc: 'Vasota is deep wilderness — zero food stalls on the trail or fort. Carry all meals: chapati-sabzi, thepla, trail mix, energy bars, fruits. Plan for the whole day.' },
            { name: 'Bamnoli Village Meals', type: 'Veg / Non-Veg', price: '₹100-200', desc: 'Home-cooked meals at Bamnoli homestays. Simple dal-rice, fish curry (from the lake!), and bhakri. Arrange dinner the night before if staying overnight.' },
            { name: 'Water', type: 'Essential', price: 'Free', desc: 'Carry minimum 3 litres per person. Some water sources on the trek but not guaranteed to be clean. No refill options on the fort.' }
        ],

        trekRoutes: [
            { icon: '⛵', title: 'Bamnoli → Boat → Jungle Trek (Only Route)', difficulty: 'Hard', distance: '1 hr boat + 7 km trek', time: '6-8 hours total', desc: 'The only way to Vasota: drive to Bamnoli village, 1-hour boat across Shivsagar, then 7 km jungle trek through Koyna Wildlife Sanctuary to the fort. Return by same route.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Bamnoli village. From Pune: ~170 km (4 hrs) via Satara-Bamnoli. From Mumbai: ~300 km (7 hrs). No further vehicle access — boat + trek only.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune/Satara to Bamnoli or nearby village. Very limited frequency — private vehicle strongly recommended. Last transport before wilderness.' },
            { mode: 'By Boat', icon: '⛵', desc: 'From Bamnoli jetty, hire a motor boat (₹2000-3000 for group). Boats available from 7-8 AM. MUST return before 4 PM — boatmen do not operate after dark.' }
        ],

        trekEssentials: [
            'Forest Department permit MANDATORY — obtain from Bamnoli/Satara forest office',
            'Strong trekking shoes with ankle support — jungle terrain',
            'Carry ALL food — there is NOTHING available on the trail',
            'Minimum 3 litres water per person',
            'Whistle or bell to alert wildlife of your presence',
            'Pack light but carry essentials — first aid, torch, rain poncho',
            'Start boat ride by 7-8 AM to have enough time for the trek',
            'Go with a group — solo trekking is risky (wildlife + remoteness)',
            'Leech socks / salt for monsoon visits',
            'Inform someone of your plan — zero mobile network'
        ],

        safetyAlerts: [
            { msg: 'Koyna Wildlife Sanctuary has leopards, bison, and rarely tigers — make noise while trekking', season: 'All year' },
            { msg: 'ZERO mobile network from Bamnoli onwards — no way to call for help', season: 'All year' },
            { msg: 'Boat MUST return by 4 PM — plan your time carefully', season: 'All year' },
            { msg: 'Leeches are extremely heavy during monsoon — carry salt', season: 'June-Sept' },
            { msg: 'Trail markers are sparse — a local guide is strongly recommended', season: 'All year' },
            { msg: 'Nearest hospital is 3+ hours away — carry first aid', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (to Bamnoli)', value: '₹300-600' },
            { label: 'Forest Permit', value: '₹30-50' },
            { label: 'Boat (group)', value: '₹2000-3000 total' },
            { label: 'Homestay (Bamnoli)', value: '₹300-500' },
            { label: 'Total (per person, group of 6)', value: '₹800-1,500', highlight: true }
        ],

        facilities: [
            { label: 'Food', available: false, detail: 'None — carry everything' },
            { label: 'Drinking Water', available: false, detail: 'Carry 3+ litres' },
            { label: 'Toilets', available: false, detail: 'None — wilderness' },
            { label: 'Mobile Network', available: false, detail: 'Zero from Bamnoli' },
            { label: 'Homestay', available: true, detail: 'Bamnoli village only' },
            { label: 'Boat Service', available: true, detail: 'Bamnoli jetty (permit needed)' }
        ],

        quickFacts: [
            { label: 'Also Known As', value: 'Vyaghragad (Tiger Fort)' },
            { label: 'District', value: 'Satara' },
            { label: 'Altitude', value: '1,171 m (3,842 ft)' },
            { label: 'Fort Type', value: 'Jungle Fort (Van Durg)' },
            { label: 'Built By', value: 'Shilahara dynasty' },
            { label: 'Sanctuary', value: 'Koyna Wildlife Sanctuary' },
            { label: 'Access', value: 'Boat + jungle trek only' },
            { label: 'Wildlife', value: 'Leopard, gaur, sambar, tiger (rare)' },
            { label: 'Kids Appropriate', value: 'No — serious wilderness trek' },
            { label: 'Best Combined', value: 'Bamnoli stay + Shivsagar boat ride' }
        ],

        reviews: {
            quote: "Vasota is not just a trek — it's an expedition. The boat across Shivsagar, the jungle with real wildlife, and then a fort that the forest has swallowed whole. It's Maharashtra's last real adventure.",
            positives: [
                'Most adventurous fort trek in Maharashtra — bar none',
                'Shivsagar Lake boat ride is stunning',
                'Real wildlife encounters — bison, deer, eagles',
                'Zero commercialization — pure wilderness',
                'The overgrown fort has a "lost city" atmosphere'
            ],
            proTips: [
                'Get forest permit from Bamnoli forest office the day before',
                'Go with a local guide — trail is easy to lose',
                'Start the boat by 7 AM to have enough trek time',
                'Visit Oct-Feb for best weather and no leeches',
                'Stay overnight at Bamnoli — the sunrise over Shivsagar is magical',
                'Take the trek slow — rushing through jungle is unsafe'
            ],
            rating: 4.7,
            reviewCount: '5,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 16. SALHER FORT ━━━━━━━━━━━━━━━━━━
    salher: {
        introduction: `Salher is the tallest fort in Maharashtra at a staggering 1,567 metres — a mountain 
            fortress that literally touches the clouds. But height is not even its greatest claim to fame. 
            In February 1672, the Battle of Salher saw Maratha generals Moropant Pingle and Prataprao Gujar 
            achieve what was considered impossible — they defeated a massive Mughal army in an open-field 
            pitched battle, the first such victory for the Marathas. This was not a guerrilla raid or an 
            ambush — it was a head-on clash of armies, and the Marathas won decisively, capturing over 
            6,000 horses and vast treasure. Together with its twin Mulher, Salher dominates the Baglan 
            region of northern Maharashtra.`,

        quote: {
            text: "साल्हेर — महाराष्ट्रातील सर्वात उंच किल्ला, मराठ्यांच्या पहिल्या रणांगण विजयाचा साक्षीदार",
            attribution: "On Salher's twin distinction — height and historic victory"
        },

        timeline: [
            { year: '12th Century', title: 'Yadava Construction', desc: 'The Yadava dynasty of Devagiri built Salher as a frontier fort protecting their northern territories. The massive fortification walls and water systems date to this period.' },
            { year: '1636', title: 'Mughal Control', desc: 'Salher came under Mughal control as part of the Deccan campaigns. The fort served as a garrison controlling the Baglan region and trade routes.' },
            { year: '1671', title: 'Captured by Marathas', desc: 'Maratha forces captured Salher from the Mughals, asserting Maratha dominance in the northern Sahyadri region.' },
            { year: 'Feb 1672', title: '⚔️ Battle of Salher', desc: 'The legendary battle! Moropant Pingle and Prataprao Gujar defeated a 25,000-strong Mughal army under Ikhlas Khan and Bahlol Khan in open combat. 6,000+ horses captured. A turning point in Maratha military history.' },
            { year: '1818', title: 'British Takeover', desc: 'Salher was ceded to the British after the fall of the Maratha Empire. Its extreme altitude and remoteness meant the British quickly abandoned it.' },
            { year: 'Present', title: 'Adventure Trekking', desc: 'Salher is now one of Maharashtra\'s most challenging and rewarding treks, attracting serious trekkers seeking the highest fort in the state.' }
        ],

        landmarks: [
            { title: 'Summit Plateau (1,567 m)', desc: 'The highest fort point in Maharashtra. On clear days, the views extend across the entire northern Sahyadri range — Mulher, Hargad, Salota, and hills stretching to Gujarat. Cloud-level experience.', mustSee: true },
            { title: 'Massive Fortification Walls', desc: 'Enormous stone walls with bastions ring the fort at multiple levels. The scale of construction at this altitude is awe-inspiring — some walls are 15+ feet thick.', mustSee: true },
            { title: 'Parashuram Temple', desc: 'An ancient temple dedicated to Lord Parashuram at the summit. Pilgrims visit during Mahashivratri. The temple is remarkably well-preserved for its age and altitude.', mustSee: true },
            { title: 'Mulher Twin Fort', desc: 'Salher\'s twin fort visible across the valley. Together they controlled the entire Baglan region. Mulher can be trekked separately or combined with Salher for a 2-day adventure.', mustSee: true },
            { title: 'Rock-Cut Water Cisterns', desc: 'Dozens of water tanks carved into rock — essential for sustaining the large garrison. Some are massive, holding thousands of litres even in dry season.', mustSee: false },
            { title: 'Battle of Salher Viewpoint', desc: 'The plateau below the fort where the 1672 battle took place is visible from the ramparts. Standing here, you can visualize the two armies clashing.', mustSee: false }
        ],

        food: [
            { name: 'Carry Your Own', type: 'All', price: '₹0', desc: 'Salher is remote — no food stalls on the fort or trail. Carry all meals: thepla, trail mix, energy bars, fruits, and plenty of water.' },
            { name: 'Salher Wadi Village Meals', type: 'Veg', price: '₹80-150', desc: 'Simple home-cooked meals at Salher Wadi or Waghamba base village. Dal-rice, bhakri-pithla. Call ahead to arrange — not always available.' },
            { name: 'Satana Town', type: 'Veg / Non-Veg', price: '₹60-150', desc: 'The nearest proper town (30 km). Basic restaurants and dhabas for a pre/post-trek meal. Stock up on supplies here.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Waghamba Village (Standard)', difficulty: 'Hard', distance: '6 km', time: '4-5 hours', desc: 'The most common route. Steep ascent through forest and exposed rock sections. The final stretch has some rock scrambling. Well-used trail but demanding.' },
            { icon: '⛰️', title: 'Via Salher Wadi', difficulty: 'Hard', distance: '5 km', time: '3-4 hours', desc: 'Slightly shorter approach from the eastern side through Salher Wadi village. Steeper gradient but more direct. Local villagers can guide.' },
            { icon: '🏔️', title: 'Salher + Mulher Combined', difficulty: 'Expert', distance: '15+ km', time: '2 days', desc: 'The ultimate Baglan adventure — trek Salher on day one, descend to the saddle, and climb Mulher on day two. Requires camping in the valley between.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Waghamba/Salher Wadi village. From Nashik: ~130 km (3.5 hrs) via Satana. From Mumbai: ~300 km (7 hrs). Last 10 km is rough village road.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nashik to Satana town. From Satana, shared autos or local transport to Waghamba village. Very infrequent — private vehicle recommended.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Manmad (100 km) on Mumbai-Delhi line. Or Nashik Road station. Then road transport to Satana and onwards to base village.' }
        ],

        trekEssentials: [
            'Strong trekking shoes with ankle support — rocky, steep terrain',
            'Carry ALL food and 3+ litres water per person',
            'Camping gear if doing Salher-Mulher combined trek',
            'Headlamp — start early for comfortable climbing',
            'Warm layers — temperature drops significantly at 1,567 m',
            'No mobile network — carry offline maps',
            'Go with experienced group — trail not always clear',
            'First aid kit — nearest medical help is 30+ km away',
            'Allow full day — the trek is long and demanding'
        ],

        safetyAlerts: [
            { msg: 'Rock scrambling section near summit — use three-point contact', season: 'All year' },
            { msg: 'Altitude makes weather unpredictable — clouds can roll in fast', season: 'All year' },
            { msg: 'Extremely slippery in monsoon — rock patches become waterfalls', season: 'June-Sept' },
            { msg: 'No mobile network — carry offline maps and inform someone of your plan', season: 'All year' },
            { msg: 'Temperature can drop to 5°C at summit — carry warm clothes', season: 'Nov-Feb' }
        ],

        budget: [
            { label: 'Transport (from Nashik)', value: '₹300-600' },
            { label: 'Entry', value: 'Free' },
            { label: 'Village Meal', value: '₹80-150' },
            { label: 'Total', value: '₹380-750', highlight: true }
        ],

        facilities: [
            { label: 'Food', available: false, detail: 'Carry everything' },
            { label: 'Water', available: false, detail: 'Carry 3+ litres' },
            { label: 'Toilets', available: false, detail: 'None on trail/fort' },
            { label: 'Mobile Network', available: false, detail: 'Zero connectivity' },
            { label: 'Camping', available: true, detail: 'Summit plateau' },
            { label: 'Vehicle Access', available: false, detail: 'Trek only' }
        ],

        quickFacts: [
            { label: 'Original Name', value: 'Salher (Salyagiri)' },
            { label: 'District', value: 'Nashik (Baglan taluka)' },
            { label: 'Altitude', value: '1,567 m (5,141 ft) — HIGHEST' },
            { label: 'Fort Type', value: 'Hill Fort (Giri Durg)' },
            { label: 'Built By', value: 'Yadava dynasty' },
            { label: 'Famous For', value: 'Battle of Salher (1672)' },
            { label: 'Twin Fort', value: 'Mulher' },
            { label: 'Battle Result', value: '6,000+ horses captured' },
            { label: 'Kids Appropriate', value: 'No — expert trek only' },
            { label: 'Best Combined', value: 'Mulher + Salota + Hargad' }
        ],

        reviews: {
            quote: "Standing at 1,567 metres on Salher — the highest fort in Maharashtra — with clouds at your feet and knowing this is where the Marathas proved they could defeat the Mughals in open battle... it's transcendent.",
            positives: [
                'Highest fort in Maharashtra — literally above the clouds',
                'Battle of Salher history is spine-tingling',
                'Remote and uncrowded — true wilderness',
                'Massive fortification scale is jaw-dropping',
                'Mulher twin fort adds to the adventure'
            ],
            proTips: [
                'Camp at summit for sunrise above the clouds',
                'Combine with Mulher for a legendary 2-day trek',
                'Visit in Oct-Nov for clearest skies and views',
                'Start trek by 5 AM for comfortable climbing',
                'Carry warm clothes — it gets cold at the top'
            ],
            rating: 4.6,
            reviewCount: '4,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 17. KORIGAD FORT ━━━━━━━━━━━━━━━━━━
    korigad: {
        introduction: `Korigad (also called Koraigad) is the perfect "first fort" for any Sahyadri 
            beginner. Just 20 km from Lonavala, this compact hill fort at 929 metres delivers an outsized 
            experience — a quick 45-minute trek rewards you with sweeping views of Pawna Lake, the distant 
            shapes of Tikona, Tung, and Lohagad forts, and a beautiful summit plateau with an ancient 
            Koraidevi temple and two rock-cut lakes. Shivaji Maharaj captured Korigad in 1657 during his 
            northern Sahyadri campaign, and the well-preserved entrance gate still shows Maratha-era 
            fortification engineering. If you want to introduce someone to fort trekking, Korigad is 
            the answer.`,

        quote: {
            text: "कोरीगड — सह्याद्रीतला पहिला किल्ला ट्रेक, पवनाच्या काठावरचं रत्न",
            attribution: "On Korigad being the ideal beginner fort trek"
        },

        timeline: [
            { year: 'Pre-1600s', title: 'Ancient Origins', desc: 'The Koraidevi temple at the summit suggests the hill was a sacred site long before fortification. The original fort builders are unknown.' },
            { year: '1657', title: 'Captured by Shivaji Maharaj', desc: 'Shivaji Maharaj captured Korigad during his sweep of the northern Sahyadri forts, alongside Lohagad, Tikona, and Tung — securing the Maval region.' },
            { year: '1660s', title: 'Maratha Outpost', desc: 'Korigad served as an outpost controlling the Bor Ghat approaches. The fortified gate and bastions were strengthened during Maratha rule.' },
            { year: '1818', title: 'British Annexation', desc: 'The fort was ceded to the British. A battle fought here during the Anglo-Maratha wars left damage visible on the main gate.' },
            { year: 'Present', title: 'Popular Trek', desc: 'Korigad is now one of the most popular beginner treks near Mumbai and Pune, especially combined with Pawna Lake camping.' }
        ],

        landmarks: [
            { title: 'Koraidevi Temple', desc: 'Ancient hilltop temple dedicated to Goddess Korai at the summit. Small but beautifully maintained with fresh flowers and tilak. Peaceful atmosphere with fort views from the temple steps.', mustSee: true },
            { title: 'Pawna Lake Viewpoint', desc: 'The southern rampart offers stunning views of Pawna Lake below, with Tikona and Tung forts visible across the water. Sunrise here paints the lake gold.', mustSee: true },
            { title: 'Main Entrance Gate', desc: 'Well-preserved Maratha-era fortified gate with carved brackets and stone lintel. Battle damage from the 1818 Anglo-Maratha conflict is still visible.', mustSee: true },
            { title: 'Twin Summit Lakes', desc: 'Two beautiful rock-cut water tanks on the summit plateau. During monsoon they fill up and reflect the cloudy sky — perfect photo spots.', mustSee: true },
            { title: 'Bastions & Ramparts', desc: 'Intact stone ramparts with views in all directions. The cannon platforms give a sense of the fort\'s strategic importance.', mustSee: false },
            { title: 'Cave Shelters', desc: 'Rock-cut caves near the base used as shelters. Simple but functional — some trekkers still use them for overnight stays.', mustSee: false }
        ],

        food: [
            { name: 'Pawna Lake Camp Food', type: 'Veg / Non-Veg', price: 'Included in camp', desc: 'Most visitors combine Korigad with Pawna camping. Camp operators serve BBQ dinner, starters, and breakfast. Book ahead for weekends.' },
            { name: 'Maggi & Chai', type: 'Veg', price: '₹30-60', desc: 'Available at the base village during weekends. The classic trekker post-trek reward.' },
            { name: 'Peth Village Meals', type: 'Veg', price: '₹60-100', desc: 'Simple home-cooked meals at the base village. Pithla-bhakri and dal-rice — hearty trek fuel.' },
            { name: 'Lonavala Chikki', type: 'Sweet', price: '₹50-100/pack', desc: 'Buy Lonavala\'s famous jaggery-nut brittle on the way back. Maganlal or Cooper\'s are the best brands.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Peth Shahpur Village', difficulty: 'Easy', distance: '1.5 km', time: '30-45 min', desc: 'The standard route. A gentle climb through light forest leading to the main gate. Even beginners can do this comfortably. Well-marked path.' },
            { icon: '⛰️', title: 'Via Ambavne Side', difficulty: 'Easy-Medium', distance: '2 km', time: '45-60 min', desc: 'Slightly longer approach from the eastern side. Less crowded and more scenic. Passes through farm fields before the forested ascent.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Peth Shahpur village via Lonavala-Pawna road. From Pune: ~65 km (1.5 hrs). From Mumbai: ~120 km (2.5 hrs). Parking at the village.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus to Lonavala from Mumbai/Pune. From Lonavala, shared auto or taxi to Peth Shahpur (20 km). Not very frequent — car/bike preferred.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Very popular weekend ride from Pune. Scenic route via Paud Ghat or Lonavala. Park at Peth Shahpur and trek. Often combined with Pawna Lake ride.' }
        ],

        trekEssentials: [
            'Basic shoes are fine — trail is well-maintained',
            'Carry 1 litre water — short trek',
            'Sunscreen and hat in summer — summit is exposed',
            'Camera — Pawna views are stunning',
            'Budget 1-1.5 hours for the entire fort',
            'Combine with Pawna Lake camping for a full weekend',
            'Monsoon: light rain jacket — the fort is beautiful in rain',
            'Cash for base village food — no UPI'
        ],

        safetyAlerts: [
            { msg: 'Steps near the main gate can be slippery in rain', season: 'June-Sept' },
            { msg: 'Summit edges have no railings at some points', season: 'All year' },
            { msg: 'Carry water — no reliable source on the fort', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (from Pune)', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹60-100' },
            { label: 'Pawna Camping (opt.)', value: '₹800-1500' },
            { label: 'Total (trek only)', value: '₹160-400', highlight: true }
        ],

        facilities: [
            { label: 'Food Stalls', available: true, detail: 'Base village (weekends)' },
            { label: 'Drinking Water', available: true, detail: 'Base village' },
            { label: 'Toilets', available: false, detail: 'None on fort' },
            { label: 'Parking', available: true, detail: 'Peth Shahpur village' },
            { label: 'Mobile Network', available: true, detail: 'Okay at base, weak on top' },
            { label: 'Camping', available: true, detail: 'Pawna Lake nearby' }
        ],

        quickFacts: [
            { label: 'Also Known As', value: 'Koraigad' },
            { label: 'District', value: 'Pune (Maval taluka)' },
            { label: 'Altitude', value: '929 m (3,048 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Giri Durg)' },
            { label: 'Captured By', value: 'Shivaji Maharaj (1657)' },
            { label: 'Summit Temple', value: 'Koraidevi Temple' },
            { label: 'Summit Lakes', value: 'Two rock-cut tanks' },
            { label: 'Difficulty', value: 'Easy — perfect for beginners' },
            { label: 'Kids Appropriate', value: 'Yes (age 6+)' },
            { label: 'Best Combined', value: 'Pawna Lake + Tikona + Lohagad' }
        ],

        reviews: {
            quote: "Korigad is the gateway to fort trekking. A short, sweet trek with a gorgeous Pawna Lake panorama, an ancient temple, and two summit lakes — all in under an hour. Perfect first fort!",
            positives: [
                'Perfect beginner fort — short, easy, and rewarding',
                'Pawna Lake views are spectacular',
                'Well-preserved gate and temple add historical depth',
                'Twin summit lakes are unique',
                'Close to both Mumbai and Pune'
            ],
            proTips: [
                'Trek at sunrise for golden Pawna Lake views',
                'Combine with Pawna Lake camping for a weekend trip',
                'Korigad + Tikona make a great fort-hopping day',
                'Visit in Sept-Oct for green monsoon beauty',
                'Bring a kite — the summit plateau is perfect for flying kites'
            ],
            rating: 4.3,
            reviewCount: '11,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 18. MAHULI FORT ━━━━━━━━━━━━━━━━━━
    mahuli: {
        introduction: `Mahuli is the tallest fort in Thane district and the closest serious mountain trek 
            to Mumbai — a vertical thrill ride rising to 858 metres (2,815 ft) through dense jungle, rock 
            patches, and a final summit scramble. The fort is actually a triple-peaked complex — Mahuli, 
            Bhandargad, and Palasgad — offering multiple summit experiences in one trek. Surrounded by 
            the Mahuli Wildlife Sanctuary, the trail passes through habitat for leopards, barking deer, 
            and Malabar giant squirrels. For Mumbaikars seeking an adrenaline-pumping day trek without 
            traveling far, Mahuli is the undisputed champion.`,

        quote: {
            text: "माहुली — मुंबईकरांचा सर्वात जवळचा खरा साहसी किल्ला ट्रेक",
            attribution: "On Mahuli being Mumbai's nearest serious fort trek"
        },

        timeline: [
            { year: '15th Century', title: 'Bahmani Construction', desc: 'The Bahmani Sultanate built fortifications on Mahuli to control the Thane-Nashik corridor and the trade routes from the Konkan coast to the Deccan.' },
            { year: '1585', title: 'Captured by Mughals', desc: 'Mughal forces captured Mahuli as part of their Deccan expansion. It served as a garrison fort controlling the Shahapur region.' },
            { year: '1658', title: 'Maratha Capture', desc: 'Shivaji Maharaj\'s forces captured Mahuli along with other Thane-region forts, extending Maratha influence close to the Mughal stronghold of Kalyan.' },
            { year: '1818', title: 'British Annexation', desc: 'Mahuli was ceded to the British. They established the surrounding area as a forest reserve, which later became the Mahuli Wildlife Sanctuary.' },
            { year: '1986', title: 'Wildlife Sanctuary', desc: 'Mahuli and surrounding forest declared a wildlife sanctuary. The fort trek now passes through protected habitat rich in biodiversity.' }
        ],

        landmarks: [
            { title: 'Mahuli Main Peak (858 m)', desc: 'The highest point with a small Shiva temple and 360° views of the Sahyadri foothills. On clear days, you can see the towers of Mumbai\'s skyline on the southern horizon.', mustSee: true },
            { title: 'Bhandargad Peak', desc: 'The second peak of the triple-fort complex. A ridge walk from Mahuli leads here. More ruins and cisterns, with a different angle on the surrounding landscape.', mustSee: true },
            { title: 'Rock Climbing Section', desc: 'A thrilling 30-foot rock patch near the summit that requires hands-and-feet scrambling. This is what gives Mahuli its "difficult" rating. Ropes installed by trekking groups.', mustSee: true },
            { title: 'Jungle Trail', desc: 'The lower trail passes through thick jungle of the wildlife sanctuary. Giant Malabar squirrels, langurs, and diverse birdlife make it feel like a proper forest expedition.', mustSee: false },
            { title: 'Palasgad Peak', desc: 'The third peak — the most remote and least visited. For completionists who want to bag all three summits.', mustSee: false },
            { title: 'Rock-Cut Cisterns', desc: 'Ancient water tanks on each peak. Some are large enough to sustain garrisons. Still hold water in monsoon.', mustSee: false }
        ],

        food: [
            { name: 'Base Village Meals', type: 'Veg', price: '₹60-120', desc: 'Simple meals at Mahuli village — dal-rice, bhakri-pithla, poha. Available on request at some homes.' },
            { name: 'Shahapur Dhabas', type: 'Veg / Non-Veg', price: '₹80-150', desc: 'Shahapur town (15 km) has roadside dhabas and restaurants for a proper meal before/after the trek.' },
            { name: 'Carry Your Food', type: 'All', price: '₹0', desc: 'Best to carry your own supply — energy bars, trail mix, sandwiches. The trek is demanding and you\'ll need fuel.' },
            { name: 'Sugarcane Juice', type: 'Beverage', price: '₹20-30', desc: 'Roadside sugarcane juice stalls near Shahapur — the perfect post-trek energy booster in warm weather.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Mahuli Village (Standard)', difficulty: 'Hard', distance: '5 km', time: '3-4 hours', desc: 'The main route from Mahuli base village. Gradual at first through forest, then increasingly steep with the rock patch near the summit. Demanding but rewarding.' },
            { icon: '🧗', title: 'Mahuli + Bhandargad Ridge', difficulty: 'Hard', distance: '7 km', time: '5-6 hours', desc: 'Summit Mahuli, then traverse the ridge to Bhandargad. The ridge walk has some exposed sections. Adds 2 hours to the standard trek.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚂', desc: 'Train from Mumbai CST to Asangaon station (Central line). From Asangaon, auto to Mahuli base village (10 km). This is the cheapest and most popular approach.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Mahuli village via Shahapur. From Mumbai: ~80 km (2 hrs) via Kasara Ghat road. Park at village. From Pune: ~180 km (4 hrs).' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Mumbai to Shahapur. Auto from Shahapur to Mahuli village (15 km).' }
        ],

        trekEssentials: [
            'Good trekking shoes with grip — rock scrambling section is mandatory',
            'Carry 2-3 litres water — no reliable source on the trail',
            'Gloves helpful for the rock patch (optional but useful)',
            'Start early (6-7 AM) — allow enough daylight for the trek',
            'Carry food — nothing available on the trail',
            'First aid kit — rock patch injuries are common',
            'Monsoon: extra caution — rocks become extremely slippery',
            'Go in a group — solo trekking not recommended for beginners'
        ],

        safetyAlerts: [
            { msg: 'Rock scrambling section is exposed — requires hands-and-feet climbing', season: 'All year' },
            { msg: 'Rock patches become waterfalls in monsoon — extreme caution needed', season: 'June-Sept' },
            { msg: 'Wildlife sanctuary has leopards — make noise while trekking', season: 'All year' },
            { msg: 'Ridge walk to Bhandargad has exposed sections — not for vertigo', season: 'All year' }
        ],

        budget: [
            { label: 'Train (from Mumbai CST)', value: '₹30-50' },
            { label: 'Auto (Asangaon-Mahuli)', value: '₹50-100' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹60-120' },
            { label: 'Total', value: '₹140-270', highlight: true }
        ],

        facilities: [
            { label: 'Food', available: true, detail: 'Base village (limited)' },
            { label: 'Water', available: true, detail: 'Base village only' },
            { label: 'Toilets', available: false, detail: 'None on trail' },
            { label: 'Parking', available: true, detail: 'At base village' },
            { label: 'Mobile Network', available: true, detail: 'Patchy on fort' },
            { label: 'Train Access', available: true, detail: 'Asangaon station (10 km)' }
        ],

        quickFacts: [
            { label: 'Fort Name', value: 'Mahuli (Triple Peak)' },
            { label: 'District', value: 'Thane' },
            { label: 'Altitude', value: '858 m (2,815 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Giri Durg)' },
            { label: 'Triple Complex', value: 'Mahuli + Bhandargad + Palasgad' },
            { label: 'Built By', value: 'Bahmani dynasty' },
            { label: 'Sanctuary', value: 'Mahuli Wildlife Sanctuary' },
            { label: 'Difficulty', value: 'Hard — rock scrambling' },
            { label: 'Kids Appropriate', value: 'No — rock climbing section' },
            { label: 'Best Combined', value: 'Train from Mumbai + Mahuli day trip' }
        ],

        reviews: {
            quote: "Mahuli is Mumbai's best-kept trekking secret — take a local train to Asangaon, trek through a wildlife sanctuary, scramble up a rock face, and stand on the tallest fort in Thane. All in a day trip!",
            positives: [
                'Closest serious trek to Mumbai (train accessible!)',
                'Rock scrambling adds genuine adventure',
                'Triple peak complex offers multiple summit experiences',
                'Wildlife sanctuary setting is beautiful',
                'Budget-friendly — train + auto = under ₹200'
            ],
            proTips: [
                'Take the 5:30 AM local train from CST for an early start',
                'Trek Mahuli + Bhandargad for the full experience',
                'Carry gloves for the rock patch',
                'Visit Oct-Dec for clear views and comfortable weather',
                'Fill water at village — nothing available on the trail'
            ],
            rating: 4.5,
            reviewCount: '9,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 19. GHANGAD FORT ━━━━━━━━━━━━━━━━━━
    ghangad: {
        introduction: `Ghangad is the crown jewel of Tamhini Ghat trekking — a scenic hill fort at 945 metres 
            that offers some of the most spectacular monsoon views in the entire Sahyadri range. Located near 
            the dramatic Tailbaila twin pinnacles, Ghangad rewards trekkers with sweeping green valleys, 
            cascading waterfalls, and mist-shrouded ridges that look like something from a fantasy film. 
            While not as historically prominent as some forts, Ghangad's strategic position above the 
            Tamhini Ghat — the ancient route connecting Pune to the Konkan coast — made it a valuable 
            Maratha outpost. Today, it's the monsoon trekker's paradise.`,

        quote: {
            text: "घनगड — ताम्हिणी घाटातला पावसाळ्यातला स्वर्ग",
            attribution: "On Ghangad being Tamhini's monsoon paradise"
        },

        timeline: [
            { year: 'Pre-1600s', title: 'Ancient Fortification', desc: 'The original builders are unknown, but fortification remains suggest pre-Maratha era construction to control the Tamhini Ghat pass.' },
            { year: '1660s', title: 'Maratha Usage', desc: 'Shivaji Maharaj\'s forces used Ghangad as an outpost to monitor and control the Tamhini Ghat approach to Pune from the Konkan coast.' },
            { year: '1700s', title: 'Peshwa Period', desc: 'During the Peshwa era, Ghangad continued to serve as a frontier observation post. The bastions and walls were maintained during this period.' },
            { year: '1818', title: 'British Era', desc: 'Ceded to the British along with other Sahyadri forts. The remote location meant it was quickly abandoned and reclaimed by vegetation.' },
            { year: 'Present', title: 'Trekking Destination', desc: 'Ghangad has become one of the most popular monsoon treks near Pune, known for its proximity to Tailbaila and the stunning Tamhini scenery.' }
        ],

        landmarks: [
            { title: 'Tailbaila View', desc: 'From Ghangad\'s ramparts, the dramatic twin pinnacles of Tailbaila are visible — jagged rock spires rising from the green valley. One of the most photographed views in the Sahyadris.', mustSee: true },
            { title: 'Tamhini Valley Panorama', desc: 'The western rampart offers a vast panorama of the Tamhini Ghat valley — during monsoon, this entire landscape turns emerald green with dozens of waterfalls streaming down every cliff.', mustSee: true },
            { title: 'Fort Summit & Temple', desc: 'A small Shiva temple at the summit marks the highest point. The 360° views from here encompass Tailbaila, Sudhagad, Tung, and the Tamhini forest canopy.', mustSee: true },
            { title: 'Rock-Cut Steps', desc: 'Ancient steps carved into the hillside leading to the fort. Some sections are steep and narrow, adding adventure to the approach.', mustSee: false },
            { title: 'Monsoon Waterfalls', desc: 'During June-September, the trail to Ghangad is flanked by seasonal waterfalls. The entire landscape becomes a water wonderland.', mustSee: false },
            { title: 'Fortification Remains', desc: 'Partial walls and bastions visible around the summit perimeter. Not as well-preserved as major forts, but enough to imagine the outpost\'s layout.', mustSee: false }
        ],

        food: [
            { name: 'Tamhini Ghat Dhabas', type: 'Veg / Non-Veg', price: '₹80-150', desc: 'A few roadside eateries on the Tamhini Ghat road serve hot meals — vada pav, bhaji, chai. Simple but perfect for a monsoon trek stop.' },
            { name: 'Carry Your Food', type: 'All', price: '₹0', desc: 'Best to carry trek food — sandwiches, trail mix, energy bars. No stalls on the trail to Ghangad.' },
            { name: 'Mulshi Dam Area', type: 'Veg / Non-Veg', price: '₹100-200', desc: 'Several restaurants and dhabas near Mulshi Dam (en route from Pune). Good for a post-trek meal.' },
            { name: 'Corn & Bhutta', type: 'Veg', price: '₹20-30', desc: 'Roasted corn from roadside vendors on Tamhini Ghat during monsoon. The seasonal vibe is unbeatable.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Ekole Village (Standard)', difficulty: 'Medium', distance: '4 km', time: '90-120 min', desc: 'The most popular route from Ekole village on Tamhini Ghat road. Forest trail leading to steep climb near summit. The views open up dramatically in the last section.' },
            { icon: '⛰️', title: 'Via Kotkamthe Village', difficulty: 'Medium', distance: '3.5 km', time: '90 min', desc: 'Alternative approach from the northern side. Slightly steeper but more direct. Good monsoon waterfall views on the trail.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Ekole village on Tamhini Ghat road. From Pune: ~55 km (1.5 hrs) via Mulshi Dam. From Mumbai: ~130 km (3 hrs) via Tamhini Ghat.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Extremely popular monsoon ride from Pune via Mulshi-Tamhini Ghat. One of the most scenic routes in Maharashtra. Park at Ekole and trek.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune to Mangaon (Tamhini Ghat road). Get off at Ekole village stop. Buses are infrequent — own vehicle recommended.' }
        ],

        trekEssentials: [
            'Waterproof trekking shoes — trail is muddy and slippery in monsoon',
            'Full rain gear — poncho or rain jacket mandatory in monsoon',
            'Carry 1.5 litres water and food — nothing on trail',
            'Leech socks or salt — leeches active June-September',
            'Quick-dry clothes — you will get thoroughly soaked in monsoon',
            'Waterproof phone cover — protect electronics',
            'Start early — Tamhini Ghat gets misty in afternoon',
            'Carry a change of clothes in waterproof bag'
        ],

        safetyAlerts: [
            { msg: 'Tamhini Ghat road is extremely misty and slippery in monsoon — drive carefully', season: 'June-Sept' },
            { msg: 'Leeches are very active on the trail in monsoon', season: 'June-Sept' },
            { msg: 'Rock-cut steps near summit get slippery — use caution', season: 'June-Sept' },
            { msg: 'Fog can reduce visibility to near-zero — don\'t wander off trail', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport (from Pune)', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹80-150' },
            { label: 'Total', value: '₹180-450', highlight: true }
        ],

        facilities: [
            { label: 'Food', available: true, detail: 'Ghat road dhabas' },
            { label: 'Water', available: true, detail: 'Ghat road only' },
            { label: 'Toilets', available: false, detail: 'None on trail' },
            { label: 'Parking', available: true, detail: 'Ekole roadside' },
            { label: 'Mobile Network', available: true, detail: 'Patchy in ghat' },
            { label: 'Camping', available: true, detail: 'Summit plateau (monsoon camping!)' }
        ],

        quickFacts: [
            { label: 'Fort Name', value: 'Ghangad' },
            { label: 'District', value: 'Pune (Mulshi taluka)' },
            { label: 'Altitude', value: '945 m (3,100 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Giri Durg)' },
            { label: 'Ghat', value: 'Tamhini Ghat' },
            { label: 'Nearby Pinnacle', value: 'Tailbaila (twin spires)' },
            { label: 'Best Season', value: 'Monsoon (July-Sept)' },
            { label: 'Difficulty', value: 'Moderate' },
            { label: 'Kids Appropriate', value: 'Age 10+ (monsoon slippery)' },
            { label: 'Best Combined', value: 'Tamhini Ghat drive + Mulshi' }
        ],

        reviews: {
            quote: "Ghangad in monsoon is like trekking through a Tolkien landscape — mist, waterfalls, green valleys as far as the eye can see, and the dramatic Tailbaila spires in the distance. Pure magic.",
            positives: [
                'Monsoon views are among the best in the Sahyadris',
                'Tailbaila twin pinnacles are a stunning sight',
                'Tamhini Ghat drive itself is an experience',
                'Moderate difficulty — accessible to most trekkers',
                'Less crowded than Lonavala-area forts'
            ],
            proTips: [
                'Visit specifically in monsoon (July-Aug) for the best experience',
                'The Tamhini Ghat drive from Pune is half the fun',
                'Carry leech socks or tucked-in pants with salt',
                'Combine with Tamhini waterfalls visit on the same day',
                'Post-trek meal at a Mulshi dam-side restaurant — perfect ending'
            ],
            rating: 4.3,
            reviewCount: '8,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 20. KULABA (KOLABA) FORT ━━━━━━━━━━━━━━━━━━
    kulaba: {
        introduction: `Kulaba Fort (also spelled Kolaba) at Alibaug is one of Maharashtra's most accessible 
            and unique sea forts — during low tide, you can literally walk across the seabed to reach it! 
            Built by Chhatrapati Shivaji Maharaj himself in 1680, Kulaba holds the distinction of being 
            one of the last forts he personally commissioned. It was later the headquarters of the legendary 
            Maratha Admiral Kanhoji Angre, whose fleet terrorized the British, Portuguese, and Dutch navies 
            from this very base. Rising dramatically from the Arabian Sea just 1.5 km from Alibaug beach, 
            with its iconic gateway, temple, and crumbling bastions, Kulaba is the perfect introduction 
            to Maharashtra's sea fort heritage.`,

        quote: {
            text: "कुलाबा — शिवरायांनी स्वतः बांधलेला, कान्होजी आंग्रेंचा अजिंक्य तळ",
            attribution: "On Kulaba being Shivaji's creation and Kanhoji Angre's base"
        },

        timeline: [
            { year: '1680', title: '🏗️ Built by Shivaji Maharaj', desc: 'Chhatrapati Shivaji Maharaj personally ordered the construction of Kulaba Fort to strengthen Maratha control over the Alibaug coast. One of the last forts he commissioned.' },
            { year: '1698-1729', title: '⚓ Kanhoji Angre Era', desc: 'Admiral Kanhoji Angre made Kulaba his primary naval headquarters. From here, his fleet of warships dominated the Arabian Sea, defeating European navies repeatedly.' },
            { year: '1733', title: 'British Attack Repelled', desc: 'The British East India Company attacked Kulaba but was repelled by Maratha naval forces. The fort\'s sea-based position made it extremely difficult to assault.' },
            { year: '1756', title: 'Fall of Kulaba', desc: 'A combined British-Peshwa fleet finally captured Kulaba from Tulaji Angre (Kanhoji\'s successor). This ended the Angre dynasty\'s naval dominance.' },
            { year: '1818', title: 'British Control', desc: 'The fort was formally ceded to British East India Company. They decommissioned the naval base. Alibaug became a quiet coastal town.' },
            { year: 'Present', title: 'Tourist Attraction', desc: 'Kulaba is now Alibaug\'s top landmark. Walkable at low tide, it attracts thousands of weekend visitors from Mumbai, just a ferry ride away.' }
        ],

        landmarks: [
            { title: 'Main Gateway (Maha Darwaza)', desc: 'The iconic arched entrance gate rising from the sea — the most photographed feature of Kulaba. Ornate stone carvings and a tiger motif represent Maratha naval power. Dramatic at all tides.', mustSee: true },
            { title: 'Siddhivinayak Temple', desc: 'A well-maintained Ganpati temple inside the fort. Actively worshipped by local fishermen. The temple adds spiritual significance to the historical fort.', mustSee: true },
            { title: 'Padmavati Temple', desc: 'Another temple inside the fort dedicated to Goddess Padmavati. During festivals, processions walk across the seabed to reach these temples.', mustSee: true },
            { title: 'Bastions & Cannons', desc: 'Several intact bastions with original cannons still pointing out to sea. Walk along the ramparts imagining Kanhoji Angre\'s fleet sailing out to battle.', mustSee: true },
            { title: 'Sweet Water Well', desc: 'A freshwater well inside the sea fort — remarkable engineering that provides potable water despite being surrounded by saltwater.', mustSee: false },
            { title: 'Low-Tide Walking Path', desc: 'The 1.5 km walk from Alibaug beach to the fort across the exposed seabed is an experience itself. Crabs, shells, and sea anemones dot the path.', mustSee: false }
        ],

        food: [
            { name: 'Alibaug Seafood', type: 'Non-Veg', price: '₹150-300', desc: 'Alibaug is a seafood paradise — fresh surmai, pomfret, prawns, and crab in coastal Maharashtrian preparations. Try the beach-side shacks after fort visit.' },
            { name: 'Sol Kadhi', type: 'Beverage', price: '₹20-30', desc: 'The essential Konkan accompaniment — cool, pink kokum-coconut milk drink. Every restaurant in Alibaug serves this.' },
            { name: 'Modak', type: 'Sweet', price: '₹10-20/piece', desc: 'Traditional steamed coconut-jaggery dumplings. Alibaug makes excellent modak, especially during Ganesh Chaturthi season.' },
            { name: 'Tawa Fry Fish', type: 'Non-Veg', price: '₹100-200', desc: 'Fresh catch fried on a hot tawa with minimal spices — letting the fish flavor shine. Beach-side stalls near Alibaug beach serve this.' },
            { name: 'Tender Coconut', type: 'Beverage', price: '₹30-50', desc: 'Fresh nariyal pani from Alibaug\'s coconut groves. The perfect refreshment after walking back from the fort through the sea.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Walk at Low Tide (Only Way)', difficulty: 'Easy', distance: '1.5 km each way', time: '20-30 min walk + 1 hour fort', desc: 'Walk from Alibaug beach across the exposed seabed to the fort at low tide. The water recedes to knee-level. Explore the fort for an hour, then walk back before tide comes in.' }
        ],

        howToReach: [
            { mode: 'By Ferry', icon: '⛴️', desc: 'Ferry from Gateway of India (Mumbai) to Mandwa Jetty (1 hr). Then auto/taxi to Alibaug beach (20 min). The ferry ride across Mumbai harbor is scenic.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Mumbai via Panvel-Pen-Alibaug road (95 km, 2.5 hrs). From Pune: via Tamhini Ghat to Alibaug (140 km, 3.5 hrs). Parking at Alibaug beach.' },
            { mode: 'By Ro-Ro Ferry', icon: '🚗', desc: 'Car + passenger ferry from Dharamtar to Rewas (30 min). Then drive to Alibaug (18 km). Saves the 3-hour road trip from Mumbai.' }
        ],

        trekEssentials: [
            'CHECK TIDE TIMINGS before visiting — fort is accessible only at low tide',
            'Wear waterproof sandals/shoes — you walk through shallow water',
            'Apply sunscreen — no shade on the seabed walk',
            'Carry water — limited inside the fort',
            'Time your visit: reach the fort 1 hour before lowest tide',
            'Come back before tide starts rising — water level changes fast',
            'Carry a waterproof bag for phone and valuables',
            'Avoid monsoon — seas are rough and fort access is dangerous'
        ],

        safetyAlerts: [
            { msg: 'CRITICAL: Check tide timings — getting stranded at high tide is dangerous', season: 'All year' },
            { msg: 'Seabed has sharp rocks and shells — wear protective footwear', season: 'All year' },
            { msg: 'Do NOT attempt in monsoon — rough seas and strong currents', season: 'June-Sept' },
            { msg: 'Sea-facing walls have no railings — stay back from edges', season: 'All year' }
        ],

        budget: [
            { label: 'Ferry (Mumbai-Mandwa)', value: '₹150-250' },
            { label: 'Auto (Mandwa-Alibaug)', value: '₹50-100' },
            { label: 'Entry', value: 'Free' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Total', value: '₹350-650', highlight: true }
        ],

        facilities: [
            { label: 'Food', available: true, detail: 'Alibaug beach area' },
            { label: 'Water', available: true, detail: 'Beach vendors' },
            { label: 'Toilets', available: true, detail: 'At Alibaug beach' },
            { label: 'Parking', available: true, detail: 'Alibaug beach lot' },
            { label: 'Mobile Network', available: true, detail: 'Good coverage' },
            { label: 'Ferry Service', available: true, detail: 'Mumbai-Mandwa (frequent)' }
        ],

        quickFacts: [
            { label: 'Also Known As', value: 'Kolaba Fort' },
            { label: 'District', value: 'Raigad (Alibaug)' },
            { label: 'Fort Type', value: 'Sea Fort (Jal Durg)' },
            { label: 'Built By', value: 'Chhatrapati Shivaji Maharaj' },
            { label: 'Year Built', value: '1680' },
            { label: 'Famous For', value: 'Kanhoji Angre\'s headquarters' },
            { label: 'Access', value: 'Walk at low tide (1.5 km)' },
            { label: 'From Mumbai', value: 'Ferry + auto (1.5 hrs total)' },
            { label: 'Kids Appropriate', value: 'Yes (age 5+, check tides)' },
            { label: 'Best Combined', value: 'Alibaug beaches + Murud-Janjira' }
        ],

        reviews: {
            quote: "Walking across the sea at low tide to reach Kulaba Fort — water at your ankles, the fort gateway growing larger with every step — is one of the most magical experiences in Maharashtra tourism.",
            positives: [
                'Walking to a sea fort through the sea is magical',
                'Built by Shivaji Maharaj himself — authentic history',
                'Easy access from Mumbai via ferry',
                'Active temples add spiritual dimension',
                'Alibaug\'s seafood scene is excellent'
            ],
            proTips: [
                'Check tide timings on tide-forecast.com before planning',
                'Take the ferry from Gateway of India — the ride is half the fun',
                'Reach fort 1 hour before lowest tide for maximum time inside',
                'Wear waterproof sandals with grip — the seabed is rocky',
                'Combine with Alibaug beach hopping and seafood lunch'
            ],
            rating: 4.4,
            reviewCount: '16,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 11. VISAPUR FORT ━━━━━━━━━━━━━━━━━━
    visapur: {
        introduction: `Visapur Fort is a massive hill fort near Lonavala, famous for its vast plateau, ancient ruins, 
            and breathtaking monsoon views. Built by the Marathas during the Peshwa era, it is one of the most 
            popular trekking destinations in Maharashtra. The twin fort of Lohagad, Visapur is actually the larger 
            and more imposing of the pair, with sprawling ruins, rock-cut cisterns, and unmatched panoramic views 
            of the Sahyadri range.`,

        quote: {
            text: "गड जिंकला म्हणजे स्वराज्याचा विजय!",
            attribution: "Maratha war philosophy"
        },

        timeline: [
            { year: '1713', title: 'Fort Construction', desc: 'Built by Balaji Vishwanath, the first Peshwa of the Maratha Empire, as a strategic companion to the older Lohagad Fort.' },
            { year: '1818', title: 'British Attack', desc: 'British forces attacked and captured Visapur using heavy artillery during the Third Anglo-Maratha War. The fort fell after a fierce bombardment.' },
            { year: '1818', title: 'Destruction of Fortifications', desc: 'Major structures were systematically destroyed by the British to permanently weaken Maratha resistance and prevent future rebellions.' },
            { year: 'Present', title: 'Popular Tourist & Trekking Destination', desc: 'Now a beloved monsoon trekking destination near Pune and Mumbai, attracting thousands of trekkers annually for its lush green scenery and historical ruins.' }
        ],

        landmarks: [
            { title: 'Main Entrance Gate', desc: 'Historic stone entrance showcasing strong Maratha fort architecture with imposing walls and carved stonework. The gateway is well-preserved and sets the tone for the fort exploration.', mustSee: true },
            { title: 'Rock-Cut Water Cisterns', desc: 'Ancient rock-cut tanks that miraculously still store water year-round. These cisterns sustained the fort garrison and remain an impressive feat of ancient engineering.', mustSee: true },
            { title: 'Hanuman Carving', desc: 'A beautiful and well-preserved carving of Lord Hanuman near the entrance gate. A testament to the spiritual traditions of the Maratha warriors who worshipped here.', mustSee: true },
            { title: 'British-era Cannons', desc: 'Old British-era cannons scattered across the fort plateau, remnants of the fierce 1818 battle that decided the fort\'s fate.', mustSee: true },
            { title: 'Fort Walls & Bastions', desc: 'Extensive fortification walls running along the plateau edge, offering panoramic valley views of Pawna Lake, Lohagad, Tung, and Tikona forts.', mustSee: true },
            { title: 'Summit Plateau', desc: 'A vast open area ideal for exploration and photography. During monsoon, the entire plateau turns emerald green with cascading waterfalls on every side.', mustSee: true }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Traditional Maharashtrian besan curry with jowar/bajri bhakri. Available at base villages like Patan and Bhaje.' },
            { name: 'Maggi & Snacks', type: 'Veg', price: '₹30-80', desc: 'Quick trail snacks available at trek starting points. Maggi is the ultimate trekker fuel in the Sahyadris.' },
            { name: 'Vada Pav', type: 'Veg', price: '₹15-25', desc: 'Maharashtra\'s iconic spiced potato fritter in a pav bun — available at roadside stalls near Lonavala and Malavli.' },
            { name: 'Chai (Tea)', type: 'Beverage', price: '₹10-20', desc: 'Hot ginger tea available at the base villages. The perfect energy boost before the climb.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Lohagad Side (Patan Village Route)', difficulty: 'Easy', distance: '3 km', time: '60-90 min', desc: 'The easiest and most commonly used route. The trail is wide and gradual, making it suitable for beginners and families. It connects from Lohagad side via Patan village.' },
            { icon: '⛰️', title: 'Bhaje Caves Route', difficulty: 'Medium-Hard', distance: '4 km', time: '90-120 min', desc: 'This route starts near the ancient Bhaje Caves and involves steep climbs, rocky patches, and forest trails. It becomes slippery during monsoon and is recommended only for experienced trekkers.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚆', desc: 'Nearest railway station is Malavli (2 km from base) on the Mumbai-Pune local/express line. From Malavli, take an auto or walk to the base village.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive via Mumbai-Pune Expressway to Lonavala, then head towards Patan village. Parking available at the base. ~110 km from Mumbai, ~65 km from Pune.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses and private buses available to Lonavala from Mumbai and Pune. From Lonavala, take local transport to Malavli or Patan base village.' }
        ],

        trekEssentials: [
            'Good trekking shoes with anti-slip grip — monsoon trails are slippery',
            'Carry 2-3 litres of water per person — no reliable source at top',
            'Raincoat or poncho during monsoon season (June-Sept)',
            'Snacks and energy bars — no food stalls on the fort',
            'Basic first aid kit — nearest hospital is in Lonavala',
            'Torch or flashlight for early morning or late return',
            'Power bank — limited mobile signal at the top',
            'Camera — the monsoon views are spectacular'
        ],

        safetyAlerts: [
            { msg: 'Trails become extremely slippery during monsoon — wear proper grip shoes', season: 'June-Sept' },
            { msg: 'Strong and unpredictable winds at the top plateau — secure your belongings', season: 'All year' },
            { msg: 'No railings near cliff edges — maintain safe distance, especially in fog', season: 'All year' },
            { msg: 'Avoid trekking after sunset — trails are unlit and dangerous at night', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Food', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹300-800', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Available at Patan village' },
            { label: 'Drinking Water', available: false, detail: 'Not reliable — carry your own' },
            { label: 'Toilets', available: false, detail: 'Not available on the fort' },
            { label: 'Mobile Network', available: true, detail: 'Limited / patchy at top' },
            { label: 'Food Stalls', available: false, detail: 'Only at base villages' },
            { label: 'Camping', available: true, detail: 'Open plateau — carry tent' }
        ],

        quickFacts: [
            { label: 'District', value: 'Pune' },
            { label: 'Altitude', value: '1,084 m (3,556 ft)' },
            { label: 'Built By', value: 'Peshwa Balaji Vishwanath' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Best Season', value: 'Monsoon (June-Sept)' },
            { label: 'Difficulty', value: 'Easy to Moderate' },
            { label: 'Twin Fort', value: 'Lohagad Fort' },
            { label: 'Nearest Station', value: 'Malavli (2 km)' },
            { label: 'Kids Appropriate', value: 'Yes (Patan route)' },
            { label: 'Best Combined', value: 'Lohagad + Bhaje Caves' }
        ],

        reviews: {
            quote: "One of the best monsoon treks near Pune with stunning views and waterfalls everywhere! The vast plateau feels like walking on clouds during the rains.",
            positives: [
                'Easy trek option available via Patan route',
                'Breathtaking monsoon scenery with waterfalls',
                'Large fort area to explore and camp',
                'Rich historical significance — Peshwa era fort',
                'Spectacular views of Pawna Lake and surrounding forts'
            ],
            proTips: [
                'Start early morning to avoid afternoon heat and crowds',
                'Choose your route based on experience — Patan for beginners, Bhaje for adventurers',
                'Wear anti-slip shoes — the rocks get very slippery in monsoon',
                'Carry enough water — there are no shops on the fort',
                'Combine with Lohagad Fort for a full-day twin-fort trek'
            ],
            rating: 4.5,
            reviewCount: '10,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 12. ROHIDA FORT (VICHITRAGAD) ━━━━━━━━━━━━━━━━━━
    rohida: {
        introduction: `Rohida Fort, also known as Vichitragad, is a historic hill fort in Satara district known 
            for its strong fortifications, ancient gates, and scenic Sahyadri views. Captured by Chhatrapati 
            Shivaji Maharaj from the Adilshahi in 1656 during the early expansion of Swarajya, it served as 
            a strategic military outpost. The fort is a perfect destination for beginners and history lovers, 
            offering a relatively easy trek with rewarding panoramic views.`,

        quote: {
            text: "स्वराज्याची प्रत्येक किल्ला ही स्वाभिमानाची ओळख आहे.",
            attribution: "Maratha legacy"
        },

        timeline: [
            { year: '1656', title: 'Captured by Shivaji Maharaj', desc: 'Rohida Fort was captured by Chhatrapati Shivaji Maharaj from the Adilshahi sultanate during the early expansion of Swarajya in the Satara region.' },
            { year: '17th Century', title: 'Strategically Strengthened', desc: 'The fort was strengthened with additional bastions, walls, and gates, and used as a key strategic military post in the Maratha defense network.' },
            { year: '1818', title: 'British Control', desc: 'Captured by the British East India Company during the fall of the Maratha Empire in the Third Anglo-Maratha War.' },
            { year: 'Present', title: 'Trekking & Tourism', desc: 'Now a popular trekking destination with well-preserved gates, walls, and a temple — attracting history lovers and weekend trekkers.' }
        ],

        landmarks: [
            { title: 'Three Entrance Gates', desc: 'Rohida features three well-preserved gates with unique carvings and inscriptions. Each gate is designed with sharp turns and narrow passages — classic Maratha defensive architecture.', mustSee: true },
            { title: 'Bastions', desc: 'Strong bastions positioned at strategic corners offering panoramic 360° views of the surrounding Sahyadri valleys and Bhor ghat.', mustSee: true },
            { title: 'Rohideshwar Temple', desc: 'An ancient temple dedicated to Lord Shiva located at the summit of the fort. Well-maintained and still active — a serene spot for prayer and rest after the climb.', mustSee: true },
            { title: 'Rock-Cut Water Tanks', desc: 'Ancient rock-cut water cisterns carved into the plateau, used to store rainwater for the garrison during sieges. Some still hold water during monsoon.', mustSee: true },
            { title: 'Fort Walls', desc: 'Well-preserved fortification walls showcasing classic Maratha stone masonry. Walking along them offers stunning views of the valley below.', mustSee: true }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Classic Maharashtrian besan curry with jowar bhakri — available at Bazarwadi and nearby villages.' },
            { name: 'Thecha Bhakri', type: 'Veg', price: '₹60-100', desc: 'Fiery green chilli-garlic paste with crispy bhakri — a Sahyadri trekking staple that packs a punch.' },
            { name: 'Tea & Snacks', type: 'Beverage', price: '₹20-50', desc: 'Basic tea and biscuits available at the base village Bazarwadi. Simple but essential trekker fuel.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Bazarwadi Village Route', difficulty: 'Easy to Moderate', distance: '2.5 km', time: '60-90 min', desc: 'The most popular and well-defined route. Suitable for beginners with a gradual ascent through forest and grassland. Well-marked trail leading through all three entrance gates.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune to Bhor (~60 km), then continue to Bazarwadi village (base). About 2 hours from Pune. Parking available at the village.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses available from Pune (Swargate) to Bhor town. From Bhor, take local transport or shared auto to Bazarwadi village.' },
            { mode: 'By Train', icon: '🚆', desc: 'Nearest railway station is Pune. From Pune, travel by road via Bhor to the base village (~70 km total).' }
        ],

        trekEssentials: [
            'Good trekking shoes — some rocky sections near the top',
            'Carry 2 litres of water — no water source on the fort',
            'Cap and sunglasses for sun protection',
            'Snacks and energy bars — no food stalls on the fort',
            'Basic first aid kit',
            'Raincoat during monsoon season',
            'Power bank — limited network coverage'
        ],

        safetyAlerts: [
            { msg: 'Trails become slippery during monsoon — wear proper grip shoes', season: 'June-Sept' },
            { msg: 'Steep sections near the final climb require caution', season: 'All year' },
            { msg: 'No railings near fort edges — maintain safe distance', season: 'All year' },
            { msg: 'Carry enough water — no reliable source on the fort', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-400' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹300-600', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Available at Bazarwadi' },
            { label: 'Drinking Water', available: false, detail: 'Carry your own' },
            { label: 'Toilets', available: false, detail: 'Not available on fort' },
            { label: 'Mobile Network', available: true, detail: 'Limited / patchy signal' },
            { label: 'Food Stalls', available: false, detail: 'Only at base village' },
            { label: 'Camping', available: true, detail: 'Open plateau area' }
        ],

        quickFacts: [
            { label: 'District', value: 'Satara' },
            { label: 'Altitude', value: '1,100 m (3,609 ft)' },
            { label: 'Also Known As', value: 'Vichitragad' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Captured By', value: 'Shivaji Maharaj (1656)' },
            { label: 'Best Season', value: 'Monsoon & Winter' },
            { label: 'Difficulty', value: 'Easy to Moderate' },
            { label: 'Base Village', value: 'Bazarwadi' },
            { label: 'Kids Appropriate', value: 'Yes (with care)' },
            { label: 'Best Combined', value: 'Rajgad + Torna circuit' }
        ],

        reviews: {
            quote: "Perfect beginner trek with strong historical vibes and amazing views! The three entrance gates are beautifully preserved and the sunrise from the top is unforgettable.",
            positives: [
                'Easy trek suitable for beginners and families',
                'Well-preserved three entrance gates',
                'Less crowded than popular Pune forts',
                'Scenic Sahyadri views from the bastions',
                'Active Rohideshwar temple at the summit'
            ],
            proTips: [
                'Start early morning for a stunning sunrise trek',
                'Carry enough water — there are no shops on the fort',
                'Visit during monsoon for lush green scenery',
                'Explore all three gates properly — each has unique features',
                'Combine with Rajgad or Torna for a multi-fort weekend trip'
            ],
            rating: 4.4,
            reviewCount: '3,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 13. PRABALGAD FORT ━━━━━━━━━━━━━━━━━━
    prabalgad: {
        introduction: `Prabalgad Fort, located between Matheran and Panvel in Raigad district, is a rugged hill 
            fort known for its steep climb and thrilling exposed rock sections near the summit. Rising dramatically 
            next to the iconic Kalavantin Durg pinnacle, it offers breathtaking views of the surrounding Sahyadri 
            ranges and is a favorite among experienced trekkers seeking an adrenaline-pumping adventure.`,

        quote: {
            text: "साहसातच खरे जीवन आहे.",
            attribution: "Maratha spirit"
        },

        timeline: [
            { year: 'Pre-17th Century', title: 'Ancient Origins', desc: 'Originally used as a watchtower fort in the Konkan region, guarding the strategic route between Kalyan and Panvel.' },
            { year: '1657', title: 'Captured by Shivaji Maharaj', desc: 'Captured from the Mughals and incorporated into the growing Swarajya. Used as a lookout fort to monitor movements along the trade routes.' },
            { year: '17th Century', title: 'Strategic Lookout Post', desc: 'Utilized as a frontier lookout fort due to its commanding elevation and proximity to key trade routes connecting the Konkan coast to the Deccan plateau.' },
            { year: '1818', title: 'British Control', desc: 'Captured by British forces during the fall of the Maratha Empire in the Third Anglo-Maratha War.' }
        ],

        landmarks: [
            { title: 'Rock Traverse', desc: 'A narrow exposed rock section near the summit requiring careful hand-and-foot navigation. The most thrilling part of the trek — rewarding but requires extreme caution.', mustSee: true },
            { title: 'Kalavantin Durg View', desc: 'The iconic view of Kalavantin Durg — the dramatic pinnacle fort with its vertiginous rock-cut steps. One of the most photographed viewpoints in Maharashtra.', mustSee: true },
            { title: 'Fort Plateau', desc: 'A wide plateau at the summit offering panoramic 360° views of the Sahyadri ranges, Matheran plateau, and the Panvel-Mumbai urban sprawl in the distance.', mustSee: true },
            { title: 'Ruins of Old Structures', desc: 'Remains of ancient fort buildings, walls, and water cisterns scattered across the plateau — remnants of its military past.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Simple Maharashtrian meal available at Thakurwadi base village. Fuel up before the hard climb ahead.' },
            { name: 'Vada Pav', type: 'Veg', price: '₹15-25', desc: 'Maharashtra\'s iconic snack available near the base. Quick energy before the trek.' },
            { name: 'Tea & Snacks', type: 'Beverage', price: '₹20-50', desc: 'Basic tea and biscuits available at Thakurwadi village stalls. Pack your own food for the top.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Thakurwadi Route (Main)', difficulty: 'Hard', distance: '4 km', time: '120-150 min', desc: 'The most common route passing through dense forest and steep rocky sections, ending with an exposed and thrilling rock traverse near the summit. Well-trodden but demanding.' },
            { icon: '⛰️', title: 'Via Kalavantin Durg (Combined Trek)', difficulty: 'Hard', distance: '5 km', time: '150-180 min', desc: 'The popular combined trek — climb Kalavantin Durg first, then traverse the ridge to Prabalgad. Requires good stamina and a full day. The ultimate Sahyadri adventure.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚆', desc: 'Nearest railway station is Panvel on the Central/Harbour line. From Panvel station, take a taxi or shared auto to Thakurwadi village (~15 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive via Mumbai-Pune Expressway to Shedung Phata exit, then head to Thakurwadi village. ~65 km from Mumbai, ~120 km from Pune. Parking at the village.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses available from Mumbai to Panvel. From Panvel, take local transport or shared auto to Thakurwadi base village.' }
        ],

        trekEssentials: [
            'High-grip trekking shoes — essential for the rock traverse sections',
            'Carry 3 litres of water — no water source on the trail or fort',
            'Gloves for rock climbing sections near the summit',
            'Energy snacks and packed lunch — no food stalls on the fort',
            'First aid kit — the terrain is rough and injuries are possible',
            'Rain protection (poncho/raincoat) during monsoon season',
            'Torch or headlamp for early starts or late descents',
            'Do NOT attempt alone if inexperienced — go with a group'
        ],

        safetyAlerts: [
            { msg: 'Exposed rock traverse near the summit is DANGEROUS — extreme caution required, never rush', season: 'All year' },
            { msg: 'Avoid trekking during heavy monsoon — rocks become extremely slippery and life-threatening', season: 'June-Sept' },
            { msg: 'Steep sections and rock climbs are NOT suitable for beginners or children', season: 'All year' },
            { msg: 'No railings or safety barriers anywhere near the cliff edges — fatal falls have occurred', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Guide (optional)', value: '₹300-500' },
            { label: 'Total', value: '₹400-900', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Thakurwadi village' },
            { label: 'Drinking Water', available: false, detail: 'Carry sufficient water' },
            { label: 'Toilets', available: false, detail: 'Not available on fort' },
            { label: 'Mobile Network', available: true, detail: 'Limited connectivity' },
            { label: 'Food Stalls', available: false, detail: 'Only at base village' },
            { label: 'Local Guides', available: true, detail: '₹300-500 at village' }
        ],

        quickFacts: [
            { label: 'District', value: 'Raigad' },
            { label: 'Altitude', value: '831 m (2,726 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Best Season', value: 'Winter & Early Monsoon' },
            { label: 'Difficulty', value: 'Hard / Difficult' },
            { label: 'Base Village', value: 'Thakurwadi' },
            { label: 'Nearby Fort', value: 'Kalavantin Durg' },
            { label: 'Nearest Station', value: 'Panvel' },
            { label: 'Kids Appropriate', value: 'No (dangerous climbs)' },
            { label: 'Best Combined', value: 'Kalavantin Durg combo' }
        ],

        reviews: {
            quote: "One of the most thrilling treks in Maharashtra! The rock traverse and Kalavantin views are absolutely jaw-dropping. Not for the faint-hearted!",
            positives: [
                'Adventure-packed trek with real thrills',
                'Jaw-dropping views of Kalavantin Durg pinnacle',
                'Less crowded than mainstream forts',
                'Great challenge for experienced trekkers',
                'Stunning Sahyadri panorama from the plateau'
            ],
            proTips: [
                'Avoid during heavy rain — exposed sections become lethal',
                'Go with an experienced group or hire a local guide',
                'Wear high-grip trekking shoes — absolutely non-negotiable',
                'Carry plenty of water and snacks — nothing available on top',
                'Combine with Kalavantin Durg for the ultimate full-day adventure'
            ],
            rating: 4.6,
            reviewCount: '5,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 14. RATANGAD FORT ━━━━━━━━━━━━━━━━━━
    ratangad: {
        introduction: `Ratangad Fort, located in the Bhandardara region of Ahmednagar district, is one of the 
            most scenic forts in the Sahyadris. Famous for its natural rock arch called 'Nedhe' (Eye of the Needle), 
            lush forest trails, and spectacular views of Kalsubai peak and Arthur Lake, it offers a perfect blend 
            of adventure, history, and untouched nature — a must-do trek for every Sahyadri enthusiast.`,

        quote: {
            text: "निसर्ग आणि साहस यांचा संगम म्हणजे रतनगड.",
            attribution: "Sahyadri trekking culture"
        },

        timeline: [
            { year: '2000+ years ago', title: 'Ancient Origins', desc: 'Believed to be an ancient fort dating back over 2,000 years. The earliest structures were likely built by pre-medieval dynasties controlling the Sahyadri passes.' },
            { year: '1670', title: 'Captured by Shivaji Maharaj', desc: 'Became part of the growing Maratha Empire and was used to guard trade routes through the Bhandardara-Malshej region.' },
            { year: '17th Century', title: 'Strategic Frontier Fort', desc: 'Used as a key frontier fort to guard the surrounding trade routes and Sahyadri passes. Connected to the Harishchandragad-Kalsubai defense network.' },
            { year: '1818', title: 'British Control', desc: 'Captured by the British East India Company after the fall of the Maratha Empire in the Third Anglo-Maratha War.' }
        ],

        landmarks: [
            { title: 'Nedhe (Eye of the Needle)', desc: 'The iconic naturally formed rock arch at the edge of the fort — a window-like hole in the cliff offering jaw-dropping valley views. The most photographed spot on Ratangad and one of the most unique natural formations in the Sahyadris.', mustSee: true },
            { title: 'Ratangad Caves', desc: 'Spacious natural caves near the summit plateau used by trekkers for overnight camping. Can shelter 20-30 people comfortably. A magical experience during monsoon.', mustSee: true },
            { title: 'Trimbak Darwaza', desc: 'The main entrance gate of the fort — well-preserved Maratha-era gateway with carved stonework and defensive turns.', mustSee: true },
            { title: 'Rock-Cut Water Cisterns', desc: 'Ancient water tanks carved into the rock plateau. Some still hold clean rainwater during and after monsoon season.', mustSee: true },
            { title: 'Fort Plateau & Viewpoints', desc: 'A large open plateau at the summit offering panoramic 360° views of Kalsubai peak, Arthur Lake, Alang-Madan-Kulang range, and the entire Bhandardara valley.', mustSee: true }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹100-150', desc: 'Traditional Maharashtrian meal available at Ratanwadi village. Home-cooked by local families — simple, authentic, and delicious.' },
            { name: 'Maggi & Snacks', type: 'Veg', price: '₹40-80', desc: 'Basic trek snacks available at the base. Carry your own for the fort — no stalls on top.' },
            { name: 'Tea', type: 'Beverage', price: '₹10-20', desc: 'Hot chai available at small Ratanwadi village stalls. The perfect start before a long trek.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Ratanwadi Route (Main)', difficulty: 'Moderate', distance: '5 km', time: '120-150 min', desc: 'The most popular route starting from Ratanwadi village. Passes through beautiful forest and rocky patches, with metal ladders near the summit for the final ascent. Well-marked and scenic.' },
            { icon: '⛰️', title: 'Samrad Route', difficulty: 'Moderate to Hard', distance: '6 km', time: '150-180 min', desc: 'A longer and more adventurous route from Samrad village, passing through the Sandhan Valley region. Less crowded, more rugged, and deeply rewarding for experienced trekkers.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚆', desc: 'Nearest railway station is Igatpuri on the Central line. From Igatpuri, take a shared taxi or bus to Bhandardara (~50 km), then to Ratanwadi village.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune/Mumbai to Bhandardara via Igatpuri or Akole. From Bhandardara dam, continue to Ratanwadi village. ~200 km from Mumbai, ~180 km from Pune.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses available to Bhandardara from Nashik and Ahmednagar. From Bhandardara, take local transport to Ratanwadi base village.' }
        ],

        trekEssentials: [
            'Good trekking shoes — rocky sections and ladders near the summit',
            'Carry 2-3 litres of water per person',
            'Snacks and energy bars — limited food options on the fort',
            'First aid kit — remote location, nearest hospital is far',
            'Torch / headlamp if staying overnight in the caves',
            'Warm clothes for winter camping — temperatures drop significantly',
            'Raincoat / poncho during monsoon season',
            'Sleeping bag or mat if camping in the caves'
        ],

        safetyAlerts: [
            { msg: 'Metal ladders near summit require careful climbing — can be slippery in rain', season: 'All year' },
            { msg: 'Trails become very slippery during monsoon — wear proper grip shoes', season: 'June-Sept' },
            { msg: 'Dense forest areas — always stay on the marked trail, easy to get lost', season: 'All year' },
            { msg: 'Wildlife (snakes, scorpions) present in forest region — be cautious at night', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-700' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Stay (optional)', value: '₹200-500' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹500-1200', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Ratanwadi village' },
            { label: 'Drinking Water', available: true, detail: 'Cisterns available (not always clean)' },
            { label: 'Toilets', available: false, detail: 'Not available on fort' },
            { label: 'Mobile Network', available: false, detail: 'Very weak or no signal' },
            { label: 'Camping', available: true, detail: 'Caves near summit' },
            { label: 'Food Stalls', available: false, detail: 'Only at Ratanwadi village' }
        ],

        quickFacts: [
            { label: 'District', value: 'Ahmednagar' },
            { label: 'Altitude', value: '1,297 m (4,255 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Best Season', value: 'Monsoon & Winter' },
            { label: 'Difficulty', value: 'Moderate to Hard' },
            { label: 'Base Village', value: 'Ratanwadi' },
            { label: 'Famous For', value: 'Nedhe (Rock Arch)' },
            { label: 'Region', value: 'Bhandardara' },
            { label: 'Kids Appropriate', value: 'No (ladders & steep climbs)' },
            { label: 'Best Combined', value: 'Harishchandragad + Sandhan Valley' }
        ],

        reviews: {
            quote: "The Nedhe view is absolutely magical — one of the best treks in Maharashtra! Standing at the rock arch looking down into the valley is a once-in-a-lifetime experience.",
            positives: [
                'Unique Nedhe rock arch — unlike anything else in Maharashtra',
                'Beautiful forest trek through untouched Sahyadri wilderness',
                'Excellent camping in the summit caves',
                'Less crowded than popular Lonavala-Pune forts',
                'Stunning views of Kalsubai, Arthur Lake, and AMK range'
            ],
            proTips: [
                'Start early morning to reach the summit before afternoon heat',
                'Carry a torch / headlamp if planning an overnight cave stay',
                'Always follow marked trails — the dense forest makes it easy to get lost',
                'Avoid solo trekking — go with a group or hire a local guide from Ratanwadi',
                'Combine with Harishchandragad or Sandhan Valley for an epic multi-day trip'
            ],
            rating: 4.7,
            reviewCount: '6,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 15. HARIHAR FORT ━━━━━━━━━━━━━━━━━━
    harihar: {
        introduction: `Harihar Fort, located near Nashik in the Trimbak range, is one of the most thrilling and 
            iconic treks in Maharashtra. Famous for its near-vertical rock-cut steps carved at an 80° angle into 
            the mountainside, this fort offers a heart-pounding climb that rewards with breathtaking 360° views 
            of the Sahyadri mountain range. It is a bucket-list trek for every adrenaline seeker.`,

        quote: {
            text: "धैर्य आणि संतुलन हेच यशाचे खरे रहस्य आहे.",
            attribution: "Trekking wisdom"
        },

        timeline: [
            { year: 'Yadava Period', title: 'Fort Origin', desc: 'Believed to have been built during the Yadava dynasty as a watchtower fort in the northern Sahyadri ranges near Trimbakeshwar.' },
            { year: '1636', title: 'Mughal Control', desc: 'Came under Mughal rule after their Deccan campaigns. The Mughals used it as a frontier garrison protecting the Nashik region.' },
            { year: '1670', title: 'Captured by Shivaji Maharaj', desc: 'Became part of the Maratha Empire when Shivaji Maharaj expanded Swarajya into the northern Sahyadri region.' },
            { year: '1818', title: 'British Capture', desc: 'Taken over by the British East India Company after the defeat of the Marathas in the Third Anglo-Maratha War.' }
        ],

        landmarks: [
            { title: 'Rock-Cut Steps', desc: 'The legendary near-vertical staircase carved into the rock at approximately 80° angle — the most iconic and thrilling feature of the fort. Over 100 steps cut directly into the cliff face with no railings.', mustSee: true },
            { title: 'Narrow Entrance Gate', desc: 'A small, deliberately narrow entry point at the very top of the vertical steps. The defensive design forced attackers to enter single-file into the fort.', mustSee: true },
            { title: 'Fort Plateau', desc: 'A flat, open summit area offering stunning 360° panoramic views of surrounding Sahyadri peaks, valleys, and the Trimbak-Brahmagiri range.', mustSee: true },
            { title: 'Rock-Cut Water Cisterns', desc: 'Ancient water tanks carved into the plateau rock — still collecting rainwater. An engineering marvel at this altitude.', mustSee: true },
            { title: 'Hanuman Temple', desc: 'A small temple dedicated to Lord Hanuman on the fort plateau. Offerings and prayer flags mark this sacred spot.', mustSee: false }
        ],

        food: [
            { name: 'Local Village Meals', type: 'Veg', price: '₹100-150', desc: 'Basic home-cooked meals (dal-rice, bhakri-pithla) available at Nirgudpada base village. Call ahead to arrange.' },
            { name: 'Maggi & Snacks', type: 'Veg', price: '₹30-80', desc: 'Quick trek snacks available at the starting point. Carry your own food for the top.' },
            { name: 'Tea', type: 'Beverage', price: '₹10-20', desc: 'Hot chai at small base village stalls. Fuel up before the intense climb ahead.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Nirgudpada Route (Main)', difficulty: 'Hard', distance: '3 km', time: '90-120 min', desc: 'The most popular route from Nirgudpada village. Starts with a forest trail, then transitions to a steep climb, culminating in the famous near-vertical rock-cut steps to the summit.' },
            { icon: '⛰️', title: 'Harshewadi Route', difficulty: 'Moderate to Hard', distance: '3.5 km', time: '120-150 min', desc: 'A longer route with a more gradual initial climb before joining the main route near the famous rock-cut steps. Slightly less intense but same thrilling finish.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚆', desc: 'Nearest railway station is Nashik Road on the Central line. From Nashik, travel to Nirgudpada village via Trimbak road (~40 km, 1.5 hours).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nashik via Trimbak road to Nirgudpada village. ~40 km from Nashik, ~220 km from Mumbai. Parking available at the village.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses available from Nashik to Trimbak town. From Trimbak, take local transport or auto to Nirgudpada base village.' }
        ],

        trekEssentials: [
            'HIGH-GRIP trekking shoes — absolutely essential for the vertical rock steps',
            'Carry 2-3 litres of water — no source on the fort',
            'Gloves for better grip on the rock-cut steps and carved handholds',
            'Snacks and energy bars — no food stalls on the fort',
            'First aid kit — injuries are possible on the steep climb',
            'Rain protection during monsoon — steps become extremely dangerous',
            'Torch / headlamp if trekking early morning or late return',
            'Confidence and calm nerves — don\'t look down on the vertical section!'
        ],

        safetyAlerts: [
            { msg: 'Near-vertical steps are EXTREMELY risky — maintain 3-point contact at ALL times, never rush', season: 'All year' },
            { msg: 'AVOID trekking during heavy rain — the rock-cut steps become fatally slippery', season: 'June-Sept' },
            { msg: 'Weekend crowding on the steps can be dangerous — one person at a time on narrow sections', season: 'Weekends' },
            { msg: 'Strong winds at the top plateau can destabilize you — stay low near edges', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Guide (optional)', value: '₹300-500' },
            { label: 'Total', value: '₹400-900', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Nirgudpada village' },
            { label: 'Drinking Water', available: false, detail: 'Carry your own water' },
            { label: 'Toilets', available: false, detail: 'Not available on fort' },
            { label: 'Mobile Network', available: true, detail: 'Limited signal' },
            { label: 'Food Stalls', available: false, detail: 'Only at base village' },
            { label: 'Local Guides', available: true, detail: '₹300-500 at village' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nashik' },
            { label: 'Altitude', value: '1,120 m (3,674 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Best Season', value: 'Winter & Post-Monsoon' },
            { label: 'Difficulty', value: 'Hard / Difficult' },
            { label: 'Base Village', value: 'Nirgudpada' },
            { label: 'Famous For', value: 'Vertical rock-cut steps (80°)' },
            { label: 'Near', value: 'Trimbakeshwar Jyotirlinga' },
            { label: 'Kids Appropriate', value: 'Absolutely No' },
            { label: 'Best Combined', value: 'Trimbakeshwar + Brahmagiri' }
        ],

        reviews: {
            quote: "The climb feels like a staircase to the sky — thrilling and unforgettable! Your legs tremble but the view from the top makes every step worth it.",
            positives: [
                'Unique near-vertical rock-cut climb — unlike any other fort',
                'Jaw-dropping 360° views from the plateau',
                'Short but intensely thrilling trek',
                'Great challenge for adventure lovers and thrill seekers',
                'Less commercialized — raw Sahyadri experience'
            ],
            proTips: [
                'Avoid weekends to escape dangerous crowding on the steps',
                'Hold rock grips firmly — use 3-point contact always',
                'Start early morning for cooler temps and fewer people',
                'Never rush on the steps — one wrong step can be fatal',
                'Combine with a visit to Trimbakeshwar Jyotirlinga nearby'
            ],
            rating: 4.8,
            reviewCount: '9,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 16. KARNALA FORT ━━━━━━━━━━━━━━━━━━
    karnala: {
        introduction: `Karnala Fort, nestled inside the Karnala Bird Sanctuary near Panvel in Raigad district, 
            is a scenic hill fort crowned by an iconic basalt pinnacle visible from the Mumbai-Goa highway. 
            The trek offers a unique blend of wildlife exploration, birdwatching, and fort history, making it 
            ideal for nature lovers, families, and beginner trekkers. Over 222 bird species have been recorded 
            in the sanctuary, making it a paradise for ornithologists.`,

        quote: {
            text: "निसर्ग आणि इतिहास यांचा सुंदर संगम.",
            attribution: "Sahyadri experience"
        },

        timeline: [
            { year: 'Pre-15th Century', title: 'Ancient Origins', desc: 'The fort existed as a strategic watchtower controlling trade routes between the Konkan coast and the Deccan plateau.' },
            { year: '1540', title: 'Portuguese Control', desc: 'Captured and developed by the Portuguese who recognized its strategic importance along the trade corridor.' },
            { year: '1670', title: 'Captured by Shivaji Maharaj', desc: 'Brought under Maratha rule as part of the expansion of Swarajya in the Konkan region.' },
            { year: '1818', title: 'British Rule', desc: 'Taken over by the British after the defeat of the Marathas. Later, the surrounding forest was declared a bird sanctuary.' }
        ],

        landmarks: [
            { title: 'Basalt Pinnacle', desc: 'The fort\'s iconic tall vertical rock structure — a dramatic basalt column visible from the Mumbai-Goa highway. One of the most distinctive silhouettes in the Sahyadris.', mustSee: true },
            { title: 'Fort Ruins & Walls', desc: 'Remains of old fortification structures, walls, and gateways at the summit. The ruins blend with the surrounding forest creating a mystical atmosphere.', mustSee: true },
            { title: 'Rock-Cut Water Cisterns', desc: 'Ancient water storage tanks carved into the rock — a testament to the fort\'s role as a permanent military garrison.', mustSee: true },
            { title: 'Bird Sanctuary Trails', desc: 'Rich biodiversity trails through the sanctuary with over 222 bird species including hornbills, paradise flycatchers, and raptors. Carry binoculars!', mustSee: true }
        ],

        food: [
            { name: 'Canteen at Sanctuary', type: 'Veg', price: '₹50-100', desc: 'Basic snacks and meals available at the sanctuary entry canteen.' },
            { name: 'Vada Pav & Snacks', type: 'Veg', price: '₹15-30', desc: 'Quick roadside snacks available near the highway entrance.' },
            { name: 'Tea & Biscuits', type: 'Beverage', price: '₹10-20', desc: 'Available at the sanctuary gate. Perfect pre-trek fuel.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Karnala Sanctuary Route', difficulty: 'Moderate', distance: '3 km', time: '90-120 min', desc: 'The only route — a beautiful forest trail inside the bird sanctuary with gradual ascent through dense tree cover, followed by a steeper climb near the summit. Well-marked and scenic.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚆', desc: 'Nearest station is Panvel on the Central/Harbour line. From Panvel, take a rickshaw or local bus to Karnala Bird Sanctuary (~12 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Located directly on the Mumbai-Goa NH66 highway near Panvel. ~55 km from Mumbai, ~120 km from Pune. Large parking lot at the sanctuary gate.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Any Mumbai-Goa highway bus stops at Karnala. Easy access from Panvel via local transport.' }
        ],

        trekEssentials: [
            'Good trekking shoes — some rocky sections near the top',
            'Carry 2 litres of water',
            'Snacks and energy bars',
            'Cap and sunscreen for sun protection',
            'Binoculars (optional but highly recommended for birdwatching)',
            'Camera — the birdlife is spectacular'
        ],

        safetyAlerts: [
            { msg: 'Trails become slippery during monsoon — wear grip shoes', season: 'June-Sept' },
            { msg: 'Sanctuary timings apply — entry closes at 5:30 PM, plan accordingly', season: 'All year' },
            { msg: 'Do not attempt to climb the basalt pinnacle — it is extremely dangerous', season: 'All year' }
        ],

        budget: [
            { label: 'Entry (Sanctuary)', value: '₹50-100' },
            { label: 'Transport', value: '₹100-300' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Total', value: '₹300-600', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Large lot at sanctuary gate' },
            { label: 'Drinking Water', available: false, detail: 'Carry your own' },
            { label: 'Toilets', available: true, detail: 'At sanctuary entrance' },
            { label: 'Mobile Network', available: true, detail: 'Good coverage (near highway)' },
            { label: 'Canteen', available: true, detail: 'At sanctuary entrance' }
        ],

        quickFacts: [
            { label: 'District', value: 'Raigad' },
            { label: 'Altitude', value: '445 m (1,460 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Best Season', value: 'Oct to March (birding)' },
            { label: 'Difficulty', value: 'Moderate' },
            { label: 'Bird Species', value: '222+ recorded' },
            { label: 'Nearest Station', value: 'Panvel (12 km)' },
            { label: 'Kids Appropriate', value: 'Yes' },
            { label: 'Entry Fee', value: '₹50-100 (Sanctuary)' },
            { label: 'Best Combined', value: 'Matheran + Prabalgad' }
        ],

        reviews: {
            quote: "Perfect combination of trekking and birdwatching! The basalt pinnacle at the top is breathtaking and the forest trail is serene.",
            positives: [
                'Nature-rich trail inside a bird sanctuary',
                'Short, manageable trek for all levels',
                'Iconic basalt pinnacle — great for photos',
                'Over 222 bird species — birdwatcher\'s paradise',
                'Easy access from Mumbai-Goa highway'
            ],
            proTips: [
                'Visit early morning for best birdwatching',
                'Carry binoculars for spotting hornbills and raptors',
                'Check sanctuary timings before going — entry closes at 5:30 PM',
                'Combine with Matheran for a full nature weekend',
                'Monsoon makes it lush but slippery — choose your season wisely'
            ],
            rating: 4.5,
            reviewCount: '7,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 17. JIVDHAN FORT ━━━━━━━━━━━━━━━━━━
    jivdhan: {
        introduction: `Jivdhan Fort, overlooking the historic Naneghat pass in the Junnar region of Pune district, 
            is a challenging trek known for its steep rock patches, metal ladders, and raw Sahyadri wilderness. 
            The fort holds immense historical significance — it guarded the ancient Satavahana-era trade route 
            through Naneghat that connected the Deccan plateau to the Konkan coast. The views from the summit 
            of Naneghat valley and the surrounding peaks are simply spectacular.`,

        quote: {
            text: "कठीण वाटच खरा अनुभव देते.",
            attribution: "Trekking wisdom"
        },

        timeline: [
            { year: 'Satavahana Era', title: 'Trade Route Control', desc: 'Built to protect the ancient Naneghat trade route — one of the most important mountain passes connecting the Konkan coast to the Deccan plateau during the Satavahana dynasty.' },
            { year: '17th Century', title: 'Maratha Rule', desc: 'Used by Chhatrapati Shivaji Maharaj as a strategic fort in the Junnar region, connected to the Shivneri-Chavand defense network.' },
            { year: '1818', title: 'British Destruction', desc: 'The British systematically destroyed the main steps and access routes to prevent future use as a rebel stronghold.' },
            { year: 'Present', title: 'Adventure Trekking', desc: 'Now a coveted hard-grade trek for experienced trekkers, with metal ladders replacing the destroyed original steps.' }
        ],

        landmarks: [
            { title: 'Naneghat Pass View', desc: 'Breathtaking vista of the ancient Naneghat mountain pass — the strategic trade route that funded empires. You can see the Satavahana-era cave inscriptions from above.', mustSee: true },
            { title: 'Rock Patches & Ladders', desc: 'Thrilling vertical rock-climbing sections with metal ladders installed for safety. The most challenging and adrenaline-pumping part of the trek.', mustSee: true },
            { title: 'Ancient Caves', desc: 'Satavahana-era caves near the base of the fort, some with faded inscriptions. A reminder of the 2,000+ year history of this region.', mustSee: true },
            { title: 'Fort Plateau', desc: 'Summit area with ruins and spectacular views of the Malshej and Junnar regions, including Hadsar, Chavand, and Shivneri forts.', mustSee: true }
        ],

        food: [
            { name: 'Village Meals', type: 'Veg', price: '₹100-150', desc: 'Basic home-cooked meals available at Naneghat base villages. Call ahead to arrange with locals.' },
            { name: 'Maggi & Snacks', type: 'Veg', price: '₹30-60', desc: 'Basic snacks at the Naneghat parking area. Carry your own food for the fort.' },
            { name: 'Tea', type: 'Beverage', price: '₹10-20', desc: 'Available at base village stalls near Naneghat.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Naneghat Route', difficulty: 'Hard', distance: '4 km', time: '120-150 min', desc: 'The main route from Naneghat parking area. Includes forest trail, steep rock patches, and metal ladder climbs. Requires confidence with heights and good physical fitness.' },
            { icon: '⛰️', title: 'Jivdhan via Ghotghar', difficulty: 'Moderate to Hard', distance: '5 km', time: '150-180 min', desc: 'A longer alternative route from Ghotghar village. Less steep but longer, with forest trails and gradual ascent.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Naneghat parking from Junnar (~25 km) or from Murbad side. ~150 km from Mumbai, ~120 km from Pune.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses from Pune to Junnar. From Junnar, local transport to Naneghat base.' },
            { mode: 'By Train', icon: '🚆', desc: 'Nearest station is Kalyan or Pune. Then road travel to Naneghat (~80 km from Kalyan).' }
        ],

        trekEssentials: [
            'High-grip trekking shoes — rock patches are steep and unforgiving',
            'Carry 3 litres of water — no source on the fort',
            'Gloves for rock climbing and ladder sections',
            'Energy snacks and packed lunch — nothing on top',
            'First aid kit — remote location',
            'Rain protection during monsoon',
            'Torch / headlamp for early starts',
            'Go with an experienced group — NOT a beginner trek'
        ],

        safetyAlerts: [
            { msg: 'Rock patches and ladders are DANGEROUS — requires confidence with heights', season: 'All year' },
            { msg: 'AVOID during monsoon — rock sections become fatally slippery', season: 'June-Sept' },
            { msg: 'This is NOT a beginner trek — go only with experience or a guide', season: 'All year' },
            { msg: 'Limited mobile network — inform someone before going', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-600' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Guide (recommended)', value: '₹400-600' },
            { label: 'Total', value: '₹500-1000', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Naneghat base' },
            { label: 'Drinking Water', available: false, detail: 'Carry your own' },
            { label: 'Toilets', available: false, detail: 'Not available' },
            { label: 'Mobile Network', available: false, detail: 'Very limited signal' },
            { label: 'Local Guides', available: true, detail: '₹400-600 from Junnar' }
        ],

        quickFacts: [
            { label: 'District', value: 'Pune (Junnar)' },
            { label: 'Altitude', value: '1,004 m (3,294 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Best Season', value: 'Oct-Feb (Winter)' },
            { label: 'Difficulty', value: 'Hard / Difficult' },
            { label: 'Famous For', value: 'Naneghat & rock patches' },
            { label: 'Era', value: 'Satavahana dynasty' },
            { label: 'Kids Appropriate', value: 'Absolutely No' },
            { label: 'Best Combined', value: 'Naneghat caves + Hadsar' }
        ],

        reviews: {
            quote: "One of the toughest but most rewarding treks in the Sahyadris! The Naneghat views from the top are worth every drop of sweat.",
            positives: [
                'Thrilling rock patch and ladder climbs',
                'Spectacular Naneghat pass panorama',
                'Rich Satavahana-era historical significance',
                'Less crowded — raw wilderness experience',
                'Great challenge for experienced trekkers'
            ],
            proTips: [
                'Go with an experienced guide — do not attempt solo',
                'Post-monsoon (Oct-Nov) is the best time — green but dry trails',
                'Combine with Naneghat caves for a full history-adventure day',
                'Carry rope if going in a group — useful at rock patches',
                'Start very early — the climb takes longer than expected'
            ],
            rating: 4.6,
            reviewCount: '4,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 18. KORLAI FORT ━━━━━━━━━━━━━━━━━━
    korlai: {
        introduction: `Korlai Fort is a unique coastal fort built by the Portuguese in 1521 near Revdanda creek 
            in Raigad district. Unlike the rugged hill forts of the Sahyadris, Korlai sits on a coastal headland 
            overlooking the Arabian Sea, crowned by a functioning lighthouse. The fort offers a short, easy walk 
            with stunning sea views and rich colonial-era architecture — perfect for history buffs and beach lovers.`,

        quote: {
            text: "समुद्र आणि इतिहास यांचा संगम.",
            attribution: "Coastal heritage"
        },

        timeline: [
            { year: '1521', title: 'Portuguese Construction', desc: 'Built by the Portuguese as a coastal defense fort to protect the strategic Revdanda harbor and control maritime trade along the Konkan coast.' },
            { year: '17th Century', title: 'Maratha-Portuguese Conflict', desc: 'Fiercely contested between the Portuguese and the expanding Maratha Empire. Changed hands multiple times during this turbulent period.' },
            { year: '1739', title: 'Maratha Conquest', desc: 'Finally captured by the Marathas under Chimaji Appa after a determined siege.' },
            { year: 'Present', title: 'Heritage Site', desc: 'Now a protected heritage site with the lighthouse still operational. The local Korlai Creole-speaking community preserves unique Portuguese cultural heritage.' }
        ],

        landmarks: [
            { title: 'Korlai Lighthouse', desc: 'A functioning lighthouse at the fort\'s highest point offering panoramic views of the Arabian Sea, Revdanda beach, and the Konkan coastline. One of the best sunset viewpoints.', mustSee: true },
            { title: 'Fort Walls & Ramparts', desc: 'Long, narrow Portuguese-style fortification walls stretching along the headland. The construction style is distinctly European — different from Maratha forts.', mustSee: true },
            { title: 'Church Ruins', desc: 'Remains of a Portuguese-era church within the fort walls — a rare sight in Maharashtra\'s fort landscape.', mustSee: true },
            { title: 'Sea View Bastions', desc: 'Bastions overlooking the Arabian Sea with cannon emplacements. Dramatic views of waves crashing against the rocky coast below.', mustSee: true }
        ],

        food: [
            { name: 'Fresh Seafood', type: 'Non-Veg', price: '₹150-300', desc: 'Korlai village is famous for fresh fish, prawns, and surmai. Local restaurants serve excellent Malvani-style seafood.' },
            { name: 'Sol Kadhi', type: 'Veg', price: '₹30-50', desc: 'Refreshing coconut milk drink with kokum — a Konkan specialty. Available at local eateries.' },
            { name: 'Vada Pav & Snacks', type: 'Veg', price: '₹15-30', desc: 'Quick snacks available in Korlai village.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Korlai Village Route', difficulty: 'Easy', distance: '2 km', time: '30-60 min', desc: 'A simple, pleasant walk from Korlai village up to the fort and lighthouse. No climbing required — suitable for all ages and fitness levels. The path offers beautiful coastal views throughout.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive via Alibaug-Revdanda road to Korlai village. ~140 km from Mumbai, ~200 km from Pune. Parking available at the village.' },
            { mode: 'By Ferry', icon: '⛴️', desc: 'Take a ferry from Gateway of India to Alibaug/Mandwa. From Alibaug, drive to Korlai (~20 km).' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses to Alibaug from Mumbai. From Alibaug, local transport to Korlai village.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — no heavy trekking needed',
            'Sunscreen and cap — exposed coastal walk',
            'Water bottle — 1 litre is enough',
            'Camera — the lighthouse and sea views are stunning',
            'Visit during sunset for the best experience'
        ],

        safetyAlerts: [
            { msg: 'Strong sea winds near the cliff edges — keep safe distance', season: 'All year' },
            { msg: 'Lighthouse area can be slippery during monsoon', season: 'June-Sept' },
            { msg: 'Do not swim near the fort rocks — strong currents', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Food', value: '₹100-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Ferry (optional)', value: '₹200-300' },
            { label: 'Total', value: '₹300-800', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Korlai village' },
            { label: 'Drinking Water', available: true, detail: 'At village shops' },
            { label: 'Toilets', available: false, detail: 'Not on fort' },
            { label: 'Mobile Network', available: true, detail: 'Good coverage' },
            { label: 'Food Stalls', available: true, detail: 'In Korlai village' }
        ],

        quickFacts: [
            { label: 'District', value: 'Raigad' },
            { label: 'Altitude', value: '150 m' },
            { label: 'Fort Type', value: 'Coastal / Sea Fort' },
            { label: 'Built By', value: 'Portuguese (1521)' },
            { label: 'Difficulty', value: 'Easy' },
            { label: 'Best Season', value: 'Oct-March' },
            { label: 'Kids Appropriate', value: 'Yes' },
            { label: 'Lighthouse', value: 'Active / Functional' },
            { label: 'Unique', value: 'Creole-speaking village' },
            { label: 'Best Combined', value: 'Alibaug + Revdanda' }
        ],

        reviews: {
            quote: "Beautiful sea fort with a working lighthouse! The sunset views from here are absolutely magical. A completely different experience from the usual hill forts.",
            positives: [
                'Easy walk suitable for all ages',
                'Stunning sea views and lighthouse',
                'Unique Portuguese colonial architecture',
                'Great seafood in the village',
                'Perfect sunset spot on the Konkan coast'
            ],
            proTips: [
                'Visit during sunset — the lighthouse views are incredible',
                'Try the local seafood in Korlai village — it\'s exceptional',
                'Combine with Alibaug beach and Kolaba fort for a full day trip',
                'The Korlai Creole language is fascinating — chat with locals',
                'Best in winter/post-monsoon for clear skies'
            ],
            rating: 4.4,
            reviewCount: '3,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 19. CHAVAND FORT ━━━━━━━━━━━━━━━━━━
    chavand: {
        introduction: `Chavand Fort, located near the Junnar region of Nashik district, is a historically 
            significant fort closely associated with the Maratha Empire and Sambhaji Maharaj. The fort offers 
            a short, easy trek through pleasant countryside with scenic views of the Kalsubai and surrounding 
            Sahyadri ranges. Perfect for beginners who want a taste of Maharashtra's fort heritage without 
            a strenuous climb.`,

        quote: {
            text: "इतिहास प्रत्येक किल्ल्यात जिवंत आहे.",
            attribution: "Maratha legacy"
        },

        timeline: [
            { year: '17th Century', title: 'Maratha Period', desc: 'Used as a strategic fort during Chhatrapati Shivaji Maharaj\'s reign. Part of the Junnar-Shivneri defense network protecting the northern frontier of Swarajya.' },
            { year: '1681', title: 'Sambhaji Maharaj Connection', desc: 'Linked to Sambhaji Maharaj\'s period — the fort served as a retreat and administrative post during the turbulent succession era.' },
            { year: '1818', title: 'British Takeover', desc: 'Captured by the British East India Company during the Third Anglo-Maratha War.' },
            { year: 'Present', title: 'Heritage Trek', desc: 'Now a peaceful trekking destination offering easy access to Maratha history and panoramic Sahyadri views.' }
        ],

        landmarks: [
            { title: 'Fort Entrance & Steps', desc: 'Well-preserved stone steps leading to the fort summit. The entrance gate shows classic Maratha architectural elements.', mustSee: true },
            { title: 'Summit Plateau', desc: 'A flat-top plateau offering scenic 360° views of the surrounding ranges including glimpses of Shivneri, Hadsar, and the Sahyadri valleys.', mustSee: true },
            { title: 'Fort Walls & Bastions', desc: 'Partially preserved walls and bastions that once formed the defensive ring around the summit.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Rock-cut water tanks on the plateau — evidence of the fort\'s role as a permanent garrison.', mustSee: false }
        ],

        food: [
            { name: 'Village Meals', type: 'Veg', price: '₹80-120', desc: 'Simple home-cooked meals available at the base village. Dal-rice and bhakri-pithla are the staples.' },
            { name: 'Tea & Snacks', type: 'Beverage', price: '₹10-30', desc: 'Basic tea and biscuits at the base village.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Chavand Village Route', difficulty: 'Easy', distance: '2 km', time: '45-60 min', desc: 'A short and straightforward climb from the base village. Well-defined trail with gradual ascent — perfect for beginners, families, and casual trekkers.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Junnar or Nashik to Chavand village. ~120 km from Pune, ~150 km from Mumbai.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses from Pune/Nashik to Junnar. From Junnar, local transport to the base village.' },
            { mode: 'By Train', icon: '🚆', desc: 'Nearest station is Pune or Nashik Road. Then travel by road to the fort base.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — easy terrain',
            'Carry 1-2 litres of water',
            'Light snacks',
            'Cap and sunscreen',
            'Camera for scenic views',
            'First aid kit (basic)'
        ],

        safetyAlerts: [
            { msg: 'Some loose rocks near the summit — watch your step', season: 'All year' },
            { msg: 'Slippery during monsoon — wear grip shoes', season: 'June-Sept' },
            { msg: 'Limited shade on the climb — carry water and sun protection', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-400' },
            { label: 'Food', value: '₹80-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹300-550', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At base village' },
            { label: 'Drinking Water', available: false, detail: 'Carry your own' },
            { label: 'Toilets', available: false, detail: 'Not on fort' },
            { label: 'Mobile Network', available: true, detail: 'Moderate signal' },
            { label: 'Food Stalls', available: false, detail: 'Only at base village' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nashik (Junnar region)' },
            { label: 'Altitude', value: '1,076 m (3,530 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Best Season', value: 'Oct-March' },
            { label: 'Difficulty', value: 'Easy' },
            { label: 'Historical Link', value: 'Sambhaji Maharaj period' },
            { label: 'Kids Appropriate', value: 'Yes' },
            { label: 'Nearby Forts', value: 'Shivneri, Hadsar' },
            { label: 'Best Combined', value: 'Shivneri + Hadsar circuit' }
        ],

        reviews: {
            quote: "Simple trek with great views and strong Maratha history vibes! Perfect for a peaceful weekend outing with family.",
            positives: [
                'Easy trek perfect for beginners and families',
                'Rich Maratha history — Sambhaji Maharaj connection',
                'Scenic views of the surrounding Sahyadri ranges',
                'Less crowded — peaceful experience',
                'Can be combined with Shivneri and Hadsar'
            ],
            proTips: [
                'Combine with Shivneri Fort for a full historical day trip',
                'Best visited in post-monsoon when everything is green',
                'Start early and finish with a local village meal',
                'The sunset from the plateau is underrated — stay for it',
                'Good starting point for beginners exploring Sahyadri forts'
            ],
            rating: 4.3,
            reviewCount: '2,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 20. MULHER FORT ━━━━━━━━━━━━━━━━━━
    mulher: {
        introduction: `Mulher Fort is one of the largest forts in the Baglan region of Nashik district and 
            forms a twin fort complex with Salher — the tallest fort in Maharashtra. Known for its vast 
            plateau, ancient temples, and historical importance during the Maratha-Mughal conflicts, Mulher 
            offers a raw, less crowded trekking experience. The fort's remote location in northern Maharashtra 
            rewards those who make the journey with solitude, panoramic views, and a deep sense of history.`,

        quote: {
            text: "मुल्हेर — सह्याद्रीच्या उत्तरेकडील अजिंक्य किल्ला",
            attribution: "On Mulher's significance in the Baglan region"
        },

        timeline: [
            { year: '12th Century', title: 'Yadava Construction', desc: 'The Yadava dynasty built the original fortifications on the Mulher hill, establishing it as a strategic outpost in the Baglan region.' },
            { year: '14th Century', title: 'Bahmani Sultanate', desc: 'The fort came under the Bahmani Sultanate which used it to control trade routes in northern Maharashtra.' },
            { year: '1636', title: 'Mughal Control', desc: 'The Mughals captured Mulher and used it as a garrison fort in their prolonged conflict with the Marathas.' },
            { year: '1670s', title: 'Maratha Recapture', desc: 'The Marathas under Shivaji Maharaj recaptured Mulher as part of the reconquest of northern Sahyadri forts.' },
            { year: '1672', title: '⚔️ Battle of Salher Region', desc: 'The nearby Battle of Salher — the first large-scale open-field Maratha victory against the Mughals — reinforced the strategic importance of the Mulher-Salher twin fort system.' },
            { year: '1818', title: 'British Annexation', desc: 'Mulher was among the last forts to be surrendered to the British East India Company during the fall of the Maratha Empire.' }
        ],

        landmarks: [
            { title: 'Mulher Plateau', desc: 'A vast, sprawling plateau that forms the fort\'s summit — one of the largest fort plateaus in the region. Allows extensive exploration of ruins, foundations, and scenic landscapes.', mustSee: true },
            { title: 'Ancient Temples', desc: 'Remains of temples dedicated to local deities dot the plateau. These ruins reflect the cultural and religious significance of the fort over centuries.', mustSee: true },
            { title: 'Fort Walls & Bastions', desc: 'Ruins of massive defensive walls that once protected the fort from invasion. The fortification design shows similarities to neighboring Salher.', mustSee: true },
            { title: 'Salher Twin Fort View', desc: 'From Mulher\'s plateau, the twin fort Salher is clearly visible, offering a dramatic view of the twin defense system that controlled the Baglan region.', mustSee: false },
            { title: 'Water Cisterns', desc: 'Rock-cut water storage tanks that sustained the fort\'s garrison. Some still hold water seasonally.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Traditional village meal — besan curry with jowar bhakri. Available at Mulher base village.' },
            { name: 'Village Meals', type: 'Veg', price: '₹100-200', desc: 'Simple home-cooked Maharashtrian meals at the base village. Arrange in advance.' },
            { name: 'Chai & Snacks', type: 'Beverage', price: '₹20-50', desc: 'Basic tea and biscuits at the base village. Very limited availability — carry your own supplies.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Mulher Village Route', difficulty: 'Hard', distance: '6 km', time: '2.5-3 hours', desc: 'A long but gradual ascent through rocky terrain and forest patches leading to a massive plateau. The trek is physically demanding due to distance.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nashik to Satana town. From Satana, local transport to Mulher village (~20 km). Limited frequency.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nashik via Satana to Mulher village. ~130 km from Nashik, about 3-hour drive through rural roads.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station is Manmad or Nashik Road. Then road transport to Satana and onward to Mulher village.' }
        ],

        trekEssentials: [
            'Sturdy trekking shoes — rocky and uneven terrain throughout',
            'Carry 3+ litres of water — very limited sources',
            'Carry all food and snacks — no stalls on the fort',
            'Start early morning to avoid heat on the long trek',
            'Headlamp if planning extended exploration',
            'Sun protection — exposed plateau',
            'First-aid kit — remote area with no nearby medical help',
            'Inform someone of your trek plan — limited network coverage'
        ],

        safetyAlerts: [
            { msg: 'Long trek requires good stamina — assess fitness before attempting', season: 'All year' },
            { msg: 'Limited water availability — carry sufficient water', season: 'All year' },
            { msg: 'Remote area — avoid solo trekking', season: 'All year' },
            { msg: 'Trails become slippery and dangerous in heavy monsoon', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-700' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Guide', value: '₹300-500' },
            { label: 'Total', value: '₹500-1000', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Limited at base village' },
            { label: 'Food Stalls', available: false, detail: 'Carry own food' },
            { label: 'Drinking Water', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'Not available' },
            { label: 'Mobile Network', available: false, detail: 'Very weak / no signal' },
            { label: 'Guides', available: true, detail: '₹300-500' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nashik (Satana taluka)' },
            { label: 'Altitude', value: '1,306 m (4,285 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Built By', value: 'Yadava dynasty' },
            { label: 'Twin Fort', value: 'Salher (tallest in Maharashtra)' },
            { label: 'Difficulty', value: 'Moderate to Hard' },
            { label: 'Famous For', value: 'Vast plateau, Baglan defense system' },
            { label: 'Kids Appropriate', value: 'No (long, demanding trek)' },
            { label: 'Best Season', value: 'Nov-Feb' },
            { label: 'Best Combined', value: 'Salher Fort + Baglan region' }
        ],

        reviews: {
            quote: "Mulher is for those who seek solitude and raw history. The vast plateau, the twin view of Salher, and the absolute silence make it a trekker's paradise.",
            positives: [
                'Vast and sprawling plateau — feels like a different world',
                'Twin fort views with Salher are spectacular',
                'Very low crowds — peaceful exploration',
                'Rich Maratha-Mughal history',
                'Remote and adventurous experience'
            ],
            proTips: [
                'Combine with Salher for a 2-day twin fort trek',
                'Start very early — the trek is long and exposed',
                'Carry all supplies — nothing available on the fort',
                'Visit in post-monsoon for lush greenery',
                'Hire a local guide from Mulher village'
            ],
            rating: 4.5,
            reviewCount: '2,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 21. KALSUBAI PEAK ━━━━━━━━━━━━━━━━━━
    kalsubai: {
        introduction: `Kalsubai Peak — the \"Everest of Maharashtra\" — is the highest point in the state at 
            an elevation of 1,646 metres. This iconic summit offers breathtaking 360° panoramic views of the 
            Sahyadri range including the legendary Alang-Madan-Kulang trio, Ratangad, and Harishchandragad. 
            The trek from Bari village features well-defined trails with iron ladders installed at steep 
            sections, making it accessible to both beginners and experienced trekkers. A small temple 
            dedicated to Goddess Kalsubai sits at the summit, making it a pilgrimage as much as a trek.`,

        quote: {
            text: "कळसुबाई — महाराष्ट्राचं एव्हरेस्ट, सह्याद्रीचं सर्वोच्च शिखर!",
            attribution: "Trekkers' tribute to Maharashtra's highest point"
        },

        timeline: [
            { year: 'Ancient', title: 'Sacred Peak', desc: 'Kalsubai Peak has been revered by local Adivasi communities for centuries. The peak is named after a local woman named Kalsubai who is believed to have lived on the mountain.' },
            { year: 'Pre-Modern', title: 'Adivasi Pilgrimage', desc: 'The Mahadev Koli and Thakar tribes have worshipped Goddess Kalsubai at the summit temple for generations. It remains a sacred pilgrimage for local communities.' },
            { year: 'Modern Era', title: 'Trekking Destination', desc: 'Iron ladders were installed at steep sections to make the trek safer and accessible. Kalsubai became one of Maharashtra\'s most popular trekking destinations.' },
            { year: 'Present', title: 'Everest of Maharashtra', desc: 'With growing trekking culture, Kalsubai has become a bucket-list destination. The sunrise trek is especially popular among adventure enthusiasts.' }
        ],

        landmarks: [
            { title: 'Kalsubai Temple', desc: 'Small but sacred temple dedicated to Goddess Kalsubai at the summit. Local Adivasi communities conduct pujas here. The temple sits at the exact highest point of Maharashtra.', mustSee: true },
            { title: 'Iron Ladders', desc: 'A series of iron ladders installed at steep rock sections along the trail. They add excitement to the trek while ensuring safety. Become slippery in monsoon.', mustSee: true },
            { title: '360° Panoramic Summit', desc: 'The summit offers the most expansive view in Maharashtra — Alang, Madan, Kulang, Ratangad, Harishchandragad, and the entire Sahyadri ridge stretching to the horizon.', mustSee: true },
            { title: 'Bari Village', desc: 'The charming base village where the trek begins. Experience tribal Adivasi culture, simple village life, and home-cooked meals before and after the trek.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Traditional meal served at Bari village before and after the trek. Simple, filling, and authentic.' },
            { name: 'Maggi & Snacks', type: 'Veg', price: '₹30-80', desc: 'Available at multiple stalls along the route and at the base village. Classic trekker fuel.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Hot ginger chai at the base village — the perfect energy booster before the climb.' },
            { name: 'Home-Cooked Village Meals', type: 'Veg', price: '₹100-200', desc: 'Authentic Maharashtrian home-cooked meals available at Bari village. Dal-rice, bhakri, and fresh vegetables.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Bari Village Route (Main)', difficulty: 'Medium', distance: '5.5 km', time: '2.5-3 hours', desc: 'The most popular route with well-defined trails and multiple iron ladders at steep sections. Starts from Bari Village and follows a scenic forest trail to the summit.' },
            { icon: '⛰️', title: 'Via Indore Village', difficulty: 'Medium-Hard', distance: '6 km', time: '3-4 hours', desc: 'Alternative route from Indore village. Less crowded and more scenic, but less well-marked and without ladder support.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nashik or Pune to Igatpuri/Bhandardara. From there, local transport to Bari village. ~60 km from Nashik.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nashik via Igatpuri to Bari village (~60 km). From Pune ~180 km via Sangamner. From Mumbai ~150 km. Parking at Bari village.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Igatpuri (on Mumbai-Nashik line). From Igatpuri, local transport to Bari village (~30 km).' }
        ],

        trekEssentials: [
            'Good trekking shoes with grip — steep rocky sections and ladders',
            'Carry 2-3 litres of water — limited availability on route',
            'Headlamp for pre-dawn sunrise treks',
            'Light rain gear during monsoon — exposed summit',
            'Energy snacks — trail mix, energy bars, fruits',
            'Sunscreen and hat for summer treks',
            'Start before dawn (3-4 AM) for the best sunrise experience',
            'Cash — no UPI/card facilities at village'
        ],

        safetyAlerts: [
            { msg: 'Iron ladders become very slippery during monsoon — extreme caution required', season: 'Monsoon' },
            { msg: 'Heavy crowding near ladders on weekends — delays and queues', season: 'Weekends' },
            { msg: 'Carry sufficient water — no natural drinking water sources on trail', season: 'All year' },
            { msg: 'Strong winds at summit — secure gear and keep distance from edges', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-700' },
            { label: 'Parking', value: '₹50-100' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹500-1000', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Bari village (₹50-100)' },
            { label: 'Food Stalls', available: true, detail: 'Village & along route' },
            { label: 'Drinking Water', available: false, detail: 'Carry own; bottled available at stalls' },
            { label: 'Toilets', available: false, detail: 'Limited/basic at base' },
            { label: 'Mobile Network', available: true, detail: 'Moderate (Jio, Airtel)' },
            { label: 'Guides', available: true, detail: '₹300-500' }
        ],

        quickFacts: [
            { label: 'Height', value: '1,646 m (5,400 ft) — Highest in Maharashtra' },
            { label: 'District', value: 'Ahmednagar (Akole taluka)' },
            { label: 'Fort Type', value: 'Peak (with temple)' },
            { label: 'Named After', value: 'Local woman Kalsubai' },
            { label: 'Famous For', value: 'Everest of Maharashtra' },
            { label: 'Iron Ladders', value: 'Multiple along the route' },
            { label: 'Difficulty', value: 'Moderate' },
            { label: 'Kids Appropriate', value: 'Yes (age 10+)' },
            { label: 'Best Season', value: 'Nov-Feb (clear views)' },
            { label: 'Best Combined', value: 'Bhandardara + Ratangad' }
        ],

        reviews: {
            quote: "Standing at the highest point in Maharashtra, watching the sun rise over the Sahyadri range, with Alang-Madan-Kulang in the distance — it's a life-changing moment.",
            positives: [
                'Highest point in Maharashtra — incredible bragging rights',
                'Breathtaking 360° summit views',
                'Iron ladders add excitement to the trek',
                'Well-defined trail accessible to beginners',
                'Sacred temple at the peak adds spiritual dimension'
            ],
            proTips: [
                'Do the sunrise trek — start at 3-4 AM for magical views',
                'Visit on weekdays to avoid massive weekend crowds at ladders',
                'Carry warm layers — summit temperature drops significantly',
                'Combine with Bhandardara for a full weekend trip',
                'The monsoon trek is beautiful but ladders are dangerously slippery'
            ],
            rating: 4.8,
            reviewCount: '12,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 22. MALHARGAD FORT ━━━━━━━━━━━━━━━━━━
    malhargad: {
        introduction: `Malhargad Fort — also known as Sonori Fort — holds a special place in Maratha history 
            as the last fort ever built during the Maratha Empire. Constructed in 1757 during the Peshwa 
            period near Saswad in Pune district, this compact fort represents the twilight of the great 
            Maratha fort-building tradition. Despite its small size, Malhargad offers an easy, family-friendly 
            trek with scenic views of the surrounding Pune countryside and a well-preserved temple dedicated 
            to Lord Malhar (Shiva) at its summit.`,

        quote: {
            text: "मल्हारगड — मराठा साम्राज्यातील शेवटचा किल्ला, १७५७",
            attribution: "Historical records on the last Maratha fort"
        },

        timeline: [
            { year: '1757', title: '🏗️ Fort Construction', desc: 'Malhargad was built during the Peshwa era, making it the last fort constructed by the Maratha Empire. It was designed to guard the pass near Dive Ghat on the Saswad-Pune route.' },
            { year: '1757-1818', title: 'Peshwa Guard Post', desc: 'The fort served as a strategic guard post controlling the movement through Dive Ghat. A small garrison was maintained here throughout the Peshwa period.' },
            { year: '1818', title: 'British Acquisition', desc: 'Like all Maratha forts, Malhargad was surrendered to the British after the fall of the Peshwa regime in the Third Anglo-Maratha War.' },
            { year: 'Present', title: 'Heritage Trek', desc: 'Now a popular beginner-friendly trek near Pune. The short distance and easy terrain make it ideal for families and first-time trekkers.' }
        ],

        landmarks: [
            { title: 'Malhar Temple', desc: 'A well-preserved temple dedicated to Lord Malhar (Shiva) inside the fort walls. The temple is the spiritual heart of the fort and features simple but elegant stone architecture.', mustSee: true },
            { title: 'Fort Walls & Gates', desc: 'Defensive walls surrounding the fort with partially intact entrance gates. The fortification design shows classic late-Maratha military architecture.', mustSee: true },
            { title: 'Bastions & Viewpoints', desc: 'Small bastions at strategic points offering panoramic views of the Saswad countryside, Dive Ghat pass, and surrounding agricultural landscape.', mustSee: true },
            { title: 'Plateau Area', desc: 'A compact fort-top plateau ideal for relaxation and picnics. The relatively flat terrain makes it accessible for elderly and children.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Traditional village meal available at Sonori village and nearby Saswad town.' },
            { name: 'Misal Pav', type: 'Veg', price: '₹50-80', desc: 'Available at eateries in Saswad town (8 km away). Pune-style misal with extra tarri.' },
            { name: 'Chai & Snacks', type: 'Beverage', price: '₹20-50', desc: 'Basic refreshments at the base village. Limited variety — carry your own snacks.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Sonori Village Route (Main)', difficulty: 'Easy', distance: '2 km', time: '45-60 min', desc: 'A short and straightforward trek with gradual ascent from Sonori village. Clear trail markings and gentle slope make it suitable for beginners, families, and elderly visitors.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune (Swargate) to Saswad town (25 km). From Saswad, auto or local transport to Sonori village (~8 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via Dive Ghat to Sonori village. ~30 km from Pune, about 1-hour drive. Parking available at base.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Popular short ride from Pune. Scenic route through Dive Ghat. Park at Sonori village.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — easy terrain, no heavy trekking needed',
            'Carry 1 litre of water — short trek',
            'Sunscreen and cap in summer — limited shade',
            'Camera — scenic views of Pune countryside',
            'Allow 1.5-2 hours for complete exploration',
            'Carry light snacks — limited stalls at base',
            'Best visited in morning or evening hours',
            'Great for first-time trekkers and families'
        ],

        safetyAlerts: [
            { msg: 'Easy trek suitable for beginners — minimal risk', season: 'All year' },
            { msg: 'No shade during summer — carry sun protection', season: 'Summer' },
            { msg: 'Carry own water — no drinking water on fort', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (from Pune)', value: '₹100-300' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹250-600', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Free at base village' },
            { label: 'Food Stalls', available: true, detail: 'Basic at base' },
            { label: 'Drinking Water', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'Not available on fort' },
            { label: 'Mobile Network', available: true, detail: 'Good (Jio, Airtel)' },
            { label: 'Guides', available: false, detail: 'Not required' }
        ],

        quickFacts: [
            { label: 'Also Known As', value: 'Sonori Fort' },
            { label: 'District', value: 'Pune (Purandar taluka)' },
            { label: 'Altitude', value: '789 m (2,589 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Built By', value: 'Peshwa era (1757)' },
            { label: 'Famous For', value: 'Last Maratha Empire fort ever built' },
            { label: 'Difficulty', value: 'Easy' },
            { label: 'Elderly Friendly', value: 'Yes' },
            { label: 'Kids Appropriate', value: 'Yes' },
            { label: 'Best Combined', value: 'Purandar Fort + Saswad town' }
        ],

        reviews: {
            quote: "Malhargad is a perfect introduction to fort trekking. Easy, scenic, and historically significant as the last fort the Marathas ever built.",
            positives: [
                'Extremely easy trek — perfect for beginners',
                'Unique historical significance as the last Maratha fort',
                'Close to Pune — ideal half-day trip',
                'Family and elderly friendly',
                'Well-preserved Malhar temple at the summit'
            ],
            proTips: [
                'Combine with Purandar Fort for a full day of history',
                'Visit during monsoon for lush green surroundings',
                'Stop at Saswad for misal pav on the way',
                'Best for sunset or early morning visits',
                'Great first fort trek for children and beginners'
            ],
            rating: 4.4,
            reviewCount: '3,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 23. PANDAVGAD FORT ━━━━━━━━━━━━━━━━━━
    pandavgad: {
        introduction: `Pandavgad Fort is a massive hill fort located near the historic town of Wai in 
            Satara district. Known for its mythological connection to the Pandavas from the Mahabharata, 
            the fort features ancient caves, a sprawling plateau, and spectacular views of the Dhom Dam 
            and the surrounding Sahyadri ranges. The trek is moderately easy, making it suitable for 
            beginners. The combination of mythology, history, and natural beauty makes Pandavgad a 
            rewarding yet uncrowded destination.`,

        quote: {
            text: "पांडवगड — पांडवांच्या पौराणिक कथांचे साक्षीदार",
            attribution: "On Pandavgad's mythological connections"
        },

        timeline: [
            { year: 'Ancient', title: 'Mythological Origins', desc: 'According to local legend, the Pandavas from the Mahabharata stayed in caves on this hilltop during their exile. The fort is named after them.' },
            { year: '12th Century', title: 'Shilahara Fortification', desc: 'The Shilahara dynasty built the first fortifications on the strategic hilltop, establishing it as a military outpost overlooking the surrounding valleys.' },
            { year: '17th Century', title: 'Maratha Control', desc: 'The fort was captured by the Marathas who used it for surveillance and controlling trade routes in the Satara-Wai region.' },
            { year: '1818', title: 'British Period', desc: 'Pandavgad was surrendered to the British along with other Maratha forts after the Third Anglo-Maratha War.' },
            { year: 'Present', title: 'Trekking Destination', desc: 'Now a popular trekking destination known for the Pandav Caves, Dhom Dam views, and peaceful plateau exploration.' }
        ],

        landmarks: [
            { title: 'Pandav Caves', desc: 'Ancient caves believed to have been used by the Pandavas during their exile from the Mahabharata. The caves show signs of habitation and have interesting rock formations.', mustSee: true },
            { title: 'Fort Plateau', desc: 'A large, flat-top area ideal for exploration and relaxation. The wide plateau was historically used for settlements and military camps.', mustSee: true },
            { title: 'Dhom Dam Viewpoint', desc: 'Panoramic viewpoint offering stunning views of the Dhom Dam reservoir and the surrounding valley. One of the most scenic views in the Satara district.', mustSee: true },
            { title: 'Fort Walls & Foundations', desc: 'Remnants of defensive walls and building foundations scattered across the plateau. Evidence of the fort\'s strategic and residential use.', mustSee: false },
            { title: 'Water Cisterns', desc: 'Rock-cut tanks used for rainwater collection and storage. Some still function during the monsoon season.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Traditional meal available at villages near the base. Simple, authentic, and filling.' },
            { name: 'Wai Town Restaurants', type: 'Veg', price: '₹100-250', desc: 'The historic town of Wai has several restaurants serving Maharashtrian meals, snacks, and sweets.' },
            { name: 'Chai & Snacks', type: 'Beverage', price: '₹20-50', desc: 'Basic refreshments at the base village. Very limited — carry your own food for the trek.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Pandavgad Village Route', difficulty: 'Easy-Medium', distance: '3 km', time: '1.5-2 hours', desc: 'A gradual ascent through forest patches and rocky terrain leading to the wide plateau. Clear trail suitable for beginners with basic fitness.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Satara or Pune to Wai town. From Wai, local transport to the fort base village (~10 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Satara (~25 km) or Pune (~100 km) to Wai, then to the base village of Pandavgad. Parking available.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station is Satara (on Pune-Miraj line). Then road transport to Wai and the fort base.' }
        ],

        trekEssentials: [
            'Comfortable trekking shoes — rocky terrain in sections',
            'Carry 2 litres of water — no sources on the fort',
            'Light snacks and packed food',
            'Sun protection — exposed plateau',
            'Camera — Dhom Dam views are stunning',
            'Allow 3-4 hours for complete exploration',
            'Best started early morning to avoid heat',
            'Cash — limited facilities at base village'
        ],

        safetyAlerts: [
            { msg: 'No shade on the plateau — carry sun protection in summer', season: 'Summer' },
            { msg: 'Slippery trails during monsoon — wear proper grip shoes', season: 'Monsoon' },
            { msg: 'Carry own water — no drinking water on fort', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹350-800', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Free at base village' },
            { label: 'Food Stalls', available: false, detail: 'Very limited at base' },
            { label: 'Drinking Water', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'Not available' },
            { label: 'Mobile Network', available: true, detail: 'Moderate (Jio, Airtel)' },
            { label: 'Guides', available: false, detail: 'Not required' }
        ],

        quickFacts: [
            { label: 'District', value: 'Satara (Wai taluka)' },
            { label: 'Altitude', value: '1,273 m (4,176 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Built By', value: 'Shilahara dynasty' },
            { label: 'Famous For', value: 'Pandav Caves, Dhom Dam views' },
            { label: 'Difficulty', value: 'Easy to Moderate' },
            { label: 'Kids Appropriate', value: 'Yes' },
            { label: 'Best Season', value: 'Nov-Feb' },
            { label: 'Nearest Town', value: 'Wai (10 km)' },
            { label: 'Best Combined', value: 'Wai temples + Dhom Dam' }
        ],

        reviews: {
            quote: "Pandavgad offers a beautiful mix of mythology, nature, and history. The Dhom Dam views from the plateau are absolutely spectacular — worth every step of the climb.",
            positives: [
                'Stunning views of Dhom Dam from the plateau',
                'Fascinating Pandav Caves with mythological significance',
                'Easy to moderate trek — suitable for beginners',
                'Low crowds — peaceful exploration',
                'Close to historic Wai town for additional sightseeing'
            ],
            proTips: [
                'Visit in post-monsoon for the best Dhom Dam views (full reservoir)',
                'Combine with Wai\'s ancient temples for a culture-rich trip',
                'Carry all food and water — nothing on the fort',
                'Start early morning for pleasant trekking weather',
                'The Pandav Caves are best explored with a local guide\'s stories'
            ],
            rating: 4.5,
            reviewCount: '3,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 24. HADSAR FORT ━━━━━━━━━━━━━━━━━━
    hadsar: {
        introduction: `Hadsar Fort is a rugged and thrilling hill fort near Junnar in Pune district, forming 
            part of the renowned Junnar fort belt alongside Shivneri, Chavand, and Jivdhan. The fort is 
            famous for its dramatic rock-cut steps and a grand entrance gate carved directly into the mountain 
            face — a testament to the ingenuity of ancient builders. The trek offers a mix of forest trails 
            and challenging final ascent, rewarding with panoramic views of surrounding forts and the lush 
            Junnar countryside. It's a must-visit for trekkers who seek both adventure and architectural wonder.`,

        quote: {
            text: "हदसर — खडकात कोरलेले पायऱ्या आणि दरवाजा, जुन्नर किल्ला पट्टा",
            attribution: "On Hadsar's unique rock-cut entrance"
        },

        timeline: [
            { year: '2nd Century', title: 'Satavahana Origins', desc: 'The earliest fortifications date to the Satavahana dynasty who controlled the Junnar region. Rock-cut cisterns and cave structures suggest ancient habitation.' },
            { year: '14th Century', title: 'Bahmani Period', desc: 'The Bahmani Sultanate expanded the fortifications and used Hadsar as part of the Junnar defense network.' },
            { year: '17th Century', title: 'Maratha Period', desc: 'Under the Marathas, Hadsar became an important outpost in the Junnar fort belt, coordinating with Shivneri and Chavand for regional defense.' },
            { year: '1818', title: 'British Annexation', desc: 'Hadsar was surrendered to the British East India Company during the Third Anglo-Maratha War. The fort was subsequently abandoned.' },
            { year: 'Present', title: 'Trekking Destination', desc: 'Now popular among adventure trekkers for its dramatic rock-cut steps, challenging terrain, and views of Shivneri and surrounding forts.' }
        ],

        landmarks: [
            { title: 'Rock-Cut Steps', desc: 'Steep, narrow steps carved directly into the vertical rock face leading to the fort entrance. An engineering marvel that also served as a natural defense — attackers had to climb single-file under fire.', mustSee: true },
            { title: 'Main Entrance Gate', desc: 'A massive entrance gate carved into the rock face of the mountain. The gate architecture is impressive and unique — one of the most dramatic fort entrances in the Sahyadris.', mustSee: true },
            { title: 'Fort Plateau', desc: 'An open plateau at the summit offering stunning views of Shivneri Fort, Chavand, Jivdhan, and the Junnar valley below. The panorama of surrounding forts is breathtaking.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Rock-cut water tanks that were essential for the fort\'s water supply. The Satavahana-era cisterns show sophisticated water harvesting techniques.', mustSee: true },
            { title: 'Fort Walls & Bastions', desc: 'Remains of defensive walls and bastions along the plateau edge. Some sections are well-preserved and offer viewpoints.', mustSee: false }
        ],

        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Traditional rural dish available at Hadsar base village and in Junnar town.' },
            { name: 'Junnar Misal', type: 'Veg', price: '₹40-60', desc: 'Junnar is famous for its lighter, aromatic misal — different from Pune style. Try it in Junnar town.' },
            { name: 'Village Meals', type: 'Veg', price: '₹100-250', desc: 'Simple home-cooked meals at Hadsar village. Dal-rice, bhakri, and sabzi.' },
            { name: 'Sugarcane Juice', type: 'Beverage', price: '₹20-30', desc: 'Fresh sugarcane juice at roadside stalls — Junnar is a major sugarcane region.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Hadsar Village Route (Main)', difficulty: 'Medium-Hard', distance: '3 km', time: '1.5-2 hours', desc: 'The trek begins with a gradual climb through forest and ends with steep rock-cut steps leading to the main entrance. The final section is challenging and requires careful footing — thrilling and rewarding.' },
            { icon: '⛰️', title: 'Ridge Route from Jivdhan Side', difficulty: 'Hard', distance: '5 km', time: '3-4 hours', desc: 'A longer route connecting from the Junnar side. More strenuous but offers views of the entire fort belt. For experienced trekkers.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune (Shivajinagar) to Junnar town (~100 km, 2.5 hrs). From Junnar, local transport to Hadsar base village (~15 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via Chakan → Narayangaon → Junnar to Hadsar village. ~115 km from Pune. Parking at base village.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Scenic ride from Pune through the Junnar ghats. Park at Hadsar village and trek.' }
        ],

        trekEssentials: [
            'Sturdy trekking shoes with good grip — steep rock-cut steps',
            'Carry 2-3 litres of water — limited sources',
            'Gloves recommended for the rock-cut steps section',
            'Headlamp for early starts',
            'Carry food and snacks — nothing available on fort',
            'Sun protection — exposed plateau at top',
            'First-aid kit — remote area',
            'Start early morning to avoid heat and crowds'
        ],

        safetyAlerts: [
            { msg: 'Rock-cut steps are steep and narrow — use extreme caution', season: 'All year' },
            { msg: 'Avoid trekking during heavy rain — steps become dangerously slippery', season: 'Monsoon' },
            { msg: 'No railings near cliff edges — keep safe distance', season: 'All year' },
            { msg: 'Not recommended for children under 12 or elderly due to steep final section', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (from Pune)', value: '₹200-500' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Guide', value: '₹300-500' },
            { label: 'Total', value: '₹400-900', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Free at base village' },
            { label: 'Food Stalls', available: false, detail: 'Only at base village' },
            { label: 'Drinking Water', available: false, detail: 'Carry own + seasonal cisterns' },
            { label: 'Toilets', available: false, detail: 'Not available on fort' },
            { label: 'Mobile Network', available: true, detail: 'Moderate (Jio, Airtel)' },
            { label: 'Guides', available: true, detail: '₹300-500' }
        ],

        quickFacts: [
            { label: 'District', value: 'Pune (Junnar taluka)' },
            { label: 'Altitude', value: '1,067 m (3,501 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Built By', value: 'Satavahana dynasty' },
            { label: 'Famous For', value: 'Rock-cut steps & entrance gate' },
            { label: 'Difficulty', value: 'Moderate to Hard' },
            { label: 'Rock Steps', value: '~100 carved into cliff' },
            { label: 'Kids Appropriate', value: 'No (steep final section)' },
            { label: 'Best Season', value: 'Nov-Feb' },
            { label: 'Best Combined', value: 'Shivneri + Chavand + Junnar circuit' }
        ],

        reviews: {
            quote: "The rock-cut steps at Hadsar are absolutely thrilling — climbing single-file up a cliff face through a gate carved into the mountain. This is fort trekking at its most dramatic.",
            positives: [
                'Dramatic rock-cut entrance is unique in Maharashtra',
                'Thrilling final ascent adds adventure value',
                'Stunning views of Shivneri and Junnar fort belt',
                'Less crowded than nearby Shivneri',
                'Part of the historic Junnar fort circuit'
            ],
            proTips: [
                'Combine with Shivneri Fort for a full Junnar fort day trip',
                'Visit in post-monsoon when the surroundings are lush green',
                'Wear shoes with excellent grip — the steps are steep and narrow',
                'Start early to avoid afternoon heat on the exposed plateau',
                'Hire a local guide for historical context and easier navigation'
            ],
            rating: 4.6,
            reviewCount: '4,200+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 25. BHAIRAVGAD FORT ━━━━━━━━━━━━━━━━━━
    bhairavgad: {
        introduction: `Bhairavgad Fort in the Malshej Ghat region is a wild and remote hill fort known for its 
            dense forest trails, steep climbs, and a massive natural cave at the summit that can accommodate 
            over 40 people. It is one of the most adventurous treks in Maharashtra, especially during monsoon 
            when waterfalls surround the fort. A small Bhairavnath temple inside the cave adds a spiritual 
            dimension to this raw, untamed trekking experience.`,
        quote: { text: "भैरवगड — जंगलात लपलेला किल्ला, गुहेत दडलेला इतिहास", attribution: "On Bhairavgad's hidden wilderness" },
        timeline: [
            { year: 'Ancient', title: 'Natural Shelter', desc: 'The massive cave on Bhairavgad has served as a natural shelter for centuries. Local tribes and travelers used it as protection from weather and wildlife.' },
            { year: 'Medieval', title: 'Watchpoint Fort', desc: 'The strategic hilltop was used as a watchpoint to monitor movement through the Malshej Ghat region.' },
            { year: '17th Century', title: 'Maratha Period', desc: 'During the Maratha Empire, Bhairavgad served as a remote outpost in the northern Sahyadri defense network.' },
            { year: 'Present', title: 'Adventure Trek', desc: 'Now one of Maharashtra\'s most sought-after adventure treks, especially popular during monsoon for its dramatic waterfalls and misty landscapes.' }
        ],
        landmarks: [
            { title: 'Bhairavgad Cave', desc: 'A massive natural cave at the summit capable of sheltering 40+ people. Used by trekkers for overnight camping. The cave\'s sheer size and natural formation make it one of the most impressive summit caves in the Sahyadris.', mustSee: true },
            { title: 'Bhairavnath Temple', desc: 'A small temple dedicated to Lord Bhairavnath located inside the cave. Locals conduct pujas here. The temple adds spiritual significance to the trek.', mustSee: true },
            { title: 'Malshej Valley View', desc: 'Panoramic viewpoint offering stunning views of Malshej Ghat, surrounding mountains, and during monsoon, countless waterfalls cascading down the valley walls.', mustSee: true }
        ],
        food: [
            { name: 'Village Meals', type: 'Veg', price: '₹100-200', desc: 'Simple home-cooked food at Moroshi village. Arrange meals in advance with villagers.' },
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Traditional rural meal at the base village.' },
            { name: 'Self-Carried Food', type: 'N/A', price: 'N/A', desc: 'No food on fort or route — carry all supplies. Essential for this remote trek.' }
        ],
        trekRoutes: [
            { icon: '🥾', title: 'Moroshi Route (Main)', difficulty: 'Hard', distance: '4 km', time: '2-3 hours', desc: 'Starts through farmland, enters dense forest, followed by steep rocky patches and final climb to cave. Navigation tricky in forest — guide strongly recommended.' }
        ],
        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Moroshi village via Malshej Ghat road. ~130 km from Mumbai, ~170 km from Pune. Parking at village.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus to Malshej Ghat from Mumbai/Pune. From Malshej, local transport to Moroshi (~20 km).' }
        ],
        trekEssentials: [
            'Sturdy trekking shoes with excellent grip — steep rocky patches',
            'Carry 3+ litres of water — no sources on route',
            'All food and snacks — nothing available on fort',
            'Headlamp — essential if camping in cave',
            'Rain gear during monsoon — heavy rainfall',
            'First-aid kit — remote area',
            'Hire local guide from Moroshi — ₹400-600 (strongly recommended)',
            'Inform someone before trekking — no network coverage'
        ],
        safetyAlerts: [
            { msg: 'Dense forest route — easy to get lost without guide', season: 'All year' },
            { msg: 'Steep and slippery rock patches — extreme caution', season: 'Monsoon' },
            { msg: 'Wildlife presence in forest area — stay alert', season: 'All year' },
            { msg: 'No mobile network — inform someone before trekking', season: 'All year' }
        ],
        budget: [
            { label: 'Transport', value: '₹300-700' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Guide', value: '₹400-600' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹600-1300', highlight: true }
        ],
        facilities: [
            { label: 'Parking', available: true, detail: 'Free at Moroshi village' },
            { label: 'Food Stalls', available: false, detail: 'Carry own food' },
            { label: 'Drinking Water', available: false, detail: 'No reliable sources' },
            { label: 'Toilets', available: false, detail: 'Not available' },
            { label: 'Mobile Network', available: false, detail: 'Very weak / no signal' },
            { label: 'Guides', available: true, detail: '₹400-600 (strongly recommended)' }
        ],
        quickFacts: [
            { label: 'District', value: 'Ahmednagar' },
            { label: 'Altitude', value: '1,145 m (3,757 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Famous For', value: 'Massive summit cave (40+ capacity)' },
            { label: 'Difficulty', value: 'Hard' },
            { label: 'Kids Appropriate', value: 'No' },
            { label: 'Best Season', value: 'Nov-Feb (safe), Monsoon (scenic)' },
            { label: 'Camping', value: 'Yes — inside summit cave' },
            { label: 'Guide Required', value: 'Strongly recommended' },
            { label: 'Best Combined', value: 'Malshej Ghat + Harishchandragad' }
        ],
        reviews: {
            quote: "Bhairavgad is raw, wild, and unforgettable. The massive cave at the summit, the dense forest trail, and the monsoon waterfalls make it one of Maharashtra's most thrilling treks.",
            positives: ['Massive summit cave — unique overnight camping experience', 'Dense forest trail adds adventure', 'Spectacular monsoon waterfalls', 'Remote and uncrowded', 'Bhairavnath temple inside cave'],
            proTips: ['Hire a guide from Moroshi — the forest trail is confusing', 'Monsoon trek is magical but extremely slippery', 'Camp overnight in the cave for the full experience', 'Carry all food, water, and supplies', 'Combine with Malshej Ghat sightseeing'],
            rating: 4.6, reviewCount: '2,800+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 26. MANGI-TUNGI ━━━━━━━━━━━━━━━━━━
    mangitungi: {
        introduction: `Mangi-Tungi is a sacred twin peak in Nashik district and one of the most important 
            Jain pilgrimage sites in India. Known for its 4,500+ carved stone steps and the world's tallest 
            Jain statue of Lord Rishabhdev (108 ft), the climb is both physically demanding and spiritually 
            profound. Hundreds of ancient rock-cut Jain idols line the route, making every step a journey 
            through centuries of devotion and artistry.`,
        quote: { text: "मांगी-तुंगी — जैन तीर्थक्षेत्राचे पवित्र शिखर", attribution: "On Mangi-Tungi's spiritual significance" },
        timeline: [
            { year: 'Ancient', title: 'Jain Sacred Site', desc: 'Mangi-Tungi has been revered as a sacred Jain Siddha Kshetra for centuries. According to Jain tradition, numerous Jain monks attained Moksha (liberation) here.' },
            { year: 'Medieval', title: 'Rock-Cut Carvings', desc: 'Hundreds of Jain Tirthankara idols were carved into the rock face along the steps. These carvings represent one of the richest collections of Jain rock art in India.' },
            { year: '2016', title: '108 ft Rishabhdev Statue', desc: 'The world\'s tallest Jain statue — a 108 ft monolithic statue of Lord Rishabhdev (Adinath) — was unveiled at the base, making Mangi-Tungi a global Jain landmark.' },
            { year: 'Present', title: 'Pilgrimage & Trek', desc: 'Mangi-Tungi attracts Jain pilgrims and adventure trekkers alike. The 4,500+ steps make it one of the most physically demanding pilgrimages in India.' }
        ],
        landmarks: [
            { title: '108 ft Rishabhdev Statue', desc: 'The world\'s tallest Jain statue located at the base — a stunning 108 ft monolithic statue of Lord Rishabhdev (Adinath). A modern marvel and global Jain landmark.', mustSee: true },
            { title: 'Rock-Cut Jain Idols', desc: 'Hundreds of ancient Jain Tirthankara carvings line the route up both peaks. These centuries-old carvings represent one of India\'s richest collections of Jain rock art.', mustSee: true },
            { title: 'Twin Peaks (Mangi & Tungi)', desc: 'Two separate summits offering panoramic 360° views of the Sahyadri landscape. Each peak has its own collection of temples and carvings. Reaching both is the ultimate goal.', mustSee: true },
            { title: 'Jain Temples', desc: 'Multiple temples dedicated to various Jain Tirthankaras along the route and at both summits. Each temple is a point of prayer and reflection during the climb.', mustSee: false }
        ],
        food: [
            { name: 'Jain Bhojan (Sattvik Meal)', type: 'Veg', price: '₹100-150', desc: 'Pure sattvik food without onion/garlic available at the temple base. Simple, clean, and filling.' },
            { name: 'Temple Bhojanalaya', type: 'Veg', price: '₹100-200', desc: 'Dining facility at the base area serving pure Jain meals. Operates during peak hours.' },
            { name: 'Snacks & Water', type: 'Veg', price: '₹20-50', desc: 'Limited stalls on the steps. Carry your own water for the climb.' }
        ],
        trekRoutes: [
            { icon: '🥾', title: 'Taharabad Steps Route', difficulty: 'Hard', distance: '4 km', time: '2.5-3.5 hours', desc: 'More than 4,500 stone steps carved into the mountain leading to both peaks. The climb is continuous, physically demanding, and requires strong stamina. Rest shelters along the way.' }
        ],
        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nashik via Satana to Taharabad (~130 km). From Mumbai ~350 km. Large parking area at base.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nashik to Satana town. From Satana, local transport to Taharabad (~30 km).' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Manmad (on Mumbai-Delhi line). Then road transport to Taharabad (~80 km).' }
        ],
        trekEssentials: [
            'Comfortable shoes with cushioning — 4,500+ steps are brutal on joints',
            'Carry 2-3 litres of water — limited availability on steps',
            'Energy snacks and glucose — physically exhausting climb',
            'Start very early (5 AM) to avoid afternoon heat',
            'Knee support/trekking poles recommended',
            'Sun protection — exposed route',
            'Allow 5-7 hours for both peaks',
            'Respect the religious site — maintain decorum'
        ],
        safetyAlerts: [
            { msg: '4,500+ steps — physically exhausting, assess fitness before attempting', season: 'All year' },
            { msg: 'Heat exhaustion risk — avoid afternoon climb', season: 'Summer' },
            { msg: 'Well-structured steps reduce fall risk, but pace yourself', season: 'All year' }
        ],
        budget: [
            { label: 'Transport', value: '₹300-700' },
            { label: 'Parking', value: '₹50-100' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹500-1000', highlight: true }
        ],
        facilities: [
            { label: 'Parking', available: true, detail: 'Large area (₹50-100)' },
            { label: 'Washrooms', available: true, detail: 'At base' },
            { label: 'Drinking Water', available: true, detail: 'Base area + limited on steps' },
            { label: 'Food', available: true, detail: 'Jain Bhojanalaya at base' },
            { label: 'First Aid', available: true, detail: 'Temple area' },
            { label: 'Mobile Network', available: true, detail: 'Moderate (Jio, Airtel)' }
        ],
        quickFacts: [
            { label: 'District', value: 'Nashik (Baglan taluka)' },
            { label: 'Altitude', value: '1,343 m (4,406 ft)' },
            { label: 'Type', value: 'Sacred Twin Peak' },
            { label: 'Steps', value: '4,500+ carved stone steps' },
            { label: 'Famous For', value: 'World\'s tallest Jain statue (108 ft)' },
            { label: 'Difficulty', value: 'Moderate to Hard' },
            { label: 'Religious', value: 'Major Jain Siddha Kshetra' },
            { label: 'Kids Appropriate', value: 'Yes (older children)' },
            { label: 'Best Season', value: 'Nov-Feb' },
            { label: 'Best Combined', value: 'Salher + Mulher forts (Baglan region)' }
        ],
        reviews: {
            quote: "Mangi-Tungi is not just a trek — it's a pilgrimage of endurance and faith. 4,500 steps of devotion, centuries of rock-cut Jain art, and the world's tallest Jain statue make it unforgettable.",
            positives: ['World\'s tallest Jain statue is awe-inspiring', 'Hundreds of ancient rock-cut carvings', 'Spiritually profound experience', 'Well-maintained steps and facilities', 'Panoramic views from both peaks'],
            proTips: ['Start at 5 AM to avoid heat and complete both peaks', 'Wear cushioned shoes — your knees will thank you', 'Carry glucose and energy snacks for the climb', 'Visit during Jain festivals for the full spiritual experience', 'Knee support recommended for the descent'],
            rating: 4.7, reviewCount: '6,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 27. ANJANERI FORT ━━━━━━━━━━━━━━━━━━
    anjaneri: {
        introduction: `Anjaneri Fort is a scenic hill fort near Trimbakeshwar in Nashik district, traditionally 
            believed to be the birthplace of Lord Hanuman. The trek is relatively easy and passes through 
            plateaus, forest trails, and temple complexes, offering panoramic views of the Brahmagiri range 
            and Nashik valley. The combination of mythological significance, easy accessibility, and natural 
            beauty makes Anjaneri one of the most visited forts near Nashik.`,
        quote: { text: "अंजनेरी — हनुमानाचे जन्मस्थान, श्रद्धा आणि सह्याद्रीचा संगम", attribution: "On Anjaneri's mythological roots" },
        timeline: [
            { year: 'Ancient', title: 'Mythological Origins', desc: 'According to Hindu mythology, Anjaneri is the birthplace of Lord Hanuman. His mother Anjani Mata is said to have lived on this hill. The fort is named after her.' },
            { year: '12th Century', title: 'Yadava Fortification', desc: 'The Yadava dynasty built fortifications on the hill, establishing it as a military outpost near Trimbakeshwar.' },
            { year: '17th Century', title: 'Maratha Period', desc: 'Under the Marathas, Anjaneri served as a strategic fort in the Nashik region, coordinating with nearby forts for regional defense.' },
            { year: 'Present', title: 'Pilgrimage & Trek', desc: 'Now a popular destination combining religious pilgrimage (Hanuman birthplace) with easy trekking. The Anjani Mata temple draws devotees year-round.' }
        ],
        landmarks: [
            { title: 'Anjani Mata Temple', desc: 'Temple dedicated to Anjani Mata, believed to be the mother of Lord Hanuman. A major pilgrimage point where devotees offer prayers year-round.', mustSee: true },
            { title: 'Hanuman Birthplace Point', desc: 'Sacred location on the fort believed to be the exact spot where Lord Hanuman was born. Marked by religious significance and local devotion.', mustSee: true },
            { title: 'Fort Plateau', desc: 'Wide, scenic plateau offering panoramic views of the Brahmagiri range, Trimbakeshwar, and the Nashik valley. Great for relaxation and photography.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Ancient rock-cut water storage tanks on the plateau that provided water for fort inhabitants. Some still hold water seasonally.', mustSee: false }
        ],
        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'Traditional meal at Anjaneri base village.' },
            { name: 'Nashik Misal', type: 'Veg', price: '₹40-60', desc: 'Available at eateries in nearby Trimbakeshwar town.' },
            { name: 'Snacks & Tea', type: 'Veg', price: '₹20-50', desc: 'Available at base village stalls.' }
        ],
        trekRoutes: [
            { icon: '🥾', title: 'Anjaneri Village Route (Main)', difficulty: 'Easy', distance: '2.5-3 km', time: '1.5-2 hours', desc: 'Gradual climb through forest patches and open plateaus with well-defined trails and steps. Suitable for beginners, families, and all age groups.' }
        ],
        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nashik to Anjaneri village (~20 km). From Trimbakeshwar, ~10 km. Parking at base.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nashik to Trimbakeshwar. From Trimbakeshwar, local transport to Anjaneri village.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Nashik Road. Then road transport via Trimbakeshwar to Anjaneri.' }
        ],
        trekEssentials: [
            'Comfortable walking shoes — easy terrain', 'Carry 1-2 litres of water',
            'Sun protection — open plateau sections', 'Camera — Brahmagiri views are stunning',
            'Combine with Trimbakeshwar temple visit', 'Best in morning or evening hours'
        ],
        safetyAlerts: [
            { msg: 'Easy trek suitable for beginners — minimal risk', season: 'All year' },
            { msg: 'Slippery trails during monsoon — wear grip shoes', season: 'Monsoon' },
            { msg: 'Open plateau with limited shade in summer', season: 'Summer' }
        ],
        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹250-600', highlight: true }
        ],
        facilities: [
            { label: 'Parking', available: true, detail: '₹30-50 at base' },
            { label: 'Food Stalls', available: true, detail: 'At base village' },
            { label: 'Drinking Water', available: false, detail: 'Carry own' },
            { label: 'Toilets', available: false, detail: 'Limited/basic' },
            { label: 'Mobile Network', available: true, detail: 'Good (Jio, Airtel)' },
            { label: 'Guides', available: false, detail: 'Not required' }
        ],
        quickFacts: [
            { label: 'District', value: 'Nashik (Trimbakeshwar)' },
            { label: 'Altitude', value: '1,280 m (4,200 ft)' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Famous For', value: 'Birthplace of Lord Hanuman' },
            { label: 'Difficulty', value: 'Easy' },
            { label: 'Elderly Friendly', value: 'Yes' },
            { label: 'Kids Appropriate', value: 'Yes' },
            { label: 'Best Season', value: 'Nov-Feb & Monsoon' },
            { label: 'Nearby', value: 'Trimbakeshwar Jyotirlinga' },
            { label: 'Best Combined', value: 'Trimbakeshwar + Brahmagiri' }
        ],
        reviews: {
            quote: "Anjaneri is a beautiful blend of mythology and nature. The easy trek, the Hanuman connection, and the Brahmagiri panorama make it perfect for families and spiritual seekers.",
            positives: ['Easy trek perfect for all ages', 'Mythological significance — Hanuman birthplace', 'Beautiful Brahmagiri range views', 'Close to Nashik and Trimbakeshwar', 'Can combine with Jyotirlinga visit'],
            proTips: ['Visit Trimbakeshwar temple on the same trip', 'Best in post-monsoon for green landscapes', 'Great sunset spot from the plateau', 'Carry your own water and snacks', 'Perfect first trek for children'],
            rating: 4.6, reviewCount: '7,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 28. SUDHAGAD FORT ━━━━━━━━━━━━━━━━━━
    sudhagad: {
        introduction: `Sudhagad Fort, also known as Bhorapgad, is a massive hill fort in Raigad district that 
            was once considered by Chhatrapati Shivaji Maharaj as a potential capital of the Maratha Empire 
            before Raigad was finalized. Known for its vast plateau comparable in size to Raigad, the Bhorai 
            Devi temple, and scenic Konkan views, Sudhagad offers a rewarding trekking experience rich in 
            history and natural beauty.`,
        quote: { text: "सुधागड — शिवाजी महाराजांच्या राजधानीचा पर्याय", attribution: "On Sudhagad's near-capital status" },
        timeline: [
            { year: '10th Century', title: 'Shilahara Construction', desc: 'Built by the Shilahara dynasty as a strategic hill fort controlling the Konkan-Deccan routes.' },
            { year: '17th Century', title: 'Maratha Capital Contender', desc: 'Shivaji Maharaj renamed the fort Sudhagad and considered it as a potential capital before choosing Raigad.' },
            { year: '1818', title: 'British Takeover', desc: 'The fort was surrendered to the British after the Third Anglo-Maratha War.' },
            { year: 'Present', title: 'Heritage Trek', desc: 'Popular trekking destination with the Bhorai Devi temple drawing pilgrims and the vast plateau attracting history enthusiasts.' }
        ],
        landmarks: [
            { title: 'Bhorai Devi Temple', desc: 'Well-maintained temple at the summit dedicated to the local deity Bhorai Devi. The spiritual center of the fort.', mustSee: true },
            { title: 'Sudhagad Plateau', desc: 'Extremely large plateau comparable to Raigad in size. Great for exploration with scattered ruins and structures.', mustSee: true },
            { title: 'Fort Walls & Bastions', desc: 'Strong defensive walls and bastions protecting the fort\'s perimeter with views of the Konkan landscape.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Rock-cut water tanks that ensured year-round water for fort inhabitants.', mustSee: true }
        ],
        food: [
            { name: 'Simple Meals', type: 'Veg', price: '₹100-150', desc: 'Basic food at temple area.' },
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'At Pachapur base village.' }
        ],
        trekRoutes: [
            { icon: '🥾', title: 'Pachapur Route (Main)', difficulty: 'Easy-Medium', distance: '3 km', time: '1.5-2 hours', desc: 'Well-defined forest trail with gradual ascent to the fort plateau. Suitable for beginners.' }
        ],
        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune/Mumbai to Pali town, then to Pachapur village. ~100 km from Pune.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus to Pali. Then local transport to Pachapur (~20 km).' }
        ],
        trekEssentials: ['Good walking shoes', 'Carry 2L water', 'Sun protection', 'Camera', 'Allow 4-5 hours total'],
        safetyAlerts: [
            { msg: 'Fog reduces visibility during monsoon', season: 'Monsoon' },
            { msg: 'Large plateau — risk of losing direction', season: 'All year' }
        ],
        budget: [
            { label: 'Transport', value: '₹200-500' }, { label: 'Food', value: '₹150-300' },
            { label: 'Entry', value: 'Free' }, { label: 'Total', value: '₹400-900', highlight: true }
        ],
        facilities: [
            { label: 'Parking', available: true, detail: '₹30-50' }, { label: 'Drinking Water', available: true, detail: 'Temple area' },
            { label: 'Mobile Network', available: false, detail: 'Weak' }, { label: 'Guides', available: true, detail: '₹300-500' }
        ],
        quickFacts: [
            { label: 'District', value: 'Raigad (Pali)' }, { label: 'Also Known As', value: 'Bhorapgad' },
            { label: 'Altitude', value: '590 m' }, { label: 'Famous For', value: 'Potential Maratha capital' },
            { label: 'Difficulty', value: 'Easy to Moderate' }, { label: 'Kids Appropriate', value: 'Yes' }
        ],
        reviews: {
            quote: "Sudhagad is an underrated gem — a fort that nearly became the Maratha capital. The vast plateau, the Bhorai Devi temple, and the Konkan views reward every visitor.",
            positives: ['Nearly became Maratha capital', 'Vast plateau like Raigad', 'Bhorai Devi temple', 'Scenic Konkan views', 'Moderately easy trek'],
            proTips: ['Combine with Pali sightseeing', 'Visit during monsoon for green views', 'Allow half-day', 'The plateau is best explored with a guide'],
            rating: 4.6, reviewCount: '5,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 29. AVCHITGAD FORT ━━━━━━━━━━━━━━━━━━
    avchitgad: {
        introduction: `Avchitgad Fort is a small yet scenic hill fort near Roha in Raigad district. Surrounded 
            by dense greenery and offering beautiful views of the Kundalika river valley and Konkan landscape, 
            it is an easy and peaceful trekking destination. The fort was captured by Chhatrapati Shivaji 
            Maharaj from the Adilshahi in 1660 and served as a strategic outpost in the Konkan region.`,
        quote: { text: "अवचितगड — कोकणातील शांत आणि हिरवागार किल्ला", attribution: "On Avchitgad's tranquil beauty" },
        timeline: [
            { year: '16th Century', title: 'Adilshahi Construction', desc: 'Built by the Adil Shahi dynasty as a strategic fort in the Konkan region.' },
            { year: '1660', title: '⚔️ Shivaji\'s Capture', desc: 'Captured by Chhatrapati Shivaji Maharaj from the Adilshahi, adding it to the growing Maratha Swarajya.' },
            { year: '1818', title: 'British Period', desc: 'Surrendered to the British after the fall of the Maratha Empire.' },
            { year: 'Present', title: 'Peaceful Trek', desc: 'A quiet, easy trek offering Konkan greenery and Kundalika river valley views.' }
        ],
        landmarks: [
            { title: 'Fort Walls', desc: 'Remains of defensive walls used for regional defense.', mustSee: true },
            { title: 'Bastions', desc: 'Small bastions overlooking the Konkan valley — strategic watch points.', mustSee: true },
            { title: 'Water Tanks', desc: 'Rock-cut water storage tanks.', mustSee: true },
            { title: 'Kundalika Viewpoints', desc: 'Views of the Kundalika river valley and lush Konkan greenery.', mustSee: true }
        ],
        food: [
            { name: 'Pithla Bhakri', type: 'Veg', price: '₹80-120', desc: 'At base village or Roha town.' }
        ],
        trekRoutes: [
            { icon: '🥾', title: 'Medha Village Route', difficulty: 'Easy', distance: '2.5 km', time: '1-1.5 hours', desc: 'Short, straightforward trek through forest paths. Perfect for beginners and families.' }
        ],
        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Medha village near Roha. ~120 km from Mumbai, ~170 km from Pune.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Roha (Konkan Railway). Then local transport to Medha (~10 km).' }
        ],
        trekEssentials: ['Comfortable shoes', 'Carry 1-2L water', 'Insect repellent', 'Camera'],
        safetyAlerts: [
            { msg: 'Slippery trails during monsoon', season: 'Monsoon' },
            { msg: 'Dense vegetation — watch for insects', season: 'All year' }
        ],
        budget: [
            { label: 'Transport', value: '₹200-500' }, { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' }, { label: 'Total', value: '₹350-800', highlight: true }
        ],
        facilities: [
            { label: 'Parking', available: true, detail: 'Free at Medha' }, { label: 'Mobile Network', available: true, detail: 'Good' },
            { label: 'Food Stalls', available: false, detail: 'Carry own' }, { label: 'Drinking Water', available: false, detail: 'Carry own' }
        ],
        quickFacts: [
            { label: 'District', value: 'Raigad (Roha)' }, { label: 'Altitude', value: '330 m' },
            { label: 'Famous For', value: 'Kundalika views, easy Konkan trek' }, { label: 'Difficulty', value: 'Easy' },
            { label: 'Captured By', value: 'Shivaji Maharaj (1660)' }, { label: 'Kids Appropriate', value: 'Yes' }
        ],
        reviews: {
            quote: "Avchitgad is a hidden gem in the Konkan. Easy, green, and peaceful — perfect for a quiet day out.",
            positives: ['Very easy trek', 'Beautiful Konkan greenery', 'Kundalika river views', 'Low crowds', 'Shivaji Maharaj history'],
            proTips: ['Combine with Kundalika river rafting', 'Best in monsoon for lush greenery', 'Great for beginners and families'],
            rating: 4.4, reviewCount: '3,200+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ 30. KAMALGAD FORT ━━━━━━━━━━━━━━━━━━
    kamalgad: {
        introduction: `Kamalgad Fort is a lesser-known hill fort near Wai in Satara district. Known for its 
            unique geological feature called the 'Geru Well' — a deep vertical pit carved into rock — the 
            fort offers a short yet adventurous trek with scenic views of the Dhom Dam and surrounding 
            Sahyadri ranges. The final rock patch adds a thrill for moderate-level trekkers.`,
        quote: { text: "कमळगड — गेरू विहीर आणि ढोम धरणाचे विहंगम दृश्य", attribution: "On Kamalgad's unique features" },
        timeline: [
            { year: 'Medieval', title: 'Fort Construction', desc: 'Built as a lookout fort connected to the broader Maratha signaling and defense network in the Sahyadri region.' },
            { year: '17th Century', title: 'Maratha Use', desc: 'Used by the Marathas for surveillance and communication with nearby forts through fire signals.' },
            { year: '1818', title: 'British Period', desc: 'Abandoned after the fall of the Maratha Empire.' },
            { year: 'Present', title: 'Adventure Trek', desc: 'Known for the Geru Well feature and scenic Dhom Dam views among trekking enthusiasts.' }
        ],
        landmarks: [
            { title: 'Geru Well', desc: 'A deep cylindrical pit carved into rock, accessed via internal steps. Possibly used as a prison or secret storage. A unique feature rare among Maharashtra forts.', mustSee: true },
            { title: 'Dhom Dam View', desc: 'Beautiful panoramic view of Dhom Dam and its surrounding valley from the fort plateau.', mustSee: true },
            { title: 'Fort Plateau', desc: 'Flat top area with limited structures but excellent views of the Sahyadri landscape.', mustSee: true }
        ],
        food: [
            { name: 'Wai Town Restaurants', type: 'Veg', price: '₹100-250', desc: 'Wai has several eateries. Carry own food for the trek.' }
        ],
        trekRoutes: [
            { icon: '🥾', title: 'Tupewadi Route', difficulty: 'Medium', distance: '2.5 km', time: '1.5-2 hours', desc: 'Forest trail followed by steep climb and rock patch near the top. Final section requires careful climbing.' }
        ],
        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Wai to Tupewadi village (~30 km from Wai). ~130 km from Pune.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus to Wai. Then local transport to Tupewadi.' }
        ],
        trekEssentials: ['Trekking shoes with grip', 'Carry 2L water', 'Gloves for rock patch', 'Camera for Dhom Dam views'],
        safetyAlerts: [
            { msg: 'Final rock patch requires careful climbing', season: 'All year' },
            { msg: 'Geru well is deep — avoid careless entry', season: 'All year' },
            { msg: 'Slippery in monsoon', season: 'Monsoon' }
        ],
        budget: [
            { label: 'Transport', value: '₹200-500' }, { label: 'Food', value: '₹100-200' },
            { label: 'Guide', value: '₹300-500' }, { label: 'Total', value: '₹500-1000', highlight: true }
        ],
        facilities: [
            { label: 'Parking', available: true, detail: 'Free at base' }, { label: 'Mobile Network', available: true, detail: 'Moderate' },
            { label: 'Guides', available: true, detail: '₹300-500' }, { label: 'Drinking Water', available: false, detail: 'Carry own' }
        ],
        quickFacts: [
            { label: 'District', value: 'Satara (Wai)' }, { label: 'Altitude', value: '1,312 m' },
            { label: 'Famous For', value: 'Geru Well, Dhom Dam views' }, { label: 'Difficulty', value: 'Moderate' },
            { label: 'Kids Appropriate', value: 'No (rock patch)' }, { label: 'Best Combined', value: 'Wai temples + Dhom Dam' }
        ],
        reviews: {
            quote: "Kamalgad's Geru Well is unlike anything you'll see on other forts. Combined with the Dhom Dam panorama, it's a hidden treasure in the Sahyadris.",
            positives: ['Unique Geru Well feature', 'Stunning Dhom Dam views', 'Adventurous rock patch', 'Less crowded', 'Short trek'],
            proTips: ['Explore the Geru Well carefully — it\'s deep', 'Combine with Pandavgad for a twin fort day', 'Best in post-monsoon for Dhom Dam views'],
            rating: 4.5, reviewCount: '3,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ KALAVANTIN DURG ━━━━━━━━━━━━━━━━━━
    kalavantindurg: {
        introduction: `Kalavantin Durg is one of the most iconic and thrilling trekking destinations in 
            Maharashtra — a vertiginous rock pinnacle with near-vertical steps carved directly into the 
            mountainside without any railings. Located adjacent to Prabalgad Fort near Panvel, this 
            ancient watchtower offers an adrenaline-pumping ascent that rewards with jaw-dropping 
            panoramic views of the Sahyadri ranges, Matheran plateau, and the Mumbai skyline on clear 
            days. Visible from the Mumbai-Pune Expressway, it has become one of the most photographed 
            and bucket-listed forts in the state.`,

        quote: {
            text: "कळवंतीण दुर्ग — आकाशाला भिडणारा किल्ला!",
            attribution: "Trekkers' saying — 'The fort that touches the sky'"
        },

        timeline: [
            { year: 'Pre-17th Century', title: 'Ancient Origins', desc: 'Kalavantin Durg is believed to have been built as a watchtower and lookout point, possibly named after a queen named Kalavantin. The exact origins remain shrouded in mystery.' },
            { year: '17th Century', title: 'Maratha Control', desc: 'The fort and its companion Prabalgad were used as strategic outposts by the Marathas to control the route between Kalyan, Panvel, and the Konkan coast.' },
            { year: '18th Century', title: 'Mughal & British Period', desc: 'Control passed between the Mughals and later the British East India Company during the Anglo-Maratha conflicts. The fort gradually fell into disuse.' },
            { year: 'Modern Era', title: '🧗 Trekking Icon', desc: 'Kalavantin Durg has been rediscovered as one of Maharashtra\'s most thrilling adventure treks, drawing thousands of trekkers annually for its near-vertical rock-cut steps.' }
        ],

        landmarks: [
            { title: 'Rock-Cut Steps', desc: 'The signature feature — narrow and steep steps carved directly into the basalt rock ridge leading to the summit. No railings, no safety nets — pure adrenaline. About 200 steps of varying steepness.', mustSee: true },
            { title: 'Summit Viewpoint', desc: 'The pinnacle of Kalavantin offers breathtaking 360° panoramic views of surrounding valleys, Prabalgad plateau, Matheran, and on clear days, the Mumbai skyline and Arabian Sea.', mustSee: true },
            { title: 'Prabalgad View', desc: 'From Kalavantin\'s summit you get a spectacular view of the neighboring Prabalgad Fort with its imposing plateau — the two forts formed a connected defense system.', mustSee: true },
            { title: 'Prabalgad Plateau', desc: 'The trek to Kalavantin passes through the Prabalgad plateau — a large grassy expanse perfect for rest and photography before the final steep climb.', mustSee: false }
        ],

        food: [
            { name: 'Maggi & Lemon Water', type: 'Veg', price: '₹50-100', desc: 'The classic trekker combo — hot Maggi noodles and refreshing nimbu paani. Available at the base and sometimes at the Prabalgad plateau during peak season.' },
            { name: 'Snacks & Lemon Water', type: 'Veg', price: '₹30-80', desc: 'Basic snacks, biscuits, and lemon water available at Thakurwadi base and at the plateau.' },
            { name: 'Village Food Stalls', type: 'Veg', price: '₹100-200', desc: 'Simple home-cooked meals available in Thakurwadi village — dal-rice, bhakri-pithla. Best to eat before or after the trek.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Thakurwadi Village (Main Route)', difficulty: 'Hard', distance: '3.5 km', time: '90-150 min', desc: 'The standard route starts from Thakurwadi village, passes through forest and the Prabalgad plateau, followed by the iconic steep climb on exposed rock-cut steps without railings. Not for the faint-hearted.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'Local buses from Panvel ST stand to Thakurwadi village. Panvel is well-connected by train from Mumbai CST and Pune.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive to Thakurwadi village via Panvel. ~15 km from Panvel. Parking available at the base village. ~80 km from Mumbai.' },
            { mode: 'By Train + Auto', icon: '🚂', desc: 'Train to Panvel station (Central/Harbour line). From Panvel, auto-rickshaw or shared vehicle to Thakurwadi base village (~15 km).' }
        ],

        trekEssentials: [
            'Sturdy trekking shoes with excellent grip — rock steps are steep and smooth',
            'Carry minimum 2-3 litres water — no water source on the fort',
            'Headlamp if planning early morning or night trek',
            'Avoid wearing loose footwear (slippers/sandals) — extremely dangerous',
            'Gloves recommended for better grip on rock steps',
            'Start early morning (6-7 AM) to avoid crowds on the narrow steps',
            'Carry your own food — no guaranteed stalls at the top',
            'First aid kit — nearest hospital is 1+ hour away'
        ],

        safetyAlerts: [
            { msg: 'No railings on steep rock-cut steps — HIGH FALL RISK. Stay focused at all times', season: 'All year' },
            { msg: 'Steps become extremely slippery during and after rain — AVOID in active monsoon', season: 'Monsoon' },
            { msg: 'Crowding on narrow steps during weekends can be dangerous — visit on weekdays', season: 'Weekends' },
            { msg: 'Not suitable for beginners, elderly, or children — serious trekking experience required', season: 'All year' },
            { msg: 'Vertigo-inducing heights — if you have fear of heights, reconsider this trek', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Guide', value: '₹300-500' },
            { label: 'Total', value: '₹500-1000', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: '₹50-100 at base village' },
            { label: 'Food Stalls', available: true, detail: 'Basic, at base & plateau' },
            { label: 'Drinking Water', available: false, detail: 'Carry your own' },
            { label: 'Toilets', available: false, detail: 'Not available' },
            { label: 'Local Guides', available: true, detail: '₹300-500' },
            { label: 'Mobile Network', available: true, detail: 'Moderate (Jio, Airtel)' },
            { label: 'First Aid', available: false, detail: 'Nearest at base village' }
        ],

        quickFacts: [
            { label: 'District', value: 'Raigad (Panvel)' },
            { label: 'Base Village', value: 'Thakurwadi' },
            { label: 'Altitude', value: '686 m (2,250 ft)' },
            { label: 'Fort Type', value: 'Hill Fort (Watchtower)' },
            { label: 'Famous For', value: 'Near-vertical rock-cut steps' },
            { label: 'Steps Count', value: '~200 carved steps' },
            { label: 'Nearest Fort', value: 'Prabalgad (adjacent)' },
            { label: 'Time Required', value: '3-5 hours (round trip)' },
            { label: 'Kids Appropriate', value: 'No (extremely dangerous)' },
            { label: 'Best Combined', value: 'Prabalgad Fort' }
        ],

        reviews: {
            quote: "Kalavantin Durg is not a trek — it's a vertical adventure. Climbing those exposed rock steps with nothing but the valley below you is the most thrilling experience in the Sahyadris.",
            positives: [
                'Most thrilling rock-cut step climb in Maharashtra',
                'Breathtaking 360° summit views',
                'Adjacent to Prabalgad — double fort experience',
                'Close to Mumbai — accessible weekend adventure',
                'Incredibly photogenic pinnacle'
            ],
            proTips: [
                'Visit on weekdays — weekend crowds on narrow steps are dangerous',
                'Start by 6 AM to get the steps to yourself',
                'Combine with Prabalgad for a full-day adventure',
                'Carry gloves — better grip on smooth rock steps',
                'Avoid monsoon entirely — the steps become lethal when wet'
            ],
            rating: 4.7,
            reviewCount: '9,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ SONGAD FORT ━━━━━━━━━━━━━━━━━━
    songad: {
        introduction: `Songad Fort is a hidden gem nestled deep within the dense forests of Kolhapur district, 
            near the Maharashtra-Goa border. This lesser-known hill fort served primarily as a watchtower 
            and surveillance post during the Maratha Empire. While it lacks the grand architecture of 
            larger forts, Songad rewards visitors with an incredibly peaceful trekking experience through 
            pristine forest trails and panoramic views of surrounding valleys and green landscapes.`,

        quote: {
            text: "सोनगड — कोल्हापूरच्या जंगलातला शांत प्रहरी",
            attribution: "The silent sentinel of Kolhapur's forests"
        },

        timeline: [
            { year: '17th Century', title: 'Fort Established', desc: 'Songad was built as a small surveillance fort during the Maratha period to monitor enemy movements near the Goa border.' },
            { year: '1660s', title: 'Maratha Strategic Use', desc: 'The fort was used by Maratha forces as part of the defensive network controlling the southern Kolhapur region and Goa border approaches.' },
            { year: '18th Century', title: 'Decline', desc: 'With the decline of active border conflicts, the fort lost its strategic importance and gradually fell into disuse.' },
            { year: '1818', title: 'British Period', desc: 'The fort was abandoned after British annexation. Dense forest growth slowly reclaimed the fortifications.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Remains of defensive stone walls that once formed the perimeter of this compact surveillance fort. Though weathered, they still outline the fort\'s original layout.', mustSee: true },
            { title: 'Viewpoints', desc: 'Multiple natural viewpoints offering scenic views of surrounding valleys, dense forest canopy, and the Western Ghats landscape stretching towards Goa.', mustSee: true },
            { title: 'Forest Trail', desc: 'The trek itself through dense forest is the highlight — lush green canopy, birdsong, and occasional wildlife sightings make this a nature lover\'s paradise.', mustSee: false },
            { title: 'Fort Plateau', desc: 'A small flat area at the summit that served as the watchtower position. Peaceful and perfect for a quiet rest surrounded by nature.', mustSee: false }
        ],

        food: [
            { name: 'Pack Your Own Meals', type: 'Veg', price: '₹0', desc: 'No food stalls at the fort or on the trail. Carry all food and snacks. Popular choices: chapati rolls, thepla, trail mix, energy bars.' },
            { name: 'Village Meals (Base)', type: 'Veg', price: '₹60-100', desc: 'Simple home-cooked meals may be available at Songadwadi village if arranged in advance with local families.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Hot tea may be available at the base village. Best to carry your own thermos for the trek.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Songadwadi Route', difficulty: 'Easy-Medium', distance: '2 km', time: '60-90 min', desc: 'A short but scenic trek through dense forest trails leading to the fort plateau. Well-shaded path with gradual ascent. Best for beginners seeking a nature experience.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Kolhapur to Chandgad taluka (~90 km). From Chandgad, local transport or shared auto to Songadwadi village.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Kolhapur via Chandgad road (~90 km, 2.5-3 hours). The road passes through scenic Sahyadri landscapes. Limited parking at base.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Scenic ride from Kolhapur through the ghats. Park at Songadwadi and trek. The ride itself is a highlight.' }
        ],

        trekEssentials: [
            'Good walking shoes — forest trail can be muddy',
            'Carry 2 litres of water — no water sources on fort',
            'Insect repellent — dense forest area',
            'Carry all food — no stalls anywhere near',
            'GPS/offline maps — trail can be confusing',
            'Start early morning for best experience',
            'Carry a torch if returning late',
            'Inform someone of your trekking plan'
        ],

        safetyAlerts: [
            { msg: 'Dense forest trail — follow the path carefully and avoid venturing off-trail', season: 'All year' },
            { msg: 'No water sources available at the fort — carry sufficient water', season: 'All year' },
            { msg: 'Remote location — avoid solo trekking, go in groups', season: 'All year' },
            { msg: 'Trail gets very slippery during heavy monsoon rains', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-400' },
            { label: 'Food', value: '₹50-100' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹250-500', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Limited, at base village' },
            { label: 'Food Stalls', available: false, detail: 'None — carry own food' },
            { label: 'Water Source', available: false, detail: 'None — carry own water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'Weak to no signal' },
            { label: 'First Aid', available: false, detail: 'Carry your own' }
        ],

        quickFacts: [
            { label: 'District', value: 'Kolhapur (Chandgad)' },
            { label: 'Base Village', value: 'Songadwadi' },
            { label: 'Altitude', value: '~800 m' },
            { label: 'Fort Type', value: 'Hill Fort (Watchtower)' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Forest trek, valley views' },
            { label: 'Trek Distance', value: '2 km one way' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (short trek)' },
            { label: 'Nearest City', value: 'Kolhapur (90 km)' }
        ],

        reviews: {
            quote: "Songad is not about grand architecture — it's about the journey. The forest trail, the birdsong, and the peaceful valley views make it a perfect escape from city life.",
            positives: [
                'Peaceful and uncrowded — true offbeat destination',
                'Beautiful forest trek with rich biodiversity',
                'Scenic valley views from the fort plateau',
                'Short and easy trek suitable for beginners',
                'Close to the Goa border — combine with Goa trip'
            ],
            proTips: [
                'Best visited during post-monsoon for lush green scenery',
                'Combine with nearby Chandangad for a fort-hopping day',
                'Carry binoculars for birdwatching in the forest',
                'Visit on weekdays for complete solitude',
                'Arrange village meals in advance at Songadwadi'
            ],
            rating: 4.0,
            reviewCount: '500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ BHUSHANGAD ━━━━━━━━━━━━━━━━━━
    bhushangad: {
        introduction: `Bhushangad is a tranquil hill fort in Satara district that stands out more for its 
            spiritual significance than military history. Known primarily for its ancient temple and 
            incredibly easy access, this fort offers a calm retreat with panoramic views of the 
            surrounding Satara plains. It is an ideal destination for families, casual walkers, 
            and anyone seeking a peaceful half-day outing in the Sahyadri foothills.`,

        quote: {
            text: "भूषणगड — साताऱ्याच्या मैदानावरचा शांत किल्ला",
            attribution: "The serene fort overlooking Satara's plains"
        },

        timeline: [
            { year: '17th Century', title: 'Fort Established', desc: 'Bhushangad was established as a minor hill fort during the Maratha period, serving more as a local stronghold than a major military installation.' },
            { year: 'Historical', title: 'Temple Construction', desc: 'The Bhushangad temple was built on the fort, becoming the primary reason for local visits. The temple holds deep religious significance for surrounding villages.' },
            { year: '18th Century', title: 'Maratha Period', desc: 'The fort continued to serve as a local administrative point under the Marathas, with the temple drawing regular devotees.' },
            { year: '1818', title: 'British Period', desc: 'The fort\'s military significance ended with British annexation, but the temple ensured continued local visits and maintenance.' }
        ],

        landmarks: [
            { title: 'Bhushangad Temple', desc: 'The main attraction on the fort — an active temple that draws devotees from surrounding villages. Well-maintained and spiritually significant.', mustSee: true },
            { title: 'Plateau Views', desc: 'A wide open plateau at the summit offering expansive panoramic views of Satara district plains, nearby hillocks, and farmlands stretching to the horizon.', mustSee: true },
            { title: 'Fort Remnants', desc: 'Basic remains of fortification walls and structures visible around the plateau perimeter. Simple but historically interesting.', mustSee: false },
            { title: 'Sunset Point', desc: 'The western edge of the plateau offers a beautiful vantage point for watching sunsets over the Satara plains.', mustSee: false }
        ],

        food: [
            { name: 'Pack Light Snacks', type: 'Veg', price: '₹0', desc: 'The trek is short enough that heavy meals aren\'t needed. Carry biscuits, fruits, and a water bottle.' },
            { name: 'Village Meals', type: 'Veg', price: '₹60-100', desc: 'Simple Maharashtrian meals may be available in the nearby Bhushangad village. Dal-rice and bhakri are common.' },
            { name: 'Chai & Snacks', type: 'Veg', price: '₹10-30', desc: 'Small tea stalls may operate near the village. Not guaranteed — best to carry your own.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Direct Route', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'A short and simple walk from the base village to the fort top. Gentle ascent through open terrain. Suitable for all ages and fitness levels.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Satara city to Khatav taluka (~60 km). Local transport to Bhushangad village from Khatav.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Satara via Khatav road (~60 km, 1.5-2 hours). Road is motorable to the village. Parking available near village.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Ride from Satara through the rural countryside. Pleasant ride through Satara district villages. Park at base village.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — terrain is easy',
            'Carry 1 litre of water',
            'Sun protection — very little shade on the plateau',
            'Camera for panoramic views',
            'Light snacks for the short trek',
            'Best visited in morning or evening to avoid heat',
            'Allow 1-2 hours for complete exploration',
            'Hat and sunscreen essential in summer'
        ],

        safetyAlerts: [
            { msg: 'Very little shade on the plateau — avoid midday summer visits', season: 'March-May' },
            { msg: 'Carry sufficient water — no sources on the fort', season: 'All year' },
            { msg: 'The open plateau can get windy — secure loose items', season: 'Winter' },
            { msg: 'Basic terrain but edges may be unguarded — supervise children', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Food', value: '₹50-100' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹150-400', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Near base village' },
            { label: 'Food Stalls', available: false, detail: 'None — carry own food' },
            { label: 'Water Source', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: true, detail: 'Good (most operators)' },
            { label: 'Temple', available: true, detail: 'Active temple on fort' }
        ],

        quickFacts: [
            { label: 'District', value: 'Satara (Khatav)' },
            { label: 'Base Village', value: 'Bhushangad' },
            { label: 'Altitude', value: '~900 m' },
            { label: 'Fort Type', value: 'Hill Fort (Minor)' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Temple, easy access, panoramic views' },
            { label: 'Trek Distance', value: '1 km one way' },
            { label: 'Time Required', value: '1-2 hours' },
            { label: 'Kids Appropriate', value: 'Yes (very easy)' },
            { label: 'Nearest City', value: 'Satara (60 km)' }
        ],

        reviews: {
            quote: "Bhushangad is the perfect fort for those who want a peaceful escape without a grueling trek. The temple, the views, and the silence — it's Maharashtra at its most serene.",
            positives: [
                'Extremely easy and family-friendly',
                'Active temple adds spiritual dimension',
                'Wide panoramic views of Satara plains',
                'Uncrowded — peaceful experience guaranteed',
                'Short trek perfect for casual outings'
            ],
            proTips: [
                'Visit during morning or evening for best lighting and cooler temperatures',
                'Combine with other Satara forts for a fort-hopping trip',
                'Carry water — there is no source on the fort',
                'Best during winter months for pleasant weather',
                'The sunset from the western edge is spectacular'
            ],
            rating: 3.9,
            reviewCount: '300+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ CHANDANGAD ━━━━━━━━━━━━━━━━━━
    chandangad: {
        introduction: `Chandangad is a remote and atmospheric hill fort standing guard near the Maharashtra-Goa 
            border in Kolhapur's Chandgad taluka. Surrounded by dense, almost impenetrable forests, this 
            fort served as a critical border surveillance post controlling the ancient routes between 
            Maharashtra and Goa. While it lacks grand fortifications, Chandangad more than makes up for 
            it with its pristine natural setting, adventurous forest trek, and the rare solitude that 
            only truly remote forts can offer.`,

        quote: {
            text: "चंदनगड — महाराष्ट्र-गोवा सीमेवरचा निसर्गरम्य किल्ला",
            attribution: "The border fortress between Maharashtra and Goa"
        },

        timeline: [
            { year: '16th Century', title: 'Adilshahi Construction', desc: 'Chandangad was built by the Adil Shahi dynasty of Bijapur as a border fort controlling the trade and military routes between the Deccan and Goa.' },
            { year: '1660s', title: 'Maratha Capture', desc: 'The fort was captured by Maratha forces as part of Shivaji Maharaj\'s southern expansion campaign. It continued to serve as a border surveillance post.' },
            { year: '18th Century', title: 'Strategic Border Fort', desc: 'During the prolonged Maratha-Portuguese conflicts, Chandangad served as a watchtower monitoring Portuguese activities in Goa.' },
            { year: '1818', title: 'British Period', desc: 'The fort was abandoned after British annexation. The dense surrounding forests gradually reclaimed the structures.' }
        ],

        landmarks: [
            { title: 'Fort Ruins', desc: 'Remaining stone structures and wall foundations scattered across the fort area. Though heavily weathered, they tell the story of this border outpost\'s past.', mustSee: true },
            { title: 'Forest Views', desc: 'Dense forest canopy stretching in all directions — the views from Chandangad are of unbroken green wilderness with the Western Ghats as the backdrop.', mustSee: true },
            { title: 'Border Viewpoint', desc: 'A vantage point from where the Maharashtra-Goa border region is visible. On clear days, the landscape extends towards the Goan coast.', mustSee: false },
            { title: 'Ancient Trail Remains', desc: 'Traces of the old trade path between Maharashtra and Goa are visible near the fort, a reminder of its strategic border-control purpose.', mustSee: false }
        ],

        food: [
            { name: 'Pack All Meals', type: 'Veg', price: '₹0', desc: 'Extremely remote area — no food availability anywhere near the fort. Carry complete meals, snacks, and extra energy food for the trek.' },
            { name: 'Village Meals (Chandgad)', type: 'Veg', price: '₹60-100', desc: 'Simple meals available in Chandgad town before or after the trek. Small restaurants serve basic Maharashtrian food.' },
            { name: 'Kolhapuri Food', type: 'Non-Veg', price: '₹100-200', desc: 'On your way back through Kolhapur, don\'t miss the famous Tambda-Pandhra Rassa — the perfect post-trek reward.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Chandgad Route', difficulty: 'Medium', distance: '3 km', time: '90-120 min', desc: 'A forest trek from Chandgad village with a gradual ascent through dense tree cover. The trail requires some navigation skills as markings are sparse. Beautiful but demanding.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Kolhapur to Chandgad town (~110 km, 3-4 hours). From Chandgad, local transport or auto to the trek starting point.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Kolhapur via Chandgad road (~110 km, 3 hours). The road passes through beautiful Sahyadri landscapes. Limited parking near base.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Long but scenic ride from Kolhapur through the Western Ghats. The Chandgad ghat road is particularly stunning. Park near the village.' }
        ],

        trekEssentials: [
            'Sturdy trekking shoes — forest trail can be rough and muddy',
            'Carry 2-3 litres of water — no water sources on route',
            'Insect repellent — mandatory for dense forest trek',
            'Full food supply — nothing available on or near the fort',
            'GPS/offline maps — trail markings are sparse',
            'Trek in a group — avoid solo trekking in this remote area',
            'Carry a torch and extra batteries',
            'Inform someone of your itinerary and expected return time'
        ],

        safetyAlerts: [
            { msg: 'Remote forest area — do not trek alone, always go in a group of 4+', season: 'All year' },
            { msg: 'Carry sufficient water and food — absolutely no sources on the trail or fort', season: 'All year' },
            { msg: 'Forest trail can be confusing — use GPS and stay on the main path', season: 'All year' },
            { msg: 'Heavy monsoon makes the forest trail dangerous with leeches and slippery terrain', season: 'June-Sept' },
            { msg: 'Very weak mobile network — download offline maps before starting', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-600' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹400-800', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Limited, near Chandgad village' },
            { label: 'Food Stalls', available: false, detail: 'None — carry all food' },
            { label: 'Water Source', available: false, detail: 'None — carry all water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'Very weak to no signal' },
            { label: 'First Aid', available: false, detail: 'Nearest at Chandgad town' }
        ],

        quickFacts: [
            { label: 'District', value: 'Kolhapur (Chandgad)' },
            { label: 'Base Village', value: 'Chandgad' },
            { label: 'Altitude', value: '~750 m' },
            { label: 'Fort Type', value: 'Hill Fort (Border)' },
            { label: 'Built By', value: 'Adilshahi dynasty' },
            { label: 'Famous For', value: 'Border fort, forest trek, solitude' },
            { label: 'Trek Distance', value: '3 km one way' },
            { label: 'Time Required', value: '3-4 hours' },
            { label: 'Kids Appropriate', value: 'No (remote forest)' },
            { label: 'Nearest City', value: 'Kolhapur (110 km)' }
        ],

        reviews: {
            quote: "Chandangad is for those who seek the road less traveled. The dense forest, the silence, and the feeling of being at the edge of Maharashtra — it's an experience you won't find at popular forts.",
            positives: [
                'Truly offbeat and remote destination',
                'Dense forest trek is an adventure in itself',
                'Complete solitude — almost no other visitors',
                'Strategic border location adds historical interest',
                'Beautiful Western Ghats wilderness setting'
            ],
            proTips: [
                'Best combined with Songad Fort for a border forts exploration',
                'Visit during post-monsoon (Oct-Nov) for lush green forests',
                'Go with experienced trekkers who know the area',
                'Carry enough supplies for the full day — it\'s truly remote',
                'Plan the Kolhapur-Chandgad drive as part of the experience'
            ],
            rating: 4.1,
            reviewCount: '200+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ PAVANGAD FORT ━━━━━━━━━━━━━━━━━━
    pavangad: {
        introduction: `Pavangad Fort is a compact hill fort situated in the shadow of the mighty Panhala Fort 
            in Kolhapur district. While Panhala dominates the skyline, Pavangad served as its loyal companion — 
            a strategic support fort that provided additional surveillance and defensive capability. Just 20 km 
            from Kolhapur city, this fort offers a short and rewarding trek with excellent views of the Panhala 
            region and surrounding valleys, making it a perfect half-day outing.`,

        quote: {
            text: "पावनगड — पन्हाळ्याचा विश्वासू साथीदार",
            attribution: "Pavangad — the faithful companion of Panhala"
        },

        timeline: [
            { year: '17th Century', title: 'Fort Established', desc: 'Pavangad was built during the Maratha period as a support fort to complement the defenses of the nearby Panhala Fort.' },
            { year: '1660', title: 'Strategic Importance', desc: 'During the siege of Panhala by Siddi Johar, Pavangad served as part of the outer defense network protecting the approaches to the larger fort.' },
            { year: '18th Century', title: 'Continued Use', desc: 'The Marathas maintained Pavangad as a watchtower and signaling outpost for Panhala throughout the 18th century.' },
            { year: '1844', title: 'British Period', desc: 'Like Panhala, Pavangad was annexed by the British. It gradually fell into disuse as Panhala became a hill station.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Remains of defensive stone walls that formed the perimeter of this compact support fort. Though smaller than Panhala, the construction shows solid Maratha engineering.', mustSee: true },
            { title: 'Panhala Viewpoint', desc: 'A spectacular vantage point offering direct views of the massive Panhala Fort complex. Perfect for understanding the strategic relationship between the two forts.', mustSee: true },
            { title: 'Valley Views', desc: 'Panoramic views of the Kolhapur valleys and surrounding Sahyadri foothills. Beautiful during monsoon when the landscape turns lush green.', mustSee: true },
            { title: 'Fort Plateau', desc: 'A small but pleasant plateau area at the summit. Ideal for a rest stop with scenic surroundings.', mustSee: false }
        ],

        food: [
            { name: 'Pack Light Snacks', type: 'Veg', price: '₹0', desc: 'Short trek — carry biscuits, fruits, and a water bottle. No stalls at the fort.' },
            { name: 'Kolhapuri Tambda Rassa', type: 'Non-Veg', price: '₹120-200', desc: 'After the trek, head to Kolhapur (20 km) for the iconic fiery red mutton curry. The perfect reward.' },
            { name: 'Panhala Food Stalls', type: 'Veg', price: '₹50-100', desc: 'If combining with Panhala visit, food stalls are available at Panhala Fort entrance.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Tea available in Panhala town or Kolhapur. Not at the fort itself.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Pavangad Village Route', difficulty: 'Easy', distance: '1.5 km', time: '45-60 min', desc: 'A short and gradual climb suitable for beginners. The trail passes through open terrain with views opening up as you ascend. Family-friendly.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Kolhapur to Panhala (20 km, 40 min). From Panhala, local transport to Pavangad village.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Kolhapur via Panhala road (~20 km, 30-40 min). Easy to combine with a Panhala Fort visit. Parking near base.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Short ride from Kolhapur through scenic ghat road. Park at the village and trek up.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — easy terrain',
            'Carry 1 litre of water — no sources at fort',
            'Sun protection — open areas with limited shade',
            'Camera for Panhala and valley views',
            'Light snacks for the short trek',
            'Allow 2-3 hours for exploration',
            'Best visited morning or evening',
            'Combine with Panhala for a full day trip'
        ],

        safetyAlerts: [
            { msg: 'Open areas with limited shade — carry sun protection in summer', season: 'March-May' },
            { msg: 'Carry water — no sources available on the fort', season: 'All year' },
            { msg: 'Some wall edges may be unguarded — supervise children', season: 'All year' },
            { msg: 'Can be windy at the top — secure loose items', season: 'Monsoon/Winter' }
        ],

        budget: [
            { label: 'Transport', value: '₹50-150' },
            { label: 'Food', value: '₹50-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹100-350', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Near base village' },
            { label: 'Food Stalls', available: false, detail: 'None — carry own food' },
            { label: 'Water Source', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: true, detail: 'Good (near Kolhapur)' },
            { label: 'Nearby Fort', available: true, detail: 'Panhala Fort (adjacent)' }
        ],

        quickFacts: [
            { label: 'District', value: 'Kolhapur (Panhala)' },
            { label: 'Base Village', value: 'Pavangad' },
            { label: 'Altitude', value: '~850 m' },
            { label: 'Fort Type', value: 'Hill Fort (Support)' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Panhala views, easy trek' },
            { label: 'Trek Distance', value: '1.5 km one way' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy trek)' },
            { label: 'Nearest City', value: 'Kolhapur (20 km)' }
        ],

        reviews: {
            quote: "Pavangad is the perfect appetizer before the main course of Panhala. The views of Panhala Fort from here give you a completely new perspective of that massive fortification.",
            positives: [
                'Short and easy trek — great for beginners',
                'Excellent views of Panhala Fort',
                'Very close to Kolhapur city',
                'Uncrowded and peaceful',
                'Perfect for combining with Panhala visit'
            ],
            proTips: [
                'Always combine with Panhala Fort for a complete experience',
                'Visit early morning for best views and cooler weather',
                'After the trek, enjoy Kolhapuri food in the city',
                'Carry binoculars for detailed views of Panhala',
                'Monsoon turns the landscape spectacularly green'
            ],
            rating: 4.0,
            reviewCount: '400+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ BHORGIRI FORT ━━━━━━━━━━━━━━━━━━
    bhorgiri: {
        introduction: `Bhorgiri Fort is a serene hill fort located near the sacred Bhimashankar Jyotirlinga 
            temple in Pune district's Khed taluka. Nestled within the lush Bhimashankar Wildlife Sanctuary, 
            this fort combines ancient caves, a local temple, and dense forest surroundings into a peaceful 
            trekking experience. It is a hidden treasure for those who love the intersection of nature, 
            history, and spirituality — far from the crowds of more popular Pune forts.`,

        quote: {
            text: "भोरगिरी — भीमाशंकरच्या जंगलातला शांत किल्ला",
            attribution: "The peaceful fort in Bhimashankar's forests"
        },

        timeline: [
            { year: 'Ancient', title: 'Cave Habitation', desc: 'The Bhorgiri caves were used as shelters by early inhabitants and later by monks and travelers traversing the Sahyadri routes.' },
            { year: '17th Century', title: 'Maratha Period', desc: 'The fort was used by Maratha forces for surveillance of the Bhimashankar region and the trade routes passing through the dense forests.' },
            { year: '18th Century', title: 'Temple Construction', desc: 'A local temple was established on the fort, adding spiritual significance to the already historically important site.' },
            { year: '1818', title: 'British Period', desc: 'The fort was abandoned after British annexation. The surrounding Bhimashankar forest gradually reclaimed the structures.' }
        ],

        landmarks: [
            { title: 'Bhorgiri Caves', desc: 'Ancient caves carved into the hillside, once used for shelter and meditation. Cool interiors and atmospheric setting make them the highlight of the fort visit.', mustSee: true },
            { title: 'Temple', desc: 'A local temple on the fort plateau that attracts devotees from nearby villages. Small but well-maintained with a peaceful atmosphere.', mustSee: true },
            { title: 'Forest Views', desc: 'Dense forest surroundings of the Bhimashankar Wildlife Sanctuary visible from the fort. In monsoon, the greenery and mist create a magical atmosphere.', mustSee: true },
            { title: 'Fort Remains', desc: 'Basic fortification remains including wall fragments and platform structures. Simple but historically indicative of its surveillance role.', mustSee: false }
        ],

        food: [
            { name: 'Pack Your Own Meals', type: 'Veg', price: '₹0', desc: 'No food stalls at the fort. Carry packed meals, snacks, and sufficient water for the forest trek.' },
            { name: 'Bhimashankar Stalls', type: 'Veg', price: '₹50-100', desc: 'If combining with Bhimashankar temple visit, food stalls are available near the temple. Traditional Maharashtrian snacks.' },
            { name: 'Village Meals', type: 'Veg', price: '₹60-100', desc: 'Home-cooked meals may be available in Bhorgiri village if arranged in advance. Simple dal-rice and bhakri.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Tea available at Bhimashankar temple area. Carry your own for the Bhorgiri trek.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Bhorgiri Village Route', difficulty: 'Easy-Medium', distance: '2 km', time: '60-90 min', desc: 'A forest trail from Bhorgiri village leading through dense tree cover to the caves and fort remains. Well-shaded and atmospheric. Some slippery patches in monsoon.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Pune to Khed/Rajgurunagar (~60 km), then local transport towards Bhimashankar. Bhorgiri village is near the Bhimashankar route.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via Chakan-Rajgurunagar-Bhimashankar road (~95 km, 2.5-3 hours). Scenic ghat road with forest surroundings.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Beautiful ride from Pune through the Bhimashankar ghats. Park at Bhorgiri village and trek. Combine with Bhimashankar temple visit.' }
        ],

        trekEssentials: [
            'Good trekking shoes — forest trail can be slippery',
            'Carry 2 litres of water',
            'Insect repellent — dense forest area',
            'Carry packed food — no stalls at fort',
            'Torch for exploring caves',
            'Rain gear during monsoon',
            'Stay on the marked trail — forest can be confusing',
            'Best combined with Bhimashankar temple visit'
        ],

        safetyAlerts: [
            { msg: 'Forest trails get slippery in monsoon — wear proper shoes', season: 'June-Sept' },
            { msg: 'Stay on the marked path — dense forest can be disorienting', season: 'All year' },
            { msg: 'Wildlife sanctuary area — do not disturb wildlife or litter', season: 'All year' },
            { msg: 'Carry a torch for cave exploration — dark interiors', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹150-400' },
            { label: 'Food', value: '₹50-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹200-550', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Near Bhorgiri village' },
            { label: 'Food Stalls', available: false, detail: 'None at fort (available at Bhimashankar)' },
            { label: 'Water Source', available: true, detail: 'Natural springs near base' },
            { label: 'Toilets', available: false, detail: 'No facilities at fort' },
            { label: 'Mobile Network', available: false, detail: 'Weak signal in forest' },
            { label: 'Nearby Temple', available: true, detail: 'Bhimashankar Jyotirlinga' }
        ],

        quickFacts: [
            { label: 'District', value: 'Pune (Khed)' },
            { label: 'Base Village', value: 'Bhorgiri' },
            { label: 'Altitude', value: '~900 m' },
            { label: 'Fort Type', value: 'Hill Fort (Surveillance)' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Caves, temple, forest trek' },
            { label: 'Trek Distance', value: '2 km one way' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (with supervision)' },
            { label: 'Nearest City', value: 'Pune (95 km)' }
        ],

        reviews: {
            quote: "Bhorgiri is the kind of fort where nature steals the show. The ancient caves, the temple bells, and the dense forest — it's meditation in motion.",
            positives: [
                'Beautiful forest trek in Bhimashankar region',
                'Ancient caves add mystery and charm',
                'Peaceful and rarely crowded',
                'Can combine with Bhimashankar Jyotirlinga visit',
                'Rich biodiversity — birdwatching paradise'
            ],
            proTips: [
                'Always combine with Bhimashankar temple for a full day trip',
                'Visit during monsoon for the most atmospheric experience',
                'Carry a torch for exploring the caves properly',
                'Start early to enjoy the forest sounds in morning calm',
                'Look out for the Indian Giant Squirrel in the sanctuary'
            ],
            rating: 4.1,
            reviewCount: '350+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ SOLAPUR BHUIKOT FORT ━━━━━━━━━━━━━━━━━━
    'solapur-bhuikot': {
        introduction: `Solapur Bhuikot Fort is one of the finest examples of Deccan land fort architecture, 
            standing proudly in the heart of Solapur city. Unlike the hill forts of the Sahyadris, Bhuikot 
            is a massive ground-level fortification featuring remarkable double fortification walls, a 
            water-filled moat, and imposing bastions that showcase the military engineering of the Bahmani 
            Sultanate. Having changed hands between the Bahmanis, Adil Shahis, Mughals, and the British, 
            this fort is a living chronicle of Deccan political history.`,

        quote: {
            text: "सोलापूर भुईकोट — दख्खनच्या मैदानी किल्ल्यांचा राजा",
            attribution: "The king of Deccan's land forts"
        },

        timeline: [
            { year: '15th Century', title: 'Bahmani Construction', desc: 'The Bahmani Sultanate built Bhuikot Fort as a massive ground-level fortification to control the strategic Solapur region — a key crossroads of Deccan trade routes.' },
            { year: '1490', title: 'Adil Shahi Control', desc: 'After the breakup of the Bahmani Sultanate, the Adil Shahi dynasty of Bijapur took control and further strengthened the double-wall defenses and moat system.' },
            { year: '1668', title: 'Mughal Conquest', desc: 'The Mughals captured Solapur and Bhuikot Fort as part of Aurangzeb\'s Deccan campaigns. The fort served as a Mughal garrison.' },
            { year: '1818', title: 'British Annexation', desc: 'The British took control of Solapur and the fort. It was used for administrative purposes before gradually transitioning into a heritage monument.' },
            { year: 'Modern', title: 'Heritage Conservation', desc: 'The fort has been partially restored and is maintained as a historical monument. It remains a prominent landmark in Solapur city.' }
        ],

        landmarks: [
            { title: 'Double Fort Walls', desc: 'A unique defensive feature — two concentric fortification walls creating a deadly killing zone between them. This double-wall design is among the finest in Deccan military architecture.', mustSee: true },
            { title: 'Moat (Khandak)', desc: 'A water-filled moat surrounding the outer wall, forming the first line of defense. Still partially water-filled, it dramatically enhances the fort\'s imposing appearance.', mustSee: true },
            { title: 'Temple Inside Fort', desc: 'A well-maintained religious structure within the fort complex. Draws regular devotees and adds a spiritual dimension to the historical visit.', mustSee: true },
            { title: 'Bastions & Towers', desc: 'Massive semicircular bastions at regular intervals along the walls, designed for cannon placement and defensive fire. Impressive engineering.', mustSee: true },
            { title: 'Main Gateway', desc: 'The fortified entrance featuring a bent-axis approach designed to slow attacking forces. Classic Deccan military gateway architecture.', mustSee: false },
            { title: 'Inner Fort Area', desc: 'The spacious interior area that once housed barracks, administrative buildings, and storage facilities. Now a pleasant area for exploration.', mustSee: false }
        ],

        food: [
            { name: 'Solapur Shenga Chutney', type: 'Veg', price: '₹30-50', desc: 'Solapur\'s famous peanut chutney — a local delicacy that pairs with everything. Available at restaurants throughout the city.' },
            { name: 'Jowar Bhakri Thali', type: 'Veg', price: '₹80-120', desc: 'Traditional Solapur thali with jowar bhakri, pithla, zunka, and curd. Authentic Deccan flavors at local eateries.' },
            { name: 'Solapur Chaddi Baniyan Dosa', type: 'Veg', price: '₹40-70', desc: 'Solapur\'s uniquely named famous dosa — paper-thin and incredibly crispy. A must-try local street food experience.' },
            { name: 'Chai & Snacks', type: 'Beverage', price: '₹10-30', desc: 'Tea stalls and snack shops surround the fort area. Easy access to refreshments before and after the visit.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Main Entrance Walk', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'Direct walking access through the main gateway. No trekking required — the fort is at ground level in the city. Fully wheelchair accessible in main areas.' }
        ],

        howToReach: [
            { mode: 'By Bus', icon: '🚌', desc: 'Solapur has excellent bus connectivity from Pune (250 km), Mumbai (400 km), and Hyderabad (300 km). The fort is in the city center — auto/taxi from bus stand.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive via NH65 from Pune (~250 km, 4 hours) or via NH44 from Hyderabad (~300 km, 5 hours). Fort is centrally located with parking nearby.' },
            { mode: 'By Train', icon: '🚂', desc: 'Solapur Junction is a major railway station with direct trains from Mumbai, Pune, Hyderabad, Chennai, and Delhi. Fort is 2 km from station — auto ₹30-50.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — paved paths',
            'Water bottle — stalls available nearby',
            'Camera — impressive architecture',
            'Sun protection — open fort, limited shade',
            'Cash for entry fee (₹20) and food',
            'Budget 2-3 hours for thorough exploration',
            'Best visited early morning or late afternoon',
            'Local guide available for historical context'
        ],

        safetyAlerts: [
            { msg: 'Crowded area on weekends and holidays — visit on weekdays for better experience', season: 'All year' },
            { msg: 'Large fort — explore carefully, some areas may have uneven ground', season: 'All year' },
            { msg: 'Moat area — keep children away from the water edges', season: 'All year' },
            { msg: 'Summer heat in Solapur can be extreme — carry sun protection and water', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport', value: '₹30-100 (local)' },
            { label: 'Entry', value: '₹20' },
            { label: 'Food', value: '₹80-200' },
            { label: 'Guide', value: '₹100-200' },
            { label: 'Total', value: '₹230-520', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Public parking nearby' },
            { label: 'Food Stalls', available: true, detail: 'Multiple near fort' },
            { label: 'Drinking Water', available: true, detail: 'Available' },
            { label: 'Toilets', available: true, detail: 'Public toilets nearby' },
            { label: 'Mobile Network', available: true, detail: 'Excellent (city center)' },
            { label: 'Wheelchair Access', available: true, detail: 'Partial (main areas)' }
        ],

        quickFacts: [
            { label: 'District', value: 'Solapur' },
            { label: 'Location', value: 'Solapur city center' },
            { label: 'Altitude', value: 'Ground level' },
            { label: 'Fort Type', value: 'Land Fort (Bhuikot)' },
            { label: 'Built By', value: 'Bahmani Sultanate' },
            { label: 'Famous For', value: 'Double walls, moat, Deccan architecture' },
            { label: 'Entry Fee', value: '₹20' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy access)' },
            { label: 'Best Combined', value: 'Solapur city tour' }
        ],

        reviews: {
            quote: "Solapur Bhuikot is proof that not all great forts sit on hilltops. The double walls and moat are engineering marvels, and being in a city makes it uniquely accessible.",
            positives: [
                'Unique double-wall fortification — rare in Maharashtra',
                'Water-filled moat is impressive and photogenic',
                'Easy access — no trekking, located in city center',
                'Rich multi-dynasty history spanning 500+ years',
                'Good facilities — food, water, network all available'
            ],
            proTips: [
                'Visit early morning to avoid crowds and heat',
                'Hire a local guide for historical context — ₹100-200',
                'Try Solapur\'s famous Chaddi Baniyan Dosa nearby',
                'Combine with Siddheshwar temple visit in the city',
                'The moat looks most impressive during monsoon when full'
            ],
            rating: 4.2,
            reviewCount: '2,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ ARNALA FORT ━━━━━━━━━━━━━━━━━━
    arnala: {
        introduction: `Arnala Fort is a striking sea fort perched on a small island off the coast of Virar in 
            Palghar district. Originally built by the Portuguese as a coastal defense outpost, the fort was 
            later captured by the Marathas under Chimaji Appa in 1737 during the famous Vasai campaign. 
            Surrounded by the turquoise waters of the Arabian Sea, Arnala is one of the most accessible 
            sea forts near Mumbai — just a 10-minute boat ride from Arnala beach. Its well-preserved walls, 
            corner bastions, and interior temple make it a rewarding half-day escape from the city.`,

        quote: {
            text: "अर्नाळा — विरारच्या समुद्रातला मराठ्यांचा विजयकिल्ला",
            attribution: "Arnala — the Maratha victory fort in Virar's waters"
        },

        timeline: [
            { year: '16th Century', title: 'Portuguese Construction', desc: 'The Portuguese built Arnala Fort as part of their coastal defense network to protect the lucrative trade routes along the northern Konkan coast.' },
            { year: '1737', title: '🏆 Maratha Capture', desc: 'Chimaji Appa, brother of Peshwa Bajirao I, captured Arnala Fort from the Portuguese during the historic Vasai campaign. A significant Maratha naval victory.' },
            { year: '18th Century', title: 'Maratha Naval Base', desc: 'The Marathas strengthened the fort and used it as a naval outpost, adding the temple and expanding the bastions.' },
            { year: '1818', title: 'British Takeover', desc: 'The British East India Company took control of Arnala along with other Maratha territories. The fort was used briefly before gradual disuse.' }
        ],

        landmarks: [
            { title: 'Main Fort Walls', desc: 'Strong stone fortification walls encircling the entire island. The Portuguese construction is evident in the masonry style, with Maratha-era additions visible at several points.', mustSee: true },
            { title: 'Corner Bastions', desc: 'Four imposing bastions at each corner of the fort offering panoramic views of the Arabian Sea. Once mounted with cannons for coastal defense.', mustSee: true },
            { title: 'Temple Inside Fort', desc: 'A well-maintained Hindu temple within the fort walls, added by the Marathas after capturing the fort. Active and visited by local devotees.', mustSee: true },
            { title: 'Main Gateway', desc: 'The fortified sea-facing entrance with a bent-axis design typical of Portuguese military architecture. Impressive stonework.', mustSee: false },
            { title: 'Interior Ruins', desc: 'Remains of barracks, storage rooms, and water cisterns inside the fort. Give a sense of the fort\'s operational scale.', mustSee: false }
        ],

        food: [
            { name: 'Arnala Beach Stalls', type: 'Non-Veg', price: '₹100-200', desc: 'Fresh seafood stalls line Arnala beach — fried bombil (Bombay duck), surmai fry, and prawns are local specialties.' },
            { name: 'Vada Pav & Snacks', type: 'Veg', price: '₹20-40', desc: 'Quick snacks available at Arnala beach before or after the boat ride. Classic Mumbai-style vada pav.' },
            { name: 'Fish Thali', type: 'Non-Veg', price: '₹150-250', desc: 'Full Konkan fish thali with rice, fish curry, fry, sol kadhi, and papad. Available at beach restaurants.' },
            { name: 'Chai & Cold Drinks', type: 'Beverage', price: '₹10-30', desc: 'Tea stalls and cold drink vendors at Arnala beach. Refreshing after the fort visit.' }
        ],

        trekRoutes: [
            { icon: '⛵', title: 'Via Boat from Arnala Beach', difficulty: 'Easy', distance: '1 km (sea route)', time: '10-15 min', desc: 'Short and scenic boat ride from Arnala beach to the island fort. Boats operate regularly during good weather. ₹50-100 per person.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚂', desc: 'Take Western Railway local to Virar station (~1.5 hours from Churchgate). From Virar, auto/bus to Arnala beach (~10 km, 20 min).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Mumbai via NH48 to Virar, then to Arnala beach (~80 km, 2-2.5 hours). Parking available near the beach.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses from Mumbai to Virar. From Virar bus stand, local bus or auto to Arnala beach.' }
        ],

        trekEssentials: [
            'Comfortable shoes — some rocky surfaces inside fort',
            'Carry 1-2 litres of water — no water inside fort',
            'Sun protection — exposed fort with limited shade',
            'Camera — beautiful sea views from bastions',
            'Cash for boat ride (₹50-100)',
            'Check boat timings before visiting',
            'Allow 2-3 hours including boat ride',
            'Avoid during rough sea/monsoon'
        ],

        safetyAlerts: [
            { msg: 'Check boat timings and sea conditions before planning — boats stop in rough weather', season: 'All year' },
            { msg: 'Avoid visiting during monsoon — sea is rough and boats don\'t operate', season: 'June-Sept' },
            { msg: 'Fort surfaces can be slippery, especially near the sea-facing walls', season: 'Monsoon' },
            { msg: 'Keep children supervised near bastion edges — no railings', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (local)', value: '₹50-150' },
            { label: 'Boat Ride', value: '₹50-100' },
            { label: 'Food', value: '₹100-250' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹200-500', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Arnala beach' },
            { label: 'Food Stalls', available: true, detail: 'At beach (not on fort)' },
            { label: 'Drinking Water', available: false, detail: 'Carry own — none on fort' },
            { label: 'Toilets', available: false, detail: 'At beach only' },
            { label: 'Mobile Network', available: true, detail: 'Moderate signal' },
            { label: 'Boat Service', available: true, detail: '₹50-100, weather dependent' }
        ],

        quickFacts: [
            { label: 'District', value: 'Palghar (Vasai)' },
            { label: 'Access', value: 'Boat from Arnala Beach' },
            { label: 'Altitude', value: 'Sea level' },
            { label: 'Fort Type', value: 'Sea Fort (Island)' },
            { label: 'Built By', value: 'Portuguese' },
            { label: 'Captured By', value: 'Chimaji Appa (1737)' },
            { label: 'Famous For', value: 'Portuguese-Maratha history, sea views' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (calm boat ride)' },
            { label: 'Nearest City', value: 'Virar (10 km)' }
        ],

        reviews: {
            quote: "Arnala is the most accessible sea fort near Mumbai. The boat ride, the Portuguese walls, and the sea breeze — it's a perfect weekend escape without the crowds.",
            positives: [
                'Very accessible from Mumbai/Virar',
                'Short and pleasant boat ride',
                'Well-preserved fort walls and bastions',
                'Beautiful Arabian Sea views',
                'Great seafood at Arnala beach'
            ],
            proTips: [
                'Visit on weekdays for fewer crowds on the boat',
                'Combine with Arnala beach for a full day trip',
                'Go early morning for the best sea views and cooler weather',
                'Try the fresh Bombay duck fry at beach stalls',
                'Best visited October to May — monsoon boats don\'t run'
            ],
            rating: 4.2,
            reviewCount: '1,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ KELVE FORT ━━━━━━━━━━━━━━━━━━
    kelve: {
        introduction: `Kelve Fort is a quiet coastal fort near the popular Kelve Beach in Palghar district. 
            Now mostly in ruins, this fort was once part of the Portuguese and later Maratha coastal defense 
            network along the northern Konkan coast. While it lacks the grandeur of larger sea forts, Kelve 
            Fort rewards visitors with scenic Arabian Sea views, a peaceful atmosphere, and the charm of 
            exploring an uncrowded historical site right by the beach. It's an ideal addition to a Kelve 
            Beach day trip.`,

        quote: {
            text: "केळवे किल्ला — कोकण किनारपट्टीवरचा शांत इतिहास",
            attribution: "Kelve Fort — quiet history on the Konkan coast"
        },

        timeline: [
            { year: '16th Century', title: 'Portuguese Period', desc: 'The Portuguese built fortifications at Kelve as part of their coastal defense chain protecting the trade routes along the northern Konkan coast.' },
            { year: '17th Century', title: 'Maratha Control', desc: 'The Marathas captured the fort as they expanded control over the Konkan coast. It served as a minor coastal outpost.' },
            { year: '18th Century', title: 'Gradual Decline', desc: 'As larger forts took strategic precedence, Kelve Fort gradually lost importance and fell into disrepair.' },
            { year: 'Modern', title: 'Ruins & Tourism', desc: 'Today the fort exists as atmospheric ruins near Kelve Beach, attracting history enthusiasts and beach visitors alike.' }
        ],

        landmarks: [
            { title: 'Fort Ruins', desc: 'Scattered stone remains of the original fort structures — walls, foundations, and platform remnants that hint at the fort\'s former layout. Atmospheric and photogenic.', mustSee: true },
            { title: 'Sea View', desc: 'Beautiful panoramic views of the Arabian Sea from the fort\'s elevated position. Stunning during sunset when the sky turns golden over the water.', mustSee: true },
            { title: 'Beach Connection', desc: 'The fort sits adjacent to Kelve Beach, one of the cleanest and most scenic beaches in Palghar. The combination makes for a perfect day trip.', mustSee: false },
            { title: 'Coastal Rock Formations', desc: 'Interesting rock formations near the fort exposed during low tide. Worth exploring for the geological patterns and tidal pools.', mustSee: false }
        ],

        food: [
            { name: 'Beach Stall Snacks', type: 'Veg', price: '₹30-60', desc: 'Bhel puri, pani puri, and corn on cob at beach-side stalls. Classic beach food experience.' },
            { name: 'Seafood', type: 'Non-Veg', price: '₹100-200', desc: 'Fresh fish fry and seafood available at restaurants near Kelve Beach. Bombil and surmai are popular choices.' },
            { name: 'Kelve Village Food', type: 'Veg', price: '₹60-120', desc: 'Simple Maharashtrian meals at small eateries in Kelve village. Vada pav and misal also available.' },
            { name: 'Coconut Water', type: 'Beverage', price: '₹30-50', desc: 'Fresh coconut water from beach vendors — the perfect refreshment in the coastal heat.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Via Beach Route', difficulty: 'Easy', distance: '1 km', time: '20-30 min', desc: 'A leisurely walk from Kelve Beach to the fort remains. Flat, sandy terrain with no climbing involved. Suitable for all ages.' }
        ],

        howToReach: [
            { mode: 'By Train', icon: '🚂', desc: 'Take Western Railway to Kelve Road station (~2 hours from Churchgate). Auto/rickshaw from station to Kelve Beach (~5 km).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Mumbai via NH48 towards Palghar, then to Kelve Beach (~130 km, 2.5-3 hours). Parking at the beach area.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC buses from Mumbai to Palghar. Local transport from Palghar to Kelve Beach (~12 km).' }
        ],

        trekEssentials: [
            'Comfortable sandals or shoes — beach and ruins terrain',
            'Carry water and sunscreen',
            'Camera for sunset and sea views',
            'Visit during low tide for better access',
            'Light clothing — coastal heat',
            'Allow 1-2 hours for fort exploration',
            'Combine with Kelve Beach for a full day',
            'Carry cash — limited UPI at beach stalls'
        ],

        safetyAlerts: [
            { msg: 'Visit during low tide for better access and safer exploration', season: 'All year' },
            { msg: 'Some structures are fragile ruins — explore carefully and don\'t climb on walls', season: 'All year' },
            { msg: 'Slippery rocks near the fort during wet conditions', season: 'Monsoon' },
            { msg: 'Strong currents at the beach — don\'t swim near fort area', season: 'Monsoon' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Food', value: '₹80-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹180-500', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Kelve Beach' },
            { label: 'Food Stalls', available: true, detail: 'At beach area' },
            { label: 'Drinking Water', available: false, detail: 'Buy at beach stalls' },
            { label: 'Toilets', available: false, detail: 'At beach restaurants' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Beach Access', available: true, detail: 'Adjacent to Kelve Beach' }
        ],

        quickFacts: [
            { label: 'District', value: 'Palghar' },
            { label: 'Access', value: 'Walk from Kelve Beach' },
            { label: 'Altitude', value: 'Sea level' },
            { label: 'Fort Type', value: 'Land Fort (Coastal)' },
            { label: 'Built By', value: 'Portuguese' },
            { label: 'Famous For', value: 'Ruins, sea views, beach proximity' },
            { label: 'Time Required', value: '1-2 hours' },
            { label: 'Kids Appropriate', value: 'Yes (beach + fort)' },
            { label: 'Best Combined', value: 'Kelve Beach day trip' },
            { label: 'Nearest City', value: 'Palghar (12 km)' }
        ],

        reviews: {
            quote: "Kelve Fort is more about the atmosphere than the architecture. The ruins by the sea, the quiet beach, and the sunset — it's a peaceful escape that history lovers will appreciate.",
            positives: [
                'Quiet and uncrowded — perfect for solitude seekers',
                'Beautiful sea views, especially at sunset',
                'Located right next to scenic Kelve Beach',
                'Easy access — no trekking required',
                'Good food options at the beach'
            ],
            proTips: [
                'Time your visit with low tide for best access',
                'Stay for sunset — the views are spectacular',
                'Combine with Kelve Beach for a full day trip',
                'Visit on weekdays for complete peace',
                'Carry your own water and snacks to the fort area'
            ],
            rating: 3.8,
            reviewCount: '800+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ UNDERI FORT ━━━━━━━━━━━━━━━━━━
    underi: {
        introduction: `Underi Fort is a remote and atmospheric sea fort located on a small rocky island near 
            Alibaug in Raigad district. Built by the Siddis — African-origin rulers who controlled parts of 
            the Konkan coast — this fort was a constant point of conflict between the Siddis, Marathas, and 
            later the British. Unlike its better-known neighbor Khanderi Fort, Underi remains largely 
            unvisited and offers an authentic, raw sea fort experience for adventurous history enthusiasts 
            willing to navigate tide-dependent boat access.`,

        quote: {
            text: "उंदेरी — अलिबागजवळचा अज्ञात समुद्री किल्ला",
            attribution: "Underi — the unknown sea fort near Alibaug"
        },

        timeline: [
            { year: '17th Century', title: 'Siddi Construction', desc: 'The Siddi rulers of Janjira built Underi Fort as a strategic naval outpost to control the sea lanes near Alibaug and protect approaches to their capital at Murud-Janjira.' },
            { year: '1660s-1700s', title: 'Maratha-Siddi Conflicts', desc: 'The Marathas repeatedly attempted to capture Underi as part of their naval campaign against the Siddis. The fort changed hands multiple times during fierce sea battles.' },
            { year: '18th Century', title: 'British Interest', desc: 'The British East India Company took interest in controlling the Alibaug coast. Underi eventually came under British influence.' },
            { year: 'Modern', title: 'Abandoned Monument', desc: 'Today Underi stands as an abandoned but atmospheric sea fort, visited only by the most dedicated fort enthusiasts and fishermen.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Strong basalt fortification walls rising from the rocky island. The Siddi construction style is distinct — thick, dark stone walls designed to withstand both sea erosion and cannon fire.', mustSee: true },
            { title: 'Defensive Bastions', desc: 'Semicircular bastions facing the open sea, once armed with cannons. They offer dramatic views of the Arabian Sea and neighboring Khanderi Fort.', mustSee: true },
            { title: 'Khanderi Fort Views', desc: 'Clear views of the neighboring Khanderi Fort across the water. Understanding both forts together reveals the strategic naval chess game played between the Siddis and Marathas.', mustSee: false },
            { title: 'Rocky Island Terrain', desc: 'The exposed rocky terrain of the island itself is interesting — tidal pools, nesting seabirds, and raw coastal geology.', mustSee: false }
        ],

        food: [
            { name: 'Pack All Food', type: 'Veg', price: '₹0', desc: 'Absolutely nothing available on the island. Carry all food, snacks, and water for the entire trip.' },
            { name: 'Thal Village Food', type: 'Non-Veg', price: '₹100-200', desc: 'Small eateries in Thal village serve basic meals and fresh seafood. Eat before or after the boat trip.' },
            { name: 'Alibaug Restaurants', type: 'Non-Veg', price: '₹150-300', desc: 'Alibaug town has several good Konkan seafood restaurants. Surmai thali and kolambi (prawns) are highlights.' }
        ],

        trekRoutes: [
            { icon: '⛵', title: 'Via Boat from Thal Village', difficulty: 'Moderate', distance: 'Sea route', time: '15-20 min', desc: 'Boat ride from Thal village to the island. Access is entirely tide-dependent — only possible during favorable conditions. Arrange boat with local fishermen. ₹100-300 per group.' }
        ],

        howToReach: [
            { mode: 'By Ferry + Auto', icon: '⛴️', desc: 'Gateway of India ferry to Alibaug/Mandwa (~1 hour). From Alibaug, auto to Thal village (~10 km). Arrange boat to Underi from Thal.' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Mumbai via Mumbai-Pune Expressway to Pen, then to Alibaug-Thal (~120 km, 3 hours). Park at Thal and arrange boat.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC bus from Mumbai to Alibaug. Auto from Alibaug to Thal village. Boat from Thal to the fort island.' }
        ],

        trekEssentials: [
            'Non-slip shoes — rocky island with slippery surfaces',
            'Carry 2-3 litres of water — absolutely nothing on the island',
            'All food and snacks — no stalls anywhere near',
            'Sun protection — fully exposed island with zero shade',
            'Camera — dramatic sea fort views',
            'Check tide tables before planning — access is tide-dependent',
            'Arrange boat in advance with local fishermen',
            'Life jacket recommended for boat ride'
        ],

        safetyAlerts: [
            { msg: 'Access is entirely tide-dependent — plan around low tide and confirm with local fishermen', season: 'All year' },
            { msg: 'Boat availability is limited and not commercial — must arrange privately with fishermen', season: 'All year' },
            { msg: 'Rocky surfaces near the fort are extremely slippery — non-slip shoes mandatory', season: 'All year' },
            { msg: 'Do NOT visit during monsoon — sea conditions are dangerous and boats won\'t operate', season: 'June-Sept' },
            { msg: 'No mobile network on the island — inform someone of your plans before going', season: 'All year' }
        ],

        budget: [
            { label: 'Transport (to Thal)', value: '₹200-500' },
            { label: 'Boat Ride', value: '₹100-300' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹400-1000', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Thal village' },
            { label: 'Food Stalls', available: false, detail: 'None — carry all food' },
            { label: 'Drinking Water', available: false, detail: 'None — carry all water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'Weak to no signal on island' },
            { label: 'Boat Service', available: true, detail: '₹100-300, tide dependent' }
        ],

        quickFacts: [
            { label: 'District', value: 'Raigad (Alibaug)' },
            { label: 'Access', value: 'Boat from Thal village' },
            { label: 'Altitude', value: 'Sea level' },
            { label: 'Fort Type', value: 'Sea Fort (Island)' },
            { label: 'Built By', value: 'Siddi rulers' },
            { label: 'Famous For', value: 'Remote sea fort, Siddi history, solitude' },
            { label: 'Nearby Fort', value: 'Khanderi Fort' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'No (difficult access)' },
            { label: 'Nearest City', value: 'Alibaug (10 km)' }
        ],

        reviews: {
            quote: "Underi is for the truly adventurous. Getting there is half the challenge, but standing on a Siddi-built fortress surrounded by nothing but the Arabian Sea — that's an experience money can't buy.",
            positives: [
                'Truly offbeat — one of the least visited sea forts',
                'Raw, unrestored fort gives authentic historical feel',
                'Dramatic sea views and island atmosphere',
                'Fascinating Siddi dynasty history',
                'Views of neighboring Khanderi Fort'
            ],
            proTips: [
                'Always check tide tables before planning your visit',
                'Arrange boat with fishermen at Thal well in advance',
                'Visit October to February for calmest seas',
                'Combine with Khanderi Fort if boat can cover both',
                'Carry everything you need — the island has nothing'
            ],
            rating: 4.0,
            reviewCount: '150+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ REVDANDA FORT ━━━━━━━━━━━━━━━━━━
    revdanda: {
        introduction: `Revdanda Fort is one of the most atmospheric Portuguese ruins on the Konkan coast, 
            sprawling along the shoreline at the mouth of the Kundalika river in Raigad district. Built by 
            the Portuguese in the early 16th century as a major coastal bastion, the fort's massive walls, 
            imposing bastions, and haunting church ruins seamlessly blend into the fabric of modern Revdanda 
            village. Walking through its streets feels like stepping into a colonial time capsule, where 
            fishermen's homes sit within centuries-old fortification walls.`,

        quote: {
            text: "रेवदंडा — पोर्तुगीज कोकणाचा जिवंत इतिहास",
            attribution: "Revdanda — the living history of Portuguese Konkan"
        },

        timeline: [
            { year: '1524', title: 'Portuguese Construction', desc: 'The Portuguese built a massive fortification at Revdanda (they called it "Chaul de Cima") to control the Kundalika river mouth and protect their lucrative spice trade.' },
            { year: '16th-17th Century', title: 'Major Portuguese Base', desc: 'Revdanda became one of the most important Portuguese military bases on the Konkan coast, second only to Bassein (Vasai). Churches, convents, and administrative buildings were built inside.' },
            { year: '1739', title: 'Maratha Capture', desc: 'Chimaji Appa captured Revdanda during the historic Vasai campaign. The Marathas dismantled much of the Portuguese administrative infrastructure while maintaining the military walls.' },
            { year: '1818', title: 'British Period', desc: 'The fort passed to the British. The village gradually absorbed the fort ruins, creating the unique village-within-a-fort landscape visible today.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Long, impressive coastal walls stretching along the beach and village. Portuguese-style masonry with thick basalt blocks. Some sections stand over 10 metres high.', mustSee: true },
            { title: 'Corner Bastions', desc: 'Large semicircular bastions at strategic points along the wall, once armed with cannons facing the Arabian Sea. Stunning views from the top.', mustSee: true },
            { title: 'Church Ruins', desc: 'Haunting remains of Portuguese-era churches and convents within the fort. Stone archways, altar platforms, and decorative fragments create an evocative atmosphere.', mustSee: true },
            { title: 'Kundalika River View', desc: 'Views of the Kundalika river meeting the Arabian Sea from the fort\'s eastern walls. Beautiful at sunrise.', mustSee: false },
            { title: 'Village Integration', desc: 'Unique experience of a living village built within and around fort walls. Daily life happening amidst centuries-old fortifications.', mustSee: false }
        ],

        food: [
            { name: 'Konkan Seafood', type: 'Non-Veg', price: '₹100-250', desc: 'Fresh fish and prawns from local restaurants in Revdanda village. Surmai, pomfret, and kolambi are specialties.' },
            { name: 'Beach Stall Snacks', type: 'Veg', price: '₹30-60', desc: 'Bhel puri, vada pav, and corn at beach-side stalls near the fort.' },
            { name: 'Sol Kadhi', type: 'Beverage', price: '₹20-40', desc: 'Refreshingly tangy coconut-kokum drink — a Konkan essential, especially after exploring in the heat.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Tea stalls in the village. Enjoy a cup while sitting on fort walls watching the sea.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Via Revdanda Village Walk', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'Walk directly through the village into the fort ruins. No trekking required — the fort and village are intertwined. Explore at your own pace.' }
        ],

        howToReach: [
            { mode: 'By Ferry + Auto', icon: '⛴️', desc: 'Ferry from Gateway of India to Mandwa/Alibaug (~1 hour). Auto from Alibaug to Revdanda (~17 km, 30 min).' },
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Mumbai via Pen-Alibaug road (~130 km, 3 hours). Or from Pune via Tamhini Ghat (~170 km, 4 hours). Parking in the village.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC bus from Mumbai to Alibaug. Local bus or auto from Alibaug to Revdanda (~17 km).' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — village paths and ruins',
            'Camera — the church ruins are incredibly photogenic',
            'Water and sunscreen — limited shade in the fort',
            'Explore respectfully — the fort is part of a living village',
            'Allow 2-3 hours for thorough exploration',
            'Best visited early morning or late afternoon',
            'Combine with Korlai Fort (10 km south) for a full day',
            'Cash for food stalls and local transport'
        ],

        safetyAlerts: [
            { msg: 'Ruins are scattered and some walls may be unstable — explore carefully', season: 'All year' },
            { msg: 'Slippery rocks near the sea-facing walls, especially during high tide', season: 'All year' },
            { msg: 'Respect private property — parts of the fort are integrated into village homes', season: 'All year' },
            { msg: 'Strong sun exposure — carry water and sun protection', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Food', value: '₹80-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹180-500', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'In village area' },
            { label: 'Food Stalls', available: true, detail: 'In village and near beach' },
            { label: 'Drinking Water', available: false, detail: 'Buy from shops' },
            { label: 'Toilets', available: false, detail: 'Limited — at restaurants' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Nearby Fort', available: true, detail: 'Korlai Fort (10 km)' }
        ],

        quickFacts: [
            { label: 'District', value: 'Raigad (Alibaug)' },
            { label: 'Access', value: 'Walk through village' },
            { label: 'Altitude', value: 'Sea level' },
            { label: 'Fort Type', value: 'Sea Fort (Coastal)' },
            { label: 'Built By', value: 'Portuguese' },
            { label: 'Portuguese Name', value: 'Chaul de Cima' },
            { label: 'Famous For', value: 'Church ruins, village-fort blend' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy walk)' },
            { label: 'Best Combined', value: 'Korlai Fort, Alibaug' }
        ],

        reviews: {
            quote: "Revdanda is unlike any other fort — you're not visiting ruins, you're walking through a village that lives inside a 500-year-old Portuguese fortress. The church ruins at sunset are hauntingly beautiful.",
            positives: [
                'Unique village-within-fort experience',
                'Atmospheric Portuguese church ruins',
                'Impressive coastal walls and bastions',
                'Easy access — no trekking required',
                'Great seafood in the village'
            ],
            proTips: [
                'Visit at golden hour for the best photos of church ruins',
                'Combine with Korlai Fort (10 km south) for a Portuguese forts day',
                'Walk along the beach to see the full extent of the walls',
                'Ask locals to point out hidden Portuguese inscriptions',
                'The Kundalika river mouth is beautiful at sunrise'
            ],
            rating: 4.1,
            reviewCount: '1,200+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ BANKOT FORT (HIMMATGAD) ━━━━━━━━━━━━━━━━━━
    bankot: {
        introduction: `Bankot Fort, also known as Himmatgad and later renamed Fort Victoria by the British, 
            commands a dramatic position at the mouth of the Savitri river where it meets the Arabian Sea. 
            Originally built by the Adil Shahi dynasty, this coastal fort served as a crucial point for 
            controlling maritime trade along the Konkan coast. The fort offers commanding panoramic views 
            of the river confluence and the endless Arabian Sea — a visual spectacle that makes the visit 
            worthwhile even beyond its historical significance.`,

        quote: {
            text: "बाणकोट — सावित्री नदीच्या मुखावरचा प्रहरी",
            attribution: "Bankot — the sentinel at the mouth of the Savitri river"
        },

        timeline: [
            { year: '16th Century', title: 'Adilshahi Construction', desc: 'The Adil Shahi dynasty of Bijapur built the fort at the strategic Savitri river mouth to control the maritime trade routes along the Konkan coast.' },
            { year: '17th Century', title: 'Maratha Capture', desc: 'The Marathas captured Bankot and renamed it Himmatgad. It served as an important coastal outpost in their naval defense network.' },
            { year: '1756', title: 'British Capture', desc: 'The British East India Company captured the fort and renamed it "Fort Victoria." They used it as a coastal garrison and trading post.' },
            { year: '19th Century', title: 'Decline', desc: 'The fort gradually lost military importance and fell into disuse. It now stands as an atmospheric ruin overlooking the river and sea.' }
        ],

        landmarks: [
            { title: 'Fort Gate', desc: 'The main entrance structure with characteristic Deccan-style architecture. Though partially ruined, it retains its imposing presence and gives a sense of the fort\'s former grandeur.', mustSee: true },
            { title: 'Savitri River Viewpoint', desc: 'A spectacular panoramic viewpoint where the Savitri river meets the Arabian Sea. The vast expanse of water, fishing boats, and the coastline create a mesmerizing scene.', mustSee: true },
            { title: 'Fort Walls', desc: 'Remains of defensive walls and bastions running along the cliff edge. The positioning reveals the strategic genius of placing a fort at this river-sea confluence.', mustSee: true },
            { title: 'Interior Ruins', desc: 'Scattered remains of buildings, water tanks, and storage structures inside the fort. Simple but historically interesting.', mustSee: false }
        ],

        food: [
            { name: 'Bankot Village Food', type: 'Non-Veg', price: '₹80-150', desc: 'Simple home-style Konkan meals available at small eateries in Bankot village. Fresh fish when available.' },
            { name: 'Dapoli Restaurants', type: 'Non-Veg', price: '₹100-250', desc: 'Dapoli (~45 km) has better dining options with Konkan seafood thalis and Malvani cuisine.' },
            { name: 'Pack Your Own', type: 'Veg', price: '₹0', desc: 'Limited food options at the fort. Carry snacks and water for the visit.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Tea available in Bankot village. Simple but welcome after fort exploration.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Via Road and Steps', difficulty: 'Easy', distance: '1 km', time: '30-40 min', desc: 'Direct access from Bankot village via road and steps to the fort. No trekking required. Easy walk suitable for most visitors.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Pune via Tamhini Ghat to Mangaon, then to Bankot (~180 km, 4-5 hours). Or from Mumbai via Pen-Roha-Bankot (~200 km, 5 hours).' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC bus from Mumbai or Pune to Mandangad. Local transport from Mandangad to Bankot village.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Khed on Konkan Railway. Bus/auto from Khed to Bankot (~30 km).' }
        ],

        trekEssentials: [
            'Comfortable walking shoes',
            'Carry 1-2 litres of water — limited availability',
            'Sun protection — open fort with limited shade',
            'Camera for spectacular river-sea views',
            'Carry snacks — limited food near fort',
            'Allow 1.5-2 hours for exploration',
            'Best visited morning for cooler temperatures',
            'Combine with Dapoli beach trip'
        ],

        safetyAlerts: [
            { msg: 'Limited facilities at the fort — carry water and essentials', season: 'All year' },
            { msg: 'Hot conditions during summer — avoid midday visits', season: 'March-May' },
            { msg: 'Cliff edges near the viewpoints — maintain safe distance', season: 'All year' },
            { msg: 'Remote location — plan transport in advance', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Food', value: '₹50-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹250-650', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Near Bankot village' },
            { label: 'Food Stalls', available: false, detail: 'Limited — carry own' },
            { label: 'Drinking Water', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'No facilities at fort' },
            { label: 'Mobile Network', available: true, detail: 'Moderate signal' },
            { label: 'Guide', available: false, detail: 'None — self-explore' }
        ],

        quickFacts: [
            { label: 'District', value: 'Ratnagiri (Mandangad)' },
            { label: 'Also Known As', value: 'Himmatgad / Fort Victoria' },
            { label: 'Altitude', value: 'Sea level' },
            { label: 'Fort Type', value: 'Sea Fort (Coastal)' },
            { label: 'Built By', value: 'Adilshahi dynasty' },
            { label: 'Famous For', value: 'Savitri river views, triple-name history' },
            { label: 'Time Required', value: '1.5-2 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy access)' },
            { label: 'Best Combined', value: 'Dapoli beaches' },
            { label: 'Nearest City', value: 'Dapoli (45 km)' }
        ],

        reviews: {
            quote: "The view of the Savitri river meeting the Arabian Sea from Bankot Fort is worth the entire journey. Three names, three empires, one stunning location.",
            positives: [
                'Spectacular river-sea confluence views',
                'Interesting triple-name history (Bankot/Himmatgad/Fort Victoria)',
                'Peaceful and uncrowded',
                'Easy access — no trekking needed',
                'Great photo opportunities'
            ],
            proTips: [
                'Visit at sunrise for the most dramatic river-sea views',
                'Combine with Dapoli beach trip for a full day',
                'The ferry crossing at Bankot is an experience in itself',
                'Carry all supplies — very limited local options',
                'Best during winter for clear views and pleasant weather'
            ],
            rating: 4.0,
            reviewCount: '600+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ JAIGAD FORT ━━━━━━━━━━━━━━━━━━
    jaigad: {
        introduction: `Jaigad Fort is one of the best-preserved coastal forts along the Konkan coast, standing 
            proudly at the entrance of the Shastri river in Ratnagiri district. The fort's name literally means 
            "Place of Victory" (Jai = Victory, Gad = Fort). Controlled by the Marathas and later the British, 
            this fort offers a complete sea fort experience — well-preserved walls, massive bastions, a 
            nearby lighthouse, and spectacular views of the Arabian Sea meeting the Shastri river. Its 
            proximity to Ganapatipule makes it a popular addition to Konkan coastal trips.`,

        quote: {
            text: "जयगड — शास्त्री नदीच्या मुखावरचा विजयकिल्ला",
            attribution: "Jaigad — the Victory Fort at the Shastri river mouth"
        },

        timeline: [
            { year: '16th Century', title: 'Fort Construction', desc: 'Jaigad was built as a coastal defense fort to control the entrance to the Shastri river and protect the maritime trade routes along the Ratnagiri coast.' },
            { year: '17th Century', title: 'Maratha Control', desc: 'The Marathas strengthened Jaigad as part of their coastal defense chain. The fort served as a naval outpost and signal station.' },
            { year: '1818', title: 'British Capture', desc: 'The British East India Company took control of Jaigad. They maintained it briefly and later built the Jaigad Lighthouse nearby.' },
            { year: 'Modern', title: 'Heritage & Tourism', desc: 'Jaigad Fort has been partially restored and is maintained as a heritage monument. The nearby lighthouse adds to its tourist appeal.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Well-preserved defensive walls running along the cliff edge, featuring thick basalt construction. Some of the best-maintained coastal fort walls in the Konkan region.', mustSee: true },
            { title: 'Bastions', desc: 'Large, imposing bastions at strategic points along the walls, offering commanding views of the Arabian Sea and Shastri river entrance. Once armed with heavy cannons.', mustSee: true },
            { title: 'Jaigad Lighthouse', desc: 'A working lighthouse adjacent to the fort, offering panoramic views of the coastline. The lighthouse and fort together create a striking visual landmark.', mustSee: true },
            { title: 'Fort Interior', desc: 'Spacious interior area with remains of buildings, wells, and platforms. Well-maintained grounds make for a pleasant exploration.', mustSee: false },
            { title: 'Shastri River View', desc: 'Views of the Shastri river meeting the Arabian Sea from the fort\'s eastern bastions. Fishing boats dotting the water add to the maritime atmosphere.', mustSee: false }
        ],

        food: [
            { name: 'Jaigad Village Food', type: 'Non-Veg', price: '₹80-150', desc: 'Small eateries in Jaigad village serve fresh Konkan seafood and basic Maharashtrian meals.' },
            { name: 'Ganapatipule Restaurants', type: 'Non-Veg', price: '₹100-250', desc: 'Ganapatipule (~25 km) has good Konkan restaurants. Malvani fish curry and sol kadhi are must-tries.' },
            { name: 'Beach Snacks', type: 'Veg', price: '₹30-60', desc: 'Bhel puri, corn, and fruit available at nearby beach areas.' },
            { name: 'Kokum Sherbet', type: 'Beverage', price: '₹20-30', desc: 'Refreshing kokum drink — a Konkan specialty, perfect for the coastal heat.' }
        ],

        trekRoutes: [
            { icon: '🚗', title: 'Via Road Access', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'Drive to the fort entrance. Short walk inside to explore. No trekking required — fully road-accessible. Suitable for all ages.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Ratnagiri (~40 km, 1 hour) or from Ganapatipule (~25 km, 30 min). Well-maintained coastal road. Parking at fort entrance.' },
            { mode: 'By Bus', icon: '🚌', desc: 'MSRTC bus from Ratnagiri to Jaigad village. Or bus to Ganapatipule, then local transport to Jaigad.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Ratnagiri on Konkan Railway. Bus/taxi from Ratnagiri to Jaigad (~40 km).' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — paved and rocky surfaces',
            'Water bottle — stalls may be available nearby',
            'Camera — the lighthouse and sea views are stunning',
            'Sun protection — exposed fort areas',
            'Cash for food and transport',
            'Allow 2-3 hours for fort and lighthouse',
            'Best visited morning or late afternoon',
            'Combine with Ganapatipule for a full trip'
        ],

        safetyAlerts: [
            { msg: 'Strong winds near the cliff edges — keep safe distance and hold children', season: 'All year' },
            { msg: 'Do not climb fort walls — some sections are old and may be unstable', season: 'All year' },
            { msg: 'Slippery surfaces near the sea during monsoon', season: 'June-Sept' },
            { msg: 'Afternoon heat can be intense in summer — carry water', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Food', value: '₹80-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹180-500', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At fort entrance' },
            { label: 'Food Stalls', available: true, detail: 'Basic, near fort' },
            { label: 'Drinking Water', available: true, detail: 'Available' },
            { label: 'Toilets', available: false, detail: 'Limited' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Lighthouse', available: true, detail: 'Working lighthouse nearby' }
        ],

        quickFacts: [
            { label: 'District', value: 'Ratnagiri' },
            { label: 'Meaning', value: 'Jai (Victory) + Gad (Fort)' },
            { label: 'Altitude', value: 'Sea level (cliff-top)' },
            { label: 'Fort Type', value: 'Sea Fort (Coastal)' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Well-preserved walls, lighthouse, sea views' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (road access)' },
            { label: 'Best Combined', value: 'Ganapatipule temple & beach' },
            { label: 'Nearest City', value: 'Ratnagiri (40 km)' }
        ],

        reviews: {
            quote: "Jaigad is the complete Konkan fort experience — massive walls, sea views, a working lighthouse, and the Shastri river below. It's well-preserved and easy to explore, making it a must-visit on any Konkan trip.",
            positives: [
                'One of the best-preserved coastal forts',
                'Working lighthouse adds unique appeal',
                'Spectacular sea and river views',
                'Easy road access — family-friendly',
                'Close to popular Ganapatipule'
            ],
            proTips: [
                'Combine with Ganapatipule temple for a full day',
                'Visit the lighthouse for the best panoramic views',
                'Early morning or sunset visits are most beautiful',
                'Try local Malvani food in Ganapatipule after the visit',
                'The Konkan Railway journey to Ratnagiri is scenic — consider train travel'
            ],
            rating: 4.3,
            reviewCount: '2,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ ACHALA FORT ━━━━━━━━━━━━━━━━━━
    achala: {
        introduction: `Achala Fort is one of the most remote and rugged hill forts in Maharashtra, tucked away 
            in the Baglan region of Nashik district near the famous twin forts of Salher and Mulher. This 
            lesser-known fort rewards the dedicated trekker with solitude, challenging terrain, and stunning 
            panoramic views of the surrounding Sahyadri ranges. Part of the historic Baglan fort system that 
            controlled crucial trade routes, Achala offers an authentic, off-the-beaten-path trekking experience 
            far removed from the crowds of more popular forts.`,

        quote: {
            text: "अचला — बागलाणच्या डोंगररांगेतला अज्ञात योद्धा",
            attribution: "Achala — the unknown warrior of the Baglan ranges"
        },

        timeline: [
            { year: '17th Century', title: 'Maratha Period', desc: 'Achala Fort was part of the Baglan fort system used by the Marathas to control trade routes and maintain surveillance over the strategic northern Sahyadri passes.' },
            { year: '1672', title: 'Battle of Salher Connection', desc: 'During the famous Battle of Salher — the largest pitched battle of the Maratha-Mughal wars — Achala served as part of the wider defensive network in the Baglan region.' },
            { year: '18th Century', title: 'Mughal Conflict', desc: 'Like its neighbors Salher and Mulher, Achala changed hands between the Marathas and Mughals during their prolonged conflicts in the Baglan region.' },
            { year: '1818', title: 'British Annexation', desc: 'The British took control of the Baglan region. Achala, like other remote forts, was abandoned and gradually fell into ruin.' }
        ],

        landmarks: [
            { title: 'Fort Plateau', desc: 'An open plateau at the summit with scattered ruins and foundations of old structures. The wide-open space offers 360-degree views of the surrounding mountain ranges.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Rock-cut tanks carved into the basalt plateau for storing rainwater. These engineering marvels sustained garrison life in this remote location.', mustSee: true },
            { title: 'Salher-Mulher Views', desc: 'Breathtaking panoramic views of the nearby Salher and Mulher forts from Achala\'s plateau. Seeing all three forts together reveals the strategic genius of the Baglan fort system.', mustSee: true },
            { title: 'Ruined Walls', desc: 'Fragments of the original fortification walls, showing the construction techniques used in this remote highland fort.', mustSee: false }
        ],

        food: [
            { name: 'Pack All Food', type: 'Veg', price: '₹0', desc: 'Absolutely no food available at the fort or on the trail. Carry all meals, snacks, and ample water for the entire trek.' },
            { name: 'Village Meals', type: 'Veg', price: '₹60-100', desc: 'Basic home-cooked meals (dal-rice, bhakri) may be available at Pingalwadi base village if arranged in advance with villagers.' },
            { name: 'Satana Town', type: 'Veg/Non-Veg', price: '₹80-150', desc: 'Satana town (~50 km) has restaurants and dhabas. Stock up before heading to the remote fort area.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Pingalwadi Route', difficulty: 'Hard', distance: '4 km', time: '2-3 hrs', desc: 'The trek involves forest patches, rocky terrain, and a gradual ascent to the fort plateau. Trail can be confusing in places — a local guide is strongly recommended. Not for beginners.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nashik to Satana (~100 km), then to Pingalwadi village (~50 km further). Last stretch is rough road. 4WD recommended.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nashik to Satana. Local transport from Satana towards Pingalwadi. Very limited connectivity — plan carefully.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Riders from Nashik enjoy the scenic route through Baglan. Park at Pingalwadi and trek. Carry extra fuel — remote area.' }
        ],

        trekEssentials: [
            'Sturdy trekking shoes — rocky and uneven terrain',
            'Carry 3+ litres of water — no sources on trail or fort',
            'All food and snacks for the entire trek',
            'Local guide strongly recommended — trails are confusing',
            'First aid kit — remote area with no medical help',
            'Torch/headlamp for early morning starts',
            'Trekking poles recommended',
            'Avoid solo trekking — go in groups of 3+'
        ],

        safetyAlerts: [
            { msg: 'Remote area — NEVER trek solo. Always go with a group and inform someone of your plans', season: 'All year' },
            { msg: 'Limited water availability — carry minimum 3 litres per person', season: 'All year' },
            { msg: 'Trail may be confusing — hire a local guide from Pingalwadi', season: 'All year' },
            { msg: 'Extremely slippery in monsoon — avoid heavy rain days', season: 'June-Sept' },
            { msg: 'Very hot in summer — avoid peak afternoon hours', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-700' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Guide', value: '₹200-400' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹650-1400', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At base village (limited)' },
            { label: 'Food Stalls', available: false, detail: 'None — carry everything' },
            { label: 'Water Source', available: false, detail: 'None — carry all water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'Very weak to none' },
            { label: 'Nearby Forts', available: true, detail: 'Salher, Mulher (adjacent)' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nashik (Baglan)' },
            { label: 'Base Village', value: 'Pingalwadi / Achala' },
            { label: 'Altitude', value: '~1100 m' },
            { label: 'Fort Type', value: 'Hill Fort (Remote)' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Remote trek, Salher-Mulher views' },
            { label: 'Trek Distance', value: '4 km one way' },
            { label: 'Time Required', value: '4-5 hours' },
            { label: 'Kids Appropriate', value: 'No (difficult trek)' },
            { label: 'Nearest City', value: 'Satana (50 km)' }
        ],

        reviews: {
            quote: "Achala is for those who want the Sahyadris to themselves. No crowds, no stalls, just raw mountains and the ghosts of history. The views of Salher and Mulher from here are absolutely worth the effort.",
            positives: [
                'Completely offbeat — solitude guaranteed',
                'Stunning views of Salher and Mulher forts',
                'Authentic rugged trekking experience',
                'Rich history connected to Battle of Salher',
                'Beautiful natural surroundings'
            ],
            proTips: [
                'Always hire a local guide from Pingalwadi',
                'Best combined with Salher-Mulher for a multi-fort expedition',
                'Winter is ideal — clear skies and comfortable temperatures',
                'Carry extra water and food — nothing available for miles',
                'Start early to avoid afternoon heat'
            ],
            rating: 4.1,
            reviewCount: '200+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ MARKANDEY FORT ━━━━━━━━━━━━━━━━━━
    markandey: {
        introduction: `Markandey Fort is another hidden gem in the Baglan fort system of Nashik district, 
            sitting near the mighty Mulher Fort. Named after the sage Markandey from Hindu mythology, this 
            fort offers a quieter alternative to the more popular Salher trek. The moderate difficulty trail 
            passes through rocky terrain and connects with the Mulher fort region, rewarding trekkers with 
            panoramic views of the surrounding Sahyadri peaks and valleys.`,

        quote: {
            text: "मार्कंडेय — मुल्हेरजवळचा शांत निरीक्षक",
            attribution: "Markandey — the quiet observer near Mulher"
        },

        timeline: [
            { year: '17th Century', title: 'Maratha Period', desc: 'Markandey Fort was built as part of the Baglan fort chain to monitor trade routes and provide mutual support with the nearby Mulher and Salher forts.' },
            { year: '1672', title: 'Baglan Conflicts', desc: 'The fort played a supporting role during the Maratha-Mughal conflicts in the Baglan region, serving as a communication link between the main forts.' },
            { year: '18th Century', title: 'Mughal Control', desc: 'Like other Baglan forts, Markandey was briefly held by the Mughals before reverting to Maratha control.' },
            { year: '1818', title: 'Abandonment', desc: 'The British annexation led to the fort being abandoned. Its remote location accelerated its deterioration.' }
        ],

        landmarks: [
            { title: 'Fort Plateau', desc: 'Open plateau at the summit with scenic views in all directions. A peaceful spot ideal for resting and absorbing the mountain landscape.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Rock-cut water storage tanks on the plateau — essential infrastructure that allowed garrisons to survive in this remote location.', mustSee: true },
            { title: 'Mulher-Salher Views', desc: 'Panoramic views of the neighboring Mulher and Salher forts and surrounding Sahyadri peaks. The interconnected fort system is clearly visible.', mustSee: true },
            { title: 'Fort Remains', desc: 'Basic fortification remains including wall fragments and foundations. Simple but historically indicative.', mustSee: false }
        ],

        food: [
            { name: 'Pack All Food', type: 'Veg', price: '₹0', desc: 'No food available at the fort. Carry everything you need for the trek.' },
            { name: 'Village Meals', type: 'Veg', price: '₹50-100', desc: 'Home-cooked meals at Mulher/Taharabad village if arranged beforehand. Simple bhakri, dal, and rice.' },
            { name: 'Satana Town', type: 'Veg', price: '₹80-150', desc: 'Stock up on supplies at Satana town before heading to the remote trek area.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Mulher Route', difficulty: 'Medium', distance: '3.5 km', time: '2-2.5 hrs', desc: 'A moderate trek from Mulher village through rocky terrain. The trail connects with the Mulher fort region. Some sections may require route-finding — a guide is helpful.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nashik to Satana (~100 km), then to Mulher/Taharabad village (~40 km). Last stretch on rough road.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nashik to Satana. Local transport to Mulher village. Limited connectivity — pre-plan transport.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Scenic ride from Nashik through the Baglan region. Park at base village and trek up.' }
        ],

        trekEssentials: [
            'Good trekking shoes — rocky terrain',
            'Carry 2-3 litres of water',
            'All food and snacks for the trek',
            'Local guide recommended — trails not clearly marked',
            'Sun protection — exposed plateau',
            'First aid kit',
            'Trekking in groups recommended',
            'Start early morning for best conditions'
        ],

        safetyAlerts: [
            { msg: 'Remote location — avoid solo trekking, go with experienced group', season: 'All year' },
            { msg: 'Carry sufficient water — no sources on trail or fort', season: 'All year' },
            { msg: 'Trail may not be clearly marked — local guide recommended', season: 'All year' },
            { msg: 'Slippery paths during monsoon — use proper trekking shoes', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-700' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Guide', value: '₹150-300' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹600-1300', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At base village' },
            { label: 'Food Stalls', available: false, detail: 'None — carry everything' },
            { label: 'Water Source', available: false, detail: 'Carry all water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'Very weak signal' },
            { label: 'Nearby Forts', available: true, detail: 'Mulher, Salher, Achala' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nashik (Baglan)' },
            { label: 'Base Village', value: 'Mulher / Taharabad' },
            { label: 'Altitude', value: '~1000 m' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Peaceful trek, Mulher-Salher views' },
            { label: 'Trek Distance', value: '3.5 km one way' },
            { label: 'Time Required', value: '4-5 hours' },
            { label: 'Kids Appropriate', value: 'No (moderate-hard trek)' },
            { label: 'Nearest City', value: 'Satana (40 km)' }
        ],

        reviews: {
            quote: "Markandey is the quieter sibling in the Baglan fort family. While everyone heads to Salher, this fort rewards you with equal views and zero crowds.",
            positives: [
                'Peaceful and uncrowded',
                'Great views of Mulher and Salher',
                'Moderate difficulty — challenging but not extreme',
                'Rich Baglan fort system history',
                'Beautiful natural setting'
            ],
            proTips: [
                'Combine with Mulher Fort trek for a multi-fort day',
                'Winter months (Nov-Feb) are ideal',
                'A local guide from Mulher village is very helpful',
                'Carry camp essentials if planning to stay overnight',
                'Start early — afternoon heat makes the return harder'
            ],
            rating: 4.0,
            reviewCount: '150+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ HATGAD FORT ━━━━━━━━━━━━━━━━━━
    hatgad: {
        introduction: `Hatgad Fort is a fascinating frontier fort straddling the Maharashtra-Gujarat border, 
            just 5 km from the popular hill station of Saputara. This historic fort controlled the strategic 
            passes between Maharashtra and Gujarat, and its relatively easy accessibility makes it a perfect 
            trekking add-on for anyone visiting Saputara. The fort offers impressive views of the dense 
            Dang forests on the Gujarat side and the Sahyadri ranges on the Maharashtra side — literally 
            standing with one foot in each state.`,

        quote: {
            text: "हातगड — महाराष्ट्र-गुजरात सीमेवरचा सीमारक्षक",
            attribution: "Hatgad — the border guardian between Maharashtra and Gujarat"
        },

        timeline: [
            { year: '17th Century', title: 'Maratha Construction', desc: 'The Marathas built Hatgad as a frontier fort to control the passes between Maharashtra and Gujarat, particularly the routes leading to the Dang forest region.' },
            { year: '17th-18th Century', title: 'Mughal Conflicts', desc: 'The fort saw conflicts between the Marathas and Mughals who sought control of the border trade routes.' },
            { year: '1818', title: 'British Takeover', desc: 'The British took control of the fort and the border region. Hatgad gradually lost strategic importance as borders stabilized.' },
            { year: 'Modern', title: 'Tourist Destination', desc: 'Today Hatgad is a popular trekking destination for visitors to Saputara hill station, offering history and views in a convenient package.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Well-preserved fortification walls showcasing sturdy Maratha construction. The walls are best seen from the approach path where their defensive positioning is evident.', mustSee: true },
            { title: 'Stone Steps', desc: 'A defined stone step path leading to the fort top. Well-constructed and atmospheric — walk the same path that soldiers took centuries ago.', mustSee: true },
            { title: 'Border Viewpoints', desc: 'Spectacular views of the Dang forests (Gujarat) and Sahyadri ranges (Maharashtra). Standing at the fort, you literally see two states stretching before you.', mustSee: true },
            { title: 'Fort Plateau', desc: 'The summit plateau with remains and open areas. A great spot for rest and photos.', mustSee: false }
        ],

        food: [
            { name: 'Saputara Restaurants', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Saputara (~5 km) has numerous restaurants serving Gujarati and Maharashtrian cuisine. Thalis and street food available.' },
            { name: 'Pack Light Snacks', type: 'Veg', price: '₹0', desc: 'Carry snacks and water for the short trek. No stalls at the fort.' },
            { name: 'Saputara Street Food', type: 'Veg', price: '₹30-60', desc: 'Corn on cob, bhel puri, and ice gola at Saputara lake area. Fun after the trek.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Tea stalls aplenty in Saputara. Perfect for warming up after a monsoon trek.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Hatgad Village Route', difficulty: 'Easy-Medium', distance: '1.5-2 km', time: '60-90 min', desc: 'A gradual climb with stone steps and defined trails leading to the fort top. Suitable for most trekkers. Beautiful forest surroundings.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nashik to Saputara (~110 km, 3 hours). Hatgad is ~5 km from Saputara. Or from Surat (~160 km, 3.5 hours).' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nashik to Saputara. Or GSRTC buses from Surat/Ahmedabad to Saputara. Local transport to Hatgad.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Scenic ride to Saputara through ghats. The road to Hatgad is well-maintained. Park at the village.' }
        ],

        trekEssentials: [
            'Comfortable trekking shoes — stone steps and rocky paths',
            'Carry 1-2 litres of water',
            'Sun protection — limited shade on open sections',
            'Camera — border views are spectacular',
            'Light snacks for the short trek',
            'Allow 2-3 hours total',
            'Monsoon visits are magical but steps get slippery',
            'Combine with Saputara sightseeing'
        ],

        safetyAlerts: [
            { msg: 'Stone steps become slippery during monsoon — wear proper trekking shoes', season: 'June-Sept' },
            { msg: 'Carry water — no sources available at the fort', season: 'All year' },
            { msg: 'Limited shade on the approach — carry sun protection in summer', season: 'March-May' },
            { msg: 'Afternoon fog in monsoon can reduce visibility — start early', season: 'June-Sept' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Food', value: '₹80-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹180-500', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Near base village' },
            { label: 'Food Stalls', available: false, detail: 'None at fort (available in Saputara)' },
            { label: 'Water Source', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'At Saputara hotels' },
            { label: 'Mobile Network', available: true, detail: 'Moderate (near Saputara)' },
            { label: 'Hill Station', available: true, detail: 'Saputara (5 km)' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nashik (Baglan)' },
            { label: 'Base Village', value: 'Hatgad' },
            { label: 'Altitude', value: '~900 m' },
            { label: 'Fort Type', value: 'Hill Fort (Frontier)' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Border views, Saputara proximity' },
            { label: 'Trek Distance', value: '1.5-2 km one way' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (with supervision)' },
            { label: 'Nearest City', value: 'Saputara (5 km)' }
        ],

        reviews: {
            quote: "Hatgad is the perfect Saputara bonus. A short trek, impressive fort walls, and views that span two states — it's history with a view, literally.",
            positives: [
                'Easy access from popular Saputara hill station',
                'Views spanning Maharashtra and Gujarat',
                'Well-defined stone step path',
                'Short trek suitable for families',
                'Monsoon views are breathtaking'
            ],
            proTips: [
                'Always combine with Saputara sightseeing',
                'Monsoon is the most scenic time but steps get slippery',
                'Early morning gives the clearest border views',
                'Stay overnight in Saputara for a relaxed trip',
                'The drive from Nashik through ghats is scenic — enjoy the journey'
            ],
            rating: 4.2,
            reviewCount: '1,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ LALING FORT ━━━━━━━━━━━━━━━━━━
    laling: {
        introduction: `Laling Fort is a historically significant hill fort rising above the plains near Dhule 
            city, overlooking the Mumbai-Agra highway (NH3). Originally built by the Farooqui dynasty — the 
            rulers of Khandesh — this fort has witnessed the rule of multiple empires including the Mughals, 
            Marathas, and the British. Its easy accessibility from Dhule makes it a popular short trek 
            destination, while its ancient caves and panoramic views of the surrounding plains make it 
            historically and scenically rewarding.`,

        quote: {
            text: "लळिंग — खानदेशच्या मैदानावरचा प्रहरी",
            attribution: "Laling — the sentinel over the Khandesh plains"
        },

        timeline: [
            { year: '15th Century', title: 'Farooqui Construction', desc: 'The Farooqui dynasty, rulers of the Khandesh region, built Laling Fort as a watchtower and control point for the important trade routes passing through the area.' },
            { year: '16th Century', title: 'Mughal Capture', desc: 'The Mughals captured Khandesh and Laling Fort during their southern expansion. The fort served as a Mughal garrison in the Deccan.' },
            { year: '17th-18th Century', title: 'Maratha Control', desc: 'The Marathas captured the fort during their expansion. It served as a minor outpost in the broader Maratha defense network.' },
            { year: '1818', title: 'British Period', desc: 'The British took control. The fort lost strategic importance and gradually fell into disuse.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Remains of old fortification walls showing construction techniques from the Farooqui and Mughal periods. Simple but historically instructive.', mustSee: true },
            { title: 'Ancient Caves', desc: 'Interesting caves on the fort hill that were used for shelter and storage. Cool interiors provide welcome relief from the Khandesh heat.', mustSee: true },
            { title: 'Highway Viewpoint', desc: 'Panoramic views of the surrounding plains and the Mumbai-Agra highway stretching into the distance. At night, the highway lights create a ribbon of light.', mustSee: true },
            { title: 'Fort Plateau', desc: 'Open plateau at the summit with scattered remains. Good area for rest and exploration.', mustSee: false }
        ],

        food: [
            { name: 'Dhule City Food', type: 'Veg/Non-Veg', price: '₹60-150', desc: 'Dhule (~10 km) has good restaurants serving Khandeshi cuisine, North Indian food, and fast food.' },
            { name: 'Highway Dhabas', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Numerous dhabas on the Mumbai-Agra highway near Dhule. Hearty meals and chai.' },
            { name: 'Pack Snacks', type: 'Veg', price: '₹0', desc: 'Carry light snacks and water for the short trek. No stalls at the fort.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Tea available in Laling village. Perfect for a pre or post-trek break.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Laling Village Route', difficulty: 'Easy', distance: '1.5 km', time: '60-90 min', desc: 'A gradual climb through open terrain leading to the fort plateau. Well-defined path suitable for beginners and families.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Dhule (~10 km, 15 min) on the Mumbai-Agra highway. Well-connected and easy to find. Parking at the village.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Local bus from Dhule city to Laling village. Very frequent service due to proximity.' },
            { mode: 'By Highway', icon: '🛣️', desc: 'Located right off the Mumbai-Agra highway (NH3). Easy pit stop for road trippers.' }
        ],

        trekEssentials: [
            'Comfortable shoes — open terrain',
            'Carry 1 litre of water',
            'Sun protection — little shade on the hill',
            'Camera for plains views',
            'Light snacks',
            'Allow 2-3 hours total',
            'Best visited early morning or evening',
            'Torch for exploring caves'
        ],

        safetyAlerts: [
            { msg: 'Carry water — no sources on the fort', season: 'All year' },
            { msg: 'Open terrain with little shade — avoid midday in summer', season: 'March-May' },
            { msg: 'Cave interiors can be dark — carry a torch', season: 'All year' },
            { msg: 'Khandesh summers are extremely hot — plan morning visits only', season: 'April-June' }
        ],

        budget: [
            { label: 'Transport', value: '₹30-100' },
            { label: 'Food', value: '₹60-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹90-250', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At Laling village' },
            { label: 'Food Stalls', available: false, detail: 'None at fort (Dhule nearby)' },
            { label: 'Water Source', available: false, detail: 'Carry own water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: true, detail: 'Good (near Dhule)' },
            { label: 'Highway', available: true, detail: 'Mumbai-Agra highway nearby' }
        ],

        quickFacts: [
            { label: 'District', value: 'Dhule' },
            { label: 'Base Village', value: 'Laling' },
            { label: 'Altitude', value: '~700 m' },
            { label: 'Fort Type', value: 'Hill Fort (Watchtower)' },
            { label: 'Built By', value: 'Farooqui dynasty' },
            { label: 'Famous For', value: 'Caves, highway views, easy trek' },
            { label: 'Trek Distance', value: '1.5 km one way' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy climb)' },
            { label: 'Nearest City', value: 'Dhule (10 km)' }
        ],

        reviews: {
            quote: "Laling is the perfect road trip fort — right off the Mumbai-Agra highway, an easy climb, ancient caves, and views of the Khandesh plains. Perfect for a 2-hour history break.",
            positives: [
                'Very accessible from Dhule and the highway',
                'Easy trek suitable for all fitness levels',
                'Interesting caves to explore',
                'Unique Farooqui dynasty history',
                'Good views of surrounding plains'
            ],
            proTips: [
                'Perfect pit stop on Mumbai-Agra highway road trips',
                'Visit early morning or evening — Khandesh gets very hot',
                'Carry a torch for the caves',
                'Combine with Dhule city sightseeing',
                'Monsoon transforms the brown plains into green fields'
            ],
            rating: 4.0,
            reviewCount: '500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ TORANMAL HILL STATION ━━━━━━━━━━━━━━━━━━
    toranmal: {
        introduction: `Toranmal is a hidden jewel of northern Maharashtra — a scenic hill station perched 
            in the Satpuda mountain range of Nandurbar district. Often called "Maharashtra's best-kept 
            secret," Toranmal offers cool climate, lush forests, serene lakes, and spectacular viewpoints 
            at an altitude of 1,150 metres. Unlike forts, Toranmal is a nature and spiritual destination 
            featuring the beautiful Yashwant Lake, the ancient Gorakhnath Temple, and stunning sunset 
            points. It provides a rare chance to experience northern Maharashtra's tribal culture and 
            natural beauty far from tourist crowds.`,

        quote: {
            text: "तोरणमाळ — सातपुड्यातला महाराष्ट्राचा गुप्त स्वर्ग",
            attribution: "Toranmal — Maharashtra's hidden paradise in the Satpudas"
        },

        timeline: [
            { year: 'Ancient', title: 'Spiritual Significance', desc: 'Toranmal has been a sacred site since ancient times, with the Gorakhnath Temple attracting devotees and sadhus (saints) from across western India.' },
            { year: 'Medieval', title: 'Tribal Heritage', desc: 'The region has been home to Bhil and other tribal communities for centuries. Their culture and traditions remain alive in the surrounding villages.' },
            { year: 'British Era', title: 'Hill Station Development', desc: 'The British recognized Toranmal\'s cool climate and developed it as a small hill station. Yashwant Lake was maintained as a scenic attraction.' },
            { year: 'Modern', title: 'Tourism Growth', desc: 'Toranmal is gradually gaining recognition as an alternative to crowded hill stations. Government initiatives are improving infrastructure and connectivity.' }
        ],

        landmarks: [
            { title: 'Yashwant Lake', desc: 'A beautiful, serene lake surrounded by forest and hills. Perfect for boat riding, photography, or simply sitting and absorbing the peaceful atmosphere. The lake reflects the surrounding hills beautifully.', mustSee: true },
            { title: 'Sunset Point', desc: 'A spectacular viewpoint offering panoramic sunset views over the Satpuda ranges. The sky turns incredible shades of orange and purple as the sun dips below the mountain line.', mustSee: true },
            { title: 'Gorakhnath Temple', desc: 'An ancient temple dedicated to the Nath Sampradaya saint Gorakhnath. Situated on a hilltop, it combines spiritual significance with panoramic views.', mustSee: true },
            { title: 'Sita Khai', desc: 'A deep gorge according to legend associated with Sita from the Ramayana. The dramatic cliff and valley views are impressive.', mustSee: true },
            { title: 'Forest Trails', desc: 'Numerous walking trails through dense Satpuda forests. Rich biodiversity with unique flora and tribal medicinal plants.', mustSee: false }
        ],

        food: [
            { name: 'Local Dhabas', type: 'Veg', price: '₹60-120', desc: 'Simple but hearty Maharashtrian meals at small eateries in Toranmal. Dal-rice, bhakri, and seasonal vegetables.' },
            { name: 'MTDC Restaurant', type: 'Veg', price: '₹80-200', desc: 'The MTDC resort at Toranmal has a restaurant serving decent vegetarian meals and snacks.' },
            { name: 'Tribal Food', type: 'Veg', price: '₹40-80', desc: 'If you can find local tribal food — ragi rotis, wild greens, and simple curries — it\'s an authentic culinary experience.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-20', desc: 'Tea stalls in the small market area. The cool climate makes chai especially enjoyable.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Nature Trail Walk', difficulty: 'Easy', distance: '2-5 km', time: '1-3 hrs', desc: 'Various walking trails around Toranmal connecting Yashwant Lake, Sunset Point, and Gorakhnath Temple. Easy walks through forest paths. Suitable for all ages.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Dhule (~120 km, 3 hours) or from Shahada (~55 km, 1.5 hours). Mountain road with hairpin bends — drive carefully.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Shahada or Nandurbar to Toranmal. Limited service — check timings. Shahada has the best connections.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest railhead: Nandurbar on the Mumbai-Delhi line. Bus/taxi from Nandurbar to Toranmal (~80 km, 2.5 hours).' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — forest trails',
            'Light jacket — cool climate even in summer',
            'Camera — stunning lake and sunset views',
            'Carry snacks — limited food options',
            'Water bottle',
            'Allow full day for complete sightseeing',
            'Book MTDC stay in advance — limited options',
            'Cash essential — very limited UPI/ATMs'
        ],

        safetyAlerts: [
            { msg: 'Limited accommodation — book MTDC resort or homestay well in advance', season: 'All year' },
            { msg: 'Mountain road with hairpin bends — drive carefully, especially in monsoon', season: 'June-Sept' },
            { msg: 'Limited mobile network and no ATMs — carry cash', season: 'All year' },
            { msg: 'Forest trails can be confusing — stick to marked paths', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-700' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Stay (MTDC)', value: '₹500-1500' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total (day trip)', value: '₹500-1000', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At multiple spots' },
            { label: 'Food', available: true, detail: 'Limited — dhabas and MTDC' },
            { label: 'Drinking Water', available: true, detail: 'Available' },
            { label: 'Stay', available: true, detail: 'MTDC resort + homestays' },
            { label: 'Mobile Network', available: true, detail: 'Moderate (BSNL best)' },
            { label: 'Boating', available: true, detail: 'At Yashwant Lake' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nandurbar' },
            { label: 'Type', value: 'Hill Station' },
            { label: 'Altitude', value: '1,150 m' },
            { label: 'Mountain Range', value: 'Satpuda' },
            { label: 'Famous For', value: 'Yashwant Lake, Sunset Point, cool climate' },
            { label: 'Best Time', value: 'October to March (Winter)' },
            { label: 'Time Required', value: '4-6 hours (full day ideal)' },
            { label: 'Kids Appropriate', value: 'Yes (nature trails)' },
            { label: 'Stay Options', value: 'MTDC resort, homestays' },
            { label: 'Nearest City', value: 'Shahada (55 km)' }
        ],

        reviews: {
            quote: "Toranmal is what Mahabaleshwar was 30 years ago — unspoiled, uncrowded, and absolutely magical. The sunset over the Satpuda range is worth the journey alone.",
            positives: [
                'Incredibly peaceful — far from tourist crowds',
                'Cool climate even in summer',
                'Beautiful Yashwant Lake',
                'Stunning sunset views over Satpuda range',
                'Unique tribal culture experience'
            ],
            proTips: [
                'Book MTDC resort well in advance — very limited rooms',
                'Carry cash — no ATMs and limited UPI',
                'BSNL network works best here',
                'Visit during monsoon for the greenest, most dramatic views',
                'Try to interact with local tribal communities — fascinating culture'
            ],
            rating: 4.3,
            reviewCount: '800+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ KANHERGARH ━━━━━━━━━━━━━━━━━━
    kanhergarh: {
        introduction: `Kanhergarh is one of the most remote and least-visited forts in Maharashtra, tucked 
            away in the Sakri taluka of Dhule district deep within the Khandesh region. This unassuming 
            hill fort served as a minor surveillance outpost, but its isolation is precisely what makes it 
            appealing to hardcore trekking enthusiasts. With virtually no tourist infrastructure and barely 
            any marked trails, Kanhergarh offers a raw, wilderness trekking experience through the dry 
            Khandesh landscape — a world apart from the lush Sahyadri forts that dominate most trekking lists.`,

        quote: {
            text: "कान्हेरगड — खानदेशच्या दुर्गम जंगलातला विसरलेला किल्ला",
            attribution: "Kanhergarh — the forgotten fort in Khandesh's remote forests"
        },

        timeline: [
            { year: '17th Century', title: 'Local Construction', desc: 'Kanhergarh was built by local rulers in the Khandesh region as a minor surveillance outpost to monitor the surrounding terrain and trade paths.' },
            { year: '17th-18th Century', title: 'Maratha Period', desc: 'The Marathas incorporated Kanhergarh into their broader defense network during their expansion through Khandesh.' },
            { year: '19th Century', title: 'Abandonment', desc: 'After the British annexation, the fort was completely abandoned. Its remote location meant it was forgotten by all but the most dedicated local historians.' }
        ],

        landmarks: [
            { title: 'Fort Plateau', desc: 'An open plateau at the summit with basic ruins — wall fragments, foundations, and cleared areas that once housed the garrison. The remoteness adds to its atmospheric quality.', mustSee: true },
            { title: 'Water Tanks', desc: 'Rock-cut cisterns carved into the basalt rock for rainwater storage. Essential survival infrastructure in this dry Khandesh climate.', mustSee: true },
            { title: 'Khandesh Viewpoints', desc: 'Views of the surrounding Khandesh plains and hills. The dry, rugged landscape is starkly different from the green Western Ghats forts.', mustSee: true }
        ],

        food: [
            { name: 'Pack Everything', type: 'Veg', price: '₹0', desc: 'Absolutely no food available anywhere near the fort. Carry all meals, snacks, and water for the entire trek. Plan as a self-sufficient expedition.' },
            { name: 'Sakri Town', type: 'Veg', price: '₹50-100', desc: 'Basic eateries in Sakri town. Stock up before heading to the remote fort area.' },
            { name: 'Dhule City', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Dhule (~60 km) has proper restaurants. Eat well before the expedition.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Kanher Village Route', difficulty: 'Medium', distance: '3 km', time: '2-2.5 hrs', desc: 'A gradual climb through open terrain and forest patches to the fort plateau. Trail is not well-marked — local guide essential. Not recommended for beginners.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Dhule to Sakri (~40 km), then to Kanher village (~20 km). Last stretch is rough road — high-clearance vehicle recommended.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Dhule to Sakri. Very limited local transport to Kanher village. Plan private transport for the last leg.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Ride from Dhule through Khandesh countryside. Roads are rough near the base — sturdy bike recommended.' }
        ],

        trekEssentials: [
            'Sturdy trekking shoes — rough, uneven terrain',
            'Carry 3+ litres of water — NO sources anywhere',
            'All food for full day — no stalls within miles',
            'Local guide essential — trail not marked',
            'First aid kit — very remote, no medical help',
            'Sun protection — dry Khandesh terrain, little shade',
            'Group trekking mandatory — never go solo',
            'Inform someone of your plans and expected return'
        ],

        safetyAlerts: [
            { msg: 'Extremely remote — NEVER trek solo. Go with experienced group and inform someone', season: 'All year' },
            { msg: 'No water anywhere — carry minimum 3 litres per person', season: 'All year' },
            { msg: 'Trail not well-marked — hire a local guide from Kanher village', season: 'All year' },
            { msg: 'Extreme heat in summer — avoid entirely April to June', season: 'April-June' }
        ],

        budget: [
            { label: 'Transport', value: '₹400-800' },
            { label: 'Food', value: '₹100-200' },
            { label: 'Guide', value: '₹200-400' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹700-1400', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: false, detail: 'Village road — limited space' },
            { label: 'Food Stalls', available: false, detail: 'None — carry everything' },
            { label: 'Water Source', available: false, detail: 'None — carry all water' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'Very weak to none' },
            { label: 'Medical', available: false, detail: 'None — nearest in Sakri' }
        ],

        quickFacts: [
            { label: 'District', value: 'Dhule (Sakri)' },
            { label: 'Base Village', value: 'Kanher' },
            { label: 'Altitude', value: '~800 m' },
            { label: 'Fort Type', value: 'Hill Fort (Surveillance)' },
            { label: 'Built By', value: 'Local rulers' },
            { label: 'Famous For', value: 'Remote trek, Khandesh isolation' },
            { label: 'Trek Distance', value: '3 km one way' },
            { label: 'Time Required', value: '4-5 hours' },
            { label: 'Kids Appropriate', value: 'No (remote, difficult)' },
            { label: 'Nearest City', value: 'Dhule (60 km)' }
        ],

        reviews: {
            quote: "Kanhergarh is for those who find even Achala too mainstream. This is extreme offbeat trekking — no trails, no people, no facilities, just you and the Khandesh wilderness.",
            positives: [
                'Ultimate solitude — practically zero visitors',
                'Raw wilderness trekking experience',
                'Unique Khandesh landscape',
                'Authentic rock-cut water cisterns',
                'Satisfying challenge for experienced trekkers'
            ],
            proTips: [
                'Hire a local guide from Kanher village — non-negotiable',
                'Winter only — Khandesh summers are brutal',
                'Carry more water than you think you need',
                'Start very early to maximize daylight',
                'Consider this a wilderness expedition, not a casual trek'
            ],
            rating: 3.8,
            reviewCount: '50+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ PISOLGAD ━━━━━━━━━━━━━━━━━━
    pisolgad: {
        introduction: `Pisolgad is perhaps the most extreme offbeat fort trek in Maharashtra. Located in the 
            remote reaches of Jalgaon district near the Chalisgaon region, this fort exists in near-total 
            isolation. With no mobile signal, no marked trails, and virtually no visitors, Pisolgad is a 
            destination purely for the most hardcore and experienced trekkers who seek the thrill of navigating 
            uncharted terrain. The fort itself has minimal ruins, but the journey — through rugged rocky 
            terrain and sparse forest — is the real reward.`,

        quote: {
            text: "पिसोळगड — जळगावच्या निर्जन डोंगरांतला सर्वात एकांत किल्ला",
            attribution: "Pisolgad — the most solitary fort in Jalgaon's barren hills"
        },

        timeline: [
            { year: '17th Century', title: 'Maratha Period', desc: 'Pisolgad was likely established as a minor hill fort for local defense and observation. Its remote location made it useful as a hidden outpost.' },
            { year: '18th Century', title: 'Decline', desc: 'Even during its active period, Pisolgad was a minor fort. It was among the first to be abandoned as military strategies evolved.' },
            { year: '19th Century', title: 'Forgotten', desc: 'After British annexation, the fort was completely forgotten. Only local shepherds and the most dedicated fort explorers know of its existence.' }
        ],

        landmarks: [
            { title: 'Rocky Plateau', desc: 'The summit plateau with minimal ruins — scattered stones and foundations that hint at a once-functional outpost. The stark emptiness is both haunting and beautiful.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Limited seasonal water sources carved into rock. Functional only during and shortly after monsoon. Engineering in the most basic, practical sense.', mustSee: true },
            { title: 'Panoramic Views', desc: 'Wide, unobstructed views of the surrounding Jalgaon region. The barren landscape stretching to the horizon creates a sense of vastness and isolation.', mustSee: true }
        ],

        food: [
            { name: 'Self-Sufficient Only', type: 'Veg', price: '₹0', desc: 'Absolutely nothing available. This is a wilderness expedition — carry ALL food, water, and supplies for the entire day. Pre-plan every meal.' },
            { name: 'Chalisgaon', type: 'Veg/Non-Veg', price: '₹60-150', desc: 'Chalisgaon town (~40 km) has basic restaurants. Stock up before heading out.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Pisole Village Route', difficulty: 'Hard', distance: '4 km', time: '2.5-3 hrs', desc: 'A long, challenging trek through rocky terrain and sparse forest. No marked trail — navigation skills and a local guide are mandatory. For experienced trekkers only.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Jalgaon or Chalisgaon towards Pisole village. Roads deteriorate significantly near the base. High-clearance vehicle essential.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Very limited bus service to Pisole area. Private transport strongly recommended.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'Experienced riders can reach the base. Roads near Pisole are rough — adventure bike recommended.' }
        ],

        trekEssentials: [
            'Heavy-duty trekking shoes — extremely rocky terrain',
            'Carry 4+ litres of water — NOTHING available',
            'All food for full day, packed meals',
            'Local guide MANDATORY — no trail exists',
            'GPS device or offline maps — no mobile signal',
            'Complete first aid kit',
            'Trekking poles — rocky, uneven ground',
            'Group of 4+ people minimum'
        ],

        safetyAlerts: [
            { msg: 'EXTREME REMOTE — no facilities, no network, no medical help. Plan as a serious expedition', season: 'All year' },
            { msg: 'No mobile signal — carry GPS, offline maps, and inform someone of detailed plans', season: 'All year' },
            { msg: 'No water anywhere — carry minimum 4 litres per person', season: 'All year' },
            { msg: 'Navigation required — no marked trails exist. Local guide mandatory', season: 'All year' },
            { msg: 'Avoid monsoon (slippery rocks) and summer (extreme heat)', season: 'June-Sept, March-May' }
        ],

        budget: [
            { label: 'Transport', value: '₹500-1000' },
            { label: 'Food', value: '₹150-300' },
            { label: 'Guide', value: '₹300-500' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹950-1800', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: false, detail: 'Road-side only' },
            { label: 'Food Stalls', available: false, detail: 'None within 20 km' },
            { label: 'Water Source', available: false, detail: 'None — carry everything' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: false, detail: 'NO signal' },
            { label: 'Medical', available: false, detail: 'None — nearest 40+ km' }
        ],

        quickFacts: [
            { label: 'District', value: 'Jalgaon (Chalisgaon)' },
            { label: 'Base Village', value: 'Pisole' },
            { label: 'Altitude', value: '~850 m' },
            { label: 'Fort Type', value: 'Hill Fort (Remote)' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Famous For', value: 'Extreme isolation, offbeat trek' },
            { label: 'Trek Distance', value: '4 km one way' },
            { label: 'Time Required', value: '5-6 hours' },
            { label: 'Kids Appropriate', value: 'Absolutely not' },
            { label: 'Nearest City', value: 'Chalisgaon (40 km)' }
        ],

        reviews: {
            quote: "If you want to tell people you've been to a fort nobody has heard of, Pisolgad is your answer. It's not pretty, it's not easy, but it's 100% authentic exploration.",
            positives: [
                'Possibly the most offbeat fort in Maharashtra',
                'True wilderness exploration experience',
                'Complete solitude — you won\'t see another soul',
                'Satisfaction of conquering the unknown',
                'Unique barren landscape'
            ],
            proTips: [
                'Only attempt with experienced trekking group',
                'Winter (Nov-Jan) is the ONLY viable season',
                'Carry GPS — this is not a casual trek',
                'Pre-arrange guide from Pisole village well in advance',
                'Treat this as a mountain expedition, not a day hike'
            ],
            rating: 3.7,
            reviewCount: '30+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ AUSA FORT ━━━━━━━━━━━━━━━━━━
    ausa: {
        introduction: `Ausa Fort is a magnificent example of Deccan land fort architecture, standing in the 
            heart of Ausa town in Latur district. Built during the Bahmani Sultanate period, this fort 
            showcases the Islamic architectural influences that dominated the Deccan military landscape. 
            With its strong fortification walls, imposing bastions, and well-planned interior structures, 
            Ausa Fort tells the story of Marathwada's rich Islamic and medieval history — a heritage that 
            is often overshadowed by the Sahyadri hill forts in popular imagination.`,

        quote: {
            text: "औसा किल्ला — मराठवाड्यातला दख्खनी वास्तुकलेचा नमुना",
            attribution: "Ausa Fort — a specimen of Deccan architecture in Marathwada"
        },

        timeline: [
            { year: '15th Century', title: 'Bahmani Construction', desc: 'The Bahmani Sultanate built Ausa Fort as a regional stronghold in the eastern Deccan. Its design reflects the Islamic military architecture prevalent during the period.' },
            { year: '1490', title: 'Post-Bahmani Period', desc: 'After the Bahmani Sultanate fragmented, Ausa Fort came under the control of various successor states, with the Nizam of Hyderabad eventually gaining control.' },
            { year: '17th Century', title: 'Mughal Influence', desc: 'During Aurangzeb\'s Deccan campaigns, the Mughals exerted influence over the region. The fort served administrative and military functions.' },
            { year: '1818', title: 'British Period', desc: 'The British took control of the Marathwada region. The fort gradually transitioned from military use to a heritage monument.' },
            { year: 'Modern', title: 'Heritage Status', desc: 'Ausa Fort is recognized as a significant historical monument in Marathwada. Efforts are underway for conservation and tourism development.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Strong stone fortification walls encircling the town. The thick basalt construction shows Bahmani-era engineering with Islamic architectural elements visible in the wall design.', mustSee: true },
            { title: 'Bastions', desc: 'Large defensive bastions at strategic points, designed for cannon placement and defensive fire. The bastions show both Deccan and Mughal architectural influences.', mustSee: true },
            { title: 'Interior Structures', desc: 'Remains of old buildings within the fort — administrative quarters, storage facilities, and religious structures that reveal the fort\'s multi-functional nature.', mustSee: true },
            { title: 'Fort Gates', desc: 'Fortified entrance gates with bent-axis approaches designed to slow attacking forces. Classic Deccan military gateway architecture.', mustSee: false },
            { title: 'Islamic Elements', desc: 'Architectural details showing Islamic influence — arches, inscriptions, and decorative elements that distinguish this from Maratha-era forts.', mustSee: false }
        ],

        food: [
            { name: 'Ausa Town Food', type: 'Veg/Non-Veg', price: '₹50-120', desc: 'Local restaurants in Ausa town serve Marathwada cuisine — jowar bhakri, zunka, and simple non-veg dishes.' },
            { name: 'Latur City', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Latur (~20 km) has better dining options with a wider variety including biryanis and kebabs reflecting Hyderabadi influence.' },
            { name: 'Street Food', type: 'Veg', price: '₹20-50', desc: 'Basic street food in Ausa town — vada pav, bhel, and chai at local stalls near the fort.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-15', desc: 'Tea stalls in Ausa town. Marathwada-style strong chai.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Main Entrance Walk', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'Direct walk-in access through the main gate. No trekking required — the fort is at ground level in Ausa town. Accessible for all ages and abilities.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Latur (~20 km, 30 min) or from Osmanabad (~60 km, 1.5 hours). Well-connected roads. Fort is in the town center.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Frequent ST buses from Latur to Ausa. The fort is a short walk from the Ausa bus stand.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Latur on the Latur-Kurduwadi line. Bus/auto from Latur to Ausa (~20 km).' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — paved and unpaved surfaces',
            'Water bottle — stalls available in town',
            'Camera — impressive Deccan architecture',
            'Sun protection — open fort, limited shade',
            'Cash for food and local transport',
            'Allow 2-3 hours for thorough exploration',
            'Best visited morning or late afternoon',
            'Ask locals for historical context'
        ],

        safetyAlerts: [
            { msg: 'Large fort area — explore carefully, some sections may have uneven ground', season: 'All year' },
            { msg: 'Marathwada summers are extremely hot — avoid midday visits April to June', season: 'April-June' },
            { msg: 'Some interior structures may be unstable — don\'t climb on ruins', season: 'All year' },
            { msg: 'Carry water for the walk even though stalls are nearby', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹50-200' },
            { label: 'Food', value: '₹50-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹100-350', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'In Ausa town' },
            { label: 'Food Stalls', available: true, detail: 'In town, near fort' },
            { label: 'Drinking Water', available: true, detail: 'Available in town' },
            { label: 'Toilets', available: true, detail: 'Public facilities nearby' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Local Transport', available: true, detail: 'Autos in Ausa town' }
        ],

        quickFacts: [
            { label: 'District', value: 'Latur' },
            { label: 'Location', value: 'Ausa town center' },
            { label: 'Altitude', value: 'Ground level' },
            { label: 'Fort Type', value: 'Land Fort' },
            { label: 'Built By', value: 'Bahmani Sultanate' },
            { label: 'Famous For', value: 'Deccan architecture, Islamic elements' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy access)' },
            { label: 'Architectural Style', value: 'Islamic / Deccan' },
            { label: 'Nearest City', value: 'Latur (20 km)' }
        ],

        reviews: {
            quote: "Ausa Fort is a reminder that Maharashtra's fort heritage extends far beyond the Sahyadris. The Islamic architectural elements and Bahmani history make it a unique cultural experience.",
            positives: [
                'Unique Islamic/Deccan architectural style',
                'Easy access — no trekking, in town center',
                'Rich multi-dynasty history',
                'Well-preserved fort walls and bastions',
                'Good facilities in Ausa town'
            ],
            proTips: [
                'Visit during winter for comfortable exploration',
                'Combine with Latur city sightseeing',
                'Ask local history enthusiasts for guided context',
                'The Islamic architectural details are best appreciated slowly',
                'Try Marathwada cuisine — different from Konkan/Pune food'
            ],
            rating: 4.1,
            reviewCount: '600+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ KANDHAR FORT ━━━━━━━━━━━━━━━━━━
    kandhar: {
        introduction: `Kandhar Fort is one of the most imposing land forts in the Marathwada region, standing 
            majestically in Kandhar town of Nanded district. Its origins date back to the Rashtrakuta dynasty 
            — making it one of the oldest forts in Maharashtra — and it has since been expanded and modified 
            by the Bahmanis, Mughals, and Marathas. The fort's massive defensive walls, deep water-filled 
            moat, and powerful bastions represent centuries of military engineering evolution across multiple 
            dynasties.`,

        quote: {
            text: "कंधार किल्ला — मराठवाड्यातला प्राचीन भूदुर्ग",
            attribution: "Kandhar Fort — the ancient land fort of Marathwada"
        },

        timeline: [
            { year: '9th Century', title: 'Rashtrakuta Origins', desc: 'The Rashtrakuta dynasty established the original fortification at Kandhar, making it one of the oldest continuously modified forts in Maharashtra.' },
            { year: '14th-15th Century', title: 'Bahmani Expansion', desc: 'The Bahmani Sultanate significantly expanded and strengthened the fort, adding the moat system and Islamic architectural elements.' },
            { year: '17th Century', title: 'Mughal Control', desc: 'During the Mughal Deccan campaigns, Kandhar Fort served as an important garrison. The Mughals added their own defensive modifications.' },
            { year: '18th Century', title: 'Maratha Period', desc: 'The Marathas captured Kandhar Fort during their expansion into Marathwada. It served as a regional administrative center.' },
            { year: '1818', title: 'British Annexation', desc: 'The British took control and the fort gradually transitioned from military use to a historical monument.' }
        ],

        landmarks: [
            { title: 'Massive Fort Walls', desc: 'Towering stone walls that have been reinforced by successive dynasties over 1,000+ years. The thickness and height reveal the fort\'s strategic importance across multiple eras.', mustSee: true },
            { title: 'Deep Moat', desc: 'A wide, water-filled moat surrounding the fort — the first line of defense. One of the most impressive moats among Marathwada forts.', mustSee: true },
            { title: 'Bastions', desc: 'Strong circular bastions at regular intervals, designed for cannon placement. Their design shows both Deccan and Mughal engineering influences.', mustSee: true },
            { title: 'Fort Gates', desc: 'Multiple fortified gates with bent-axis approach designs. Each gate tells a story of the dynasty that built or modified it.', mustSee: false },
            { title: 'Interior Remains', desc: 'Ruins of administrative buildings, temples, and storage structures inside the fort, spanning multiple historical periods.', mustSee: false }
        ],

        food: [
            { name: 'Kandhar Town Food', type: 'Veg/Non-Veg', price: '₹50-120', desc: 'Local restaurants in Kandhar serve Marathwada cuisine — jowar bhakri, zunka-bhakar, and mutton dishes with Hyderabadi influence.' },
            { name: 'Nanded City', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Nanded (~50 km) has diverse dining — Punjabi dhabas, Hyderabadi biryani, and Marathwada thalis.' },
            { name: 'Street Snacks', type: 'Veg', price: '₹20-50', desc: 'Chai, vada pav, and local snacks near the fort entrance.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-15', desc: 'Strong Marathwada-style chai at stalls near the fort.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Main Entrance Walk', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'Direct access through the main gate. No trekking — ground-level fort in Kandhar town. Accessible for all ages.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nanded (~50 km, 1 hour). Well-connected road. Fort is in Kandhar town center.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Frequent ST buses from Nanded to Kandhar. Fort is a short walk from the bus stand.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest major station: Nanded Junction on the Mumbai-Hyderabad line. Bus from Nanded to Kandhar.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — paved and unpaved areas',
            'Water bottle — stalls available nearby',
            'Camera — impressive walls and moat',
            'Sun protection — open fort, limited shade',
            'Cash for food and transport',
            'Allow 2-3 hours for thorough exploration',
            'Best visited morning or late afternoon',
            'Ask locals about the fort history'
        ],

        safetyAlerts: [
            { msg: 'Large fort area — explore carefully, uneven ground in places', season: 'All year' },
            { msg: 'Marathwada summers are extreme — avoid midday visits', season: 'April-June' },
            { msg: 'Keep children away from moat edges', season: 'All year' },
            { msg: 'Some interior ruins may be unstable', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹50-200' },
            { label: 'Food', value: '₹50-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹100-350', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'In Kandhar town' },
            { label: 'Food Stalls', available: true, detail: 'Near fort entrance' },
            { label: 'Drinking Water', available: true, detail: 'Available in town' },
            { label: 'Toilets', available: true, detail: 'Public facilities nearby' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Local Transport', available: true, detail: 'Autos in town' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nanded' },
            { label: 'Location', value: 'Kandhar town center' },
            { label: 'Altitude', value: 'Ground level' },
            { label: 'Fort Type', value: 'Land Fort' },
            { label: 'Built By', value: 'Rashtrakuta dynasty (9th century)' },
            { label: 'Famous For', value: 'Massive walls, moat, 1000+ year history' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy access)' },
            { label: 'Dynasties', value: 'Rashtrakuta → Bahmani → Mughal → Maratha' },
            { label: 'Nearest City', value: 'Nanded (50 km)' }
        ],

        reviews: {
            quote: "Kandhar Fort is a living textbook of Deccan history — from the Rashtrakutas to the British, every dynasty has left its mark on these ancient walls. The moat alone is worth the visit.",
            positives: [
                'One of the oldest forts in Maharashtra (9th century!)',
                'Impressive moat and massive walls',
                'Multi-dynasty history spanning 1000+ years',
                'Easy access in town center',
                'Good facilities nearby'
            ],
            proTips: [
                'Visit during winter for comfortable exploration',
                'Combine with Nanded Gurudwara visit',
                'The moat looks most impressive after monsoon when full',
                'Ask local history teachers for guided context',
                'Early morning light is best for photography of the walls'
            ],
            rating: 4.2,
            reviewCount: '1,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ DHARUR FORT ━━━━━━━━━━━━━━━━━━
    dharur: {
        introduction: `Dharur Fort stands as a fine example of classic Deccan military architecture in the 
            heart of Beed district. Built during the Bahmani Sultanate period, this land fort features 
            imposing stone walls, strategic bastions, and historic gateways that showcase the engineering 
            prowess of Deccan-era fort builders. While less famous than the coastal and hill forts of 
            western Maharashtra, Dharur Fort offers an authentic window into Marathwada's rich medieval 
            history and the military traditions of the Deccan plateau.`,

        quote: {
            text: "धारूर किल्ला — बीड जिल्ह्यातला दख्खनी स्थापत्यकलेचा दुर्ग",
            attribution: "Dharur Fort — the Deccan architectural fortress of Beed"
        },

        timeline: [
            { year: '15th Century', title: 'Bahmani Construction', desc: 'The Bahmani Sultanate built Dharur Fort as a regional stronghold in the Beed area, incorporating classic Deccan military design elements.' },
            { year: '16th Century', title: 'Post-Bahmani Period', desc: 'After the Bahmani breakup, the fort came under various Deccan successor states before Mughal dominance.' },
            { year: '17th Century', title: 'Mughal Control', desc: 'The Mughals took control during their Deccan campaigns. The fort served as a local administrative and military post.' },
            { year: '18th Century', title: 'Maratha Period', desc: 'The Marathas captured Dharur Fort during their expansion into Marathwada.' },
            { year: '1818', title: 'British Period', desc: 'British annexation. The fort transitioned to a heritage monument.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Massive defensive walls encircling the fort area. The thick basalt construction is typical of Bahmani-era engineering — built to withstand both sieges and time.', mustSee: true },
            { title: 'Bastions', desc: 'Strategic circular bastions positioned at intervals along the walls. Designed for artillery placement and providing overlapping fields of fire.', mustSee: true },
            { title: 'Main Gate', desc: 'A historic entry structure with fortified approach. The gateway architecture shows Deccan-style design with both defensive and decorative elements.', mustSee: true },
            { title: 'Interior Ruins', desc: 'Remains of buildings and structures within the fort — evidence of its role as both military post and administrative center.', mustSee: false }
        ],

        food: [
            { name: 'Dharur Town Food', type: 'Veg/Non-Veg', price: '₹50-100', desc: 'Simple Maharashtrian meals at local eateries — jowar bhakri, pithla, and basic non-veg options.' },
            { name: 'Beed City', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Beed (~60 km) has better restaurant options with Marathwada cuisine and standard fare.' },
            { name: 'Street Food', type: 'Veg', price: '₹20-40', desc: 'Basic snacks and chai near the fort.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-15', desc: 'Tea stalls in Dharur town.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Main Entrance Walk', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'Easy access via Dharur town. Walk directly into the fort. No trekking required.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Beed (~60 km, 1.5 hours) or from Aurangabad (~120 km, 2.5 hours). Fort is in Dharur town.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Beed to Dharur. Fort is near the town center.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Beed or Parli-Vaijnath. Bus/taxi to Dharur.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes',
            'Water bottle',
            'Camera — impressive Deccan architecture',
            'Sun protection — open fort area',
            'Cash for food and transport',
            'Allow 2-3 hours',
            'Best in morning or evening',
            'Combine with Beed district sightseeing'
        ],

        safetyAlerts: [
            { msg: 'Large fort — stay aware of surroundings in less-visited sections', season: 'All year' },
            { msg: 'Extreme summer temperatures in Beed — avoid midday visits', season: 'April-June' },
            { msg: 'Some structures may be unstable — don\'t climb on ruins', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹100-300' },
            { label: 'Food', value: '₹50-120' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹150-420', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'In Dharur town' },
            { label: 'Food Stalls', available: true, detail: 'In town' },
            { label: 'Drinking Water', available: true, detail: 'Available' },
            { label: 'Toilets', available: true, detail: 'Public facilities' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Guide', available: false, detail: 'Self-explore' }
        ],

        quickFacts: [
            { label: 'District', value: 'Beed' },
            { label: 'Location', value: 'Dharur town' },
            { label: 'Altitude', value: 'Ground level' },
            { label: 'Fort Type', value: 'Land Fort' },
            { label: 'Built By', value: 'Bahmani Sultanate' },
            { label: 'Famous For', value: 'Deccan architecture, bastions' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy access)' },
            { label: 'Architectural Style', value: 'Deccan / Islamic' },
            { label: 'Nearest City', value: 'Beed (60 km)' }
        ],

        reviews: {
            quote: "Dharur Fort is Marathwada's quiet museum of Deccan military history. No crowds, solid walls, and a gateway that makes you pause and appreciate medieval engineering.",
            positives: [
                'Classic Deccan military architecture',
                'Well-preserved walls and bastions',
                'Historic gateway is impressive',
                'Easy access — no trekking',
                'Uncrowded and peaceful'
            ],
            proTips: [
                'Visit during winter — Beed summers are harsh',
                'Combine with other Beed district heritage sites',
                'Morning light is best for photography',
                'Ask local elders — they share fascinating stories',
                'The bastions offer the best views of the fort layout'
            ],
            rating: 4.0,
            reviewCount: '500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ AMBAD FORT ━━━━━━━━━━━━━━━━━━
    ambad: {
        introduction: `Ambad Fort is a partially ruined but historically significant land fort in Jalna 
            district, deep in the Marathwada region. Built during the Bahmani Sultanate period, this fort 
            reflects the architectural style of Deccan-era fortifications with its thick walls, defensive 
            bastions, and remnants of internal structures. While less grand than the major Marathwada forts, 
            Ambad offers an authentic glimpse into the region's medieval military heritage and the layered 
            history of the Deccan plateau.`,

        quote: {
            text: "अंबड किल्ला — जालना जिल्ह्यातला ऐतिहासिक भूदुर्ग",
            attribution: "Ambad Fort — the historic land fort of Jalna district"
        },

        timeline: [
            { year: '15th Century', title: 'Bahmani Construction', desc: 'The Bahmani Sultanate built Ambad Fort as a regional defense post in the Jalna area, part of their network of land forts across the Deccan plateau.' },
            { year: '16th Century', title: 'Successor States', desc: 'After the Bahmani fragmentation, the fort was controlled by various Deccan successor states.' },
            { year: '17th Century', title: 'Mughal Period', desc: 'The Mughals took control during their Deccan campaigns. The fort served Mughal administrative purposes.' },
            { year: '18th Century', title: 'Maratha Control', desc: 'The Marathas captured Ambad Fort during their expansion into eastern Maharashtra.' },
            { year: 'Modern', title: 'Heritage Ruins', desc: 'The fort exists partially in ruins today but remains a significant historical landmark in Jalna district.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Remaining sections of strong defensive walls showing Bahmani-era construction. Though partially ruined, the scale of the original fortification is evident.', mustSee: true },
            { title: 'Bastions', desc: 'Defensive bastions at strategic points around the fort perimeter. Their positioning reveals the military planning of Deccan fort builders.', mustSee: true },
            { title: 'Inner Structures', desc: 'Ruins of buildings inside the fort — possibly administrative quarters, storage areas, and religious structures. Atmospheric and photogenic.', mustSee: true },
            { title: 'Fort Gates', desc: 'Remains of the fortified entrance. The gateway design shows typical Deccan military architecture.', mustSee: false }
        ],

        food: [
            { name: 'Ambad Town Food', type: 'Veg/Non-Veg', price: '₹50-100', desc: 'Local eateries in Ambad town serving simple Maharashtrian meals — dal-rice, bhakri, and basic curries.' },
            { name: 'Jalna City', type: 'Veg/Non-Veg', price: '₹80-180', desc: 'Jalna city (~40 km) has more dining variety including restaurants, dhabas, and street food.' },
            { name: 'Snacks', type: 'Veg', price: '₹20-40', desc: 'Basic chai and snacks available in Ambad town near the fort.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Main Access Walk', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'Direct access from Ambad town. Walk into the fort area — no trekking required. Suitable for all visitors.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Jalna (~40 km, 1 hour) or from Aurangabad (~110 km, 2 hours). Fort is in Ambad town.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses from Jalna to Ambad. The fort is near the town center.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Jalna on the Manmad-Kachiguda line. Bus/auto to Ambad (~40 km).' }
        ],

        trekEssentials: [
            'Comfortable walking shoes — ruins with uneven ground',
            'Water bottle',
            'Camera — atmospheric ruins',
            'Sun protection',
            'Cash for food and transport',
            'Allow 2-3 hours',
            'Explore carefully — some walls may be unstable',
            'Best visited morning or evening'
        ],

        safetyAlerts: [
            { msg: 'Ruins — walk carefully and don\'t climb on unstable structures', season: 'All year' },
            { msg: 'Extreme heat in Jalna during summer — visit early morning only', season: 'April-June' },
            { msg: 'Some areas may have overgrowth — watch your step', season: 'Monsoon' }
        ],

        budget: [
            { label: 'Transport', value: '₹50-200' },
            { label: 'Food', value: '₹50-120' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹100-320', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'In Ambad town' },
            { label: 'Food Stalls', available: true, detail: 'In town' },
            { label: 'Drinking Water', available: true, detail: 'Available in town' },
            { label: 'Toilets', available: true, detail: 'Public facilities' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Guide', available: false, detail: 'Self-explore' }
        ],

        quickFacts: [
            { label: 'District', value: 'Jalna' },
            { label: 'Location', value: 'Ambad town' },
            { label: 'Altitude', value: 'Ground level' },
            { label: 'Fort Type', value: 'Land Fort' },
            { label: 'Built By', value: 'Bahmani Sultanate' },
            { label: 'Famous For', value: 'Deccan ruins, Bahmani architecture' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy access)' },
            { label: 'Condition', value: 'Partially ruined' },
            { label: 'Nearest City', value: 'Jalna (40 km)' }
        ],

        reviews: {
            quote: "Ambad Fort may be partially ruined, but walking through its Bahmani-era walls reminds you that Maharashtra's fort story extends far beyond the Western Ghats.",
            positives: [
                'Authentic Bahmani-era architecture',
                'Easy access in town center',
                'Atmospheric ruins for photography',
                'Uncrowded and peaceful',
                'Good facilities in Ambad town'
            ],
            proTips: [
                'Visit October to February for comfortable weather',
                'Combine with Jalna city for a complete day trip',
                'The ruins photograph best in golden hour light',
                'Local shops and chai stalls make for pleasant post-visit relaxation',
                'Ask locals about the fort — everyone knows it'
            ],
            rating: 3.9,
            reviewCount: '400+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ UDGIR FORT ━━━━━━━━━━━━━━━━━━
    udgir: {
        introduction: `Udgir Fort is arguably the most historically significant land fort in the Marathwada 
            region, standing in Udgir town of Latur district. The fort is forever linked to the famous 
            Battle of Udgir (1760), a decisive conflict between the Maratha Empire and the Nizam of 
            Hyderabad. Beyond its battlefield legacy, the fort boasts massive fortifications, intriguing 
            underground passages, and architectural layers spanning multiple ruling dynasties — from the 
            Bahmanis to the Nizams to the Marathas.`,

        quote: {
            text: "उदगीर किल्ला — मराठ्यांच्या विजयाचा ऐतिहासिक साक्षीदार",
            attribution: "Udgir Fort — the historic witness to Maratha victory"
        },

        timeline: [
            { year: '15th Century', title: 'Bahmani Construction', desc: 'The Bahmani Sultanate built the original fortification at Udgir as part of their Deccan defense network.' },
            { year: '16th-17th Century', title: 'Nizam Control', desc: 'After the Bahmani decline, the Nizam of Hyderabad took control and significantly expanded the fort, adding underground passages and stronger defenses.' },
            { year: '1760', title: 'Battle of Udgir', desc: 'The famous Battle of Udgir — Sadashivrao Bhau led the Marathas to a decisive victory over the Nizam. This established Maratha supremacy in the Deccan and is one of the most celebrated Maratha military victories.' },
            { year: '18th Century', title: 'Maratha Period', desc: 'After their victory, the Marathas controlled the fort and used it as a major administrative center in eastern Maharashtra.' },
            { year: '1818', title: 'British Annexation', desc: 'The British took control. The fort gradually transitioned to a heritage site.' }
        ],

        landmarks: [
            { title: 'Massive Fort Walls', desc: 'Towering defensive walls built and reinforced by multiple dynasties. The sheer scale of the fortification reflects Udgir\'s strategic importance in Deccan politics.', mustSee: true },
            { title: 'Underground Passages', desc: 'Secret tunnels and underground passages used for troop movement, supply transport, and emergency escape. A fascinating and mysterious feature of the fort.', mustSee: true },
            { title: 'Bastions', desc: 'Strong defensive bastions positioned strategically around the walls. Designed for cannon placement and overlapping fields of fire.', mustSee: true },
            { title: 'Fort Gates', desc: 'Fortified entrance gates with multiple defensive layers. The gateway architecture reflects both Nizam and Maratha influences.', mustSee: false },
            { title: 'Battle of Udgir Memorial', desc: 'Commemorative elements related to the 1760 battle. Standing here, you\'re on the ground where Maratha history was made.', mustSee: true }
        ],

        food: [
            { name: 'Udgir Town Food', type: 'Veg/Non-Veg', price: '₹50-120', desc: 'Local restaurants serving Marathwada and Hyderabadi-influenced cuisine — biryani, jowar bhakri, and non-veg curries.' },
            { name: 'Latur City', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Latur (~65 km) has more dining variety. Marathwada thalis and Hyderabadi food.' },
            { name: 'Street Food', type: 'Veg', price: '₹20-50', desc: 'Chai, vada pav, and local snacks near the fort.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-15', desc: 'Strong Marathwada chai at stalls near the fort entrance.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Main Entrance Walk', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'Direct walk-in access. No trekking — ground-level fort in Udgir town. Accessible for all ages and abilities.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Latur (~65 km, 1.5 hours) or from Nanded (~100 km, 2 hours). Fort is in Udgir town center.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Frequent ST buses from Latur and Nanded to Udgir. Fort is walkable from the bus stand.' },
            { mode: 'By Train', icon: '🚂', desc: 'Udgir has a railway station on the Latur-Bidar line. Fort is a short auto ride from the station.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes',
            'Torch/flashlight — essential for underground passages',
            'Water bottle — stalls available nearby',
            'Camera — impressive walls and passages',
            'Sun protection — open fort areas',
            'Allow 2-3 hours for thorough exploration',
            'Best visited morning or late afternoon',
            'Ask locals to show underground passage entrances'
        ],

        safetyAlerts: [
            { msg: 'Underground passages can be dark and narrow — carry a torch and go carefully', season: 'All year' },
            { msg: 'Large fort area — stay aware of surroundings, especially in less-visited sections', season: 'All year' },
            { msg: 'Extreme heat in Marathwada summer — visit early morning only', season: 'April-June' },
            { msg: 'Don\'t enter unstable tunnel sections', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹50-200' },
            { label: 'Food', value: '₹50-150' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹100-350', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'In Udgir town' },
            { label: 'Food Stalls', available: true, detail: 'Near fort entrance' },
            { label: 'Drinking Water', available: true, detail: 'Available in town' },
            { label: 'Toilets', available: true, detail: 'Public facilities nearby' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Railway Station', available: true, detail: 'In Udgir town' }
        ],

        quickFacts: [
            { label: 'District', value: 'Latur' },
            { label: 'Location', value: 'Udgir town center' },
            { label: 'Altitude', value: 'Ground level' },
            { label: 'Fort Type', value: 'Land Fort' },
            { label: 'Built By', value: 'Bahmani Sultanate' },
            { label: 'Famous For', value: 'Battle of Udgir (1760), tunnels' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (easy access)' },
            { label: 'Key Battle', value: 'Marathas vs Nizam (1760)' },
            { label: 'Nearest City', value: 'Latur (65 km)' }
        ],

        reviews: {
            quote: "Standing in Udgir Fort is standing on a battlefield that changed Deccan history. The underground passages add a layer of mystery, and the massive walls remind you of the fort's five-century legacy.",
            positives: [
                'Major historical significance — Battle of Udgir',
                'Fascinating underground passages',
                'Massive and impressive fortifications',
                'Easy access — no trekking needed',
                'Multi-dynasty architectural layers'
            ],
            proTips: [
                'Carry a torch for the underground passages — essential',
                'Ask locals to show you the tunnel entrances (not always obvious)',
                'Visit during winter for comfortable exploration',
                'Read about the Battle of Udgir before visiting — makes the experience richer',
                'Combine with Ausa Fort (same district) for a Latur forts day'
            ],
            rating: 4.3,
            reviewCount: '1,500+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ PARBHANI FORT ━━━━━━━━━━━━━━━━━━
    parbhani: {
        introduction: `Parbhani does not have a prominent surviving fort structure today. However, the town 
            and district were historically significant during the medieval period as part of the Deccan 
            Sultanates, the Nizam's dominion, and later the Maratha sphere of influence. Scattered remains 
            of historic structures, administrative buildings, and defensive elements can be found in and 
            around the town — silent witnesses to Parbhani's medieval past. For history enthusiasts, a walk 
            through these remains offers a glimpse into the region's layered heritage.`,

        quote: {
            text: "परभणी — मध्ययुगीन दख्खनचे ऐतिहासिक अवशेष",
            attribution: "Parbhani — historic remains of medieval Deccan"
        },

        timeline: [
            { year: 'Medieval', title: 'Deccan Sultanates', desc: 'Parbhani region was part of the Bahmani Sultanate and later the Bidar Sultanate. Small defensive and administrative structures were built during this period.' },
            { year: '17th-18th Century', title: 'Nizam Control', desc: 'The Nizam of Hyderabad controlled Parbhani. The region served administrative rather than military purposes during this period.' },
            { year: '18th Century', title: 'Maratha Influence', desc: 'Maratha expansion brought Parbhani under their influence, though it remained primarily an administrative region.' },
            { year: 'Modern', title: 'Heritage Status', desc: 'Scattered remains are recognized as local heritage sites. Conservation efforts are limited but awareness is growing.' }
        ],

        landmarks: [
            { title: 'Local Ruins', desc: 'Scattered remains of historical structures throughout the town — wall fragments, foundations, and architectural elements from the medieval period.', mustSee: false },
            { title: 'Historic Town Area', desc: 'The old town area of Parbhani retains some medieval character. Narrow lanes and old buildings hint at its Deccan Sultanate past.', mustSee: false },
            { title: 'Regional Heritage Sites', desc: 'Various heritage spots in Parbhani district including old mosques, step-wells, and administrative ruins.', mustSee: false }
        ],

        food: [
            { name: 'Parbhani City Food', type: 'Veg/Non-Veg', price: '₹50-150', desc: 'Parbhani has good restaurants serving Marathwada cuisine, Hyderabadi biryani, and standard fare.' },
            { name: 'Street Food', type: 'Veg', price: '₹20-50', desc: 'Chai, samosa, vada pav, and local snacks throughout the city.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Town Walk', difficulty: 'Easy', distance: '1-2 km', time: '1 hr', desc: 'Walk through the old town area to see scattered remains. No trekking — flat terrain. More of a heritage walk than fort exploration.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Well-connected by road from Aurangabad (~200 km), Nanded (~180 km), or Pune (~400 km).' },
            { mode: 'By Bus', icon: '🚌', desc: 'Major bus hub with frequent ST buses from all Marathwada cities.' },
            { mode: 'By Train', icon: '🚂', desc: 'Parbhani Junction on the Manmad-Kachiguda line. Well-connected to Mumbai, Hyderabad, and Aurangabad.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes',
            'Water bottle',
            'Camera for old architecture',
            'Sun protection',
            'Allow 1 hour',
            'Ask locals for historical context'
        ],

        safetyAlerts: [
            { msg: 'Scattered remains — some structures may be unstable', season: 'All year' },
            { msg: 'Hot summers in Marathwada — plan morning visits', season: 'April-June' }
        ],

        budget: [
            { label: 'Transport', value: '₹20-100' },
            { label: 'Food', value: '₹50-120' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹70-220', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'City parking' },
            { label: 'Food', available: true, detail: 'City restaurants' },
            { label: 'Drinking Water', available: true, detail: 'Available' },
            { label: 'Toilets', available: true, detail: 'Public facilities' },
            { label: 'Mobile Network', available: true, detail: 'Good signal' },
            { label: 'Railway', available: true, detail: 'Parbhani Junction' }
        ],

        quickFacts: [
            { label: 'District', value: 'Parbhani' },
            { label: 'Location', value: 'Parbhani city' },
            { label: 'Altitude', value: 'Ground level' },
            { label: 'Type', value: 'Historic Remains' },
            { label: 'Period', value: 'Medieval (Bahmani/Nizam)' },
            { label: 'Condition', value: 'Scattered ruins only' },
            { label: 'Time Required', value: '1 hour' },
            { label: 'Kids Appropriate', value: 'Yes' },
            { label: 'Best For', value: 'History enthusiasts' },
            { label: 'Connectivity', value: 'Parbhani Junction (rail)' }
        ],

        reviews: {
            quote: "Parbhani's fort remains are minimal, but for those interested in Marathwada's layered medieval history, a walk through the old town reveals fascinating fragments of the Deccan past.",
            positives: [
                'Easy city access',
                'Good local food scene',
                'Historical regional context',
                'Well-connected by rail',
                'Comfortable town exploration'
            ],
            proTips: [
                'This is not a major fort — set expectations accordingly',
                'Ask local history teachers for context',
                'Combine with Parbhani city sightseeing',
                'Best as a brief stop if passing through Marathwada',
                'Winter months are most comfortable'
            ],
            rating: 3.2,
            reviewCount: '100+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ MAHUR FORT ━━━━━━━━━━━━━━━━━━
    mahur: {
        introduction: `Mahur Fort is a unique hill fort in Nanded district that blends military history with 
            deep religious significance. Perched on a hilltop in the remote Mahur taluka, this fort is 
            closely associated with the famous Renuka Devi temple — one of the Shakti Peethas (sacred seats 
            of the goddess). The fort offers panoramic views of the surrounding hills and valleys, and its 
            combination of historical ruins, temple atmosphere, and natural beauty makes it a distinctive 
            destination in eastern Maharashtra.`,

        quote: {
            text: "माहूर गड — रेणुका देवीच्या सान्निध्यातला ऐतिहासिक दुर्ग",
            attribution: "Mahur Fort — the historic fort in the presence of Renuka Devi"
        },

        timeline: [
            { year: 'Ancient', title: 'Religious Origins', desc: 'Mahur has been a sacred site since ancient times. The Renuka Devi temple predates the fort and drew pilgrims from across the Deccan.' },
            { year: '17th Century', title: 'Fort Construction', desc: 'The fort was built on the strategic hilltop near the temple, combining military and religious significance. Both Marathas and Nizam rulers contributed to its construction.' },
            { year: '18th Century', title: 'Maratha-Nizam Contests', desc: 'Mahur Fort changed hands between the Marathas and the Nizam of Hyderabad as both sought control of this strategic and religiously important location.' },
            { year: '1818', title: 'British Period', desc: 'British annexation brought stability but the fort lost military importance. The temple continued to draw pilgrims.' },
            { year: 'Modern', title: 'Pilgrimage & Tourism', desc: 'Mahur is primarily known today as a pilgrimage destination. The fort adds historical depth to the temple visit.' }
        ],

        landmarks: [
            { title: 'Fort Walls', desc: 'Remains of fortification walls running along the hilltop. Though partially ruined, they frame the temple complex and offer viewpoints.', mustSee: true },
            { title: 'Hilltop Viewpoints', desc: 'Panoramic views of the surrounding hills, valleys, and the Penganga river basin. Stunning during sunrise and sunset.', mustSee: true },
            { title: 'Renuka Devi Temple', desc: 'The famous Shakti Peetha dedicated to goddess Renuka Devi. Ancient, deeply revered, and the primary draw for most visitors to Mahur.', mustSee: true },
            { title: 'Dattatreya Temple', desc: 'Another important temple on the Mahur hill associated with Lord Dattatreya. Part of the sacred geography of the hilltop.', mustSee: true },
            { title: 'Fort Remains', desc: 'Scattered defensive structures and ruins that tell of the fort\'s military past alongside its religious significance.', mustSee: false }
        ],

        food: [
            { name: 'Temple Prasad', type: 'Veg', price: '₹20-50', desc: 'Simple prasad meals available near the temple. Basic but filling vegetarian food served to pilgrims.' },
            { name: 'Mahur Town Food', type: 'Veg', price: '₹50-100', desc: 'Small eateries in Mahur town serving simple vegetarian meals, especially during festival seasons.' },
            { name: 'Nanded City', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Nanded (~130 km) has full dining options for a meal before or after the Mahur visit.' },
            { name: 'Chai', type: 'Beverage', price: '₹10-15', desc: 'Tea stalls along the temple path. Warming chai after the morning climb.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Mahur Town Steps', difficulty: 'Easy-Medium', distance: '2 km', time: '60-90 min', desc: 'A short climb via steps and trail from Mahur town to the fort and temple complex. Moderate effort suitable for most visitors. Many pilgrims make this climb regularly.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Nanded (~130 km, 3 hours). Road is decent but the last stretch through rural area requires attention.' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST bus from Nanded to Mahur. Service is regular, especially during festival seasons.' },
            { mode: 'By Train', icon: '🚂', desc: 'Nearest station: Kinwat or Nanded. Bus/taxi from either to Mahur.' }
        ],

        trekEssentials: [
            'Comfortable shoes — steps and trail',
            'Water bottle — stalls on the path',
            'Sun protection — exposed climb',
            'Camera — hilltop views are stunning',
            'Cash for temple offerings and food',
            'Allow 2-3 hours including temple visit',
            'Dress modestly — temple area',
            'Festival seasons bring huge crowds — plan accordingly'
        ],

        safetyAlerts: [
            { msg: 'Steps can be slippery during monsoon — wear proper shoes', season: 'June-Sept' },
            { msg: 'Very crowded during Navratri and other festivals — plan timing carefully', season: 'Festival seasons' },
            { msg: 'Remote location — plan transport in advance', season: 'All year' },
            { msg: 'Summer heat is intense — climb early morning', season: 'March-May' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500' },
            { label: 'Food', value: '₹50-120' },
            { label: 'Temple Offering', value: '₹20-100' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹270-720', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'At base of hill' },
            { label: 'Food Stalls', available: true, detail: 'Along temple path' },
            { label: 'Drinking Water', available: true, detail: 'At temple complex' },
            { label: 'Toilets', available: true, detail: 'At temple premises' },
            { label: 'Mobile Network', available: true, detail: 'Moderate signal' },
            { label: 'Accommodation', available: true, detail: 'Dharamshala near temple' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nanded' },
            { label: 'Location', value: 'Mahur hilltop' },
            { label: 'Altitude', value: '~700 m' },
            { label: 'Fort Type', value: 'Hill Fort (Religious)' },
            { label: 'Built By', value: 'Marathas / Nizam' },
            { label: 'Famous For', value: 'Renuka Devi temple, hilltop views' },
            { label: 'Time Required', value: '2-3 hours' },
            { label: 'Kids Appropriate', value: 'Yes (with supervision on steps)' },
            { label: 'Shakti Peetha', value: 'Yes — Renuka Devi' },
            { label: 'Nearest City', value: 'Nanded (130 km)' }
        ],

        reviews: {
            quote: "Mahur is where history meets devotion. The fort ruins give context to the ancient Renuka Devi temple, and the hilltop views of eastern Maharashtra are breathtaking. A pilgrimage and trek in one.",
            positives: [
                'Unique blend of fort history and temple pilgrimage',
                'Stunning hilltop panoramic views',
                'Famous Renuka Devi Shakti Peetha',
                'Moderate climb suitable for most visitors',
                'Good facilities at temple complex'
            ],
            proTips: [
                'Avoid Navratri unless you enjoy massive crowds',
                'Sunrise from the hilltop is extraordinary',
                'Stay at the dharamshala for a full experience',
                'The Dattatreya temple is equally worth visiting',
                'Best combined with a broader Nanded district trip'
            ],
            rating: 4.2,
            reviewCount: '3,000+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ ANTUR FORT ━━━━━━━━━━━━━━━━━━
    antur: {
        introduction: `Antur Fort is a majestic hill fort nestled in the Satmala range of Chhatrapati 
            Sambhajinagar (Aurangabad) district. Unlike the more famous coastal and Sahyadri forts, Antur 
            represents the military architecture of the Marathwada region. Known for its massive, well-preserved 
            entrance gate and strong fortification walls, the fort served as a vital strategic outpost guarding 
            the trade routes and political boundaries between the Deccan Sultanates and later the Mughal Empire.`,

        quote: {
            text: "अंतूर किल्ला — सातमाळा रांगेतील एक अभेद्य दुर्ग",
            attribution: "Antur Fort — an impregnable bastion in the Satmala range"
        },

        timeline: [
            { year: '15th Century', title: 'Construction', desc: 'The fort was heavily developed during the reign of Ahmad Nizam Shah of the Ahmadnagar Sultanate, though local rulers established earlier fortifications.' },
            { year: '17th Century', title: 'Mughal Period', desc: 'The fort fell under Mughal control during their Deccan campaigns. Evidences of Mughal architectural elements can be seen in later additions.' },
            { year: '18th Century', title: 'Maratha Control', desc: 'As the Maratha Empire expanded its influence across Marathwada, Antur Fort became a strategic stronghold for regional administration.' },
            { year: '19th Century', title: 'Nizam Dominion', desc: 'The fort eventually came under the dominion of the Nizam of Hyderabad until India\'s independence.' }
        ],

        landmarks: [
            { title: 'Main Gate (Mahadarwaja)', desc: 'The imposing and well-preserved entrance gate of the fort. Its massive scale and defensive design make it the primary highlight of the visit.', mustSee: true },
            { title: 'Fort Walls', desc: 'Strong defensive fortification walls encircling the plateau, showing a mix of Deccan and local architectural styles.', mustSee: true },
            { title: 'Water Cisterns', desc: 'Rock-cut water tanks strategically placed around the fort to ensure water supply during long sieges.', mustSee: true },
            { title: 'Arabic/Persian Inscriptions', desc: 'Historical inscriptions found near the gates and bastions, dating back to the Nizam Shahi and Mughal periods.', mustSee: false },
            { title: 'Viewpoints', desc: 'Panoramic views of the Satmala mountain range and the vast plains of Marathwada stretching beyond.', mustSee: true }
        ],

        food: [
            { name: 'Self-Sufficient Only', type: 'Veg', price: '₹0', desc: 'No food stalls are available on or immediately near the fort. You must carry your own snacks and meals.' },
            { name: 'Kannad Town', type: 'Veg/Non-Veg', price: '₹60-150', desc: 'Kannad (~25 km away) has local eateries and dhabas where you can have a full meal before or after the trek.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Antur Village', difficulty: 'Medium', distance: '2.5 km', time: '1.5-2 hrs', desc: 'A well-defined path leading up from the base village. The trail involves a gradual ascent through rocky terrain and scrub forest.' }
        ],

        howToReach: [
            { mode: 'By Car', icon: '🚗', desc: 'Drive from Chhatrapati Sambhajinagar to Kannad (~60 km), then take the local road towards Antur village (~25 km).' },
            { mode: 'By Bus', icon: '🚌', desc: 'ST buses run from Sambhajinagar to Kannad. From Kannad, local transport or shared jeeps to Antur village may be available but infrequent.' },
            { mode: 'By Bike', icon: '🏍️', desc: 'A scenic ride through the Marathwada plains leading into the Satmala hills. The final stretch to the base village involves rural roads.' }
        ],

        trekEssentials: [
            'Good grip trekking shoes — rocky trail',
            'Minimum 2-3 litres of water — no reliable sources on top',
            'Packed food and snacks',
            'Sun protection (cap, sunglasses) — very exposed in daylight',
            'Camera for the impressive main gate',
            'Start early to avoid the midday Marathwada heat'
        ],

        safetyAlerts: [
            { msg: 'Carry abundant water; heat can be exhausting, especially post-monsoon or summer.', season: 'All year' },
            { msg: 'Trail can get slippery during the monsoon. Walk carefully on rocky sections.', season: 'June-Sept' },
            { msg: 'Remote location with weak mobile network. Trek in a group.', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹200-500 (from Kannad)' },
            { label: 'Food', value: '₹100-200 (in town)' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹300-700', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'Available at the base village' },
            { label: 'Food Stalls', available: false, detail: 'None near the fort' },
            { label: 'Drinking Water', available: false, detail: 'Carry your own' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: true, detail: 'Weak / Spotty signal' }
        ],

        quickFacts: [
            { label: 'District', value: 'Chhatrapati Sambhajinagar' },
            { label: 'Base Village', value: 'Antur' },
            { label: 'Altitude', value: '~820 m' },
            { label: 'Fort Type', value: 'Hill Fort' },
            { label: 'Range', value: 'Satmala Range' },
            { label: 'Trek Difficulty', value: 'Moderate' },
            { label: 'Time Required', value: '3-4 hours total' },
            { label: 'Nearest City', value: 'Kannad (25 km)' }
        ],

        reviews: {
            quote: "Antur Fort is a hidden gem of Marathwada. The sheer size of its Mahadarwaja leaves you in awe of the Deccan Sultanate's architectural capabilities.",
            positives: [
                'Magnificent and photogenic main entrance gate',
                'Uncrowded, peaceful trekking experience',
                'Beautiful views of the Satmala range',
                'Rich mix of historical inscriptions',
                'Good condition of major peripheral walls'
            ],
            proTips: [
                'Visit during winter (Nov-Feb); the summer heat here is unforgiving.',
                'The inscriptions near the gate are easy to miss — look closely.',
                'Combine the visit with a trip to the nearby Gautala Autramghat Wildlife Sanctuary.',
                'Ensure you have offline maps downloaded.'
            ],
            rating: 4.1,
            reviewCount: '400+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ WAGHALA FORT (LOCAL REMAINS) ━━━━━━━━━━━━━━━━━━
    waghala: {
        introduction: `Waghala does not feature a prominent, towering fort structure today. Situated in the 
            Nanded district, the area historically housed small defensive and administrative outposts during the 
            era of the Deccan Sultanates and subsequently under Maratha and Nizam rule. Today, the remnants of 
            these structures are scattered quietly amidst local settlements, offering a glimpse into the localized 
            administration and security infrastructure of medieval Marathwada.`,

        quote: {
            text: "वाघाळा — स्थानिक इतिहासाचे मूक साक्षीदार",
            attribution: "Waghala — silent witnesses to local history"
        },

        timeline: [
            { year: 'Medieval Period', title: 'Local Outposts', desc: 'Small earthen or stone fortifications and regional administrative offices were established here under the Bahmani and later Deccan Sultanates.' },
            { year: '18th Century', title: 'Nizam and Maratha Influence', desc: 'The area operated as a local hub for tax collection and regional security, frequently shifting between Nizam and Maratha control.' },
            { year: 'Modern Era', title: 'Urbanization', desc: 'As the town grew, much of the original historic structures were dismantled or absorbed into modern dwellings and civic layouts.' }
        ],

        landmarks: [
            { title: 'Local Ruins', desc: 'Scattered foundational stones, partial walls, and remnants of old wadas (mansions) that hint at the area\'s historical footprint.', mustSee: false },
            { title: 'Historic Lanes', desc: 'Some old pathways and local shrines that have survived the test of time, reflecting the medieval layout of the settlement.', mustSee: false }
        ],

        food: [
            { name: 'Nanded City Eateries', type: 'Veg/Non-Veg', price: '₹80-200', desc: 'Being practically in the Nanded urban sphere, one has access to a wide variety of Marathwada and Hyderabadi cuisine.' },
            { name: 'Local Snacks', type: 'Veg', price: '₹20-50', desc: 'Chai, vada pav, and mirchi bhaji available easily at local stops.' }
        ],

        trekRoutes: [
            { icon: '🚶', title: 'Heritage Walk', difficulty: 'Easy', distance: '1 km', time: '30-45 min', desc: 'This is not a trek but a brief heritage walk through the local village/suburban area to spot historical fragments.' }
        ],

        howToReach: [
            { mode: 'By Car / Auto', icon: '🚗', desc: 'Easily accessible from Nanded city center via local autos or taxis.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Local city buses cover the routes passing near the Waghala area.' }
        ],

        trekEssentials: [
            'Comfortable walking shoes',
            'Water bottle',
            'Inquisitive mind to look for historical traces',
            'Ask local elders for historical context'
        ],

        safetyAlerts: [
            { msg: 'Respect local privacy as ruins are often close to or within residential property.', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹50-100 (Auto from Nanded)' },
            { label: 'Food', value: '₹50-150' },
            { label: 'Total', value: '₹100-250', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: true, detail: 'City parking available' },
            { label: 'Food Stalls', available: true, detail: 'City eateries' },
            { label: 'Water & Toilets', available: true, detail: 'Available nearby' },
            { label: 'Mobile Network', available: true, detail: 'Excellent signal' }
        ],

        quickFacts: [
            { label: 'District', value: 'Nanded' },
            { label: 'Location', value: 'Waghala (Nanded)' },
            { label: 'Fort Type', value: 'Land Fort / Local Remains' },
            { label: 'Time Required', value: '1 hour' },
            { label: 'Best For', value: 'Hyper-local history enthusiasts' },
            { label: 'Nearest City', value: 'Nanded' }
        ],

        reviews: {
            quote: "There isn't a grand fort to climb, but walking through Waghala reminds you that history isn't just in the big monuments—it's in the foundations of the places people still live.",
            positives: [
                'Incredibly easy to access from Nanded',
                'No physical exertion required',
                'Good starting point to understand local Marathwada micro-history'
            ],
            proTips: [
                'Manage expectations: do not expect a massive fort structure.',
                'The real story is held by the local residents — striking up a conversation is highly recommended.'
            ],
            rating: 3.0,
            reviewCount: '50+'
        }
    },

    // ━━━━━━━━━━━━━━━━━━ ROHILAGAD ━━━━━━━━━━━━━━━━━━
    rohilagad: {
        introduction: `Rohilagad is a truly offbeat, lesser-known hill fort situated in the Patoda region of 
            Beed district. Far from the commercialized tourist trails, this small surveillance fort offers an 
            uninterrupted, rugged trekking experience in the dry landscapes of Marathwada. While it lacks grand 
            architectural marvels, its raw appeal lies in its isolation, open plateaus, and the panoramic views 
            it commands over the surrounding plains.`,

        quote: {
            text: "रोहिलागड — बीडच्या डोंगराळ भागातील एकांत दुर्ग",
            attribution: "Rohilagad — a solitary fort in the hilly tracts of Beed"
        },

        timeline: [
            { year: '17th Century', title: 'Maratha Outpost', desc: 'Rohilagad functioned primarily as a strategic watchpoint and minor garrison under the Maratha Empire, monitoring movements in the Beed hinterlands.' },
            { year: '18th Century', title: 'Administrative Decline', desc: 'As borders shifted and regional threats diminished, the fort lost its military relevance and was abandoned.' },
            { year: 'Modern', title: 'Forgotten Heritage', desc: 'Today, it remains largely forgotten by mainstream tourism, visited only by local villagers and dedicated fort explorers.' }
        ],

        landmarks: [
            { title: 'Fort Plateau', desc: 'A wide, open summit with minimal structural ruins. The sense of space and silence here is profound.', mustSee: true },
            { title: 'Surveillance Viewpoints', desc: 'Strategic vantage points at the edges of the plateau offering massive, sweeping views of the Beed district plains.', mustSee: true },
            { title: 'Remnant Foundations', desc: 'A few scattered stone foundations that once supported watchtowers and basic shelters for the garisson.', mustSee: false }
        ],

        food: [
            { name: 'Self-Sufficient Only', type: 'Veg', price: '₹0', desc: 'Zero facilities available. You must carry all your own food, snacks, and a heavy supply of water.' },
            { name: 'Beed City / Highways', type: 'Veg/Non-Veg', price: '₹60-150', desc: 'Eat at dhabas or restaurants in Beed city (~40 km away) before making the journey.' }
        ],

        trekRoutes: [
            { icon: '🥾', title: 'Via Rohila Village', difficulty: 'Medium', distance: '3 km', time: '2-3 hrs', desc: 'A basic, unpaved trek starting from Rohila village. The path goes through dry scrub, open terrain, and rocky patches leading to the plateau.' }
        ],

        howToReach: [
            { mode: 'By Car / Bike', icon: '🚗', desc: 'Drive from Beed towards the Patoda region. The road leads to Rohila village. Private or hired vehicle is strongly recommended due to the remote location.' },
            { mode: 'By Bus', icon: '🚌', desc: 'Very limited local ST buses to villages in the Patoda region. Not a reliable option for a day trip.' }
        ],

        trekEssentials: [
            'Sturdy trekking shoes for uneven, rocky terrain',
            'Minimum 3 litres of water — absolute necessity in dry Beed climate',
            'Packed lunch',
            'First aid kit — highly remote area with no nearby medical help',
            'Sun protection (Wide-brimmed hat, sunscreen)'
        ],

        safetyAlerts: [
            { msg: 'Extremely remote location. It is advised to trek in a group.', season: 'All year' },
            { msg: 'Strictly avoid during summer months (Mar-Jun) due to severe heat and lack of shade.', season: 'Summer' },
            { msg: 'Trails are not marked. Having a local guide or good GPS/map is helpful.', season: 'All year' }
        ],

        budget: [
            { label: 'Transport', value: '₹300-600 (Fuel/Hire from Beed)' },
            { label: 'Food & Supplies', value: '₹100-200' },
            { label: 'Entry', value: 'Free' },
            { label: 'Total', value: '₹400-800', highlight: true }
        ],

        facilities: [
            { label: 'Parking', available: false, detail: 'Park cautiously in the village' },
            { label: 'Food & Water', available: false, detail: 'None — Carry everything' },
            { label: 'Toilets', available: false, detail: 'No facilities' },
            { label: 'Mobile Network', available: true, detail: 'Weak / Intermittent' }
        ],

        quickFacts: [
            { label: 'District', value: 'Beed' },
            { label: 'Base Village', value: 'Rohila' },
            { label: 'Altitude', value: '~800 m' },
            { label: 'Fort Type', value: 'Hill Fort (Watchpost)' },
            { label: 'Trek Difficulty', value: 'Moderate' },
            { label: 'Time Required', value: '4-5 hours' },
            { label: 'Built By', value: 'Maratha Empire' },
            { label: 'Nearest City', value: 'Beed (40 km)' }
        ],

        reviews: {
            quote: "Rohilagad is not for those seeking grand architecture; it is for trekkers seeking ultimate solitude and the raw, harsh beauty of the Marathwada landscape.",
            positives: [
                'Complete isolation and peace',
                'Excellent offbeat trekking experience',
                'Expansive, unhindered views of the plains'
            ],
            proTips: [
                'Do not attempt the trek without sufficient water.',
                'The golden hour (sunset) from the plateau is beautiful, but ensure you descend before dark as the trail is tricky.',
                'Engage with villagers at Rohila; they are welcoming and might offer to guide you.'
            ],
            rating: 3.5,
            reviewCount: '40+'
        }
    }
};

export { fortDetailedData };
export default fortDetailedData;


