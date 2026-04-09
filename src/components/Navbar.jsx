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
        <nav className="relative sticky top-0 z-50 flex items-center justify-between gap-4 px-5 sm:px-8 lg:px-10 py-4 sm:py-5 border-b border-rule bg-bg">
            <Link to="/" className="group shrink-0" onClick={() => setIsOpen(false)}>
                <span className="font-display text-[17px] sm:text-lg font-semibold text-ink tracking-tight">
                    Saura<span className="text-accent">v</span> Kumar
                </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 lg:gap-10">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`relative flex items-center gap-1.5 text-[13px] font-normal tracking-wide transition-colors duration-200 pb-0.5 ${
                            location.pathname === link.path
                                ? 'text-ink'
                                : 'text-ink-soft hover:text-ink'
                        }`}
                    >
                        {link.icon}
                        <span>{link.name}</span>
                        {location.pathname === link.path && (
                            <motion.div
                                layoutId="nav-underline"
                                className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                            />
                        )}
                    </Link>
                ))}
            </div>

            <a
                href="mailto:contact@example.com"
                className="hidden md:inline-flex text-[13px] font-medium text-bg bg-ink px-[18px] py-2 rounded-sm tracking-wide transition-colors duration-200 hover:bg-accent shrink-0"
            >
                Get in touch
            </a>

            <div className="md:hidden flex items-center">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-ink-soft hover:text-ink p-1 -mr-1 transition-colors"
                    aria-expanded={isOpen}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-rule shadow-card"
                >
                    <div className="px-4 py-3 space-y-0.5">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors ${
                                    location.pathname === link.path
                                        ? 'text-accent bg-accent-light/80'
                                        : 'text-ink-soft hover:text-ink hover:bg-bg-warm'
                                }`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))}
                        <a
                            href="mailto:contact@example.com"
                            className="flex items-center justify-center mt-2 py-2.5 text-sm font-medium text-bg bg-ink rounded-sm hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Get in touch
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
