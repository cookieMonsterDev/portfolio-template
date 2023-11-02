import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { cookies, headers } from "next/headers";
import Content from "./components/content";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Bot, Facebook, Linkedin, Mail, Twitter } from "lucide-react";

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
      <article className="container p-8">
        <header className="flex flex-col items-start justify-center text-left mb-4">
          <h1 className="text-3xl flex flex-wrap break-all mb-1">
            {post.title}
          </h1>
          <p className="opacity-50">
            {format(parseISO(post.createdAt.toString()), "MMMM d, yyyy")}
          </p>
          <section className="mt-4 flex flex-wrap gap-2">
            
            <Link
              href={`https://twitter.com/share?url=${baseURL}/blog/${post.id}`}
              className="opacity-75 p-[0.5rem] rounded-full border-2 border-slate-800 dark:border-slate-200 hover:opacity-100 transition duration-300"
              aria-label="Twitter share link"
              title="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </Link>

            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${baseURL}/blog/${post.id}`}
              className="opacity-75 p-[0.5rem] rounded-full border-2 border-slate-800 dark:border-slate-200 hover:opacity-100 transition duration-300"
              aria-label="Facebook share link"
              title="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </Link>

            <Link
              href={`https://reddit.com/submit?url=${baseURL}/blog/${post.id}`}
              className="opacity-75 p-[0.5rem] rounded-full border-2 border-slate-800 dark:border-slate-200 hover:opacity-100 transition duration-300"
              aria-label="Reddit share link"
              title="Reddit"
            >
              <Bot className="w-6 h-6" />
            </Link>

            <Link
              href={`https://www.linkedin.com/shareArticle?url=${baseURL}/blog/${post.id}`}
              className="opacity-75 p-[0.5rem] rounded-full border-2 border-slate-800 dark:border-slate-200 hover:opacity-100 transition duration-300"
              aria-label="LinkedIn share link"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>

            <Link
              href="mailto:?subject=<SUBJECT>&body=<BODY>"
              className="opacity-75 p-[0.5rem] rounded-full border-2 border-slate-800 dark:border-slate-200 hover:opacity-100 transition duration-300"
              aria-label="Email share link"
              title="Gmail"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </section>
        </header>
        <Separator />
        <Content data={post.content} />
      </article>
    </>
  );
};

export default PostPage;
