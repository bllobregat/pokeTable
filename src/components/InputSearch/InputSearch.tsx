import { Input } from "@mui/material";
import { ChangeEvent, Dispatch, SyntheticEvent, useState } from "react";
import "./InputSearch.css";

interface InputSearchProps {
	savePokemonName: (pokemonName: string)=> void;
}

export const InputSearch = (props: InputSearchProps) => {
	const [inputValue, setinputValue] = useState("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setinputValue(e.currentTarget.value);
	};

	const handleSubmit = (e: SyntheticEvent): void => {
		e.preventDefault();

		if (!!inputValue && inputValue.trim().length > 2) {
			props.savePokemonName(inputValue.toLowerCase());
			setinputValue("");
		}
	};

	return (
		<form
			data-testid="form_container"
			className="searchContainer"
			onSubmit={handleSubmit}
		>
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
