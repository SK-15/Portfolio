/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Editorial palette (warm paper + ink + blue accent)
                accent: {
                    DEFAULT: '#2d5a8e',
                    light: '#e8f0f9',
                    dark: '#1e4a72',
                },
                highlight: {
                    DEFAULT: '#e8a838',
                },
                rule: '#ddd8ce',
                bg: {
                    DEFAULT: '#faf8f4',
                    warm: '#f2ede4',
                    card: '#ffffff',
                    muted: '#f2ede4',
                },
                ink: {
                    DEFAULT: '#1a1814',
                    soft: '#4a4640',
                    muted: '#8a857e',
                    faint: '#9a9590',
                },
            },
            fontFamily: {
                sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
                display: ['"Playfair Display"', 'Georgia', 'serif'],
            },
            boxShadow: {
                'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                'card-hover': '0 4px 16px rgba(45,90,142,0.1), 0 2px 6px rgba(0,0,0,0.05)',
                'accent': '0 0 0 3px rgba(45,90,142,0.18)',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease both',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
