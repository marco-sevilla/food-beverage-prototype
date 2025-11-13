import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Canary Design System Colors matching the component library
        'canary-blue-1': '#2858C4',
        'canary-black': {
          1: '#000000',
          2: '#333333', 
          3: '#666666',
          4: '#999999',
          5: '#CCCCCC',
          6: '#E5E5E5',
          7: '#F0F0F0',
          8: '#FAFAFA',
        },
        'canary-red-1': '#E40046',
        'canary-pink-1': '#F16682',
        'neutral-200': '#E5E5E5',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'caption-sm': ['10px', '16px'],
        'caption': ['12px', '18px'], 
        'body-sm': ['14px', '22px'],
        'body': ['16px', '24px'],
        'subtitle': ['18px', '28px'],
        'title': ['24px', '36px'],
      },
      boxShadow: {
        'canary': '0px 8px 16px 0px rgba(0,0,0,0.16)',
      },
      spacing: {
        '18': '4.5rem',
        '45': '11.25rem',
      },
      animation: {
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        slideInRight: {
          'from': {
            transform: 'translateX(100%)',
            opacity: '0'
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;