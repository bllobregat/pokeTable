import "./App.css";
import { DataTable } from "../DataTable";
import { dataTableSettings } from "../../settings/datatable";
import { Header } from "../Header/Header";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { PortraitPlaceholder } from "../PortraitPlaceHolder/PortraitPlaceHolder";

export const App = () => {
	const breakpoint = useBreakpoint();

	if (
		breakpoint === "S" &&
		window.matchMedia("(orientation: portrait)").matches
	) {
		return <PortraitPlaceholder />;
	}

	return (
		<div className="appClass" data-testid="app_container">
			<Header />
			<main>
				<DataTable settings={dataTableSettings} />
			</main>
		</div>
	);
};
