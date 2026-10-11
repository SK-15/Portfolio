import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, ExternalLink, Github, Cpu, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

import caseChatImg from '../assets/casechat.png';
import caseSearchImg from '../assets/casesearch.png';
import fundamentalInvestingImg from '../assets/fundamental_investing.png';

/* ─── Home Section ──────────────────────────────────────────────────── */
const CodeLine = ({ n, children }) => (
    <div className="flex">
        <span className="select-none w-9 shrink-0 pr-4 text-right text-code-punc/60 tabular-nums">{n}</span>
        <span className="flex-1 whitespace-pre-wrap">{children}</span>
    </div>
);

const Chip = ({ children }) => (
    <span className="inline-block text-[11px] font-medium text-ink-soft bg-bg-warm border border-rule rounded-full px-2.5 py-1">
        {children}
    </span>
);

const HomeSection = () => (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_25%,rgba(107,140,110,0.06)_0%,transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_75%,rgba(200,169,126,0.05)_0%,transparent_45%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
                {/* Profile photo */}
                <div className="shrink-0">
                    <img
                        src={`${import.meta.env.BASE_URL}profile.jpg`}
                        alt="Saurav Kumar"
                        className="w-52 h-64 md:w-64 md:h-[19.5rem] object-cover rounded-xl border border-rule shadow-card"
                    />
                </div>

                {/* Text + editor window */}
                <div className="flex-1 w-full min-w-0">
                    <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-3">
                        ML Engineer · Generative AI
                    </p>
                    <h1 className="font-display text-[clamp(2.1rem,5vw,3.4rem)] font-semibold text-ink tracking-tight leading-[1.08] mb-3">
                        Saurav Kumar
                    </h1>
                    <p className="text-[15px] sm:text-[17px] text-ink-soft leading-relaxed mb-7 max-w-[52ch]">
                        I build RAG pipelines, AI agents, and recommendation systems that make it to production — not just to a notebook.
                    </p>

                    <div className="rounded-xl border border-rule bg-bg-card shadow-card overflow-hidden">
                        {/* Title bar */}
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-bg-warm">
                            <span className="w-3 h-3 rounded-full bg-[#e06c5a]" aria-hidden />
                            <span className="w-3 h-3 rounded-full bg-[#e0b44a]" aria-hidden />
                            <span className="w-3 h-3 rounded-full bg-[#6b8c6e]" aria-hidden />
                            <span className="ml-3 font-mono text-[12px] text-ink-muted">saurav.py</span>
                        </div>

                        {/* Code body */}
                        <div className="px-6 py-5 font-mono text-[13px] sm:text-[14px] leading-loose">
                            <CodeLine n={1}>
                                <span className="text-code-comment"># building real-world AI systems</span>
                            </CodeLine>
                            <CodeLine n={2}>
                                <span className="text-ink">saurav</span>
                                <span className="text-code-punc"> = {'{'}</span>
                            </CodeLine>
                            <CodeLine n={3}>
                                {'    '}<span className="text-code-string">"role"</span>
                                <span className="text-code-punc">: </span>
                                <span className="text-code-string">"ML Engineer"</span>
                                <span className="text-code-punc">,</span>
                            </CodeLine>
                            <CodeLine n={4}>
                                {'    '}<span className="text-code-string">"focus"</span>
                                <span className="text-code-punc">: </span>
                                <span className="text-code-string">"Generative AI"</span>
                                <span className="text-code-punc">,</span>
                            </CodeLine>
                            <CodeLine n={5}>
                                {'    '}<span className="text-code-string">"stack"</span>
                                <span className="text-code-punc">: [</span>
                                <span className="text-code-string">"RAG"</span>
                                <span className="text-code-punc">, </span>
                                <span className="text-code-string">"LLM"</span>
                                <span className="text-code-punc">, </span>
                                <span className="text-code-string">"Agentic AI"</span>
                                <span className="text-code-punc">],</span>
                            </CodeLine>
                            <CodeLine n={6}>
                                {'    '}<span className="text-code-string">"ships"</span>
                                <span className="text-code-punc">: </span>
                                <span className="text-code-string">"Agents → production APIs"</span>
                            </CodeLine>
                            <CodeLine n={7}>
                                <span className="text-code-punc">{'}'}</span>
                                <span className="inline-block w-[8px] h-[1.1em] -mb-[2px] ml-0.5 bg-accent animate-blink" aria-hidden />
                            </CodeLine>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
                        <a
                            href="#projects"
                            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="group inline-flex items-center justify-center px-7 py-2.5 rounded-sm bg-ink text-bg font-mono text-[13px] tracking-wide transition-colors duration-200 hover:bg-accent"
                        >
                            view projects
                            <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
                        </a>

                        <a
                            href="#resume"
                            onClick={e => { e.preventDefault(); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }); }}
                            className="inline-flex items-center justify-center px-7 py-2.5 rounded-sm border border-rule text-ink font-mono text-[13px] bg-bg hover:bg-bg-warm transition-colors duration-200"
                        >
                            ./resume
                        </a>

                        <span className="hidden sm:block w-px h-6 bg-rule mx-1" aria-hidden />

                        <div className="flex items-center justify-center gap-4">
                            <a href="https://github.com/SK-15" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-accent transition-colors duration-200" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/sauravkumar1503/" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-accent transition-colors duration-200" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:sauravkumar585@gmail.com" className="text-ink-muted hover:text-accent transition-colors duration-200" aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
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

    const skillGroups = [
        { label: 'Generative AI', items: ['RAG', 'LLM Fine-tuning', 'Agentic AI', 'Prompt Engineering'] },
        { label: 'Cloud & MLOps', items: ['Azure Functions', 'Azure Cognitive Search', 'Azure DevOps', 'Production APIs'] },
        { label: 'ML & Data', items: ['Python', 'Recommendation Systems', 'Machine Learning', 'Visualization'] },
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
                    <p className="font-mono text-code-comment text-[13px] sm:text-sm mb-3">// 4 roles · IIT Madras · 2022 – present</p>
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
                                        <p className="text-ink-soft text-sm mb-4 leading-relaxed">{exp.description}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.skills.map(skill => <Chip key={skill}>{skill}</Chip>)}
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

                        {/* Core skills */}
                        <div className="flex items-center gap-2.5 mt-12 mb-8">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Cpu className="text-accent" size={16} />
                            </div>
                            <h3 className="text-xl font-semibold text-ink">Core Skills</h3>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            className="bg-bg-card p-5 rounded-xl border border-rule shadow-card space-y-4"
                        >
                            {skillGroups.map(group => (
                                <div key={group.label}>
                                    <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-muted mb-2">{group.label}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.items.map(item => <Chip key={item}>{item}</Chip>)}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
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
            id: 'koda',
            title: 'Koda — Developer Agent',
            description: 'Self-hosted, multi-tenant AI coding agent built as a LangGraph loop with Postgres-checkpointed threads, human-in-the-loop approval gates, parallel worker agents, and multi-provider LLM routing with per-run cost budgets.',
            tags: ['LangGraph', 'Agents', 'Postgres', 'WebSocket'],
            image: null,
            file: 'koda/agent.py',
            github: 'https://github.com/SK-15/Koda',
            demo: null
        },
        {
            id: 'gpt',
            title: 'GPT From Scratch',
            description: 'Character-level, decoder-only Transformer hand-built in PyTorch — no nn.Transformer or Hugging Face. Grows from a bigram baseline to a 10.8M-parameter GPT that writes Shakespeare-style text.',
            tags: ['PyTorch', 'Transformers', 'Self-Attention'],
            image: null,
            file: 'gpt/model.py',
            github: 'https://github.com/SK-15/gpt',
            demo: null
        },
        {
            id: 1,
            title: 'Case Chat | Docuswift',
            description: 'AI-powered chat system for legal documents using RAG pipeline on Azure Cognitive Search. Features optimized information extraction with curated prompts.',
            tags: ['Azure', 'RAG', 'LLM', 'Python'],
            image: caseChatImg,
            github: null,
            demo: null
        },
        {
            id: 2,
            title: 'Case Search | DocuSwift',
            description: 'Legal search engine for 5 lakh+ Indian judgments. Uses RAG and fine-tuned LLMs for summarization and precise case retrieval.',
            tags: ['Azure Cognitive Search', 'Fine-tuning', 'React', 'AI'],
            image: caseSearchImg,
            github: null,
            demo: null
        },
        {
            id: 3,
            title: 'Fundamental Investing with AI',
            description: 'Investment strategy application analyzing technical indicators and fundamental data. Filed a US patent for this innovative concept.',
            tags: ['Fintech', 'Machine Learning', 'Data Analysis'],
            image: fundamentalInvestingImg,
            github: null,
            demo: null,
            note: 'US patent filed'
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
                    <p className="font-mono text-code-comment text-[13px] sm:text-sm mb-3">// 5 projects · 2 open source · 1 US patent filed</p>
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
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col bg-bg-warm">
                                        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-rule">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#e06c5a]" aria-hidden />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#e0b44a]" aria-hidden />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#6b8c6e]" aria-hidden />
                                            <span className="ml-2 font-mono text-[11px] text-ink-muted">{project.file}</span>
                                        </div>
                                        <div className="flex-1 flex items-center justify-center px-6">
                                            <span className="font-display text-2xl font-semibold text-ink group-hover:text-accent transition-colors duration-300 text-center">
                                                {project.title.split(' — ')[0]}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-ink-soft text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tags.map(tag => <Chip key={tag}>{tag}</Chip>)}
                                </div>

                                {(project.github || project.demo || project.note) && (
                                    <div className="flex justify-between items-center gap-4 pt-3 border-t border-rule">
                                        {project.note && (
                                            <span className="text-xs text-highlight font-medium">{project.note}</span>
                                        )}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-ink-muted hover:text-ink transition-colors font-medium">
                                                <Github size={14} className="mr-1.5" /> Code
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-accent hover:text-accent-dark transition-colors font-medium">
                                                <ExternalLink size={14} className="mr-1.5" /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─── Main Page ──────────────────────────────────────────────────────── */
const MainPage = () => {
    useSEO({
        title: 'Saurav Kumar — ML Engineer · Generative AI',
        description: 'Saurav Kumar is an ML Engineer specializing in Generative AI — RAG pipelines, AI agents, recommendation systems, and production ML APIs on Azure.',
        path: '/',
    });

    return (
        <>
            <HomeSection />
            <ProjectsSection />
            <ResumeSection />
        </>
    );
};

export default MainPage;
