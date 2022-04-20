<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Image from "next/image";
=======
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../Modal";
>>>>>>> 9d75fe357a56b585bde47c8805d7badd4a5458ea
import { Card } from "./styles";

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
<<<<<<< HEAD
    abilities: any;
    sprites: any;
    stats: any;
    height: number;
    weight: number;
    types: any;
  };

  handleOpenModal: any;
}

export function CardPokemon({ pokemon, handleOpenModal }: PokemonProps) {
  return (
    <Card>
      <button
        className={`btn-pokemon ${pokemon.types[0].type.name}`}
        onClick={() => handleOpenModal(pokemon.id)}
      >
        <div className="image">
          {pokemon.sprites.other.dream_world.front_default && (
            <Image
              src={pokemon.sprites.other.dream_world.front_default}
              alt="image"
              width={110}
              height={110}
            />
          )}
        </div>

        <div className="desc">
          <div className="left-desc">
            <span>
              {pokemon.id < 10
                ? "#00" + pokemon.id
                : pokemon.id < 100
                ? "#0" + pokemon.id
                : "#" + pokemon.id}
            </span>
            <strong>
              {pokemon.name
                ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                : ""}
            </strong>
          </div>

          <div className="icon">
            <Image
              src={`/assets/${pokemon.types[0].type.name}`.concat(".svg")}
              width={16}
              height={16}
              alt="icone"
            />
          </div>
        </div>
      </button>
    </Card>
=======
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
  };
}

export function CardPokemon({ pokemon }: PokemonProps) {
  const [modal, setModal] = useState(false);
  const [detalhes, setDetalhes] = useState<any>();
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  function handleOpenModal(id: number) {
    setModal(true);
    const pokemon = pokemons.find((poke) => poke.pokemon.id === id);

    // const type = types.find(type => type.id === id);

    // api.get(`type/`).then((response) => {
    //   response.data.results.map((pokemon:any) => {
    //     api.get(item.url).then(resp => {
    //       const elem = resp.data.damage_relations.double_damage_from;

    //       setDetalhes(elem);

    //       console.log(detalhes);
    //     })
    //   })
    // });

    setDetalhes(pokemon);
    // console.log(type);
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <>
      <Card>
        <ul className="grid-pokemon">
          <li key={pokemon.id}>
            <button
              className={`btn-pokemon ${pokemon.types[0].type.name}`}
              onClick={() => handleOpenModal(pokemon.id)}
            >
              <div className="image">
                {pokemon.sprites.other.dream_world.front_default && (
                  <Image
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt="image"
                    width={110}
                    height={110}
                  />
                )}
              </div>

              <div className="desc">
                <div className="left-desc">
                  <span>
                    {pokemon.id < 10
                      ? "#00" + pokemon.id
                      : pokemon.id < 100
                      ? "#0" + pokemon.id
                      : "#" + pokemon.id}
                  </span>
                  <strong>
                    {pokemon.name
                      ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                      : ""}
                  </strong>
                </div>

                <div className="icon">
                  <Image
                    src={`/assets/${pokemon.types[0].type.name}`.concat(".svg")}
                    width={16}
                    height={16}
                    alt="icone"
                  />
                </div>
              </div>
            </button>
          </li>
        </ul>
      </Card>

      {modal && (
        <Modal
          key={detalhes}
          isOpen={modal}
          pokemon={detalhes}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
>>>>>>> 9d75fe357a56b585bde47c8805d7badd4a5458ea
  );
}
