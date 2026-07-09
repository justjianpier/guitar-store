import { useEffect, useState } from "react";
import { Guitar } from "./Components/guitar";
import { Header } from "./Components/header";
import { db } from "./db/db";
import { Alert } from "./Components/alert";

function App() {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) return;

    const timer = setTimeout(() => {
      setAlert(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [alert]);

  function showAlert(message, type = "success") {
    setAlert({ message, type });
  }

  const MIN_QUANTITY = 1;
  const MAX_QUANTITY = 5;

  function addItem(item) {
    const itemExist = cart.some((guitar) => guitar.id === item.id);

    if (itemExist) {
      const updatedItem = cart.map((guitar) => {
        if (guitar.id === item.id) {
          if (guitar.quantity >= MAX_QUANTITY) {
            return guitar;
          }
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

    showAlert(`${item.name} fue agregado correctamente`);
  }

  function deleteItem(id) {
    setCart(cart.filter((guitar) => guitar.id !== id));
    showAlert("Se eliminó del carrito correctamente", "error");
  }

  function increaseQuantity(id) {
    const updatedItem = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_QUANTITY) {
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
      if (item.id === id && item.quantity > MIN_QUANTITY) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    setCart(updatedItem);
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <>
      {alert && <Alert alert={alert} />}
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
            <Guitar
              key={guitar.id}
              cart={cart}
              guitar={guitar}
              addItem={addItem}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
