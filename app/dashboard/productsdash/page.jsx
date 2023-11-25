"use client";

import AddOptions from "@/components/AddOptions";
import AddProduct from "@/components/AddProduct";
import AddSizes from "@/components/AddSizes";
import AddUptimes from "@/components/AddUptimes";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

function page() {
  const [currentPage, setCurrentPage] = useState('Products');
  return (
    <div className="h-full w-full flex flex-col gap-4 m-3">
      <div className=" flex   gap-3">
       <Button onClick={() => setCurrentPage("Products")}>Products</Button>
       <Button onClick={() => setCurrentPage("Options")}>Options</Button>
       <Button onClick={() => setCurrentPage("Sizes")}>Sizes</Button>
       <Button onClick={() => setCurrentPage("Uptimes")}>Uptimes</Button>
      </div>
      {currentPage === "Products" && <AddProduct /> }
      {currentPage === "Options" && <AddOptions /> }
      {currentPage === "Sizes" && <AddSizes /> }
      {currentPage === "Uptimes" && <AddUptimes /> }
    </div>
  );
}

export default page;
