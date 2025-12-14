"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

function cleanItemName(name) {
  const noSize = name.split(",")[0].trim();
  const noEmoji = noSize.replace(/[\p{Extended_Pictographic}]/gu, "").trim();
  return noEmoji;
}

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <main className="p-6 bg-slate-900 min-h-screen text-white">
        <p>You must be logged in to view the shopping list.</p>
      </main>
    );
  }

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleItemSelect(item) {
    setSelectedItemName(cleanItemName(item.name));
  }

  return (
    <main className="p-6 bg-slate-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-6">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>

        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
