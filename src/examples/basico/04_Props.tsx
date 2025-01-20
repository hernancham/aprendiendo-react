import React from "react";

// Comentarios:
// - Las props pueden ser opcionales usando `?`.
// - Puedes definir valores predeterminados con `=`.

interface GreetingProps {
  name: string;
  age?: number; // Prop opcional
  isStudent: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ name, age = 18, isStudent }) => {
  return (
    <div>
      <p>Hola, {name}!</p>
      <p>Tu edad es: {age}</p>
      <p>¿Eres estudiante? {isStudent ? "Sí" : "No"}</p>
    </div>
  );
};

// Comentarios:
// - React.ReactNode es un tipo que representa cualquier cosa que pueda ser renderizada por React.

interface ChildrenProps {
  children: React.ReactNode;
}

function Children({ children }: ChildrenProps) {
  return (
    <div>
      <h3 className="text-yellow-300">Componete Hijo</h3>
      {children}
    </div>
  );
}

const Props: React.FC = () => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-yellow-400">Props</h2>
        <div className="flex gap-4 text-info">
          <Greeting name="Hernan" isStudent={false} />
          <Greeting name="Ander" age={25} isStudent />
        </div>
        <Children>
          <p>
            Children es una propiedad especial que permite pasar elementos
            hijos.
          </p>
        </Children>
      </div>
    </div>
  );
};

export default Props;
