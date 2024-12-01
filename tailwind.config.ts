import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        customBackground:{
          light:'#F5F5DC',
          dark:'#050315'
        },
        customForeground:{
          light:'#F5DEB3',
          dark:'#020819'
        },
        customText: {
          light:'#040211',
          dark:'#dbd9ea'
        },
        customMaincolors: {
          primary:'#72BF78'
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
