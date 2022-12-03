/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                secondary: "#83D2E4",
                "secondary-hover": "#477385",
                primary: "#8BCF21",
                "primary-hover": "#2F9331",
                light: "#E7E0DB",
                dark: "#454243",
                darker: "#1f1d1e",
            },
        },
    },
    plugins: [],
};