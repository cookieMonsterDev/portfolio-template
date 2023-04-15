import config from "@config";
import axios from "axios";

const gitHubApi = axios.create({
  baseURL: config.git.api_url,
});

export default gitHubApi;
