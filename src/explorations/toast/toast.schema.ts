export const variants = ['notice', 'warning', 'success', 'error'] as const
export type Variant = (typeof variants)[number]

export const positions = ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'] as const
export type Position = (typeof positions)[number]

export interface Card {
	id: string
	variant: Variant
}


