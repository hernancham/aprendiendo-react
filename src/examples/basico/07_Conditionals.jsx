import { useState } from "react";

// Comentarios:
// - El renderizado condicional permite mostrar contenido basado en el estado.
// - Usamos operadores ternarios para simplificar las condiciones.

const Conditionals = () => {
  return (
    <div>
      <Conditional1 />
      <Conditional2 />
      <Conditional3 />
    </div>
  );
};

export default Conditionals;

const Conditional1 = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  if (isAuthorized) {
    return (
      <div>
        <h1>Acceso permitido</h1>
        <button onClick={() => setIsAuthorized(false)}>Ingresar</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Acceso denegado</h1>
      <button onClick={() => setIsAuthorized(true)}>Ingresar</button>
    </div>
  );
};

const Conditional2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

const Conditional3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      {isOpen && (
        <dialog className="block inset-0 z-50">
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
