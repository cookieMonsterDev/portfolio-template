import { PostForm } from "@/components/forms/post-form";
import axios from "axios";
import { cookies, headers } from "next/headers";
import React from "react";

interface PostPageProps {
  params: { postId: string };
}

const PostPage = async ({ params }: PostPageProps) => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const h = { cookie: cookies().toString() };

  const { data: post } = await axios.get(
    `${baseURL}/api/posts/${params.postId}`,
    {
      headers: h,
    }
  );

  return <PostForm initialData={post} />;
};

export default PostPage;
