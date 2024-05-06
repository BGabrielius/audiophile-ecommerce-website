import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '540px',
        '2sm': '640px',
        '2lg': '1240px',
        '2xl': '1440px',
      },
      colors: {
        'orange-clay': '#D87D4A',
        'orange-peach': '#FBAF85',
        'jet-black': '#101010',
        'light-gray': '#F1F1F1',
        'ultra-white': '#FAFAFA',
      },
      fontSize: {
        h1: '56px',
        h2: '40px',
        h3: '32px',
        h4: '28px',
        h5: '24px',
        h6: '18px',
        overline: '14px',
        sub: '13px',
        body: '15px',
      },
      lineHeight: {
        h1: '58px',
        h2: '44px',
        h3: '36px',
        h4: '38px',
        h5: '33px',
        h6: '24px',
        overline: '19px',
        sub: '25px',
        body: '25px',
      },
      letterSpacing: {
        h1: '2px',
        h2: '1.5px',
        h3: '1.15px',
        h4: '2px',
        h5: '1.7px',
        h6: '1.3px',
        overline: '10px',
        sub: '1px',
      },
    },
  },
  plugins: [],
};
export default config;
