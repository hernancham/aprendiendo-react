import React, { useState } from "react";

// Comentarios:
// - React utiliza sintaxis especial para manejar eventos (por ejemplo, `onChange`).
// - `onChange` recibe una función que recibe un argumento `event`.
// - El Event es un objeto que contiene información sobre el evento que ocurrió.
// - `event.target.value` es el valor del elemento que disparó el evento.
// - Es importante tipar correctamente los eventos en TypeScript.

const Events: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const borrar = () => setInputValue("");

  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-fuchsia-400">Events</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Imput de texto</span>
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <div className="m-4">
          <p>Valor: </p>
          <div className="min-h-8">
            <span className="text-xl font-bold">{inputValue}</span>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button onClick={borrar} className="btn btn-primary">
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
