"use client";

import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import { PropsWithChildren } from "react";

import "jotai-devtools/styles.css";

export default function ToastProvider({ children }: PropsWithChildren) {
	return (
		<Provider>
			<DevTools />
			{children}
		</Provider>
	);
}
