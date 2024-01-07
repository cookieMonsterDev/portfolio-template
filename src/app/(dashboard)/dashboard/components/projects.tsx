import { getProjects } from "@/actions/get-projects";
import { Heading } from "@/components/ui/heading";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { dateTimeFormatter } from "@/lib/utils";

const Projects = async () => {
  const projects = await getProjects();

  const formatedProjects = projects.map((e) => ({
    id: e.id,
    title: e.title,
    owner: e.owner,
    createdAt: dateTimeFormatter.format(e.createdAt),
    updatedAt: dateTimeFormatter.format(e.updatedAt),
  }));

  return (
    <div className="lg:col-span-2 overflow-auto">
      <Heading title={`Projects: (${projects.length})`} />
      <DataTable columns={columns} data={formatedProjects} searchKey="title" />
    </div>
  );
};

export default Projects;
