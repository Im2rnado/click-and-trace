import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CityOverlay = ({ city }) => {
    if (!city) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={city.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 md:top-1/4 md:right-20 md:left-auto md:bottom-auto bg-white/95 dark:bg-stone-900/95 backdrop-blur-md p-6 rounded-lg shadow-2xl md:max-w-sm border-l-4 border-egypt-terra z-10 max-h-[45vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
                <div className="mb-2 flex items-baseline justify-between md:block">
                    <h2 className="text-3xl md:text-4xl font-display text-stone-800 dark:text-stone-100">{city.nameEn}</h2>
                    <span className="text-xl md:text-2xl text-egypt-terra font-serif ml-2 md:ml-0">{city.nameHieroglyph}</span>
                </div>

                <h3 className="text-base md:text-lg font-display italic text-stone-600 dark:text-stone-400 mb-3 md:mb-4">{city.descriptionShort}</h3>

                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4 md:mb-6 font-sans text-sm line-clamp-3 md:line-clamp-4">
                    {city.descriptionLong}
                </p>

                <Link
                    to={`/city/${city.id}`}
                    className="inline-block w-full md:w-auto text-center px-6 py-3 md:py-2 bg-stone-800 text-white text-sm uppercase tracking-wider hover:bg-egypt-terra transition-colors duration-300 rounded-md md:rounded-none"
                >
                    View More
                </Link>
            </motion.div>
        </AnimatePresence>
    );
};

export default CityOverlay;
