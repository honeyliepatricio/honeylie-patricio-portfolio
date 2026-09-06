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
          950: "#050D15",
          900: "#0B1F33",
          800: "#13304A",
          700: "#1C4163",
          600: "#28527A",
        },
        ink: "#26313B",
        stone: {
          50: "#F8F5EF",
          100: "#F1EBDE",
          200: "#E8E0D3",
          300: "#D9CDB8",
          400: "#A99C87",
          600: "#5C5346",
        },
        gold: {
          400: "#D9C296",
          500: "#C9A96E",
          600: "#AD8A4A",
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
