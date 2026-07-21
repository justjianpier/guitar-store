export function Alert({ alert }) {
  return (
    <div
      className={`fixed top-5 right-5 z-30 rounded bg-green-400 px-6 py-2 text-white shadow-lg transition-all duration-300  ${alert.type === "success" ? "bg-green-400" : "bg-red-400"} `}
    >
      {alert.message}
    </div>
  );
}
