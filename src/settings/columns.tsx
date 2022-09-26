import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Image } from "../components/Image/Image";
import { TableActions } from "../components/TableActions/TableActions";
import moment from "moment";

export const columns: GridColDef[] = [
	{
		field: "id",
		headerName: "Index",
		type: "number",
		width: 70,
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
		sortable: true,
	},
	{
		field: "image",
		headerName: "Image",
		width: 80,
		renderCell: (params: GridRenderCellParams) => {
			return <Image src={params.value} alt={params.value} />;
		},
		flex: 1,
		headerAlign: "center",
		align: "center",
		sortable: false,
	},
	{
		field: "types",
		headerName: "Types",
		width: 130,
		flex: 1,
		headerAlign: "center",
		align: "center",
		sortable: false,
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
		sortable: false,
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
		field: "dataAdded",
		headerName: "Data added",
		width: 200,
		headerAlign: "center",
		align: "center",
		sortable: false,
		renderCell: (params: GridRenderCellParams) => {
			return <p>{moment(params?.value).format("DD/MM/YYYY")}</p>;
		},
	},
	{
		field: "actions",
		headerName: "Actions",
		type: "actions",
		sortable: false,
		renderCell: (params: GridRenderCellParams) => {
			const { row } = params;
			return <TableActions row={row} />;
		},
	},
];
