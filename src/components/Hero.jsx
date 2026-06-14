import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center bg-stone-900 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src={`${import.meta.env.BASE_URL}landing.jpg`}
                    alt="Ancient Egypt Background"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 25%' }}
                />
            </div>

            <div className="z-10 px-4 max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Click & Trace Logo"
                        className="h-20 md:h-32 mx-auto object-contain relative z-10"
                        style={{
                            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 24px rgba(0,0,0,0.6))',
                            WebkitFilter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 24px rgba(0,0,0,0.6))'
                        }}
                    />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-display text-5xl md:text-8xl mb-4 tracking-tighter"
                >
                    Click & Trace
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="font-sans text-lg md:text-2xl font-light tracking-wide text-stone-200"
                >
                    Tracing the forgotten cities of Ancient Egypt
                </motion.p>

                {/* Documentary Video Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="mt-8 flex justify-center"
                >
                    <a
                        href="https://youtu.be/6FhjqH4mdkI?si=PHZ9Bx6hDsIekiw_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-3.5 bg-egypt-terra text-white font-sans uppercase tracking-widest text-xs md:text-sm font-semibold rounded-full shadow-lg hover:bg-stone-100 hover:text-stone-900 hover:scale-105 active:scale-95 transition-all duration-300 group"
                        style={{
                            boxShadow: '0 4px 20px rgba(145, 74, 56, 0.4)'
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            viewBox="0 0 24 24" 
                            className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110"
                        >
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        Documentary
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 z-10 animate-bounce"
            >
                <span className="text-sm uppercase tracking-widest text-stone-400">Scroll to Explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
