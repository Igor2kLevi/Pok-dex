/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,html}",
    "./components/**/*.{js,jsx,html}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 5px 12px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
