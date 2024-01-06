import { Skeleton } from "@/components/ui/skeleton";

const LoadingProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((e) => (
        <div className="col-span-1" key={e}>
          <Skeleton className="w-full h-64" key={e} />
        </div>
      ))}
    </div>
  );
};

export default LoadingProjects;