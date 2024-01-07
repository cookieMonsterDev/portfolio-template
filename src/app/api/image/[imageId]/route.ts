import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface Params {
  params: {
    imageId: string;
  };
}

export const PATCH = async (req: Request, { params }: Params) => {
  try {
    const body = await req.json();

    const res = await prismadb.image.updateMany({
      where: {
        id: params.imageId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("PATCH_IMAGE");
    return new NextResponse("Internal error", { status: 500 });
  }
};

export const DELETE = async (_req: Request, { params }: Params) => {
  try {
    const res = await prismadb.image.deleteMany({
      where: {
        id: params.imageId,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("DELETE_IMAGE");
    return new NextResponse("Internal error", { status: 500 });
  }
};
