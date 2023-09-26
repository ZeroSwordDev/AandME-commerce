
import prisma from "@/libs/db";
import { NextResponse } from "next/server";



export const GET = async (request) => {
  try {


    const newOptions = await prisma.Option.findMany()

    return   new NextResponse( JSON.stringify(newOptions, { status: 200 }));
  } catch (error) {
    console.log(error);
    return   new NextResponse( JSON.stringify('Server Error', { status: 500 }));
  }
};


export const POST = async (request) => {
    try {
      const options = await request.json();
 

      const newOptions = await prisma.Option.create({
        data: { ...options },
      })
  
      return   new NextResponse( JSON.stringify(newOptions, { status: 200 }));
    } catch (error) {
      console.log(error);
      return   new NextResponse( JSON.stringify('Server Error', { status: 500 }));
    }
  };
  