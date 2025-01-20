import React, { useState } from "react";

// Comentarios:
// - Los eventos en React son similares a los eventos en HTML.
// - Los eventos en React son camelCase en lugar de minúsculas.
// - Los eventos en React son funciones que recibe un argumento `event` y que se pasan como props

const Events = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe algo..."
      />
      <p>Valor: {inputValue}</p>
    </div>
  );
};

export default Events;
