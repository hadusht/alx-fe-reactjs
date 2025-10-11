import React, { useState } from "react";

function RegistrationForm() {
  // Step 1: Define state variables for controlled inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Form Submitted:", { username, email, password });

    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          User Registration
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Username Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // controlled
            placeholder="Enter username"
            className="border rounded p-2"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // controlled
            placeholder="Enter email"
            className="border rounded p-2"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // controlled
            placeholder="Enter password"
            className="border rounded p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-800 text-white rounded py-2 hover:bg-gray-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
