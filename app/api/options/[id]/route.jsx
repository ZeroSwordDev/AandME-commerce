import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const data = await request.json();
  try {
    await prisma.Options.updateMany({
      where: {
        id: id,
      },
      data: data,
    });

    const optionsUpdate = await prisma.Options.findMany({
      where: {
        id: id,
      },
    });

    return NextResponse.json(optionsUpdate, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error", { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    const findOneOption = await prisma.Options.findMany({
      where: {
        id: id,
      },
      include: {
        manufacturing: true,
        optionsAll: true
      },
    });

    return NextResponse.json(findOneOption, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error", { status: 500 });
  }
};


export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    const findOneOption = await prisma.Options.deleteMany({
      where: {
        id
      }
    });

    return NextResponse.json('Has been deleted Sucefully!', { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error", { status: 500 });
  }
};