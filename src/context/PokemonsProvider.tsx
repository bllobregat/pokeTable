import { ReactElement, ReactNode, useState, useReducer } from "react";
import { pokemonReducer, initRows } from "../reducers/PokemonReducer";
import { PokemonsContext } from "./PokemonContext";

export type ProviderProps = {
	children: ReactNode;
};

export const PokemonsProvider = (
	props: ProviderProps
): ReactElement<ProviderProps> => {
	const [pokemonName, setPokemonName] = useState<string>("");
	const [pokemonNames, setPokemonsNames] = useState<string[]>([]);
	const [state, dispatch] = useReducer(pokemonReducer, [], initRows);

	const savePokemonName = (pokemonName: string): void => {
		setPokemonName(pokemonName);
	};

	const savePokemonsNames = (pokemonsNames: string[]): void => {
		setPokemonsNames(pokemonsNames);
	};

	return (
		<PokemonsContext.Provider
			value={{
				pokemonName,
				savePokemonName,
				pokemonNames,
				savePokemonsNames,
				state,
				dispatch,
			}}
		>
			{props.children}
		</PokemonsContext.Provider>
	);
};
