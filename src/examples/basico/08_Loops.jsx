const Loops = () => {
  const items = ["Manzana", "Banana", "Naranja"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Loops;

// Comentarios:
// - Siempre usa una propiedad `key` única al renderizar listas.
// - Las claves (`key`) ayudan a React a identificar cambios en los elementos.
