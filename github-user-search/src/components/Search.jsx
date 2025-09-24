import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await fetchUserData(username, { location, minRepos });
      setUsers(data); // data is an array of users
    } catch {
      setUsers([]);
      setError("No users found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-6 bg-white shadow-md p-4 rounded-xl"
      >
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-lg p-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by location (e.g. San Francisco)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg p-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded-lg p-2 text-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-600 text-center">{error}</p>}

      {/* Results */}
      {users.length > 0 && (
        <div className="flex flex-col gap-4">
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
      )}
    </div>
  );
}
