import { useState } from "react";
import { destinos } from "../data/destinos";

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const destino = destinos[index];

  return (
    <div>
      <h2>{destino.nome}</h2>
      <p>{destino.descricao}</p>

      <img src={destino.imagens[0]} alt={destino.nome} />

      <div>
        <a href={destino.link} target="_blank">
          É este ✈️
        </a>
        {index < destinos.length - 1 && (
          <button onClick={() => setIndex(index + 1)}>
            Próximo destino
          </button>
        )}
      </div>
    </div>
  );
}
