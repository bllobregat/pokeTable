import capitalize from "@mui/material/utils/capitalize";
import Axios from "axios";
import { Row } from "../../components/DataTable/DataTableProps";

type imageType = {
	slot: number;
	type: { name: string; url: string };
};

const pokemonRowMapper = (data: any, evolutionChain: string[]): Row => {
	const types: string[] =
		data?.types?.map((type: imageType) => {
			return capitalize(type.type.name);
		}) || [];

	return {
		id: data.id,
		image: data.sprites.front_default,
		name: capitalize(data.name),
		types,
		evolutionChain: evolutionChain,
	};
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
