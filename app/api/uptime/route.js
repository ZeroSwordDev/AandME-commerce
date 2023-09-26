
import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {

  const data = await request.json();
    try {
      const newUptime = await prisma.Uptime.create({
        data: data
      })
      return   NextResponse.json( newUptime, { status: 200 });
    } catch (error) {
      console.log(error);
      return   NextResponse.json( 'No puedes crear un tamaño', { status: 200 });
    }
  };
  

  
export const GET = async (request) => {
  try {
    const getUptime = await prisma.Uptime.findMany()

    return   NextResponse.json( getUptime, { status: 200 });
  } catch (error) {
    console.log(error);
    return   NextResponse.json( 'No puedes VER LOS tamañoS', { status: 500 });
  }
};