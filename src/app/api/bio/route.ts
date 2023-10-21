import prismadb from "@/lib/prismadb";
import { validator } from "@/lib/utils";
import { NextResponse } from "next/server";
import bioSchema from "./schema";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const errors = validator(body, bioSchema);
    if (errors) {
      return new NextResponse("Validation error", { status: 409 });
    }

    const res = await prismadb.bio.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("POST_BIO");
    return new NextResponse("Internal error", { status: 500 });
  }
};