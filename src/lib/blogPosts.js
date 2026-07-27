import matter from 'gray-matter';

const modules = import.meta.glob('/src/content/blogs/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

export const posts = Object.entries(modules)
    .map(([path, raw]) => {
        const { data, content } = matter(raw);
        const slug = path.split('/').pop().replace('.md', '');
        return { ...data, slug, content };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getPostBySlug(slug) {
    return posts.find((post) => post.slug === slug);
}
