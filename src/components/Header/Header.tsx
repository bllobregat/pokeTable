import { Alert, Fade } from "@mui/material";
import { ReactElement, useContext } from "react";
import { ErrorsShowContext } from "../../context";
import { PokemonsContext } from "../../context/PokemonContext";
import { Errors } from "../../reducers/ErrorsReducer";
import { HAVE_POKEMON, WRONG_POKEMON_NAME } from "../../utils/keys";
import { Image } from "../Image";
import { InputSearch } from "../InputSearch/InputSearch";
import "./Header.css";

export const srcImage: string =
	"https://freepngimg.com/download/pokemon/37446-1-pokemon-ash-transparent-background.png";

export const renderShowErrors = (
	hasErrors: boolean | undefined,
	errorsState: Errors
): ReactElement | null => {
	const errorMessage: string = errorsState.showPokemonRepeated
		? HAVE_POKEMON
		: WRONG_POKEMON_NAME;

	return hasErrors ? (
		<Fade in={true} exit={true} timeout={{ enter: 1000 }}>
			<Alert severity="error">{errorMessage}</Alert>
		</Fade>
	) : null;
};

export const Header = () => {
	const { savePokemonName } = useContext(PokemonsContext);
	const { errorsState } = useContext(ErrorsShowContext);
	const hasErrors: boolean | undefined =
		errorsState.showPokemonRepeated || errorsState.showWrongName;

	return (
		<>
			<header>
				<Image src={srcImage} alt="ashe" className="imageClass" />
				<div className="formClass">
					<h1>Poke Table</h1>
					<InputSearch savePokemonName={savePokemonName} />
				</div>
			</header>
			<div className="alerts">{renderShowErrors(hasErrors, errorsState)}</div>
		</>
	);
};
