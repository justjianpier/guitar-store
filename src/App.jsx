import { useState } from "react";
import { Guitar } from "./Components/guitar";
import { Header } from "./Components/header";
import { db } from "./db/db";

function App() {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    const itemExist = cart.some((guitar) => guitar.id === item.id);

    if (itemExist) {
      const updatedItem = cart.map((guitar) => {
        if (guitar.id === item.id) {
          return {
            ...guitar,
            quantity: guitar.quantity + 1,
          };
        } else {
          return guitar;
        }
      });
      setCart(updatedItem);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function deleteItem(id) {
    setCart(cart.filter((guitar) => guitar.id !== id));
  }

  function increaseQuantity(id) {
    const updatedItem = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCart(updatedItem);
  }

  function decreaseQuantity(id) {
    const updatedItem = cart.map((item) => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
    })
    setCart(updatedItem)
  }

  function emptyCart() {
    setCart([])
  }

  return (
    <>
      <Header
        cart={cart}
        deleteItem={deleteItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        emptyCart={emptyCart}
      />
      <main className="max-w-7xl w-[90%] mx-auto py-8">
        <h1 className="text-5xl font-black text-amber-400 text-center pb-8">
          Nuestra Colección
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {db.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addItem={addItem} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
