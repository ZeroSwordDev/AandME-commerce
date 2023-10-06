import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  const data = await request.json();
  const { id } = params;

  try {
    await prisma.Size.updateMany({
      where: {
        id: id,
      },
      data: data,
    });

    const updatedRecords = await prisma.Size.findMany({
      where: {
        id: id,
      },
    });

    return NextResponse.json(updatedRecords, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("No puedes crear un tamaño", { status: 200 });
  }
};

export const GET = async (request) => {
  try {
    const getSizes = await prisma.Size.findMany();

    return NextResponse.json(getSizes, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("No puedes VER LOS tamañoS", { status: 500 });
  }
};
