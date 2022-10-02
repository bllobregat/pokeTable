import { DataGrid } from "@mui/x-data-grid";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ErrorsShowContext } from "../../context";
import { PokemonsContext } from "../../context/PokemonContext";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { ADD_POKEMON } from "../../reducers";
import {
	SHOW_POKEMON_REPEATED,
	SHOW_WRONG_NAME,
} from "../../reducers/ErrorsReducer";
import { CustomToolbar } from "../CustomToolbar/CustomToolBar";
import { DataTableProps } from "./DataTableProps";

export const DataTable = (props: DataTableProps) => {
	const { state, dispatch } = useContext(PokemonsContext);
	const { errorsDispatch } = useContext(ErrorsShowContext);
	const { pokemonData, isPokemonName } = useFetchPokemon();
	const { settings } = props;
	const { columns, pageSize, rowsPerPageOptions, checkboxSelection } = settings;
	const [newPageSize, setNewPageSize] = useState(pageSize);

	const isANewPokemon = useMemo(
		() => state.map((pokemon) => pokemon.id).includes(pokemonData.id),
		[pokemonData]
	);

	console.log({ pokemonData, isPokemonName });

	useEffect(() => {
		if (!isPokemonName && Object.keys(pokemonData).length > 0) {
			errorsDispatch({
				type: SHOW_WRONG_NAME,
				payload: { showWrongName: isPokemonName },
			});
		}
	}, [isPokemonName]);

	useEffect(() => {
		errorsDispatch({
			type: SHOW_POKEMON_REPEATED,
			payload: { showPokemonRepeated: isANewPokemon },
		});
		if (Object.keys(pokemonData).length > 0 && !isANewPokemon) {
			dispatch({ type: ADD_POKEMON, payload: pokemonData });
		}
	}, [pokemonData]);

	useEffect(() => {
		localStorage.setItem("state", JSON.stringify(state));
	}, [state]);

	return (
		<div
			data-testid={"datagrid-container"}
			style={{
				height: 600,
				width: "100%",
				display: "flex",
			}}
		>
			<DataGrid
				data-testid={"datagrid"}
				rows={state}
				columns={columns}
				pageSize={newPageSize}
				rowsPerPageOptions={rowsPerPageOptions}
				checkboxSelection={checkboxSelection}
				onPageSizeChange={(newSize) => setNewPageSize(newSize)}
				getRowHeight={() => "auto"}
				components={{
					Toolbar: CustomToolbar,
				}}
				sx={{
					boxShadow: 2,
					border: 2,
					maxHeight: 500,
					borderColor: "primary.light",
					"& .MuiDataGrid-cell:hover": {
						color: "primary.main",
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: "#FF9494",
					},
				}}
			/>
		</div>
	);
};
