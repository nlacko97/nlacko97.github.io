module.exports = {
  content: [
    './public/index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
