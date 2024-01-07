import { getSkills } from "@/actions/get-skills";
import { SkillsForm } from "@/components/forms/skills-from";

const Skills = async () => {
  const skills = await getSkills();

  return <SkillsForm initialData={skills} />;
};

export default Skills;
