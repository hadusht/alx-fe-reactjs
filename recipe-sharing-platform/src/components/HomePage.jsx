import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🍴 Recipe Sharing Platform
      </h1>

      {/* Centered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="w-80 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>

              {/* Optional Ingredients */}
              {recipe.ingredients?.length > 0 && (
                <div className="mt-3">
                  <h3 className="font-medium text-gray-800 mb-1">
                    Ingredients:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
