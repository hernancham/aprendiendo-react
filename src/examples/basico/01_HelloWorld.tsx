import React from "react";

/*
  Cometarios:
  - Los componentes en React son funciones que devuelven JSX.Element.
  - Typescript nos permite controlar el tipo de los componentes, en este caso, React.FC.
*/

export default function HelloWorld(): JSX.Element {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-cyan-400">Hello World!</h2>
        <p>Este es tu primer componente en React</p>
      </div>
    </div>
  );
}

// Alternativamente, podemos definir el componente como una función de flecha y exportarla en la misma línea:

export const HelloWorldAlt: React.FC = () => {
  return <h1>Hello World</h1>;
};
