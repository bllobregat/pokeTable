import { render, screen } from "@testing-library/react";
import { pokemonsDataMock } from "../../api/mocks/pokemons";
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
	it("Should Render DataTable", () => {
		render(<DataTable rows={pokemonsDataMock} settings={dataTableSettings} />);
		expect(screen.getByTestId("datagrid-container")).toBeInTheDocument();
	});

	it("Should Render DataTable with 5 rows", () => {
		render(<DataTable rows={pokemonsDataMock} settings={dataTableSettings} />);
		const dataTableContainer = screen.getByTestId("datagrid-container");
		expect(dataTableContainer).toBeInTheDocument();
	});
});
