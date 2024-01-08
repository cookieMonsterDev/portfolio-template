import { Skeleton } from "@/components/ui/skeleton";

const Projectloading = () => {
  return (
    <div className="py-4 grid lg:grid-cols-2 gap-4">
      <div className="w-full rounded-lg col-span-2 lg:col-span-1 -z-10">
        <Skeleton className="min-h-96 w-full -z-10" />
      </div>
      <div className="flex rounded-lg order-first col-span-2 lg:col-span-1 lg:order-none">
        <Skeleton className="min-h-96 w-full" />
      </div>
      <div className="col-span-2 flex gap-2 flex-wrap">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((e) => (
          <Skeleton
            className="h-16 w-16 md:h-16 md:w-16 lg:h-24 lg:w-24"
            key={e}
          />
        ))}
      </div>
    </div>
  );
};

export default Projectloading;
