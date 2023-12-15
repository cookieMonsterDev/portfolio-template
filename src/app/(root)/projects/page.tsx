import { Suspense } from "react";
import LoadingTags from "./components/loading-tags";
import Tags from "./components/tags";
import ProjectList from "./components/project-list";
import LoadingProjects from "./components/loading-projects";

interface ProjectsPageProps {
  searchParams: {
    title: string;
  };
}

const ProjectsPage = async ({ searchParams }: ProjectsPageProps) => {
  return (
    <div className="overflow-hidden pb-6">
      <Suspense fallback={<LoadingTags />}>
        {/* @ts-expect-error Server Component */}
        <Tags />
      </Suspense>
      <Suspense fallback={<LoadingProjects />}>
        {/* @ts-expect-error Server Component */}
        <ProjectList searchParams={searchParams}/>
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
