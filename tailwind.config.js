/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'degen-black': '#0a0a0a',
        'degen-dark': '#121212',
        'degen-gray': '#1a1a1a',
        'blood-red': '#ff0844',
        'neon-green': '#00ff41',
        'gold': '#ffd700',
      },
      fontFamily: {
        mono: ['ui-monospace', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'count-up': 'count-up 1.5s ease-out',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 65, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
