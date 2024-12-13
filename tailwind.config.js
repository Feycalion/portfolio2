/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      animation: {
        "slide-in": "slideIn 1s forwards",
      },
      keyframes: {
        slideIn: {
          from: { opacity: 0, transform: "translateX(-100%)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
