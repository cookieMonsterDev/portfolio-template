import React from "react";

interface PostPageProps {
  params: {
    postId: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  return <div>PostPage</div>;
};

export default PostPage;
