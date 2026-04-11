import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code, User, FileText, BookOpen, Download } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    const isMainPage = location.pathname === '/';

    // Track active section via IntersectionObserver on main page
    useEffect(() => {
        if (!isMainPage) return;

        const sections = ['home', 'resume', 'projects'];
        const observers = [];

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(callback, {
                rootMargin: '-40% 0px -55% 0px',
                threshold: 0,
            });
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, [isMainPage]);

    const scrollToSection = (sectionId) => {
        setIsOpen(false);
        if (isMainPage) {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            // Wait for navigation + render, then scroll
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        }
    };

    const links = [
        { name: 'Home', sectionId: 'home', icon: <User size={16} /> },
        { name: 'Resume', sectionId: 'resume', icon: <FileText size={16} /> },
        { name: 'Projects', sectionId: 'projects', icon: <Code size={16} /> },
        { name: 'Blogs', path: '/blogs', icon: <BookOpen size={16} /> },
    ];

    const isActive = (link) => {
        if (link.path) return location.pathname.startsWith(link.path);
        return isMainPage && activeSection === link.sectionId;
    };

    return (
        <nav className="relative sticky top-0 z-50 flex items-center justify-between gap-4 px-5 sm:px-8 lg:px-10 py-4 sm:py-5 border-b border-rule bg-bg">
            <button
                onClick={() => scrollToSection('home')}
                className="group shrink-0 bg-transparent border-none cursor-pointer p-0"
            >
                <span className="font-display text-[17px] sm:text-lg font-semibold text-ink tracking-tight">
                    Saura<span className="text-accent">v</span> Kumar
                </span>
            </button>

            <div className="hidden md:flex items-center gap-8 lg:gap-10">
                {links.map((link) => (
                    link.path ? (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative flex items-center gap-1.5 text-[13px] font-normal tracking-wide transition-colors duration-200 pb-0.5 ${
                                isActive(link) ? 'text-ink' : 'text-ink-soft hover:text-ink'
                            }`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                            {isActive(link) && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                                />
                            )}
                        </Link>
                    ) : (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.sectionId)}
                            className={`relative flex items-center gap-1.5 text-[13px] font-normal tracking-wide transition-colors duration-200 pb-0.5 bg-transparent border-none cursor-pointer ${
                                isActive(link) ? 'text-ink' : 'text-ink-soft hover:text-ink'
                            }`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                            {isActive(link) && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                                />
                            )}
                        </button>
                    )
                ))}
            </div>

            <a
                href="/Portfolio/Saurav_Kumar_Resume.pdf"
                download="Saurav_Kumar_Resume.pdf"
                className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-bg bg-ink px-[18px] py-2 rounded-sm tracking-wide transition-colors duration-200 hover:bg-accent shrink-0"
            >
                <Download size={14} />
                Resume
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
                            link.path ? (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors ${
                                        isActive(link)
                                            ? 'text-accent bg-accent-light/80'
                                            : 'text-ink-soft hover:text-ink hover:bg-bg-warm'
                                    }`}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Link>
                            ) : (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.sectionId)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors bg-transparent border-none cursor-pointer text-left ${
                                        isActive(link)
                                            ? 'text-accent bg-accent-light/80'
                                            : 'text-ink-soft hover:text-ink hover:bg-bg-warm'
                                    }`}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </button>
                            )
                        ))}
                        <a
                            href="/Portfolio/Saurav_Kumar_Resume.pdf"
                            download="Saurav_Kumar_Resume.pdf"
                            className="flex items-center justify-center gap-2 mt-2 py-2.5 text-sm font-medium text-bg bg-ink rounded-sm hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <Download size={14} />
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
