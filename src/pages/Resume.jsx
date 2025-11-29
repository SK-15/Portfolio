import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
    const experiences = [
        {
            id: 0,
            role: 'ML Engineer',
            company: 'Kitab',
            period: 'July 2025 – Present',
            description: 'Developed a cold-start recommendation engine utilizing a RAG system. Designed and implemented a book summarization process and set up a text-to-voice-over system using Eleven Labs.',
            skills: ['RAG', 'Recommendation Engine', 'Eleven Labs', 'Voice Cloning']
        },
        {
            id: 1,
            role: 'Generative AI Developer',
            company: 'DocuSwift',
            period: 'May 2024 - July 2025',
            description: 'Developed APIs using Azure Functions and deployed on Azure DevOps. Engineered RAG pipelines with Azure Cognitive Search and conducted prompt engineering for structured insights.',
            skills: ['Azure Functions', 'RAG', 'Azure Cognitive Search', 'DevOps']
        },
        {
            id: 2,
            role: 'Data Scientist',
            company: 'Soothsayer Analytics',
            period: 'Dec 2023 – May 2024',
            description: 'Engineered RAG pipelines on Azure AI Studio and implemented machine learning models. Conducted prompt engineering for document insight generation and optimized information retrieval using Azure Cognitive Search.',
            skills: ['Azure AI', 'RAG', 'Prompt Engineering', 'Machine Learning']
        },
        {
            id: 3,
            role: 'Data Scientist',
            company: 'Agastya Data Solutions',
            period: 'June 2022 – Nov 2023',
            description: 'Developed investment strategies and fintech dashboards. Optimized algorithms to reduce processing time by 50% and fine-tuned LLMs for consistent outputs.',
            skills: ['Python', 'Fintech', 'LLM Fine-tuning', 'Visualization']
        }
    ];

    const education = [
        {
            id: 1,
            degree: 'Diploma in Programming',
            school: 'Indian Institute of Technology, Madras',
            period: '2021 – 2022'
        },
        {
            id: 2,
            degree: 'B.Sc (Hons) in Mathematics',
            school: 'Shaheed Bhagat Singh College, University of Delhi',
            period: '2016 – 2019'
        }
    ];


    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                >
                    System <span className="text-neon-green">Logs</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center mb-8">
                            <Briefcase className="text-neon-green mr-3" size={24} />
                            <h2 className="text-2xl font-orbitron font-bold text-white">Experience</h2>
                        </div>

                        <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-dark-bg border-2 border-neon-green group-hover:bg-neon-green group-hover:shadow-neon transition-all duration-300" />

                                    <div className="bg-dark-surface/50 p-6 rounded-lg border border-white/5 hover:border-neon-green/30 transition-colors duration-300">
                                        <span className="text-neon-green text-sm font-mono mb-2 block">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-gray-400 mb-3">{exp.company}</h4>
                                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map(skill => (
                                                <span key={skill} className="px-2 py-1 text-xs font-mono text-neon-green bg-neon-green/10 rounded border border-neon-green/20">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center mb-8">
                            <GraduationCap className="text-neon-green mr-3" size={24} />
                            <h2 className="text-2xl font-orbitron font-bold text-white">Education</h2>
                        </div>

                        <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-dark-bg border-2 border-neon-green group-hover:bg-neon-green group-hover:shadow-neon transition-all duration-300" />

                                    <div className="bg-dark-surface/50 p-6 rounded-lg border border-white/5 hover:border-neon-green/30 transition-colors duration-300">
                                        <span className="text-neon-green text-sm font-mono mb-2 block">{edu.period}</span>
                                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                        <h4 className="text-gray-400">{edu.school}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
