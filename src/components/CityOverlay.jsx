import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CityOverlay = ({ city }) => {
    if (!city) return null;

    return (
        <AnimatePresence mode="wait">

            {/* ── MOBILE ONLY: Compact horizontal card ── */}
            <motion.div
                key={`mobile-${city.id}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.35 }}
                className="md:hidden absolute bottom-4 left-4 right-4 z-10"
            >
                <div className="bg-stone-900/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border-l-4 border-egypt-terra flex items-center gap-3 p-3">
                    {city.image && (
                        <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                            <img src={city.image} alt={city.nameEn} className="w-full h-full object-cover" />
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-display text-stone-100 truncate">{city.nameEn}</h2>
                        <p className="text-xs text-stone-400 italic truncate">{city.descriptionShort}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${city.lat},${city.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-stone-800 text-stone-200 hover:bg-egypt-terra hover:text-white transition-colors"
                            title="View on Google Maps"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </a>
                        <Link
                            to={`/city/${city.id}`}
                            className="px-4 py-2 bg-stone-700 text-white text-xs uppercase tracking-wider rounded-xl hover:bg-egypt-terra transition-colors duration-300 whitespace-nowrap"
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* ── DESKTOP ONLY: Exact last committed card style ── */}
            <motion.div
                key={`desktop-${city.id}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block absolute top-1/4 right-20 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md p-6 rounded-lg shadow-2xl max-w-sm border-l-4 border-egypt-terra z-10"
            >
                {city.image && (
                    <div className="mb-4 w-full h-40 overflow-hidden rounded-md shadow-inner">
                        <img
                            src={city.image}
                            alt={city.nameEn}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                )}

                <div className="mb-2">
                    <h2 className="text-4xl font-display text-stone-800 dark:text-stone-100">{city.nameEn}</h2>
                </div>

                <h3 className="text-lg font-display italic text-stone-600 dark:text-stone-400 mb-4">{city.descriptionShort}</h3>

                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6 font-sans text-sm line-clamp-4">
                    {city.descriptionLong}
                </p>

                <div className="flex items-center justify-between gap-4">
                    <Link
                        to={`/city/${city.id}`}
                        className="inline-block flex-1 text-center px-6 py-2 bg-stone-800 text-white text-sm uppercase tracking-wider hover:bg-egypt-terra transition-colors duration-300"
                    >
                        View More
                    </Link>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${city.lat},${city.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-stone-200 dark:bg-stone-800 rounded-full text-stone-800 dark:text-stone-200 hover:bg-egypt-terra hover:text-white dark:hover:bg-egypt-terra transition-colors shadow-sm"
                        title="View on Google Maps"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </a>
                </div>
            </motion.div>

        </AnimatePresence>
    );
};

export default CityOverlay;
