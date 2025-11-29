/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    green: '#39ff14',
                    cyan: '#00ffff',
                },
                dark: {
                    bg: '#050505',
                    card: '#0a0a0a', // Slightly lighter than bg
                    surface: '#121212',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'], // For headers
            },
            boxShadow: {
                'neon': '0 0 5px #39ff14, 0 0 10px #39ff14',
                'neon-strong': '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
