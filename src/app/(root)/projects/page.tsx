import { Suspense } from "react";
import Tags from "./components/tags";
import LoadingTags from "./components/loading-tags";
import Projects from "./components/projects";
import LoadingProjects from "./components/loading-projects";

type ProjectsPagseProps = {
  searchParams: {
    title: string;
  };
};

const ProjectsPage = ({ searchParams }: ProjectsPagseProps) => {
  return (
    <>
      <Suspense fallback={<LoadingTags />}>
        <Tags title={searchParams.title} />
      </Suspense>
      <Suspense fallback={<LoadingProjects />}>
        <Projects title={searchParams.title} />
      </Suspense>
    </>
  );
};

export default ProjectsPage;
