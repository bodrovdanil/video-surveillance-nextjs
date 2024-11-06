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
        'xs': '576px',
        'sm': '640px',
        'md': '868px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1536px',
      },
      colors: {
        'platinum': '#F5F5F5',
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
    },
  },
  plugins: [],
};

export default config;
