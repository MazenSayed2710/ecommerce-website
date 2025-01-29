/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(4, minmax(0, 270px))",
      },
      gridTemplateRows: {
        custom: "repeat(2, minmax(0, 300px))",
      },
      colors: {
        "custom-white": "#6b7280",
        "custom-black": "#1f2937",
      },
      animation: {
        "zoom-in": "zoom-in 0.4s ease-in-out ",
        "zoom-out": "zoom-in 0.4s ease-in-out reverse",
      },
      keyframes: {
        "zoom-in": {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.02)" },
          "40%": { transform: "scale(1.04)" },
          "60%": { transform: "scale(1.06)" },
          "80%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
