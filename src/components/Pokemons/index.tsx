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
  const [currentPage, setCurrentPage] = useState<number>(9);
  const [modal, setModal] = useState("");

  function handleNext() {}

  async function handleTypes(name:any) {
    const resultado: any = [];
    const response = await api.get(name);

    const types = await Promise.all(
      response.data.pokemon.map(({ pokemon }: any) => api.get(pokemon.url))
    );

    for (let i = 0; i < response.data.pokemon.length; i++) {
      resultado.push(types[i].data);
    }

    // api.get('/type').then(response => {
    //     response.data.results.map((item:any) => 
    //         api.get(item.url).then(poke => {
    //             poke.data.pokemon.map(({itens}:any) => {
    //                 api.get(itens.url).then(resp => {
    //                     for (let i = 0; i < response.data.length; i++) {
    //                         resultado.push(resp.data.types[i])
    //                     }
    //                 })
    //             })
    //         })
    //     )
    // })

    setPokemons(resultado);
  }

  function openModal() {
    console.log("show");
    setModal("show");
  }

  useEffect(() => {
    // Requisição para listar os pokémons
    const resultadoPokemon: any = [];
    api.get("/pokemon").then((response) => setCount(response.data.count));

    api.get("/pokemon").then((response) => {
      response.data.results.map((item: any) =>
        api.get(item.url).then((resp) => {
          resultadoPokemon.push(resp.data);
        })
      );

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
        <button onClick={() => handleTypes} className="all">
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
                onClick={openModal}
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

        <button onClick={handleNext} className="load">
          Load more Pokémons
        </button>
      </AreaPokemon>
    </>
  );
}
