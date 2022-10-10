import { pokemonDataRowMock, pokemonsRowsDataMock } from "../mocks/pokemons";
import { getAditionalData, getPokemon } from "./getPokemons";

jest.mock("./getPokemons");
const getPokemonMoked = jest.mocked(getPokemon, true);
const getAditionalDataMocked = jest.mocked(getAditionalData, true);

describe("getPokemons Tests", () => {
	beforeEach(async () => {
		getPokemonMoked.mockResolvedValue(pokemonDataRowMock);
		getAditionalDataMocked.mockResolvedValue({
			evolChain: pokemonDataRowMock.evolutionChain,
			description: pokemonDataRowMock.description,
		});
	});

	it("getPokemon should return a Row object", async () => {
		pokemonDataRowMock.dataAdded = expect.any(Date);
		const response = await getPokemon("charmander");
		expect(response).toEqual(pokemonDataRowMock);
	});

	it("getPokemon should return an array with chain evolution", async () => {
		const response = await getAditionalData(4);
		expect(response).toEqual({
			evolChain: pokemonDataRowMock.evolutionChain,
			description: pokemonDataRowMock.description,
		});
	});
});
