/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      container: {
        center: true
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1350px'
      },
      colors: {
        top: '#272343',
        bgSecond: '#f0f2f3',
        hoverMain: '#029fae'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif', 'system-ui']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

