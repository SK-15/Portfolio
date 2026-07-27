import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-server', 'entry-server.js');

const SITE_URL = 'https://saurav-portfolio.in';

function escapeHtml(str = '') {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function withHead(template, { title, description, routePath, type = 'website', jsonLd }) {
    const url = SITE_URL + routePath;
    let html = template;

    if (title) {
        const t = escapeHtml(title);
        html = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
        html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`);
        html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`);
    }
    if (description) {
        const d = escapeHtml(description);
        html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`);
        html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`);
        html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`);
    }
    html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
    html = html.replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${type}$2`);
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

    if (jsonLd) {
        const tag = `<script type="application/ld+json" data-seo-id="route-jsonld">${JSON.stringify(jsonLd)}</script>`;
        html = html.replace('</head>', `${tag}</head>`);
    }
    return html;
}

function withBody(template, bodyHtml) {
    return template.replace(
        '<div id="root"></div>',
        `<div id="root">${bodyHtml}</div>`
    );
}

function writeRoute(routePath, html) {
    const outDir = routePath === '/' ? distDir : path.join(distDir, routePath);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`prerendered ${routePath}`);
}

function lastModified(file) {
    try {
        const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
            cwd: root,
            encoding: 'utf-8',
        }).trim();
        if (date) return date;
    } catch {
        // fall through to today's date (uncommitted file)
    }
    return new Date().toISOString().slice(0, 10);
}

function writeSitemap(entries) {
    const body = entries
        .map(({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`)
        .join('\n');
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
    console.log('sitemap.xml regenerated with real lastmod dates');
}

async function main() {
    if (!fs.existsSync(ssrEntry)) {
        console.error('SSR bundle not found, run the SSR build first.');
        process.exit(1);
    }
    const { render } = await import(`file://${ssrEntry}`);
    const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

    const blogsDir = path.join(root, 'src', 'content', 'blogs');
    const posts = fs.readdirSync(blogsDir)
        .filter((f) => f.endsWith('.md'))
        .map((f) => {
            const raw = fs.readFileSync(path.join(blogsDir, f), 'utf-8');
            const { data } = matter(raw);
            return { ...data, slug: f.replace(/\.md$/, '') };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Home
    {
        const bodyHtml = render('/');
        writeRoute('/', withBody(template, bodyHtml));
    }

    // Blog listing
    {
        const bodyHtml = render('/blogs');
        const jsonLd = {
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
        };
        const html = withHead(template, {
            title: 'Writing — Saurav Kumar',
            description: 'Articles on Generative AI, recommendation systems, and machine learning engineering by Saurav Kumar.',
            routePath: '/blogs',
            jsonLd,
        });
        writeRoute('/blogs', withBody(html, bodyHtml));
    }

    // Individual posts
    for (const post of posts) {
        const routePath = `/blogs/${post.slug}`;
        const bodyHtml = render(routePath);
        const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            author: { '@type': 'Person', name: 'Saurav Kumar', url: SITE_URL },
            publisher: { '@type': 'Person', name: 'Saurav Kumar' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${routePath}` },
            image: `${SITE_URL}/profile.jpg`,
            keywords: post.category,
        };
        const html = withHead(template, {
            title: `${post.title} — Saurav Kumar`,
            description: post.excerpt,
            routePath,
            type: 'article',
            jsonLd,
        });
        writeRoute(routePath, withBody(html, bodyHtml));
    }

    writeSitemap([
        {
            loc: `${SITE_URL}/`,
            lastmod: lastModified('src/pages/MainPage.jsx'),
            changefreq: 'monthly',
            priority: '1.0',
        },
        {
            loc: `${SITE_URL}/blogs`,
            lastmod: lastModified('src/pages/Blogs.jsx'),
            changefreq: 'weekly',
            priority: '0.8',
        },
        ...posts.map((post) => ({
            loc: `${SITE_URL}/blogs/${post.slug}`,
            lastmod: lastModified(`src/content/blogs/${post.slug}.md`),
            changefreq: 'monthly',
            priority: '0.6',
        })),
    ]);

    fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
}

main();
