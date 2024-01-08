import prismadb from "@/lib/prismadb";

export const getImage = async (projectId: string) => {
  try {
    const image = await prismadb.image.findFirst({
      where: {
        projectId,
      },
    });

    return image;
  } catch (error) {
    throw new Error("Image");
  }
};
