import { capitalize } from "@mui/material/utils";
import { AditionalData } from "../api/data/getPokemons";
import { Row } from "../components/DataTable/DataTableProps";

type imageType = {
	slot: number;
	type: { name: string; url: string };
};

export interface Stats {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url?: string;
	};
}

export const pokemonRowMapper = (data: any, aditionalData: AditionalData): Row => {
	const types: string[] =
		data?.types?.map((type: imageType) => {
			return capitalize(type.type.name);
		}) || [];

	return {
		id: data.id,
		image: data.sprites.front_default,
		name: capitalize(data.name),
		types,
		evolutionChain: aditionalData.evolChain,
		dataAdded: new Date(),
		imageFront: data.sprites.other.home.front_default,
		stats: data.stats,
		description: aditionalData.description,
	};
};

export const removePokemonRowByIndex = (rows: Row[], index: number): Row[] => {
	return rows.filter((row) => row.id !== index);
};


export const formatText = (text: string | undefined): string => {
	return text ? text.replace(/(\r\n|\n|\r|\f)/gm, " ") : "";
};