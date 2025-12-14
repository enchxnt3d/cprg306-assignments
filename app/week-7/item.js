export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-2 bg-slate-500 rounded shadow flex justify-between">
      <span className="font-semibold">{name}</span>
      <span>Qty: {quantity}</span>
      <span className="italic text-gray-600">{category}</span>
    </li>
  );
}
