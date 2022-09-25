import { Input } from "@mui/material";
import {
	ChangeEvent,
	SyntheticEvent,
	useContext,
	useEffect,
	useState,
} from "react";
import "./InputSearch.css";
import { getPokemon } from "../../api/data/getPokemons";
import { Row } from "../DataTable/DataTableProps";

interface InputSearchProps {
	setPokemons: (pokemons: Row[]) => any;
}

export const InputSearch = (props: any) => {
	const { setPokemons } = props;
	const [inputValue, setinputValue] = useState("");
	const [pokemonName, setPokemonName] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setinputValue(e.currentTarget.value);
	};

	const handleSubmit = (e: SyntheticEvent): void => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setPokemonName(inputValue);
			setinputValue("");
		}
	};

	useEffect(() => {
		const fetchPokemonData = async () => {
			if (!!pokemonName) {
				const pokemonRow: Row = await getPokemon(
					pokemonName.toLocaleLowerCase()
				);
				setPokemons((pokemons: Row[]) => [pokemonRow, ...pokemons]);
			}
		};

		fetchPokemonData().catch(console.error);
	}, [pokemonName, setPokemons]);

	return (
		<form className="searchContainer" onSubmit={handleSubmit}>
			<p>Pokedex</p>
			<Input
				type="search"
				placeholder="Search pokemon"
				onChange={handleChange}
				value={inputValue}
			/>
		</form>
	);
};
