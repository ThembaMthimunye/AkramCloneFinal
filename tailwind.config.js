/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: '-translateX(50%)' },
          '40%': { transform: 'translateX(-40%)' },
        },
      },
    },
  },
  plugins: [],
}
