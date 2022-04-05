import { SectionSearch } from "./styles";
import Image from "next/image";
import btnSearch from "../../../public/assets/search.svg";
import { useState } from "react";

export function Search() {
    const [search, setSearch] = useState('');

    return (
        <SectionSearch>
            <div className="container">
                <h2>Select your Pokémon</h2>

                <div className="search">
                    <input type="text" 
                        onChange={({ target }) => console.log(target.value)} 
                        placeholder="Search name or code" 
                    />

                    <button type="button">
                        <Image src={btnSearch} title="search" alt="search" />
                    </button>
                </div>
            </div>
        </SectionSearch>
    );
}