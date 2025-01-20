// Comentarios:
// - TSX es una extensión de archivo que se utiliza para los archivos de React que contienen JSX con TypeScript.
// - JSX es una extensión de sintaxis de JavaScript que permite escribir HTML dentro de JavaScript.
// - TypeScript es un superconjunto de JavaScript que añade tipado estático a JavaScript.

export default function Syntax(): JSX.Element {
  const person = {
    name: "Juan",
    age: 25,
    isStudent: true,
  };

  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-violet-400">Sintaxis JSX</h2>
        <p>Hola, {person.name}!</p>
        <p>Tienes {person.age} años.</p>
        <p>{person.isStudent ? "Eres estudiante." : "No eres estudiante."}</p>
        <p>
          En este ejemplo, estamos utilizando expresiones JavaScript dentro de
          las llaves para mostrar el nombre, la edad y si la persona es
          estudiante o no.
        </p>
      </div>
    </div>
  );
}

// Alternativas si solo se retorna JSX:

export const SyntaxAlt1 = (): JSX.Element => SyntaxAlt2;

const SyntaxAlt2: JSX.Element = <div>Hola</div>;
