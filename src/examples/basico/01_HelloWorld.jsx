import React from "react";

/* 
  Comentarios:
  1. Importamos React desde la librería de React.
  2. Creamos un componente funcional llamado HelloWorld.
  3. Retornamos un elemento h1 con el texto "Hello World!".
  4. Exportamos el componente por defecto para poder importarlo en otros archivos. 
*/

function HelloWorld() {
  return <h1>Hello World!</h1>;
}

export default HelloWorld;

// Alternativamente, podemos definir el componente como una función de flecha:

const HelloWorldAlt = () => {
  return <h1>Hello World!</h1>;
};

export { HelloWorldAlt };
