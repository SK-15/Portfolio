import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import { posts } from '../lib/blogPosts';

const SITE_URL = 'https://saurav-portfolio.in';

const blogsJsonLd = posts.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Writing — Saurav Kumar',
        url: `${SITE_URL}/blogs`,
        author: { '@type': 'Person', name: 'Saurav Kumar', url: SITE_URL },
        blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${SITE_URL}/blogs/${post.slug}`,
            datePublished: post.date,
        })),
    }
    : null;

const Blogs = () => {
    useSEO({
        title: 'Writing — Saurav Kumar',
        description: 'Articles on Generative AI, recommendation systems, and machine learning engineering by Saurav Kumar.',
        path: '/blogs',
        jsonLd: blogsJsonLd,
    });

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
                            className="group bg-bg-card p-8 rounded-xl border border-rule shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300"
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

                            <p className="text-ink-soft mb-6 leading-relaxed text-sm">
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
