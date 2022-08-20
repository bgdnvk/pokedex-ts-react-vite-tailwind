import { useState } from 'react'
import PokemonService from '../../services/PokemonData'
import Card from './Card'

const PokeItem = ({name, url, pokemonId}: {name: string, url: string, pokemonId: any}) => {
    const [showPokemon, setShowPokemon] = useState(false)
    const [pokemonData, setPokemonData]: [any, any] = useState(null)
    const [pokemonDescription, setPokemonDescription]: [any, any] = useState(null)

    const showButton = async () => {
        //get pokemon data
        const pokemonData = await PokemonService.getPokemonAndSpecies(`pokemon/${pokemonId}`,`pokemon-species/${pokemonId}`)
        //activate the flag to display the card
        setShowPokemon(true)

        console.log(pokemonData);
        setPokemonData(pokemonData)
        

        //pass the data to the state
        //so it passes it to the card comp
        // setPokemonData(pokemonJson)

        // const pokemonSpeciesJson = await PokemonService.getPokemonData(`pokemon-species/${pokemonId}`)
        // setPokemonDescription(pokemonSpeciesJson)
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