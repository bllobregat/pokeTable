import { useContext } from "react";
import "./App.css";
import { DataTable } from "../DataTable";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { dataTableSettings } from "../../settings/datatable";
import { Header } from "../Header/Header";

export const App = () => {
	const { pokemons } = useContext(PokemonsContext);
	return (
		<div className="appClass" data-testid="app_container">
			<Header />
			<main>
				<DataTable rows={pokemons} settings={dataTableSettings} />
			</main>
		</div>
	);
};
