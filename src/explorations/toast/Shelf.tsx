import { twMerge } from 'tailwind-merge'
import { AnimatePresence, motion } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import type { Position } from './toast.schema'
import { cardsAtom, positionAtom, topThreeCardsAtom } from './toast.state'
import Card from './Card'
import { useKeyDown } from '@/hooks/useKeyDown'
import { useCallback } from 'react'

const positionVariants: Record<Position, string> = {
	topLeft: 'top-4 left-4 flex-col',
	topCenter: 'top-4 left-1/2 -translate-x-1/2 flex-col',
	topRight: 'top-4 right-4 flex-col',
	bottomLeft: 'bottom-4 left-4 flex-col-reverse',
	bottomCenter: 'bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse',
	bottomRight: 'bottom-4 right-4 flex-col-reverse',
}

export default function Shelf() {
	const position = useAtomValue(positionAtom)
	const topThreeCards = useAtomValue(topThreeCardsAtom)
	const [cards, setCards] = useAtom(cardsAtom)

	const handleEscape = useCallback(() => {
		setCards([])
	}, [setCards])

	useKeyDown('Escape', handleEscape)

	return (
		<ol
			role="region"
			aria-live="polite"
			aria-label="notification"
			className={twMerge('absolute z-10 flex gap-2', positionVariants[position])}
		>
			<AnimatePresence mode="popLayout">
				{topThreeCards.map((card) => (
					<Card
						key={card.id}
						card={card}
					>
						<VisuallyHidden.Root>{card.variant}</VisuallyHidden.Root>
						<span className="block font-semibold">Hey you!</span>
						I&apos;ve heard good things about the author of this site. You should hire him!
					</Card>
				))}

				{cards.length > 1 && (
					<motion.button
						aria-label="Dismiss All"
						aria-live="off"
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ type: 'spring', duration: 0.1 }}
						key={'clearAll'}
						className="z-20 self-end rounded-lg border border-neutral-100 bg-white px-2 py-0.5 text-xs shadow-sm"
						onClick={() => setCards([])}
					>
						clear all
					</motion.button>
				)}
			</AnimatePresence>
		</ol>
	)
}
