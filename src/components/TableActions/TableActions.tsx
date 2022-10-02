import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Delete } from "@mui/icons-material";
import { Row } from "../DataTable/DataTableProps";
import { PokemonsContext } from "../../context/PokemonContext";
import { REMOVE_POKEMON } from "../../reducers";

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
