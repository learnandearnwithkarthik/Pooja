// tailwind.config.js
module.exports = {
	// existing content
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  fontFamily: {
		Source: ['"Source Serif 4"', "serif"],
		Bebas: ['"Bebas Neue"', "sans-serif"],
	  },
	  extend: {
		colors: {
		  primary: "#EE8542",
		  secondary: "#48423f",
		  fill: "#F5F4F2",
		  text: "#312c29",
		  backgrounds: "#EDEBE8",
		  border: "#D2CFCC",
		  icons: "#DDDAD5",
		  inputBorder: "#D9D9D9",
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 },
		  },
		  fadeOut: {
			'0%': { opacity: 1 },
			'100%': { opacity: 0 },
		  },
		},
		animation: {
		  fadeIn: 'fadeIn 1.5s ease-in-out forwards',
		  fadeOut: 'fadeOut 1.5s ease-in-out forwards',
		},
	  },
	},
	plugins: [
		require('tailwindcss-filters'),
	],
  };
  