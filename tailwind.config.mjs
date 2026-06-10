/** @type {import('tailwindcss').Config} */
export default {
theme: {
    extend: {
        colors: {
            'sea-light': '#deeff1',
            'ocean-dark': '#00324a',
            'teal': '#349999',
            'blue-deep': '#00679a',
            'night': '#1d1d1b',
            'card-bg': '#f8f8f8',
            'placeholder': '#b4b3b3',
            'bg-dark': '#050e14',
            'bg-form': '#071520',
            'bg-placeholder': '0d2233',
        },
        fontFamily: {
            'aileron': ['Aileron', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        },
        fontSize: {
            'hero': '74px',
            'section': '34px',
        },
        borderRadius: {
            'card': '24px',
            'btn': '20px',
            'btn-lg': '30px',
        },
        backgroundImage: {
            'gradient-brand': 'linear-gradient(90deg, #00679a, #349999)',
            'gradient-text': 'linear-gradient(90deg, #339999, #0076b0)',
            },
        },
    },
}