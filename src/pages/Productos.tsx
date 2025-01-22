import { PRODUCTOS } from "../data/productos";
import { CardProduct } from "../components/CardProduct";

export const Productos = () => {
  return (
    <div className="min-h-screen bg-base-200 p-8 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold mb-32">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTOS.map((prod, i) => (
          <CardProduct key={i} producto={prod} />
        ))}
      </div>
    </div>
  );
};
