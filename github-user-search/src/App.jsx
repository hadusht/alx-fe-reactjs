import { useState } from "react";
import Search from "./components/Search.jsx";
import { fetchUserData } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastSearch, setLastSearch] = useState(null);

  const handleSearch = async (
    username,
    location,
    minRepos,
    newSearch = true
  ) => {
    if (!username.trim()) return;

    setLoading(true);
    setError("");

    try {
      const searchOptions = { location, minRepos, page: newSearch ? 1 : page };
      const data = await fetchUserData(username, searchOptions);

      if (newSearch) {
        setUsers(data);
        setPage(2); // next page
      } else {
        setUsers((prev) => [...prev, ...data]);
        setPage((prev) => prev + 1);
      }

      setLastSearch({ username, location, minRepos });
    } catch {
      setUsers([]);
      setError("No users found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (lastSearch) {
      handleSearch(
        lastSearch.username,
        lastSearch.location,
        lastSearch.minRepos,
        false
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        GitHub User Search
      </h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="text-center text-gray-600 mt-4">Loading...</p>}
      {error && (
        <p className="text-center text-red-600 font-medium mt-4">{error}</p>
      )}

      {/* Results */}
      <div className="mt-8 max-w-3xl mx-auto grid gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.login}</h2>
              <p className="text-gray-600">
                {user.location || "Location not available"}
              </p>
              <p className="text-gray-700">Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {users.length > 0 && !loading && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
