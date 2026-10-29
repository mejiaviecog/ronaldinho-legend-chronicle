/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#07090E',
        'noir-steel': '#09090B',
        dossier: '#121318',
        'gold-trophy': '#F59E0B',
        'gold-light': '#FDE68A',
        'emerald-pitch': '#10B981',
        'neon-cyan': '#06B6D4',
        'stamp-red': '#EF4444',
      },
      fontFamily: {
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'joga-gradient': 'radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.15), rgba(16, 185, 129, 0.08) 45%, rgba(7, 9, 14, 0.98) 80%)',
        'noir-gradient': 'radial-gradient(circle at 80% 10%, rgba(245, 158, 11, 0.12), rgba(239, 68, 68, 0.06) 40%, rgba(9, 9, 11, 0.98) 85%)',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        'emerald-glow': '0 0 35px -5px rgba(16, 185, 129, 0.35)',
        'noir-dossier': '0 20px 50px rgba(0, 0, 0, 0.85)',
      },
    },
  },
  plugins: [],
};
