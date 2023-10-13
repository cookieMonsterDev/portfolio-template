import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const auth = (accessKey: string) =>
  accessKey === process.env.NEXT_PUBLIC_ACCESS_KEY;

export const isBrowser = () => typeof window !== "undefined";
