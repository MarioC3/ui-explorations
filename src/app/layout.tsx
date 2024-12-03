import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

import '@styles/globals.css'
import { ibmPlexMono, ovo } from '@/fonts'

import Header from './components/Header'
import Footer from './components/Footer'

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
			<body className={`${ibmPlexMono.variable} ${ovo.variable} bg-white font-sans text-neutral-900`}>
				<div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-end gap-20 px-4 py-16">
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	)
}
