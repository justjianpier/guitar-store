import type { Cart, GuitarItem } from "../types";
import { CartItem } from "./cart-item";

type CartProps = {
  cart: Cart[];
  increaseQuantity: (id: GuitarItem["id"]) => void;
  decreaseQuantity: (id: GuitarItem["id"]) => void;
  deleteItem: (id: GuitarItem["id"]) => void;
  emptyCart: () => void;
};

export function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  emptyCart,
}: CartProps) {
  return (
    <>
      <table className="w-full">
        <thead className="border-b border-slate-300">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteItem}
            />
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-2 gap-8 pt-8">
        <button className="bg-amber-400 text-white font-bold  px-6 py-2 cursor-pointer">
          Comprar
        </button>
        <button
          className="bg-black text-white font-bold  px-6 py-2 cursor-pointer"
          onClick={emptyCart}
        >
          Vaciar el Carrito
        </button>
      </div>
    </>
  );
}
