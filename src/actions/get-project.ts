import prismadb from "@/lib/prismadb";

export const getProject = async (id: string) => {
  try {
    const project = await prismadb.project.findFirst({
      where: { id },
      include: {
        tags: true,
      },
    });
    return project;
  } catch (error) {
    throw error;
  }
};
