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
    }
};

export { fortDetailedData };
export default fortDetailedData;
