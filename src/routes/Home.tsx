import { useState, useEffect, FormEvent } from "react";
import SearchForm from "../components/forms/SearchForm";
import PokeList from "../components/poke-list/PokeList";
import PokemonService from "../services/PokemonData";

interface PokemonData {
    count?: number;
    next?: any;
    previous?: any;
    results?: Array<any>;
  }



const Home = () => {
    const [formData, setFormData] = useState("");
const [pokemon, setPokemon] = useState("");
const [pokemonJson, setPokemonJson] = useState(null);
const [allPokemon, setAllPokemon] = useState<PokemonData | null>(null);

const loadPokemonData = async (userInput: string): Promise<any> => {
    console.log(`user input: ${userInput}`);

    try {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${userInput}`
      );
      const jsonData = await data.json();
      console.log(jsonData);
      setPokemonJson(jsonData);
      return jsonData;
    } catch (error) {
      console.log(`error loading data ${error}`);
      setPokemonJson(null);
      return "err";
    }
  };

useEffect(() => {
    let fetchData: boolean = false;
    let data;

    // if (fetchData) PokemonService.getAllPokemon()
    const getData = async () => {
      fetchData = true;
      data = PokemonService.getAllPokemon();
      setAllPokemon(await data);
    };

    return () => {
      //https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
      getData();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFormData(e.target.value);

    // e.preventDefault()
    // setFormData()
  };

const handleForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setPokemon(formData);
    setFormData("");

    // setPokemonJson(await Promise.resolve(loadPokemonData(formData)))
    loadPokemonData(formData);
  };


    return(
        <main>
        <SearchForm
        handleForm={handleForm}
        handleChange={handleChange}
        formData={formData}
      ></SearchForm>

      <PokeList 
      allPokemon={allPokemon}
      formData={formData}
      ></PokeList>
        </main>
    )
}

export default Home