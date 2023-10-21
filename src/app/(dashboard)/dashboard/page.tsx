import { BioForm } from "@/components/forms/bio-form";
import { SkillsForm } from "@/components/forms/skills-form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";

const DashboardPage = async () => {
  const skills = await prismadb.skill.findMany();
  const bio = await prismadb.bio.findFirst();

  return (
    <main className="container min-h-[calc(100vh-110px)]">
      <Heading title="Dashboard" description="Manage your profile!" />
      <Separator />
      <div className="grid lg:grid-cols-2 gap-4">
        <BioForm initialData={bio} />
        <SkillsForm initialData={skills || null} />
        <div className="w-full h-full bg-red-500">yes</div>
        <div className="w-full h-full bg-red-500">yes</div>
      </div>
    </main>
  );
};

export default DashboardPage;
