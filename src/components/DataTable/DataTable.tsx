import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { DataTableProps } from "./DataTableProps";

export const DataTable = (props: DataTableProps) => {
	const { rows, settings } = props;
	const { columns, pageSize, rowsPerPageOptions, checkboxSelection } = settings;
	const [newPageSize, setNewPageSize] = useState(pageSize);

	return (
		<div
			data-testid={"datagrid-container"}
			style={{
				height: 600,
				width: "100%",
				display: "flex",
			}}
		>
			<DataGrid
				data-testid={"datagrid"}
				rows={rows}
				columns={columns}
				pageSize={newPageSize}
				rowsPerPageOptions={rowsPerPageOptions}
				checkboxSelection={checkboxSelection}
				onPageSizeChange={(newSize) => setNewPageSize(newSize)}
				getRowHeight={() => "auto"}
			/>
		</div>
	);
};
