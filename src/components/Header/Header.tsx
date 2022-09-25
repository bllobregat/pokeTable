import { useContext } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { Image } from "../Image";
import { InputSearch } from "../InputSearch/InputSearch";

export const srcImage: string =
	"https://freepngimg.com/download/pokemon/37446-1-pokemon-ash-transparent-background.png";

export const Header = () => {
	const { setPokemonName } = useContext(PokemonsContext);

	return (
		<header>
			<Image src={srcImage} alt="ashe" className="imageClass" />
			<div className="formClass">
				<h1>Poke Table</h1>
				<InputSearch setPokemonName={setPokemonName} />
			</div>
		</header>
	);
};
