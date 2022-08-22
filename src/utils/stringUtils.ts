//extract the id from the url, return 0 string otherwise since it's for the url
const getIdFromUrl = (url: string):string => {
    // https://pokeapi.co/api/v2/pokemon/1/
    // console.log(typeof url)
    const regex: RegExp = /(?<=pokemon\/)\d+/
    // console.log('url is', url)
    // const pokemonId = url.match(regex)[0]
    const matches = url?.match(regex)
    if(matches){
        const pokemonId = matches[0]
        // console.log('from regex: ', pokemonId)
        // console.log(typeof pokemonId)
        return pokemonId
    }
    return '0'
}

export default {getIdFromUrl}