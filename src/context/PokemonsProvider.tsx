import {
	ReactElement,
	ReactNode,
	createContext,
	useState,
	useReducer,
} from "react";
import { Row } from "../components/DataTable/DataTableProps";
import {
	pokemonReducer,
	initRows,
	PokemonActionType,
} from "../reducers/PokemonReducer";

type PokemonContextType = {
	pokemonName: string;
	setPokemonName: any;
	state: Row[];
	dispatch: React.Dispatch<PokemonActionType>;
};

export const PokemonsContext = createContext<PokemonContextType>({
	pokemonName: "",
	setPokemonName: (pokemonName: string): void => undefined,
	state: [],
	dispatch: () => {},
});

interface PokemonsProviderProps {
	children: ReactNode;
}

export const PokemonsProvider = (
	props: PokemonsProviderProps
): ReactElement<PokemonsProviderProps> => {
	const [pokemonName, setPokemonName] = useState<string>("");
	const [state, dispatch] = useReducer(pokemonReducer, [], initRows);

	return (
		<PokemonsContext.Provider
			value={{
				pokemonName,
				setPokemonName,
				state,
				dispatch,
			}}
		>
			{props.children}
		</PokemonsContext.Provider>
	);
};
