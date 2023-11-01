import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import axios from "axios";
import { Plus } from "lucide-react";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import { columns } from "./components/columns";
import { format, parseISO } from "date-fns";

const BlogPage = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const { data: posts } = await axios.get(`${baseURL}/api/posts`, {
    headers: h,
  });

  const formatedPosts = posts.map((e: any) => ({
    id: e.id,
    title: e.title,
    createdAt: format(parseISO(e.createdAt), "h:mma dd/MM/yyyy"),
    updatedAt: format(parseISO(e.updatedAt), "h:mma dd/MM/yyyy"),
  }));

  return (
    <>
      <div className="flex items-center justify-between p-8 pt-6">
        <Heading title={`Posts: (${posts.length})`} description="Manage your posts here!"/>
        <Link href="/dashboard/blog/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add new
          </Button>
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={formatedPosts}
        searchKey="title"
        isSearch={false}
      />
    </>
  );
};

export default BlogPage;
