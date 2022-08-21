import { useState, useEffect, FormEvent } from "react"
import PokemonForm from "./components/PokemonForm"
import PokemonService from "./services/PokemonData"
import NavBar from "./components/NavBar"
import stringUtils from './utils/stringUtils'

// import './pagetest.css'
import PokeItem from "./components/poke-list/PokeItem"

interface PokemonData {
    count?: number,
    next?: any,
    previous?: any,
    results?: Array<any>
}


const App = () => {
    const [data, setData] = useState('')
    const [formData, setFormData] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [pokemonJson, setPokemonJson] = useState(null)
    const [allPokemon, setAllPokemon] = useState<PokemonData | null>(null)

    useEffect(() => {
        let fetchData: boolean = false
        let data

        // if (fetchData) PokemonService.getAllPokemon()
        const getData = async () => {
            fetchData = true
            data = PokemonService.getAllPokemon()
            setAllPokemon(await data)
        }
        
        return () => {
            //https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
            getData()
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setFormData(e.target.value)
        
        // e.preventDefault()
        // setFormData()
    }

    const handleForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()

        setPokemon(formData)
        setFormData('')

        // setPokemonJson(await Promise.resolve(loadPokemonData(formData)))
        loadPokemonData(formData)
    }

    const loadPokemonData  = async (userInput: string): Promise<any> => {
        console.log(`user input: ${userInput}`);
        
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            const jsonData = await data.json()
            console.log(jsonData);
            setPokemonJson(jsonData)
            return jsonData
        } catch (error) {
            console.log(`error loading data ${error}`);
            setPokemonJson(null)
            return 'err'
            
        }
        
    }
    
    return (
        <div className="container">
            <NavBar></NavBar>

            <form onSubmit={handleForm}>
                <label>get pokemon</label>
                <input onChange={handleChange} value={formData}></input>
                <button>accept</button>
            </form>

            <div>
                <h1>my pokemon {pokemon}</h1>
                <div>{pokemonJson? pokemonJson['name']: 'Pokemon not found'}</div>
            </div>

            <div>
                <p>pictures</p>
                <img src={pokemonJson? 
                    pokemonJson['sprites']['front_default']: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'}></img>
            </div>

            <div className="pokemonNameList">
                <p>all pokemon count</p>
                <div>
                    {allPokemon?.results? allPokemon.count: 'no pokemon'}
                </div>

                <div>
                    <h1>filter pokemon</h1>
                    <ol>
                        {allPokemon
                        ?.results
                        // ?.slice(0-999)
                        ?.filter(e => e.name.toLowerCase().includes(formData.toLowerCase()))
                        ?.map((e, _i) => <li key={_i}>
                            <PokeItem name={e.name} url={e.url} pokemonId={_i+1}></PokeItem>
                            </li>)}
                    </ol>
                </div>

            </div>

            <PokemonForm></PokemonForm>
        </div>
    )
}

export default App