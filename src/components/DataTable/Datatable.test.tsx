import { render, screen } from "@testing-library/react";
import { pokemonsRowsDataMock } from "../../api/mocks/pokemons";
import { dataTableSettings } from "../../settings/datatable";
import { DataTable } from "./DataTable";
import type { DataGridProps } from "@mui/x-data-grid";

jest.mock("@mui/x-data-grid", () => {
	const { DataGrid } = jest.requireActual("@mui/x-data-grid");
	return {
		...jest.requireActual("@mui/x-data-grid"),
		DataGrid: (props: DataGridProps) => {
			return <DataGrid {...props} autoHeight />;
		},
	};
});

describe("DataTable Tests", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("Should Render DataTable", () => {
		render(
			<DataTable rows={pokemonsRowsDataMock} settings={dataTableSettings} />
		);
		expect(screen.getByTestId("datagrid-container")).toBeInTheDocument();
	});
});
