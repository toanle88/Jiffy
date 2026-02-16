import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        foreground: 'var(--text-color)',
        primary: {
          DEFAULT: 'var(--accent-color)',
          foreground: '#ffffff',
        },
        sidebar: {
          DEFAULT: 'var(--sidebar-bg)',
          hover: 'var(--hover-bg)',
          active: 'var(--active-bg)',
        },
        muted: {
          DEFAULT: 'var(--text-muted)',
          foreground: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          glow: 'var(--accent-glow)',
        },
        border: 'var(--border-color)',
        card: 'var(--card-bg)',
        glass: {
          DEFAULT: 'var(--glass-bg)',
          border: 'var(--glass-border)',
        },
        code: 'var(--code-bg)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
