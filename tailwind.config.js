"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'custom-blue': '#003c6e',
                'custom-light-blue': '#a3c9f1',
                width: {
                    '1200': '1200px', // Add a custom width
                  },
            },
        },
    },
    plugins: [],
};
