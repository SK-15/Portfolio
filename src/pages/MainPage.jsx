import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

import caseChatImg from '../assets/casechat.png';
import caseSearchImg from '../assets/casesearch.png';
import fundamentalInvestingImg from '../assets/fundamental_investing.png';

/* ─── Home Section ──────────────────────────────────────────────────── */
const HomeSection = () => (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_25%,rgba(45,90,142,0.06)_0%,transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_75%,rgba(232,168,56,0.05)_0%,transparent_45%)] pointer-events-none" />

        <div className="relative z-10 max-w-[760px] mx-auto px-5 sm:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <div className="inline-flex items-center justify-center gap-3 mb-8 text-left sm:text-center flex-wrap">
                    <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-accent bg-accent-light px-2.5 py-1 rounded-sm">
                        Portfolio
                    </span>
                    <span className="w-1 h-1 rounded-full bg-rule hidden sm:block" aria-hidden />
                    <span className="text-[13px] text-ink-muted font-normal">Generative AI · Machine Learning</span>
                </div>

                <h1 className="font-display text-[clamp(2rem,6vw,3.35rem)] font-semibold text-ink tracking-tight leading-[1.12] mb-6">
                    Building scalable, reliable AI systems for <em className="not-italic text-accent">real-world</em> workflows
                </h1>

                <p className="text-[17px] sm:text-[19px] font-light text-ink-soft leading-relaxed max-w-xl mx-auto mb-10 pl-4 sm:pl-0 border-l-[3px] border-highlight sm:border-l-0 sm:border-none sm:px-4 text-left sm:text-center">
                    Leveraging Generative AI to automate workflows and ship predictive systems — from RAG pipelines to production APIs.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                    <a
                        href="#projects"
                        onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="group inline-flex items-center justify-center px-7 py-2.5 rounded-sm bg-ink text-bg text-[13px] font-medium tracking-wide transition-colors duration-200 hover:bg-accent"
                    >
                        View projects
                        <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
                    </a>

                    <a
                        href="#resume"
                        onClick={e => { e.preventDefault(); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="inline-flex items-center justify-center px-7 py-2.5 rounded-sm border border-rule text-ink text-[13px] font-medium bg-bg hover:bg-bg-warm transition-colors duration-200"
                    >
                        Résumé
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

/* ─── Resume Section ─────────────────────────────────────────────────── */
const ResumeSection = () => {
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
        <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Background</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">
                        Experience &amp; Education
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-8">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Briefcase className="text-accent" size={16} />
                            </div>
                            <h3 className="text-xl font-semibold text-ink">Experience</h3>
                        </div>

                        <div className="space-y-6 border-l-2 border-rule ml-3 pl-8 relative">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-bg-card border-2 border-accent/50 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300" />
                                    <div className="bg-bg-card p-5 rounded-xl border border-rule shadow-card group-hover:shadow-card-hover group-hover:border-accent/25 transition-all duration-300">
                                        <span className="text-accent text-xs font-semibold tracking-wide mb-1.5 block">{exp.period}</span>
                                        <h4 className="text-base font-semibold text-ink mb-0.5">{exp.role}</h4>
                                        <p className="text-ink-muted text-sm mb-3">{exp.company}</p>
                                        <p className="text-ink-muted text-sm mb-4 leading-relaxed">{exp.description}</p>
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
                            <h3 className="text-xl font-semibold text-ink">Education</h3>
                        </div>

                        <div className="space-y-6 border-l-2 border-rule ml-3 pl-8 relative">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-bg-card border-2 border-accent/50 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300" />
                                    <div className="bg-bg-card p-5 rounded-xl border border-rule shadow-card group-hover:shadow-card-hover group-hover:border-accent/25 transition-all duration-300">
                                        <span className="text-accent text-xs font-semibold tracking-wide mb-1.5 block">{edu.period}</span>
                                        <h4 className="text-base font-semibold text-ink mb-0.5">{edu.degree}</h4>
                                        <p className="text-ink-muted text-sm">{edu.school}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── Projects Section ───────────────────────────────────────────────── */
const ProjectsSection = () => {
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
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-bg-card rounded-xl overflow-hidden border border-rule shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300"
                        >
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
        </section>
    );
};

/* ─── Main Page ──────────────────────────────────────────────────────── */
const MainPage = () => (
    <>
        <HomeSection />
        <ResumeSection />
        <ProjectsSection />
    </>
);

export default MainPage;
