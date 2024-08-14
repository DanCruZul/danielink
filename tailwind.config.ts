import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: ["4.375rem", { lineHeight: "1.2em", letterSpacing: "-.03em" }],
      h1s: ["2rem", { lineHeight: "1.2em", letterSpacing: "-.03em" }],
      h1m: ["3.5rem", { lineHeight: "1.2em", letterSpacing: "-.03em" }],
      h2: ["2.75rem", { lineHeight: "1.2em", letterSpacing: "-.03em" }],
      h2m: ["2.375rem", { lineHeight: "1.2em", letterSpacing: "-.03em" }],
      h2s: ["1.75rem", { lineHeight: "1.2em", letterSpacing: "-.03em" }],
      h3: ["1.625rem", { lineHeight: "1.3em", letterSpacing: "-.03em" }],
      h3m: ["1.75rem", { lineHeight: "1.3em", letterSpacing: "-.03em" }],
      h3s: ["1.375rem", { lineHeight: "1.3em", letterSpacing: "-.03em" }],
      h4: ["1.5rem", { lineHeight: "1.4em", letterSpacing: "-.03em" }],
      h5: ["1.25rem", { lineHeight: "1.4em", letterSpacing: "0" }],
      h6: ["1.125rem", { lineHeight: "1.4em", letterSpacing: "-.03em" }],
      p20: ["1.25rem", { lineHeight: "1.6em", letterSpacing: "-.01em" }],
      p20s: ["1.125rem", { lineHeight: "1.6em", letterSpacing: "-.01em" }],
      p16: ["1rem", { lineHeight: "1.6em", letterSpacing: "-.01em" }],
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.2rem" }],
      base: ["1rem", { lineHeight: "1.2rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        "dm-sans": ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
