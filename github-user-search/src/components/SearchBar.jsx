import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search GitHub user..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
