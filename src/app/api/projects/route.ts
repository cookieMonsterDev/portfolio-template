import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || undefined;

    const res = await prismadb.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: title ? {
        tags: {
          some: {
            title: title
          }
        }
      } : {},
      include: {
        tags: true
      }
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("GET_PROJECTS");
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const res = await prismadb.project.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("POST_PROJECTS");
    return new NextResponse("Internal error", { status: 500 });
  }
};
