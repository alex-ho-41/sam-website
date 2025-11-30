/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Define colors based on the target website
                'brand-black': '#000000',
                'brand-white': '#ffffff',
                'brand-grey': '#f5f5f5',
                'brand-dark-grey': '#333333',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Assuming Inter or similar
            },
        },
    },
    plugins: [],
}
