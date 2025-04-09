/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#8CC15B",
        DEFAULT: '#1E40AF', // Default primary color
        10: 'rgba(30, 64, 175, 0.1)', // 10% opacity
        30: 'rgba(30, 64, 175, 0.3)', // 30% opacity
        5: 'rgba(30, 64, 175, 0.05)', // 5% opacity
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}
