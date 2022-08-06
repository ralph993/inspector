/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					darkLight: "#292929",
					dark: "#1D1D1D",
				},
			},
		},
	},
	plugins: [],
};
