import dbConnect from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    /* GET ALL PRODUCTS */
    const { id } = params;
    const db = await dbConnect();
    const products = await db.products.findById(id);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

export const PUT = async (request, { params }) => {
  try {
    /* PUT ONE PRODUCTS */
    const productUp = await request.json();
    const { id } = params;
    const db = await dbConnect();
    const productsUPDATE = await db.products.findByIdAndUpdate(id, productUp, {
      new: true,
    });

    return NextResponse.json(productsUPDATE, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    /* DELETE ONE PRODUCTS */
    const { id } = params;
    const db = await dbConnect();
    await db.products.findByIdAndDelete(id);

    return NextResponse.json("Product has been deleted!", { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};
