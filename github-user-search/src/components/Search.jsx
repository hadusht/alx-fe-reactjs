import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username, location, minRepos, true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mb-6 bg-white shadow-md p-4 rounded-xl max-w-xl mx-auto"
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
  );
}
