import { BioForm } from "@/components/forms/bio-form";
import { SkillsForm } from "@/components/forms/skills-form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ProjectColumn, columns } from "./projects/components/columns";
import { format } from "date-fns";
import { DataTable } from "@/components/ui/data-table";
import { getBio } from "@/actions/get-bio";
import { getSkills } from "@/actions/get-skills";
import { getProjects } from "@/actions/get-projects";

const DashboardPage = async () => {

  const bio = await getBio();
  const skills = await getSkills();
  const projects = await getProjects();

  const formatedProjects: ProjectColumn[] = projects.map((e) => ({
    id: e.id,
    title: e.title,
    owner: e.owner,
    createdAt: format(e.createdAt, "h:mma dd/MM/yyyy"),
    updatedAt: format(e.updatedAt, "h:mma dd/MM/yyyy"),
  }));

  return (
    <>
      <Heading title="Dashboard" description="Manage your profile!" />
      <Separator />
      <div className="grid lg:grid-cols-2 gap-6 overflow-hidden">
        <BioForm initialData={bio} />
        <SkillsForm initialData={skills || null} />
        <div className="lg:col-span-2 overflow-auto">
          <Heading title={`Projects: (${formatedProjects.length})`} />
          <DataTable
            columns={columns}
            data={formatedProjects}
            searchKey="title"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
