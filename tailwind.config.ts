import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'dim-gray': '#6A6A6A',
        'gray': '#414141',
        'lavender-blue': '#C8C1F1',
        'blackbirds-egg': '#00C5DE',
        'white': '#FFFFFF',
        'smoky-white': '#F1F1F1',
        'lavender-indigo': '#7D53F8',
        'charcoal': '#364C76',
        'blue-black': '#130C35',
        'silver': '#BCBCBC',
        'signal-black': '#2B2B2B',
        'blue-red': '#0E092A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 700,
        bold: 800,
      },
    },
  },
  plugins: [],
};

export default config;
