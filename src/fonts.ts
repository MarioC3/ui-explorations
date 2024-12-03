import { IBM_Plex_Mono, Ovo } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-ibm-plex-mono",
});

export const ovo = Ovo({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-ovo",
});
