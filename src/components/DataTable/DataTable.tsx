import { FormControlLabel, Switch } from "@mui/material";
import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { removePokemonRowByIndex } from "../../utils/tableActionsUtils";
import { CustomToolbar } from "../CustomToolbar/CustomToolBar";
import { DataTableProps, Row } from "./DataTableProps";

export const DataTable = (props: DataTableProps) => {
	const { pokemonIndex, setPokemons } = useContext(PokemonsContext);
	const { pokemonData } = useFetchPokemon();
	const { rows, settings } = props;
	const { columns, pageSize, rowsPerPageOptions, checkboxSelection } = settings;
	const [newPageSize, setNewPageSize] = useState(pageSize);
	const [rowIds, setRowIds] = useState<number[]>([
		...rows.map((row: Row): number => row.id),
	]);

	useEffect(() => {
		const isNotNewPokemon: boolean = !rowIds.includes(pokemonIndex);
		if (Object?.keys(pokemonData)?.length > 0 && isNotNewPokemon) {
			setRowIds((rowIds: number[]) => [pokemonData.id, ...rowIds]);
			setPokemons([pokemonData, ...rows]);
		}
	}, [pokemonData, pokemonIndex]);

	useEffect(() => {
		setPokemons(removePokemonRowByIndex(rows, pokemonIndex));
		setRowIds((rowIds: number[]): number[] => {
			return rowIds.filter((rowId: number) => rowId !== pokemonIndex);
		});
	}, [pokemonIndex]);

	
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
				rows={rows}
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
