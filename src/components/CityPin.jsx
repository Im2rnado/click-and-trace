import React from 'react';

// This component is intended to be rendered into a DOM node for Mapbox markers
const CityPin = ({ isActive, onClick, cityName, showName }) => {
    return (
        <div
            onClick={onClick}
            className={`relative flex flex-col items-center justify-center cursor-pointer transition-all duration-500 z-10`}
            style={{ width: '48px', height: '48px', overflow: 'visible' }}
        >
            {/* Pulse glow ring when active */}
            {isActive && (
                <span className="absolute inset-0 rounded-full animate-ping"
                    style={{ background: 'rgba(145, 74, 56, 0.4)' }}
                />
            )}

            {/* Logo pin */}
            <img
                src={`${import.meta.env.BASE_URL}bin_logo.png`}
                alt={cityName}
                style={{
                    width: '36px',
                    height: '36px',
                    objectFit: 'contain',
                    filter: isActive
                        ? 'drop-shadow(0 0 6px rgba(145,74,56,0.9)) drop-shadow(0 2px 4px rgba(0,0,0,0.6))'
                        : 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                    transition: 'all 0.4s ease',
                }}
            />

            {/* City Name — only visible on the active city */}
            {showName && (
                <div className="absolute top-full whitespace-nowrap text-stone-900 font-bold text-base drop-shadow-[0_0_8px_rgba(255,255,255,1)] pointer-events-none z-20 bg-white/50 px-2 py-0.5 rounded-md backdrop-blur-sm mt-1 border border-stone-200">
                    {cityName}
                </div>
            )}
        </div>
    );
};

export default CityPin;
