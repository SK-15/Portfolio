import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // Dynamic import for the specific file
                // Note: Vite requires glob or specific paths. We can use the same glob trick or try to import dynamically if we know the path structure.
                // However, dynamic import with variable is tricky in Vite without glob.
                // Let's reuse the glob approach for simplicity and safety.
                const modules = import.meta.glob('/src/content/blogs/*.md', { query: '?raw', import: 'default' });
                const path = `/src/content/blogs/${slug}.md`;

                if (modules[path]) {
                    const rawContent = await modules[path]();
                    const { data, content } = matter(rawContent);
                    setMeta(data);
                    setContent(content);
                } else {
                    setContent('# Post not found');
                }
            } catch (error) {
                console.error('Error loading post:', error);
                setContent('# Error loading post');
            }
        };

        fetchPost();
    }, [slug]);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <Link to="/blogs" className="inline-flex items-center text-gray-400 hover:text-neon-green mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Blogs
                </Link>

                {meta.title && (
                    <div className="mb-10 border-b border-white/10 pb-10">
                        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6 leading-tight">
                            {meta.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm font-mono text-gray-500">
                            <span className="flex items-center"><Calendar size={14} className="mr-2" /> {meta.date}</span>
                            {meta.readTime && (
                                <span className="flex items-center"><Clock size={14} className="mr-2" /> {meta.readTime}</span>
                            )}
                            {meta.category && (
                                <span className="text-neon-green bg-neon-green/10 px-2 py-1 rounded">{meta.category}</span>
                            )}
                        </div>
                    </div>
                )}

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-orbitron prose-headings:text-white prose-a:text-neon-green prose-strong:text-neon-green prose-code:text-neon-green prose-pre:bg-dark-surface prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </motion.div>
        </div>
    );
};

export default BlogPost;
