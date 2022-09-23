import { pokemonsDataMock } from "./api/mocks/pokemons";
import "./App.css";
import { DataTable } from "./components/DataTable";
import { dataTableSettings } from "./settings/datatable";

function App() {
	return (
		<div className="">
			<header className="">
				<DataTable rows={pokemonsDataMock} settings={dataTableSettings} />
			</header>
		</div>
	);
}

export default App;
