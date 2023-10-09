"use client";

import AddProduct from "@/components/AddProduct";
import { Button } from "@material-tailwind/react";

function page() {
  return (
    <div className="h-full w-full flex flex-col gap-4 m-3">
      <div className="">
       <Button onClick={() => setviewOption("Products")}>Products</Button>
      </div>
      <AddProduct />
    </div>
  );
}

export default page;
