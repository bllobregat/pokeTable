import { fireEvent, render, screen } from "@testing-library/react";
import { InputSearch } from "./InputSearch";

describe("InputSearch", () => {
	const setPokemonName = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("Should render component", () => {
		render(<InputSearch setPokemonName={setPokemonName} />);
		expect(screen.getByTestId("form_container")).toBeInTheDocument();
	});

	it("Should call setPokemonName when we introduce a pokemon name", () => {
		render(<InputSearch setPokemonName={setPokemonName} />);
		const input = screen.getByPlaceholderText("Search pokemon");
		fireEvent.change(input, { target: { value: "pikachu" } });
		fireEvent.submit(input);
		expect(setPokemonName).toBeCalledTimes(1);
	});
});
