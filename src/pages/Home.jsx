import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,rgba(106,90,205,0.07)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(106,90,205,0.05)_0%,transparent_50%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    {/* Pill badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-6 border border-accent/20">
                        ML Engineer · AI Developer
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-ink mb-4 leading-tight">
                        Saurav Kumar
                    </h1>
                    <p className="text-ink-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Leveraging Generative AI to automate workflows and create predictive systems. Full-stack integration of Machine Learning models into real-world applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/projects"
                            className="group inline-flex items-center px-7 py-3 rounded-lg bg-accent text-white font-semibold text-sm shadow-card hover:bg-accent-dark transition-all duration-300 hover:shadow-card-hover"
                        >
                            View Projects
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Link>

                        <Link
                            to="/resume"
                            className="inline-flex items-center px-7 py-3 rounded-lg border border-gray-300 text-ink font-semibold text-sm hover:bg-bg-muted hover:border-gray-400 transition-all duration-300"
                        >
                            Resume
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
