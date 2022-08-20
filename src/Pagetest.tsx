import { useState, useEffect, FormEvent } from "react"
import PokemonForm from "./components/PokemonForm"
import PokemonService from "./services/PokemonData"
import NavBar from "./components/NavBar"

import './pagetest.css'
import PokeItem from "./components/poke-list/PokeItem"

interface PokemonData {
    count?: number,
    next?: any,
    previous?: any,
    results?: Array<any>
}


const Pagetest = () => {
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

    const handleClick = () => {
        console.log('button clicked');
        setData(data + 1)
    }

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

    // useEffect(() => {
    //     loadPokemonData()
    // }, [])
    
    return (
        <div className="container">
            <NavBar></NavBar>
            {/* <div>first thing</div>
            <div>second thing</div>
            <button onClick={handleClick}>button clicked {data}</button> */}

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

                <u>
                    {allPokemon
                    ?.results
                    ?.slice(0, 9)
                    ?.map((e, i) => <li key={i}>
                        <PokeItem name={e.name} url={e.url} pokemonId={i+1}></PokeItem>
                    </li>)}
                </u>

                {/* <ul>
                    {
                    allPokemon?.results
                    ?.map(e => {
                        console.log(e)
                        return e
                    })
                    ?.filter(x => x?.name.includes('p'))
                    .map((x, i) =><li key={i}>{x.name.toUpperCase()}</li>)
                    }
                </ul> */}

                <ul>
                    {
                    // allPokemon?.results?.map((x, i) =><li key={i}>{x.name}</li>)
                    }
                </ul>
            </div>

            <PokemonForm></PokemonForm>
        </div>
    )
}

export default Pagetest