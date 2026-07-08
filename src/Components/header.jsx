import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function Header({
  cart,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
}) {
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
                <p className="text-center">🛒 El carrito está</p>
              ) : (
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
                        <tr className="text-center" key={item.id}>
                          <td className="flex items-center justify-center ">
                            <img
                              className="w-10"
                              src={`/img/${item.image}.jpg`}
                              alt={item.name}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>$ {item.price}</td>
                          <td>
                            <div className="flex items-center justify-center gap-4">
                              <div className="flex items-center gap-4">
                                <button
                                  className="bg-black text-white p-2 rounded"
                                  onClick={() => decreaseQuantity(item.id)}
                                >
                                  -
                                </button>
                                <p>{item.quantity}</p>
                                <button
                                  className="bg-black text-white p-2 rounded"
                                  onClick={() => increaseQuantity(item.id)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="bg-red-500 w-6 h-6 flex items-center justify-center rounded-full text-white font-semibold"
                              onClick={() => deleteItem(item.id)}
                            >
                              x
                            </button>
                          </td>
                        </tr>
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
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
