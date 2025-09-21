import { useState } from "react";
import Search from "./components/SearchBar";
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: "20px" }}>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} width={120} />
          <p>{user.bio || "No bio available"}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
