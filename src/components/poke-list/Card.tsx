const Card = ({pokemonJson}: any) => {
    
    const [pokemonInfo, pokemonDescription] = pokemonJson


    console.log(pokemonJson)
    
    return(
        <div className="pokemonCard">
            <h1>{pokemonInfo.name}</h1>

            <p>ID: {pokemonInfo.id}</p>
            <div>
                <p>types:</p>
                {pokemonInfo.types.map((e: any, _i: any) => <p key={_i}> {e.type.name}</p>)}
            </div>
            <img src={pokemonInfo.sprites.front_default}></img>
            <img src={pokemonInfo.sprites.back_default}></img>
            <img src={pokemonInfo.sprites.other.dream_world.front_default}></img>
            <button>add to favourite</button>
            {/* <p>habitat: {pokemonDescription.habitat.name}</p> */}
            <p>name in Japanese: {pokemonDescription.names[0].name}</p>
            <p>generation: {pokemonDescription.generation.name}</p>
            <p>About: {pokemonDescription.flavor_text_entries[0].flavor_text}</p>

            <div>
                <p>moves</p>
                <ul>
                    {pokemonInfo.moves.map((e: any, _i:any) => <li key={_i}>{e.move.name}</li>)}
                </ul>
                <br></br>
            </div>


        </div>
    )
}

export default Card