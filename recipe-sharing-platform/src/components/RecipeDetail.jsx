import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading recipe:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading recipe...</p>;
  if (!recipe) return <p className="text-center mt-10">Recipe not found!</p>;

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link to="/" className="inline-block mb-6 text-blue-500 hover:underline">
        ← Back to Home
      </Link>

      {/* Recipe Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            {recipe.title}
          </h1>

          {/* Summary */}
          <p className="text-gray-700 text-base sm:text-lg mb-6 text-center">
            {recipe.summary}
          </p>

          {/* Ingredients */}
          {recipe.ingredients?.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions */}
          {recipe.instructions && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Instructions
              </h2>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {recipe.instructions}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
