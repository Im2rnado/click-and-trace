import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cities } from '../data/cities';
import Footer from '../components/Footer';
import Header from '../components/Header';

const City = () => {
    const { id } = useParams();
    const city = cities.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        sessionStorage.setItem('comingFromCityPage', 'true');
    }, [id]);

    if (!city) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-stone-100">
                <h1 className="text-4xl font-display mb-4">City Not Found</h1>
                <Link to="/" className="text-egypt-terra underline">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
            <Header />
            {/* Header / Hero for City */}
            <header className="relative h-[60vh] bg-stone-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-stone-900 flex justify-center items-center">
                    <img
                        src={city.image}
                        alt={city.nameEn}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/60"></div>
                </div>

                <div className="z-10 text-center text-white p-4 w-full px-4 mt-16">
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-display mb-2 tracking-tighter"
                        style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                    >
                        {city.nameEn}
                    </motion.h1>
                </div>

                <Link 
                    to="/" 
                    state={{ activeCityIndex: cities.findIndex(c => c.id === city.id) }}
                    className="absolute top-24 left-6 md:top-24 md:left-8 text-white/90 hover:text-white transition-colors flex items-center gap-2 group bg-stone-900/50 p-2 rounded-full md:bg-transparent md:p-0 z-20"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> <span className="hidden md:inline">Back to Map</span>
                </Link>
            </header>

            <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="mb-8 md:mb-12 border-l-4 border-egypt-terra pl-4 md:pl-6">
                    <h2 className="text-xl md:text-3xl font-display italic text-stone-600">{city.descriptionShort}</h2>
                </div>

                <article className="prose prose-lg prose-stone max-w-none mb-12 md:mb-16">
                    <p className="text-lg md:text-xl leading-relaxed mb-6 font-light text-justify" style={{ wordSpacing: '-0.05em' }}>{city.descriptionLong}</p>
                </article>

                {/* Featured Discoveries (Topics) Section */}
                {city.topics && city.topics.length > 0 && (
                    <section className="mb-12 md:mb-16">
                        <h3 className="text-2xl font-display mb-6 border-b border-stone-200 pb-2">Featured Discoveries</h3>
                        <div className="flex flex-col gap-4">
                            {city.topics.map((topic, index) => (
                                <Link
                                    key={topic.id}
                                    to={`/city/${city.id}/topic/${topic.id}`}
                                    className="block group relative rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 bg-white"
                                >
                                    <div className="flex items-stretch min-h-[120px]">
                                        {/* Left: number badge + text */}
                                        <div className="flex-1 flex items-center gap-4 px-5 py-5">
                                            <span className="text-3xl md:text-4xl font-display text-stone-200 group-hover:text-egypt-terra/30 transition-colors duration-300 select-none leading-none flex-shrink-0 w-8 text-center">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-base md:text-lg font-display text-stone-800 group-hover:text-egypt-terra transition-colors duration-300 leading-snug">
                                                    {topic.title}
                                                </h4>
                                                <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-egypt-terra/60 transition-colors duration-300 flex items-center gap-1">
                                                    Explore
                                                    <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">→</span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Right: image with gradient */}
                                        {topic.image && (
                                            <div className="w-32 md:w-44 flex-shrink-0 relative overflow-hidden">
                                                <img
                                                    src={topic.image}
                                                    alt={topic.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                                                />
                                                {/* left-to-right fade into card */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/10 to-transparent pointer-events-none" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom accent line on hover */}
                                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-egypt-terra transition-all duration-500 rounded-full" />
                                </Link>
                            ))}
                        </div>
                    </section>
                )}


                {/* External Links */}
                {city.externalLinks && city.externalLinks.length > 0 && (
                    <section>
                        <h3 className="text-2xl font-display mb-6 border-b border-stone-200 pb-2">Further Reading</h3>
                        <ul className="space-y-4">
                            {city.externalLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-egypt-terra hover:text-red-900 transition-colors font-medium group w-fit"
                                    >
                                        <span className="w-2 h-2 bg-egypt-terra rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                                        {link.label}
                                        <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default City;
