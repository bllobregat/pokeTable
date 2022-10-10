import { useState, useEffect, useCallback } from "react";

export type Breakpoint = "S" | "M" | "L" | "XL" | "XXL";

type UseBreakpointWithDebounceProps = {
	withDebounce?: true;
	timeout?: number;
};

type UseBreakpointWithoutDebounceProps = {
	withDebounce?: false;
	timeout?: never;
};

type UseBreakpointProps =
	| UseBreakpointWithDebounceProps
	| UseBreakpointWithoutDebounceProps;

export const breakpointNumericValues = {
	S: 0,
	M: 764,
	L: 1016,
	XL: 1436,
	XXL: 1920,
};

const getDeviceConfig = (windowWidth: number): Breakpoint => {
	switch (true) {
		case windowWidth >= breakpointNumericValues.XXL:
			return "XXL";
		case windowWidth >= breakpointNumericValues.XL:
			return "XL";
		case windowWidth >= breakpointNumericValues.L:
			return "L";
		case windowWidth >= breakpointNumericValues.M:
			return "M";
		case windowWidth >= breakpointNumericValues.S:
			return "S";
		default:
			return "S";
	}
};

export function useBreakpoint({
	withDebounce = true,
	timeout = 200,
}: UseBreakpointProps = {}): Breakpoint {
	const isClient = typeof window === "object";

	const getWidth = (): number | undefined => {
		return isClient ? window.innerWidth : undefined;
	};

	const [windowWidth, setWindowWidth] = useState(getWidth());

	const debounce = useCallback(
		function debounce(func: any) {
			let timer: any;
			return () => {
				clearTimeout(timer);
				timer = setTimeout(() => {
					func();
				}, timeout);
			};
		},
		[timeout]
	);

	useEffect((): any => {
		if (!isClient) return false;

		function handleResize(): void {
			setWindowWidth(getWidth());
		}

		const callBack = withDebounce ? debounce(handleResize) : handleResize;

		window.addEventListener("resize", callBack);
		return (): void => window.removeEventListener("resize", handleResize);
	}, [isClient]);

	return getDeviceConfig(windowWidth || 0);
}
