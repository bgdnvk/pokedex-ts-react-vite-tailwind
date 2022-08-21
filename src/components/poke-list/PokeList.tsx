import { Key } from "react"
import PokeItem from "./PokeItem"

const PokeList = ({allPokemon, formData}:{allPokemon: any, formData: any}) => {

    return(
        <div className="flex justify-center">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h1 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              filter pokemon
            </h1>
            <ol className="p-6 divide-y divide-slate-200">
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
            </ol>
          </div>
        </div>
    )
}

export default PokeList