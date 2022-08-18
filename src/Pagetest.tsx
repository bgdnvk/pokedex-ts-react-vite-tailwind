import { useState, useEffect } from "react"

const Pagetest = () => {
    const [data, setData] = useState('')
    const [formData, setFormData] = useState('')
    const [pokemon, setPokemon] = useState('')

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

    const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        setPokemon(formData)
        setFormData('')

        loadPokemonData(formData)
    }

    const loadPokemonData  = async (userInput: string) => {
        console.log(`user input: ${userInput}`);
        
        try {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            const jsonData = await data.json()
            console.log(jsonData);
        } catch (error) {
            console.log(`error loading data ${error}`);
            
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
                <div>{pokemon}</div>
            </div>
        </div>
    )
}

export default Pagetest