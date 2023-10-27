import { PostForm } from "@/components/forms/post-form";
import React from "react";

interface PostPageProps {
  params: { postId: string };
}

const PostPage = async ({ params }: PostPageProps) => {
  return <PostForm initialData={null} />;
};

export default PostPage;
