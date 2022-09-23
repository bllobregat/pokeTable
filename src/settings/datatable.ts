import { GridColDef } from "@mui/x-data-grid";
import React from "react";
export interface DataTableSettings {
	columns: GridColDef[];
	pageSize: number;
	rowsPerPageOptions?: number[];
	checkboxSelection?: boolean;
}

const columns: GridColDef[] = [
	{
		field: "id",
		headerName: "Index",
		type: "number",
		width: 70,
		sortable: true,
	},
	{
		field: "image",
		headerName: "Image",
		width: 130,
	},
	{ field: "name", headerName: "Name", width: 130 },
	{
		field: "types",
		headerName: "Types",
		width: 130,
	},
	{ field: "evolution", headerName: "Evolution", width: 100 },
];

export const dataTableSettings: DataTableSettings = {
	columns,
	pageSize: 5,
	rowsPerPageOptions: [10],
	checkboxSelection: true,
};
