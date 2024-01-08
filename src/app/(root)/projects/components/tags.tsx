import Link from "next/link";
import { cn } from "@/lib/utils";
import { getTags } from "@/actions/get-tags";

type TagsProps = {
  title: string;
};

const Tags = async ({ title }: TagsProps) => {
  const tags = await getTags({});

  if (!tags) return null;

  const formatedTags: string[] = [...new Set(tags.map((e) => e.title))].sort();

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
