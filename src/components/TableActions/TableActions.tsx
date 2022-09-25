import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Delete } from "@mui/icons-material";
import { Row } from "../DataTable/DataTableProps";
import { PokemonsContext } from "../../context/PokemonsProvider";

interface TableActionsProps {
	row: Row;
}

export const TableActions = (props: TableActionsProps) => {
	const { row } = props;
	const { setPokemonIndex } = useContext(PokemonsContext);

	const handleClick = (evt: React.MouseEvent) => {
		evt.stopPropagation();
		setPokemonIndex(row.id);
	};

	return <IconButton onClick={handleClick} children={<Delete />}></IconButton>;
};


