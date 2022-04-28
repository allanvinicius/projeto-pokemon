import Head from "next/head";
import Image from "next/image";
import { SectionPokemons } from "./styles";
import { GetStaticProps } from "next";

import icone from "../../public/assets/icone-pokeball.svg";
import iconeAll from "../../public/assets/icone-all.svg";

import { Search } from "../components/Search";
import React, { useEffect, useState } from "react";
import api from "./services/api";
import { CardPokemon } from "../components/CardPokemon";
import { Modal } from "../components/Modal";
import { Slide } from "../components/Slide";

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    abilities: any;
    sprites: any;
    stats: any;
    height: number;
    weight: number;
    types: any;
    pokemons: any;
  };
}

interface TypesProps {
  name: string;
  id: number;
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

function Home() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [types, setTypes] = useState<TypesProps[]>([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState<any>();
  const [results, setResults] = useState(false);
  const [drop, setDrop] = useState(false);
  const [weakness, setWeakness] = useState<any>([]);
  const [typeName, setTypeName] = useState<string>("All");
  const [name, setName] = useState(false);

  function handleTypes(typeId: any) {
    const resultado: any = [];

    api.get(typeId).then(response => {
      response.data.pokemon.map((pokemon: any) => {
        api.get(pokemon.pokemon.url).then(resp => {
          const elem = resp.data;

          resultado.push(elem);

          setTimeout(() => {
            setPokemons(resultado);
          }, 0.1 * 1000);
        })
      });
      setCount(response.data.pokemon.length);
    });

    setText("");

    setResults(false);

    setDrop(!drop);
  }

  function handleAllPokemons() {
    const resultado: any = [];

    api.get(`pokemon?limit=9&offset=0`).then(response => {
      response.data.results.map((pokemons: any) => {
        api.get(pokemons.url).then(resp => {
          const elem = resp.data;

          resultado.push(elem);

          setTimeout(() => {
            setPokemons(resultado);
          }, 0.1 * 1000);
        });
      })

      setCount(response.data.count);
    });

    setText("");

    setDrop(!drop);

    setResults(false);
  }

  function handleSearch() {
    api.get(`pokemon/${text.toLocaleLowerCase()}`).then((response) => {
      setSearch(response.data);

      setResults(true);

      setTypeName("All");
    });
  }

  function handleLoadMore() {
    const listPokemons: any = [];

    api.get(`pokemon?offset=0&limit=${currentPage}`).then(response => {
      response.data.results.map((item: any) => {
        api.get(item.url).then(resp => {
          const elem = resp.data;

          listPokemons.push(elem);

          setTimeout(() => {
            setPokemons(listPokemons);
          }, 0.1 * 1000);
        })
      });

      setCurrentPage(currentPage + 9);
    })
  }

  function handleOpenModal(id: number) {
    const pokemon = pokemons.find((poke: any) => poke.id === id);

    api.get(`/pokemon/${id}`).then((response) => {
      const resposta = response.data.types[0].type.url;

      api.get(resposta).then((res) => {
        const { damage_relations } = res.data;

        const result = damage_relations.double_damage_from.map(
          ({ name }: any) => name
        );

        setWeakness(result);
      });
    });

    setModal(true);
    setDetails(pokemon);
  }

  function handleCloseModal() {
    setModal(false);
  }

  function handleDrop() {
    setDrop(!drop);
  }

  useEffect(() => {
    api.get("/pokemon").then((response) => setCount(response.data.count));

    // Requisição para listar os pokémons
    const resultadoPokemon: any = [];
    api.get(`pokemon?offset=0&limit=9`).then((response) => {
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

      setTimeout(() => {
        setTypes(resultadoTypes);
      }, 1000);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Pokémon</title>
      </Head>

      <Slide />

      <Search
        value={text}
        onChange={(item: any) => setText(item)}
        handleClick={handleSearch}
      />

      <SectionPokemons>
        <div className="container">
          <div className="list-types">
            <button onClick={() => handleAllPokemons()} className="all">
              <div className="icone">
                <Image src={iconeAll} alt="icone" />
              </div>

              <span>All</span>
            </button>

            <ul>
              {types &&
                types.map((type: any, index: number) => (
                  <li key={index}>
                    <button
                      className={`btn-type ${type.name} ${type.name === name ? "active" : ""}`}
                      onClick={() => { handleTypes(`/type/${index + 1}`), setName(!name) }}
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
          </div>

          <div className="list-pokemons">
            {!results && (
              <>
                <div className="top">
                  <Image src={icone} alt="icone" />
                  <span>{count} Pokémons</span>
                </div>

                <div className={`select-custom ${drop ? "active" : ""}`}>
                  <button className="btn-select" onClick={handleDrop}>
                    <span>Show:</span>
                    <strong>
                      {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
                    </strong>
                  </button>

                  <ul className="drop-types">
                    <li>
                      <button
                        onClick={() => {
                          handleAllPokemons(), setTypeName("All");
                        }}
                        className="all"
                      >
                        <div className="icone">
                          <Image src={iconeAll} alt="icone" />
                        </div>

                        <span>All</span>
                      </button>
                    </li>

                    {types.map((type: any, index) => (
                      <li key={index}>
                        <button
                          className={`btn-type ${type.name}`}
                          onClick={() => {
                            handleTypes(`/type/${index + 1}`),
                              setTypeName(type.name);
                          }}
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
                            {type.name.charAt(0).toUpperCase() +
                              type.name.slice(1)}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid-pokemons">
                  {pokemons &&
                    pokemons.map((item: any, index: number) => (
                      <CardPokemon
                        key={index}
                        pokemon={item}
                        handleOpenModal={handleOpenModal}
                      />
                    ))}
                </div>
              </>
            )}

            {results && (
              <>
                <div className="top">
                  <Image src={icone} alt="icone" />
                  <span>1 Pokémon</span>
                </div>

                <div className={`select-custom ${drop ? "active" : ""}`}>
                  <button className="btn-select" onClick={handleDrop}>
                    <span>Show:</span>
                    <strong>
                      {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
                    </strong>
                  </button>

                  <ul className="drop-types">
                    <li>
                      <button
                        onClick={() => {
                          handleAllPokemons(), setTypeName("All");
                        }}
                        className="all"
                      >
                        <div className="icone">
                          <Image src={iconeAll} alt="icone" />
                        </div>

                        <span>All</span>
                      </button>
                    </li>

                    {types.map((type: any, index) => (
                      <li key={index}>
                        <button
                          className={`btn-type ${type.name}`}
                          onClick={() => {
                            handleTypes(`/type/${index + 1}`),
                              setTypeName(type.name);
                          }}
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
                            {type.name.charAt(0).toUpperCase() +
                              type.name.slice(1)}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid-pokemons">
                  <CardPokemon
                    key={search}
                    pokemon={search}
                    handleOpenModal={handleOpenModal}
                  />
                </div>
              </>
            )}

            {!results && (
              <button onClick={handleLoadMore} className="load">
                Load more Pokémons
              </button>
            )}
          </div>

          {modal && (
            <Modal
              key={details}
              isOpen={modal}
              pokemon={details}
              weakness={weakness}
              onRequestClose={handleCloseModal}
            />
          )}
        </div>
      </SectionPokemons>
    </>
  );
}

export default Home;
