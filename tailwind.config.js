module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        "bg-color": "#eff0f3",
        "primary-orange": "#ff8e3c",
        "primary-orange-hover": "rgb(255,73,0,0.6)",
      },
    },
  },
  plugins: [],
};
