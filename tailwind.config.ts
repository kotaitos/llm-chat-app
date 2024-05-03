import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkgray: '#18181B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      addCommonColors: false,
      defaultTheme: 'dark',
      defaultExtendTheme: 'dark',
      layout: {},
      themes: {
        light: {
          colors: {
            default: '#ffffff',
            primary: '#EFAA52',
            secondary: '#E7CC8F',
            success: '#008000',
            warning: '#F8F3E6',
            danger: '#b22222',
          },
        },
        dark: {
          colors: {
            default: '#18181B',
            primary: '#18181B',
            secondary: '#27272A',
            success: '#17C964',
            warning: '#F5A524',
            danger: '#F31260',
          },
        },
      },
    }),
  ],
};
export default config;
