import { GridColDef } from "@mui/x-data-grid";
import { Stats } from "../../utils/utils";

export interface Row {
	id: number;
	image: string;
	name: string;
	types: string[];
	evolutionChain: string[];
	dataAdded?: Date | string;
	imageFront?: string;
	stats?: Stats[];
	description: string;
}

export interface DataTableProps {
	rows?: Row[];
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
