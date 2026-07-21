import { Cart, GuitarItem } from "../types";

type GuitarProps = {
  cart: Cart[];
  guitar: GuitarItem;
  addItem: (guitar: GuitarItem) => void;
};

export function Guitar({ cart, guitar, addItem }: GuitarProps) {
  const { name, image, description, price } = guitar;

  const cartItem = cart.find((item) => item.id === guitar.id);

  return (
    <div className="flex gap-4 items-center">
      <img className="w-30" src={`/img/${image}.jpg`} alt={name} />

      <div className="space-y-3">
        <h3 className="text-2xl font-black uppercase">{name}</h3>
        <p>{description}</p>
        <p className="text-4xl font-black text-amber-400">${price}</p>
        <button
          className="bg-gray-950 hover:bg-gray-700 text-white px-6 py-2 uppercase font-bold cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => addItem(guitar)}
          disabled={(cartItem?.quantity ?? 0) >= 5}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
