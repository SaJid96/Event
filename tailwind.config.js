/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      colors: {
        navy: '#00002D',
        'navy-2': '#071033',
        'navy-3': '#142850',
        'navy-4': '#1E3A6E',
        'navy-5': '#285078',
        gold: '#C3A569',
        'gold-light': '#D4B87A',
        'gold-dark': '#8B6914',
        cream: '#FAF7F0',
        'cream-2': '#F2EBD9',
        'cream-3': '#E8DCC8',
        ink: '#1A1209',
        muted: '#8A9AB0',
      },
    },
  },
  plugins: [],
}
