import { render, screen } from "@testing-library/react";
import { Header, srcImage } from "./Header";

describe("HeaderTest", () => {
	it("Should render component", () => {
		render(<Header />);
		expect(screen.getByRole("heading")).toBeInTheDocument();
	});

	it("Should render image", () => {
		render(<Header />);
		const img = screen.getByRole("img");
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute("src", srcImage);
	});
});
