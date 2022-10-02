import capitalize from "@mui/material/utils/capitalize";
import Axios from "axios";
import { Row } from "../../components/DataTable/DataTableProps";
import { pokemonRowMapper } from "../../utils/utils";

type PokemonNameType = {
	name: string;
	url: string;
};

export const getPokemon = async (query: string): Promise<Row> => {
	const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(query)}`;
	const { data } = await Axios.get(url);

	if (!!data) {
		const evolutionChain = await getEvolutions(data.id);
		return pokemonRowMapper(data, evolutionChain);
	}

	return {
		id: 0,
		image: "Unknown",
		name: "Unknown",
		types: [],
		evolutionChain: [],
		dataAdded: new Date(),
	};
};

export const getEvolutions = async (id: number): Promise<string[]> => {
	const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
	const { data } = await Axios.get(pokemonSpeciesUrl);
	const evoChain: string[] = [];

	if (!!data) {
		const response = await Axios.get(data.evolution_chain.url);
		let evoData = response?.data?.chain;

		do {
			evoChain.push(capitalize(evoData.species.name));
			evoData = evoData["evolves_to"][0];
		} while (!!evoData && evoData.hasOwnProperty("evolves_to"));
	}

	return evoChain;
};

export const getPokemonsNames = async (): Promise<any> => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0}`;
	const { data } = await Axios.get(url);

	if (!!data) {
		return data?.results?.map((pokemon: PokemonNameType) => pokemon.name) || [];
	}

	return [];
};
