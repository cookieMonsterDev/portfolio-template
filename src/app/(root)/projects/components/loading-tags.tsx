import { Skeleton } from "@/components/ui/skeleton";

const LoadingTags = () => {
  return (
    <div className="flex my-4 mb-6 gap-x-4 gap-y-3 flex-wrap">
      {Array.from({ length: 6 }, (_, i) => i + 1).map((e) => (
        <Skeleton className="w-20 h-7 rounded-3xl" key={e} />
      ))}
    </div>
  );
};

export default LoadingTags;
