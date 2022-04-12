import Image from "next/image";
import React, { useEffect, useState } from "react";
import { api } from "../../pages/services/api";
import { AreaPokemon, RepositoryList } from "./styles";
import icone from "../../../public/assets/icone-pokeball.svg";
import iconeAll from "../../../public/assets/icone-all.svg";
import { Modal } from "../Modal";

interface PokemonProps {
  id: number;
  name: string;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  height: number;
  weight: number;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
}

interface TypesProps {
  name: string;
  damage_relations: {
    double_damage_from: [
      {
        name: string;
      }
    ];
  };
  pokemon: [
    {
      pokemon: {
        name: string;
        url: string;
      };
    }
  ];
}

export function Pokemons() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [types, setTypes] = useState<TypesProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadmore, setLoadmore] = useState<PokemonProps[]>([]);
  const [detalhes, setDetalhes] = useState<any>();
  const [modal, setModal] = useState(false);

  async function handleTypes(name: any) {
    const resultado: any = [];
    const response = await api.get(name);

    const types: any = await Promise.all(
      response.data.pokemon.map((pokemon: any) => api.get(pokemon.pokemon.url))
    );

    for (let i = 0; i < response.data.pokemon.length; i++) {
      resultado.push(types[i].data);
    }

    setCount(response.data.pokemon.length);

    setPokemons(resultado);
  }

  async function handleAllPokemons() {
    const resultado: any = [];

    const response = await api.get(`pokemon?limit=${currentPage}&offset=0`);

    const results: any = await Promise.all(
      response.data.results.map((pokemons: any) => api.get(pokemons.url))
    );

    for (let i = 0; i < response.data.results.length; i++) {
      resultado.push(results[i].data);
    }

    setCount(response.data.count);

    setCurrentPage(currentPage + 9);

    setPokemons(resultado);
  }

  async function handleLoadMore() {
    const listPokemons: any = [];

    const response = await api.get(`pokemon?offset=0&limit=${currentPage}`);

    const resultado: any = await Promise.all(
      response.data.results.map((item: any) => api.get(item.url))
    );

    for (let i = 0; i < response.data.results.length; i++) {
      listPokemons.push(resultado[i].data);
    }

    setCurrentPage(currentPage + 9);

    setLoadmore(resultado);

    setPokemons(listPokemons);
  }

  function handleOpenModal(id: number) {
    setModal(true);

    const pokemon = pokemons.find(poke => poke.id === id);

    setDetalhes(pokemon);
  }

  function handleCloseModal() {
    setModal(false);
  }

  useEffect(() => {
    api.get("/pokemon").then((response) => setCount(response.data.count));

    // Requisição para listar os pokémons
    const resultadoPokemon: any = [];
    api.get(`pokemon?limit=${currentPage}&offset=0`).then((response) => {
      response.data.results.map((item: any) =>
        api.get(item.url).then((resp) => {
          resultadoPokemon.push(resp.data);
        })
      );

      setCurrentPage(currentPage + 9);

      setTimeout(() => {
        setPokemons(resultadoPokemon);
      }, 1000);
    });

    // Requisição para listar os tipos de pokémons
    const resultadoTypes: any = [];
    api.get("/type").then((response) => {
      response.data.results.map((item: any) =>
        api.get(item.url).then((resp) => {
          if (resp.data.name != "shadow" && resp.data.name != "unknown") {
            resultadoTypes.push(resp.data);
          }
        })
      );
    });

    setTimeout(() => {
      setTypes(resultadoTypes);
    }, 1000);
  }, []);

  return (
    <>
      <RepositoryList>
        <button onClick={() => handleAllPokemons()} className="all">
          <div className="icone">
            <Image src={iconeAll} alt="icone" />
          </div>

          <span>All</span>
        </button>

        <ul>
          {types &&
            types.map((type, index) => (
              <li key={index}>
                <button
                  className={`btn-type ${type.name}`}
                  onClick={() => handleTypes(`/type/${index + 1}`)}
                >
                  <div className="icone">
                    <Image
                      src={`/assets/${type.name.concat(".svg")}`}
                      alt={type.name}
                      width={15}
                      height={15}
                    />
                  </div>

                  <span>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      </RepositoryList>

      <AreaPokemon>
        <div className="top">
          <Image src={icone} alt="icone" />
          <span>{count} Pokémons</span>
        </div>

        <ul className="grid-pokemon">
          {pokemons.map((item) => (
            <li key={item.id}>
              <button
                className={`btn-pokemon ${item.types[0].type.name}`}
                onClick={() => handleOpenModal(item.id)}
              >
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
                    <span>
                      {item.id < 10
                        ? "#00" + item.id
                        : item.id < 100
                          ? "#0" + item.id
                          : "#" + item.id}
                    </span>
                    <strong>
                      {item.name
                        ? item.name.charAt(0).toUpperCase() + item.name.slice(1)
                        : ""}
                    </strong>
                  </div>

                  <div className="icon">
                    <Image
                      src={`/assets/${item.types[0].type.name}`.concat(".svg")}
                      width={16}
                      height={16}
                      alt="icone"
                    />
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <button onClick={handleLoadMore} className="load">
          Load more Pokémons
        </button>
      </AreaPokemon>

      {modal && (
        <Modal
          key={detalhes}
          isOpen={modal}
          pokemon={detalhes}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
  );
}
