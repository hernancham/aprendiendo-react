import { useState } from "react";

// Comentarios:
// - Los Hooks son funciones que permiten utilizar características de React en componentes funcionales.
// - useState es un Hook que permite añadir estado a los componentes funcionales.

export default function States() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const random = () => setCount(Math.floor(Math.random() * 100));

  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-emerald-400">States</h2>
        <p>Contador: </p>
        <div className="min-h-10">
          <span className="text-4xl font-bold">{count}</span>
        </div>
        <div className="card-actions grid grid-cols-2 mt-4">
          <button onClick={increment} className="btn btn-success">
            Incrementar
          </button>
          <button onClick={decrement} className="btn btn-error">
            Decrementar
          </button>
          <Reset count={count} setCount={setCount} random={random} />
        </div>
      </div>
    </div>
  );
}

// Se Recomienda no pasar props innecesarias a los componentes.
// Envolver logica en funciones y pasar solo lo necesario.

interface ResetProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  random: () => void;
}

const Reset = ({ count, setCount, random }: ResetProps) => {
  const reset = () => setCount(0);

  return (
    <>
      <button onClick={reset} className="btn btn-primary">
        Reiniciar
      </button>
      <button onClick={random} className="btn btn-secondary">
        Random {count}
      </button>
    </>
  );
};
