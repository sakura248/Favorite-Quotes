module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'bg-color' : '#f2f2f2',
        'primary-orange' : '#FE4C04',
        'primary-orange-hover' : 'rgb(255,73,0,0.6)',
      }
    },
  },
  plugins: [],
}
