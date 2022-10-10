import { act, renderHook } from "@testing-library/react";
import {
	Breakpoint,
	breakpointNumericValues,
	useBreakpoint,
} from "./useBreakpoint";

export const resizeWindow = (x: number): void => {
	Object.defineProperty(window, "innerWidth", {
		writable: true,
		configurable: true,
		value: x,
	});
	window.dispatchEvent(new Event("resize"));
};

describe("useBreakpoint", () => {
	let breakpoint: Breakpoint;

	beforeEach(() => {
		jest.clearAllTimers();
		jest.clearAllMocks();
	});

	test("breakpoint updates its value after resizing the window XXL", () => {
		act(() => {
			resizeWindow(breakpointNumericValues.XXL);
		});
		renderHook(() => {
			breakpoint = useBreakpoint();
		});
		expect(breakpoint).toBe("XXL");
	});

	test("breakpoint updates its value after resizing the window XL", () => {
		act(() => {
			resizeWindow(breakpointNumericValues.XL);
		});
		renderHook(() => {
			breakpoint = useBreakpoint();
		});

		expect(breakpoint).toBe("XL");
	});

	test("breakpoint updates its value after resizing the window L", () => {
		resizeWindow(breakpointNumericValues.L);
		renderHook(() => {
			breakpoint = useBreakpoint();
		});

		expect(breakpoint).toBe("L");
	});

	test("breakpoint updates its value after resizing the window M", () => {
		resizeWindow(breakpointNumericValues.M);
		renderHook(() => {
			breakpoint = useBreakpoint();
		});
		expect(breakpoint).toBe("M");
	});

	test("breakpoint updates its value after resizing the window S", () => {
		resizeWindow(breakpointNumericValues.S);
		renderHook(() => {
			breakpoint = useBreakpoint();
		});
		expect(breakpoint).toBe("S");
	});
});
