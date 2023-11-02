import { ProjectColumn, columns } from "./components/columns";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { format, parseISO } from "date-fns";
import { cookies, headers } from "next/headers";
import axios from "axios";

const ProjectsPage = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

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
      <div className="flex items-center justify-between p-8 pt-6">
        <Heading title={`Projects: (${formatedProjects.length})`} description="Manage your projects here!"/>
        <Link href="/dashboard/projects/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add new
          </Button>
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
