import prismadb from "@/lib/prismadb";
import { validator } from "@/lib/utils";
import { NextResponse } from "next/server";
import bioSchema from "../schema";

interface Params {
  params: {
    bioId: string;
  };
}

export const PATCH = async (req: Request, { params }: Params) => {
  try {
    const body = await req.json();

    const errors = validator(body, bioSchema);
    if (errors) {
      return new NextResponse("Validation error", { status: 409 });
    }

    const res = await prismadb.bio.updateMany({
      where: {
        id: params.bioId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    console.error("PATCH_BIO");
    return new NextResponse("Internal error", { status: 500 });
  }
};
