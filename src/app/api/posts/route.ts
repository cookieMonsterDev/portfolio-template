import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {
  try {
    const res = await prismadb.post.findMany();

    return NextResponse.json(res);
  } catch (error) {
    console.error("GET_POSTS");
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const res = await prismadb.post.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("POST_POSTS");
    return new NextResponse("Internal error", { status: 500 });
  }
};
