import Image from 'next/image'
import Link from 'next/link'
import signature from '@assets/images/sig.svg'
import { SiGithub } from '@icons-pack/react-simple-icons'

export default function Footer() {
	const date = new Date()
	const year = date.getFullYear()
	return (
		<footer className="flex flex-col items-center gap-2 md:flex-row md:items-end md:justify-between">
			<div className="flex flex-col items-center gap-2 md:items-start">
				<Link
					href="https://beto.codes/"
					className="inline-block w-[50px]"
				>
					<Image
						src={signature}
						alt="Beto's Logo"
					/>
				</Link>
				<div className="block text-xs">©{year} beto carlos</div>
			</div>

			<Link
				href="https://github.com/MarioC3/ui-explorations"
				target="_blank"
				className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 p-2 text-white transition-colors hover:bg-slate-100 hover:text-slate-900"
			>
				<SiGithub size={16} />
				<span className="text-xs">Github Repo</span>
			</Link>
		</footer>
	)
}
