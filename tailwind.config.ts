import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      black: colors.neutral[900],
      neutral: {
        600: colors.neutral[600],
        500: colors.neutral[500],
        400: colors.neutral[400]
      },
      yellow: colors.yellow[600],
      orange: colors.orange[600],
      teal: colors.teal[100],
      silver: '#D2D6DB'
    },
    fontFamily: {
      sans: ['Noto Sans']
    },
    fontSize: {
      'sm': ['0.875rem', {lineHeight: '1.25rem'}],
      'lg': ['1.125rem', {lineHeight: '1.75rem'}],
      '3xl': ['1.875rem', {lineHeight: '2.25rem'}]
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;

