// Comentarios:
// - Los elementos JSX deben estar envueltos en un solo elemento padre.
// - JSX permite insertar expresiones JavaScript dentro de llaves `{}`.
// - JSX utiliza atributos camelCase como `className` en lugar de `class` en HTML.
// - Por Convención, los componentes de React se nombran con la primera letra en mayúscula.

function Syntax() {
  const name = "Hernan";
  const age = 22;
  const isStudent = true;

  return (
    <div>
      <h1>Hola, {name}!</h1>
      <p>Tienes {age} años.</p>
      <p>{isStudent ? "Eres estudiante." : "No eres estudiante."}</p>
      <p>
        En este ejemplo, estamos utilizando expresiones JavaScript dentro de las
        llaves para mostrar el nombre, la edad y si la persona es estudiante o
        no.
      </p>
    </div>
  );
}

export default Syntax;

// Alternativas si solo se retorna JSX:

const SyntaxAlt1 = () => <div>Hola</div>;
export { SyntaxAlt1 };

const SyntaxAlt2 = <div>Hola</div>;
export { SyntaxAlt2 };
