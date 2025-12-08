/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'], 
      },
      colors: {
        // Brand colors
        primary: "#0836C0", 
        blackChinese: "#141414",

        // Blue shades
        blue90: "#594AB9",
        blue80: "#4635B1",
        blue70: "#A39AD8",
        blue20: "#DAD7FF",
        blue10: "#EDEBFB",
        blue5:  "#F5F5FB",

        // Black scale
        black90: "#2C2C2C",
        black80: "#434343",
        black70: "#5B5B5B",
        black60: "#727272",
        black50: "#8A8A8A",
        black40: "#A1A1A1",
        black30: "#B9B9B9",
        black20: "#D0D0D0",
        black10: "#E6E6E6",
        black5:  "#F3F3F3",
        black3:  "#F8F8F8",

        // white scale
        white50 : "#F5F5FB"
      },
    },
  },
  plugins: [],
};
