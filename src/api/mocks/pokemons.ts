import { Row } from "../../components/DataTable";

const templateImage = (id: number): string =>
	`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const pokemonsDataMock: Row[] = [
	{
		id: 25,
		image: templateImage(25),
		name: "pikachu",
		types: ["static"],
		evolution: "Raichu",
	},
	{
		id: 1,
		image: templateImage(1),
		name: "bulbasaur",
		types: ["grass", "poison"],
		evolution: "Ivysaur",
	},
	{
		id: 4,
		image: templateImage(4),
		name: "charmander",
		types: ["fire"],
		evolution: "Charmeleon",
	},
	{
		id: 7,
		image: templateImage(7),
		name: "squirtle",
		types: ["water"],
		evolution: "Wartortle",
	},
];
