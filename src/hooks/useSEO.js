import { useEffect } from 'react';

const SITE_URL = 'https://saurav-portfolio.in';

function setMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonical(href) {
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

function setJsonLd(data) {
    let el = document.head.querySelector('script[data-seo-id="route-jsonld"]');
    if (!data) {
        if (el) el.remove();
        return;
    }
    if (!el) {
        el = document.createElement('script');
        el.type = 'application/ld+json';
        el.setAttribute('data-seo-id', 'route-jsonld');
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
}

/**
 * Per-route SEO for the SPA: keeps document.title, description,
 * canonical, OG/Twitter tags and an optional JSON-LD block in sync
 * with the current route.
 */
export default function useSEO({ title, description, path = '/', type = 'website', jsonLd = null }) {
    useEffect(() => {
        const url = SITE_URL + path;

        if (title) {
            document.title = title;
            setMeta('property', 'og:title', title);
            setMeta('name', 'twitter:title', title);
        }
        if (description) {
            setMeta('name', 'description', description);
            setMeta('property', 'og:description', description);
            setMeta('name', 'twitter:description', description);
        }
        setMeta('property', 'og:url', url);
        setMeta('property', 'og:type', type);
        setCanonical(url);
        setJsonLd(jsonLd);

        return () => setJsonLd(null);
    }, [title, description, path, type, jsonLd]);
}
