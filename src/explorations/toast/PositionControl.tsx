import { positions } from './toast.schema'
import PositionButton from './PositionButton'

export default function PositionControl() {
	return (
		<div className="mx-auto grid max-w-60 grid-cols-6 gap-2">
			{positions.map((option) => (
				<PositionButton
					key={option}
					option={option}
				/>
			))}
		</div>
	)
}
