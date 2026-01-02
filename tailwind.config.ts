import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Dark Mode Base (from visual-presentation-plan.md)
                'bg-primary': '#0a0e27',
                'bg-secondary': '#1a1f3a',
                'glass-bg': 'rgba(255, 255, 255, 0.05)',

                // Accent Colors
                'accent-cyan': '#00d9ff',
                'accent-purple': '#7c3aed',
                'accent-success': '#10b981',
                'accent-warning': '#f59e0b',

                // Text
                'text-primary': '#ffffff',
                'text-secondary': '#a0aec0',
                'text-muted': '#64748b',

                // Design System Token Mapping
                foreground: {
                    DEFAULT: 'var(--fgColor-default, #e6edf3)',
                    muted: 'var(--fgColor-muted, #7d8590)',
                    subtle: 'var(--fgColor-subtle, #6e7681)',
                },
                background: {
                    DEFAULT: 'var(--bgColor-default, #0d1117)',
                    muted: 'var(--bgColor-muted, #161b22)',
                    inset: 'var(--bgColor-inset, #010409)',
                },
                border: {
                    DEFAULT: 'var(--borderColor-default, #30363d)',
                    muted: 'var(--borderColor-muted, #21262d)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            fontSize: {
                'hero': '3.5rem',      // 56px
                'section': '2.5rem',   // 40px
                'card': '1.75rem',     // 28px
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'counter': 'counter 2s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                counter: {
                    from: { opacity: '0', transform: 'translateY(10px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}

export default config
