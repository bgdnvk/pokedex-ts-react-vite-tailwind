const getIdFromUrl = (url: any) => {
    // https://pokeapi.co/api/v2/pokemon/1/
    const regex = /(?<=pokemon\/)\d+/
    console.log('url is', url)
    console.log('from regex: ', url.match(regex)[0])
    
    const pokemonId = url.match(regex)[0]
    return pokemonId
}

export default {getIdFromUrl}