import axios from "axios";

const gitHubApi = axios.create({
  baseURL: process.env.API_URL!
});

export default gitHubApi;