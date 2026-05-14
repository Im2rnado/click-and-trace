import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
                <Link to="/">
                    <img 
                        src={`${import.meta.env.BASE_URL}logo.png`} 
                        alt="Click & Trace Logo" 
                        className="h-10 object-contain hover:opacity-80 transition-opacity"
                        style={{
                            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))'
                        }}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
