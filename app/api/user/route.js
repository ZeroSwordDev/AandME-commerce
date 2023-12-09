
import users from "@/models/users";
import bcrypt from "bcrypt";

import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const user = await users.find();
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

export const POST = async (request) => {
  try {
    const { fullname, Email, password } = await request.json();


    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = prisma.user.create({
      fullname,
      Email,
      password: hashPassword,
    });

   console.log(user)
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(newUser, { status: 200 });
  }
};
