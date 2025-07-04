import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
    extend: {
        animation: {
            'fade-in': 'fadeIn 1s ease-out both',
            'pulse-slow': 'pulse 10s ease-in-out infinite',
        },
        keyframes: {
            fadeIn: {
                from: { opacity: '0', transform: 'translateY(20px)' },
                to: { opacity: '1', transform: 'translateY(0)' },
            },
        },
    },
}
