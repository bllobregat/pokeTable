import { createContext } from "react";
import { Row } from "../components/DataTable/DataTableProps";
import { PokemonActionType } from "../reducers/PokemonReducer";

type PokemonContextType = {
	pokemonName: string;
	savePokemonName: (pokemonName: string) => void;
	pokemonNames: string[];
	savePokemonsNames: (pokemonsNames: string[]) => void;
	state: Row[];
	dispatch: React.Dispatch<PokemonActionType>;
};

export const PokemonsContext = createContext<PokemonContextType>({
	pokemonName: "",
	savePokemonName: (pokemonName: string): void => {},
	pokemonNames: [],
	savePokemonsNames: (pokemonsNames: string[]) => {},
	state: [],
	dispatch: () => {},
});
