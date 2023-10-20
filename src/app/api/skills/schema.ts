import { Skill } from "@prisma/client";
import * as z from "zod";

const skillSchema: z.ZodSchema<Pick<Skill, "name">> = z.object({
  name: z.string().min(2, { message: "Must be" }),
  test: z.string().min(10, { message: "sth wrong" }),
});

export default skillSchema;
