const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			screens: {
				'tall': { 'raw': '(min-height: 00px)' },
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)'
			}
		}
	},
	plugins: [
	  plugin(function ({ matchUtilities, theme }) {
		matchUtilities(
		  {
			'text-shadow': (value) => ({
			  textShadow: value,
			}),
		  },
		  { values: theme('textShadow') }
		)
	  }),
	],
};
