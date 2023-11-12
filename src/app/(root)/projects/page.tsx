import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";
import { Project, ProjectTag } from "@prisma/client";
import axios from "axios";
import { cookies, headers } from "next/headers";
import Link from "next/link";

interface ProjectsPageProps {
  searchParams: {
    title: string;
  };
}

const ProjectsPage = async ({ searchParams }: ProjectsPageProps) => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const url = new URL(`${baseURL}/api/projects`);

  if (searchParams.title) {
    url.searchParams.append("title", searchParams.title);
  }

  const { data: projects } = await axios.get(url.toString(), {
    headers: h,
  });

  const { data: tags } = await axios.get(`${baseURL}/api/project-tags`, {
    headers: h,
  });

  const formatedTags: string[] = [
    ...new Set(tags.map((e: ProjectTag) => e.title)),
  ].sort() as string[];

  return (
    <div className="overflow-hidden pb-6">
      <div className="flex my-4 mb-6 gap-x-4 gap-y-3 flex-wrap">
        <Link
          href={{ pathname: "/projects", query: {} }}
          className={cn(
            "border border-slate-800 px-3 rounded-3xl",
            searchParams.title === undefined &&
              "text-slate-50 bg-slate-950 dark:bg-slate-50 dark:text-slate-950"
          )}
        >
          All
        </Link>
        {formatedTags.map((e: string) => (
          <Link
            key={e}
            href={{
              pathname: "/projects",
              query: { title: e },
            }}
            className={cn(
              "border border-slate-800 px-3 rounded-3xl",
              searchParams.title === e &&
                "text-slate-50 bg-slate-950 dark:bg-slate-50 dark:text-slate-950"
            )}
          >
            {e}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {projects.map((e: Project) => (
          <Link href={`/projects/${e.id}`} key={e.id} className="col-span-1">
            <ProjectCard data={e} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
