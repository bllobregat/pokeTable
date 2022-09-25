import { useContext, useEffect, useState } from "react";
import { getPokemon } from "../api/data/getPokemons";
import { Row } from "../components/DataTable/DataTableProps";
import { PokemonsContext } from "../context/PokemonsProvider";

export interface pokemonData {
	pokemonData: Row;
	isLoading: boolean;
}

export const useFetchPokemon = (): pokemonData => {
	const { pokemonName } = useContext(PokemonsContext);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [pokemonData, setPokemonData] = useState<Row>({} as Row);

	useEffect(() => {
		const fetchPokemonData = async () => {
			if (!!pokemonName) {
				const pokemonRow: Row = await getPokemon(
					pokemonName.toLocaleLowerCase()
				);
				setPokemonData(pokemonRow);
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
