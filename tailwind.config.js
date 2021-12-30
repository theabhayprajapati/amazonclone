module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './src/Components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: '#232F3E',
          DEFAULT: '#131921',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/line-clamp')],
}
