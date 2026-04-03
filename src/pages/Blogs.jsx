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
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Writing</p>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-ink">
                        Latest Insights
                    </h1>
                </motion.div>

                <div className="space-y-6">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-bg-card p-8 rounded-xl border border-gray-200 shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 text-xs text-ink-muted mb-4">
                                {post.category && (
                                    <span className="text-accent bg-accent/10 px-2.5 py-0.5 rounded-full font-medium border border-accent/15">{post.category}</span>
                                )}
                                <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                                {post.readTime && (
                                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                                )}
                            </div>

                            <h2 className="text-xl font-semibold text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                                {post.title}
                            </h2>

                            <p className="text-ink-muted mb-6 leading-relaxed text-sm">
                                {post.excerpt}
                            </p>

                            <Link
                                to={`/blogs/${post.slug}`}
                                className="inline-flex items-center text-sm text-accent font-medium hover:text-accent-dark transition-colors"
                            >
                                Read Article <ArrowRight size={15} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
