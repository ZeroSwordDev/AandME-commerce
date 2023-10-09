import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Server Error!", { status: 501 });
  }
};

export const POST = async (request) => {
  try {
    const items = await request.json();
    console.log(items)

    const products = await prisma.Product.create({
      data: items,
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Server Error!", { status: 501 });
  }
};
