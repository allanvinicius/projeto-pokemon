import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BoxModal } from "./styles";
import close from "../../../public/assets/close.svg";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
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

  weakness: any;
}

export function Modal({
  isOpen,
  onRequestClose,
  pokemon,
  weakness,
}: ModalProps) {
  useEffect(() => {
    if (typeof window !== undefined) {
      const html = document.querySelector("html");
      if (html) {
        html.style.display = isOpen ? "initial" : "none";
      }
    }
  }, [isOpen]);

  return (
    <BoxModal isOpen={isOpen}>
      <div className="overlay"></div>

      <div className="box">
        <button onClick={onRequestClose} className="btn-close">
          <Image src={close} alt="close" />
        </button>

        <div className={`left ${pokemon.types[0].type.name}`}>
          <div className="icone">
            <Image
              src={`/assets/${pokemon.types[0].type.name}`.concat(".svg")}
              width={16}
              height={16}
              alt="icone"
            />
          </div>

          <div className="pokemon">
            {pokemon.sprites.other.dream_world.front_default && (
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                alt="image"
                width={202}
                height={202}
              />
            )}
          </div>
        </div>

        <div className="right">
          <div className="info-pokemon">
            <h2>
              {pokemon.name
                ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                : ""}
            </h2>
            <span>
              {pokemon.id < 10
                ? "#00" + pokemon.id
                : pokemon.id < 100
                ? "#0" + pokemon.id
                : "#" + pokemon.id}
            </span>
          </div>

          <ul className="info-types">
            <li>
              <small className={`tag ${pokemon.types[0].type.name}`}>
                {pokemon.types[0].type.name.charAt(0).toUpperCase() +
                  pokemon.types[0].type.name.slice(1)}
              </small>
            </li>

            <li>
              {pokemon.types.length > 1 && (
                <small className={`tag ${pokemon.types[1].type.name}`}>
                  {pokemon.types[1].type.name.charAt(0).toUpperCase() +
                    pokemon.types[1].type.name.slice(1)}
                </small>
              )}
            </li>
          </ul>

          <ul className="info-habilidades">
            <li>
              <small>Height</small>
              <strong>{pokemon.height / 10} m</strong>
            </li>

            <li>
              <small>Weight</small>
              <strong>{pokemon.weight / 10} kg</strong>
            </li>

            <li>
              <small>Abilities</small>
              <strong>
                {pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
                  pokemon.abilities[0].ability.name.slice(1)}
              </strong>
            </li>
          </ul>

          <div className="info-fraquezas">
            <strong>Weaknesses</strong>

            <ul>
              {weakness && (
                <>
                  <li>
                    {weakness.length > 1 && (
                      <small className={`tag ${weakness[0]}`}>
                        {weakness[0]}
                      </small>
                    )}
                  </li>

                  <li>
                    {weakness.length > 2 && (
                      <small className={`tag ${weakness[1]}`}>
                        {weakness[1]}
                      </small>
                    )}
                  </li>

                  <li>
                    {weakness.length > 3 && (
                      <small className={`tag ${weakness[2]}`}>
                        {weakness[2]}
                      </small>
                    )}
                  </li>

                  <li>
                    {weakness.length > 4 && (
                      <small className={`tag ${weakness[3]}`}>
                        {weakness[3]}
                      </small>
                    )}
                  </li>

                  <li>
                    {weakness.length > 5 && (
                      <small className={`tag ${weakness[4]}`}>
                        {weakness[4]}
                      </small>
                    )}
                  </li>
                </>
              )}

              {/* {weakness &&
                weakness.map((item: any, index: number) => (
                  <li key={index}>
                    <small className={`tag ${weakness[0]}`}>
                      {item}
                    </small>
                  </li>
                ))} */}
            </ul>
          </div>

          <div className="info-stats">
            <strong>Stats</strong>

            <ul>
              <li>
                <small>{pokemon.stats[0].stat.name.toUpperCase()}</small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[0].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[1].stat.name.charAt(0).toUpperCase() +
                    pokemon.stats[1].stat.name.slice(1)}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[1].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[2].stat.name.charAt(0).toUpperCase() +
                    pokemon.stats[2].stat.name.slice(1)}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[2].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[3].stat.name.replace("special-", "Sp.")}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[3].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[4].stat.name.replace("special-", "Sp.")}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[4].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li>
                <small>
                  {pokemon.stats[5].stat.name.charAt(0).toUpperCase() +
                    pokemon.stats[5].stat.name.slice(1)}
                </small>

                <div className="status">
                  <div
                    className="item"
                    style={{ width: `${pokemon.stats[5].base_stat}%` }}
                  ></div>

                  <ul className="separadores">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BoxModal>
  );
}
