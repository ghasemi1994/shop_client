/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            colors: {
                black: '#24292f',
                darkblue: {
                    '50': '#f4f6fb',
                    '100': '#e9edf5',
                    '200': '#ced9e9',
                    '300': '#a3bad6',
                    '400': '#7194bf',
                    '500': '#4f76a8',
                    '600': '#3c5d8d',
                    '700': '#344f77',
                    '800': '#2c4160',
                    '900': '#293851',
                    '950': '#1b2436',
                },
            }
        },

    },
    plugins: [require("@tailwindcss/aspect-ratio")],

};