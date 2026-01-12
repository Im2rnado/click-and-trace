import React, { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';

const ScrollController = ({ children, numSteps, onStepChange }) => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        // Listen to scroll progress changes
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Divide progress into equal steps
            // e.g. 0.0 - 0.1 -> Index 0
            // 0.1 - 0.2 -> Index 1
            const totalSteps = numSteps || 1;
            const stepSize = 1 / totalSteps;

            let index = Math.floor(latest / stepSize);

            // Clamp index
            if (index < 0) index = 0;
            if (index >= totalSteps) index = totalSteps - 1;

            onStepChange(index);
        });

        return () => unsubscribe();
    }, [scrollYProgress, numSteps, onStepChange]);

    // Height = 100vh (sticky view) + (numSteps * 50vh or 100vh scroll distance)
    // Let's give 100vh scroll per city to make it leisurely
    return (
        <div
            ref={containerRef}
            style={{ height: `${(numSteps * 80) + 100}vh` }}
            className="relative bg-stone-100 dark:bg-stone-950"
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default ScrollController;
