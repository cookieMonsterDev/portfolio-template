import Link from "next/link";
import { cookies, headers } from "next/headers";
import axios from "axios";
import { ProjectTag } from "@prisma/client";
import { cn } from "@/lib/utils";

const Tags = async ({ title }: { title: string }) => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const { data: tags } = await axios.get(`${baseURL}/api/project-tags`, {
    headers: h,
  });

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
