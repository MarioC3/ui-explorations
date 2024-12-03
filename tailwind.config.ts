import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import Forms from '@tailwindcss/forms'

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/explorations/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-ibm-plex-mono)", ...defaultTheme.fontFamily.sans],
				serif: ["var(--font-ovo)", ...defaultTheme.fontFamily.serif],
			},
            fontSize: {
                xs: '0.694rem',
                sm: '0.833rem',
                base: '1rem',
                lg: '1.2rem',
                xl: '1.44rem',
                '2xl': '1.728rem',
                '3xl': '2.074rem',
                '4xl': '2.488rem',
                '5xl': '2.986rem',
            },
		},
	},
	plugins: [Forms],
} satisfies Config;
