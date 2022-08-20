import { useState } from 'react'
import PokemonService from '../services/PokemonData'

const SinglePokemon = ({name, url, pokemonId}: {name: string, url: string, pokemonId: any}) => {
    const [showPokemon, setShowPokemon] = useState(false)
    const [pokemonData, setPokemonData] = useState(null)

    const showButton = async () => {
        const pokemonJson = await PokemonService.getPokemonById(pokemonId)
        setShowPokemon(true)
        setPokemonData(pokemonJson)
    }

    if (!showPokemon){
        return(
            <div className="SinglePokemon">
                <h1>{name}</h1>
                <p>{url}</p>
                <button onClick={showButton}>show pokemon</button>
            </div>
        )
    } else{
        //property doesn't exist
        //https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-object#:~:text=The%20%22Property%20does%20not%20exist,type%20with%20variable%20key%20names.
        return (
            <div>
                <h1>{pokemonData? pokemonData?.name: 'loading'}</h1>
                <button onClick={()=> setShowPokemon(!showPokemon)}>hide data</button>
            </div>
        )
    }

}

export default SinglePokemon