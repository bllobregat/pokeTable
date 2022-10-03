import { renderHook } from "@testing-library/react";
import { useFetchPokemon } from "./useFetchPokemon";

describe("useFetchPokemon tests", () => {
	it("should return state initial", async () => {
		const { result } = renderHook(() => useFetchPokemon());
		const { current } = result;
		expect(current).toEqual({
			pokemonData: {},
			isLoading: true,
		});
	});
});
