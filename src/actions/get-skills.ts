import prismadb from "@/lib/prismadb";

export const getSkills = async () => {
  try {
    const skills = await prismadb.skill.findMany();

    return skills;
  } catch (error) {
    throw new Error('skills');
  }
};
