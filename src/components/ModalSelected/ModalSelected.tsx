import { Card, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import { useContext, useMemo } from "react";
import { PokemonsContext } from "../../context";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { formatText } from "../../utils/utils";
import "./ModalSelected.css";

interface ModalProps {
	isModalOpen: boolean;
	pokemonIndex: number;
	saveModalVisibility: (isModalOpen: boolean) => void;
}

export const stats = [
	"Hp",
	"Attack",
	"Defense",
	"S.Attack",
	"S.Defense",
	"Speed",
];

export const ModalSelected = (props: ModalProps) => {
	const { isModalOpen, pokemonIndex, saveModalVisibility } = props;
	const { state } = useContext(PokemonsContext);
	const handleClose = () => saveModalVisibility(false);
	const breakpoint = useBreakpoint();

	const pokemonSelected = useMemo(
		() => state.find((pokemon) => pokemon.id === pokemonIndex),
		[pokemonIndex]
	);

	return (
		<>
			<Modal
				open={isModalOpen}
				data-testid="modal-container"
				onClose={handleClose}
			>
				<Card
					sx={{
						display: "flex",
						flexDirection: "row",
						position: "absolute" as "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: breakpoint === "L" || breakpoint === "M" ? "70%" : "40%",
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						p: 4,
					}}
				>
					<CardMedia
						component="img"
						height="140"
						image={pokemonSelected?.imageFront || ""}
						alt={pokemonSelected?.name}
						sx={{ objectFit: "contain" }}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{pokemonSelected?.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{formatText(pokemonSelected?.description)}
						</Typography>
						<div className="stats" data-testid="stats_container">
							{!!pokemonSelected &&
								pokemonSelected?.stats?.map((stat, i) => (
									<li key={stats[i]}>{stats[i] + " " + stat.base_stat}</li>
								))}
						</div>
					</CardContent>
				</Card>
			</Modal>
		</>
	);
};
