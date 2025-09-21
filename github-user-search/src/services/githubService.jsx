import axios from "axios";

const API_URL = "https://api.github.com/users";

/**
 * Fetch user data from GitHub API
 * @param {string} username - GitHub username to search
 * @returns {Promise<object>} - The GitHub user data
 */
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
}
