import { useEffect } from "react";

export const useKeyDown = (key: string, callback: () => void) => {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === key) {
				callback();
			}
		};
		window.addEventListener("keydown", handleEscape);

		return () => window.removeEventListener("keydown", handleEscape);
	}, [key, callback]);
};
