module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', "cursive"],
        'lato': ['Lato', 'sans-serif'],
        'monserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
