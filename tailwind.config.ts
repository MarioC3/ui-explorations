import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import Forms from '@tailwindcss/forms'

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-ibm-plex-mono)", ...defaultTheme.fontFamily.sans],
				serif: ["var(--font-ovo)", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [Forms],
} satisfies Config;
