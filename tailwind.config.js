const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        customGold: "rgba(164, 128, 31, 0.705)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
