import React, { useState } from "react";
import Image from "next/image";
import { BoxModal } from "./styles";

interface PokemonProps {
    id: number;
    name: string;
    abilities: [{
        ability: {
            name: string;
        }
    }];
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            }
        }
    };
    height: number;
    weight: number;
    types: [{
        type: {
            name: string;
        }
    }];
}

interface TypesProps {
    name: string;
    damage_relations: {
        double_damage_from: [{
            name: string;
        }]
    }
    pokemon: [
        {
            pokemon: {
                name: string;
            };
        }
    ];
}

export function Modal() {
    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
    const [types, setTypes] = useState<TypesProps[]>([]);
    
    return (
        <BoxModal>
            {pokemons.map((item) => (
                <>
                    <div className="left">
                        <div className="icone">
                            <Image src={`/assets/${item.types[0].type.name}`.concat(".svg")}
                                width={16}
                                height={16}
                                alt="icone"
                            />
                        </div>

                        <div className="pokemon">
                            {item.sprites.other.dream_world.front_default && (
                                <Image
                                    src={item.sprites.other.dream_world.front_default}
                                    alt="image"
                                    width={202}
                                    height={202}
                                />
                            )}
                        </div>
                    </div>

                    <div className="right">
                        <div className="info-pokemon">
                            <strong>
                                {item.name
                                    ? item.name.charAt(0).toUpperCase() +
                                    item.name.slice(1)
                                    : ""}
                            </strong>
                            <span>{item.id < 10 ? "#00" + item.id : item.id < 100 ? "#0" + item.id : item.id}</span>
                        </div>

                        <ul className="info-types">
                            {item.types.map(type => (
                                <li>
                                    <small>{type.type.name}</small>
                                </li>
                            ))}
                        </ul>

                        <ul className="info-habilidades">
                            <li>
                                <small>Height</small>
                                <strong>{item.height}</strong>
                            </li>

                            <li>
                                <small>Weight</small>
                                <strong>{item.weight}</strong>
                            </li>

                            <li>
                                <small>Abilities</small>
                                <strong>{item.abilities[0].ability.name}</strong>
                            </li>
                        </ul>

                        <div className="info-fraquezas">
                            <h2>Weaknesses</h2>

                            <ul>

                            </ul>
                        </div>

                    </div>
                </>
            ))}
        </BoxModal>
    );
}