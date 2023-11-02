import { Bio } from "@prisma/client";
import * as z from "zod";

const bioSchema: z.ZodSchema<Pick<Bio, "text">> = z.object({
  text: z.string().min(50, { message: "Must be at least 50 characters" }),
});

export default bioSchema;
