'use client'

import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useAtomValue } from 'jotai'
import { controlPositionAtom } from './toast.state'
import VariantControl from './VariantControl'
import PositionControl from './PositionControl'
import Shelf from './Shelf'

export default function Toast() {
	const controlsPosition = useAtomValue(controlPositionAtom)

	return (
		<div className={twMerge('flex h-full items-center justify-center', controlsPosition)}>
			<motion.div
				layout
				transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
				className="max-w-md space-y-6"
			>
				<div className="mx-auto max-w-md text-pretty text-center text-neutral-400">
					<p className="font-serif">
						Click on a variant button to render a Toast. <br /> You can also select the position where the
						toast will render.
					</p>
				</div>

				<div className="space-y-2">
					<VariantControl />
					<PositionControl />
				</div>
			</motion.div>

			<Shelf />
		</div>
	)
}
