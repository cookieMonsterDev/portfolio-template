import { BioForm } from "@/components/forms/bio-form";
import { ProjectForm } from "@/components/forms/project-form";
import { SkillsForm } from "@/components/forms/skills-form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";

const DashboardPage = async () => {
  const skills = await prismadb.skill.findMany();
  const bio = await prismadb.bio.findFirst();

  return (
    <>
      <Heading title="Dashboard" description="Manage your profile!" />
      <Separator />
      <div className="grid lg:grid-cols-2 gap-4">
        <BioForm initialData={bio} />
        <SkillsForm initialData={skills || null} />
        {/* <ProjectForm initialData={null} /> */}
      </div>
    </>
  );
};

export default DashboardPage;
