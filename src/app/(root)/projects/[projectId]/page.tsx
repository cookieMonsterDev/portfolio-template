import { getProject } from "@/actions/get-project";
import { Heading } from "@/components/ui/heading";
import { ImageLazy } from "@/components/ui/image-lazy";
import { ProjectTag } from "@prisma/client";
import { GanttChartSquare, Github, ImageOff } from "lucide-react";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getProject(params.projectId)

  if(!project) return null;

  return (
    <div className="py-4 grid lg:grid-cols-2 gap-4">
      <div className="w-full p-4 rounded-lg border dark:border-slate-800 col-span-2 lg:col-span-1">
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
      <div className="flex border dark:border-slate-800 rounded-lg order-first col-span-2 lg:col-span-1 lg:order-none">
        {project.image_url ? (
          <ImageLazy
            src={project.image_url || "/no_image.jpg"}
            alt="project-img"
            width={500}
            height={500}
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center border dark:border-slate-800 rounded-lg col-span-2 lg:col-span-1">
            <ImageOff className="w-20 h-20" />
          </div>
        )}
      </div>
      <div className="col-span-2 flex gap-2 flex-wrap">
        {project.github_url && (
          <Link
            href={project.github_url}
            className="p-4 flex items-center justify-center border rounded-lg dark:border-slate-800 hover:border-slate-500 hover:dark:border-slate-300 transition-colors duration-300"
          >
            <Github className="h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24" />
          </Link>
        )}
        {project.deployment_url && (
          <Link
            href={project.deployment_url}
            className="p-4 flex items-center justify-center border rounded-lg dark:border-slate-800 hover:border-slate-500 hover:dark:border-slate-300 transition-colors duration-300"
          >
            <GanttChartSquare className="h-8 w-8 md:h-16 md:w-16 lg:h-24 lg:w-24" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
