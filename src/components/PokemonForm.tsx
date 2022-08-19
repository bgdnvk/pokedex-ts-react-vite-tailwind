import React, {useState} from 'react'

const PokemonForm = () => {
    const [inputData, setInputData] = useState('')
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value)
    }

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setInputData('')
    }

    return(
        <form onSubmit={handleForm}>
                <label>get pokemon</label>
                <input onChange={handleChange} value={inputData}></input>
                <button>accept</button>
        </form>
    )
}

export default PokemonForm