/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'slate': 'hsl(234, 29%, 20%)',
      'charcoal': 'hsl(235, 18%, 26%)',
      'grey': 'hsl(231, 7%, 60%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': '#000'
    }
  },
  plugins: [],
}

