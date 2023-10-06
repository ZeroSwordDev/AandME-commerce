import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const newOthersOptions = await prisma.OthersOptions.findMany();

    return NextResponse.json(newOthersOptions, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const OthersOptions = await request.json();

    const newOthersOptions = await prisma.OthersOptions.create({
      data: OthersOptions,
    });

    return NextResponse.json(newOthersOptions, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error!", { status: 501 });
  }
};
