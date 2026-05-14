import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-400 py-6 px-4 md:px-12 font-sans text-sm relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 relative min-h-[40px]">
                <p className="text-center">&copy; {new Date().getFullYear()} Click & Trace. Mass Communication Graduation Project.</p>
                <div className="flex gap-4 items-center md:absolute right-0">
                    <a href="https://www.instagram.com/click_and_trace?igsh=cjc1NHlqMWxxcDlp&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="https://www.tiktok.com/@clickandtrace?_r=1&_t=ZS-96LqzJFB0hb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
