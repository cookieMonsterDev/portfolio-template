import { ProjectCard } from "@/components/project-card";
import { Project } from "@prisma/client";
import axios from "axios";
import { cookies, headers } from "next/headers";
import Link from "next/link";

const ProjectsPage = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const { data: projects } = await axios.get(`${baseURL}/api/projects`, {
    headers: h,
  });

  return (
    <div className="py-[52px] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {projects.map((e: Project) => (
          <Link href={`/projects/${e.id}`} key={e.id}>
            <ProjectCard data={e} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
