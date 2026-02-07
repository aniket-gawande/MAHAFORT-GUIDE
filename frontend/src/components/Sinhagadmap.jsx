import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaRoute, FaClock, FaRoad } from 'react-icons/fa';

const SinhagadMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [directions, setDirections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);
  const directionsRendererRef = useRef(null);
  const userMarkerRef = useRef(null);
  const fortMarkerRef = useRef(null);

  // Sinhagad Fort coordinates (fixed destination)
  const SINHAGAD_FORT = {
    lat: 18.3664,
    lng: 73.7558
  };

  // Donje Village base (preferred route waypoint)
  const DONJE_WAYPOINT = {
    lat: 18.3540,
    lng: 73.7430
  };

  // Load Google Maps Script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      // Check if script already loaded
      if (window.google && window.google.maps) {
        setMapLoaded(true);
        return;
      }

      // Get API key from environment variable
      const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
      
      if (!apiKey || apiKey === 'your_google_maps_api_key_here') {
        setError('Google Maps API key is not configured. Please add REACT_APP_GOOGLE_MAPS_API_KEY to your .env file.');
        setLoading(false);
        return;
      }

      const script = document.createElement('script');
      // Maps JavaScript API with Directions service
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setMapLoaded(true);
      script.onerror = () => {
        setError('Failed to load Google Maps. Please check your API key and ensure Maps JavaScript API is enabled in Google Cloud Console.');
        setLoading(false);
      };
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  // Get user's current location
  useEffect(() => {
    if (!mapLoaded) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(userPos);
          setLoading(false);
        },
        (err) => {
          console.error('Geolocation error:', err);
          setError('Unable to get your location. Please enable location services.');
          setLoading(false);
          // Use Pune as default location if geolocation fails
          setUserLocation({ lat: 18.5204, lng: 73.8567 });
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      // Use Pune as default
      setUserLocation({ lat: 18.5204, lng: 73.8567 });
    }
  }, [mapLoaded]);

  // Initialize map and get directions
  useEffect(() => {
    if (!mapLoaded || !userLocation || !mapRef.current) return;

    const initializeMap = () => {
      try {
        // Create map
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 12,
          center: userLocation,
          mapTypeId: 'roadmap',
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        });

        googleMapRef.current = map;

        // Create custom icons
        const userIcon = {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#4285F4',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3,
        };

        const fortIcon = {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
              <path fill="#FF6600" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              <path fill="#FFD700" d="M12 4l8 4.5v8c0 4.5-3.2 8.7-8 10-4.8-1.3-8-5.5-8-10v-8l8-4.5z"/>
              <text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#8B0000">🏰</text>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(48, 48),
        };

        // Add user location marker
        userMarkerRef.current = new window.google.maps.Marker({
          position: userLocation,
          map: map,
          icon: userIcon,
          title: 'Your Location',
          animation: window.google.maps.Animation.DROP,
        });

        // Add fort marker
        fortMarkerRef.current = new window.google.maps.Marker({
          position: SINHAGAD_FORT,
          map: map,
          icon: fortIcon,
          title: 'Sinhagad Fort',
          animation: window.google.maps.Animation.DROP,
        });

        // Info windows
        const userInfoWindow = new window.google.maps.InfoWindow({
          content: '<div style="padding: 8px;"><strong>Your Location</strong><br/>Current Position</div>'
        });

        const fortInfoWindow = new window.google.maps.InfoWindow({
          content: '<div style="padding: 8px;"><strong>Sinhagad Fort</strong><br/>Historic Maratha Fort<br/>Altitude: 1312m</div>'
        });

        userMarkerRef.current.addListener('click', () => {
          userInfoWindow.open(map, userMarkerRef.current);
        });

        fortMarkerRef.current.addListener('click', () => {
          fortInfoWindow.open(map, fortMarkerRef.current);
        });

        // Initialize Directions Service and Renderer
        const directionsService = new window.google.maps.DirectionsService();
        directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
          map: map,
          suppressMarkers: true, // We're using custom markers
          polylineOptions: {
            strokeColor: '#FF6600',
            strokeWeight: 6,
            strokeOpacity: 0.8,
          }
        });

        // Request directions via Donje route
        const request = {
          origin: userLocation,
          destination: SINHAGAD_FORT,
          waypoints: [
            {
              location: DONJE_WAYPOINT,
              stopover: true
            }
          ],
          travelMode: window.google.maps.TravelMode.DRIVING,
          optimizeWaypoints: false, // Keep our preferred route
          provideRouteAlternatives: false,
        };

        directionsService.route(request, (result, status) => {
          if (status === 'OK') {
            directionsRendererRef.current.setDirections(result);
            
            const route = result.routes[0];
            const leg = route.legs[0];

            // Set distance and duration
            setDistance(leg.distance.text);
            setDuration(leg.duration.text);

            // Extract turn-by-turn directions
            const steps = leg.steps.map((step, index) => ({
              instruction: step.instructions.replace(/<[^>]*>/g, ''), // Remove HTML tags
              distance: step.distance.text,
              duration: step.duration.text,
              maneuver: step.maneuver || 'straight',
            }));

            setDirections(steps);

            // Fit map to show entire route
            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(userLocation);
            bounds.extend(SINHAGAD_FORT);
            bounds.extend(DONJE_WAYPOINT);
            map.fitBounds(bounds);

          } else {
            console.error('Directions request failed:', status);
            setError('Unable to calculate route. Please try again.');
          }
        });

      } catch (err) {
        console.error('Map initialization error:', err);
        setError('Failed to initialize map');
      }
    };

    initializeMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapLoaded, userLocation]);

  // Get maneuver icon
  const getManeuverIcon = (maneuver) => {
    const icons = {
      'turn-left': '↰',
      'turn-right': '↱',
      'turn-slight-left': '↖',
      'turn-slight-right': '↗',
      'turn-sharp-left': '↰',
      'turn-sharp-right': '↱',
      'straight': '↑',
      'roundabout-left': '⭯',
      'roundabout-right': '⭮',
      'uturn-left': '↶',
      'uturn-right': '↷',
      'merge': '⇝',
      'fork-left': '⑂',
      'fork-right': '⑂',
    };
    return icons[maneuver] || '→';
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading map and getting your location...</p>
      </div>
    );
  }

  if (error) {
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
      {/* Map Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-l-4 border-blue-500">
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
            <div>
              <p className="text-sm text-blue-600 font-medium">Your Location</p>
              <p className="text-lg font-bold text-blue-800">
                {userLocation ? `${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}` : 'Getting...'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-l-4 border-orange-500">
          <div className="flex items-center mb-2">
            <FaRoad className="text-orange-600 text-2xl mr-3" />
            <div>
              <p className="text-sm text-orange-600 font-medium">Total Distance</p>
              <p className="text-lg font-bold text-orange-800">{distance || 'Calculating...'}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border-l-4 border-green-500">
          <div className="flex items-center mb-2">
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
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3">
          <div className="flex items-center">
            <FaRoute className="text-2xl mr-3" />
            <div>
              <h3 className="text-xl font-bold">Route to Sinhagad Fort</h3>
              <p className="text-sm text-orange-100">via Donje Village (Preferred Route)</p>
            </div>
          </div>
        </div>
        <div 
          ref={mapRef} 
          className="w-full h-96"
          style={{ minHeight: '500px' }}
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
                    <span className="text-2xl">{getManeuverIcon(step.maneuver)}</span>
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
            <span>This route takes you via <strong>Donje Village</strong> - the most popular and well-maintained route to Sinhagad Fort</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>The road is motorable up to the parking area near the fort</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Shared jeeps available from base village (₹20-30 per person)</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">•</span>
            <span>Parking available at the top (₹50-100)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SinhagadMap;