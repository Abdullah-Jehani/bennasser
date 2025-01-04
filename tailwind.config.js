// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        0.5: "0.5px", // Define 0.5px border width
      },
      colors: {
        greyColor: "#EEEEEE",
        blackColor: "#101010",
        lightGray: "#CCCCCC",
        searchBar: "#F9F9F9",
        greenColor: "#249238",
        redColor: "#C50609",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
