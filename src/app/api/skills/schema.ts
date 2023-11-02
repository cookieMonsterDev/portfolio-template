import { Skill } from "@prisma/client";
import * as z from "zod";

const skillSchema: z.ZodSchema<Pick<Skill, "title">> = z.object({
  title: z.string().min(1, { message: "Must be at least 1 characters" }),
});

export default skillSchema;
