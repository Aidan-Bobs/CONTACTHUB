/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html", // global templates
    "./contacts/templates/**/*.html", // app templates
    "./contacts/forms.py", // keep this so widget classes work
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
