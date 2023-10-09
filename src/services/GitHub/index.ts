import { GITHUB_API_BASE_URL, GITHUB_USERNAME } from "@/constants/apiEndpoints";
import { Project } from "./types";

export const getRepos = async () => {
  try {
    const res = await fetch(
      `${GITHUB_API_BASE_URL}users/${GITHUB_USERNAME}/repos`
    );

    const repos = res.json() as unknown as Project[];

    return repos;
  } catch (error) {
    throw error;
  }
};

export const getRepo = async (projectName: string) => {
  try {
    const res = await fetch(
      `${GITHUB_API_BASE_URL}repos/${GITHUB_USERNAME}/${projectName}`
    );

    const repo = res.json() as unknown as Project;

    return repo;
  } catch (error) {
    throw error;
  }
};
