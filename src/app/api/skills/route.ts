import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {
  try {
    const res = await prismadb.skill.findMany();

    return NextResponse.json(res);
  } catch (error) {
    console.error("GET_SKILLS");
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const res = await prismadb.skill.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("POST_SKILLS");
    return new NextResponse("Internal error", { status: 500 });
  }
};
