import { DataGrid } from "@mui/x-data-grid";
import { DataTableProps } from "./DataTableProps";

export const DataTable = (props: DataTableProps) => {
	const { rows, settings } = props;
	const { columns, pageSize, rowsPerPageOptions, checkboxSelection } = settings;

	return (
		<div
			data-testid={"datagrid-container"}
			style={{ height: 400, width: "100%" }}
		>
			<DataGrid
				data-testid={"datagrid"}
				rows={rows}
				columns={columns}
				pageSize={pageSize}
				rowsPerPageOptions={rowsPerPageOptions}
				checkboxSelection={checkboxSelection}
			/>
		</div>
	);
};
