export function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
}) {
  return (
    <tr className="text-center" key={item.id}>
      <td className="flex items-center justify-center ">
        <img className="w-10" src={`/img/${item.image}.jpg`} alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>$ {item.price * item.quantity}</td>
      <td>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <button
              className="bg-black text-white p-2 rounded disabled:opacity-50 cursor-pointer"
              onClick={() => decreaseQuantity(item.id)}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className="bg-black text-white p-2 rounded disabled:opacity-50 cursor-pointer"
              onClick={() => increaseQuantity(item.id)}
              disabled={item.quantity >= 5}
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
  );
}
