import { IconButton } from "@mui/material";
import React, { useContext, useReducer } from "react";
import { Delete } from "@mui/icons-material";
import { Row } from "../DataTable/DataTableProps";
import { PokemonsContext } from "../../context/PokemonsProvider";
import { initRows, pokemonReducer, REMOVE_POKEMON } from "../../reducers";

interface TableActionsProps {
	row: Row;
}

export const TableActions = (props: TableActionsProps) => {
	const { row } = props;
	const { dispatch } = useContext(PokemonsContext);

	const handleClick = (evt: React.MouseEvent) => {
		evt.stopPropagation();
		dispatch({ type: REMOVE_POKEMON, payload: row });
	};

	return <IconButton onClick={handleClick} children={<Delete />}></IconButton>;
};
