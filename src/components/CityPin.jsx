import React from 'react';

// This component is intended to be rendered into a DOM node for Mapbox markers
const CityPin = ({ isActive, isDay, onClick, cityName }) => {
    // isDay = true -> red (#ef4444), false -> silver (#C0C0C0)
    const baseColor = isDay ? 'bg-[#ef4444]' : 'bg-[#C0C0C0]';
    const glowColor = isDay ? 'bg-[#ef4444]/80' : 'bg-[#C0C0C0]/80';

    return (
        <div
            onClick={onClick}
            className={`group relative w-6 h-6 flex items-center justify-center cursor-pointer transition-all duration-500 ${isActive ? 'scale-150 z-50' : 'hover:scale-125 z-10'}`}
            style={{ transformOrigin: 'center bottom' }}
        >
            {/* City Name Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-stone-900/80 text-white text-xs px-2 py-1 rounded">
                {cityName}
            </div>

            {/* Pulse Effect */}
            <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${glowColor}`}></span>

            {/* Core Pin */}
            <span className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white shadow-md ${baseColor}`}></span>
        </div>
    );
};

export default CityPin;
