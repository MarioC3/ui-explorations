import { type PropsWithChildren, forwardRef } from 'react'
import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import type { Card, Variant } from './toast.schema'
import { useAtomValue, useSetAtom } from 'jotai'
import { cardsAtom, positionAtom } from './toast.state'

const animationVariants = {
	topToBottom: {
		initial: { y: -20, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: -20, opacity: 0 },
	},
	bottomToTop: {
		initial: { y: 20, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 20, opacity: 0 },
	},
}

const variantClass: Record<Variant, string> = {
	notice: 'before:bg-neutral-300 text-neutral-600',
	warning: 'before:bg-amber-500 text-amber-800',
	success: 'before:bg-emerald-500 text-emerald-800',
	error: 'before:bg-rose-500 text-rose-800',
}

interface Props {
	card: Card
}
export default forwardRef<HTMLLIElement, PropsWithChildren<Props>>(function Card({ card, children }, ref) {
	const position = useAtomValue(positionAtom)
	const setCards = useSetAtom(cardsAtom)

	const animVariant = position.includes('top') ? animationVariants['topToBottom'] : animationVariants['bottomToTop']

	const handleDismiss = (id: string) => {
		setCards((cards) => cards.filter((card) => id !== card.id))
	}

	return (
		<motion.li
			ref={ref}
			layout
			initial="initial"
			animate="animate"
			exit="exit"
			variants={animVariant}
			transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
			className={twMerge(
				'before group relative flex w-72 gap-2 rounded-lg border bg-white p-4 text-sm shadow-2xl before:absolute before:inset-y-0 before:left-0 before:w-2 before:rounded-l-lg before:content-[""]',
				variantClass[card.variant]
			)}
		>
			<button
				aria-label="Dismiss Card"
				aria-live="off"
				className="absolute right-2 top-2"
				onClick={() => {
					handleDismiss(card.id)
				}}
			>
				<X size={16} />
			</button>
			<div className="text-xs">{children}</div>
		</motion.li>
	)
})
