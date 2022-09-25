import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Image } from "../components/Image/Image";
import moment from "moment";
import { TableActions } from "../components/TableActions/TableActions";

export const columns: GridColDef[] = [
	{
		field: "id",
		headerName: "Index",
		type: "number",
		width: 70,
		headerAlign: "center",
		align: "center",
		sortable: true,
	},
	{
		field: "image",
		headerName: "Image",
		width: 130,
		renderCell: (params: GridRenderCellParams) => {
			return <Image src={params.value} alt={params.value} />;
		},
		flex: 1,
		headerAlign: "center",
		align: "center",
	},
	{
		field: "name",
		headerName: "Name",
		headerAlign: "center",
		align: "center",
		width: 130,
		flex: 1,
	},
	{
		field: "types",
		headerName: "Types",
		width: 130,
		flex: 1,
		headerAlign: "center",
		align: "center",
		renderCell: (params: GridRenderCellParams) => (
			<ul
				style={{
					listStyleType: "none",
				}}
			>
				{params.value.map((role: string, index: number) => (
					<li key={index}>{role}</li>
				))}
			</ul>
		),
	},
	{
		field: "evolutionChain",
		headerName: "Evolution Chain",
		minWidth: 150,
		flex: 1,
		headerAlign: "center",
		align: "center",
		renderCell: (params: GridRenderCellParams) => (
			<ol
				style={{
					listStyleType: "none",
				}}
			>
				{params.value.map((role: string, index: number) => (
					<li key={index}>{role}</li>
				))}
			</ol>
		),
	},
	{
		field: "added",
		headerName: "Added At",
		width: 200,
		headerAlign: "center",
		align: "center",
		renderCell: (params: GridRenderCellParams) => {
			return moment(new Date()).format("YYYY-MM-DD HH:MM:SS");
		},
	},
	{
		field: "actions",
		headerName: "Actions",
		type: "actions",
		renderCell: (params: GridRenderCellParams) => {
			const { row } = params;
			return <TableActions row={row} />;
		},
	},
];
