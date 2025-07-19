import { useEffect, useState } from "react";
import App from "../App";
import { PokemonCard } from "./PokemonCard";

const Pokemon = () => {
  // pokemon state to store pokemon data
  const [pokemon, setPokemon] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      //   console.log(data);

      // results is object inside data
      //   isme currPokemon.url alg api main API k andar
      //   currPokemon.url ko hm await se access kr skte h
      const detailPokeData = data.results.map(async (currPokemon) => {
        // console.log(currPokemon.url);
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
        // console.log(data);
      });
      const detailedResponses = await Promise.all(detailPokeData);
      //   console.log(detailedResponses);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      // console.log(error.message);
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  // search Functionality
  const searchData = pokemon.filter((currPokemon) => {
    return currPokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <section className="container">
      <header>
        <h1>Who's That Pokemon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="search Pokemon"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <ul className="cards">
          {searchData.map((currpokemon) => {
            return (
              <PokemonCard key={currpokemon.id} pokemonData={currpokemon} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Pokemon;
