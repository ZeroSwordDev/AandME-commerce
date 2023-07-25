import dbConnect from "@/libs/db";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await dbConnect();
    const users = await db.user.find();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

export const POST = async (request) => {
  try {
    const { fullname, Email, password } = await request.json();
    const db = await dbConnect();

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = new db.user({
      fullname,
      Email,
      password: hashPassword,
    });

    const newUser = await user.save();
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(newUser, { status: 200 });
  }
};
