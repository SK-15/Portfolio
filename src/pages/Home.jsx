import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_25%,rgba(107,140,110,0.06)_0%,transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_75%,rgba(200,169,126,0.05)_0%,transparent_45%)] pointer-events-none" />

            <div className="relative z-10 max-w-[900px] mx-auto px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row items-center gap-10 sm:gap-14"
                >
                    {/* Profile photo */}
                    <div className="shrink-0">
                        <img
                            src={`${import.meta.env.BASE_URL}profile.jpg`}
                            alt="Saurav Kumar"
                            className="w-44 h-52 sm:w-52 sm:h-64 object-cover rounded-xl border border-rule shadow-card"
                        />
                    </div>

                    {/* Text content */}
                    <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-3 mb-6 flex-wrap">
                            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-accent bg-accent-light px-2.5 py-1 rounded-sm">
                                Portfolio
                            </span>
                            <span className="w-1 h-1 rounded-full bg-rule hidden sm:block" aria-hidden />
                            <span className="text-[13px] text-ink-muted font-normal">Generative AI · Machine Learning</span>
                        </div>

                        <h1 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-semibold text-ink tracking-tight leading-[1.12] mb-5">
                            Building scalable, reliable AI systems for <em className="not-italic text-accent">real-world</em> workflows
                        </h1>

                        <p className="text-[16px] sm:text-[18px] font-light text-ink-soft leading-relaxed mb-8 pl-4 border-l-[3px] border-highlight">
                            Leveraging Generative AI to automate workflows and ship predictive systems — from RAG pipelines to production APIs.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <Link
                                to="/projects"
                                className="group inline-flex items-center justify-center px-7 py-2.5 rounded-sm bg-ink text-bg text-[13px] font-medium tracking-wide transition-colors duration-200 hover:bg-accent"
                            >
                                View projects
                                <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
                            </Link>

                            <Link
                                to="/resume"
                                className="inline-flex items-center justify-center px-7 py-2.5 rounded-sm border border-rule text-ink text-[13px] font-medium bg-bg hover:bg-bg-warm transition-colors duration-200"
                            >
                                Résumé
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
