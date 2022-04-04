import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "../../pages/services/api";
import { AreaPokemon } from "./styles";
import icone from "../../../public/assets/icone-pokeball.svg";

interface TypesProps {
  name: string;
}

interface PokemonProps {
  id: number;
  image: string;
  name: string;
}

export function RepositoryPokemons() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState([{} as PokemonProps]);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    api.get("/pokemon").then((response) => setCount(response.data.count));
  }, []);

  useEffect(() => {
    api
      .get(`/pokemon?offset=${currentPage}&limit=${pokemonPerPage}`)
      .then((response) => setPokemons(response.data.results));
  }, [currentPage, pokemonPerPage]);

  useEffect(() => {
    // let name = api.get('/pokemon').then((response => setPokemon(response.data.results.name)));

    api.get(`/pokemon/bulbasaur`).then((response) => {
      const { id, name, sprites } = response.data;

      setPokemons([
        {
          id,
          name,
          image: sprites.other.dream_world.front_default,
        },
      ]);
    });
  }, []);

  // useEffect(() => {
  //   api.get("/type").then((response) => setTypes(response.data.results));
  // }, []);

  return (
    <AreaPokemon>
      <div className="top">
        <Image src={icone} alt="icone" />
        <span>{count} Pokémons</span>
      </div>

      <ul className="grid-pokemon">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <button>
              <div className="image">
                {pokemon.image && (
                  <Image
                    src={pokemon.image}
                    alt="image"
                    width={140}
                    height={140}
                  />
                )}
              </div>

              <div className="desc">
                <div className="left-desc">
                  <span>#00{pokemon.id}</span>
                  <strong>
                    {pokemon.name
                      ? pokemon.name.charAt(0).toUpperCase() +
                        pokemon.name.slice(1)
                      : ""}
                  </strong>
                </div>

                <div className="icon"></div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </AreaPokemon>
  );
}
