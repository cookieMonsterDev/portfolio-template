import prismadb from "@/lib/prismadb";
import { validator } from "@/lib/utils";
import { NextResponse } from "next/server";
import skillSchema from "../schema";

interface Params {
  params: {
    skillId: string;
  };
}

export const PATCH = async (req: Request, { params }: Params) => {
  try {
    const body = await req.json();

    const errors = validator(body, skillSchema);
    if (errors) {
      return new NextResponse("Validation error", { status: 409 });
    }

    const res = await prismadb.skill.updateMany({
      where: {
        id: params.skillId,
      },
      data: {
        ...body
      }
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("PATCH_SKILL");
    return new NextResponse("Internal error", { status: 500 });
  }
}

export const DELETE = async (_req: Request, { params }: Params) => {
  try {
    const res = await prismadb.skill.deleteMany({
      where: {
        id: params.skillId,
      },
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("DELETE_SKILL");
    return new NextResponse("Internal error", { status: 500 });
  }
};
