import { baseURL } from "@/lib/utils";
import { Skill } from "@prisma/client";
import axios from "axios";

export const getSkills = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/skills`);

    return data as Skill[];
  } catch (error) {
    throw error;
  }
};
