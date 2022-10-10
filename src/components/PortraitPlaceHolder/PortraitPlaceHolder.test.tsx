import { render, screen } from "@testing-library/react";
import { PortraitPlaceholder } from "./PortraitPlaceHolder";

describe("PortraitPlaceholder", () => {
	it("should render component", () => {
		render(<PortraitPlaceholder />);
		const img = screen.getByRole("img");
		expect(img).toBeTruthy();
	});

	it("should render component image", () => {
		render(<PortraitPlaceholder />);
		const img = screen.getByRole("img");
		expect(img).toBeTruthy();
		expect(img).toHaveAttribute(
			"src",
			"https://cdn-icons-png.flaticon.com/512/481/481345.png"
		);
	});
});
