import { SectionSearch } from "./styles";
import Image from "next/image";
import search from "../../../public/assets/search.svg";

export function Search() {
    return (
        <SectionSearch>
            <div className="container">
                <h2>Select your Pokémon</h2>

                <div className="search">
                    <input type="text" placeholder="Search name or code" />
                    <button type="button">
                        <Image src={search} title="search" alt="search"/>
                    </button>
                </div>
            </div>
        </SectionSearch>
    );
}