import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: '#ff385c',
        airbnbDark: '#d50027',
        hoverGray: '#F7F7F7',
        outlineGray: "#b0b0b0",
        default: '#aeaeae',
        spotifyGreen:"#1ed760",
        spotifyLight:"#23f36b",
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#05abf2", // 5, 171, 242
        primaryOrange: "#ff7c17", // 80,230,217
        suedeGrey: "#baaba0",
        Pinku: "#B63E96",
        colombianYellow: "#FFCD00",
        colombianBlue: "#003087",
        colombianRed: "#C8102E",
      },
      

    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lgx: { max: "1107px" },
      // => @media (max-width: 1023px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: {max: "520px"},

      xxs: { max: "420px" },
      // => @media (max-width: 479px) { ... }

      "2xlmin": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      xlmin: { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      lgxmin: { min: "1107px" },

      lgmin: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }

    },
    
  },
  plugins: [],
};
export default config;
