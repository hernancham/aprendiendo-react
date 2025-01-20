const Greeting = ({ name, age = 18, isStudent }) => {
  return (
    <div>
      <p>Hola, {name}!</p>
      <p>Tu edad es: {age}</p>
      <p>¿Eres estudiante? {isStudent ? "Sí" : "No"}</p>
    </div>
  );
};

function Children({ children }) {
  return (
    <div>
      <h2>Children</h2>
      {children}
    </div>
  );
}

const Props = () => {
  return (
    <div>
      <Greeting name="Hernan" isStudent={false} />
      <Greeting name="Ander" age={25} isStudent />
      <Children>
        <p>
          Children es una propiedad especial que permite pasar elementos hijos.
        </p>
      </Children>
    </div>
  );
};

export default Props;
