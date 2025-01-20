import { TypeProducto } from "../types/producto";

interface CardProductProps {
  producto: TypeProducto;
}

export const CardProduct = ({ producto }: CardProductProps) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={producto.imageUrl} alt={producto.nombre} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar</button>
        </div>
      </div>
    </div>
  );
};
