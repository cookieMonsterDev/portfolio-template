import prismadb from "@/lib/prismadb";
import { validator } from "@/lib/utils";
import { NextResponse } from "next/server";
import projectSchema from "./schema";


export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId") || undefined;
    const title = searchParams.get("title") || undefined;

    if(projectId === 'new') return NextResponse.json(null)

    const res = await prismadb.projectTag.findMany({
      where: {
        projectId,
        title,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("GET_PROJECTTAGS");
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const errors = validator(body, projectSchema);
    if (errors) {
      return new NextResponse("Validation error", { status: 409 });
    }

    const res = await prismadb.projectTag.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("POST_PROJECTTAGS");
    return new NextResponse("Internal error", { status: 500 });
  }
};
