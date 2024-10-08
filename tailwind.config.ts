import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/Space-bg.png')",
        "hero-pattern-two": "url('/Square-bg.svg')",
      },
      colors: {
        "button-bg-color": "var(--button-bg-color)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
export default config;
