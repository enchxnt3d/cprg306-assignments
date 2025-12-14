"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    setQuantity((q) => (q < 20 ? q + 1 : q));
  }

  function decrement() {
    setQuantity((q) => (q > 1 ? q - 1 : q));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).slice(2) + Date.now().toString(36),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 bg-slate-900 p-6 rounded-lg text-white"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Item name"
        className="w-64 px-3 py-2 rounded-md text-black"
      />

      <div className="flex items-center gap-4 bg-white p-1 rounded-lg shadow">
        <span className="text-xl font-bold w-8 text-center text-black">
          {quantity}
        </span>
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          −
        </button>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-64 px-3 py-2 rounded-md text-black"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        className="w-64 py-2 rounded-md bg-green-500 text-black font-semibold hover:bg-green-400"
      >
        Add Item
      </button>
    </form>
  );
}
