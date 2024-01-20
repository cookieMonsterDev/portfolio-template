import prismadb from "@/lib/prismadb";

export const getBio = async () => {
  try {
    const bio = await prismadb.bio.findFirst();

    return bio;
  } catch (error) {
    throw new Error("bio");
  }
};
