import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import caseChatImg from '../assets/casechat.png';
import caseSearchImg from '../assets/casesearch.png';
import fundamentalInvestingImg from '../assets/fundamental_investing.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Case Chat | Docuswift',
            description: 'AI-powered chat system for legal documents using RAG pipeline on Azure Cognitive Search. Features optimized information extraction with curated prompts.',
            tags: ['Azure', 'RAG', 'LLM', 'Python'],
            image: caseChatImg,
            github: '#',
            demo: '#'
        },
        {
            id: 2,
            title: 'Case Search | DocuSwift',
            description: 'Legal search engine for 5 lakh+ Indian judgments. Uses RAG and fine-tuned LLMs for summarization and precise case retrieval.',
            tags: ['Azure Cognitive Search', 'Fine-tuning', 'React', 'AI'],
            image: caseSearchImg,
            github: '#',
            demo: '#'
        },
        {
            id: 3,
            title: 'Fundamental Investing with AI',
            description: 'Investment strategy application analyzing technical indicators and fundamental data. Filed a US patent for this innovative concept.',
            tags: ['Fintech', 'Machine Learning', 'Data Analysis'],
            image: fundamentalInvestingImg,
            github: '#',
            demo: '#'
        }
    ];

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Portfolio</p>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-ink">
                        Featured Projects
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-bg-card rounded-xl overflow-hidden border border-rule shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-ink-muted text-sm mb-4 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2.5 py-0.5 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/15">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-2 border-t border-rule">
                                    <a href={project.github} className="flex items-center text-xs text-ink-muted hover:text-ink transition-colors font-medium">
                                        <Github size={14} className="mr-1.5" /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center text-xs text-accent hover:text-accent-dark transition-colors font-medium">
                                        <ExternalLink size={14} className="mr-1.5" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
