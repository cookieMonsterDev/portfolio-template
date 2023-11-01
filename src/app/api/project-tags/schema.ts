import { ProjectTag } from "@prisma/client";
import * as z from "zod";

const projectSchema: z.ZodSchema<Pick<ProjectTag, "title">> = z.object({
  title: z.string().min(1, { message: "Must be at least 1 characters" }),
});

export default projectSchema;
