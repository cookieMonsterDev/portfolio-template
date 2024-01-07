import prismadb from "@/lib/prismadb";

type GetTagsProps = {
  projectId?: string;
  title?: string;
};

export const getTags = async ({ projectId, title }: GetTagsProps) => {
  try {
    if (projectId === "new") return null;

    const tags = await prismadb.tag.findMany({
      where: {
        projectId,
        title,
      },
    });

    return tags;
  } catch (error) {
    throw new Error("tags");
  }
};
