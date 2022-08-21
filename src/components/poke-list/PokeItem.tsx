import { useState } from 'react'
import PokemonService from '../../services/PokemonData'
import stringUtils from '../../utils/stringUtils'
import Card from './Card'

const PokeItem = ({name, url, pokemonId}: {name: string, url: string, pokemonId: any}) => {
    const [showPokemon, setShowPokemon] = useState(false)
    const [pokemonData, setPokemonData]: [any, any] = useState(null)
    // const [pokemonDescription, setPokemonDescription]: [any, any] = useState(null)

    const showButton = async () => {
        //get pokemon data
        try {
            // const pokemonData = await PokemonService.getPokemonAndSpecies(`pokemon/${pokemonId}`,`pokemon-species/${pokemonId}`)
            console.log('url is ', url)
            const pokemonId = stringUtils.getIdFromUrl(url)
            const pokemonData = await PokemonService.getPokemonAndSpecies(`pokemon/${pokemonId}`,`pokemon-species/${pokemonId}`)
                    //activate the flag to display the card
             setShowPokemon(true)

            console.log('POKEMON DATA IS',pokemonData);
            setPokemonData(pokemonData)
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