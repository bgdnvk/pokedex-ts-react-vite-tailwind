import { Key, useState } from "react";
import PokeItem from "./list-item/PokeItem";

interface PokemonDataElement {
  name: string,
  url: string | null
}

export interface PokemonDataElementWithUrl extends PokemonDataElement {
  url: string;
}

const PokeList = ({
  pokemonJsonData,
  formData,
}: {
  pokemonJsonData: any;
  formData: any;
}) => {
  const [listCss, setListCss] = useState(
    "grid grid-cols-2 md:grid-cols-4 gap-2 lg:grid-cols-6 gap-4 p-6"
  );
  //flex-wrap p-6 divide-y divide-slate-200 border-2 border-red-500
  const [activeCards, setActiveCards] = useState(0);

  return (
    <div className="relative">
      <h1 className="m-1 p-1 text-center">
        {formData === '' && 'Start typing to find any Pokémon!'}
      </h1>
      <ul className={listCss}>
        {pokemonJsonData?.results
          ?.filter((e: PokemonDataElement, _i: Key) => {
            if (formData === "" && _i <= 30) {
              return true;
            }
            if (formData !== "") {
              return e.name.toLowerCase().includes(formData.toLowerCase());
            }
            return false;
          })
          ?.map((e: PokemonDataElementWithUrl, _i: Key) => (
            <li
              key={_i}
              className={"flex p-6 rounded-lg shadow-lg bg-white max-w-sm"}
            >
              <PokeItem
                name={e.name}
                url={e.url}
                setListCss={setListCss}
                activeCards={activeCards}
                setActiveCards={setActiveCards}
              ></PokeItem>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PokeList;
