import { NextResponse } from "next/server";

export const UPDATE = async (request) => {
  try {
    const { order } = await request.json();
    const db = await dbConnect();

    const orderUPDATE = await db.order.findByIdAndUpdate(id, order, {
      new: true,
    });

    return NextResponse.json(orderUPDATE, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

export const DELETE = async (request) => {
  try {
    const db = await dbConnect();

    const orders = await db.orders.find();

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};