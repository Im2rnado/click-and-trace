import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cities } from '../data/cities';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Interactive Slideshow Component with Smooth Transitions & Thumbnail Navigation
const SlideshowSection = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isFullscreen) {
                setIsFullscreen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullscreen]);

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="my-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-display mb-6 text-stone-850 text-center uppercase tracking-widest font-semibold border-b border-stone-200 pb-3">
                Photo Gallery Journey
            </h3>
            
            <div 
                className="relative aspect-[3/2] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl group cursor-zoom-in"
                onClick={() => setIsFullscreen(true)}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.35 }}
                        className="w-full h-full object-contain bg-stone-950"
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop';
                        }}
                    />
                </AnimatePresence>

                {/* Dark bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950/70 to-transparent pointer-events-none" />

                {/* Fullscreen Icon Overlay */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-stone-950/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 backdrop-blur-md border border-white/10 shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                </div>

                {/* Slide Info & Caption Overlay */}
                <div className="absolute bottom-4 left-6 right-6 z-10 pointer-events-none">
                    <p className="text-white text-sm font-sans tracking-wide drop-shadow font-light">
                        {images[currentIndex].alt || `Artifact discovery at Mit Rahina`}
                    </p>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-950/40 hover:bg-egypt-terra text-white backdrop-blur-md flex items-center justify-center transition-colors duration-300 shadow-lg border border-white/10 z-20"
                    title="Previous Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-950/40 hover:bg-egypt-terra text-white backdrop-blur-md flex items-center justify-center transition-colors duration-300 shadow-lg border border-white/10 z-20"
                    title="Next Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>

                {/* Live Counter */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-stone-950/80 backdrop-blur-md rounded-full text-xs text-stone-200 tracking-widest font-semibold border border-white/10 z-20">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Track */}
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto py-2 px-4 max-w-full no-scrollbar">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 shadow-sm ${
                            idx === currentIndex ? 'border-egypt-terra scale-105 shadow' : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                    >
                        <img 
                            src={img.src} 
                            alt={img.alt || `Thumb ${idx + 1}`} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop';
                            }}
                        />
                    </button>
                ))}
            </div>

            {/* FULLSCREEN LIGHTBOX */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={() => setIsFullscreen(false)}
                    >
                        {/* Close button */}
                        <button 
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 backdrop-blur-md"
                            onClick={(e) => { e.stopPropagation(); setIsFullscreen(false); }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Prev Button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md flex items-center justify-center transition-colors duration-300 z-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md flex items-center justify-center transition-colors duration-300 z-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>

                        {/* Main Lightbox Image */}
                        <div className="w-full h-full max-w-[90vw] md:max-w-7xl mx-auto flex items-center justify-center p-4 md:p-12 relative pointer-events-none">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
                                    onClick={(e) => e.stopPropagation()}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop';
                                    }}
                                />
                            </AnimatePresence>
                            
                            {/* Lightbox Caption */}
                            <div className="absolute bottom-6 md:bottom-12 left-0 right-0 text-center">
                                <p className="text-white/90 text-sm md:text-lg font-sans tracking-wide drop-shadow-md px-4">
                                    {images[currentIndex].alt || `Artifact discovery at Mit Rahina`}
                                </p>
                            </div>
                        </div>

                        {/* Lightbox Counter */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-xs md:text-sm text-stone-300 tracking-widest font-semibold border border-white/10 z-50">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Topic = () => {
    const { cityId, topicId } = useParams();
    const city = cities.find(c => c.id === cityId);
    const topic = (city?.topics || []).find(t => t.id === topicId);
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [topicId]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && lightboxImage) {
                setLightboxImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImage]);

    if (!city || !topic) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-stone-100">
                <h1 className="text-4xl font-display mb-4 text-stone-800">Topic Not Found</h1>
                <Link to="/" className="text-egypt-terra underline">Return Home</Link>
            </div>
        );
    }

    const hasSections = topic.sections && topic.sections.length > 0;

    return (
        <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
            <Header />

            {/* Back button header bar */}
            <div className="pt-28 pb-4 px-3 sm:px-6 md:px-8 max-w-5xl mx-auto w-full flex items-center justify-between gap-3 border-b border-stone-200">
                <Link 
                    to={`/city/${city.id}`}
                    className="text-stone-600 hover:text-egypt-terra transition-colors flex items-center gap-1.5 group text-xs sm:text-sm uppercase tracking-wider font-semibold whitespace-nowrap"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to {city.nameEn}
                </Link>
                <span className="text-xs uppercase tracking-widest text-stone-400 bg-stone-200/50 px-2 py-1 rounded whitespace-nowrap">
                    Featured Discovery
                </span>
            </div>


            <main className="flex-grow w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
                {/* Topic Header: Title */}
                <div className="mb-10">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-egypt-terra font-semibold text-sm uppercase tracking-wider block mb-2"
                    >
                        {topic.title.includes('Infographic') ? 'Infographic & Story' : 'Historical Exploration'}
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display text-stone-900 leading-tight"
                    >
                        {topic.title}
                    </motion.h1>
                </div>

                {/* Content Area */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-stone max-w-none"
                >
                    {hasSections ? (
                        topic.sections.map((section, idx) => {
                            switch (section.type) {
                                case 'heading':
                                    return (
                                        <h2 
                                            key={idx} 
                                            className="text-2xl md:text-3xl font-display text-stone-850 mt-12 mb-6 border-l-4 border-egypt-terra pl-4 leading-tight"
                                        >
                                            {section.content}
                                        </h2>
                                    );
                                case 'paragraph':
                                    // Split text by double newline to handle inner paragraphs cleanly
                                    return section.content.split('\n\n').map((paragraphText, pIdx) => (
                                        <p 
                                            key={`${idx}-${pIdx}`} 
                                            className="text-base md:text-lg leading-relaxed text-stone-700 mb-6 font-light text-justify"
                                            style={{ wordSpacing: '-0.02em' }}
                                        >
                                            {paragraphText}
                                        </p>
                                    ));
                                case 'image':
                                    if (section.isInfographic) {
                                        return (
                                            <div 
                                                key={idx}
                                                className="bg-stone-900 rounded-3xl p-4 md:p-8 shadow-2xl border border-stone-850 flex flex-col items-center justify-center overflow-hidden my-8 cursor-zoom-in group/img"
                                                onClick={() => setLightboxImage({ src: section.src, alt: section.alt || topic.title })}
                                            >
                                                <div className="w-full relative rounded-2xl overflow-hidden shadow-inner bg-stone-950/40 p-2">
                                                    <img 
                                                        src={section.src} 
                                                        alt={section.alt || topic.title} 
                                                        className="w-full h-auto object-contain mx-auto max-h-[85vh] transition-transform duration-700 group-hover/img:scale-[1.02]"
                                                        onError={(e) => {
                                                            e.target.src = 'https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div 
                                            key={idx}
                                            className="my-8 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-md max-w-3xl mx-auto group cursor-zoom-in"
                                            onClick={() => setLightboxImage({ src: section.src, alt: section.alt || topic.title })}
                                        >
                                            <div className="overflow-hidden bg-stone-200">
                                                <img 
                                                    src={section.src} 
                                                    alt={section.alt || topic.title} 
                                                    className="w-full h-auto object-cover max-h-[60vh] transition-transform duration-700 group-hover:scale-105"
                                                    onError={(e) => {
                                                        e.target.src = 'https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop';
                                                    }}
                                                />
                                            </div>
                                            {section.alt && (
                                                <div className="p-3 bg-stone-100 text-xs text-stone-500 font-sans tracking-wide italic text-center border-t border-stone-200">
                                                    {section.alt}
                                                </div>
                                            )}
                                        </div>
                                    );
                                case 'video_placeholder':
                                    return (
                                        <div 
                                            key={idx}
                                            className="my-8 aspect-video rounded-2xl overflow-hidden bg-stone-900 border border-stone-850 shadow-2xl flex flex-col items-center justify-center relative group max-w-3xl mx-auto"
                                        >
                                            {/* cinematic dark overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-stone-900/40 opacity-70 group-hover:opacity-65 transition-opacity duration-500" />
                                            
                                            {/* Pulsing play button */}
                                            <div className="relative z-10 flex flex-col items-center gap-4 text-center p-6">
                                                <div className="w-16 h-16 rounded-full bg-egypt-terra/20 border border-egypt-terra/40 flex items-center justify-center text-egypt-terra animate-pulse group-hover:scale-110 group-hover:bg-egypt-terra group-hover:text-white transition-all duration-500 shadow-lg cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                                                </div>
                                                <span className="text-stone-300 font-display italic tracking-widest text-xs uppercase group-hover:text-white transition-colors duration-300">
                                                    {section.placeholderText || 'waiting for you'}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                case 'slideshow':
                                    return (
                                        <SlideshowSection 
                                            key={idx} 
                                            images={section.images} 
                                        />
                                    );
                                default:
                                    return null;
                            }
                        })
                    ) : (
                        // Fallback fallback render for single description and single image
                        <>
                            <p 
                                className="text-base md:text-lg leading-relaxed text-stone-700 mb-6 font-light text-justify"
                                style={{ wordSpacing: '-0.02em' }}
                            >
                                {topic.description}
                            </p>
                            {topic.image && (
                                <div 
                                    className="bg-stone-900 rounded-3xl p-4 md:p-8 shadow-2xl border border-stone-850 flex flex-col items-center justify-center overflow-hidden my-8 cursor-zoom-in group/img"
                                    onClick={() => setLightboxImage({ src: topic.image, alt: topic.title })}
                                >
                                    <div className="w-full relative rounded-2xl overflow-hidden shadow-inner bg-stone-950/40 p-2">
                                        <img 
                                            src={topic.image} 
                                            alt={topic.title} 
                                            className="w-full h-auto object-contain mx-auto max-h-[85vh] transition-transform duration-700 group-hover/img:scale-[1.02]"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop';
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </motion.div>
            </main>

            {/* FULLSCREEN LIGHTBOX FOR STANDALONE IMAGES */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={() => setLightboxImage(null)}
                    >
                        {/* Close button */}
                        <button 
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 backdrop-blur-md"
                            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {/* Main Lightbox Image */}
                        <div className="w-full h-full max-w-[90vw] md:max-w-7xl mx-auto flex items-center justify-center p-4 md:p-12 relative pointer-events-none">
                            <motion.img
                                src={lightboxImage.src}
                                alt={lightboxImage.alt}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
                                onClick={(e) => e.stopPropagation()}
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop';
                                }}
                            />
                            
                            {/* Lightbox Caption */}
                            {lightboxImage.alt && (
                                <div className="absolute bottom-6 md:bottom-12 left-0 right-0 text-center">
                                    <p className="text-white/90 text-sm md:text-lg font-sans tracking-wide drop-shadow-md px-4">
                                        {lightboxImage.alt}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Topic;
