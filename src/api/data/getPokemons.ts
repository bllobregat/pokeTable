import capitalize from "@mui/material/utils/capitalize";
import Axios from "axios";
import { Row } from "../../components/DataTable/DataTableProps";
import { pokemonRowMapper } from "../../utils/utils";

type PokemonNameType = {
	name: string;
	url: string;
};

export type AditionalData = {
	evolChain: string[];
	description: string;
};

export const getPokemon = async (query: string): Promise<Row> => {
	const url = `https://pokeapi.co/api/v2/pokemon/${encodeURI(query)}`;
	const { data } = await Axios.get(url);

	if (!!data) {
		const aditionalData = await getAditionalData(data.id);
		return pokemonRowMapper(data, aditionalData);
	}

	return {
		id: 0,
		image: "Unknown",
		name: "Unknown",
		types: [],
		evolutionChain: [],
		dataAdded: new Date(),
		description: "",
	};
};

export const getAditionalData = async (id: number): Promise<AditionalData> => {
	const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
	const { data } = await Axios.get(pokemonSpeciesUrl);
	const evolChain: string[] = [];
	let description = "";

	if (!!data) {
		const response = await Axios.get(data.evolution_chain.url);
		description = data.flavor_text_entries[0].flavor_text || "";
		let evoData = response?.data?.chain;

		do {
			evolChain.push(capitalize(evoData.species.name));
			evoData = evoData["evolves_to"][0];
		} while (!!evoData && evoData.hasOwnProperty("evolves_to"));
	}

	return { evolChain, description };
};

export const getPokemonsNames = async (): Promise<any> => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0}`;
	const { data } = await Axios.get(url);

	if (!!data) {
		return data?.results?.map((pokemon: PokemonNameType) => pokemon.name) || [];
	}

	return [];
};
