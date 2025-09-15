// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
// src/components/RecipeList.jsx





  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

 
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe.id);
          return (
            <li key={recipe.id} style={{ marginBottom: "15px" }}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              <p>{recipe.description}</p>
              {isFavorite ? (
                <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
              ) : (
                <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>



export default RecipeList;

