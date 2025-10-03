import axios from "axios";

const API_URL = "https://api.github.com";
//const API_URL = "https://api.github.com/search/users?q";

/**
 * Fetch user data from GitHub API with advanced search
 * @param {string} username - GitHub username to search
 * @param {object} options - Extra filters (location, minRepos, page)
 * @returns {Promise<object[]>} - List of GitHub users
 */
export async function fetchUserData(username, options = {}) {
  try {
    let query = username;

    if (options.location) {
      query += ` location:${options.location}`;
    }

    if (options.minRepos) {
      query += ` repos:>=${options.minRepos}`;
    }

    const page = options.page || 1;

    // Search users with query
    const searchResponse = await axios.get(
      `${API_URL}/search/users?q=${encodeURIComponent(
        query
      )}&page=${page}&per_page=5`
    );

    if (searchResponse.data.items.length === 0) {
      throw new Error("No users found");
    }

    // Fetch detailed info for each user (since search results are limited)
    const detailedUsers = await Promise.all(
      searchResponse.data.items.map(async (u) => {
        const userResponse = await axios.get(`${API_URL}/users/${u.login}`);
        return userResponse.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
}
