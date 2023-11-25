import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const newManufacturing = await prisma.Manufacturing.findMany();

    return NextResponse.json(newManufacturing, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const manufacturing = await request.json();

    const newManufacturing = await prisma.Manufacturing.create({
      data: manufacturing,
    });

    return NextResponse.json(newManufacturing, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error!", { status: 501 });
  }
};
