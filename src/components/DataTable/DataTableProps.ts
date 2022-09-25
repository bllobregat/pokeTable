import { GridColDef } from "@mui/x-data-grid";

export interface Row {
	id: number;
	image: string;
	name: string;
	types: string[];
	evolutionChain: string[];
}

export interface DataTableProps {
	rows: Row[];
	settings: DataTableSettings;
	containerClassName?: {
		height?: number;
		width?: string;
	};
}

export interface DataTableSettings {
	columns: GridColDef[];
	pageSize: number;
	rowsPerPageOptions?: number[];
	checkboxSelection?: boolean;
}
 