import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cities } from '../data/cities';
import Footer from '../components/Footer';

const City = () => {
    const { id } = useParams();
    const city = cities.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
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
            {/* Header / Hero for City */}
            <header className="relative h-[60vh] bg-stone-900 flex items-center justify-center overflow-hidden">
                {/* Placeholder Texture/Image */}
                <div className="absolute inset-0 opacity-40">
                    <img
                        src={`https://images.unsplash.com/photo-1548625361-8889aa360a26?q=80&w=2070&auto=format&fit=crop`} // Using a reliable Egypt texture
                        alt={city.nameEn}
                        className="w-full h-full object-cover grayscale"
                        onError={(e) => e.target.style.display = 'none'} // Fallback if unsplash fails
                    />
                    <div className="absolute inset-0 bg-stone-900/50"></div>
                </div>

                <div className="z-10 text-center text-white p-4 w-full px-4">
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-display mb-2 tracking-tighter"
                    >
                        {city.nameEn}
                    </motion.h1>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl md:text-5xl text-egypt-terra font-serif mt-4"
                    >
                        {city.nameHieroglyph}
                    </motion.div>
                </div>

                <Link to="/" className="absolute top-6 left-6 md:top-8 md:left-8 text-white/90 hover:text-white transition-colors flex items-center gap-2 group bg-stone-900/50 p-2 rounded-full md:bg-transparent md:p-0">
                    <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> <span className="hidden md:inline">Back to Map</span>
                </Link>
            </header>

            <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="mb-8 md:mb-12 border-l-4 border-egypt-terra pl-4 md:pl-6">
                    <h2 className="text-xl md:text-3xl font-serif italic text-stone-600">{city.descriptionShort}</h2>
                </div>

                <article className="prose prose-lg prose-stone max-w-none mb-12 md:mb-16">
                    <p className="text-lg md:text-xl leading-relaxed mb-6 font-light">{city.descriptionLong}</p>

                    <p>
                        The history of {city.nameEn} stretches back thousands of years. As one explores its ruins and records,
                        a picture emerges of a vibrant center of culture, religion, and daily life in Ancient Egypt.
                        Archaeological excavations have revealed temples, housing districts, and artifacts that tell the story
                        of its rise and eventual decline.
                    </p>
                    <p>
                        Today, it stands as a testament to the architectural and administrative prowess of the Pharaonic era,
                        inviting scholars and visitors alike to piece together the fragments of its past.
                    </p>
                </article>

                {/* Video Section */}
                <section className="mb-16">
                    <h3 className="text-2xl font-display mb-6 border-b border-stone-200 pb-2">Multimedia Journey</h3>
                    <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            src={city.videoUrl}
                            title={`${city.nameEn} Video`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

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
