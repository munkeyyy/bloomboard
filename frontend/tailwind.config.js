/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neon-green': '0px 4px 10px rgba(193, 255, 0, 0.5)', // Custom shadow
      },
    },
  },
  plugins: [],
}