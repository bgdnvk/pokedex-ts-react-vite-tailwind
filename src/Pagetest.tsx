import { useState, useEffect } from "react"

const Pagetest = () => {
    const [data, setData] = useState('')
    const [formData, setFormData] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [pokemonJson, setPokemonJson] = useState(null)

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

    const handleForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
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
        <div>
            <div>first thing</div>
            <div>second thing</div>
            <button onClick={handleClick}>button clicked {data}</button>

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
        </div>
    )
}

export default Pagetest