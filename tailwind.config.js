/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'barpink': '#ffbcbc',
      'searchpink': '#ffecec',
      'pinkycandy': '#ffeade',
      'white': '#ffffff',
      'borderpink': '#d6aeae',
      'themegrey': '#e8d8d8',
      'darktext': '#786b6b',
      'darkfont': '#a88888'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}