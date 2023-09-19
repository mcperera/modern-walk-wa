import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#2BD9AF",
        "custom-red": "#FF5E84",
        "custom-blue": "#0E42FD",
      },
    },
  },
  plugins: [],
};
export default config;
