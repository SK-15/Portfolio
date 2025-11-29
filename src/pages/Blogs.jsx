import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

const Blogs = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const modules = import.meta.glob('/src/content/blogs/*.md', { query: '?raw', import: 'default' });
            const loadedPosts = [];

            for (const path in modules) {
                const rawContent = await modules[path]();
                const { data } = matter(rawContent);
                const slug = path.split('/').pop().replace('.md', '');

                loadedPosts.push({
                    ...data,
                    slug,
                    path
                });
            }

            // Sort by date descending
            loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            setPosts(loadedPosts);
        };

        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
                >
                    Latest <span className="text-neon-green">Insights</span>
                </motion.h1>

                <div className="space-y-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-dark-surface/50 p-8 rounded-xl border border-white/5 hover:border-neon-green/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                                {post.category && (
                                    <span className="text-neon-green bg-neon-green/10 px-2 py-1 rounded">{post.category}</span>
                                )}
                                <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                                {post.readTime && (
                                    <span className="flex items-center"><Clock size={12} className="mr-1" /> {post.readTime}</span>
                                )}
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {post.excerpt}
                            </p>

                            <Link to={`/blogs/${post.slug}`} className="inline-flex items-center text-neon-green font-medium hover:text-white transition-colors">
                                Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
