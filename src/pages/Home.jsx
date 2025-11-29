import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-2">
                        Saurav Kumar
                    </h1>
                    <h2 className="text-neon-green font-orbitron text-sm md:text-base tracking-[0.2em] mb-6 uppercase">
                        AUTOMATION & INTELLIGENCE
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Leveraging Generative AI to automate workflows and create predictive systems. Full-stack integration of Machine Learning models into real-world applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/projects" className="group relative px-8 py-3 bg-neon-green/10 border border-neon-green/50 text-neon-green font-orbitron font-bold tracking-wider hover:bg-neon-green hover:text-black transition-all duration-300 overflow-hidden">
                            <span className="relative z-10 flex items-center">
                                View Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </span>
                            <div className="absolute inset-0 bg-neon-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link to="/resume" className="px-8 py-3 border border-white/10 text-white font-orbitron font-bold tracking-wider hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                            Resume
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
