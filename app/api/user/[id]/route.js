import dbConnect from "@/libs/db";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    const db = await dbConnect();

    await db.user.findByIdAndDelete(id);

    return NextResponse.json("has been deleted!", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error! ", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  try {
    const { fullname, Email, password } = await request.json();
    const db = await dbConnect();

    const Update = await db.user.findByIdAndUpdate(
      params.id,
      { fullname, Email, password },
      { new: true }
    );

    return NextResponse.json(Update, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Server Error!", { status: 500 });
  }
};
