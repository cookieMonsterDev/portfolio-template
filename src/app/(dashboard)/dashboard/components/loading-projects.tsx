import { Skeleton } from "@/components/ui/skeleton";

const LoadingProjects = () => {
  return (
    <div className="lg:col-span-2 overflow-auto">
      {Array.from({ length: 3 }, (_, i) => i + 1).map((e) => (
        <Skeleton key={e} className="w-full h-20 mb-4" />
      ))}
    </div>
  );
};

export default LoadingProjects;
