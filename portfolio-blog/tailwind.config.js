/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,md,mdx}",
    "./posts/**/*.{md,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--foreground)',
            '[class~="lead"]': {
              color: 'var(--muted-foreground)',
            },
            a: {
              color: 'var(--accent)',
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--accent-hover)',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: 'var(--foreground)',
              fontWeight: '600',
            },
            'ol > li::marker': {
              color: 'var(--muted-foreground)',
            },
            'ul > li::marker': {
              color: 'var(--muted-foreground)',
            },
            hr: {
              borderColor: 'var(--border)',
            },
            blockquote: {
              color: 'var(--foreground)',
              borderLeftColor: 'var(--accent)',
            },
            h1: {
              color: 'var(--foreground)',
            },
            h2: {
              color: 'var(--foreground)',
            },
            h3: {
              color: 'var(--foreground)',
            },
            h4: {
              color: 'var(--foreground)',
            },
            code: {
              color: 'var(--accent)',
              backgroundColor: 'var(--border)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            'a code': {
              color: 'var(--accent)',
            },
            pre: {
              color: '#fafafa',
              backgroundColor: '#1e1e1e',
              border: '1px solid var(--border)',
            },
            thead: {
              borderBottomColor: 'var(--border)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--border)',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
