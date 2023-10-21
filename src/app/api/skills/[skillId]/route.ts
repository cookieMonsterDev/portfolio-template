import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface Params {
  params: {
    skillId: string;
  };
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
