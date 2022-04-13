import { SectionSearch } from "./styles";
import Image from "next/image";
import { useRouter } from 'next/router';
import btnSearch from "../../../public/assets/search.svg";
import { useEffect, useState, useRef } from "react";
import { api } from "../../pages/services/api";

interface SearchProps {
  value: any;
  onChange: any;
  handleClick: any;
}

export function Search({ onChange, value, handleClick }: SearchProps) {

  function handleChange(event: any) {
    // const resultado:any = [];
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

          <button onClick={handleClick} type="button">
            <Image src={btnSearch} title="search" alt="search" />
          </button>
        </div>
      </div>
    </SectionSearch>
  );
}
