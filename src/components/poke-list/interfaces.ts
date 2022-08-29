import { PokemonJsonDataInterface } from "../../interfaces/pokemonDataInterfaces";

export interface PokeListInterface {
    pokemonJsonData: PokemonJsonDataInterface | undefined;
    formData: string;
}