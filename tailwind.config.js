/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Semantic tokens — values defined as CSS vars in index.css
                // (light in :root, dark under .dark) so the theme swaps wholesale.
                accent: {
                    DEFAULT: 'var(--accent)',
                    light: 'var(--accent-light)',
                    dark: 'var(--accent-dark)',
                },
                highlight: {
                    DEFAULT: 'var(--highlight)',
                },
                rule: 'var(--rule)',
                bg: {
                    DEFAULT: 'var(--bg)',
                    warm: 'var(--bg-warm)',
                    card: 'var(--bg-card)',
                    muted: 'var(--bg-muted)',
                },
                ink: {
                    DEFAULT: 'var(--ink)',
                    soft: 'var(--ink-soft)',
                    muted: 'var(--ink-muted)',
                    faint: 'var(--ink-faint)',
                },
                // Syntax highlight
                code: {
                    keyword: 'var(--code-keyword)',
                    string: 'var(--code-string)',
                    key: 'var(--code-key)',
                    punc: 'var(--code-punc)',
                    comment: 'var(--code-comment)',
                    fn: 'var(--code-fn)',
                },
            },
            fontFamily: {
                sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
                display: ['"Playfair Display"', 'Georgia', 'serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            boxShadow: {
                'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                'card-hover': '0 4px 16px rgba(107,140,110,0.12), 0 2px 6px rgba(0,0,0,0.05)',
                'accent': '0 0 0 3px rgba(107,140,110,0.18)',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease both',
                'blink': 'blink 1.1s step-end infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            }
        },
    },
    plugins: [],
}
