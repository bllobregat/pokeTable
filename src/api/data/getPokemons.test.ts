import { pokemonDataRowMock, pokemonsRowsDataMock } from "../mocks/pokemons";
import { getEvolutions, getPokemon } from "./getPokemons";

jest.mock("./getPokemons");
const getPokemonMoked = jest.mocked(getPokemon, true);
const getEvolutionsMocked = jest.mocked(getEvolutions, true);

describe("getPokemons Tests", () => {
	beforeEach(async () => {
		getPokemonMoked.mockResolvedValue(pokemonDataRowMock);
		getEvolutionsMocked.mockResolvedValue(
			pokemonsRowsDataMock[2].evolutionChain
		);
	});

	it("getPokemon should return a Row object", async () => {
		pokemonDataRowMock.dataAdded = expect.any(Date);
		const response = await getPokemon("charmander");
		expect(response).toEqual(pokemonDataRowMock);
	});

	it("getPokemon should return an array with chain evolution", async () => {
		const response = await getEvolutions(4);
		expect(response).toEqual(pokemonsRowsDataMock[2].evolutionChain);
	});
});
