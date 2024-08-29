/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 5s linear infinite',
      },
      backgroundImage: {
         'section-7':"url('https://framerusercontent.com/images/mdQZ7esbJolTlpZKs3AVEpLyCo.jpg?scale-down-to=2048')",

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
