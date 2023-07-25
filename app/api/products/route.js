import dbConnect from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {

    const db = await dbConnect()
    const products = await db.products.find();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

export const POST = async (request) => {
  try {
    const Products = await request.json();
    const db = await dbConnect();
    const newProducts = new db.products({
      ...Products
    });

   const newProduct = await newProducts.save();
    return NextResponse.json(newProduct, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error!", { status: 501 });
  }
};
