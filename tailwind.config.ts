import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgba(var(--foreground) / <alpha-value>)',
        card: 'rgba(var(--card) / <alpha-value>)',
        'card-foreground': 'rgba(var(--card-foreground) / <alpha-value>)',
        popover: 'rgba(var(--popover) / <alpha-value>)',
        'popover-foreground': 'rgba(var(--popover-foreground) / <alpha-value>)',
        primary: 'rgba(var(--primary) / <alpha-value>)',
        'primary-foreground': 'rgba(var(--primary-foreground) / <alpha-value>)',
        'primary-accent': 'rgba(var(--primary-accent) / <alpha-value>)',
        secondary: 'rgba(var(--secondary) / <alpha-value>)',
        'secondary-foreground':
          'rgba(var(--secondary-foreground) / <alpha-value>)',
        muted: 'rgba(var(--muted) / <alpha-value>)',
        'muted-foreground': 'rgba(var(--muted-foreground) / <alpha-value>)',
        accent: 'rgba(var(--accent) / <alpha-value>)',
        'accent-foreground': 'rgba(var(--accent-foreground) / <alpha-value>)',
        success: 'rgba(var(--success) / <alpha-value>)',
        'success-foreground': 'rgba(var(--success-foreground) / <alpha-value>)',
        warning: 'rgba(var(--warning) / <alpha-value>)',
        'warning-foreground': 'rgba(var(--warning-foreground) / <alpha-value>)',
        destructive: 'rgba(var(--destructive) / <alpha-value>)',
        'destructive-foreground':
          'rgba(var(--destructive-foreground) / <alpha-value>)',
        border: 'rgba(var(--border) / <alpha-value>)',
        input: 'rgba(var(--input) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"TTNorms"', ...defaultTheme.fontFamily.sans],
        serif: ['"AntiqueOliveBold"', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        wave: 'wave 1.5s ease-in-out 1s 2',
      },
    },
  },
  plugins: [],
} satisfies Config;
