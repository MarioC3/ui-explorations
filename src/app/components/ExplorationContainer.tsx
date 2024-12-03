import { ComponentProps, PropsWithChildren } from "react";
import Chip from "./Chip";

interface Props {
	title: string;
	description?: string;
	stack: string[];
}
export default function ExplorationContainer({
	title,
	description = "",
	stack,
	children,
	...delegated
}: PropsWithChildren<ComponentProps<"article"> & Props>) {
	return (
		<article {...delegated} className="space-y-1">
			<div className="flex flex-col items-end gap-1 text-right text-sm text-neutral-500">
				<h2 className="font-semibold">{title}</h2>
				<div className="flex flex-wrap gap-2">
					{stack.map((tech) => (
						<Chip key={tech}>{tech}</Chip>
					))}
				</div>
				<p>{description}</p>
			</div>
			<div className="relative h-[500px] rounded-md border border-dashed border-neutral-100 bg-neutral-50/70 p-4">
				{children}
			</div>
		</article>
	);
}
