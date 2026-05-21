import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ScrollController from '../components/ScrollController';
import MapExperience from '../components/MapExperience';
import CityOverlay from '../components/CityOverlay';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { cities } from '../data/cities';

const Home = () => {
    const location = useLocation();
    const [activeCityIndex, setActiveCityIndex] = useState(-1);

    useEffect(() => {
        const comingFromCity = sessionStorage.getItem('comingFromCityPage') === 'true';
        const lastIndexStr = sessionStorage.getItem('lastActiveCityIndex');
        
        let targetIndex = location.state?.activeCityIndex;
        if (targetIndex === undefined && comingFromCity && lastIndexStr !== null) {
            targetIndex = parseInt(lastIndexStr, 10);
        }
        
        sessionStorage.removeItem('comingFromCityPage');

        if (targetIndex !== undefined && targetIndex >= -1) {
            // Delay slightly to ensure browser has rendered and scroll heights are ready
            const timer = setTimeout(() => {
                const y = window.innerHeight * (2.2 + 0.8 * targetIndex);
                window.scrollTo({
                    top: y,
                    behavior: 'auto'
                });
                setActiveCityIndex(targetIndex);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [location.state]);

    const handleStepChange = (index) => {
        setActiveCityIndex(index);
        sessionStorage.setItem('lastActiveCityIndex', index);
    };

    return (
        <main className="bg-stone-50 text-stone-900">
            <Header />
            <Hero />
            <ScrollController numSteps={cities.length} onStepChange={handleStepChange}>
                <div className="relative w-full h-full">
                    <MapExperience activeCityIndex={activeCityIndex} />

                    {/* Overlay Container - Abs Positioned over Map */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Wrapper allows pointer events to fall through to map pins */}
                        <div className="pointer-events-none w-full h-full">
                            <CityOverlay city={cities[activeCityIndex]} />
                        </div>
                    </div>
                </div>
            </ScrollController>
            <Footer />
        </main>
    );
};

export default Home;
