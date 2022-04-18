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
import React, { useState } from "react";
import { Pokemons } from "../components/Pokemons";
import { api } from "./services/api";

export default function Home() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState<any>([]);

  function handleSearch() {
    api.get(`pokemon/${text.toLocaleLowerCase()}`).then((response) => {
      setSearch(response.data);
    });
  }

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
