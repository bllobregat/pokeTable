import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect, useReducer, useState } from "react";
import { pokemonsRowsDataMock } from "../../api/mocks/pokemons";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { ADD_POKEMON, initRows, pokemonReducer } from "../../reducers";
import { removePokemonRowByIndex } from "../../utils/utils";
import { CustomToolbar } from "../CustomToolbar/CustomToolBar";
import { DataTableProps, Row } from "./DataTableProps";

export const DataTable = (props: DataTableProps) => {
	const { state, dispatch } = useContext(PokemonsContext);
	const { pokemonData } = useFetchPokemon();
	const { settings } = props;
	const { columns, pageSize, rowsPerPageOptions, checkboxSelection } = settings;
	const [newPageSize, setNewPageSize] = useState(pageSize);

	useEffect(() => {
		const isANewPokemon: boolean = state
			.map((pokemon) => pokemon.id)
			.includes(pokemonData.id);
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
