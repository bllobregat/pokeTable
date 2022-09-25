import { IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import { Delete } from "@mui/icons-material";
import { Row } from "../DataTable/DataTableProps";
import { PokemonsContext } from "../../App";

interface TableActionsProps {
	row: Row;
}

export const TableActions = (props: TableActionsProps) => {
	const { row } = props;
	// const { pokemons, setPokemons } = useContext(PokemonsContext);
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const handleClick = (evt: React.MouseEvent) => {
		evt.stopPropagation();
		setPokemonIndex(row.id);
		// setPokemons((pokemons: Row[]) => {
		// 	return pokemons.filter((pokemon) => pokemon.id !== row.id);
		// });
	};

	return <IconButton onClick={handleClick} children={<Delete />}></IconButton>;
};
