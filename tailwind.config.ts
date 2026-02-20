import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FDF2F4',
          100: '#F9E6EA',
          200: '#F0C4CE',
          300: '#E49BAC',
          400: '#D06B82',
          500: '#B84060',
          600: '#8B1E3F',
          700: '#6B1530',
          800: '#4A0E23',
          900: '#3D0C1C',
          950: '#2A0813',
        },
        rose: {
          50: '#FFF1F3',
          100: '#FFE0E6',
          200: '#FFC6D1',
          300: '#FFA3B5',
          400: '#FF7090',
          500: '#F93D6E',
          600: '#E91E63',
          700: '#C4134F',
          800: '#A31346',
          900: '#8B1441',
        },
        cream: {
          50: '#FDFAF8',
          100: '#F9F0EA',
          200: '#F5E6E0',
          300: '#EDD5CB',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
