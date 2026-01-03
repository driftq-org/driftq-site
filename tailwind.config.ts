import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",

    // IMPORTANT: don't use "{mdx}" with a single value — Tailwind warns about it
    "./content/**/*.mdx",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
