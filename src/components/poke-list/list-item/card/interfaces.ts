import { PokemonByIdInterface, PokemonBySpeciesInterface, PokemonDataElementWithUrl } from "../../../../interfaces/pokemonDataInterfaces";

export interface CardInterface {
    pokemonDataById: PokemonByIdInterface;
    pokemonDataSpecies: PokemonBySpeciesInterface;
}

export interface PokemonMoveInterface {
    move: PokemonDataElementWithUrl,
    version_group_details: [{
        [key: number]: Array<any>
    }]
}

export interface MovesInterface {
    moves: PokemonMoveInterface[];
}