import "./App.css";
import { DataTable } from "../DataTable";
import { dataTableSettings } from "../../settings/datatable";
import { Header } from "../Header/Header";
import { getPokemonsNames } from "../../api/data/getPokemons";
import { useContext, useEffect } from "react";
import { PokemonsContext } from "../../context";

export const App = () => {
	const { savePokemonsNames } = useContext(PokemonsContext);

	useEffect(() => {
		const fetchPokemonNames = async () => {
			const pokemonNames = await getPokemonsNames();
			savePokemonsNames(pokemonNames);
		};
		fetchPokemonNames().catch(console.error);
	}, []);

	return (
		<div className="appClass" data-testid="app_container">
			<Header />
			<main>
				<DataTable settings={dataTableSettings} />
			</main>
		</div>
	);
};
