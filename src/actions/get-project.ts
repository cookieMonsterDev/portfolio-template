import prismadb from "@/lib/prismadb";

export const getProject = async (id: string) => {
  try {
    if (id === "new") return null;

    const project = await prismadb.project.findFirst({
      where: { id },
      include: {
        tags: true,
        image: true,
      },
    });

    return project;
  } catch (error) {
    throw new Error("project");
  }
};
