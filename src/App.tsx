import { useContext } from "react";
import "./App.css";
import { DataTable } from "./components/DataTable";
import { InputSearch } from "./components/InputSearch/InputSearch";
import { PokemonContext, PokemonsContext } from "./context/PokemonsContext";
import { dataTableSettings } from "./settings/datatable";

const App = () => {
	const { pokemons, setPokemons } = useContext(PokemonsContext);

	return (
		<div className="">
			<PokemonContext>
				<header>
					<h1>PokeTable</h1>
					<InputSearch setPokemons={setPokemons} />
					<DataTable rows={pokemons} settings={dataTableSettings} />
				</header>
			</PokemonContext>
		</div>
	);
};

export default App;
