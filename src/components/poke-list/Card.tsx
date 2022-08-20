import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

const Card = ({pokemonJson}: any) => {
    
    const [pokemonInfo, pokemonDescription] = pokemonJson


    console.log(pokemonJson)
    
    return(
        <div>
            <h5>Name: {pokemonInfo.name}</h5>
            <p>ID: {pokemonInfo.id}</p>
            <p>types:</p>
            <div>
                {pokemonInfo.types.map((e: any, _i: any) => <p key={_i}> {e.type.name}</p>)}
            </div>
            <img src={pokemonInfo.sprites.front_default}></img>
            <img src={pokemonInfo.sprites.back_default}></img>
            <img src={pokemonInfo.sprites.other.dream_world.front_default}></img>
            <p>lives in {pokemonDescription.habitat.name}</p>
            <p>name in Japanese: {pokemonDescription.names[0].name}</p>
            <p>{pokemonDescription.flavor_text_entries[0].flavor_text}</p>


        </div>
    )
}

export default Card