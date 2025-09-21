import { useState } from "react";
import Search from "./components/Search.jsx";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    try {
      setError("");
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setUser(null);
      setError("User not found. Please try again.");
    }
  };

  return <Search />;
}

export default App;
