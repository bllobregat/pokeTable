import { render, screen } from "@testing-library/react";
import { ModalSelected, stats } from "./ModalSelected";

describe("HeaderTest", () => {
	beforeEach(() => {});
	it("Should render component", () => {
		render(
			<ModalSelected
				isModalOpen
				pokemonIndex={4}
				saveModalVisibility={jest.fn()}
			/>
		);
		expect(screen.getByTestId("modal-container")).toBeInTheDocument();
	});

	it("Should render stats", () => {
		render(
			<ModalSelected
				isModalOpen={true}
				pokemonIndex={4}
				saveModalVisibility={jest.fn()}
			/>
		);
		const statsContainer = screen.getByTestId("stats_container");
		expect(statsContainer).toBeInTheDocument();

	});
});
