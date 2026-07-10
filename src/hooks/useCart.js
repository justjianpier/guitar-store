import { useEffect, useState } from "react";

export const useCart = () => {
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

  return {
    cart,
    alert,
    addItem,
    deleteItem,
    emptyCart,
    increaseQuantity,
    decreaseQuantity,
  };
};
