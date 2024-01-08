import { columns } from "../components/columns";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { getProjects } from "@/actions/get-projects";
import { dateTimeFormatter } from "@/lib/utils";

const ProjectsPage = async () => {
  const projects = await getProjects();

  const formatedProjects = projects.map((e) => ({
    id: e.id,
    title: e.title,
    owner: e.owner,
    createdAt: dateTimeFormatter.format(e.createdAt),
    updatedAt: dateTimeFormatter.format(e.updatedAt),
  }));

  return (
    <>
      <div className="flex items-center justify-between p-2 lg:p-8 lg:pt-6">
        <Heading
          title={`Projects: (${formatedProjects.length})`}
          description="Manage your projects here!"
        />
        <Link href="/dashboard/projects/new" className={buttonVariants()}>
          <Plus className="w-4 h-4 mr-2" />
          Add new
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={formatedProjects}
        searchKey="title"
        isSearch={false}
      />
    </>
  );
};

export default ProjectsPage;
