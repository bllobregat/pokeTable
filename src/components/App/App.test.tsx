import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
	it("Should render App correctly", () => {
		render(<App />);
		expect(screen.getByTestId("app_container")).toBeInTheDocument();
	});

	it("Should render App header", () => {
		render(<App />);
		expect(screen.getByRole("heading")).toBeInTheDocument();
	});

	it("Should render App main", () => {
		render(<App />);
		expect(screen.getByRole("main")).toBeInTheDocument();
	});
});
