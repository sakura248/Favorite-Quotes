module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        "bg-color": "#fffffe",
        primary: "#f25f4c",
        "primary-hover": "rgb(242, 80, 66,0.6)",
        secondary: "#ff8906",
        headline: "#0f0e17",
        "sub-headline": "#2e2f3e",
        "headline-glass": "rgba( 37, 35, 36, 0.6 );",
        paragraph: "black",
        stroke: "black",
        main: "#fffffe",
        light: "#fffffe",
      },
      boxShadow: {
        shadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
      },
    },
  },
  plugins: [],
};
