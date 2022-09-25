import {
	GridToolbarContainer,
	GridToolbarDensitySelector,
} from "@mui/x-data-grid";

export const CustomToolbar = () => {
	return (
		<GridToolbarContainer>
			<GridToolbarDensitySelector />
		</GridToolbarContainer>
	);
};
