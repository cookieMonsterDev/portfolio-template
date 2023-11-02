import { Post } from "@prisma/client";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import React from "react";

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
    <section className="py-8 flex flex-col space-y-8">
      {posts.map((e: Post) => (
        <article key={e.id}>
          <header className="flex flex-col items-start justify-center text-left mb-4">
            <h2 className="text-3xl flex flex-wrap break-all mb-1">
              <Link
                href={`/blog/${e.id}`}
                className="hover:underline decoration-solid transition duration-300"
              >
                {e.title}
              </Link>
            </h2>
            <p className="opacity-50">
              {format(parseISO(e.createdAt.toString()), "MMMM d, yyyy")}
            </p>
          </header>
          <p className="break-all">{e.desc}</p>
          <Link
            href={`/blog/${e.id}`}
            className="opacity-50 hover:underline hover:opacity-100 decoration-solid transition duration-30"
          >
            Read more
          </Link>
        </article>
      ))}
    </section>
  );
};

export default BlogPage;
