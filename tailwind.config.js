const { hover } = require('@testing-library/user-event/dist/hover');
const { default: jit } = require('tailwindcss/lib/jit');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:jit,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode:false,

  content: [],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBg: "#36393f",
      },
      height:{
        "83vh": "83vh",
      },
      borderRadius: ["hover","focus"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
