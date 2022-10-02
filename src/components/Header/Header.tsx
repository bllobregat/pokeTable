import { Alert } from "@mui/material";
import { ReactElement, useContext } from "react";
import { ErrorsShowContext } from "../../context";
import { PokemonsContext } from "../../context/PokemonContext";
import { Errors } from "../../reducers/ErrorsReducer";
import { Image } from "../Image";
import { InputSearch } from "../InputSearch/InputSearch";

export const srcImage: string =
	"https://freepngimg.com/download/pokemon/37446-1-pokemon-ash-transparent-background.png";

export const renderShowErrors = (
	hasErrors: boolean | undefined,
	errorsState: Errors
): ReactElement | null => {
	const errorMessage: string = errorsState.showPokemonRepeated
		? "You already have this pokemon"
		: "Wrong pokemon name";

	return hasErrors ? <Alert severity="error">{errorMessage}</Alert> : null;
};

export const Header = () => {
	const { savePokemonName } = useContext(PokemonsContext);
	const { errorsState } = useContext(ErrorsShowContext);
	const hasErrors: boolean | undefined =
		errorsState.showPokemonRepeated || errorsState.showWrongName;

	return (
		<header>
			<Image src={srcImage} alt="ashe" className="imageClass" />
			<div className="formClass">
				<h1>Poke Table</h1>
				<InputSearch savePokemonName={savePokemonName} />
				{renderShowErrors(hasErrors, errorsState)}
			</div>
		</header>
	);
};
