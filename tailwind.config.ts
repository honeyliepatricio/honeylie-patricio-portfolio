import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A1420",
          900: "#0F1E31",
          800: "#152A44",
          700: "#1D3A5C",
          600: "#2A4E78",
        },
        ink: "#12202F",
        stone: {
          50: "#F8F7F4",
          100: "#F1EFEA",
          200: "#E5E2DB",
          400: "#A7A296",
          600: "#6B6459",
        },
        gold: {
          400: "#C7A05B",
          500: "#AD8A46",
          600: "#8F7139",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(15, 30, 49, 0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
