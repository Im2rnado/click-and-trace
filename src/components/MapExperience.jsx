import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { createRoot } from 'react-dom/client';
import { useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cities } from '../data/cities';
import { getTimeMode } from '../utils/timeMode';
import CityPin from './CityPin';

// Note: Ensure mapbox-gl css is included in index.html

const MapExperience = ({ activeCityIndex }) => {
    const navigate = useNavigate();
    const mapContainer = useRef(null);
    const map = useRef(null);
    const markersRef = useRef([]);
    const isInView = useInView(mapContainer, { amount: 0.3, once: true });

    const token = import.meta.env.VITE_MAPBOX_TOKEN;

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
                center: [30.8, 26.8], // Centered on Egypt
                zoom: 3.5, // ⬅️ Start more zoomed out
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
                        showAdminBoundaries: true,
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
            });

            // Initialize Markers
            cities.forEach((city, index) => {
                const el = document.createElement('div');
                // Create a root for each marker to render React component
                const root = createRoot(el);
                root.render(
                    <CityPin 
                        isActive={false} 
                        showName={false} 
                        cityName={city.nameEn} 
                        onClick={() => navigate(`/city/${city.id}`)}
                    />
                );

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
                zoom: 9.9, // ⬅️ 10% more zoomed out (was 11)
                pitch: 60,
                bearing: 0, // Reset bearing to 0 (North up / looking forward) instead of 20
                speed: 0.4, // Slower for a more majestic flight
                curve: 3.5, // High curve to "hop" high above Egypt between cities
                essential: true
            });
        } else {
            // Reset view if index is -1 (overview)
            map.current.flyTo({
                center: [30.8, 26.8],
                zoom: 3.5, // ⬅️ Match initial zoomed out state
                pitch: 0,
                bearing: 0,
                speed: 0.8
            });
        }

        // Update Markers State
        markersRef.current.forEach((item, index) => {
            const city = cities[index];
            if (!city) return;

            const isActive = index === activeCityIndex;

            item.root.render(
                <CityPin
                    isActive={isActive}
                    showName={isActive} // Only show name for active pin
                    cityName={city.nameEn}
                    onClick={() => navigate(`/city/${city.id}`)}
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
