import { ArrowUpLeft, ArrowUp, ArrowUpRight, ArrowDownLeft, ArrowDown, ArrowDownRight } from 'lucide-react'
import { Position } from './toast.schema'
import { PropsWithChildren } from 'react'
import { useAtom } from 'jotai'
import { positionAtom } from './toast.state'

const positionIcons = {
	topLeft: ArrowUpLeft,
	topCenter: ArrowUp,
	topRight: ArrowUpRight,
	bottomLeft: ArrowDownLeft,
	bottomCenter: ArrowDown,
	bottomRight: ArrowDownRight,
}

interface Props {
	option: Position
}
export default function PositionButton({ option }: PropsWithChildren<Props>) {
	const [position, setPostion] = useAtom(positionAtom)

	const handlePosition = (option: Position) => {
		setPostion(option)
	}

	const Icon = positionIcons[option]

	return (
		<button
			data-active={position === option}
			className="flex aspect-square items-center justify-center rounded-md border border-neutral-200 bg-white text-sm transition hover:bg-neutral-200/60 data-[active=true]:border-transparent data-[active=true]:bg-neutral-200/60"
			onClick={() => handlePosition(option)}
		>
			<Icon size={16} />
		</button>
	)
}
