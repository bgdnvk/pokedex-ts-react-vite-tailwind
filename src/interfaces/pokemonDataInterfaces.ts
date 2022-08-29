import { PokemonMoveInterface } from "../components/poke-list/list-item/card/interfaces";

// general data types
export interface PokemonJsonDataInterface {
  count: number;
  next: any | null;
  previous: any | null;
  results: Array<PokemonDataElementWithUrl | any>;
}

export interface PokemonDataElement {
  name: string;
  url: string | null;
}

export interface PokemonDataElementWithUrl extends PokemonDataElement {
  url: string;
}

export interface ErrorInterface {
    error: string;
}

export interface PokemonData {
    count: number,
    next: any,
    previous: any,
    results: Array<PokemonDataElementWithUrl>
}

//helper interfaces for both services and components

export interface PokemonByIdInterface {
    name: string;
    id: number;
    types: Array<any>;
    sprites: any;
    moves: Array<PokemonMoveInterface>;
    species?: PokemonDataElementWithUrl;
    error?: any;
}

export interface PokemonBySpeciesInterface {
    names: Array<any>;
    generation: PokemonDataElementWithUrl;
    flavor_text_entries: Array<any>;
}

// export interface PokeListInterface {
//     pokemonJsonData: PokemonJsonDataInterface | undefined;
//     formData: any;
// }

// export interface PokeItemInterface {
//     name: string;
//     url: string;
//     setListCss: any;
//     activeCards: any;
//     setActiveCards: any;
// }

// export interface CardInterface {
//     pokemonDataById: PokemonByIdInterface;
//     pokemonDataSpecies: PokemonBySpeciesInterface;
// }

// export interface PokemonMoveInterface {
//     move: PokemonDataElementWithUrl,
//     version_group_details: [{
//         [key: number]: Array<any>
//     }]
// }

// export interface MovesInterface {
//     moves: PokemonMoveInterface[];
// }