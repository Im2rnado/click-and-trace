import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-400 py-8 text-center font-sans text-sm">
            <p>&copy; {new Date().getFullYear()} Click & Trace. Mass Communication Graduation Project.</p>
        </footer>
    );
};

export default Footer;
