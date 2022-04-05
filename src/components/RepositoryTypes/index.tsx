import { useEffect, useState } from "react";
import { api } from "../../pages/services/api";
import { RepositoryList } from "./styles";
import Image from "next/image";

interface TypesProps {
  name: string;
}

export function RepositoryTypes() {
  const [types, setTypes] = useState<TypesProps[]>([]);

  useEffect(() => {
    api.get("/type").then((response) => setTypes(response.data.results));
  }, []);

  return (
    <RepositoryList>
      {types && types.map((type) => (
        <li key={type.name}>
          <button>
            <div className="icone">
              <Image
                src={`/assets/${type.name.concat(".svg")}`}
                alt="icone"
                width="20"
                height="20"
              />
            </div>

            <span>
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </span>
          </button>
        </li>
      ))}
    </RepositoryList>
  );
}
