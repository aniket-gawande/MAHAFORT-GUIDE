import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaRoute, FaClock, FaRoad, FaLocationArrow } from 'react-icons/fa';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LohagadMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [directions, setDirections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationError, setLocationError] = useState(false);

  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const routingControlRef = useRef(null);

  // Lohagad Fort coordinates
  const LOHAGAD_FORT = { lat: 18.7100, lng: 73.4880 };

  // Malavli Village (base village waypoint)
  const MALAVLI_WAYPOINT = { lat: 18.7180, lng: 73.4750 };

  // Default location (Lonavala) if geolocation fails
  const DEFAULT_LOCATION = { lat: 18.7557, lng: 73.4091 };

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLoading(false);
        },
        (err) => {
          console.warn('Geolocation error:', err);
          setLocationError(true);
          setUserLocation(DEFAULT_LOCATION);
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setLocationError(true);
      setUserLocation(DEFAULT_LOCATION);
      setLoading(false);
    }
  }, []);

  // Initialize map when user location is available
  useEffect(() => {
    if (!userLocation || !mapRef.current || mapInstanceRef.current) return;

    try {
      const map = L.map(mapRef.current, {
        center: [userLocation.lat, userLocation.lng],
        zoom: 12,
        zoomControl: true,
      });

      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles (FREE)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom icons
      const userIcon = L.divIcon({
        className: 'custom-user-marker',
        html: `<div style="
          width: 24px; 
          height: 24px; 
          background: linear-gradient(135deg, #4285F4, #34A853); 
          border: 3px solid white; 
          border-radius: 50%; 
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="width: 8px; height: 8px; background: white; border-radius: 50%;"></div>
        </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const fortIcon = L.divIcon({
        className: 'custom-fort-marker',
        html: `<div style="
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #FF6600, #FF9933);
          border: 3px solid #FFD700;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(255,102,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        ">🏰</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      // Add markers
      L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
        .addTo(map)
        .bindPopup(`<strong>📍 Your Location</strong><br/>${locationError ? 'Using Lonavala as default' : 'Current Position'}`);

      L.marker([LOHAGAD_FORT.lat, LOHAGAD_FORT.lng], { icon: fortIcon })
        .addTo(map)
        .bindPopup(`<strong>🏰 Lohagad Fort</strong><br/>Historic Maratha Fort<br/>Altitude: 1,033m<br/><em>"लोहगड" - The Iron Fort</em>`);

      // Add routing with OSRM (FREE!)
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(userLocation.lat, userLocation.lng),
          L.latLng(MALAVLI_WAYPOINT.lat, MALAVLI_WAYPOINT.lng),
          L.latLng(LOHAGAD_FORT.lat, LOHAGAD_FORT.lng)
        ],
        routeWhileDragging: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
        lineOptions: {
          styles: [
            { color: '#FF6600', opacity: 0.8, weight: 6 },
            { color: '#FFD700', opacity: 0.3, weight: 10 }
          ],
          extendToWaypoints: true,
          missingRouteTolerance: 0
        },
        createMarker: function() { return null; },
        router: L.Routing.osrmv1({
          serviceUrl: 'https://router.project-osrm.org/route/v1',
          profile: 'car'
        })
      }).addTo(map);

      routingControlRef.current = routingControl;

      // Hide the default routing control panel
      const container = routingControl.getContainer();
      if (container) {
        container.style.display = 'none';
      }

      // Listen for route found event
      routingControl.on('routesfound', function(e) {
        const route = e.routes[0];
        const totalDistance = route.summary.totalDistance;
        const totalTime = route.summary.totalTime;

        const distanceKm = (totalDistance / 1000).toFixed(1);
        setDistance(`${distanceKm} km`);

        const hours = Math.floor(totalTime / 3600);
        const minutes = Math.floor((totalTime % 3600) / 60);
        if (hours > 0) {
          setDuration(`${hours} hr ${minutes} min`);
        } else {
          setDuration(`${minutes} min`);
        }

        const steps = route.instructions.map((instruction) => ({
          instruction: instruction.text,
          distance: instruction.distance > 1000
            ? `${(instruction.distance / 1000).toFixed(1)} km`
            : `${Math.round(instruction.distance)} m`,
          duration: instruction.time > 60
            ? `${Math.round(instruction.time / 60)} min`
            : `${instruction.time} sec`,
          type: instruction.type || 'straight',
        }));

        setDirections(steps.filter(s => s.instruction && s.distance !== '0 m'));
      });

      routingControl.on('routingerror', function(e) {
        console.error('Routing error:', e);
        setError('Unable to calculate route. Please try again.');
      });

      const bounds = L.latLngBounds([
        [userLocation.lat, userLocation.lng],
        [LOHAGAD_FORT.lat, LOHAGAD_FORT.lng],
        [MALAVLI_WAYPOINT.lat, MALAVLI_WAYPOINT.lng]
      ]);
      map.fitBounds(bounds, { padding: [50, 50] });

    } catch (err) {
      console.error('Map initialization error:', err);
      setError('Failed to initialize map');
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [userLocation, locationError]);

  const getDirectionIcon = (type) => {
    const icons = {
      'Left': '↰', 'Right': '↱', 'SlightLeft': '↖', 'SlightRight': '↗',
      'SharpLeft': '⮪', 'SharpRight': '⮫', 'Straight': '↑', 'Roundabout': '⭮',
      'UTurn': '↩', 'DestinationReached': '🏁', 'Head': '🚗', 'Continue': '→',
      'Fork': '⑂', 'Merge': '⇢', 'EndOfRoad': '⊥', 'WaypointReached': '📍',
    };
    return icons[type] || '→';
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Getting your location...</p>
        <p className="text-sm text-gray-400 mt-2">Please allow location access when prompted</p>
      </div>
    );
  }

  if (error && !userLocation) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-red-500 text-xl mr-3" />
          <h3 className="text-red-800 font-semibold">Map Error</h3>
        </div>
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Location Notice */}
      {locationError && (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
          <div className="flex items-center">
            <FaLocationArrow className="text-yellow-600 mr-3" />
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Using Lonavala as default location. Enable location services for accurate directions from your position.
            </p>
          </div>
        </div>
      )}

      {/* Map Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-l-4 border-blue-500 shadow-md">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
            <div>
              <p className="text-sm text-blue-600 font-medium">Your Location</p>
              <p className="text-lg font-bold text-blue-800">
                {userLocation ? `${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}` : 'Getting...'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-l-4 border-orange-500 shadow-md">
          <div className="flex items-center">
            <FaRoad className="text-orange-600 text-2xl mr-3" />
            <div>
              <p className="text-sm text-orange-600 font-medium">Total Distance</p>
              <p className="text-lg font-bold text-orange-800">{distance || 'Calculating...'}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border-l-4 border-green-500 shadow-md">
          <div className="flex items-center">
            <FaClock className="text-green-600 text-2xl mr-3" />
            <div>
              <p className="text-sm text-green-600 font-medium">Travel Time</p>
              <p className="text-lg font-bold text-green-800">{duration || 'Calculating...'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border-4 border-orange-200">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaRoute className="text-2xl mr-3" />
              <div>
                <h3 className="text-xl font-bold">Route to Lohagad Fort</h3>
                <p className="text-sm text-orange-100">via Malavli Village (Base Village)</p>
              </div>
            </div>
            <div className="text-xs bg-white/20 px-3 py-1 rounded-full">
              🆓 FREE Map by OpenStreetMap
            </div>
          </div>
        </div>
        <div
          ref={mapRef}
          className="w-full"
          style={{ height: '500px', zIndex: 1 }}
        />
      </div>

      {/* Turn-by-Turn Directions */}
      {directions.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4">
            <h3 className="text-xl font-bold flex items-center">
              <FaRoute className="mr-3" />
              Turn-by-Turn Directions ({directions.length} steps)
            </h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {directions.map((step, index) => (
              <div
                key={index}
                className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-2xl">{getDirectionIcon(step.type)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-purple-600">Step {index + 1}</span>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">{step.distance}</span>
                        <span className="mx-2">•</span>
                        <span>{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{step.instruction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Route Information */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-500">
        <h4 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
          <FaRoute className="mr-2" />
          Route Information
        </h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>This route takes you via <strong>Malavli Village</strong> — the base village of Lohagad Fort</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Well-marked trail from Malavli to the fort top, suitable for beginners</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Nearest city: <strong>Lonavala (≈11 km)</strong> — well-connected by road and rail</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Malavli Railway Station is the closest station on the Mumbai-Pune rail line</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Combine your trip with a visit to nearby <strong>Visapur Fort</strong> (twin fort)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LohagadMap;
