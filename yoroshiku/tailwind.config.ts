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
        airbnbDark : '#d50027',
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
    
  },
  plugins: [],
};
export default config;
