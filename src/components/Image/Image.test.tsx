import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

describe("Image", () => {
	const defaultProps = {
		src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		alt: "pikachu",
		title: "pikachu",
	};

	it("Should render img in the document", () => {
		render(<Image {...defaultProps} />);
		expect(screen.getByRole("img")).toBeInTheDocument();
	});
});
