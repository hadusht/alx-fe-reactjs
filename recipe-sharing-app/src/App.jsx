import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import RecipesList from './components/RecipeList.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import EditRecipeForm from './components/EditRecipeForm.jsx';
//import NewRecipeForm from './components/NewRecipeForm.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList />
      <AddRecipeForm />

       <Router>
      <header style={{ background: '#2c3e50', padding: 12 }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/recipes" style={{ color: '#fff' }}>Recipes</Link>
          <Link to="/recipes/new" style={{ color: '#fff' }}>Add Recipe</Link>
        </nav>
      </header>

      <main>
        <Routes>
          {/* redirect root to /recipes */}
          <Route path="/" element={<Navigate to="/recipes" replace />} />

          {/* list all recipes */}
          <Route path="/recipes" element={<RecipesList />} />

          {/* new recipe form */}
          <Route path="/recipes/new" element={<NewRecipeForm />} />

          {/* recipe details (dynamic id from URL) */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          {/* edit recipe (also dynamic id) */}
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
        </main>
    </Router>
    </>
  )
}


<div style={{ padding: "20px" }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    


export default App
