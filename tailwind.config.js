module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        "bg-color": "#edeef5",
        primary: " #70c88e",
        "primary-hover": "rgb(242, 80, 66,0.6)",
        secondary: " #f6a541",
        headline: " #252324",
        paragraph: "#252324",
        stroke: "#252324",
        main: "#F3F3F3",
        dark: " #252324",
        "dark-glass": "rgba( 37, 35, 36, 0.6 );",
        light: "#edeef5",
      },
      boxShadow: {
        shadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
      },
    },
  },
  plugins: [],
};
