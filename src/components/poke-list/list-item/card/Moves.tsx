import { Key, useState } from "react"
import { MovesInterface } from "./interfaces"


//TODO: https://stackoverflow.com/questions/38324949/error-ts2339-property-x-does-not-exist-on-type-y
const Moves = ({moves}:MovesInterface) => {
    console.log('MOVES IS ', moves)
    
    
    const [showMoves, setShowMoves] = useState(false)

    if(showMoves){
        return(
            <div>
            <button 
            className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setShowMoves(!showMoves)}>hide moves</button>
            <p>moves</p>
            <ul>
                {moves.map((e, _i:Key) => <li key={_i}>{e.move.name}</li>)}
            </ul>
            <br></br>
        </div>
        )
    } else {
        return(
            <button
            className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setShowMoves(!showMoves)}>show moves</button>
        )
    }

}
export default Moves