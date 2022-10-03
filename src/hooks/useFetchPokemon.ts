import { useContext, useEffect, useState } from "react";
import { getPokemon } from "../api/data/getPokemons";
import { Row } from "../components/DataTable/DataTableProps";
import { PokemonsContext } from "../context/PokemonContext";
export interface PokemonData {
	pokemonData: Row;
	isLoading: boolean;
}

export const useFetchPokemon = (): PokemonData => {
	const { pokemonName, savePokemonName } = useContext(PokemonsContext);
	const [pokemonData, setPokemonData] = useState<Row>({} as Row);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchPokemonData = async () => {
			if (!!pokemonName) {
				const pokemonRow: Row = await getPokemon(
					pokemonName.toLocaleLowerCase()
				);
				setPokemonData(pokemonRow);
				savePokemonName("");
				setIsLoading(false);
			}
		};
		fetchPokemonData().catch(console.error);
	}, [pokemonName]);

	return {
		pokemonData,
		isLoading,
	};
};
