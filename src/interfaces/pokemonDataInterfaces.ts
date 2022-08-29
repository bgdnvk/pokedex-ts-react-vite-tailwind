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

export interface MovesInterface {
    [index: number]: {
        move: Array<PokemonDataElement>,
        version_group_details: {
            [key: number]: any
        }
    }
}

//----- Components -------
export interface PokeListInterface {
    pokemonJsonData: PokemonJsonDataInterface | undefined;
    formData: any;
}

export interface PokeItemInterface {
    name: string;
    url: string;
    setListCss: any;
    activeCards: any;
    setActiveCards: any;
}

export interface CardInterface {
    pokemonDataById: {
        [key: string]: any
    },
    pokemonDataSpecies: {
        [key: string]: any
    }
}