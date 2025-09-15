// src/components/recipeStore.js
import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: "1", title: "Pasta", description: "Cheesy pasta", time: 20, ingredients: ["pasta", "cheese"] },
    { id: "2", title: "Salad", description: "Fresh green salad", time: 10, ingredients: ["lettuce", "tomato"] },
    { id: "3", title: "Pizza", description: "Homemade pizza", time: 30, ingredients: ["dough", "cheese", "tomato"] },
    { id: "4", title: "Soup", description: "Hot vegetable soup", time: 25, ingredients: ["carrot", "onion", "celery"] },
  ],

  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Simple mock recommendation: pick random recipes not already in favorites
      const recommended = state.recipes.filter(
        (r) => !state.favorites.includes(r.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
