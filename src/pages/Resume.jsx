import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

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
            period: 'May 2024 – July 2025',
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
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Background</p>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-ink">
                        Experience &amp; Education
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-8">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Briefcase className="text-accent" size={16} />
                            </div>
                            <h2 className="text-xl font-semibold text-ink">Experience</h2>
                        </div>

                        <div className="space-y-6 border-l-2 border-gray-200 ml-3 pl-8 relative">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-bg-card border-2 border-accent/50 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300" />

                                    <div className="bg-bg-card p-5 rounded-xl border border-gray-200 shadow-card group-hover:shadow-card-hover group-hover:border-accent/25 transition-all duration-300">
                                        <span className="text-accent text-xs font-semibold tracking-wide mb-1.5 block">{exp.period}</span>
                                        <h3 className="text-base font-semibold text-ink mb-0.5">{exp.role}</h3>
                                        <h4 className="text-ink-muted text-sm mb-3">{exp.company}</h4>
                                        <p className="text-ink-muted text-sm mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.skills.map(skill => (
                                                <span key={skill} className="px-2.5 py-0.5 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/15">
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
                        <div className="flex items-center gap-2.5 mb-8">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <GraduationCap className="text-accent" size={16} />
                            </div>
                            <h2 className="text-xl font-semibold text-ink">Education</h2>
                        </div>

                        <div className="space-y-6 border-l-2 border-gray-200 ml-3 pl-8 relative">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-bg-card border-2 border-accent/50 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300" />

                                    <div className="bg-bg-card p-5 rounded-xl border border-gray-200 shadow-card group-hover:shadow-card-hover group-hover:border-accent/25 transition-all duration-300">
                                        <span className="text-accent text-xs font-semibold tracking-wide mb-1.5 block">{edu.period}</span>
                                        <h3 className="text-base font-semibold text-ink mb-0.5">{edu.degree}</h3>
                                        <h4 className="text-ink-muted text-sm">{edu.school}</h4>
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
