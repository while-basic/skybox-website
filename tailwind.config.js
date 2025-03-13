/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0047AB', // Skybox blue
        secondary: '#1E293B', // Dark slate blue
        accent: '#38BDF8', // Light blue
        dark: '#0F172A',
        light: '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-light',
    'bg-dark',
    'text-light',
    'text-dark',
    'text-primary',
    'text-secondary',
    'text-accent',
    'border-primary',
    'hover:text-primary',
    'hover:text-accent',
    'hover:border-primary',
    'dark:bg-dark',
    'dark:bg-secondary/10',
    'dark:text-light',
    'dark:hover:text-accent',
    'dark:border-gray-800',
  ],
}; 