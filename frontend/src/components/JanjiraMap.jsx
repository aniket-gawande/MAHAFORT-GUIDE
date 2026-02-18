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

const JanjiraMap = () => {
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

  // Murud Janjira Fort coordinates (Rajapuri Jetty - departure point)
  const JANJIRA_JETTY = { lat: 18.2948, lng: 72.9618 };

  // Murud Janjira Fort (island location)
  const JANJIRA_FORT = { lat: 18.2900, lng: 72.9627 };

  // Default location (Pune) if geolocation fails
  const DEFAULT_LOCATION = { lat: 18.5204, lng: 73.8567 };

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
          width: 24px; height: 24px;
          background: linear-gradient(135deg, #4285F4, #34A853);
          border: 3px solid white; border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
        "><div style="width: 8px; height: 8px; background: white; border-radius: 50%;"></div></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const jettyIcon = L.divIcon({
        className: 'custom-jetty-marker',
        html: `<div style="
          width: 40px; height: 40px;
          background: linear-gradient(135deg, #2196F3, #00BCD4);
          border: 3px solid #FFD700; border-radius: 50%;
          box-shadow: 0 4px 15px rgba(33,150,243,0.5);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        ">⛵</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      const fortIcon = L.divIcon({
        className: 'custom-fort-marker',
        html: `<div style="
          width: 40px; height: 40px;
          background: linear-gradient(135deg, #FF6600, #FF9933);
          border: 3px solid #FFD700; border-radius: 50%;
          box-shadow: 0 4px 15px rgba(255,102,0,0.5);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        ">🏰</div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      // Add markers
      L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
        .addTo(map)
        .bindPopup(`<strong>📍 Your Location</strong><br/>${locationError ? 'Using Pune city center' : 'Current Position'}`);

      L.marker([JANJIRA_JETTY.lat, JANJIRA_JETTY.lng], { icon: jettyIcon })
        .addTo(map)
        .bindPopup(`<strong>⛵ Rajapuri Jetty</strong><br/>Boat departure point to Janjira Fort<br/><em>Boats every 15-20 min</em>`);

      L.marker([JANJIRA_FORT.lat, JANJIRA_FORT.lng], { icon: fortIcon })
        .addTo(map)
        .bindPopup(`<strong>🏰 Murud Janjira Fort</strong><br/>Unconquered Sea Fortress<br/><em>"जझीरा महरूब जझीरा"</em>`);

      // Route from user to Rajapuri Jetty (road route)
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(userLocation.lat, userLocation.lng),
          L.latLng(JANJIRA_JETTY.lat, JANJIRA_JETTY.lng)
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
        createMarker: function () { return null; },
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

      // Draw a dashed line from jetty to fort (boat route)
      L.polyline(
        [[JANJIRA_JETTY.lat, JANJIRA_JETTY.lng], [JANJIRA_FORT.lat, JANJIRA_FORT.lng]],
        { color: '#00BCD4', weight: 4, dashArray: '10, 10', opacity: 0.8 }
      ).addTo(map).bindPopup('⛵ Boat route (~15-20 min)');

      // Listen for route found event
      routingControl.on('routesfound', function (e) {
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

      routingControl.on('routingerror', function (e) {
        console.error('Routing error:', e);
        setError('Unable to calculate route. Please try again.');
      });

      // Fit bounds
      const bounds = L.latLngBounds([
        [userLocation.lat, userLocation.lng],
        [JANJIRA_JETTY.lat, JANJIRA_JETTY.lng],
        [JANJIRA_FORT.lat, JANJIRA_FORT.lng]
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
      <div className="bg-royal-gray/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-saffron mx-auto mb-4"></div>
        <p className="text-gray-300">Getting your location...</p>
        <p className="text-sm text-gray-500 mt-2">Please allow location access when prompted</p>
      </div>
    );
  }

  if (error && !userLocation) {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-red-400 text-xl mr-3" />
          <h3 className="text-red-400 font-semibold">Map Error</h3>
        </div>
        <p className="text-red-300">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Location Notice */}
      {locationError && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <div className="flex items-center">
            <FaLocationArrow className="text-yellow-500 mr-3" />
            <p className="text-yellow-300 text-sm">
              <strong>Note:</strong> Using Pune city center as default. Enable location services for accurate directions.
            </p>
          </div>
        </div>
      )}

      {/* Map Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-400 text-2xl mr-3" />
            <div>
              <p className="text-sm text-blue-400 font-medium">Your Location</p>
              <p className="text-lg font-bold text-white">
                {userLocation ? `${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}` : 'Getting...'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center">
            <FaRoad className="text-saffron text-2xl mr-3" />
            <div>
              <p className="text-sm text-saffron font-medium">Distance to Jetty</p>
              <p className="text-lg font-bold text-white">{distance || 'Calculating...'}</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center">
            <FaClock className="text-green-400 text-2xl mr-3" />
            <div>
              <p className="text-sm text-green-400 font-medium">Travel Time</p>
              <p className="text-lg font-bold text-white">{duration ? `${duration} + 20 min boat` : 'Calculating...'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-royal-gray rounded-2xl shadow-xl overflow-hidden border border-saffron/30">
        <div className="bg-gradient-to-r from-saffron to-orange-600 text-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaRoute className="text-2xl mr-3" />
              <div>
                <h3 className="text-xl font-bold font-cinematic">Route to Murud Janjira Fort</h3>
                <p className="text-sm text-orange-100">Drive to Rajapuri Jetty → Boat to Fort</p>
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

      {/* Boat Info */}
      <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
        <h4 className="text-lg font-bold text-cyan-300 mb-3 flex items-center font-cinematic">
          ⛵ Boat Information
        </h4>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span><span>Boats depart from <strong className="text-white">Rajapuri Jetty</strong> every 15-20 minutes</span></li>
          <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span><span>Boat ride takes approximately <strong className="text-white">15-20 minutes</strong></span></li>
          <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span><span>Ticket price: <strong className="text-saffron">₹20-50 per person</strong> (return)</span></li>
          <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span><span>Last boat to fort: <strong className="text-white">4:30 PM</strong></span></li>
          <li className="flex items-start"><span className="text-cyan-400 mr-2">•</span>Avoid during heavy monsoon (June-Aug) due to rough seas</li>
        </ul>
      </div>

      {/* Turn-by-Turn Directions */}
      {directions.length > 0 && (
        <div className="bg-royal-gray/60 border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-4">
            <h3 className="text-xl font-bold flex items-center font-cinematic">
              <FaRoute className="mr-3" />
              Turn-by-Turn Directions ({directions.length} steps)
            </h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {directions.map((step, index) => (
              <div
                key={index}
                className="border-b border-white/5 p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mr-4">
                    <span className="text-2xl">{getDirectionIcon(step.type)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-saffron">Step {index + 1}</span>
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">{step.distance}</span>
                        <span className="mx-2">•</span>
                        <span>{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-300">{step.instruction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Route Tips */}
      <div className="bg-saffron/10 border border-saffron/30 rounded-xl p-6">
        <h4 className="text-lg font-bold text-saffron mb-3 flex items-center font-cinematic">
          <FaRoute className="mr-2" />
          Route Information
        </h4>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start"><span className="text-saffron mr-2">•</span><span>Drive to <strong className="text-white">Rajapuri Jetty</strong> near Murud town</span></li>
          <li className="flex items-start"><span className="text-saffron mr-2">•</span>Parking available near the jetty (₹30-50)</li>
          <li className="flex items-start"><span className="text-saffron mr-2">•</span><span>The fort is accessible <strong className="text-white">only by boat</strong> from the jetty</span></li>
          <li className="flex items-start"><span className="text-saffron mr-2">•</span>Carry water and snacks — limited facilities on the fort</li>
          <li className="flex items-start"><span className="text-saffron mr-2">•</span>Best to visit early morning for the best experience</li>
        </ul>
      </div>
    </div>
  );
};

export default JanjiraMap;
