import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface Params {
  params: {
    postId: string;
  };
}

export const PATCH = async (req: Request, { params }: Params) => {
  try {
    const body = await req.json();

    const res = await prismadb.post.updateMany({
      where: {
        id: params.postId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("PATCH_POST");
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const DELETE = async (_req: Request, { params }: Params) => {
  try {
    const res = await prismadb.post.deleteMany({
      where: {
        id: params.postId,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("PATCH_POST");
    return new NextResponse("Internal error", { status: 500 });
  }
};
