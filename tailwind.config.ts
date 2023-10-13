import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shark: {
          "50": "#f6f7f7",
          "100": "#e2e5e3",
          "200": "#c5cac7",
          "300": "#a0a8a5",
          "400": "#7c8581",
          "500": "#616b67",
          "600": "#4d5452",
          "700": "#3f4643",
          "800": "#353a37",
          "900": "#2f3231",
          "950": "#1d201f",
        },
      },
      keyframes: {
        marquee1: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-200%)",
          },
        },
      },
      animation: {
        ticker: "marquee1 2s linear",
      },
      fontFamily: {
        custom: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
