import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Lora', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        heading: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'rwua': {
          'primary': 'var(--rwua-primary)',
          'primary-dark': 'var(--rwua-primary-dark)',
          'secondary': 'var(--rwua-secondary)',
          'secondary-dark': 'var(--rwua-secondary-dark)',
          'accent': 'var(--rwua-accent)',
          'neutral': {
            50: 'var(--rwua-neutral-50)',
            100: 'var(--rwua-neutral-100)',
            200: 'var(--rwua-neutral-200)',
            300: 'var(--rwua-neutral-300)',
            400: 'var(--rwua-neutral-400)',
            500: 'var(--rwua-neutral-500)',
            600: 'var(--rwua-neutral-600)',
            700: 'var(--rwua-neutral-700)',
            800: 'var(--rwua-neutral-800)',
            900: 'var(--rwua-neutral-900)',
          }
        }
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.15)',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'wide': '0.01em',
        'wider': '0.05em',
      }
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;