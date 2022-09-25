import { Row } from "../components/DataTable/DataTableProps";

export const removePokemonRowByIndex = (rows: Row[], index: number): Row[] => {
	return rows.filter((row) => row.id !== index);
};
