/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'principal': '#e2211c',
			'white': '#fff'
		},
		screens: {
			'mobile': '300px',
			// => @media (min-width: 640px) { ... }
	  
			'laptop': '1023px',
			// => @media (min-width: 1024px) { ... }
	  
			'desktop': '1279px',
			// => @media (min-width: 1280px) { ... }
		  },
	},
	plugins: [],
}
