import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
  return (
    <>
      <div className="flex items-center justify-between p-8 pt-6">
        <Heading title={`Posts: (${0})`} />
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
