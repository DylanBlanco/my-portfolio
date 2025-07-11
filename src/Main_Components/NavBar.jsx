import React, { useState } from 'react';
import '../CSS/Nav.css'

const Navbar = () => {
    // LOGICA --------------------------------------------------------------------
    const [activeTab, setActiveTab] = useState('Home');

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Biografia', href: '#biografia' },
        { name: 'Progetti', href: '#progetti' }
    ];

    // TEMPLATE ------------------------------------------------------------------
    return (
        <nav className="bg-white/65 backdrop-blur-2xs shadow-lg rounded-full">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-stone-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DB</span>
                </div>
                <div className="text-gray-800">
                    <div className="font-bold text-stone-500 text-sm">DYLAN</div>
                    <div className="font-bold text-gray-800 text-xs">BLANCO</div>
                </div>
                </div>

                {/*      */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveTab(item.name)}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                            activeTab === item.name
                            ? 'text-stone-500'
                            : 'text-gray-700 hover:text-stone-500'
                        }`}
                        >
                        {item.name}
                        {activeTab === item.name && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-500 rounded-full"></div>
                        )}
                        </a>
                    ))}
                </div>

                {/* Contact Button */}
                <button className="bg-stone-500 hover:bg-stone-600 text-white rounded-full text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                    Contattami
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                        <button className="text-gray-700 hover:text-stone-500 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;