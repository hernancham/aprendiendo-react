import { CardProduct } from "../components/CardProduct";
import { PRODUCTOS } from "../data/productos";

interface ProductoProps {
  id: string;
}

export const Producto = ({ id }: ProductoProps) => {
  const producto = PRODUCTOS.find((producto) => producto.id === id);

  return (
    <div className="min-h-screen bg-base-200 p-5 flex items-center justify-center">
      {producto ? (
        <CardProduct producto={producto} />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold text-lime-300">
            Producto no encontrado
          </h2>
          <p>El producto con id {id} no existe</p>
        </div>
      )}
    </div>
  );
};
