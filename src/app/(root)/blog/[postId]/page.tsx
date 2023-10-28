import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { cookies, headers } from "next/headers";
import Content from "./components/content";

interface PostPageProps {
  params: {
    postId: string;
  };
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

  return (
    <>
      <div className="container">
        <Heading title={post.title} description={post.desc}/>
        <Separator />
        <Content data={post.content}/>
      </div>
    </>
  );
};

export default PostPage;
