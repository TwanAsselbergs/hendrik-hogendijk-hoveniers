/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			screens: {
				'tall': { 'raw': '(min-height: 00px)' },
			}
		}
	},
	plugins: []
};
