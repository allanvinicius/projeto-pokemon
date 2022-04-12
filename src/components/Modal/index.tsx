import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BoxModal } from "./styles";
import close from "../../../public/assets/close.svg";
import { api } from "../../pages/services/api";

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
    stats: [
        {
            base_stat: number;
            stat: {
                name: string;
            }
        }
    ];
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
        typesPokemon: any;
        damage_relations: any;
        pokemons: any;
    }
}

export function Modal({
    isOpen,
    onRequestClose,
    pokemon,
}: ModalProps) {
    // const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
    // const [types, setTypes] = useState<TypesProps[]>([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            const html = document.querySelector('html');
            if (html) {
                html.style.overflow = isOpen ? 'hidden' : 'unset';
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

                <>
                    <div className="left">
                        <div className="icone">
                            <Image src={`/assets/${pokemon.typesPokemon[0].type.name}`.concat(".svg")}
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
                            <strong>
                                {pokemon.name
                                    ? pokemon.name.charAt(0).toUpperCase() +
                                    pokemon.name.slice(1)
                                    : ""}
                            </strong>
                            <span>{pokemon.id < 10 ? "#00" + pokemon.id : pokemon.id < 100 ? "#0" + pokemon.id : "#" + pokemon.id}</span>
                        </div>

                        <ul className="info-types">
                            {pokemon.typesPokemon.map((type:any, index:number) => (
                                <li key={index}>
                                    <small>{type.name}</small>
                                </li>
                            ))}
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
                                <strong>{pokemon.abilities[0].ability.name}</strong>
                            </li>
                        </ul>

                        <div className="info-fraquezas">
                            <h2>Weaknesses</h2>

                            <ul>
                                <li>
                                    <div className="tag">
                                        {pokemon.damage_relations.double_damage_from.map((item: any) => {
                                            item.name
                                        })}
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="info-stats">
                            <h2>Stats</h2>

                            <ul>
                                <li>
                                    <small>{pokemon.stats.map((name: any) => {
                                        name.stat.name
                                    })}</small>

                                    <ul className="separator">
                                        <li>{pokemon.stats.map((base: any) => {
                                            base.base_stat + "%"
                                        })}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            </div>
        </BoxModal>
    );
}