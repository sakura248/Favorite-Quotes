module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        "bg-color": "#f9f4ef",
        "primary-orange": "#f25042",
        "primary-orange-hover": "rgb(242, 80, 66,0.6)",
        secondary: "#eaddcf",
        headline: "#020826",
        paragraph: "#716040",
        stroke: "#020826",
      },
    },
  },
  plugins: [],
};
