import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        metroPhobic: ["Metrophobic", "sans-serif"],
      },
    },
  },
  plugins: [],
  important: "body",
};

export default config;