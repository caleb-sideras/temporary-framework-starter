/** @type {import('tailwindcss').Config} */

const customColors = require('./src/styles/tailwind-material-colors');
const customWidths = require('./src/styles/tailwind-material-widths');

module.exports = {
  content: [
    "./**.{html,js,templ}",
    "./src/styles/**/*.{html,js,templ}",
    "./src/templates/**/*.{html,js,templ}",
    "./src/app/**/*.{html,templ}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'rainflower': "url('https://lh3.googleusercontent.com/wle2URFsybXPDp10jnrUay6k4sw14Hg8Ajb91djUCIHa1Z7hBDFAbjPhnm-mCmjeoI-6_FPQYW6G9H2Z8kL5LfXfx_FpDlAS3DZX4wZjrbEEe2arzQ=w2400-rj')",
        'audiover': "url('https://lh3.googleusercontent.com/RbMYWtKTLGv7tEAwsya6Z7NHcUYpn4gwkrp3zy9dVhN0jFppAE7VR12r1Hpgh1fZI3MhK3jUsG2xnCSrzpaLiJTxIHWO_CIARwfhe6naTzWo5VIdg8Y=w2400')",
        'audiohor': "url('https://lh3.googleusercontent.com/7wuUlEFgaFEA075w4_OLDilE1vwTPGX7_G5_tiF9iARu8xXu1b-K27vD4cA3KLdhXdwABG1_I6YxvPjeUfzaYe1oVkuIJ0wTvh4ng6k7pEKAQVJzzw=w2400')",
      },
      backgroundColor: customColors,
      textColor: customColors,
      borderColor: customColors,
      placeholderColor: customColors,
      fillColor: customColors,
      width: customWidths,
      margin: customWidths,
    },
  },
  plugins: [

  ]
}

