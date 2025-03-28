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
        primary: '#009CDB', // Highlight color for important keywords
        secondary: '#FFFFFF', // White
        accent: '#009CDB', // Same as primary for consistency
        dark: '#000000', // Black for text
        light: '#FFFFFF', // White for text on dark background
        destructive: '#ff0000',
        'destructive-foreground': '#ffffff',
        'primary-foreground': '#ffffff',
        'secondary-foreground': '#000000', // Black text on secondary background
        background: '#000000', // Black background
        input: '#111111', // Dark input background
        ring: '#009CDB',
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
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("tailwindcss-animate")
  ],
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