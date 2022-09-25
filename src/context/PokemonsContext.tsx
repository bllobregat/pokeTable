import { createContext, useState } from "react";
import { Row } from "../components/DataTable/DataTableProps";

export const PokemonsContext = createContext({
	pokemons: [],
	setPokemons: () => undefined,
});

export const PokemonContext = ({ children }: any) => {
	const [pokemons, setPokemons] = useState<Row[]>([]);

	return (
		<PokemonsContext.Provider value={{ pokemons, setPokemons }}>
			{children}
		</PokemonsContext.Provider>
	);
};
