export function Guitar({ guitar, addItem }) {
  const { name, image, description, price } = guitar;
  return (
    <div className="flex gap-4 items-center">
      <img className="w-30" src={`/img/${image}.jpg`} alt={name} />

      <div className="space-y-3">
        <h3 className="text-2xl font-black uppercase">{name}</h3>
        <p>{description}</p>
        <p className="text-4xl font-black text-amber-400">${price}</p>
        <button
          className="bg-gray-950 hover:bg-gray-700 text-white px-6 py-2 uppercase font-bold cursor-pointer"
          onClick={() => addItem(guitar)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
