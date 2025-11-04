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
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
        accent: 'hsl(var(--color-accent))',
        surface: 'hsl(var(--color-surface))',
        background: 'hsl(var(--color-background))',
        neutral: {
          DEFAULT: 'hsl(var(--color-neutral))',
        },
      },
      fontFamily: {
        sans: ['var(--font-ui)'],
      },
      borderRadius: {
        '2xl': 'var(--radius-lg)',
        xl: 'var(--radius-md)',
        lg: 'var(--radius-sm)',
        md: 'var(--radius-xs)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        ring: 'var(--shadow-ring)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
