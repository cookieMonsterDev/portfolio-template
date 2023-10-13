import { GITHUB_API_BASE_URL, GITHUB_USERNAME } from "@/constants/apiEndpoints";
import { Project } from "./types";
import axios from "axios";

const gitHubApi = axios.create({
  baseURL: GITHUB_API_BASE_URL,
});

export const fetchAllRepos = async () => {
  try {
    const { data } = await gitHubApi.get(`/users/${GITHUB_USERNAME}/repos`);

    return data as Project[];
  } catch (error) {
    throw error;
  }
};

export const fetchOneRepo = async (projectName: string) => {
  try {
    const { data } = await gitHubApi.get(
      `repos/${GITHUB_USERNAME}/${projectName}`
    );

    return data as Project;
  } catch (error) {
    throw error;
  }
};
