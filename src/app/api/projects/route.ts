import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {
  try {
    const res = await prismadb.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
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
    console.log(error);
    console.error("POST_PROJECTS");
    return new NextResponse("Internal error", { status: 500 });
  }
};
