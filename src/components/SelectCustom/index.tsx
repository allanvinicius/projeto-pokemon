import { AreaSelect } from "./styles";
import Image from "next/image";

interface SelectProps {
  isOpen: boolean;
  handleTypes: any;

  types: {
    name: string;
  };
}

export function SelectCustom({ isOpen, types, handleTypes }: SelectProps) {
  return (
    <AreaSelect isOpen={isOpen}>
      <button className="btn-select">
        <span>Show:</span>
        <strong>All</strong>
      </button>

      <ul className="drop-types">
        <li>
          <button
            className={`btn-type ${types.name}`}
            onClick={() => handleTypes(`/type/${1}`)}
          >
            <div className="icone">
              <Image
                src={`/assets/${types.name.concat(".svg")}`}
                alt={types.name}
                width={15}
                height={15}
              />
            </div>

            <span>
              {types.name.charAt(0).toUpperCase() + types.name.slice(1)}
            </span>
          </button>
        </li>
      </ul>
    </AreaSelect>
  );
}
