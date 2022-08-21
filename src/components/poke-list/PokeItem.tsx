import { useState } from 'react'
import PokemonService from '../../services/PokemonData'
import stringUtils from '../../utils/stringUtils'
import Card from './Card'

const PokeItem = ({name, url}: {name: string, url: string}) => {
    const [showPokemon, setShowPokemon] = useState(false)
    const [pokemonData, setPokemonData]: [any, any] = useState(null)
    // const [pokemonDescription, setPokemonDescription]: [any, any] = useState(null)
    
    const showButton = async () => {
        //get pokemon data
        try {
            // const speciesId = stringUtils.getIdFromUrl(species)
            // const pokemonData = await PokemonService.getPokemonAndSpecies(`pokemon/${pokemonId}`,`pokemon-species/${pokemonId}`)
            console.log('url is ', url)
            const pokemonId = stringUtils.getIdFromUrl(url)
            const pokemonDataById = await PokemonService.getPokemonById(pokemonId)

            console.log('data by id', pokemonDataById)
            
            
            const getPokemonDataSpecies = await PokemonService.getPokemonData(`${pokemonDataById.species.url}`)

            console.log('data from species', getPokemonDataSpecies)
            //TODO: fix returned json data
            //activate the flag to display the card
             setShowPokemon(true)

            console.log('POKEMON DATA IS',pokemonDataById);
            setPokemonData(pokemonDataById)
        } catch(err) {
            console.log('POKEMON DATA IS ERROR',err);
        }

    }

    if (!showPokemon){
        return(
            <div className="SinglePokemon">
                <h1>{name}</h1>
                <button onClick={showButton}>show pokemon</button>
            </div>
        )
    } else{
        //property doesn't exist
        //https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-object#:~:text=The%20%22Property%20does%20not%20exist,type%20with%20variable%20key%20names.
        return (
            <div>
                {pokemonData? 
                <Card pokemonJson={pokemonData}></Card>
                : 'loading'}
                <button onClick={()=> setShowPokemon(!showPokemon)}>hide data</button>
            </div>
        )
    }

}

export default PokeItem