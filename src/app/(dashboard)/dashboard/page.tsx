import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import Bio from "./components/bio";
import Skills from "./components/skills";
import Projects from "./components/projects";
import LoadingProjects from "./components/loading-projects";

const DashboardPage = () => {
  return (
    <>
      <Heading title="Dashboard" description="Manage your profile!" />
      <Separator />
      <div className="grid lg:grid-cols-2 gap-6 overflow-hidden">
        <Suspense fallback={<Skeleton className="w-full h-80 m-2" />}>
          <Bio />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-80 m-2" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingProjects />}>
          <Projects />
        </Suspense>
      </div>
    </>
  );
};

export default DashboardPage;
