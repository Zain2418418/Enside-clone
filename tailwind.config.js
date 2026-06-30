/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Uniform layout movement from left to right
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-50%)' }, 
          '100%': { transform: 'translateX(0%)' },  
        }
      }
    },
  },
  plugins: [],
}