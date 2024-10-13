import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#e6e6e6",
        customGreen: "#6bc982",
        customGreenDark: "#57a667",
        customBlack: "#121212",
        customWhite: "#e6e6e6",
      },
    },
  },
  plugins: [],
};
export default config;
