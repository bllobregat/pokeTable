import { Box, Modal, Typography } from "@mui/material";
import { useContext, useMemo } from "react";
import { PokemonsContext } from "../../context";
import { Image } from "../Image";
import { style } from "./ModalSelected.css";

interface ModalProps {
	isModalOpen: boolean;
	pokemonIndex: number;
	saveModalVisibility: (isModalOpen: boolean) => void;
}

export const ModalSelected = (props: ModalProps) => {
	const { isModalOpen, pokemonIndex, saveModalVisibility } = props;
	const { state } = useContext(PokemonsContext);
	const handleClose = () => saveModalVisibility(false);

	const pokemonSelected = useMemo(
		() => state.find((pokemon) => pokemon.id === pokemonIndex),
		[pokemonIndex]
	);

	return (
		<>
			<Modal
				open={isModalOpen}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
				onClose={handleClose}
			>
				<Box sx={style}>
					<Typography align="center" variant="h6" component="h2">
						{pokemonSelected?.name}
					</Typography>
					<Image
						src={pokemonSelected?.image || ""}
						alt={pokemonSelected?.name || ""}
					/>
				</Box>
			</Modal>
		</>
	);
};
