import { useState } from 'react'
import PokemonService from '../../services/PokemonData'
import stringUtils from '../../utils/stringUtils'
import Card from './card/Card'

const PokeItem = ({name, url}: {name: string, url: string}) => {
    const [showPokemon, setShowPokemon] = useState(false)
    const [pokemonData, setPokemonData]: [any, any] = useState(null)
    
    const showCardButton = async () => {
        //get pokemon data
        try {
            console.log('-----inside pokeItem showButton----');
            console.log('url is ', url)
            //get the id thro a regex functions
            const pokemonId = stringUtils.getIdFromUrl(url)
            //get the data
            const pokemonDataById = await PokemonService.getPokemonById(pokemonId)
            console.log('data by id', pokemonDataById)
            console.log(typeof pokemonDataById)
            //TODO: better typesafety and errors
            const pokemonDataSpecies = await PokemonService.getPokemonData(`${pokemonDataById?.species?.url}`)
            console.log('data from species', pokemonDataSpecies)

            //since we had to make 2 calles to the pokeapi we combine the data to pass it as a single object
            let combinedJson = {pokemonDataById, pokemonDataSpecies}
            console.log('combined json is ',combinedJson)
            //update the state of the data we are going to pass
            setPokemonData(combinedJson)
            //make the flag true so the pokeCard opens up
            setShowPokemon(true)
        } catch(err) {
            console.log('POKEMON DATA IS ERROR',err);
        }
    }
    //if the showPokemon flag is false we don't show the card
    //by pressing the button we load the data and pass it to the card
    if (!showPokemon){
        return(
            <div className="SinglePokemon">
                <h1>{name}</h1>
                <button onClick={showCardButton}
                className={'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'}
                >show pokemon</button>
            </div>
        )
    } else{
        //show the card and display a button to close it
        return (
            <div>
                <button onClick={()=> setShowPokemon(!showPokemon)}
                className={'inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out'}
                >hide data</button>
                {pokemonData? 
                <Card pokemonJson={pokemonData}></Card>
                : 'loading data...'}
            </div>
        )
    }
}

export default PokeItem