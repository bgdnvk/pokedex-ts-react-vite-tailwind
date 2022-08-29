import { useRef, useState } from "react";
import {
  PokemonByIdInterface,
  PokemonBySpeciesInterface,
} from "../../../interfaces/pokemonDataInterfaces";
import PokemonService from "../../../services/pokemonDataService";
import stringUtils from "../../../utils/stringUtils";
import Card from "./card/Card";
import { CardInterface } from "./card/interfaces";
import { PokeItemInterface } from "./interfaces";

const PokeItem = ({
  name,
  url,
  setListCss,
  activeCards,
  setActiveCards,
}: PokeItemInterface) => {
  const [showPokemon, setShowPokemon] = useState(false);
  const [cardData, setPokemonCardData] = useState<CardInterface>();

  //ref to scroll
  const myRef = useRef(null);
  //   const executeScroll = (
  //     ref:
  //       | {
  //           current: {
  //             scrollIntoView: (arg0: { behavior: string; block: string }) => void;
  //           };
  //         }
  //       | undefined
  //   ) => {
  //     if (ref && ref.current /* + other conditions */) {
  //       ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //     // myRef.current?.scrollIntoView()
  //   };

  const showCardButton = async () => {
    //get pokemon data
    try {
      console.log("-----inside pokeItem showButton----");
      console.log("url is ", url);
      //get the id thro a regex functions
      const pokemonId = stringUtils.getIdFromUrl(url);
      //get the data
      const pokemonDataById: PokemonByIdInterface =
        await PokemonService.getPokemonById(pokemonId);
      console.log("data by id", pokemonDataById);
      console.log(typeof pokemonDataById);

      //TODO: make it cleaner?
      //get the species url since the id for species data is different from pokemonId
      let speciesUrl: string = "";
      if (pokemonDataById.species?.url) {
        speciesUrl = stringUtils.getSpeciesIdFromUrl(
          pokemonDataById.species?.url
        );
      }
      //assign the species data
      const pokemonDataSpecies: PokemonBySpeciesInterface =
        await PokemonService.getPokemonBySpeciesId(`${speciesUrl}`);
      console.log("data from species", pokemonDataSpecies);
      //since we had to make 2 calles to the pokeapi we combine the data to pass it as a single object
      let combinedJson = { pokemonDataById, pokemonDataSpecies };
      console.log("combined json is ", combinedJson);
      //update the state of the data we are going to pass
      setPokemonCardData(combinedJson);
      //make the flag true so the pokeCard opens up
      setShowPokemon(true);
      //change the css of the List (css grid)
      setListCss("grid grid-cols-2 md:grid-cols-3 gap-2");
      //add active cards to keep the view consistent
      const newActiveCards = activeCards + 1;
      setActiveCards(newActiveCards);
    } catch (err) {
      console.log("POKEMON DATA ERROR", err);
    }
  };

  const hideCardButton = () => {
    //hide card
    setShowPokemon(!showPokemon);
    //decrease the number of active cards
    const newActiveCards = activeCards - 1;
    setActiveCards(newActiveCards);
    //only return to the old grid view if there are no active cards
    if (newActiveCards === 0) {
      setListCss(
        "grid grid-cols-2 md:grid-cols-4 gap-2 lg:grid-cols-6 gap-4 p-6"
      );
    }
  };
  //if the showPokemon flag is false we don't show the card
  //by pressing the button we load the data and pass it to the card
  if (!showPokemon) {
    return (
      <div className="SinglePokemon">
        <h1>{name}</h1>
        <button
          onClick={showCardButton}
          className={
            "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          }
        >
          show pokemon
        </button>
      </div>
    );
  } else {
    //show the card and display a button to close it
    return (
      <div>
        <button
          onClick={hideCardButton}
          className={
            "inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          }
        >
          hide data
        </button>
        {cardData ? (
          <Card refProp={myRef} pokemonJson={cardData}></Card>
        ) : (
          "loading data..."
        )}
      </div>
    );
  }
};

export default PokeItem;
