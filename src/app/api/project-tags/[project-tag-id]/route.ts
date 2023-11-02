import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface Params {
  params: {
    "project-tag-id": string;
  };
}

export const DELETE = async (_req: Request, { params }: Params) => {
  try {
    const res = await prismadb.projectTag.deleteMany({
      where: {
        id: params["project-tag-id"],
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("DELETE_PROJECTTAG");
    return new NextResponse("Internal error", { status: 500 });
  }
};
