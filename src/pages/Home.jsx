import React, { useState } from 'react';
import Hero from '../components/Hero';
import ScrollController from '../components/ScrollController';
import MapExperience from '../components/MapExperience';
import CityOverlay from '../components/CityOverlay';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { cities } from '../data/cities';

const Home = () => {
    const [activeCityIndex, setActiveCityIndex] = useState(-1);

    return (
        <main className="bg-stone-50 text-stone-900">
            <Header />
            <Hero />
            <ScrollController numSteps={cities.length} onStepChange={setActiveCityIndex}>
                <div className="relative w-full h-full">
                    <MapExperience activeCityIndex={activeCityIndex} />

                    {/* Overlay Container - Abs Positioned over Map */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Pointer events auto for overlay to allow clicking buttons */}
                        <div className="pointer-events-auto w-full h-full">
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
