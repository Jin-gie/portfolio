/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        'background-black' : '#131313',
        'text-color' : '#c6bfc2',
        'title-color' : '#fff'

      }
    },
  },
  plugins: [],
}

