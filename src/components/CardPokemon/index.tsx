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

export function CardPokemon({ pokemon }: PokemonProps) {
  const [modal, setModal] = useState(false);
  const [detalhes, setDetalhes] = useState<any>();
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  function handleOpenModal(id: number) {
    setModal(true);
    const pokemon = pokemons.find((poke: any) => poke.pokemon.id === id);

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
