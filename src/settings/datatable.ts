import { GridColDef } from "@mui/x-data-grid";
import { columns } from "./columns";

export interface DataTableSettings {
	columns: GridColDef[];
	pageSize: number;
	rowsPerPageOptions?: number[];
	checkboxSelection?: boolean;
}


export const dataTableSettings: DataTableSettings = {
	columns,
	pageSize: 5,
	rowsPerPageOptions: [10],
	checkboxSelection: true,
};
