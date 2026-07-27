import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { getPostBySlug } from '../lib/blogPosts';

const SITE_URL = 'https://saurav-portfolio.in';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);
    const meta = post || {};
    const content = post ? post.content : '# Post not found';

    const jsonLd = useMemo(() => {
        if (!post) return null;
        const url = `${SITE_URL}/blogs/${slug}`;
        return {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            author: { '@type': 'Person', name: 'Saurav Kumar', url: SITE_URL },
            publisher: { '@type': 'Person', name: 'Saurav Kumar' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            image: `${SITE_URL}/profile.jpg`,
            keywords: post.category,
        };
    }, [post, slug]);

    useSEO({
        title: meta.title ? `${meta.title} — Saurav Kumar` : 'Writing — Saurav Kumar',
        description: meta.excerpt,
        path: `/blogs/${slug}`,
        type: 'article',
        jsonLd,
    });

    return (
        <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-[680px] mx-auto"
            >
                <Link
                    to="/blogs"
                    className="inline-flex items-center text-[13px] text-ink-muted hover:text-ink mb-10 transition-colors"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to writing
                </Link>

                {meta.title && (
                    <header className="mb-10 max-w-[760px] mx-auto">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            {meta.category && (
                                <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-accent bg-accent-light px-2.5 py-1 rounded-sm">
                                    {meta.category}
                                </span>
                            )}
                            <span className="w-1 h-1 rounded-full bg-rule shrink-0" aria-hidden />
                            {meta.date && (
                                <span className="text-[13px] text-ink-muted flex items-center gap-1.5">
                                    <Calendar size={13} /> {meta.date}
                                </span>
                            )}
                            {meta.readTime && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-rule shrink-0" aria-hidden />
                                    <span className="text-[13px] text-ink-muted flex items-center gap-1.5">
                                        <Clock size={13} /> {meta.readTime}
                                    </span>
                                </>
                            )}
                        </div>
                        <h1 className="font-display text-[clamp(1.75rem,5vw,2.75rem)] font-semibold text-ink tracking-tight leading-[1.12]">
                            {meta.title}
                        </h1>
                    </header>
                )}

                <div
                    className="prose prose-lg max-w-none
                    prose-p:text-[17px] prose-p:leading-[1.82] prose-p:text-ink-soft prose-p:font-light
                    prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink prose-headings:tracking-tight
                    prose-h2:text-[26px] prose-h2:mt-12 prose-h2:mb-5 prose-h2:leading-snug
                    prose-h3:text-[15px] prose-h3:uppercase prose-h3:tracking-[0.06em] prose-h3:text-ink-muted prose-h3:font-medium
                    prose-strong:text-ink prose-strong:font-medium
                    prose-a:text-accent prose-a:font-normal prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:font-display prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:border-highlight prose-blockquote:bg-bg-warm prose-blockquote:py-8 prose-blockquote:px-6 prose-blockquote:rounded-r prose-blockquote:text-ink
                    prose-code:text-accent-dark prose-code:bg-accent-light/60 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-bg-warm prose-pre:border prose-pre:border-rule prose-pre:text-ink-soft
                    prose-li:text-ink-soft prose-li:font-light
                    prose-ul:marker:text-accent"
                >
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </motion.div>
        </div>
    );
};

export default BlogPost;
