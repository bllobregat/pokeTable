import { capitalize } from "@mui/material/utils";
import { Row } from "../components/DataTable/DataTableProps";

type imageType = {
	slot: number;
	type: { name: string; url: string };
};

export const pokemonRowMapper = (data: any, evolutionChain: string[]): Row => {
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
		dataAdded: new Date(),
	};
};

export const removePokemonRowByIndex = (rows: Row[], index: number): Row[] => {
	return rows.filter((row) => row.id !== index);
};
