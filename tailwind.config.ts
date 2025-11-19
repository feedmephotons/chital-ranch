import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1a2332',
          charcoal: '#2d3748',
          gold: '#d4af37',
        },
        neutral: {
          cream: '#f7f5f0',
          tan: '#c9b896',
          stone: '#8b8378',
        },
        accent: {
          'gold-light': '#e6c960',
          'gold-dark': '#b8941f',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
