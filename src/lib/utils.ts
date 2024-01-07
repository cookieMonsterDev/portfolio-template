import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodSchema } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isBrowser = () => typeof window !== "undefined";

export const debounse = (fn: Function, ms: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

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
