// src/components/recipeStore.js
import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: "1", title: "Pasta", description: "Cheesy pasta", time: 20, ingredients: ["pasta", "cheese"] },
    { id: "2", title: "Salad", description: "Fresh green salad", time: 10, ingredients: ["lettuce", "tomato"] },
    { id: "3", title: "Pizza", description: "Homemade pizza", time: 30, ingredients: ["dough", "cheese", "tomato"] },
  ],
  searchTerm: "",
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase()) ||
          recipe.description.toLowerCase().includes(term.toLowerCase()) ||
          recipe.ingredients.some((ing) =>
            ing.toLowerCase().includes(term.toLowerCase())
          )
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));
