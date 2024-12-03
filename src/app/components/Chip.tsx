import { PropsWithChildren } from "react";

export default function Chip({ children }: PropsWithChildren) {
	return (
		<span className="shrink-0 rounded-md bg-neutral-50 px-2 py-1 text-xs leading-none text-neutral-600">
			{children}
		</span>
	);
}
