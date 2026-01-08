module.exports = {
  content: [
    './index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'dm-bg': '#0c0a09',
        'dm-surface': '#1c1917',
        'dm-text-primary': '#fafaf9',
        'dm-text-secondary': '#d6d3d1',
        'dm-text-muted': '#78716c',
        'dm-border': '#292524',
        'dm-accent': '#fafaf9',
        'dm-accent-hover': '#e7e5e4',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
