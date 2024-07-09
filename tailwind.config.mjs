/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			body: ['Aktifo'],
		  },
		  colors: {
			bg: 'black',
			bg2: '#32527B', //blue
			accent1: 'white',
			accent2: '#F2F2F2',//greyish white
		  },
		  backgroundOpacity: {
			'10': '0.1',
		  },
		  backgroundImage: {
			'noise':'url(/images/noise/noise_v2.svg)',
			'footer-noise':'url(/images/noise/footer-noise.svg)',
			'extended-noise':'url(/images/noise/extended-noise_v2.svg)',
			'colors':'url(/images/insidepages/elements/allelements.webp)',
			'mobilecolors':'url(/images/insidepages/elements/allelementsmobile_v1.webp)',
		  },
		  aspectRatio: {
			'1.59/1': '1.59 / 1',
			'0.88/1': '0.88 / 1',
			'1.72/1': '1.72 / 1'
		  },
		  dropShadow: {
			'lg': '0 10px 8px rgba(255,255,255)'
		  },
		  letterSpacing: {
			tightest: '-.075em',
			tighter: '-.05em',
			tight: '-.025em',
			normal: '0',
			wide: '.025em',
			wider: '.05em',
			widest: '.1em',
			widest: '.25em',
		  }
	  }
	},
	plugins: [],
}
