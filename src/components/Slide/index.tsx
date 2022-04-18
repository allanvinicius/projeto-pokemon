import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper";

import pokeballRed from "../../public/assets/img-pokeball.png";
import pokeballBlue from "../../public/assets/img-pokeball-02.png";
import luzes from "../../public/assets/luzes.svg";
import arrow from "../../public/assets/arrow-down.svg";


export function Slide() {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      autoplay={{
        delay: 4e3,
        disableOnInteraction: false,
      }}
      modules={[Navigation, EffectFade, Autoplay, Pagination]}
      effect={"fade"}
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
                The perfect guide for those who want to hunt Pokémons around the
                world
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
                The perfect guide for those who want to hunt Pokémons around the
                world
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
  );
}
