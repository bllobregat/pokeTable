import { useContext, useEffect, useMemo, useState } from "react";
import { getPokemon } from "../api/data/getPokemons";
import { Row } from "../components/DataTable/DataTableProps";
import { PokemonsContext } from "../context/PokemonContext";
export interface PokemonData {
	pokemonData: Row;
	isPokemonName: boolean;
}

export const useFetchPokemon = (): PokemonData => {
	const { pokemonName, pokemonNames, savePokemonName } =
		useContext(PokemonsContext);
	const [pokemonData, setPokemonData] = useState<Row>({} as Row);
	const [isPokemonName, setIsPokemonName] = useState(false);

	useEffect(() => {
		const fetchPokemonData = async () => {
			setIsPokemonName(pokemonNames.includes(pokemonName));
			if (!!pokemonName) {
				const pokemonRow: Row = await getPokemon(
					pokemonName.toLocaleLowerCase()
				);
				setPokemonData(pokemonRow);
				savePokemonName("");
			}
		};
		fetchPokemonData().catch(console.error);
	}, [pokemonName]);
	console.log({ isPokemonName });
	return {
		pokemonData,
		isPokemonName,
	};
};
