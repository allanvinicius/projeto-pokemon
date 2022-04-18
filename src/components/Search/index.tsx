import { SectionSearch } from "./styles";
import Image from "next/image";
import btnSearch from "../../../public/assets/search.svg";

interface SearchProps {
  value: any;
  onChange: any;
  handleClick: any;
}

export function Search({ value, onChange, handleClick }: SearchProps) {
  function handleChange(event: any) {
    onChange(event.target.value);
  }

  return (
    <SectionSearch>
      <div className="container">
        <h2>Select your Pokémon</h2>

        <div className="search">
          <input
            type="text"
            onChange={handleChange}
            value={value}
            placeholder="Search name or code"
          />

          <button
            onClick={handleClick}
            disabled={value === "" ? true : false}
            type="button"
          >
            <Image src={btnSearch} title="search" alt="search" />
          </button>
        </div>
      </div>
    </SectionSearch>
  );
}
