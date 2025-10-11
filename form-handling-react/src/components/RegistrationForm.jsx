// src/components/RegistrationForm.jsx
import React, { useState } from "react";

function RegistrationForm() {
  // Step 1: Form state (controlled inputs)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Step 2: Validation & feedback state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Step 3: Handle input changes (controlled components)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { username, email, password } = formData;

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    // ✅ If valid
    setSuccess(`Registration successful! Welcome, ${username}.`);
    setFormData({ username: "", email: "", password: "" }); // clear form
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
          User Registration
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-2 text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-2 text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border rounded w-full p-2 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
