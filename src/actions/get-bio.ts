import { baseURL } from "@/lib/utils";
import { Bio } from "@prisma/client";
import axios from "axios";

export const getBio = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/api/bio`);

    return data as Bio;
  } catch (error) {
    throw error;
  }
};
