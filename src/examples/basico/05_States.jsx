import { useState } from "react";

// Comentarios:
// - `useState` permite manejar estados dentro de componentes funcionales.
// - `useState` retorna un array con dos elementos: el estado actual y una función para actualizarlo.

function States() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const random = () => setCount(Math.floor(Math.random() * 100));

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <Reset count={count} setCount={setCount} random={random} />
    </div>
  );
}

export default States;

// El elemento <> </> es un fragmento de React, que permite agrupar elementos sin necesidad de un elemento padre

function Reset({ count, setCount, random }) {
  const reset = () => setCount(0);

  return (
    <>
      <button onClick={reset}>Reiniciar {count}</button>
      <button onClick={random}>Random</button>
    </>
  );
}
