import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'smc': '375px',
        'mwd': '1254px',
        'swd': '1107px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        passion: ['Passion One', 'Arial', 'sans-serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'smc': ['11px', '20px'],
        //'lmc': ['16px', '20px'],
        'lgc': ['18px', '24px'],
        //'2lgc': ['21px', '24px'],
        '2xlc': ['28px', '36px'],
        '3xlc': ['32px', '36px'],
        //'4xlc': ['40px', '48px'],
      },
      colors: {
        gray: {
          'light': '#E3E5E5',
          'dark': '#232526',
        },
        orange: {
          'medium': '#F86600',
          'dark': '#250F00',
        },
      },
    },
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... },

      'sm': '640px',
      // => @media (min-width: 640px) { ... },

      'lg': '1025px',
      // => @media (min-width: 1025px) { ... }

      "desktop": "1356px",
      // => @media (min-width: 1400px) { ... }
    },
  },
  plugins: [],
}
export default config
