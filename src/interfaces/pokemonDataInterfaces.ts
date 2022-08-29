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
