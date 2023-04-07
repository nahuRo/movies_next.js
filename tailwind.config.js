/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				fluid: "repeat(auto-fit,minmax(200px,1fr))",
			},
			// boxShadow: {
			// 	rightShadow: "inset -81px 0px 50px -13px rgba(255,255,255,1)",
			// },
		},
	},
	plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
