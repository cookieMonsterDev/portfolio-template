import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const LoadingProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((e) => (
        <Skeleton className="col-span-1 h-64 w-64" key={e} />
      ))}
    </div>
  );
};

export default LoadingProjects;
