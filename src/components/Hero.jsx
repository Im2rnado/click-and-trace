import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center bg-stone-900 text-white overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2070&auto=format&fit=crop"
                    alt="Ancient Egypt Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="z-10 px-4 max-w-4xl mx-auto w-full">
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
