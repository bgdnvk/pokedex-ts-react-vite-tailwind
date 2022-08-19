const SinglePokemon = (pokemon: any) => {
    console.log('props from SinglePokemon', pokemon)
    console.log('props from SinglePokemon', pokemon.props.name)

    
    return(
        <div className="SinglePokemon">
            <h1>{pokemon.props.name}</h1>
            <p>{pokemon.props.url}</p>
        </div>
    )
}

export default SinglePokemon