import { useState } from "react";

import { ShoppingCart } from "lucide-react";
import type { Cart as CartType, GuitarItem } from "../types";
import { Cart } from "./cart";

type HeaderProps = {
  cart: CartType[];
  deleteItem: (id: GuitarItem["id"]) => void;
  increaseQuantity: (id: GuitarItem["id"]) => void;
  decreaseQuantity: (id: GuitarItem["id"]) => void;
  emptyCart: (id: GuitarItem["id"]) => void;
};

export function Header({
  cart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
}: HeaderProps) {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive((prev) => !prev);
  }

  return (
    <header className="relative h-50 flex items-end">
      <img
        className="absolute w-full h-full inset-0"
        src="/img/header.jpg"
        alt="hero image"
      />

      <div className="absolute w-full h-full inset-0 bg-black/50 z-10"></div>

      <div className="flex items-end justify-between z-20 max-w-7xl w-[90%] mx-auto pb-10">
        <a className="w-40" href="#">
          <img src="/img/logo.svg" alt="logo image" />
        </a>
        <div className="relative">
          <button className="cursor-pointer" onClick={handleToggle}>
            <ShoppingCart className="text-white" />
          </button>

          {isActive && (
            <div className="absolute right-0 top-10 bg-white shadow-lg p-5 w-120">
              {cart.length === 0 ? (
                <p className="text-center">🛒 El carrito está vacío</p>
              ) : (
                <Cart
                  cart={cart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  deleteItem={deleteItem}
                  emptyCart={emptyCart}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
