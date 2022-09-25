import { useContext } from "react";
import "./App.css";
import { DataTable } from "../DataTable";
import { InputSearch } from "../InputSearch/InputSearch";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { dataTableSettings } from "../../settings/datatable";

export const App = () => {
	const { pokemons, setPokemonName } = useContext(PokemonsContext);

	return (
		<div className="" data-testid="app_container">
			<header>
				<h1>PokeTable</h1>
				<InputSearch setPokemonName={setPokemonName} />
			</header>
			<main>
				<DataTable rows={pokemons} settings={dataTableSettings} />
			</main>
		</div>
	);
};
