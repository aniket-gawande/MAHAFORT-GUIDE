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
    }
};

export { fortDetailedData };
export default fortDetailedData;
