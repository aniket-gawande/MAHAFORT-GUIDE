import React, { useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// ─── Known fort coordinates (lat, lng) ───
// Historically accurate locations for all 88 Maharashtra forts
const FORT_COORDINATES = {
  // Forts with detail pages
  'Sinhagad Fort': [18.3664, 73.7558],
  'Sindhudurg Fort': [16.0371, 73.4589],
  'Vishalgad Fort': [16.7544, 73.8419],
  'Murud Janjira Fort': [18.2917, 72.9636],
  'Lohagad Fort': [18.7083, 73.4750],
  'Tung Fort': [18.6833, 73.4333],

  // Enriched forts
  'Raigad Fort': [18.2353, 73.4469],
  'Rajgad Fort': [18.2472, 73.6833],
  'Torna Fort': [18.2767, 73.6225],
  'Pratapgad Fort': [17.9328, 73.5786],
  'Shivneri Fort': [19.2050, 73.8678],
  'Panhala Fort': [16.8119, 74.1108],
  'Harishchandragad Fort': [19.3894, 73.7789],
  'Daulatabad Fort': [19.9433, 75.2128],
  'Purandar Fort': [18.2808, 73.9817],
  'Vijaydurg Fort': [16.5631, 73.3381],

  // Batch 3
  'Rajmachi Fort': [18.8350, 73.4000],
  'Ajinkyatara Fort': [17.6722, 73.9933],
  'Suvarnadurg Fort': [17.8167, 73.1333],
  'Tikona Fort': [18.6519, 73.4833],
  'Vasota Fort': [17.7833, 73.8500],

  // Batch 4
  'Salher Fort': [20.6722, 73.7306],
  'Korigad Fort': [18.6450, 73.4833],
  'Mahuli Fort': [19.6333, 73.3833],
  'Ghangad Fort': [18.4167, 73.4500],
  'Kulaba Fort': [18.6444, 72.8778],

  // Batch 5
  'Visapur Fort': [18.7286, 73.5131],
  'Rohida Fort': [18.1500, 73.6667],
  'Prabalgad Fort': [19.0333, 73.3833],
  'Ratangad Fort': [19.5167, 73.6833],
  'Harihar Fort': [19.8833, 73.7833],

  // Batch 6
  'Karnala Fort': [18.8833, 73.1167],
  'Jivdhan Fort': [19.4500, 73.5833],
  'Korlai Fort': [18.5333, 72.9000],
  'Chavand Fort': [19.3000, 73.3000],
  'Mulher Fort': [20.6500, 73.7167],

  // Batch 7
  'Kalsubai Peak': [19.6017, 73.7100],
  'Malhargad Fort': [18.3500, 74.1833],
  'Pandavgad Fort': [17.1000, 74.0333],
  'Hadsar Fort': [19.4000, 73.5167],
  'Bhairavgad Fort': [19.4389, 73.7250],

  // Batch 8
  'Mangitungi Fort': [20.5833, 73.9500],
  'Anjaneri Fort': [19.9667, 73.6833],
  'Sudhagad Fort': [18.3833, 73.3167],
  'Avchitgad Fort': [17.3333, 73.6000],
  'Kamalgad Fort': [17.1833, 73.7000],

  // Batch 9
  'Naldurg Fort': [17.8167, 76.2833],
  'Paranda Fort': [18.2500, 76.0667],
  'Gharapuri Fort': [18.9625, 72.9314],
  'Rangana Fort': [16.7333, 73.8500],
  'Kalavantindurg Fort': [19.0333, 73.3667],

  // Additional forts
  'Antur Fort': [20.1500, 76.6667],
  'Waghala Fort': [19.0000, 73.4000],
  'Rohilagad Fort': [18.7333, 73.5833],
  'Sitabuldi Fort': [21.1458, 79.0882],
  'Gawilgad Fort': [21.3833, 77.4333],
  'Narnala Fort': [21.0833, 76.5167],
  'Balapur Fort': [20.7333, 76.8000],
  'Manikgad Fort': [19.0833, 73.5500],
  'Achalpur Fort': [21.2597, 77.5117],
  'Bhamragad Fort': [20.0333, 80.3667],
  'Sindkhed Raja Fort': [20.2833, 76.1833],
  'Bhushangad Fort': [17.9167, 73.6667],
  'Chandangad Fort': [16.0833, 73.8500],
  'Pavangad Fort': [16.3833, 73.8500],
  'Bhorgiri Fort': [19.0667, 73.5167],
  'Solapur Bhuikot Fort': [17.6667, 75.9167],

  // Newly generated forts
  'Revdanda Fort': [18.5500, 72.9333],
  'Markandey Fort': [20.2500, 73.4833],
  'Laling Fort': [20.5833, 74.7500],
  'Kandhar Fort': [18.8833, 76.8167],
  'Udgir Fort': [18.3833, 77.1167],
  'Hatgad Fort': [20.3667, 73.7167],
  'Songad Fort': [16.3167, 73.6333],
  'Arnala Fort': [19.4667, 72.7333],
  'Kelve Fort': [19.6167, 72.7667],
  'Underi Fort': [18.8167, 72.8833],
  'Bankot Fort': [17.9833, 73.0333],
  'Jaigad Fort': [17.3000, 73.2167],
  'Achala Fort': [19.6833, 73.7333],
  'Toranmal Fort': [21.5500, 73.9500],
  'Kanhergarh Fort': [16.2333, 73.7500],
  'Pisolgad Fort': [16.5833, 73.5000],
  'Ausa Fort': [18.2500, 76.5000],
  'Dharur Fort': [18.8167, 76.1000],
  'Ambad Fort': [19.6000, 75.9333],
  'Parbhani Fort': [19.2667, 76.7833],
  'Mahur Fort': [19.8889, 77.9306],
};

// District centre fallback coordinates for forts without known coordinates
const DISTRICT_CENTERS = {
  'Nandurbar': [21.38, 74.24], 'Dhule': [20.90, 74.78], 'Jalgaon': [21.02, 75.57],
  'Buldhana': [20.53, 76.18], 'Akola': [20.71, 77.00], 'Washim': [20.12, 77.15],
  'Amravati': [20.93, 77.75], 'Yavatmal': [20.38, 78.12], 'Wardha': [20.75, 78.60],
  'Nagpur': [21.15, 79.10], 'Bhandara': [21.17, 79.65], 'Gondia': [21.45, 80.20],
  'Chandrapur': [20.05, 79.30], 'Gadchiroli': [20.18, 80.02],
  'Palghar': [19.80, 72.77], 'Thane': [19.35, 73.00],
  'Raigad': [18.25, 73.20], 'Ratnagiri': [17.00, 73.32],
  'Sindhudurg': [16.05, 73.55], 'Nashik': [20.00, 73.80],
  'Ahmednagar': [19.10, 74.75], 'Pune': [18.52, 74.00],
  'Satara': [17.68, 74.00], 'Sangli': [16.86, 74.58],
  'Kolhapur': [16.70, 74.24], 'Solapur': [17.69, 75.91],
  'Aurangabad': [19.88, 75.34], 'Chhatrapati Sambhajinagar': [19.88, 75.34],
  'Jalna': [19.83, 75.90], 'Beed': [18.99, 75.74],
  'Osmanabad': [18.19, 76.05], 'Dharashiv': [18.19, 76.05],
  'Dharashiv (Osmanabad)': [18.19, 76.05], 'Latur': [18.40, 76.56],
  'Nanded': [19.15, 77.32], 'Hingoli': [19.72, 77.15], 'Parbhani': [19.27, 76.77],
};

// Region-based colour scheme
const REGION_MAP = {
  konkan:     { label: 'Konkan',     color: '#dc2626', districts: ['Palghar','Thane','Raigad','Ratnagiri','Sindhudurg','Mumbai','Mumbai Suburban'] },
  pune:       { label: 'Pune',       color: '#2563eb', districts: ['Pune','Satara','Solapur','Sangli','Kolhapur','Ahmednagar'] },
  nagpur:     { label: 'Nagpur',     color: '#16a34a', districts: ['Nagpur','Wardha','Yavatmal','Bhandara','Gondia','Chandrapur','Gadchiroli'] },
  nashik:     { label: 'Nashik',     color: '#7c3aed', districts: ['Nashik','Dhule','Nandurbar','Jalgaon'] },
  aurangabad: { label: 'Aurangabad', color: '#ea580c', districts: ['Aurangabad','Chhatrapati Sambhajinagar','Jalna','Beed','Dharashiv','Dharashiv (Osmanabad)','Osmanabad','Latur','Nanded','Hingoli','Parbhani'] },
  amravati:   { label: 'Amravati',   color: '#ca8a04', districts: ['Amravati','Akola','Buldhana','Washim'] },
};

const getRegionColor = (district) => {
  for (const r of Object.values(REGION_MAP)) {
    if (r.districts.includes(district)) return r.color;
  }
  return '#C47D3B'; // saffron fallback
};

const getRegionLabel = (district) => {
  for (const r of Object.values(REGION_MAP)) {
    if (r.districts.includes(district)) return r.label;
  }
  return 'Other';
};

// Get coordinates for a fort (exact coordinates -> district fallback)
const getFortCoords = (fort) => {
  // 1. Check the FORT_COORDINATES lookup
  if (FORT_COORDINATES[fort.name]) return FORT_COORDINATES[fort.name];

  // 2. Check fort.location.coordinates from API data
  if (fort.location?.coordinates?.lat && fort.location?.coordinates?.lng) {
    return [fort.location.coordinates.lat, fort.location.coordinates.lng];
  }

  // 3. Fallback to district centre with slight random offset to avoid stacking
  const district = fort.location?.district;
  if (district && DISTRICT_CENTERS[district]) {
    const [lat, lng] = DISTRICT_CENTERS[district];
    // Add small offset so forts in same district don't stack perfectly
    const offset = () => (Math.random() - 0.5) * 0.08;
    return [lat + offset(), lng + offset()];
  }

  return null;
};

// Create a custom coloured SVG marker icon
const createFortIcon = (color) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="${color}" flood-opacity="0.5"/>
      </filter>
    </defs>
    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="${color}" filter="url(#shadow)" opacity="0.9"/>
    <circle cx="12" cy="12" r="5" fill="#0a0a0a" opacity="0.8"/>
    <circle cx="12" cy="12" r="3" fill="${color}" opacity="0.7"/>
  </svg>`;

  return L.divIcon({
    html: svg,
    className: 'fort-marker-icon',
    iconSize: [24, 36],
    iconAnchor: [12, 36],
    popupAnchor: [0, -36],
  });
};

const AllFortsMap = ({ forts = [] }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Compute fort markers data
  const fortMarkers = useMemo(() => {
    return forts
      .filter(f => f?.name && f?.location)
      .map(fort => {
        const coords = getFortCoords(fort);
        if (!coords) return null;
        const district = fort.location?.district || 'Maharashtra';
        const color = getRegionColor(district);
        const region = getRegionLabel(district);
        const difficulty = fort.difficulty || fort.trek?.difficulty || fort.trek?.routes?.[0]?.difficulty || 'Moderate';
        const fortId = fort._id || fort.name?.toLowerCase().replace(/\s+/g, '-');
        return { fort, coords, color, region, district, difficulty, fortId };
      })
      .filter(Boolean);
  }, [forts]);

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return;

    // Create map with dark theme
    const map = L.map(mapRef.current, {
      center: [19.0, 75.5], // Maharashtra centre
      zoom: 7,
      zoomControl: false,
      scrollWheelZoom: true,
      attributionControl: false,
    });

    // Dark tile layer - OpenStreetMap with CSS dark filter (no API key needed)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      className: 'dark-map-tiles',
    }).addTo(map);

    // Custom zoom control on the right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Attribution
    L.control.attribution({ position: 'bottomright', prefix: false })
      .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright" style="color:#C47D3B">OpenStreetMap</a>')
      .addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Add/update markers when fortMarkers change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing marker layers
    map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    const bounds = [];

    fortMarkers.forEach(({ fort, coords, color, region, district, difficulty, fortId }) => {
      const icon = createFortIcon(color);
      const marker = L.marker(coords, { icon }).addTo(map);

      const popupContent = `
        <div style="
          font-family: system-ui, -apple-system, sans-serif;
          min-width: 200px;
          max-width: 260px;
          padding: 0;
        ">
          <div style="
            background: linear-gradient(135deg, ${color}22, ${color}11);
            border-bottom: 2px solid ${color}44;
            padding: 10px 14px;
            margin: -1px -1px 0;
            border-radius: 8px 8px 0 0;
          ">
            <h3 style="
              margin: 0 0 2px;
              font-size: 14px;
              font-weight: 900;
              color: #1a1a1a;
              letter-spacing: 0.5px;
              text-transform: uppercase;
            ">${fort.name}</h3>
            <div style="
              display: flex;
              align-items: center;
              gap: 6px;
              font-size: 10px;
              color: #555;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
            ">
              <span style="color: ${color};">&#9679;</span>
              ${district} &middot; ${region}
            </div>
          </div>
          <div style="padding: 10px 14px 12px;">
            <div style="
              display: flex;
              gap: 8px;
              margin-bottom: 8px;
            ">
              <span style="
                padding: 3px 8px;
                border-radius: 4px;
                font-size: 9px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.8px;
                background: ${color}18;
                color: ${color};
                border: 1px solid ${color}33;
              ">${difficulty}</span>
              <span style="
                padding: 3px 8px;
                border-radius: 4px;
                font-size: 9px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.8px;
                background: #f0f0f0;
                color: #666;
              ">${fort.type || 'Hill Fort'}</span>
            </div>
            ${fort.altitude ? `<div style="font-size: 10px; color: #888; margin-bottom: 6px;">&uarr; Altitude: ${fort.altitude}</div>` : ''}
            <a href="/fort/${fortId}" 
               style="
                 display: inline-block;
                 margin-top: 4px;
                 padding: 6px 14px;
                 background: ${color};
                 color: #fff;
                 text-decoration: none;
                 border-radius: 6px;
                 font-size: 10px;
                 font-weight: 800;
                 text-transform: uppercase;
                 letter-spacing: 1px;
                 transition: opacity 0.2s;
               "
               onmouseover="this.style.opacity='0.85'"
               onmouseout="this.style.opacity='1'"
            >View Fort &rarr;</a>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 280,
        className: 'fort-popup-dark',
        closeButton: true,
        autoPan: true,
      });

      bounds.push(coords);
    });

    // Fit bounds to show all markers
    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [30, 30], maxZoom: 9 });
    }
  }, [fortMarkers]);

  return (
    <div className="w-full bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-saffron/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-cinematic font-black text-white uppercase tracking-widest mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-yellow-200 to-saffron">
              Fort Map
            </span>{' '}
            of Maharashtra
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold max-w-xl mx-auto">
            Explore {fortMarkers.length} legendary forts across the Maratha Empire &middot; Click any marker for details
          </p>
        </div>

        {/* Region Legend */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
          {Object.values(REGION_MAP).map(r => (
            <div key={r.label} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ background: r.color, boxShadow: `0 0 6px ${r.color}55` }}></div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest" style={{ color: r.color + 'cc' }}>{r.label}</span>
            </div>
          ))}
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-saffron/20 rounded-tl-2xl z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-saffron/20 rounded-tr-2xl z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-saffron/20 rounded-bl-2xl z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-saffron/20 rounded-br-2xl z-10 pointer-events-none"></div>

          <div
            ref={mapRef}
            className="w-full dark-map-container"
            style={{ height: '550px', background: '#0a0a0a' }}
          />
        </div>

        {/* Footer note */}
        <div className="text-center mt-6">
          <p className="text-gray-700 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">
            Scroll to zoom &middot; Click markers for fort details &middot; Drag to pan
          </p>
        </div>
      </div>

      {/* Custom popup styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .dark-map-tiles {
          filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(1.2) saturate(0.3);
        }
        .dark-map-container .leaflet-popup-pane,
        .dark-map-container .leaflet-control-container,
        .dark-map-container .leaflet-marker-pane {
          filter: none !important;
        }
        .fort-marker-icon {
          background: transparent !important;
          border: none !important;
          filter: invert(1) hue-rotate(180deg) brightness(1.15) saturate(3);
        }
        .fort-popup-dark .leaflet-popup-content-wrapper {
          background: #fafafa;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          padding: 0;
          overflow: hidden;
          filter: invert(1) hue-rotate(180deg);
        }
        .fort-popup-dark .leaflet-popup-content {
          margin: 0;
          padding: 0;
        }
        .fort-popup-dark .leaflet-popup-tip {
          background: #fafafa;
          filter: invert(1) hue-rotate(180deg);
        }
        .fort-popup-dark .leaflet-popup-close-button {
          color: #999 !important;
          font-size: 18px !important;
          padding: 6px 8px !important;
          z-index: 10;
          filter: invert(1) hue-rotate(180deg);
        }
        .fort-popup-dark .leaflet-popup-close-button:hover {
          color: #333 !important;
        }
        .leaflet-control-zoom a {
          background: #1a1a1a !important;
          color: #C47D3B !important;
          border-color: #333 !important;
          filter: invert(1) hue-rotate(180deg);
        }
        .leaflet-control-zoom a:hover {
          background: #C47D3B !important;
          color: #000 !important;
        }
        .leaflet-control-attribution {
          background: rgba(0,0,0,0.6) !important;
          color: #666 !important;
          font-size: 9px !important;
          filter: invert(1) hue-rotate(180deg);
        }
        .leaflet-control-attribution a {
          color: #C47D3B !important;
        }
      `}} />
    </div>
  );
};

export default AllFortsMap;
