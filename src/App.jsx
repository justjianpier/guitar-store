import { Header } from "./Components/header";
import { Guitar } from "./Components/guitar";
import { Alert } from "./Components/alert";
import { db } from "./db/db";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    cart,
    alert,
    addItem,
    deleteItem,
    increaseQuantity,
    decreaseQuantity,
    emptyCart,
  } = useCart();

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
