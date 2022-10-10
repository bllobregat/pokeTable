import {
	pokemonDataMock,
	pokemonDataRowMock,
	pokemonsRowsDataMock,
} from "../api/mocks/pokemons";
import { pokemonRowMapper, removePokemonRowByIndex } from "./utils";
import { Row } from "../components/DataTable/DataTableProps";

describe("utils", () => {
	it("pokemonRowMapper should return a Row object", () => {
		pokemonDataRowMock.dataAdded = expect.any(Date);
		const result: Row = pokemonRowMapper(pokemonDataMock, {
			evolChain: pokemonDataRowMock.evolutionChain,
			description: pokemonDataRowMock.description,
		});
		expect(result).toEqual(pokemonDataRowMock);
	});

	it("removePokemonRowByIndex should return a Rows array", () => {
		const rowsPokemonFilter = removePokemonRowByIndex(pokemonsRowsDataMock, 7);
		expect(rowsPokemonFilter).toEqual(pokemonsRowsDataMock.slice(0, 3));
	});
});
