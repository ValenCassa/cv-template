import pageConfig from "pageConfig.json";
const { postsLimit, projectsLimit } = pageConfig;

interface Limit {
  limit?: boolean;
}

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

export const getProjects = async ({ limit }: Limit) => {
  const limitQuery = limit ? `?limit=${projectsLimit}` : "";

  const data = await fetch(`${BASE_URL}/api/projects${limitQuery}`);

  return data.json();
};

export const getPosts = async ({ limit }: Limit) => {
  const limitQuery = limit ? `?limit=${postsLimit}` : "";
  const data = await fetch(`${BASE_URL}/api/posts${limitQuery}`);

  return data.json();
};
