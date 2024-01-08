import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const res = await prismadb.tag.create({
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
