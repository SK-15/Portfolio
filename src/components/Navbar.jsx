import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code, User, FileText, BookOpen } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/', icon: <User size={18} /> },
        { name: 'Projects', path: '/projects', icon: <Code size={18} /> },
        { name: 'Resume', path: '/resume', icon: <FileText size={18} /> },
        { name: 'Blogs', path: '/blogs', icon: <BookOpen size={18} /> },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-green to-emerald-600 flex items-center justify-center text-black font-bold font-orbitron group-hover:shadow-neon transition-all duration-300">
                            SK
                        </div>
                        <span className="text-white font-orbitron font-bold text-xl tracking-wider group-hover:text-neon-green transition-colors">
                            AI Portfolio
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                                    ? 'text-neon-green'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-5 left-0 right-0 h-0.5 bg-neon-green shadow-neon"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-dark-surface border-b border-white/5"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-3 ${location.pathname === link.path
                                    ? 'text-neon-green bg-white/5'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
