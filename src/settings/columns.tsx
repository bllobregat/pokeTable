import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Image } from "../components/Image/Image";

export const columns: GridColDef[] = [
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
		renderCell: (params: GridRenderCellParams<any>) => {
			return <Image src={params.value} alt={params.value} />;
		},
	},
	{ field: "name", headerName: "Name", width: 130 },
	{
		field: "types",
		headerName: "Types",
		width: 130,
	},
	{ field: "evolution", headerName: "Evolution", width: 100 },
];
