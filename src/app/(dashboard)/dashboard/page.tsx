import { BioForm } from "@/components/forms/bio-form";
import { SkillsForm } from "@/components/forms/skills-form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { ProjectColumn, columns } from "./projects/components/columns";
import { format, parseISO } from "date-fns";
import { DataTable } from "@/components/ui/data-table";
import { innerApi } from "@/lib/axios";

const DashboardPage = async () => {
  const { data: skills } = await innerApi.get("/api/skills");
  const { data: bio } = await innerApi.get("/api/bio");
  const { data: projects } = await innerApi.get("/api/projects");

  const formatedProjects: ProjectColumn[] = projects.map((e: any) => ({
    id: e.id,
    title: e.title,
    owner: e.owner,
    createdAt: format(parseISO(e.createdAt), "h:mma dd/MM/yyyy"),
    updatedAt: format(parseISO(e.updatedAt), "h:mma dd/MM/yyyy"),
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
