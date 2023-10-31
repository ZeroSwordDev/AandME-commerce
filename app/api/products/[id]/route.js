import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    /* GET ALL PRODUCTS */
    const { id } = params;

    const products = await prisma.product.findMany({
      where: { id },
      include: {
        Option: {
          include: {
            manufacturing: true,
            optionsAll: true,
          }
        },
        Uptime: true,
        Size: true,
      },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

export const PUT = async (request, { params }) => {
  try {
    /* PUT ONE PRODUCTS */
    const productUp = await request.json();
    const { id } = params;
     await prisma.product.updateMany(
      { where: id , data: productUp }
    )

    const productsUPDATE = prisma.product.findMany();


    return NextResponse.json(productsUPDATE, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    await prisma.product.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(id, { status: 200 });
  } catch (error) {
    return NextResponse.json("dataBase not found Users", { status: 501 });
  }
};

/* 
model Product {
  id        String   @id @default(uuid()) @map("_id")
  name      String
  desc      String
  price     Int
  image     String
  amount    String?
  size      String?
  uptimeIds String[] @default([])
  uptime    Uptime[] @relation(fields: [uptimeIds], references: [id])
}

model Option {
  id     String @id @default(uuid()) @map("_id")
  name   String @unique
  values Json[]
}

model Size {
  id         String   @id @default(uuid()) @map("_id")
  amount     String
  size       Int      @default(0)
  productsId String[] @default([])
}

model Uptime {
  id         String   @id @default(uuid()) @map("_id")
  name       String
  agg        Int      @default(0)
  productsId String[] @default([])
  Product    Product? @relation(fields: [productsId], references: [id])
}
 */
