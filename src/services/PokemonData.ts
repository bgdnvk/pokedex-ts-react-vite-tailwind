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
    // console.log(jsonData);
    return jsonData;
  } catch (err) {
    console.log(`error loading data ${err}`);
    return {
        error: err
    }
  }
};

const getPokemonData = async (params: any): Promise<any> => {
  const baseUrl = 'https://pokeapi.co/api/v2/'

  try{
    const data = await fetch(`${baseUrl}${params}`)
    const jsonData = await data.json()
    // console.log('from general data',jsonData);
    return jsonData
  } catch (err) {
    console.log(`error loading data ${err}`);
    return {
        error: err
    }
  }
  
}

const getPokemonAndSpecies = async (query1: any, query2: any): Promise<any> => {
  const baseUrl = 'https://pokeapi.co/api/v2/'

  try{
    const data1 = await fetch(`${baseUrl}${query1}`)
    const jsonData1 = await data1.json()
    // console.log('from general data',jsonData);
    const data2 = await fetch(`${baseUrl}${query2}`)
    const jsonData2 = await data2.json()
    return [jsonData1, jsonData2]
  } catch (err) {
    //error loading data SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
    console.log(`error loading data ${err}`);
    return {
        error: err
    }
  }
  
}

export default { getAllPokemon, getPokemonById, getPokemonData, getPokemonAndSpecies };
