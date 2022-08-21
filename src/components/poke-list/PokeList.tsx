import { Key } from "react"
import PokeItem from "./PokeItem"

const PokeList = ({allPokemon, formData}:{allPokemon: any, formData: any}) => {

    return(
        <div className="flex flex-wrap border-2 border-red-500">
          {/* <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm"> */}
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm border-2 border-green-900">
            <h1 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              filter pokemon
            </h1>
            <ul className="p-6 divide-y divide-slate-200 border-2 border-red-500">
              {allPokemon?.results
                // ?.slice(0-999)
                ?.filter((e: { name: string }) =>
                  e.name.toLowerCase().includes(formData.toLowerCase())
                )
                ?.map((e: { name: string; url: string }, _i: Key | null | undefined) => (
                  <li key={_i} className={"flex py-4 first:pt-0 last:pb-0"}>
                    <PokeItem name={e.name} url={e.url}></PokeItem>
                  </li>
                ))}
            </ul>
          </div>
        </div>
    )
}

export default PokeList