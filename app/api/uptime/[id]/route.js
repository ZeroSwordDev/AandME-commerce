
import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const DELETE = async (request, {params}) => {
const { id } = params;
    try {
      const newUptime = await prisma.Uptime.deleteMany({
        where: {id}
      })
      return   NextResponse.json( newUptime, { status: 200 });
    } catch (error) {
      console.log(error);
      return   NextResponse.json( 'No puedes crear un tamaño', { status: 200 });
    }
  };
  
