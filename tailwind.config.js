/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
            '> *': {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '700',
              lineHeight: '1.3',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h1: {
              fontSize: '2.5em',
              marginTop: '0',
              marginBottom: '0.8em',
            },
            h2: {
              fontSize: '1.75em',
              marginTop: '1.75em',
              marginBottom: '0.8em',
              'scroll-margin-top': '6rem',
            },
            h3: {
              fontSize: '1.5em',
              marginTop: '1.5em',
              marginBottom: '0.6em',
              'scroll-margin-top': '6rem',
            },
            h4: {
              marginTop: '1.5em',
              marginBottom: '0.6em',
              'scroll-margin-top': '6rem',
            },
            img: {
              borderRadius: '0.375rem',
              marginTop: '2em',
              marginBottom: '2em',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              lineHeight: '1.8',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
              '&::before': {
                content: '""',
                width: '0.5em',
                height: '0.5em',
                position: 'absolute',
                backgroundColor: 'hsl(var(--primary) / 0.5)',
                borderRadius: '50%',
                left: '0.5em',
                top: '0.75em',
              },
            },
            'ol > li': {
              paddingLeft: '0.5em',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'hsl(var(--primary) / 0.5)',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            code: {
              color: 'var(--tw-prose-code)',
              fontWeight: '500',
              '&::before': {
                content: '"`"',
              },
              '&::after': {
                content: '"`"',
              },
            },
            pre: {
              color: 'var(--tw-prose-pre-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
              overflowX: 'auto',
              fontWeight: '400',
              fontSize: '0.9em',
              lineHeight: '1.7142857',
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
              borderRadius: '0.375rem',
              paddingTop: '0.8571429em',
              paddingRight: '1.1428571em',
              paddingBottom: '0.8571429em',
              paddingLeft: '1.1428571em',
            },
            a: {
              color: 'hsl(var(--primary))',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s',
              '&:hover': {
                color: 'hsl(var(--primary) / 0.8)',
                textDecoration: 'underline',
              },
            },
            'a code': {
              color: 'hsl(var(--primary))',
            },
            hr: {
              borderColor: 'var(--tw-prose-hr)',
              marginTop: '3em',
              marginBottom: '3em',
            },
            '.lead': {
              fontSize: '1.25em',
              lineHeight: '1.6',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              color: 'var(--tw-prose-lead)',
            },
            strong: {
              fontWeight: '700',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
              overflow: 'hidden',
            },
            thead: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--tw-prose-th-borders)',
              backgroundColor: 'hsl(var(--muted) / 0.3)',
            },
            'thead th': {
              verticalAlign: 'bottom',
              padding: '0.75em',
              fontWeight: '600',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--tw-prose-td-borders)',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'baseline',
              padding: '0.75em',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.8',
            h1: {
              fontSize: '2.75em',
            },
            h2: {
              fontSize: '1.875em',
            },
            h3: {
              fontSize: '1.5em',
            },
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        heading: [
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} 