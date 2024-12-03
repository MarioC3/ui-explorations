import { useSetAtom } from 'jotai'
import { type Variant, variants } from './toast.schema'
import { cardsAtom } from './toast.state'

export default function VariantControl() {
	const setCards = useSetAtom(cardsAtom)

	const handleVariant = (option: Variant) => {
		const card = {
			id: crypto.randomUUID(),
			variant: option,
		}
		setCards((cards) => {
			return [...cards, card]
		})
	}

	return (
		<div className="grid grid-cols-4 gap-2">
			{variants.map((option) => (
				<button
					key={option}
					className="relative rounded-md border border-neutral-200 bg-white py-2 text-sm transition-colors after:absolute after:inset-0 after:rounded-md after:opacity-0 after:shadow-inner after:shadow-red-600 after:transition-shadow after:duration-700 after:content-[''] hover:border-transparent hover:bg-red-500 hover:text-white active:after:opacity-100 active:after:transition-none"
					onClick={() => handleVariant(option)}
				>
					{option}
				</button>
			))}
		</div>
	)
}
