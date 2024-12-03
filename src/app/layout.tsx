import type { Metadata } from 'next'
import '@styles/globals.css'
import { ibmPlexMono, ovo } from '@/fonts'

import Header from './components/Header'

export const metadata: Metadata = {
	title: 'UI Explorations',
	description: 'Exploring UI components and patterns, and creating them from the ground up.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${ibmPlexMono.variable} ${ovo.variable} mx-auto flex max-w-3xl flex-col gap-20 bg-white px-4 py-16 font-sans text-neutral-900`}
			>
				<Header />
				<main className="">{children}</main>
			</body>
		</html>
	)
}
