import { Row } from "../../components/DataTable/DataTableProps";

export const pokemonsDataMock: Row[] = [
	{
		id: 25,
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		name: "pikachu",
		types: ["static"],
		evolutionChain: ["pichu", "pikachu", "raichu"],
	},
	{
		id: 1,
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		name: "bulbasaur",
		types: ["grass", "poison"],
		evolutionChain: ["bulbasaur", "ivysaur", "venasaur"],
	},
	{
		id: 4,
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		name: "charmander",
		types: ["fire"],
		evolutionChain: ["charmander", "charmeleon", "charizard"],
	},
	{
		id: 7,
		image:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		name: "squirtle",
		types: ["water"],
		evolutionChain: ["squirtle", "wartortle", "blastoise"],
	},
];
