import prismadb from "@/lib/prismadb";

export const getProjects = async (title?: string) => {
  try {
    const projects = await prismadb.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: title
        ? {
            tags: {
              some: {
                title: title,
              },
            },
          }
        : {},
      include: {
        tags: true,
      },
    });
    return projects;
  } catch (error) {
    throw new Error("projects");
  }
};
