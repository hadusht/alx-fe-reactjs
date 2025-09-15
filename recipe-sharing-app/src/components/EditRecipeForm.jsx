// RecipeDetails component
  


  // src/components/EditRecipeForm.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore"; // adjust path if needed

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (recipe) {
      setForm({
        title: recipe.title || "",
        description: recipe.description || "",
      });
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Recipe not found</h2>
      </div>
    );
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ explicit event.preventDefault
    updateRecipe(id, form);
    navigate(`/recipes/${id}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Recipe</h1>
      {/* ✅ real <form> element */}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* ✅ must include at least one <button> */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
