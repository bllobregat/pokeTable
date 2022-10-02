export const SHOW_POKEMON_REPEATED = "[ERRORS] showPokemonRepeated";
export const SHOW_WRONG_NAME = "[ERRORS] showWrongName";

export interface Errors {
	showPokemonRepeated?: boolean;
	showWrongName?: boolean;
}

export type ErrorsActionType = {
	type: string;
	payload: Errors;
};

export const initErrors = (): Errors => {
	return {
		showPokemonRepeated: false,
		showWrongName: false,
	};
};

export const errorsReducer = (
	state: Errors,
	action: ErrorsActionType
): Errors => {
	switch (action.type) {
		case SHOW_POKEMON_REPEATED:
			return {
				...state,
				showPokemonRepeated: action.payload.showPokemonRepeated,
			};
		case SHOW_WRONG_NAME:
			return {
				...state,
				showWrongName: action.payload.showWrongName,
			};
		default:
			return state;
	}
};
