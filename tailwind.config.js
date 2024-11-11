module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4338ca',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.border-border': {
          border: '2px solid currentColor', // Adjust this to your needs
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
