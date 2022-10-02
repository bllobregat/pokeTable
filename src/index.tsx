import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App/App";
import { PokemonsProvider } from "./context/PokemonsProvider";
import { ErrorsProvider } from "./context";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<PokemonsProvider>
		<ErrorsProvider>
			<App />
		</ErrorsProvider>
	</PokemonsProvider>
);
