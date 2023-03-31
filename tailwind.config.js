/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				merriweather: ['var(--font-merriweather)'],
				poppins: ['var(--font-poppins)'],
			},
			colors: {
				text: '#FFFFFF',
				'bg-dark': '#1E3161',
				'bg-light': '#3A4D7C',
				'bg-glow': '#5AC1D8',
			},
			borderRadius: {
				big: '24px',
				little: '5px',
			},
		},
	},
	plugins: [],
};
