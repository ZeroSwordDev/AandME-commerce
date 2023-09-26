import dbConnect from "@/libs/db";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { rut, addrees, phone, name, email, products, userId, deliveryMethod } =
    await request.json();

  try {
    const db = await dbConnect();
    const Orders = new db.order({
      rut,
      addrees,
      phone,
      name,
      products,
      email,
      userId,
      deliveryMethod,
    });

    const order = await Orders.save();

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found ORDERS", { status: 501 });
  }
};

export const GET = async (request) => {
  try {
    const db = await dbConnect();

    const orders = await db.orders.find();

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};
