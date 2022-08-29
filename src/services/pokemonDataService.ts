import {
  PokemonByIdInterface,
  PokemonBySpeciesInterface,
  PokemonData,
} from "../interfaces/pokemonDataInterfaces";

//helper function for DRY
const getData = async (url: String): Promise<any> => {
  try {
    const data = await fetch(`${url}`);
    const jsonData = await data.json();
    // console.log(jsonData);
    return jsonData;
  } catch (err) {
    // console.log(`error loading data ${err}`);
    throw new Error(`error loading data: ${err}`);
  }
};

//get all the pokemon, used in the useEffect at the start
const getAllPokemon = async (): Promise<PokemonData> => {
  return await getData(
    `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
  );
};

const getPokemonBySpeciesId = async (
  id: String
): Promise<PokemonBySpeciesInterface> => {
  return await getData(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
};

const getPokemonById = async (id: string): Promise<PokemonByIdInterface> => {
  return await getData(`https://pokeapi.co/api/v2/pokemon/${id}`);
};

export default { getAllPokemon, getPokemonById, getPokemonBySpeciesId };