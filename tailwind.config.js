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
                // We can extend or overwrite. Since we want strict Orion style, we'll rely on Slate/Indigo.
                // Default Tailwind colors are fine, but we can alias 'primary' if we want.
                primary: {
                    DEFAULT: '#6366f1', // Indigo-500
                    foreground: '#ffffff',
                },
            },
            borderRadius: {
                lg: '0.5rem',
                xl: '0.75rem',
                '2xl': '1rem',
            },
        },
    },
    plugins: [],
}
