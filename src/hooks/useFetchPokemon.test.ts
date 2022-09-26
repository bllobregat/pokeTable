import { renderHook } from "@testing-library/react";
import { pokemonsRowsDataMock } from "../api/mocks/pokemons";
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

	it("should return pokemon values", async () => {
		const { result } = renderHook(() => useFetchPokemon());
		const { current } = result;
		expect(current).toEqual({
			pokemonData: pokemonsRowsDataMock[2],
			isLoading: false,
		});
	});
});
