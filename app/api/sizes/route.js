
import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {

  const data = await request.json();
    try {
      const newSizes = await prisma.Size.create({
        data: data
      })
      return   NextResponse.json( newSizes, { status: 200 });
    } catch (error) {
      console.log(error);
      return   NextResponse.json( 'No puedes crear un tamaño', { status: 200 });
    }
  };
  

  
export const GET = async (request) => {
  try {
    const getSizes = await prisma.Size.findMany()

    return   NextResponse.json( getSizes, { status: 200 });
  } catch (error) {
    console.log(error);
    return   NextResponse.json( 'No puedes VER LOS tamañoS', { status: 500 });
  }
};