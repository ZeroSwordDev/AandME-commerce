
import users from "@/models/users";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await users.findByIdAndDelete(id);

    return NextResponse.json("has been deleted!", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error! ", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  try {
    const { fullname, Email, password } = await request.json();

    const Update = await users.findByIdAndUpdate(
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
