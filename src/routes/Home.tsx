import { useState, useEffect, FormEvent } from "react";
import SearchForm from "../components/forms/SearchForm";
import PokeList from "../components/poke-list/PokeList";
import PokemonService from "../services/PokemonData";

interface PokemonData {
  count: number;
  next: any | null;
  previous?: any | null;
  results?: Array<any>;
}

const Home = () => {
  const [formData, setFormData] = useState("");
  const [pokemonJsonData, setPokemonJsonData] = useState<PokemonData | null>(
    null
  );

  useEffect(() => {
    let fetchData: boolean = false;
    let data;

    // if (fetchData) PokemonService.getAllPokemon()
    const getData = async () => {
      fetchData = true;
      data = PokemonService.getAllPokemon();
      setPokemonJsonData(await data);
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

    // setPokemon(formData);
    setFormData("");

    // setPokemonJson(await Promise.resolve(loadPokemonData(formData)))
    // loadPokemonData(formData);
  };

  return (
    <main>
      <SearchForm handleChange={handleChange} formData={formData}></SearchForm>

      <PokeList
        pokemonJsonData={pokemonJsonData}
        formData={formData}
      ></PokeList>
    </main>
  );
};

export default Home;
