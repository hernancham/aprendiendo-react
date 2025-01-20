import React from "react";

// Componente funcional
const FunctionalComponent = ({ name }) => {
  return <p>Hola desde un Componente Funcional, {name}!</p>;
};

// Componente de clase
class ClassComponent extends React.Component {
  render() {
    return <p>Hola desde un Componente de Clase, {this.props.name}!</p>;
  }
}

// Comentarios:
// - Los componentes funcionales son más modernos y simples.
// - Los componentes de clase aún se usan, pero son menos comunes.

const Components = () => {
  return (
    <div>
      <FunctionalComponent name="Hernan" />
      <ClassComponent name="Hernan" />
    </div>
  );
};

export default Components;
