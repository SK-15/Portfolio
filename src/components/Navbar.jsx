import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code, User, FileText, BookOpen } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/', icon: <User size={16} /> },
        { name: 'Projects', path: '/projects', icon: <Code size={16} /> },
        { name: 'Resume', path: '/resume', icon: <FileText size={16} /> },
        { name: 'Blogs', path: '/blogs', icon: <BookOpen size={16} /> },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-bg/90 backdrop-blur-lg border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold text-sm font-sans shadow-sm group-hover:shadow-accent transition-all duration-300">
                            SK
                        </div>
                        <span className="text-ink font-display font-semibold text-lg group-hover:text-accent transition-colors duration-300">
                            Saurav Kumar
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative flex items-center space-x-1.5 text-sm font-medium transition-colors duration-300 pb-0.5 ${location.pathname === link.path
                                        ? 'text-accent'
                                        : 'text-ink-muted hover:text-ink'
                                    }`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-5 left-0 right-0 h-0.5 bg-accent rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-ink-muted hover:text-ink focus:outline-none transition-colors"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden bg-bg-card border-b border-gray-200"
                >
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-accent bg-accent/8'
                                        : 'text-ink-muted hover:text-ink hover:bg-bg-muted'
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
