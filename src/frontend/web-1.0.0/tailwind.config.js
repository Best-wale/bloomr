/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5D5CDE",
        secondary: "#10B981",
        accent: "#F59E0B",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
