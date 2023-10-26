import axios from "axios";
import { cookies, headers } from "next/headers";

const baseURL =
  process.env.NODE_ENV === "production"
    ? `https://${headers().get("Host")}`
    : process.env.NEXT_PUBLIC_SITE_URL;

const baseHeadrs = { cookie: cookies().toString() };

export const innerApi = axios.create({
  baseURL: baseURL,
  headers: {
    ...baseHeadrs
  },
});
