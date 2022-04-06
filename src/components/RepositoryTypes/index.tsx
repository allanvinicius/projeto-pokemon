import { useEffect, useState } from "react";
import { api } from "../../pages/services/api";
import { RepositoryList } from "./styles";
import Image from "next/image";
import iconeAll from "../../../public/assets/icone-all.svg";

interface TypesProps {
  name: string;
  pokemon: [{
    pokemon: {
      name: string;
    }
  }]
}

export function RepositoryTypes() {
  const [types, setTypes] = useState<TypesProps[]>([]);

  useEffect(() => {
    const resultado: any = [];
    api.get("/type").then((response => {
      response.data.results.map((item: any) =>
        api.get(item.url).then((resp) => {
          resultado.push(resp.data)
        })
      )
    }));

    setTimeout(() => {
      setTypes(resultado);
    }, 1000);
  }, []);

  function handleTypes() {
    types.map(type => console.log(type.pokemon))
  }

  return (
    <RepositoryList>
      <button className="all">
        <div className="icone">
          <Image src={iconeAll} alt="icone" />
        </div>

        <span>All</span>
      </button>

      <ul>
        {types && types.map((type) => (
          <li key={type.name}>
            <button className={`btn-type ${type.name}`} onClick={handleTypes}>
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
  );
}
