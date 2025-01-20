import React from "react";

// Componente funcional
const FunctionalComponent: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="badge badge-primary badge-outline">
      <p>Hola desde un Componente Funcional, {name}!</p>
    </div>
  );
};

// Componente de clase
class ClassComponent extends React.Component<{ name: string }> {
  render() {
    return (
      <div className="badge badge-secondary badge-outline">
        <p>Hola desde un Componente de Clase, {this.props.name}!</p>
      </div>
    );
  }
}

// Comentarios:
// - Las props son argumentos que se pasan a los componentes de React.
// - TypeScript nos permite definir el tipo de las props de un componente.

const Components: React.FC = () => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-blue-400">Componentes</h2>
        <FunctionalComponent name="Hernan" />
        <ClassComponent name="Hernan" />
      </div>
    </div>
  );
};

export default Components;
