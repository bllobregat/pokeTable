import { DataGrid } from "@mui/x-data-grid";
import { DataTableSettings } from "../../settings/datatable";

export interface Row {
	id: number;
	image: string;
	name: string;
	types: string[];
	evolution: string;
}

export interface DataTableProps {
	rows: Row[];
	settings: DataTableSettings;
	containerClassName?: {
		height?: number;
		width?: string;
	};
}

export const DataTable = (props: DataTableProps) => {
	const { rows, settings } = props;
	const { columns, pageSize, rowsPerPageOptions, checkboxSelection } = settings;

	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={pageSize}
				rowsPerPageOptions={rowsPerPageOptions}
				checkboxSelection={checkboxSelection}
			/>
		</div>
	);
};
