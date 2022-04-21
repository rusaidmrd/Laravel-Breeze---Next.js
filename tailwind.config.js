const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                "primary-dark": "#310134",
                "primary-color": "#4a154b",
                "secondary-color": "#c94b4b",
                "dark-color": "#230725",
                "pr-color": "#99659d",
                "gray-color": "#f3f4f6",
                "gray-cool": "#faf7f7",
                "error-color": "#ff6d6d",
            },
            spacing: {
                110: "28rem",
                48: "48%",
                34: "150px",
                4.5: "18px",
                7.5: "30px",
                1.5: "3px",
            },
            width: {
                "full-3": "300%",
                "w-8.333": "8.33333333333%",
            },
            boxShadow: {
                product: "2px 4px 12px rgb(0 0 0 / 8%)",
                "product-scale": "2px 4px 16px rgb(0 0 0 / 16%);",
                theme: "0 0.25rem 1rem rgb(18 38 63 / 7%)",
            },
            flex: {
                "zero-auto": "0 0 auto",
            },
        },
        minHeight: {
            250: "250px",
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
