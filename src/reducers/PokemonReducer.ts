import { Row } from "../components/DataTable/DataTableProps";

export const ADD_POKEMON = "[POKEMON] addPokemon";
export const REMOVE_POKEMON = "[POKEMON] removePokemon";
export const GET_POKEMON = "[POKEMON] removePokemon";

export type PokemonActionType = {
	type: string;
	payload: Row;
};

export const initRows = (): Row[] => {
	return JSON.parse(localStorage.getItem("state") || "[]");
};

export const pokemonReducer = (
	state: Row[] = [],
	action: PokemonActionType
): Row[] => {
	switch (action.type) {
		case ADD_POKEMON:
			return [...state, action.payload];
		case REMOVE_POKEMON:
			return state.filter((pokemon) => pokemon.id !== action.payload.id);
		default:
			return state;
	}
};
