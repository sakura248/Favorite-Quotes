module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary-orange' : '#FE4C04',
        'primary-orange-hover' : 'rgb(255,73,0,0.6)',
      }
    },
  },
  plugins: [],
}
