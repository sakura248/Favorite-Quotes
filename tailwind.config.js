module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        "bg-color": "#f6efef",
        primary: " #4fc4cf",
        "primary-hover": "rgb(242, 80, 66,0.6)",
        secondary: " #f6a541",
        headline: " #181818",
        paragraph: "#252324",
        stroke: "#181818",
        main: "#f2eef5",
        dark: " #252324",
        "dark-glass": "rgba( 37, 35, 36, 0.6 );",
        light: "#f2eef5",
      },
      boxShadow: {
        shadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
      },
    },
  },
  plugins: [],
};
