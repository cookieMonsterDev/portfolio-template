import prismadb from "@/lib/prismadb";

export const createBlankProject = async () => {
  try {
    const project = await prismadb.project.create({ data: {} });
    return project;
  } catch (error) {
    throw new Error("project");
  }
};
