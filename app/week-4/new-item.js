"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((q) => (q < 20 ? q + 1 : q));
  }

  function decrement() {
    setQuantity((q) => (q > 1 ? q - 1 : q));
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 bg-white p-1 rounded-lg shadow">
        <span className="text-xl font-bold w-8 text-center text-black">
          {quantity}
        </span>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          −
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>
    </div>
  );
}
