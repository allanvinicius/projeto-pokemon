import Image from "next/image";
import { useEffect, useState } from "react";
import { api } from "../../pages/services/api";
import { AreaPokemon } from "./styles";
import icone from "../../../public/assets/icone-pokeball.svg";

interface PokemonProps {
  id: number;

  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
    }

  }
}

export function RepositoryPokemons() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    api.get("/pokemon").then((response) => setCount(response.data.count));

    api.get('/pokemon').then(response => {
      const resultado: any = [];

      response.data.results.map((item: any) => 
        api.get(item.url).then((resp) => {
          resultado.push(resp.data);
        }));

      setPokemons(resultado);
    });
  }, []);

  // useEffect(() => {
  //   api
  //     .get(`/pokemon?offset=${currentPage}&limit=${pokemonPerPage}`)
  //     .then((response) => setPokemons(response.data.results));
  // }, [currentPage, pokemonPerPage]);

  // useEffect(() => {
  //  api.get('/pokemon').then((response => setPokemons(response.data.results)));
  // },[]);

  //   api.get(`/pokemon/bulbasaur`).then((response) => {
  //     const { id, name, sprites } = response.data;

  //     setPokemons([
  //       {
  //         id,
  //         name,
  //         image: sprites.other.dream_world.front_default,
  //       },
  //     ]);
  //   });
  // }, []);

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
        {pokemons && pokemons.map((item, index) => (
          <li key={index}>
            <button>
              <div className="image">
                {item.sprites.other.dream_world.front_default && (
                  <Image
                    src={item.sprites.other.dream_world.front_default}
                    alt="image"
                    width={140}
                    height={140}
                  />
                )}
              </div>

              <div className="desc">
                <div className="left-desc">
                  <span>#00{item.id}</span>
                  <strong>
                    {item.name
                      ? item.name.charAt(0).toUpperCase() +
                      item.name.slice(1)
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
