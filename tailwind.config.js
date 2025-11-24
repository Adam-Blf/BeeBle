/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#4318FF', // Brand Blue
                },
                light: {
                    primary: '#F4F7FE', // Main Background
                    card: '#FFFFFF',    // Card Background
                    text: '#2B3674',    // Primary Text
                },
                dark: {
                    primary: '#0B1437', // Deep Navy Background
                    card: '#111C44',    // Navy Card Background
                    text: '#E0E5F2',    // Off-white Text
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
