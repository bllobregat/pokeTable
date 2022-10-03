import { DataGrid, GridEventListener } from "@mui/x-data-grid";
import { ReactElement, useContext, useEffect, useMemo, useState } from "react";
import { ErrorsShowContext } from "../../context";
import { PokemonsContext } from "../../context/PokemonContext";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { ADD_POKEMON } from "../../reducers";
import { SHOW_POKEMON_REPEATED } from "../../reducers/ErrorsReducer";
import { CustomToolbar } from "../CustomToolbar/CustomToolBar";
import { ModalSelected } from "../ModalSelected/ModalSelected";
import { DataTableProps } from "./DataTableProps";

const renderModal = (
	pokemonIndex: number,
	isModalOpen: boolean,
	saveModalVisibility: (isModalOpen: boolean) => void
): ReactElement => {
	return (
		<ModalSelected
			pokemonIndex={pokemonIndex}
			isModalOpen={isModalOpen}
			saveModalVisibility={saveModalVisibility}
		/>
	);
};

export const DataTable = (props: DataTableProps) => {
	const { state, dispatch } = useContext(PokemonsContext);
	const { errorsDispatch } = useContext(ErrorsShowContext);
	const { pokemonData } = useFetchPokemon();
	const [pokemonIndex, setPokemonIndex] = useState<number>();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { settings } = props;
	const { columns, pageSize, rowsPerPageOptions, checkboxSelection } = settings;
	const [newPageSize, setNewPageSize] = useState(pageSize);

	const isANewPokemon = useMemo(
		() => state.map((pokemon) => pokemon.id).includes(pokemonData.id),
		[pokemonData]
	);

	const saveModalVisibility = (isModalOpen: boolean): void => {
		setIsModalOpen(isModalOpen);
	};

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

	const handleRowClick: GridEventListener<"rowClick"> = (params) => {
		setPokemonIndex(Number(params.id));
		setIsModalOpen(true);
	};

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
				onRowClick={handleRowClick}
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
			{!!pokemonIndex &&
				renderModal(pokemonIndex, isModalOpen, saveModalVisibility)}
		</div>
	);
};
