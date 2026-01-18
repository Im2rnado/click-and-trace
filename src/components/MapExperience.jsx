import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { createRoot } from 'react-dom/client';
import { useInView } from 'framer-motion';
import { cities } from '../data/cities';
import { getTimeMode } from '../utils/timeMode';
import CityPin from './CityPin';

// Note: Ensure mapbox-gl css is included in index.html

const MapExperience = ({ activeCityIndex }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const markersRef = useRef([]);
    const isInView = useInView(mapContainer, { amount: 0.3, once: true });

    const token = "pk.eyJ1IjoieWFzc2luYmVkaWVyIiwiYSI6ImNta2JiYTVyNTAxejMzY3NncDhibHNpdHEifQ.3XZxlObk3f2lHdd2x6Yv6A";

    useEffect(() => {
        if (map.current) return;

        const { style } = getTimeMode();

        if (!token || token.includes('placeholder')) {
            console.error('Mapbox token is missing or invalid');
            return;
        }

        mapboxgl.accessToken = token;

        try {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: style,
                center: [25, 27], // Zoomed out view of North Africa
                zoom: 2, // Low zoom for "Earth from space" feel
                pitch: 0,
                projection: 'globe',
                interactive: false, // Disable native interaction
                attributionControl: false,
                config: {
                    basemap: {
                        lightPreset: 'dawn',
                        showPointOfInterestLabels: false,
                        showPlaceLabels: true,
                        showTransitLabels: false,
                        showAdminBoundaries: false,
                        showPedestrianRoads: false,
                        showRoadLabels: false,
                        showRoadsAndTransit: false
                    }
                }
            });

            map.current.on('style.load', () => {
                // Check if source already exists to prevent "There is already a source" error
                if (!map.current.getSource('mapbox-dem')) {
                    // Add terrain source
                    map.current.addSource('mapbox-dem', {
                        'type': 'raster-dem',
                        'url': 'mapbox://mapbox.mapbox-light-v11',
                        'tileSize': 512,
                        'maxzoom': 14
                    });
                    // add the DEM source as a terrain layer with exaggerated height
                    map.current.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
                }

                // Set atmosphere
                // map.current.setFog({
                //     'range': [-1, 2],
                //     'horizon-blend': 0.1,
                //     'color': mode === 'day' ? '#e6dac3' : '#242b4b', // Bone/Sand vs Dark Blue
                //     'high-color': mode === 'day' ? '#fdf6e3' : '#0f172a', // Light sand vs Darker Blue
                //     'space-color': mode === 'day' ? '#d1e6fa' : '#020617',
                //     'star-intensity': mode === 'day' ? 0.0 : 0.6
                // });
            });

            // Initialize Markers
            cities.forEach((city, index) => {
                const el = document.createElement('div');
                // Create a root for each marker to render React component
                const root = createRoot(el);
                root.render(<CityPin isActive={index === activeCityIndex} isDay={true} cityName={city.nameEn} />);

                const marker = new mapboxgl.Marker({
                    element: el,
                    anchor: 'bottom'
                })
                    .setLngLat([city.lng, city.lat])
                    .addTo(map.current);

                markersRef.current.push({ marker, root, el });
            });
        } catch (e) {
            console.error('Error initializing map:', e);
        }

        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, []);

    // React to activeCityIndex changes
    useEffect(() => {
        if (!map.current || !isInView) return;

        const targetCity = cities[activeCityIndex];
        if (targetCity) {
            map.current.flyTo({
                center: [targetCity.lng, targetCity.lat],
                zoom: 11,
                pitch: 60,
                bearing: 0, // Reset bearing to 0 (North up / looking forward) instead of 20
                speed: 0.4, // Slower for a more majestic flight
                curve: 3.5, // High curve to "hop" high above Egypt between cities
                essential: true
            });
        } else {
            // Reset view if index is -1 (overview)
            map.current.flyTo({
                center: [31.2357, 28.0444],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                speed: 0.8
            });
        }

        // Update Markers State
        const { pinColor } = getTimeMode(); // Re-fetch in case mode changed (though we force day=true currently)
        const isDay = true;

        markersRef.current.forEach((item, index) => {
            const city = cities[index];
            if (!city) return; // Guard against undefined city

            item.root.render(
                <CityPin
                    isActive={index === activeCityIndex}
                    isDay={isDay}
                    cityName={city.nameEn}
                />
            );
        });

    }, [activeCityIndex, isInView]);

    return (
        <div className="absolute inset-0 w-full h-full z-0 bg-stone-200">
            {!token || token.includes('placeholder') ? (
                <div className="flex flex-col items-center justify-center h-full text-stone-600 p-4 text-center z-50 bg-stone-100">
                    <p className="font-bold text-lg mb-2">Mapbox Token Missing or Invalid</p>
                    <p className="mb-4">Please set <code className="bg-stone-200 px-1 rounded">VITE_MAPBOX_TOKEN</code> in your <code className="bg-stone-200 px-1 rounded">.env</code> file.</p>
                    <p className="text-sm text-stone-500 mb-2">Current Status: {token ? "Token Detected (Invalid)" : "No Token Detected"}</p>
                    <p className="text-xs text-red-500 font-bold">⚠️ Don't forget to restart your server after editing .env!</p>
                </div>
            ) : null}
            <div ref={mapContainer} className="absolute inset-0 w-full h-full" />
        </div>
    );
};

export default MapExperience;
