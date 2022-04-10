import { SectionSearch } from "./styles";
import Image from "next/image";
import btnSearch from "../../../public/assets/search.svg";
import { useEffect, useState } from "react";
import { api } from "../../pages/services/api";

interface SearchProps {
  name: string;
}

export function Search() {
  const [search, setSearch] = useState("");

  function onChangeSearch(e: any) {
    setSearch(e.target.value);
  }

  function handleSearch() {
    api.get("/pokemon?limit=1126&offset=0").then((response) => {
        response.data.results.filter(({ name }: SearchProps) =>
          name.includes(search)
        )
    });
  }

  return (
    <SectionSearch>
      <div className="container">
        <h2>Select your Pokémon</h2>

        <div className="search">
          <input
            type="text"
            onChange={onChangeSearch}
            placeholder="Search name or code"
          />

          <button onClick={handleSearch} type="button">
            <Image src={btnSearch} title="search" alt="search" />
          </button>
        </div>
      </div>
    </SectionSearch>
  );
}
