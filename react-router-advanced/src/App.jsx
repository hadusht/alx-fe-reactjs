import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/profile">Profile</Link>
        {!isAuthenticated ? (
          <button
            onClick={() => setIsAuthenticated(true)}
            className="bg-blue-600 px-2 rounded"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 px-2 rounded"
          >
            Logout
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Post />} />

        {/* Protected route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
