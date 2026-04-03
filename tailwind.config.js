/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#6A5ACD',   // slate blue-violet
                    light: '#9585E0',
                    dark: '#4E3FAA',
                },
                bg: {
                    DEFAULT: '#F9F7F4',   // warm off-white / cream
                    card: '#FFFFFF',
                    muted: '#F0EDE8',
                },
                ink: {
                    DEFAULT: '#1A1A2E',   // near-black
                    muted: '#6B7280',     // gray-500
                    faint: '#9CA3AF',     // gray-400
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['"Playfair Display"', 'Georgia', 'serif'],
            },
            boxShadow: {
                'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)',
                'card-hover': '0 4px 16px rgba(106,90,205,0.12), 0 2px 6px rgba(0,0,0,0.06)',
                'accent': '0 0 0 3px rgba(106,90,205,0.2)',
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
