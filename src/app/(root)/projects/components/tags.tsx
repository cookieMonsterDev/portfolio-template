import Link from "next/link";
import { ProjectTag } from "@prisma/client";
import { cn } from "@/lib/utils";
import { getTags } from "@/actions/get-tags";

const Tags = async ({ title }: { title: string }) => {
  const tags = await getTags({ title });

  const formatedTags: string[] = [
    ...new Set(tags.map((e: ProjectTag) => e.title)),
  ].sort() as string[];

  return (
    <div className="flex my-4 mb-6 gap-x-4 gap-y-3 flex-wrap">
      <Link
        href={{ pathname: "/projects", query: {} }}
        className={cn(
          "border border-slate-800 px-3 rounded-3xl",
          title === undefined &&
            "text-slate-50 bg-slate-950 dark:bg-slate-50 dark:text-slate-950"
        )}
      >
        All
      </Link>
      {formatedTags.map((e: string) => (
        <Link
          key={e}
          href={{
            pathname: "/projects",
            query: { title: e },
          }}
          className={cn(
            "border border-slate-800 px-3 rounded-3xl",
            title === e &&
              "text-slate-50 bg-slate-950 dark:bg-slate-50 dark:text-slate-950"
          )}
        >
          {e}
        </Link>
      ))}
    </div>
  );
};

export default Tags;
