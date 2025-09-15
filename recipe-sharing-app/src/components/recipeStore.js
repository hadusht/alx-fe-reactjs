import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })

  export const useRecipeStore = create((set) => ({
  recipes: [
    { id: '1', title: 'Fluffy Pancakes', description: 'Easy breakfast pancakes everyone loves.' },
    { id: '2', title: 'Spaghetti Pomodoro', description: 'Classic tomato-based spaghetti.' }
  ],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now().toString() }]
    })),

  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      )
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id)
    }))
}));
}));