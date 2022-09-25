import { ReactElement, ReactNode, createContext, useState } from "react";
import { Row } from "../components/DataTable/DataTableProps";

export const PokemonsContext = createContext({
	pokemonName: "",
	setPokemonName: (pokemonName: string): void => undefined,
	pokemons: [] as Row[],
	setPokemons: (pokemons: Row[]): void => undefined,
	pokemonIndex: 0,
	setPokemonIndex: (pokenIndex: number): void => undefined,
});

interface PokemonsProviderProps {
	children: ReactNode;
}

export const PokemonsProvider = (
	props: PokemonsProviderProps
): ReactElement<PokemonsProviderProps> => {
	const [pokemonName, setPokemonName] = useState<string>("");
	const [pokemonIndex, setPokemonIndex] = useState<number>(0);
	const [pokemons, setPokemons] = useState<Row[]>([]);

	return (
		<PokemonsContext.Provider
			value={{
				pokemonName,
				setPokemonName,
				pokemons,
				setPokemons,
				pokemonIndex,
				setPokemonIndex,
			}}
		>
			{props.children}
		</PokemonsContext.Provider>
	);
};
