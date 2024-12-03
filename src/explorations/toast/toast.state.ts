import { atom } from 'jotai'
import type { Position, Card } from './toast.schema'

export const positionAtom = atom<Position>('topCenter')

export const cardsAtom = atom<Card[]>([])
export const topThreeCardsAtom = atom((get) => get(cardsAtom).slice(-3))

const controlPositions: Record<Position, string> = {
	topLeft: 'items-end justify-end',
	topCenter: 'items-end justify-center',
	topRight: 'items-end justify-start',
	bottomLeft: 'items-start justify-end',
	bottomCenter: 'items-start justify-center',
	bottomRight: 'items-start justify-start',
}
export const controlPositionAtom = atom((get) => {
	if (get(cardsAtom).length > 1) return controlPositions[get(positionAtom)]
})
