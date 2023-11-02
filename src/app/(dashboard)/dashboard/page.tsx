import { BioForm } from "@/components/forms/bio-form";
import { SkillsForm } from "@/components/forms/skills-form";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ProjectColumn, columns } from "./projects/components/columns";
import { format, parseISO } from "date-fns";
import { DataTable } from "@/components/ui/data-table";
import axios from "axios";
import { headers, cookies } from "next/headers";

const DashboardPage = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const { data: skills } = await axios.get(`${baseURL}/api/skills`, {
    headers: h,
  });
  const { data: bio } = await axios.get(`${baseURL}/api/bio`, {
    headers: h,
  });
  const { data: projects } = await axios.get(`${baseURL}/api/projects`, {
    headers: h,
  });

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
