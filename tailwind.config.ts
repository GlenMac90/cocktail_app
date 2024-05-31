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
      },
      screens: {
        xs: "400px",
      },
      colors: {
        slate: {
          dark: "#0D0D10",
          mid: "#14181E",
          light: "#232833",
        },
        light: {
          100: "#FFFFFF",
          200: "#C0C9D6",
        },
        orange: {
          light: "#FFD7A8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
