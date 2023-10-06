import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const newOptions = await prisma.Options.findMany();

    return NextResponse.json(newOptions, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const options = await request.json();

    const newOptions = await prisma.Options.create({
      data: options,
    });

    return NextResponse.json(newOptions, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error", { status: 500 });
  }
};
