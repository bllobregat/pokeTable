import { createContext, ReactElement, useReducer } from "react";
import {
	Errors,
	ErrorsActionType,
	errorsReducer,
	initErrors,
} from "../reducers/ErrorsReducer";
import { ProviderProps } from "./PokemonsProvider";

type PokemonContextType = {
	errorsState: Errors;
	errorsDispatch: React.Dispatch<ErrorsActionType>;
};

export const ErrorsShowContext = createContext<PokemonContextType>({
	errorsState: { showPokemonRepeated: false, showWrongName: false },
	errorsDispatch: () => {},
});

export const ErrorsProvider = (props: ProviderProps): ReactElement<Errors> => {
	const [errorsState, errorsDispatch] = useReducer(
		errorsReducer,
		{},
		initErrors
	);

	return (
		<ErrorsShowContext.Provider value={{ errorsState, errorsDispatch }}>
			{props.children}
		</ErrorsShowContext.Provider>
	);
};
