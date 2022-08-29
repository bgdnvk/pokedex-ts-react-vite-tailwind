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

export interface SinglePokemonCardInterface {
    name: string;
    id: number;
    types: Array<any>;
    sprites: any;
    moves: Array<PokemonMoveInterface>;
}

export interface SpeciesPokemonCardInterface {
    names: Array<any>;
    generation: PokemonDataElementWithUrl;
    flavor_text_entries: Array<any>;
}

export interface CardInterface {
    pokemonDataById: SinglePokemonCardInterface;
    pokemonDataSpecies: SpeciesPokemonCardInterface;
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