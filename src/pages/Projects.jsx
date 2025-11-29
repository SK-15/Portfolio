import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

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
            github: '#', // Add your GitHub link here
            demo: '#'
        },
        {
            id: 2,
            title: 'Case Search | DocuSwift',
            description: 'Legal search engine for 5 lakh+ Indian judgments. Uses RAG and fine-tuned LLMs for summarization and precise case retrieval.',
            tags: ['Azure Cognitive Search', 'Fine-tuning', 'React', 'AI'],
            image: caseSearchImg,
            github: '#', // Add your GitHub link here
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
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                >
                    Featured <span className="text-neon-green">Projects</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-dark-surface rounded-xl overflow-hidden border border-white/5 hover:border-neon-green/50 transition-all duration-300 hover:shadow-neon"
                        >
                            {/* Image Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold font-orbitron text-white mb-2 group-hover:text-neon-green transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-xs font-mono text-neon-green bg-neon-green/10 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <a href={project.github} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} className="mr-2" /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center text-sm text-neon-green hover:text-white transition-colors">
                                        <ExternalLink size={16} className="mr-2" /> Live Demo
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
