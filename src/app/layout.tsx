import type { Metadata } from "next";
import "@styles/globals.css";
import { ibmPlexMono, ovo } from "@/fonts";

export const metadata: Metadata = {
	title: "UI Explorations",
	description:
		"Exploring UI components and patterns, and creating them from the ground up.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${ibmPlexMono.variable} ${ovo.variable} font-sans text-neutral-900`}>
				<main className="mx-auto max-w-3xl bg-white p-4">{children}</main>
			</body>
		</html>
	);
}
