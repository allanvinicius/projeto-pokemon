import Image from "next/image";
import { useState } from "react";
import { Modal } from "../Modal";
import { Card } from "./styles";

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
  };

  handleOpenModal: any;
}

export function CardPokemon({ pokemon, handleOpenModal }: PokemonProps) {
  return (
    <>
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
    </>
  );
}
