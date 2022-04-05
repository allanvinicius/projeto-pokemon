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

  };
  types: [{
    name: string;
  }];
}

export function RepositoryPokemons() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonPerPage, setPokemonPerPage] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const resultado: any = [];
    api.get("/pokemon").then((response) => setCount(response.data.count));

    api.get('/pokemon').then(response => {
      response.data.results.map((item: any) =>
        api.get(item.url).then((resp) => {
          resultado.push(resp.data);
        })
      );

      setTimeout(() => {
        setPokemons(resultado);
      }, 1000);
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
        {pokemons.map((item) => (
          <li key={item.id}>
            <button>
              <div className="image">
                {item.sprites.other.dream_world.front_default && (
                  <Image
                    src={item.sprites.other.dream_world.front_default}
                    alt="image"
                    width={110}
                    height={110}
                  />
                )}
              </div>

              <div className="desc">
                <div className="left-desc">
                  <span>{item.id < 10 ? "#00" + item.id : item.id < 100 ? "#0" + item.id : item.id}</span>
                  <strong>
                    {item.name
                      ? item.name.charAt(0).toUpperCase() +
                      item.name.slice(1)
                      : ""}
                  </strong>
                </div>

                <div className="icon">
                  {/* {item.types.map(type => (
                     <Image src={`/assets/${type.name.concat(".svg")}`}/>
                  ))} */}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <button className="load">
        Load more Pokémons
      </button>
    </AreaPokemon>
  );
}
