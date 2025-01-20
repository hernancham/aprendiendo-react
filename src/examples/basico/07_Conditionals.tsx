import { useState } from "react";

// Comentarios:
// - El renderizado condicional permite mostrar contenido basado en el estado.
// - Usamos operadores ternarios para simplificar las condiciones.

const Conditionals: React.FC = () => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Conditionals</h2>
        <p>Algunos ejemplos de condicionales</p>
        <div>
          <Conditional1 />
          <Conditional2 />
          <Conditional3 />
        </div>
      </div>
    </div>
  );
};

export default Conditionals;

const Conditional1: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  if (isAuthorized) {
    return (
      <div>
        <h1>Acceso permitido</h1>
        <button
          onClick={() => setIsAuthorized(false)}
          className="btn btn-error"
        >
          Salir
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-error">Acceso denegado</h3>
      <button onClick={() => setIsAuthorized(true)} className="btn btn-success">
        Ingresar
      </button>
    </div>
  );
};

const Conditional2: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
      {isLoggedIn ? (
        <div>
          <h1>Bienvenido</h1>
          <h2>Desarrollador</h2>
        </div>
      ) : (
        <h1>Por favor inicia sesión.</h1>
      )}
    </div>
  );
};

const Conditional3: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      {isOpen && (
        <dialog className="relative z-10">
          <div>
            <h1>Titulo</h1>
            <p>Contenido</p>
            <button onClick={() => setIsOpen(false)}>Cerrar Modal</button>
          </div>
        </dialog>
      )}
    </div>
  );
};
