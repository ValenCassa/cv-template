const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const getProjects = async () => {
  const data = await fetch(`${BASE_URL}/api/projects`);

  return data.json();
};

export const getPosts = async () => {
  const data = await fetch(`${BASE_URL}/api/posts`);

  return data.json();
};
