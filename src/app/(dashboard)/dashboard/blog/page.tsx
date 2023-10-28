import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import axios from "axios";
import { Plus } from "lucide-react";
import { cookies, headers } from "next/headers";
import Link from "next/link";

const BlogPage = async () => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const { data: posts } = await axios.get(`${baseURL}/api/posts`, {
    headers: h,
  });

  return (
    <>
      <div className="flex items-center justify-between p-8 pt-6">
        <Heading title={`Posts: (${posts.length})`} />
        <Link href="/dashboard/blog/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add new
          </Button>
        </Link>
      </div>
      {/* <DataTable
        columns={columns}
        data={formatedProjects}
        searchKey="title"
        isSearch={false}
      /> */}
    </>
  );
};

export default BlogPage;
