"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await res.json();
  return data.meals ?? [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    async function load() {
      const result = await fetchMealIdeas(ingredient);
      setMeals(result);
    }

    load();
  }, [ingredient]);

  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">
        Meal Ideas {ingredient && `for ${ingredient}`}
      </h2>

      {!ingredient ? (
        <p className="text-slate-300">Select an item to see meal ideas.</p>
      ) : meals.length === 0 ? (
        <p className="text-slate-300">No meal ideas found.</p>
      ) : (
        <ul className="list-disc pl-5">
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
