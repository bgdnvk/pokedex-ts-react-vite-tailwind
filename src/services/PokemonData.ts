interface PokemonData {
    count: number,
    next: any,
    previous: any,
    results?: Array<any>
}

const getAllPokemon = async (): Promise<PokemonData> => {
  try {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData;
  } catch (err) {
    console.log(`error loading data ${err}`);
    return {
        count: 0,
        next: 0,
        previous: 0,
        results: []
    }
  }
};

const getPokemonById = async (id: any): Promise<any> => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData;
  } catch (err) {
    console.log(`error loading data ${err}`);
    return {
        error: err
    }
  }
};

export default { getAllPokemon, getPokemonById };
