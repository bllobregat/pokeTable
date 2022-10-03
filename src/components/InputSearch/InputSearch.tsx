import { Input } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { ErrorsShowContext } from "../../context";
import { CLEAN_ALL_ERRORS } from "../../reducers/ErrorsReducer";
import "./InputSearch.css";

interface InputSearchProps {
	savePokemonName: (pokemonName: string) => void;
}

export const InputSearch = (props: InputSearchProps) => {
	const [inputValue, setinputValue] = useState("");
	const { errorsDispatch } = useContext(ErrorsShowContext);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setinputValue(e.currentTarget.value);
	};

	const handleSubmit = (e: SyntheticEvent): void => {
		e.preventDefault();

		if (!!inputValue && inputValue.trim().length > 2) {
			props.savePokemonName(inputValue.toLowerCase());
			setinputValue("");
			setTimeout(() => {
				errorsDispatch({ type: CLEAN_ALL_ERRORS, payload: {} });
			}, 2000);
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
