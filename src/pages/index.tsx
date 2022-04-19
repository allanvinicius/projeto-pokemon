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

import { Search } from "../components/Search";
import React, { useEffect, useState } from "react";
import { Pokemons } from "../components/Pokemons";
import { api } from "./services/api";
import { CardPokemon } from "../components/CardPokemon";

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
  const [text, setText] = useState("");
  const [search, setSearch] = useState<any>([]);
  const [results, setResults] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [types, setTypes] = useState<TypesProps[]>([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loadmore, setLoadmore] = useState<PokemonProps[]>([]);

  function handleSearch() {
    api.get(`pokemon/${text.toLocaleLowerCase()}`).then((response) => {
      setResults(true);
      setSearch(response.data);
    });
  }

  // async function handleTypes(name: any) {
  //   const resultado: any = [];
  //   const response = await api.get(name);

  //   const types: any = await Promise.all(
  //     response.data.pokemon.map((pokemon: any) => api.get(pokemon.pokemon.url))
  //   );

  //   for (let i = 0; i < response.data.pokemon.length; i++) {
  //     resultado.push(types[i].data);
  //   }

  //   setCount(response.data.pokemon.length);

  //   setPokemons(resultado);
  // }

  // async function handleAllPokemons() {
  //   const resultado: any = [];

  //   const response = await api.get(`pokemon?limit=${currentPage}&offset=0`);

  //   const results: any = await Promise.all(
  //     response.data.results.map((pokemons: any) => api.get(pokemons.url))
  //   );

  //   for (let i = 0; i < response.data.results.length; i++) {
  //     resultado.push(results[i].data);
  //   }

  //   setCount(response.data.count);

  //   setCurrentPage(currentPage + 9);

  //   setPokemons(resultado);
  // }

  // async function handleLoadMore() {
  //   const listPokemons: any = [];

  //   const response = await api.get(`pokemon?offset=0&limit=${currentPage}`);

  //   const resultado: any = await Promise.all(
  //     response.data.results.map((item: any) => api.get(item.url))
  //   );

  //   for (let i = 0; i < response.data.results.length; i++) {
  //     listPokemons.push(resultado[i].data);
  //   }

  //   setCurrentPage(currentPage + 9);

  //   setLoadmore(resultado);

  //   setPokemons(listPokemons);
  // }

  // useEffect(() => {
  //   api.get("/pokemon").then((response) => setCount(response.data.count));

  //   // Requisição para listar os pokémons
  //   const resultadoPokemon: any = [];
  //   api.get(`pokemon?limit=9&offset=0`).then((response) => {
  //     response.data.results.map((item: any) =>
  //       api.get(item.url).then((resp) => {
  //         resultadoPokemon.push(resp.data);
  //       })
  //     );

  //     setCurrentPage(currentPage + 9);

  //     setTimeout(() => {
  //       setPokemons(resultadoPokemon);
  //     }, 1000);
  //   });

  //   // Requisição para listar os tipos de pokémons
  //   const resultadoTypes: any = [];
  //   api.get("/type").then((response) => {
  //     response.data.results.map((item: any) =>
  //       api.get(item.url).then((resp) => {
  //         if (resp.data.name != "shadow" && resp.data.name != "unknown") {
  //           resultadoTypes.push(resp.data);
  //         }
  //       })
  //     );
  //   });

  //   setTimeout(() => {
  //     setTypes(resultadoTypes);
  //   }, 1000);
  // }, []);

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
          <Pokemons />
        </div>
      </SectionPokemons>
    </>
  );
}
