import axios from "axios";

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUser(username) {
  const response = await axios.get(`${API_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${API_KEY}`, // optional for unauthenticated requests
    },
  });
  return response.data;
}
