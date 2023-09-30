import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "brand-dark-blue": "#1D1F4D",
      "brand-blue": "#008BF5",
      "brand-purple": "#3A3E91",
      "brand-orange": "#F6933E",
      "brand-dark-orange": "#C96A3D",
      "brand-white": "#EEEEEE",
    },
    extend: {
      keyframes: {
        typing: {
          '0%': { width: "0" },
          '5%': { width: "0" },
          '40%': { width: 'var(--width)'},
          '60%': { width: 'var(--width)'},
          '95%': { width: "0" },
          '100%': { width: "0" },
        },
        "blink-caret": {
          "50%": {
            "border-color": "transparent",
          },
        },
      },
      animation: {
        typing:
          "typing 2.5s steps(13, end) 1s both, blink-caret 0.6s step-end infinite alternate",
        "typing-bounce":
          "typing 6s steps(var(--length), end) 1s both infinite alternate, blink-caret 0.6s step-end infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
