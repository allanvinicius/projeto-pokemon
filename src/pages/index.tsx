import Head from "next/head";
import Image from "next/image";
import { SectionBanner, SectionPokemons } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper";

import pokeballRed from "../../public/assets/img-pokeball.png";
import pokeballBlue from "../../public/assets/img-pokeball-02.png";
import luzes from "../../public/assets/luzes.svg";
import arrow from "../../public/assets/arrow-down.svg";
import icone from "../../public/assets/icone-pokeball.svg";
import iconeAll from "../../public/assets/icone-all.svg";

import { Search } from "../components/Search";
import React, { useEffect, useState } from "react";
import { api } from "./services/api";
import { CardPokemon } from "../components/CardPokemon";
import { Modal } from "../components/Modal";

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
    damage_relations: any;
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

export default function Home() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState<any>([]);
  const [types, setTypes] = useState<TypesProps[]>([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadmore, setLoadmore] = useState<PokemonProps[]>([]);
  const [modal, setModal] = useState(false);
  const [detalhes, setDetalhes] = useState<any>();
  const [results, setResults] = useState(false);

  async function handleTypes(name: any) {
    const resultado: any = [];
    const response = await api.get(name);

    const types: any = await Promise.all(
      response.data.pokemon.map((pokemon: any) => api.get(pokemon.pokemon.url))
    );

    for (let i = 0; i < response.data.pokemon.length; i++) {
      resultado.push(types[i].data);
    }

    setResults(false);

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

    setResults(false);

    setCount(response.data.count);

    setCurrentPage(currentPage + 9);

    setPokemons(resultado);
  }

  function handleSearch() {
    api.get(`pokemon/${text.toLocaleLowerCase()}`).then((response) => {
      setResults(true);
      setSearch(response.data);
      setResults(true);
    });
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

    setPokemons(listPokemons);
  }

  function handleOpenModal(id: number) {
    setModal(true);
    const pokemon = pokemons.find((poke: any) => poke.id === id);

    // const type = types.find(type => type.id === id);

    // api.get(`type/`).then((response) => {
    //   response.data.results.map((item:any) => {
    //     api.get(item.url).then(resp => {
    //       const elem = resp.data;

    //       console.log(elem);
    //     })
    //   })
    // });

    setDetalhes(pokemon);
  }

  function handleCloseModal() {
    setModal(false);
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

      <SectionBanner>
        <Swiper
          navigation={true}
          pagination={{
            clickable: false,
            el: ".slide-banner .pagination",
          }}
          autoplay={{
            delay: 4e3,
            disableOnInteraction: false,
          }}
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect={"fade"}
          className="slide-banner"
        >
          <SwiperSlide>
            <div className="area-slide">
              <div className="container">
                <div className="texto">
                  <div className="tag">
                    <div className="icon">🎒</div>
                    <span>pokedex</span>
                  </div>

                  <h1>Who is that Pokémon?</h1>

                  <p>
                    The perfect guide for those who want to hunt Pokémons around
                    the world
                  </p>

                  <div className="image">
                    <div className="luzes">
                      <Image src={luzes} title="luzes" alt="luzes" />
                    </div>

                    <Image
                      src={pokeballRed}
                      className="poke"
                      title="pokeball"
                      alt="pokeball"
                    />
                  </div>
                </div>

                <div className="explore">
                  <div className="left">
                    <div className="icon">
                      <Image src={arrow} alt="arrow" />
                    </div>

                    <small>explore</small>
                  </div>

                  <div className="pagination"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="blue">
            <div className="area-slide">
              <div className="container">
                <div className="texto">
                  <div className="tag">
                    <div className="icon">🎒</div>
                    <span>pokedex</span>
                  </div>

                  <h1>Catch them all!</h1>

                  <p>
                    The perfect guide for those who want to hunt Pokémons around
                    the world
                  </p>

                  <div className="image">
                    <div className="luzes">
                      <Image src={luzes} title="luzes" alt="luzes" />
                    </div>

                    <Image
                      src={pokeballBlue}
                      className="poke"
                      title="pokeball"
                      alt="pokeball"
                    />
                  </div>
                </div>

                <div className="explore">
                  <div className="left">
                    <div className="icon">
                      <Image src={arrow} alt="arrow" />
                    </div>

                    <small>explore</small>
                  </div>

                  <div className="pagination"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </SectionBanner>

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
          </div>

          <div className="list-pokemons">
            {!results && (
              <div className="top">
                <Image src={icone} alt="icone" />
                <span>{count} Pokémons</span>
              </div>
            )}

            {!results && (
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
            )}

            {results && (
              <>
                <div className="top">
                  <Image src={icone} alt="icone" />
                  <span>1 Pokémon</span>
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
              key={detalhes}
              isOpen={modal}
              pokemon={detalhes}
              onRequestClose={handleCloseModal}
            />
          )}
        </div>
      </SectionPokemons>
    </>
  );
}
