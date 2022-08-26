import { Key, useState } from "react"
import PokeItem from "./PokeItem"

const PokeList = ({allPokemon, formData}:{allPokemon: any, formData: any}) => {
  const [listCss, setListCss] = useState('grid grid-cols-2 md:grid-cols-4 gap-2 lg:grid-cols-6 gap-4 p-6')
//flex-wrap p-6 divide-y divide-slate-200 border-2 border-red-500
    return(
        <div className="relative">
          {/* <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm"> */}
          <div className="">
            <ul className={listCss}>
              {allPokemon?.results
                // ?.slice(0-999)
                ?.filter((e: { name: string }) =>
                  e.name.toLowerCase().includes(formData.toLowerCase())
                )
                ?.map((e: { name: string; url: string }, _i: Key | null | undefined) => (
                  <li key={_i} className={"flex p-6 rounded-lg shadow-lg bg-white max-w-sm"}>
                    <PokeItem name={e.name} url={e.url} setListCss={setListCss}></PokeItem>
                  </li>
                ))}
            </ul>
          </div>
        </div>
    )
}

export default PokeList