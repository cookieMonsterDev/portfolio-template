import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface Params {
  params: {
    projectId: string;
  };
}

export const GET = async (_req: Request, { params }: Params) => {
  try {
    if (params.projectId === "new") return NextResponse.json(null);

    const res = await prismadb.project.findUnique({
      where: {
        id: params.projectId,
      },
    });
    
    return NextResponse.json(res);
  } catch (error) {
    console.error("GET_PROJECT");
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const PATCH = async (req: Request, { params }: Params) => {
  try {
    const body = await req.json();

    const res = await prismadb.project.updateMany({
      where: {
        id: params.projectId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("PATCH_PROJECT");
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const DELETE = async (_req: Request, { params }: Params) => {
  try {
    const res = await prismadb.project.deleteMany({
      where: {
        id: params.projectId,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("PATCH_PROJECT");
    return new NextResponse("Internal error", { status: 500 });
  }
};
