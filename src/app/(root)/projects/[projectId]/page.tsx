import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { ProjectTag } from "@prisma/client";
import axios from "axios";
import { GanttChartSquare, Github, ImageOff } from "lucide-react";
import { cookies, headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const h = { cookie: cookies().toString() };

  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const { data: project } = await axios.get(
    `${baseURL}/api/projects/${params.projectId}`,
    {
      headers: h,
    }
  );

  return (
    <div className="py-4 grid lg:grid-cols-2 gap-4">
      <div className="p-4 rounded-lg border dark:border-slate-800">
        <Heading title={project.title} className="pt-0" />
        <p className="font-light">{project.desc}</p>
        <div className="flex items-center flex-wrap py-4 gap-2">
          {project.tags.map((e: ProjectTag) => (
            <span
              key={e.id}
              className="border border-slate-800 px-3 py-1 rounded-3xl bg-slate-950 text-slate-50 dark:bg-slate-50 dark:text-slate-950"
            >
              {e.title}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex">
        {project.image_url ? (
          <Image
            src={project.image_url || "/no_image.jpg"}
            alt="project-img"
            width={500}
            height={500}
            className={cn(
              "lg:flex w-full h-full object-cover rounded-lg",
              !project.image_url ? "object-contain" : ""
            )}
          />
        ) : (
          <div className="hidden w-full h-full lg:flex justify-center items-center border rounded-lg dark:border-slate-800">
            <ImageOff className="w-20 h-20" />
          </div>
        )}
      </div>
      <div className="col-span-2 flex">
        {project.github_url && (
          <Link
            href={project.github_url}
            className="py-8 px-12 border rounded-lg dark:border-slate-800 hover:border-slate-500 hover:dark:border-slate-300 transition-colors duration-300"
          >
            <Github className="h-24 w-24" />
          </Link>
        )}
        {project.deployment_url && (
          <Link
            href={project.deployment_url}
            className="py-8 px-12 border rounded-lg dark:border-slate-800 hover:border-slate-500 hover:dark:border-slate-300 transition-colors duration-300"
          >
            <GanttChartSquare className="h-24 w-24" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
