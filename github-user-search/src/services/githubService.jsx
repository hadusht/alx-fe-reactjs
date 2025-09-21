const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;

export async function fetchRepos(username) {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
  return response.json();
}
