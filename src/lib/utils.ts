import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodSchema } from "zod";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const auth = (accessKey: string) =>
  accessKey === process.env.NEXT_PUBLIC_ACCESS_KEY;

export const isBrowser = () => typeof window !== "undefined";

export const validator = <T>(obj: T, schema: ZodSchema) => {
  const res = schema.safeParse(obj);

  if (res.success) return null;

  const errors: {
    [key: string]: string[];
  } = {};

  res.error.errors.forEach((e) => {
    const key = e.path[0] as string;
    const message = e.message;

    if (!errors[key]) {
      errors[key] = [message];
    } else {
      errors[key].push(message);
    }
  });

  return errors;
};

export const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.VERCEL_URL
    : process.env.NEXT_PUBLIC_SITE_URL;
